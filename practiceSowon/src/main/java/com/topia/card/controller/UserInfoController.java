
package com.topia.card.controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.topia.card.HomeController;
import com.topia.card.common.CommonUtil;
import com.topia.card.service.UserInfoService;
import com.topia.card.vo.PageVO;
import com.topia.card.vo.UserInfoCareerVO;
import com.topia.card.vo.UserInfoEduVO;
import com.topia.card.vo.UserInfoLicenVO;
import com.topia.card.vo.UserInfoQualifiVO;
import com.topia.card.vo.UserInfoSkillVO;
import com.topia.card.vo.UserInfoTrainingVO;
import com.topia.card.vo.UserInfoVO;


@Controller
public class UserInfoController 
{
	@Autowired
	UserInfoService userInfoService;
	
	
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	
	/* user_info insert�κ� */
	@RequestMapping(value="/card/personCardInsert.do", method = {RequestMethod.POST})
	@ResponseBody
	public String personCardInsert(Locale locale, UserInfoVO vo, UserInfoEduVO eduVo
			, UserInfoLicenVO LicenVo, UserInfoQualifiVO qualifiVO
			, UserInfoTrainingVO trainingVO, UserInfoCareerVO careerVO, UserInfoSkillVO skillVO,HttpServletRequest request) throws Exception
	{
		HashMap<String, String> result = new HashMap<String, String>();
		CommonUtil commonUtil = new CommonUtil();
		
		// ���� �������
		String savePath = request.getRealPath("/resources/upload");
		
		String user_file	= fileUpload( vo.getImgFileReal(), savePath );	// fileUpload�� �Ʒ��� �޼���� ������ ������ �̸��� �����ϱ� ���� ����
		
		vo.setImgFile(user_file);
		
		int num = userInfoService.personCardInsert(vo, eduVo, LicenVo, qualifiVO, trainingVO, careerVO, skillVO);
		
		result.put("success", (num > 0) ? "Y" : "N");
		
		
		String callbackMsg = commonUtil.getJsonCallBackString(" ", result);

		System.out.println("callbackMsg::" + callbackMsg);

		/* userIdx �� ���� */
		
		return callbackMsg;

		
	}
	
	
	private String fileUpload( MultipartFile multipartFile, String savePath ) {
		String 	fileName = null;
		String 	originFilename 	= multipartFile.getOriginalFilename();
		
		if( originFilename == null || originFilename.equals("") ) {
			return "";
		}
		
		try {
			// ���� ����
			Long size = multipartFile.getSize();
			
			// �������� ���� �� ���� �̸�
			fileName = genSaveFileName(originFilename);		// ���⼭ ������ ������ �̸��� ������ ��´�.genSaveFileName�� ��¥, �ð��� ���ϸ� �տ� �ٿ��� �����ϱ� ����
			writeFile(multipartFile, fileName, savePath);	// whiteFile�� �Ʒ��Ʒ��� �޼��忡�� ��¥,�ð��� ���� ������ ������ �����ϱ� ����
		}
		catch (IOException e) {
			throw new RuntimeException(e);
		}
		
		return fileName;
	}
		
	private String genSaveFileName(String extName) {
		String fileName = "";
		
		Calendar calendar = Calendar.getInstance();
		fileName += calendar.get(Calendar.YEAR);
		fileName += calendar.get(Calendar.MONTH);
		fileName += calendar.get(Calendar.DATE);
		fileName += calendar.get(Calendar.HOUR);
		fileName += calendar.get(Calendar.MINUTE);
		fileName += calendar.get(Calendar.SECOND);
		fileName += calendar.get(Calendar.MILLISECOND);
		fileName += extName;
		
		return fileName;	// ��¥, �ð��� ���̰� �������ش�
	}

	private boolean writeFile(MultipartFile multipartFile, String saveFileName, String savePath)throws IOException{
		boolean result = false;

		byte[] data = multipartFile.getBytes();
		FileOutputStream fos = new FileOutputStream(savePath + "/" + saveFileName);
		fos.write(data);
		fos.close();
		System.out.println("121231212 = "+data);
		return result;
		
	}
	
	
	@RequestMapping(value="/card/userInfoRead.do", method = {RequestMethod.POST, RequestMethod.GET})
	/* @ResponseBody */
	public String userInfoRead(Model model, UserInfoVO vo, @RequestParam(defaultValue="1") int pageNo1) throws Exception
	{
		List<UserInfoVO> list = new ArrayList<UserInfoVO>();
		int cnt = 0;
		
		// �˻� ����
		cnt = userInfoService.userInfoReadCnt(vo);
		//����¡===================================
		PageVO paging = new PageVO();
		paging.setPageNo1(vo.getPageNo1()); 
		paging.setPageSize(vo.getUserInfoDataSize()); 
		paging.setTotalCount(cnt);
		//========================================
		// ����Ʈ ���
		list = userInfoService.userInfoRead(vo);

		
		model.addAttribute("paging", paging);
		model.addAttribute("list", list);
		model.addAttribute("cnt", cnt);
		model.addAttribute("paging", paging);
		
		return "userInfoRead";
			
	}
	
	@RequestMapping(value="/card/searhYear.do", method = RequestMethod.POST)
	public String searchYear(UserInfoVO vo, Model model) throws Exception
	{
		List<UserInfoVO> searchYear = new ArrayList<UserInfoVO>();
		
		searchYear = userInfoService.searchYear(vo);
		
		model.addAttribute("searchYear", searchYear);
		return "searchYear";
		
	}
	
	@RequestMapping(value="/card/personInfo.do", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> personInfo(UserInfoVO vo) throws Exception
	{
		Map<String, Object> map = new HashMap<String, Object>();
		// �⺻���� �ҷ�����
		UserInfoVO userInfo = userInfoService.userInfoDetail(vo);
		List<UserInfoEduVO> eduList = userInfoService.eduDetailList(vo.getUserIdx());
		List<UserInfoQualifiVO> qualifiList = userInfoService.qualifiDetailList(vo.getUserIdx());
		List<UserInfoCareerVO> careerList = userInfoService.careerDetailList(vo.getUserIdx());
		List<UserInfoTrainingVO> trainList = userInfoService.trainingDetailList(vo.getUserIdx());
		List<UserInfoLicenVO> licenList = userInfoService.licenDetailList(vo.getUserIdx());
		List<UserInfoSkillVO> skillList = userInfoService.skillDetailList(vo.getUserIdx());
		
		map.put("userInfo", userInfo); 
		map.put("eduDetailList", eduList);
		map.put("qualifiList", qualifiList);
		map.put("careerList",careerList);
		map.put("trainList", trainList);
		map.put("licenList", licenList);
		map.put("skillList", skillList);
		
		return map;
		
	}
	
	@RequestMapping(value="/card/personCardUpdate.do", method = RequestMethod.POST)
	@ResponseBody
	public Map personCardUpdate(UserInfoVO vo, UserInfoEduVO eduVO, UserInfoQualifiVO qualifiVO
			, UserInfoCareerVO careerVO, UserInfoTrainingVO trainingVO, UserInfoLicenVO licenVO, UserInfoSkillVO skillVO) throws Exception
	
	{
		HashMap<String, String> result = new HashMap<String, String>();
		
		int num = userInfoService.personCardUpdate(vo, eduVO,qualifiVO,careerVO,trainingVO,licenVO,skillVO);
		
		if(num == 1) {
			result.put("result", "success");
		}else if(num < 1) {
			result.put("result", "fail");
		}

		return result;		
	}
	
	
	@RequestMapping(value = "/card/searchYearDetail.do", method = RequestMethod.POST)
	public String searchYearDetail(UserInfoVO vo, Model model,@RequestParam(defaultValue="1") int pageNo1) throws Exception
	{
		List<UserInfoVO> list = new ArrayList<UserInfoVO>();
		list = userInfoService.searchYearDetail(vo);
		int cnt = 0;
		
		// �˻� ����
		cnt = userInfoService.searchYearCnt(vo.getCareer());
		//����¡===================================
		PageVO paging = new PageVO();
		paging.setPageNo1(vo.getPageNo1()); 
		paging.setPageSize(vo.getUserInfoDataSize()); 
		paging.setTotalCount(cnt);
		
		/* System.out.println("������������ :" + paging.getFinalPageNo()); */
		//========================================
		model.addAttribute("list", list);
		model.addAttribute("paging", paging);
		model.addAttribute("career", vo.getCareer());
		
		return "searchYearDetail";	
	}
}


package com.topia.card.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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

	
	/* user_info insert부분 */
	@RequestMapping(value="/card/personCardInsert.do", method = {RequestMethod.POST})
	@ResponseBody
	public String personCardInsert(Locale locale, UserInfoVO vo, UserInfoEduVO eduVo
			, UserInfoLicenVO LicenVo, UserInfoQualifiVO qualifiVO
			, UserInfoTrainingVO trainingVO, UserInfoCareerVO careerVO, UserInfoSkillVO skillVO) throws Exception
	{
		HashMap<String, String> result = new HashMap<String, String>();
		CommonUtil commonUtil = new CommonUtil();
		
		int num = userInfoService.personCardInsert(vo, eduVo, LicenVo, qualifiVO, trainingVO, careerVO, skillVO); 
		
		
		
		result.put("success", (num > 0) ? "Y" : "N");
		
		
		String callbackMsg = commonUtil.getJsonCallBackString(" ", result);

		System.out.println("callbackMsg::" + callbackMsg);

		/* userIdx 값 전달 */
		
		return callbackMsg;

		
	}
	
	@RequestMapping(value="/card/userInfoRead.do", method = {RequestMethod.POST, RequestMethod.GET})
	/* @ResponseBody */
	public String userInfoRead(Model model, UserInfoVO vo, @RequestParam(defaultValue="1") int pageNo1) throws Exception
	{
		List<UserInfoVO> list = new ArrayList<UserInfoVO>();
		int cnt = 0;
		
		// 검색 갯수
		cnt = userInfoService.userInfoReadCnt(vo);
		//페이징===================================
		PageVO paging = new PageVO();
		paging.setPageNo1(vo.getPageNo1()); 
		paging.setPageSize(10); 
		paging.setTotalCount(cnt);
		//========================================
		// 리스트 출력
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
		// 기본정보 불러오기
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
	public Map personCardUpdate(UserInfoVO vo) throws Exception
	{
		HashMap<String, String> result = new HashMap<String, String>();
		System.out.println("controller = " + vo.getUserIdx());
		int num = userInfoService.personCardUpdate(vo);
		
		if(num == 1) {
			result.put("result", "success");
		}else if(num < 1) {
			result.put("result", "fail");
		}


		return result;
		
	}
}

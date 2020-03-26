
package com.topia.card.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.topia.card.HomeController;
import com.topia.card.common.CommonUtil;
import com.topia.card.service.UserInfoService;
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
	
	@RequestMapping(value="/card/userInfoRead.do", method = RequestMethod.POST)
	/* @ResponseBody */
	public String userInfoRead(Model model, UserInfoVO vo) throws Exception
	{
		List<UserInfoVO> list = new ArrayList<UserInfoVO>();
		list = userInfoService.userInfoRead(vo);
		System.out.println(vo.getUserGender());
		
		model.addAttribute("list", list);
		
		return "userInfoRead";
			
	}
}

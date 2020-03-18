
package com.topia.card.controller;

import java.util.HashMap;
import java.util.Locale;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.topia.card.HomeController;
import com.topia.card.common.CommonUtil;
import com.topia.card.dao.PersonCardDAO;
import com.topia.card.vo.UserInfoVO;


@Controller
public class PersonCardController 
{
	@Autowired
	private SqlSession sqlsession;
	
	
	public void setSqlsession(SqlSession sqlsession) {
		this.sqlsession = sqlsession;
	}
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	
	/* user_info insertºÎºÐ */
	@RequestMapping(value="/card/personCardInsert.do", method = {RequestMethod.POST})
	@ResponseBody
	public String personCardInsert(Locale locale, UserInfoVO vo) throws Exception
	{
		HashMap<String, String> result = new HashMap<String, String>();
		CommonUtil commonUtil = new CommonUtil();
		
		PersonCardDAO dao = sqlsession.getMapper(PersonCardDAO.class);
		int num = dao.personCardInsert(vo);
		
		result.put("success", (num > 0) ? "Y" : "N");
		
		
		String callbackMsg = commonUtil.getJsonCallBackString(" ", result);

		System.out.println("callbackMsg::" + callbackMsg);

		return callbackMsg;

		
	}
}

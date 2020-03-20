package com.topia.card.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.topia.card.dao.UserInfoDAO;
import com.topia.card.service.UserInfoService;
import com.topia.card.vo.UserInfoVO;


@Service
public class UserInfoServiceImpl implements UserInfoService
{
	@Autowired
	UserInfoDAO userInfoDao;
	
	@Override
	public int personCardInsert(UserInfoVO vo) throws Exception {
				
		return userInfoDao.personCardInsert(vo);
	}
	
}

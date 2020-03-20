package com.topia.card.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.topia.card.dao.UserInfoDAO;
import com.topia.card.service.UserInfoService;
import com.topia.card.vo.UserInfoEduVO;
import com.topia.card.vo.UserInfoLicenVO;
import com.topia.card.vo.UserInfoQualifiVO;
import com.topia.card.vo.UserInfoTrainingVO;
import com.topia.card.vo.UserInfoVO;


@Service
public class UserInfoServiceImpl implements UserInfoService
{
	@Autowired
	UserInfoDAO userInfoDao;
	
	
	@Override
	public int personCardInsert(UserInfoVO vo, UserInfoEduVO eduVo
			  , UserInfoLicenVO LicenVo, UserInfoQualifiVO qualifiVO, UserInfoTrainingVO trainingVO) throws Exception 
	{
		// TODO Auto-generated method stub
		int num = 0;
		
		num = userInfoDao.personCardInsert(vo);
			    
		if(num == 1)
		{
			eduVo.setUserIdx(vo.getUserIdx());
			userInfoDao.userInfoEduInsert(eduVo);
			
			LicenVo.setUserIdx(vo.getUserIdx());
			userInfoDao.userInfoLicenInsert(LicenVo);
			
			qualifiVO.setUserIdx(vo.getUserIdx());
			userInfoDao.userInfoQualifiInsert(qualifiVO);
			
			trainingVO.setTrainingIdx(vo.getUserIdx());
			userInfoDao.UserInfoTrainingInsert(trainingVO);
		}
		
		return num;
	}
	
}

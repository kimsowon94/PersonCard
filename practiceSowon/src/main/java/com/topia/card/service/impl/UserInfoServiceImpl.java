package com.topia.card.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.topia.card.dao.UserInfoDAO;
import com.topia.card.service.UserInfoService;
import com.topia.card.vo.UserInfoCareerVO;
import com.topia.card.vo.UserInfoEduVO;
import com.topia.card.vo.UserInfoLicenVO;
import com.topia.card.vo.UserInfoQualifiVO;
import com.topia.card.vo.UserInfoSkillVO;
import com.topia.card.vo.UserInfoTrainingVO;
import com.topia.card.vo.UserInfoVO;


@Service
public class UserInfoServiceImpl implements UserInfoService
{
	@Autowired
	UserInfoDAO userInfoDao;
	
	
	@Override
	public int personCardInsert(UserInfoVO vo, UserInfoEduVO eduVo
			  , UserInfoLicenVO LicenVo, UserInfoQualifiVO qualifiVO, UserInfoTrainingVO trainingVO
			  , UserInfoCareerVO careerVO, UserInfoSkillVO skillVO) throws Exception 
	{
		// TODO Auto-generated method stub
		int num = 0;
		
		num = userInfoDao.personCardInsert(vo);
			    
		if(num == 1)
		{
			for (UserInfoEduVO i : eduVo.getEduList()) 
			{
				i.setUserIdx(vo.getUserIdx());
				userInfoDao.userInfoEduInsert(i);
			}
			for (UserInfoQualifiVO i: qualifiVO.getQualifiList())
			{
				i.setUserIdx(vo.getUserIdx());
				userInfoDao.userInfoQualifiInsert(i);
			}
			for (UserInfoCareerVO i: careerVO.getCareerList())
			{
				i.setUserIdx(vo.getUserIdx());
				userInfoDao.userInfoCareerInsert(i);
			}
			for (UserInfoSkillVO i : skillVO.getSkillList())
			{
				System.out.println(i.getSkillDbms());
				i.setUserIdx(vo.getUserIdx());
				userInfoDao.userInfoSkillInsert(i);
			}
			for (UserInfoTrainingVO i : trainingVO.getTrainList())
			{
				i.setUserIdx(vo.getUserIdx());
				userInfoDao.UserInfoTrainingInsert(i);
			}
			for (UserInfoLicenVO i : LicenVo.getLicenList())
			{
				i.setUserIdx(vo.getUserIdx());
				userInfoDao.userInfoLicenInsert(i);
			}
		}
		
		return num;
	}


	@Override
	public int personCardUpdate(UserInfoVO vo) throws Exception {
		int num = 0;
		
		num = userInfoDao.personCardUpdate(vo);
		
		return num;
	}

	@Override
	public List<UserInfoVO> userInfoRead(UserInfoVO vo) throws Exception {
		return userInfoDao.userInfoRead(vo);
	}


	@Override
	public int userInfoReadCnt(UserInfoVO vo) throws Exception {
		return userInfoDao.userInfoReadCnt(vo);
	}


	@Override
	public List<UserInfoVO> searchYear(UserInfoVO vo) throws Exception {
		return userInfoDao.searchYear(vo);
	}


	@Override
	public UserInfoVO userInfoDetail(UserInfoVO vo) throws Exception {
		return userInfoDao.userInfoDetail(vo);
	}


	@Override
	public List<UserInfoEduVO> eduDetailList(Integer userIdx) throws Exception {
		return userInfoDao.eduDetailList(userIdx);
	}


	@Override
	public List<UserInfoQualifiVO> qualifiDetailList(Integer userIdx) throws Exception {
		return userInfoDao.qualifiDetailList(userIdx);
	}


	@Override
	public List<UserInfoCareerVO> careerDetailList(Integer userIdx) throws Exception {
		return userInfoDao.careerDetailList(userIdx);
	}


	@Override
	public List<UserInfoTrainingVO> trainingDetailList(Integer userIdx) throws Exception {
		return userInfoDao.trainingDetailList(userIdx);
	}


	@Override
	public List<UserInfoLicenVO> licenDetailList(Integer userIdx) throws Exception {
		return userInfoDao.licenDetailList(userIdx);
	}


	@Override
	public List<UserInfoSkillVO> skillDetailList(Integer userIdx) throws Exception {
		return userInfoDao.skillDetailList(userIdx);
	}


	
}

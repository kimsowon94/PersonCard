package com.topia.card.dao;

import java.util.List;

import com.topia.card.vo.UserInfoCareerVO;
import com.topia.card.vo.UserInfoEduVO;
import com.topia.card.vo.UserInfoLicenVO;
import com.topia.card.vo.UserInfoQualifiVO;
import com.topia.card.vo.UserInfoSkillVO;
import com.topia.card.vo.UserInfoTrainingVO;
import com.topia.card.vo.UserInfoVO;


public interface UserInfoDAO 
{
	// 기본정보 insert
	public int personCardInsert(UserInfoVO vo) throws Exception;
	
	// 학교 insert
	public int userInfoEduInsert(UserInfoEduVO eduVo) throws Exception;
	
	// 어학능력 insert
	public int userInfoLicenInsert(UserInfoLicenVO LicenVo) throws Exception;
	
	// 자격증 insert
	public int userInfoQualifiInsert(UserInfoQualifiVO qualifiVO) throws Exception;
	
	// 교육 insert
	public int UserInfoTrainingInsert(UserInfoTrainingVO trainingVO) throws Exception;
	
	// 회사 insert
	public int userInfoCareerInsert(UserInfoCareerVO careerVO) throws Exception;
	
	// 능력 insert
	public int userInfoSkillInsert(UserInfoSkillVO skillVO) throws Exception;
	
	public List<UserInfoVO> userInfoRead(UserInfoVO vo) throws Exception;
}

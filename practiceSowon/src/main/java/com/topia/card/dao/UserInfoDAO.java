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
	// �⺻���� insert
	public int personCardInsert(UserInfoVO vo) throws Exception;
	
	// �б� insert
	public int userInfoEduInsert(UserInfoEduVO eduVo) throws Exception;
	
	// ���дɷ� insert
	public int userInfoLicenInsert(UserInfoLicenVO LicenVo) throws Exception;
	
	// �ڰ��� insert
	public int userInfoQualifiInsert(UserInfoQualifiVO qualifiVO) throws Exception;
	
	// ���� insert
	public int UserInfoTrainingInsert(UserInfoTrainingVO trainingVO) throws Exception;
	
	// ȸ�� insert
	public int userInfoCareerInsert(UserInfoCareerVO careerVO) throws Exception;
	
	// �ɷ� insert
	public int userInfoSkillInsert(UserInfoSkillVO skillVO) throws Exception;
	
	public List<UserInfoVO> userInfoRead(UserInfoVO vo) throws Exception;
}

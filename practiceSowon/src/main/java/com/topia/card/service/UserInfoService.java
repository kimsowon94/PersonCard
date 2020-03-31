package com.topia.card.service;

import java.util.List;

import com.topia.card.vo.UserInfoCareerVO;
import com.topia.card.vo.UserInfoEduVO;
import com.topia.card.vo.UserInfoLicenVO;
import com.topia.card.vo.UserInfoQualifiVO;
import com.topia.card.vo.UserInfoSkillVO;
import com.topia.card.vo.UserInfoTrainingVO;
import com.topia.card.vo.UserInfoVO;

public interface UserInfoService
{
	public int personCardInsert(UserInfoVO vo, UserInfoEduVO eduVo, UserInfoLicenVO LicenVo
			  , UserInfoQualifiVO qualifiVO, UserInfoTrainingVO trainingVO, UserInfoCareerVO careerVO, UserInfoSkillVO skillVO) throws Exception;
	
	public int personCardUpdate(UserInfoVO vo, UserInfoEduVO eduVO, UserInfoQualifiVO qualifiVO, UserInfoCareerVO careerVO)throws Exception;
	// �ҷ�����
	public List<UserInfoVO> userInfoRead(UserInfoVO vo) throws Exception;
	
	// �ҷ����� ���� Ȯ��
	public int userInfoReadCnt(UserInfoVO vo)throws Exception;
	
	// ������ �ο� Ȯ��
	public List<UserInfoVO> searchYear(UserInfoVO vo) throws Exception;
	
	// �⺻���� ������
	public UserInfoVO userInfoDetail(UserInfoVO vo) throws Exception;
	
	// �б����� ������
	public List<UserInfoEduVO> eduDetailList(Integer userIdx)throws Exception;
	
	// �ڰ����� ������
	public List<UserInfoQualifiVO> qualifiDetailList(Integer userIdx)throws Exception;
	
	// ȸ������ ������
	public List<UserInfoCareerVO> careerDetailList(Integer userIdx)throws Exception;
	
	// �������� ������
	public List<UserInfoTrainingVO> trainingDetailList(Integer userIdx)throws Exception;
	
	// �������� ������
	public List<UserInfoLicenVO> licenDetailList(Integer userIdx) throws Exception;

	// ��ų ������
	public List<UserInfoSkillVO> skillDetailList(Integer userIdx) throws Exception;
}

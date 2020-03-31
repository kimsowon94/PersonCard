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
	
	// 불러오기
	public List<UserInfoVO> userInfoRead(UserInfoVO vo) throws Exception;
	
	// 불러오기 갯수 확인
	public int userInfoReadCnt(UserInfoVO vo)throws Exception;
	
	// 연차별 인원 확인
	public List<UserInfoVO> searchYear(UserInfoVO vo) throws Exception;
	
	// 기본정보 디테일
	public UserInfoVO userInfoDetail(UserInfoVO vo) throws Exception;
	
	// 학교정보 디테일
	public List<UserInfoEduVO> eduDetailList(Integer userIdx)throws Exception;
	
	// 자격증명 디테일
	public List<UserInfoQualifiVO> qualifiDetailList(Integer userIdx)throws Exception;
	
	// 회사정보 디테일
	public List<UserInfoCareerVO> careerDetailList(Integer userIdx)throws Exception;
	
	// 교육정보 디테일
	public List<UserInfoTrainingVO> trainingDetailList(Integer userIdx)throws Exception;

}

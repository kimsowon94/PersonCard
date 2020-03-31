package com.topia.card.dao.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.topia.card.dao.UserInfoDAO;
import com.topia.card.vo.UserInfoCareerVO;
import com.topia.card.vo.UserInfoEduVO;
import com.topia.card.vo.UserInfoLicenVO;
import com.topia.card.vo.UserInfoQualifiVO;
import com.topia.card.vo.UserInfoSkillVO;
import com.topia.card.vo.UserInfoTrainingVO;
import com.topia.card.vo.UserInfoVO;

@Repository
public class UserInfoDAOImpl implements UserInfoDAO
{

	@Autowired
	private SqlSession sqlsession;
	

	@Override
	public int personCardInsert(UserInfoVO vo) throws Exception {	
		return sqlsession.insert("UserInfoDAO.personCardInsert", vo);
	}

	@Override
	public int userInfoEduInsert(UserInfoEduVO eduVo) throws Exception {
		return sqlsession.insert("UserInfoDAO.userInfoEduInsert", eduVo);
	}

	@Override
	public int userInfoLicenInsert(UserInfoLicenVO LicenVo) throws Exception {
		return sqlsession.insert("UserInfoDAO.userInfoLicenInsert", LicenVo);
	}

	@Override
	public int userInfoQualifiInsert(UserInfoQualifiVO qualifiVO) throws Exception {
		return sqlsession.insert("UserInfoDAO.userInfoQualifiInsert",qualifiVO);
	}

	@Override
	public int UserInfoTrainingInsert(UserInfoTrainingVO trainingVO) throws Exception {
		return sqlsession.insert("UserInfoDAO.UserInfoTrainingInsert", trainingVO);
	}

	@Override
	public int userInfoCareerInsert(UserInfoCareerVO careerVO) throws Exception {
		return sqlsession.insert("UserInfoDAO.userInfoCareerInsert", careerVO);
	}

	@Override
	public int userInfoSkillInsert(UserInfoSkillVO skillVO) throws Exception {
		return sqlsession.insert("UserInfoDAO.userInfoSkillInsert", skillVO);
	}

	@Override
	public List<UserInfoVO> userInfoRead(UserInfoVO vo) throws Exception {
		return sqlsession.selectList("UserInfoDAO.userInfoRead", vo);
	}

	@Override
	public int userInfoReadCnt(UserInfoVO vo) throws Exception {
		return sqlsession.selectOne("UserInfoDAO.userInfoReadCnt", vo);
	}

	@Override
	public List<UserInfoVO> searchYear(UserInfoVO vo) throws Exception {
		return sqlsession.selectList("UserInfoDAO.searchYear",vo);
	}

	@Override
	public UserInfoVO userInfoDetail(UserInfoVO vo) throws Exception {
		return sqlsession.selectOne("UserInfoDAO.userInfoDetail", vo);
	}


	@Override
	public List<UserInfoEduVO> eduDetailList(Integer userIdx) {
		return sqlsession.selectList("UserInfoDAO.eduDetailList", userIdx);
	}

	@Override
	public List<UserInfoQualifiVO> qualifiDetailList(Integer userIdx) {
		return sqlsession.selectList("UserInfoDAO.qualifiDetailList", userIdx);
	}

	@Override
	public List<UserInfoCareerVO> careerDetailList(Integer userIdx) {
		return sqlsession.selectList("UserInfoDAO.careerDetailList", userIdx);
	}

	@Override
	public List<UserInfoTrainingVO> trainingDetailList(Integer userIdx) {
		return sqlsession.selectList("UserInfoDAO.trainingDetailList", userIdx);
	}

	@Override
	public List<UserInfoLicenVO> licenDetailList(Integer userIdx) throws Exception {
		return sqlsession.selectList("UserInfoDAO.licenDetailList", userIdx);
	}

	

}

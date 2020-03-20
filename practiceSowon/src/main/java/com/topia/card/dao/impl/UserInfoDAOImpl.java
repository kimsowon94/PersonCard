package com.topia.card.dao.impl;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.topia.card.dao.UserInfoDAO;
import com.topia.card.vo.UserInfoEduVO;
import com.topia.card.vo.UserInfoLicenVO;
import com.topia.card.vo.UserInfoQualifiVO;
import com.topia.card.vo.UserInfoTrainingVO;
import com.topia.card.vo.UserInfoVO;

@Repository
public class UserInfoDAOImpl implements UserInfoDAO
{

	@Autowired
	private SqlSession sqlsession;
	
	/*
	 * @Override public int personCardInsert(UserInfoVO vo) throws Exception {
	 * return sqlsession.insert("UserInfoDAO.personCardInsert",vo); }
	 */

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

}

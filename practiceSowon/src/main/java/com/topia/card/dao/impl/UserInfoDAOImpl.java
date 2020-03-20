package com.topia.card.dao.impl;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.topia.card.dao.UserInfoDAO;
import com.topia.card.vo.UserInfoVO;

@Repository
public class UserInfoDAOImpl implements UserInfoDAO
{

	@Autowired
	private SqlSession sqlsession;
	
	@Override
	public int personCardInsert(UserInfoVO vo) throws Exception 
	{
		return sqlsession.insert("UserInfoDAO.personCardInsert",vo);
	}

}

package com.topia.card.dao;

import com.topia.card.vo.UserInfoVO;


public interface UserInfoDAO 
{
	public int personCardInsert(UserInfoVO userInfoVo) throws Exception;
}

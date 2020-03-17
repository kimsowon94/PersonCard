package com.topia.card.dao;



import com.topia.card.vo.UserInfoVO;


public interface PersonCardDAO 
{
	public int personCardInsert(UserInfoVO userInfoVo) throws Exception;
}

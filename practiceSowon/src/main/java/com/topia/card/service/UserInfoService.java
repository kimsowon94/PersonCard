package com.topia.card.service;

import com.topia.card.vo.UserInfoEduVO;
import com.topia.card.vo.UserInfoLicenVO;
import com.topia.card.vo.UserInfoQualifiVO;
import com.topia.card.vo.UserInfoTrainingVO;
import com.topia.card.vo.UserInfoVO;

public interface UserInfoService
{
	public int personCardInsert(UserInfoVO vo, UserInfoEduVO eduVo, UserInfoLicenVO LicenVo
			  , UserInfoQualifiVO qualifiVO, UserInfoTrainingVO trainingVO) throws Exception;
}

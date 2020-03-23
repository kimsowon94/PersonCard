package com.topia.card.vo;

import java.util.List;

public class UserInfoQualifiVO {
	private Integer qualifiIdx;
	private Integer userIdx;
	private String qualifiName;
	private String qualifiGetDate;
	
	private List<UserInfoQualifiVO> qualifiList;
	
	public List<UserInfoQualifiVO> getQualifiList() {
		return qualifiList;
	}
	public void setQualifiList(List<UserInfoQualifiVO> qualifiList) {
		this.qualifiList = qualifiList;
	}
	
	
	public Integer getQualifiIdx() {
		return qualifiIdx;
	}
	public void setQualifiIdx(Integer qualifiIdx) {
		this.qualifiIdx = qualifiIdx;
	}
	public Integer getUserIdx() {
		return userIdx;
	}
	public void setUserIdx(Integer userIdx) {
		this.userIdx = userIdx;
	}
	public String getQualifiName() {
		return qualifiName;
	}
	public void setQualifiName(String qualifiName) {
		this.qualifiName = qualifiName;
	}
	public String getQualifiGetDate() {
		return qualifiGetDate;
	}
	public void setQualifiGetDate(String qualifiGetDate) {
		this.qualifiGetDate = qualifiGetDate;
	}
	
	
	
}

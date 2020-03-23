package com.topia.card.vo;

import java.util.List;

public class UserInfoEduVO {
	private Integer eduIdx;
	private Integer userIdx;
	private String eduSchoolName;
	private String eduStatus;
	private String eduYear;
	private String eduMonth;
	
	/*list형식의 변수 선언 ======================*/
	private List<UserInfoEduVO> eduList;
		
	public List<UserInfoEduVO> getEduList() {
		return eduList;
	}
	public void setEduList(List<UserInfoEduVO> eduList) {
		this.eduList = eduList;
	}
	
	/*======================================*/
	public Integer getEduIdx() {
		return eduIdx;
	}
	public void setEduIdx(Integer eduIdx) {
		this.eduIdx = eduIdx;
	}
	public Integer getUserIdx() {
		return userIdx;
	}
	public void setUserIdx(Integer userIdx) {
		this.userIdx = userIdx;
	}
	public String getEduSchoolName() {
		return eduSchoolName;
	}
	public void setEduSchoolName(String eduSchoolName) {
		this.eduSchoolName = eduSchoolName;
	}
	public String getEduStatus() {
		return eduStatus;
	}
	public void setEduStatus(String eduStatus) {
		this.eduStatus = eduStatus;
	}
	public String getEduYear() {
		return eduYear;
	}
	public void setEduYear(String eduYear) {
		this.eduYear = eduYear;
	}
	public String getEduMonth() {
		return eduMonth;
	}
	public void setEduMonth(String eduMonth) {
		this.eduMonth = eduMonth;
	}
	
	
	
}

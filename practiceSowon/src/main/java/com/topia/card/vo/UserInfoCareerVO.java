package com.topia.card.vo;

import java.util.List;

public class UserInfoCareerVO {
	private Integer careerIdx;
	private Integer userIdx;
	private String careerCompName;
	private String careerEnterDate;
	private String careerLeaveDate;
	private String careerSpot;
	private String careerResponsib;
	
	private List<UserInfoCareerVO> careerList;
	
	
	public List<UserInfoCareerVO> getCareerList() {
		return careerList;
	}
	public void setCareerList(List<UserInfoCareerVO> careerList) {
		this.careerList = careerList;
	}
	
	
	public Integer getCareerIdx() {
		return careerIdx;
	}
	public void setCareerIdx(Integer careerIdx) {
		this.careerIdx = careerIdx;
	}
	public Integer getUserIdx() {
		return userIdx;
	}
	public void setUserIdx(Integer userIdx) {
		this.userIdx = userIdx;
	}
	public String getCareerCompName() {
		return careerCompName;
	}
	public void setCareerCompName(String careerCompName) {
		this.careerCompName = careerCompName;
	}
	public String getCareerEnterDate() {
		return careerEnterDate;
	}
	public void setCareerEnterDate(String careerEnterDate) {
		this.careerEnterDate = careerEnterDate;
	}
	public String getCareerLeaveDate() {
		return careerLeaveDate;
	}
	public void setCareerLeaveDate(String careerLeaveDate) {
		this.careerLeaveDate = careerLeaveDate;
	}
	public String getCareerSpot() {
		return careerSpot;
	}
	public void setCareerSpot(String careerSpot) {
		this.careerSpot = careerSpot;
	}
	public String getCareerResponsib() {
		return careerResponsib;
	}
	public void setCareerResponsib(String careerResponsib) {
		this.careerResponsib = careerResponsib;
	}
	
	
}

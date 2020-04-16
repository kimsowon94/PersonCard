package com.topia.card.vo;

import org.springframework.web.multipart.MultipartFile;

public class UserInfoVO {
	private Integer userIdx;
	private String userRegisterDate;
	private String userName;
	private String userSocialSecunum;
	private String userSex;
	private String userComp;
	private String userCompEnterdate;
	private String userDept;
	private String userSpot;
	private String userArmyServ;
	private String userMaritalStatus;
	private String userArmyServEnter;
	private String userArmyServLeave;
	private String userArmyServPeriod;
	private String userTelnumWired;
	private String userTelnumWireless;
	private String userEmail;
	private String userZipcode;
	private String userAddress;
	
	private String career;
	
	private Integer careerIdx;
	private String careerCompName;
	private String careerEnterDate;
	private String careerLeaveDate;
	private String careerSpot;
	private String careerResponsib;
	
	//검색조건
	private String userListSearchPeriod;
	private String userListSearchWord;
	private String userGender;
	private Integer userCareerLength;
	
	//페이징
	private int pageNo1;
	private int userInfoDataSize;
	
	//연차별 인원 카운트
	private int userIdxCnt;
	
	private MultipartFile imgFile;  //파일이름
	private String imgFileReal;	

	
	public MultipartFile getImgFile() {
		return imgFile;
	}
	public void setImgFile(MultipartFile imgFile) {
		this.imgFile = imgFile;
	}
	public String getImgFileReal() {
		return imgFileReal;
	}
	public void setImgFileReal(String imgFileReal) {
		this.imgFileReal = imgFileReal;
	}
	public int getUserIdxCnt() {
		return userIdxCnt;
	}
	public void setUserIdxCnt(int userIdxCnt) {
		this.userIdxCnt = userIdxCnt;
	}
	public int getUserInfoDataSize() {
		return userInfoDataSize;
	}
	public void setUserInfoDataSize(int userInfoDataSize) {
		this.userInfoDataSize = userInfoDataSize;
	}
	public int getPageNo1() {
		return pageNo1;
	}
	public void setPageNo1(int pageNo1) {
		this.pageNo1 = pageNo1;
	}
	public Integer getUserCareerLength() {
		return userCareerLength;
	}
	public void setUserCareerLength(Integer userCareerLength) {
		this.userCareerLength = userCareerLength;
	}
	public String getUserGender() {
		return userGender;
	}
	public void setUserGender(String userGender) {
		this.userGender = userGender;
	}
	public String getUserListSearchWord() {
		return userListSearchWord;
	}
	public void setUserListSearchWord(String userListSearchWord) {
		this.userListSearchWord = userListSearchWord;
	}
	public String getUserListSearchPeriod() {
		return userListSearchPeriod;
	}
	public void setUserListSearchPeriod(String userListSearchPeriod) {
		this.userListSearchPeriod = userListSearchPeriod;
	}
	
	
	public Integer getCareerIdx() {
		return careerIdx;
	}
	public void setCareerIdx(Integer careerIdx) {
		this.careerIdx = careerIdx;
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
	public String getCareer() {
		return career;
	}
	public void setCareer(String career) {
		this.career = career;
	}
	public Integer getUserIdx() {
		return userIdx;
	}
	public void setUserIdx(Integer userIdx) {
		this.userIdx = userIdx;
	}
	public String getUserRegisterDate() {
		return userRegisterDate;
	}
	public void setUserRegisterDate(String userRegisterDate) {
		this.userRegisterDate = userRegisterDate;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserSocialSecunum() {
		return userSocialSecunum;
	}
	public void setUserSocialSecunum(String userSocialSecunum) {
		this.userSocialSecunum = userSocialSecunum;
	}
	public String getUserSex() {
		return userSex;
	}
	public void setUserSex(String userSex) {
		this.userSex = userSex;
	}
	public String getUserComp() {
		return userComp;
	}
	public void setUserComp(String userComp) {
		this.userComp = userComp;
	}
	public String getUserCompEnterdate() {
		return userCompEnterdate;
	}
	public void setUserCompEnterdate(String userCompEnterdate) {
		this.userCompEnterdate = userCompEnterdate;
	}
	public String getUserDept() {
		return userDept;
	}
	public void setUserDept(String userDept) {
		this.userDept = userDept;
	}
	public String getUserSpot() {
		return userSpot;
	}
	public void setUserSpot(String userSpot) {
		this.userSpot = userSpot;
	}
	public String getUserArmyServ() {
		return userArmyServ;
	}
	public void setUserArmyServ(String userArmyServ) {
		this.userArmyServ = userArmyServ;
	}
	public String getUserMaritalStatus() {
		return userMaritalStatus;
	}
	public void setUserMaritalStatus(String userMaritalStatus) {
		this.userMaritalStatus = userMaritalStatus;
	}
	public String getUserArmyServEnter() {
		return userArmyServEnter;
	}
	public void setUserArmyServEnter(String userArmyServEnter) {
		this.userArmyServEnter = userArmyServEnter;
	}
	public String getUserArmyServLeave() {
		return userArmyServLeave;
	}
	public void setUserArmyServLeave(String userArmyServLeave) {
		this.userArmyServLeave = userArmyServLeave;
	}
	public String getUserArmyServPeriod() {
		return userArmyServPeriod;
	}
	public void setUserArmyServPeriod(String userArmyServPeriod) {
		this.userArmyServPeriod = userArmyServPeriod;
	}
	public String getUserTelnumWired() {
		return userTelnumWired;
	}
	public void setUserTelnumWired(String userTelnumWired) {
		this.userTelnumWired = userTelnumWired;
	}
	public String getUserTelnumWireless() {
		return userTelnumWireless;
	}
	public void setUserTelnumWireless(String userTelnumWireless) {
		this.userTelnumWireless = userTelnumWireless;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserZipcode() {
		return userZipcode;
	}
	public void setUserZipcode(String userZipcode) {
		this.userZipcode = userZipcode;
	}
	public String getUserAddress() {
		return userAddress;
	}
	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}
	
}

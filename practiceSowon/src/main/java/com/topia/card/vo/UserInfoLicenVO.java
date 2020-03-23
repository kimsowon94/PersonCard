package com.topia.card.vo;

import java.util.List;

public class UserInfoLicenVO {
		private Integer licenIdx;
		private Integer userIdx;
		private String licenName;
		private String licenSkillLevel;
		private List<UserInfoLicenVO> LicenList;
		
		
		public List<UserInfoLicenVO> getLicenList() {
			return LicenList;
		}
		public void setLicenList(List<UserInfoLicenVO> licenList) {
			LicenList = licenList;
		}
		public Integer getLicenIdx() {
			return licenIdx;
		}
		public void setLicenIdx(Integer licenIdx) {
			this.licenIdx = licenIdx;
		}
		public Integer getUserIdx() {
			return userIdx;
		}
		public void setUserIdx(Integer userIdx) {
			this.userIdx = userIdx;
		}
		public String getLicenName() {
			return licenName;
		}
		public void setLicenName(String licenName) {
			this.licenName = licenName;
		}
		public String getLicenSkillLevel() {
			return licenSkillLevel;
		}
		public void setLicenSkillLevel(String licenSkillLevel) {
			this.licenSkillLevel = licenSkillLevel;
		}
		
		
}

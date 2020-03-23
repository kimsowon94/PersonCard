package com.topia.card.vo;

import java.util.List;

public class UserInfoTrainingVO {
		private Integer trainingIdx;
		private Integer userIdx;
		private String trainingName;
		private String trainingStartDate;
		private String trainingEndDate;
		private String trainingAgency;
		private List<UserInfoTrainingVO> trainList;
		
		public List<UserInfoTrainingVO> getTrainList() {
			return trainList;
		}
		public void setTrainList(List<UserInfoTrainingVO> trainList) {
			this.trainList = trainList;
		}
		public Integer getTrainingIdx() {
			return trainingIdx;
		}
		public void setTrainingIdx(Integer trainingIdx) {
			this.trainingIdx = trainingIdx;
		}
		public Integer getUserIdx() {
			return userIdx;
		}
		public void setUserIdx(Integer userIdx) {
			this.userIdx = userIdx;
		}
		public String getTrainingName() {
			return trainingName;
		}
		public void setTrainingName(String trainingName) {
			this.trainingName = trainingName;
		}
		public String getTrainingStartDate() {
			return trainingStartDate;
		}
		public void setTrainingStartDate(String trainingStartDate) {
			this.trainingStartDate = trainingStartDate;
		}
		public String getTrainingEndDate() {
			return trainingEndDate;
		}
		public void setTrainingEndDate(String trainingEndDate) {
			this.trainingEndDate = trainingEndDate;
		}
		public String getTrainingAgency() {
			return trainingAgency;
		}
		public void setTrainingAgency(String trainingAgency) {
			this.trainingAgency = trainingAgency;
		}
		
		
}

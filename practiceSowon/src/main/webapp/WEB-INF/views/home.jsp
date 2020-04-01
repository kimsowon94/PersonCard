<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8;" />
<script src="./resources/compnent/jquery-3.3.1.min.js?"></script>
<script
	src="./resources/compnent/jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
<script
	src="./resources/compnent/jquery-loading-master/dist/jquery.loading.min.js"></script>
<script src="./resources/compnent/jqueryPrint/jqueryPrint.js"></script>
<!-- <script src="./resources/js/util/util.js"></script> -->
<!-- <link rel="stylesheet" href="/code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"> -->
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>



<link rel="stylesheet" type="text/css"
	href="./resources/compnent/jquery-ui-1.12.1.custom/jquery-ui.min.css">
<link rel="stylesheet" type="text/css"
	href="./resources/compnent/jquery-loading-master/dist/jquery.loading.min.css">
<link rel="stylesheet" type="text/css"
	href="./resources/css/personalHistory/personalHistory.css?ver=1">

<script src="./resources/js/personCard.js" charset="UTF-8"></script>
<script src="./resources/js/personCardFuc.js" charset="UTF-8"></script>
<script src="./resources/js/util.js" charset="UTF-8"></script>
<!-- 주소찾기 api -->
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>


<title>Home</title>
<style type="text/css">
#pop {
	width: 300px;
	height: 400px;
	background: #3d3d3d;
	color: #fff;
	position: absolute;
	top: 10px;
	left: 100px;
	text-align: center;
	border: 2px solid #000;
}
</style>
</head>


<body>

	<div class="custom-loading">
		<div class="loading-image"></div>
	</div>
	<%-- 새 작성건의 경우 해당 인풋값은 비어있고 수정 및 조회건은 들어감 --%>
	
	<div class="user-info-list-pannel" id="user-info-list-pannel">
		<div class="personal-history-title-pannel">
			<h3>개 인 이 력 카 드</h3>
		</div>

		<div class="top-header-pannel">

			<div class="status-display-pannel">
				<h5>※ 새 이력 작성</h5>
			</div>

			<div class="function-btn-pannel">
				<button class="printBtn">출력</button>
				<button type="button" class="personalHistoryListBtn"
					onclick="callBackList()">불러오기</button>
				<button type="button" onclick="modeChange('NEW')" class="newHistoryCreateBtn">새로작성</button>
				<button class="personalHistoryResetBtn">초기화</button>
				<button type="button" class="personalHistorySaveBtn">저장</button>
			</div>
		</div>

		<form class="main1">
			<!--상태값 추가  -->
			<input type="hidden" id="status" name="status" value="status">
			<!-- <input type="hidden" name="userEmail" id="emailPlus"> -->
			<input id="userIdx" name="userIdx" type="hidden">
			<table class="user-info-table1">
				<tbody>
					<tr>
						<td>*성명</td>
						<td><input type="text" id="userName" name="userName"></td>
						<td>*주민등록번호</td>
						<td colspan="3"><input type="text" name="userSocialSecunum"
							id="userSocialSecunum" maxlength="13"
							placeholder='  "-" 제외한 숫자만 입력'></td>
						<td>성별</td>
						<td><select id="userSex" name="userSex">
								<option value="">선택없음</option>
								<option value="남성">남성</option>
								<option value="여성">여성</option>
						</select></td>
						<td style="display: none;" rowspan="3">
							<div id="imgDiv">
								<img id="thumbNail" name="thumbNail" width="120" height="120" />
							</div>
						</td>
					</tr>

					<tr>
						<td>소속회사</td>
						<td colspan="5"><input type="text" id="userComp"
							name="userComp"></td>
						<td>입사일</td>
						<td><input type="text" id="userCompEnterdate"
							name="userCompEnterdate" class="dateInput"></td>
					</tr>

					<tr>
						<td>부서</td>
						<td><input type="text" id="userDept" name="userDept"></td>
						<td>직위</td>
						<td><input type="text" id="userSpot" name="userSpot"></td>
						<td>병역</td>
						<td><input type="text" id="userArmyServ" name="userArmyServ"></td>
						<td>결혼</td>
						<td><select id="userMaritalStatus" name="userMaritalStatus">
								<option value="">선택없음</option>
								<option value="기혼">기혼</option>
								<option value="미혼">미혼</option>
						</select></td>
					</tr>

					<tr>
						<td>병역<br> 입대 ~ 제대일
						</td>
						<td colspan="2"><input type="text" id="userArmyServEnter"
							class="dateInput prevDate" name="userArmyServEnter"></td>
						<td>~</td>
						<td colspan="2"><input type="text" id="userArmyServLeave"
							class="dateInput laterDate" name="userArmyServLeave"></td>
						<td>역종/병과</td>
						<td><input type="text" id="userArmyServPeriod"
							name="userArmyServPeriod"></td>
						<td style="display: none;"><input type="file" name="file">
							<!-- <input type="hidden" name="userIdx" value="2"> --> <!-- <input type="hidden" name="userName" > -->
						</td>
					</tr>
				</tbody>

			</table>







			<table class="user-info-table2">

				<tbody>
					<tr>
						<td>전화</td>
						<td><input type="tel" placeholder='   휴대전화 "-" 포함'
							id="userTelnumWireless" name="userTelnumWireless"></td>
						<td colspan="2"><input type="tel" placeholder='   유선 "-" 포함'
							id="userTelnumWired" name="userTelnumWired"></td>
					</tr>

					<tr>
						<td>E-Mail</td>
						<td><input type="email" id="userEmail" name="userEmail"></td>
						<td><select type="text" id="emailDomain" style="width: 100%;"
							name="emailDomain">
								<option disabled="disabled" selected="selected">선택하세요</option>
								<option>@naver.com</option>
								<option>@gmail.com</option>
								<option>@daum.net</option>
								<option>직접입력</option>
						</select></td>
						<td id="test12" style="display: none;"><input type="text"
							id="emailDomain1" /></td>
					</tr>

					<tr>
						<td>주소</td>
						<td>
							<div>
								<input type="text" id="userZipcode" placeholder="우편번호"
									name="userZipcode"> <input type="button"
									id="personalZipcodeSearchBtn" value="우편번호 찾기"
									onclick="openDaumZipAddress()" />
								<div class="clear-pannel"></div>
							</div>
						</td>
						<td colspan="2"><input type="text" id="userAddress"
							name="userAddress" placeholder="   주소"> <!-- <input type="text" id="userAddress"> -->
						</td>
					</tr>
				</tbody>

			</table>






			<%-- 학력 / 자격증 --%>
			<input type="hidden" id="eduNum" value="0">
			<div class="edu-and-qualifi-pannel">
				<div class="edu-table-pannel">
					<table class="edu-table flexibleTable">
						<thead>
							<tr>
								<td>학교명</td>
								<td>상태</td>
								<td colspan="2">년</td>
								<td colspan="2">월</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><input type="text" data="eduSchoolName"
									class="eduSchoolName" name="eduList[0].eduSchoolName"></td>
								<td><select data="eduStatus" class="eduStatus"
									name="eduList[0].eduStatus">
										<option value="">선택없음</option>
										<option value="입학">입학</option>
										<option value="재학">재학</option>
										<option value="졸업">졸업</option>
										<option value="졸업예정">졸업예정</option>
								</select></td>
								<td><input type="text" data="eduYear" placeholder=""
									class="eduYear" name="eduList[0].eduYear"></td>
								<td>년</td>
								<td><input type="text" data="eduMonth" placeholder=""
									class="eduMonth" name="eduList[0].eduMonth"></td>
								<td>월</td>
							</tr>
						</tbody>

					</table>

					<div class="add-row-btn-pannel">
						<button type="button" class="add-row-btn addRowBtn"
							onclick="eduSchoolPlus()">+</button>
					</div>

				</div>


				<input type="hidden" id="qualifiNum" value="0">
				<div class="qualifi-table-pannel">
					<table class="qualifi-table flexibleTable" tb="qualifi">

						<thead>
							<tr>
								<td>자격증명</td>
								<td>취득일</td>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td><input type="text" data="qualifiName"
									class="qualifiName" name="qualifiList[0].qualifiName"></td>
								<td><input type="text" data="qualifiGetdate"
									class="qualifiGetdate dateInput"
									name="qualifiList[0].qualifiGetDate"></td>
							</tr>
						</tbody>

					</table>

					<div class="add-row-btn-pannel">
						<button type="button" class="add-row-btn addRowBtn"
							onclick="qualifiPlus()">+</button>
					</div>

				</div>
			</div>






			<div class="clear-pannel"></div>




			<input type="hidden" id="careerNum" value="1">
			<div class="career-info-pannel">
				<table class="career-info flexibleTable" tb="career">
					<thead>
						<tr>
							<td rowspan="2">회사명</td>
							<td colspan="2">재직기간</td>
							<td rowspan="2">직위</td>
							<td rowspan="2">담당업무</td>
						</tr>
						<tr>
							<td>시작일</td>
							<td>종료일</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><input type="text" data="careerCompName"
								class="careerCompName" name="careerList[0].careerCompName"></td>
							<td><input type="text" data="careerEnterDate"
								class="careerEnterDate dateInput prevDate"
								name="careerList[0].careerEnterDate"></td>
							<td><input type="text" data="careerLeaveDate"
								class="careerLeaveDate dateInput laterDate"
								name="careerList[0].careerLeaveDate"></td>
							<td><input type="text" data="careerSpot" class="careerSpot"
								name="careerList[0].careerSpot"></td>
							<td><input type="text" data="careerResponsib"
								class="careerResponsib" name="careerList[0].careerResponsib"></td>
						</tr>
					</tbody>
				</table>

				<div class="add-row-btn-pannel">
					<button type="button" class="add-row-btn addRowBtn"
						onclick="careerPlus()">+</button>
				</div>

			</div>







			<input type="hidden" id="trainNum" value="0">
			<%-- 학력 / 자격증 --%>
			<div class="training-and-licen-pannel">
				<div class="training-table-pannel">
					<table class="training-table flexibleTable" tb="training">
						<thead>
							<tr>
								<td>교육명</td>
								<td>시작일</td>
								<td>종료일</td>
								<td>기관</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><input type="text" data="trainingName"
									class="trainingName" name="trainList[0].trainingName"></td>
								<td><input type="text" data="trainingStartDate"
									class="trainingStartDate dateInput prevDate"
									name="trainList[0].trainingStartDate"></td>
								<td><input type="text" data="trainingEndDate"
									class="trainingEndDate dateInput laterDate"
									name="trainList[0].trainingEndDate"></td>
								<td><input type="text" data="trainingAgency"
									class="trainingAgency" name="trainList[0].trainingAgency"></td>
							</tr>
						</tbody>
					</table>

					<div class="add-row-btn-pannel">
						<button type="button" class="add-row-btn addRowBtn"
							onclick="trainPlus()">+</button>
					</div>

				</div>

				<input type="hidden" id="licenNum" value="0">
				<div class="training-table-pannel">
					<table class="licen-table flexibleTable" tb="licen">
						<thead>
							<tr>
								<td>보유기술 및 외국어능력</td>
								<td>숙련도<br>(A,B,C)
								</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><input type="text" data="licenName" class="licenName"
									name="licenList[0].licenName"></td>
								<td><input type="text" data="licenSkillLevel"
									class="licenSkillLevel" name="licenList[0].licenSkillLevel"></td>
							</tr>
						</tbody>
					</table>

					<div class="add-row-btn-pannel">
						<button type="button" class="add-row-btn addRowBtn"
							onclick="licenPlus()">+</button>
					</div>

				</div>
			</div>







			<div class="clear-pannel"></div>







			<input type="hidden" value="0" id="skillNum">
			<div class="skill-inventory-table-pannel">
				<table class="skill-inventory-table flexibleTable" id="skill_table"tb="skill">
					<thead>
						<tr>
							<td rowspan="2">프로젝트명<br>업무명
							</td>
							<td colspan="2">참여기간</td>
							<td rowspan="2">고객사</td>
							<td rowspan="2">근무회사</td>
							<td colspan="2">개발분야</td>
							<td rowspan="2">역할</td>
							<td colspan="7">개발환경</td>
						</tr>
						<tr>
							<td>시작일</td>
							<td>종료일</td>
							<td>산업</td>
							<td>응용</td>
							<td>기종</td>
							<td>O.S</td>
							<td>언어</td>
							<td>DBMS</td>
							<td>TOOL</td>
							<td>통신</td>
							<td>기타</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><textarea data="skillProjectName"
									class="skillProjectName" name="skillList[0].skillProjectName"></textarea></td>
							<td><input type="text" data="skillStartDate"
								class="skillStartDate dateInput prevDate"
								name="skillList[0].skillStartDate"></td>
							<td><input type="text" data="skillEndDate"
								class="skillEndDate dateInput laterDate"
								name="skillList[0].skillEndDate"></td>
							<td><textarea data="skillCustomerComp"
									class="skillCustomerComp" name="skillList[0].skillCustomerComp"></textarea></td>
							<td><textarea data="skillWorkComp" class="skillWorkComp"
									name="skillList[0].skillWorkComp"></textarea></td>
							<td><textarea data="skillIndustry" class="skillIndustry"
									name="skillList[0].skillIndustry"></textarea></td>
							<td><textarea data="skillApplied" class="skillApplied"
									name="skillList[0].skillApplied"></textarea></td>
							<td><textarea data="skillRole" class="skillRole"
									name="skillList[0].skillRole"></textarea></td>
							<td><textarea data="skillModel" class="skillModel"
									name="skillList[0].skillModel"></textarea></td>
							<td><textarea data="skillOs" class="skillOs"
									name="skillList[0].skillOs"></textarea></td>
							<td><textarea data="skillLang" class="skillLang"
									name="skillList[0].skillLang"></textarea></td>
							<td><textarea data="skillDbms" class="skillDbms"
									name="skillList[0].skillDbms"></textarea></td>
							<td><textarea data="skillTool" class="skillTool"
									name="skillList[0].skillTool"></textarea></td>
							<td><textarea data="skillComm" class="skillComm"
									name="skillList[0].skillComm"></textarea></td>
							<td><textarea data="skillEtc" class="skillEtc"
									name="skillList[0].skillEtc"></textarea></td>
						</tr>
					</tbody>
				</table>

				<div class="add-row-btn-pannel">
					<button type="button" class="add-row-btn addRowBtn"
						onclick="skillPlus()">+</button>
				</div>
			</div>
		</form>
	</div>


	<div class="pop-user-register-pannel" id="drag-ele1">
		<form id="userInfoRead" name="userInfoRead">
			<!-- 검색창 패널 -->
			<div class="pop-user-search-pannel">
	
				<!-- <input type="hidden" id="userInfoTotalCnt">  -->
				<input type="hidden" id="userInfoPageSize" name="userInfoPageSize" value="10"> 
				<input type="hidden" id="pageNo1" name="pageNo1" value="1"> 
				
				
				<select	id="userListSearchPeriod" name="userListSearchPeriod">
					<option value="">검색조건</option>
					<option value="userName">이름</option>
					<option value="userComp">소속회사</option>
					<option value="userDept">부서</option>
				</select> 
				<input type="text" id="userListSearchWord" name="userListSearchWord"> 
				
				<select id="userCareerLength" name="userCareerLength">
					<option value="">경력사항</option>
					<option value="1">1년이상</option>
					<option value="2">2년이상</option>
					<option value="3">3년이상</option>
					<option value="4">4년이상</option>
					<option value="5">5년이상</option>
					<option value="6">6년이상</option>
					<option value="7">7년이상</option>
					<option value="8">8년이상</option>
					<option value="9">9년이상</option>
					<option value="10">10년이상</option>
				</select> 
				<select id="userInfoDataSize" name="userInfoDataSize">
					<option value="10">10개씩</option>
					<option value="20">20개씩</option>
				</select> 
				<select id="genderSelect" name="genderSelect">
					<option value="" selected="selected">선택없음</option>
					<option value="남성">남성</option>
					<option value="여성">여성</option>
				</select> 
				<input type="hidden" id="userGender" name="userGender">
				
				<button type="button" id="userListSearchBtn" class="user-list-search-btn" onclick="callBackList('searchBtn')">검색</button>
				<div class="search-cnt-pannel">
					<span class="search-cnt-prev">검색결과 : <b id="infoCnt"></b></span> 
					<span class="search-cnt-cnt"></span> 
					<span class="search-cnt-later">건</span>
				</div>
				<button type="button" id="getUserCountByCareerDate" name="getUserCountByCareerDate" onclick="searchYear()">연차별 인원보기</button>
				<button type="button" id="userInfoList" name="userInfoList" onclick="callBackList('userListBtn')">전체 인원보기</button>
				<!-- <button id="downloadExel">엑셀 다운로드</button> -->
	
			</div>
	
			<!-- 불러오기 최소화 버튼 -->
			<div class="pop-user-top-btn-pannel ">
				<div class="pop-user-minimize-btn"></div>
			</div>
	
			<div class="clear-pannel"></div>
	
			<div class="keyword-add-pannel">
				<div
					class="keywordInputPannel keyword-input-pannel keyword-input-pannel-invisible">
					#<input maxlength="16">
				</div>
				<div class="pop-keyword-add-btn-pannel keywordAddPannelBtn tooltip">
					<div class="pop-user-keyword-add-btn keywordAddBtn"></div>
					<span class="tooltiptext">진행 했던 프로젝트의 개발환경을 키워드로 추가하여 조회</span>
				</div>
			</div>
		</form>
		
		<div class="pop-register-list-pannel" id="result_div">
			<!-- jsp파일 따로 만듬  -->
			<!-- <table class="pop-register-list">
				<thead>
					<tr>
						<td>등록번호</td>
						<td>성명</td>
						<td>소속회사</td>
						<td>부서</td>
						<td>성별</td>
						<td>경력</td>
						<td>등록날짜</td>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>

			<div class="pop-paging-pannel"></div> -->
		</div>
		
	</div>
</body>
</html>

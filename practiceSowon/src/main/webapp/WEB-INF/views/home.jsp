<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>

<html>
<head>
	  <meta http-equiv="Content-Type" content="text/html;charset=utf-8;" />
	<script src="./resources/compnent/jquery-3.3.1.min.js?"></script>
	<script src="./resources/compnent/jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
	<script src="./resources/compnent/jquery-loading-master/dist/jquery.loading.min.js"></script>
	<script src="./resources/compnent/jqueryPrint/jqueryPrint.js"></script>
    <!-- <script src="./resources/js/util/util.js"></script> -->
    <!-- <link rel="stylesheet" href="/code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"> -->
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>



	<link rel="stylesheet" type="text/css" href="./resources/compnent/jquery-ui-1.12.1.custom/jquery-ui.min.css">
	<link rel="stylesheet" type="text/css" href="./resources/compnent/jquery-loading-master/dist/jquery.loading.min.css">
	<link rel="stylesheet" type="text/css" href="./resources/css/personalHistory/personalHistory.css?ver=1">
	
	<script src="./resources/js/personCard.js" charset="UTF-8"></script>
	<script src="./resources/js/personCardFuc.js" charset="UTF-8"></script>
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

	<div class="custom-loading"><div class="loading-image"></div></div>
	<%-- 새 작성건의 경우 해당 인풋값은 비어있고 수정 및 조회건은 들어감 --%>
		<input id="userIdx" type="hidden">
	<div class="user-info-list-pannel" id="user-info-list-pannel">
		<div class="personal-history-title-pannel">
			<h3>개 인 이 력 카 드</h3>
		</div>
		
		<div class="top-header-pannel">
			
			<div class="status-display-pannel">
				<h5>※ 새 이력 작성</h5>
			</div>
			
			<div class="function-btn-pannel">
				<button class="printBtn">
					출력
				</button>
				<button class="personalHistoryListBtn">
					불러오기
				</button>
				<button class="newHistoryCreateBtn" type="reset">
					새로작성
				</button>
				<button class="personalHistoryResetBtn">
					초기화
				</button>
				<button type="button" class="personalHistorySaveBtn">
					저장
				</button>
			</div>
		</div>
		
<form class="main1">
<!-- <input type="hidden" name="userEmail" id="emailPlus"> -->		
		<table class="user-info-table1">
			<tbody>
				<tr>
					<td>*성명</td>
					<td><input type="text" id="userName" name="userName"></td>
					<td>*주민등록번호</td>
					<td colspan="3"><input type="text" name="userSocialSecunum" id="userSocialSecunum" maxlength="13" placeholder='  "-" 제외한 숫자만 입력'></td>
					<td>성별</td>
					<td>
						<select id="userSex" name="userSex">
							<option value="">선택없음</option>
							<option value="남성">남성</option>
							<option value="여성">여성</option>
						</select>
					</td>
					<td style="display: none;" rowspan="3">
						<div id="imgDiv" >
							<img id="thumbNail" name="thumbNail" width="120" height="120" />
						</div>
					</td>
				</tr>
				
				<tr>
					<td>소속회사</td>
					<td colspan="5"><input type="text" id="userComp" name="userComp"></td>
					<td>입사일</td>
					<td><input type="text" id="userCompEnterdate" name="userCompEnterdate" class="dateInput"></td>
				</tr>
				
				<tr>
					<td>부서</td>
					<td><input type="text" id="userDept" name="userDept"></td>
					<td>직위</td>
					<td><input type="text" id="userSpot" name="userSpot"></td>
					<td>병역</td>
					<td><input type="text" id="userArmyServ" name="userArmyServ"></td>
					<td>결혼</td>
					<td>
						<select id="userMaritalStatus" name="userMaritalStatus">
							<option value="">선택없음</option>
							<option value="기혼">기혼</option>
							<option value="미혼">미혼</option>
						</select>
					</td>
				</tr>
				
				<tr>
					<td>병역<br> 입대 ~ 제대일</td>
					<td colspan="2"><input type="text" id="userArmyServEnter" class="dateInput prevDate" name="userArmyServEnter"></td>
					<td> ~ </td>
					<td colspan="2"><input type="text" id="userArmyServLeave" class="dateInput laterDate" name="userArmyServLeave"></td>
					<td>역종/병과</td>
					<td><input type="text" id="userArmyServPeriod" name="userArmyServPeriod"></td>
 					<td style="display: none;">
							<input type="file" name="file">
							<!-- <input type="hidden" name="userIdx" value="2"> -->
							<!-- <input type="hidden" name="userName" > -->
					</td>
				</tr>
			</tbody>
			
		</table>

		
		
		
		
		
		
		<table class="user-info-table2">

			<tbody>
				<tr>
					<td>전화</td>
					<td><input type="tel" placeholder='   휴대전화 "-" 포함' id="userTelnumWireless" name="userTelnumWireless"></td>
					<td colspan="2"><input type="tel" placeholder='   유선 "-" 포함' id="userTelnumWired" name="userTelnumWired"></td>
				</tr>
				
				<tr>
					<td>E-Mail</td>
					<td><input type="email" id="userEmail" name="userEmail"></td>
					<td>
						<select type="text" id="emailDomain" style="width: 100%;" name="emailDomain">
							<option disabled="disabled" selected="selected">선택하세요</option>
							<option>@naver.com</option>
							<option>@gmail.com</option>
							<option>@daum.net</option>
							<option>직접입력</option>
						</select>
					</td>
					<td id="test12" style="display: none;">
						<input type="text" id="emailDomain1" />
					</td>
				</tr>
				
				<tr>
					<td>주소</td>
					<td>
						<div>
							<input type="text" id="userZipcode" placeholder="우편번호" name="userZipcode">
							<input type="button" id="personalZipcodeSearchBtn" value="우편번호 찾기" onclick="openDaumZipAddress()"/>
							<div class="clear-pannel"></div>
						</div>
					</td>
					<td colspan="2">
						<input type="text" id="userAddress" name="userAddress" placeholder="   주소">
						<!-- <input type="text" id="userAddress"> -->
					</td>
				</tr>
			</tbody>
			
		</table>
		
				
		
		
		
		
		<%-- 학력 / 자격증 --%>
		<div class="edu-and-qualifi-pannel">
			<div class="edu-table-pannel">
				<table class="edu-table flexibleTable" tb="edu">
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
							<td><input type="text" data="eduSchoolName" class="eduSchoolName" name="eduSchoolName"></td>
							<td>
								<select data="eduStatus" class="eduStatus" name="eduStatus">
									<option value="">선택없음</option>
									<option value="입학">입학</option>
									<option value="재학">재학</option>
									<option value="졸업">졸업</option>
									<option value="졸업예정">졸업예정</option>
								</select>
							</td>
							<td><input type="text" data="eduYear" placeholder="" class="eduYear" name="eduYear"></td>
							<td>년</td>
							<td><input type="text" data="eduMonth" placeholder="" class="eduMonth" name="eduMonth"></td>
							<td>월</td>
						</tr>
					</tbody>
				
				</table>
				
				<div class="add-row-btn-pannel">
					<button class="add-row-btn addRowBtn">+</button>
				</div>
				
			</div>
		
</form>
			
			<div class="qualifi-table-pannel">
				<table class="qualifi-table flexibleTable" tb="qualifi">
				
					<thead>
						<tr>
							<td>
								자격증명
							</td>
							<td>
								취득일
							</td>
						</tr>
					</thead>
					
					<tbody>
						<tr>
							<td><input type="text" data="qualifiName" class="qualifiName"></td>
							<td><input type="text" data="qualifiGetdate" class="qualifiGetdate dateInput"></td>
						</tr>
					</tbody>
					
				</table>
				
				<div class="add-row-btn-pannel">
					<button class="add-row-btn addRowBtn">+</button>
				</div>
				
			</div>
		</div>






		<div class="clear-pannel"></div>
		
		
		
		
		
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
						<td><input type="text" data="careerCompName" class="careerCompName"></td>
						<td><input type="text" data="careerEnterdate" class="careerEnterdate dateInput prevDate"></td>
						<td><input type="text" data="careerLeavedate" class="careerLeavedate dateInput laterDate"></td>
						<td><input type="text" data="careerSpot" class="careerSpot"></td>
						<td><input type="text" data="careerResponsib" class="careerResponsib"></td>
					</tr>
				</tbody>
			</table>
			
			<div class="add-row-btn-pannel">
				<button class="add-row-btn addRowBtn">+</button>
			</div>
			
		</div>
		
		
		
		
		
		
		
		
		<%-- 학력 / 자격증 --%>
		<div class="training-and-licen-pannel">
			<div class="training-table-pannel">
				<table class="training-table flexibleTable" tb="training">
					<thead>
						<tr>
							<td>
								교육명
							</td>
							<td>
								시작일
							</td>
							<td>
								종료일
							</td>
							<td>
								기관
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><input type="text" data="trainingName" class="trainingName"></td>
							<td><input type="text" data="trainingStartdate" class="trainingStartdate dateInput prevDate"></td>
							<td><input type="text" data="trainingEnddate" class="trainingEnddate dateInput laterDate"></td>
							<td><input type="text" data="trainingAgency" class="trainingAgency"></td>
						</tr>
					</tbody>
				</table>
				
				<div class="add-row-btn-pannel">
					<button class="add-row-btn addRowBtn">+</button>
				</div>
				
			</div>
			
			<div class="training-table-pannel">
				<table class="licen-table flexibleTable" tb="licen">
					<thead>
						<tr>
							<td>
								보유기술 및 외국어능력
							</td>
							<td>
								숙련도<br>(A,B,C)
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><input type="text" data="licenName" class="licenName"></td>
							<td><input type="text" data="licenSkillLevel" class="licenSkillLevel"></td>
						</tr>
					</tbody>
				</table>
				
				<div class="add-row-btn-pannel">
					<button class="add-row-btn addRowBtn">+</button>
				</div>
				
			</div>
		</div>
		
		
	
	
	
		
		
		<div class="clear-pannel"></div>
		
		
		
		
		
		
		
		
		<div class="skill-inventory-table-pannel">
			<table class="skill-inventory-table flexibleTable" tb="skill">
				<thead>
					<tr>
						<td rowspan="2">프로젝트명<br>업무명</td>
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
						<td><textarea data="skillProjectName" class="skillProjectName"></textarea></td>
						<td><input type="text" data="skillStartdate" class="skillStartdate dateInput prevDate"></td>
						<td><input type="text" data="skillEnddate" class="skillEnddate dateInput laterDate"></td>
						<td><textarea data="skillCustomerComp" class="skillCustomerComp"></textarea></td>
						<td><textarea data="skillWorkComp" class="skillWorkComp"></textarea></td>
						<td><textarea data="skillIndustry" class="skillIndustry"></textarea></td>
						<td><textarea data="skillApplied" class="skillApplied"></textarea></td>
						<td><textarea data="skillRole" class="skillRole"></textarea></td>
						<td><textarea data="skillModel" class="skillModel"></textarea></td>
						<td><textarea data="skillOs" class="skillOs"></textarea></td>
						<td><textarea data="skillLang" class="skillLang"></textarea></td>
						<td><textarea data="skillDbms" class="skillDbms"></textarea></td>
						<td><textarea data="skillTool" class="skillTool"></textarea></td>
						<td><textarea data="skillComm" class="skillComm"></textarea></td>
						<td><textarea data="skillEtc" class="skillEtc"></textarea></td>
					</tr>
				</tbody>
			</table>
			
			<div class="add-row-btn-pannel">
				<button class="add-row-btn addRowBtn">+</button>
			</div>
		</div>
		
	</div>

	
	<div class="pop-user-register-pannel" id="drag-ele1">
	
		<!-- 검색창 패널 -->
		<div class="pop-user-search-pannel">
			
			<input type="hidden" id="userInfoTotalCnt">
			<input type="hidden" id="userInfoPageSize" value="10">
			<input type="hidden" id="userInfoPageNo" value="1">
			
			<select id="userListSearchPeriod">
				<option value="">검색조건</option>
				<option value="userName">이름</option>
				<option value="userComp">소속회사</option>
				<option value="userDept">부서</option>
			</select>
			
			<input type="text" id="userListSearchWord">
			
			<select id="userCareerLength">
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
			
			<select id="userInfoDataSize">
				<option value="10">10개씩</option>
				<option value="20">20개씩</option>
			</select>
			<select id="genderSelect">
				<option value="" selected="selected">선택없음</option>
				<option value="남성">남성</option>
				<option value="여성">여성</option>
			</select>
			<input type="hidden" id="userGender" name="userGender" >
			<button id="userListSearchBtn" class="user-list-search-btn">검색</button>
			<div class="search-cnt-pannel">
				<span class="search-cnt-prev">검색결과 : </span>
				<span class="search-cnt-cnt"></span>
				<span class="search-cnt-later"> 건</span>
			</div>
			<button id="getUserCountByCareerDate">연차별 인원보기</button>
			<!-- <button id="downloadExel">엑셀 다운로드</button> -->
			
		</div>		
		
		<!-- 불러오기 최소화 버튼 -->
		<div class="pop-user-top-btn-pannel minimizeUserPannelBtn">
			<div class="pop-user-minimize-btn">
			</div>
		</div>
		
		<div class="clear-pannel"></div>
		
		<div class="keyword-add-pannel">			
			<div class="keywordInputPannel keyword-input-pannel keyword-input-pannel-invisible">#<input maxlength="16"></div>
			<div class="pop-keyword-add-btn-pannel keywordAddPannelBtn tooltip">
				<div class="pop-user-keyword-add-btn keywordAddBtn">
				+
				</div>
				<span class="tooltiptext">진행 했던 프로젝트의 개발환경을 키워드로 추가하여 조회</span>
			</div>
		</div>
		
		<div class="pop-register-list-pannel">
		
			<table class="pop-register-list">
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
			
			<div class="pop-paging-pannel">
			</div>
		</div>
	</div>
</body>
</html>

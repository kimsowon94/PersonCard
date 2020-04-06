/*우편번호 찾기 (주소 찾기)*/
function openDaumZipAddress() {
	new daum.Postcode({oncomplete : function(data) {
			$("#userZipcode").val(data.zonecode);
			$("#userAddress").val(data.address);
			/*console.log(data);*/
		}
	}).open();
}


/* 유효성검사 */
var crossCheck = function() {
	/* 현재 날짜 구하기 */
	let date = new Date();
	
	/* 현재날짜 구하기 */
	var year = date.getFullYear();
	var month = new String(date.getMonth() + 1);
	var day = new String(date.getDate());
	var sysdate = year + month + day;
	
	/* (입사일) 변수에 담기 */
	var userCompEnterdate = $("#userCompEnterdate").val();
	
	/* 하이픈 삭제를 위하여 split()처리를 하며 split()처리 시 배열에 담김 */
	var compEnterArr = userCompEnterdate.split("-");
	
	/* 배열에 있는 값을 각각 변수에 담는 작업 */
	var compEnterYear = compEnterArr[0]
	var compEnterMonth = parseInt(compEnterArr[1]);
	var compEnterDay = compEnterArr[2];
	var compEnterDate = compEnterYear + compEnterMonth + compEnterDay;

	/* (입대일, 제대일) 변수에 담기 */
	var userArmyServEnter = $("#userArmyServEnter").val();
	var userArmyServLeave = $("#userArmyServLeave").val();
	
	/* 하이픈 삭제를 위하여 split()처리를 하며 split()처리 시 배열에 담김 */
	var armyServEnterArr = userArmyServEnter.split("-");
	var armyServLeaveArr = userArmyServLeave.split("-");
	
	/* 배열에 있는 값을 각각 변수에 담는 작업 */
	var armyServEnterYear = armyServEnterArr[0]
	var armyServEnterMonth = parseInt(armyServEnterArr[1]);
	var armyServEnterDay = armyServEnterArr[2];
	var armyServLeaveYear = armyServLeaveArr[0];
	var armyServLeaveMonth = parseInt(armyServLeaveArr[1]);
	var armyServLeaveDay = armyServLeaveArr[2];
	var armyServEnterDate = armyServEnterYear + armyServEnterMonth+ armyServEnterDay;
	var armyServLeaveDate = armyServLeaveYear + armyServLeaveMonth+ armyServLeaveDay;

	/*이름과 주민등록번호 필수 입력사항 조건*/
	if ($("#userName").val() == "" || $("#userSocialSecunum").val() == "") {
		alert("필수사항 입력이 누락되었습니다.")
		return false;
	}

	/* 입사일을 현재를 초과할 수 없다는 조건 */
	if (userCompEnterdate != "") {
		if (compEnterDate > sysdate) {
			alert("입사일이 현재날짜 이후로 초과될 수 없습니다.");
			return false;
		}
	}
	
	/* 제대일이 입대일을 초과할 수 없다는 조건 */
	if (userArmyServEnter != "" && userArmyServLeave != "") {
		if (armyServEnterDate > armyServLeaveDate) {
			alert("제대일이 입대일보다 앞설 수 없습니다.");
			return false;
		}
	}

	// userEmail 과 emailDomain과 합치기
	var userEmail = $("#userEmail").val().trim();
	var emailDomain = $("#emailDomain").val();
	var addEmail = userEmail + emailDomain;

	if (userEmail != "") {
     
		if ($("#emailDomain option:first").prop("selected") == true	|| $("#emailDomain option:last").prop("selected") == true) 
		{
			$("#userEmail").val(userEmail);
		} else {
			$("#userEmail").val(addEmail);
		}
	}
	return true;
}

function pageCh(pageNo1){
	$("#pageNo1").val(pageNo1);
	callBackList();
}


/* 불러오기 버튼 */
function callBackList(gubun) {
	// 불러오기 화면 띄우기
	$("#drag-ele1").css("display", "block");
	$("#userInfoList").css("display", "none");
	$("#getUserCountByCareerDate").css("display", "block");
	$("#userGender").val($("#genderSelect option:selected").val());

	if (gubun == "searchBtn") {
		$("#pageNo1").val("1");
	}

	var params = $("#userInfoRead").serialize();

	$.ajax({
		type : 'POST',
		url : '/card/userInfoRead.do',
		dataType : 'html',
		data : params,
		success : function(data) {
			$("#result_div").html(data);
			$("#infoCnt").text($("#userInfoCnt").val());
		},
		error : function(request, status, error) { // 통신 에러시
			alert("code : " + request.status + "\r\nmessage : "
					+ request.reponseText);
		},
		beforeSend : function() {
		} // 통신을 시작할때 처리
		,
		complete : function() {
		} // 통신을 완료한후 처리
	});

	// 불러오기 창 숨기기
	$(".pop-user-top-btn-pannel").click(function() {
		$("#drag-ele1").hide();
	})
}

/*불러온 데이터 뿌리기*/ 
function fnPersonInfo(userIdx) {
	$("#drag-ele1").css("display", "none");
	$(".top-header-pannel").find("h5").text("※ 등록번호 : " + userIdx + "(수정)");

	$.ajax({
		type : 'POST',
		url : '/card/personInfo.do',
		dataType : 'JSON',
		data : {
			userIdx : userIdx
		},
		success : function(data) {
			resetInput();
			$("#pageNo1").val("1");
			$("#status").val("update");
			$("#userIdx").val(userIdx);
			
			userInfoDetail(data.userInfo);
			eduDetailList(data.eduDetailList);
			qualifiDetailList(data.qualifiList);
			careerDetailList(data.careerList);
			trainingDetailList(data.trainList)
			licenDetailList(data.licenList);
			skillDetailList(data.skillList);
		},
		error : function(request, status, error) { // 통신 에러시
			alert("code : " + request.status + "\r\nmessage : "
					+ request.reponseText);
		},
		beforeSend : function() {
		} // 통신을 시작할때 처리
		,
		complete : function() {
		} // 통신을 완료한후 처리
	});

}

/*user_info 데이터 뿌리기*/
function userInfoDetail(userInfo) {
	/*뿌려온 데이터중 이메일 정보 @분리하기*/
	if (userInfo.userEmail != null) {
		var email_domain = userInfo.userEmail.split("@");
		var email = email_domain[0];
		var domain = "@" + email_domain[1];
	}

	$("#userName").val(userInfo.userName);
	$("#userSocialSecunum").val(userInfo.userSocialSecunum);
	$("#userSex").val(userInfo.userSex);
	$("#userComp").val(userInfo.userComp);
	$("#userCompEnterdate").val(userInfo.userCompEnterdate);
	$("#userDept").val(userInfo.userDept);
	$("#userSpot").val(userInfo.userSpot);
	$("#userArmyServ").val(userInfo.userArmyServ);
	$("#userMaritalStatus").val(userInfo.userMaritalStatus);
	$("#userArmyServEnter").val(userInfo.userArmyServEnter);
	$("#userArmyServLeave").val(userInfo.userArmyServLeave);
	$("#userArmyServPeriod").val(userInfo.userArmyServPeriod);
	$("#userTelnumWireless").val(userInfo.userTelnumWireless);
	$("#userTelnumWired").val(userInfo.userTelnumWired);
	$("#userEmail").val(email);
	$("#emailDomain").val(domain);
	$("#userZipcode").val(userInfo.userZipcode);
	$("#userAddress").val(userInfo.userAddress);

}

/*edu_info 데이터 뿌리기 */
function eduDetailList(eduList) {
	var emptyCheck = isEmpty(eduList);
	if(emptyCheck){
		return;
	}
	if(eduList.length > 0){$("#eduNum").val(eduList.length-1); }
	
	var eduTable = $(".edu-table");
	var html = "";
	
	for (var i = 0; i < eduList.length; i++) {
		html += '<tr>'
				+ '<td><input type="text" data="eduSchoolName" name="eduList['
				+ i
				+ '].eduSchoolName" class="eduSchoolName" value="'
				+ eduList[i].eduSchoolName
				+ '"></td>'
				+ '<td>'
				+ '<select data="eduStatus" name="eduList['
				+ i
				+ '].eduStatus" class="eduStatus">'
				+ '<option value="">선택없음</option>'
				+ '<option value="입학">입학</option>'
				+ '<option value="재학">재학</option>'
				+ '<option value="졸업">졸업</option>'
				+ '<option value="졸업예정">졸업예정</option>'
				+ '</select>'
				+ '</td>'
				+ '<td><input type="text" data="eduYear" name="eduList['
				+ i
				+ '].eduYear" placeholder="" class="eduYear" value="'
				+ eduList[i].eduYear
				+ '"></td>'
				+ '<td>년</td>'
				+ '<td><input type="text" data="eduMonth" name="eduList['
				+ i
				+ '].eduMonth" placeholder="" class="eduMonth" value="'
				+ eduList[i].eduMonth
				+ '"></td>'
				+ '<td>월</td>'
				+ '<td style="display:none;" class="removeTrBtn"><button type="button" id="eduBtn'
				+ i + '"  class="edu">-</button></td>' + '</tr>';
	}

	eduTable.find("tbody").html(html);
	for (var i = 0; i < eduList.length; i++) {
		$("select[name='eduList[" + i + "].eduStatus'").val(eduList[i].eduStatus);
	}
	removeBtn();
	$("#eduBtn0").parent().remove();
}

/*qualifis 데이터 뿌리기 */
function qualifiDetailList(qualifiList) {

	var qualifiTable = $(".qualifi-table");
	var html = "";
	
	var emptyCheck = isEmpty(qualifiList);
	if(emptyCheck){
		fnDatePicker(qualifiTable);
		return;
	}
	
	if(qualifiList.length>0){$("#qualifiNum").val(qualifiList.length-1);}

	for (var i = 0; i < qualifiList.length; i++) 
	{
		
		html += '<tr>' +
		'<td><input type="text" data="qualifiName" name="qualifiList[' + i + '].qualifiName" class="qualifiName" value="' + qualifiList[i].qualifiName + '"></td>' +
		'<td><input type="text" data="qualifiGetDate" name="qualifiList[' + i + '].qualifiGetDate" class="qualifiGetDate dateInput" value="' + qualifiList[i].qualifiGetDate + '"></td>' +
		'<td style="display:none;" class="removeTrBtn"><button type="button" id="qualifiBtn' + i + '"  class="qualifi">-</button></td>' +
		'</tr>';

	}
	
	 qualifiTable.find("tbody").html(html);
	 fnDatePicker(qualifiTable);
	 removeBtn();
	 $("#qualifiBtn0").parent().remove();
}

/*career 데이터 뿌리기*/ 
function careerDetailList(careerList) {
	var careerTable = $(".career-info");
	var emptyCheck = isEmpty(careerList);
	if(emptyCheck){		
		fnDatePicker(careerTable);
		return;
	}
	if(careerList.length>0){$("#careerNum").val(careerList.length-1);}
	
	var html = "";
	
	for (var i = 0; i < careerList.length; i++) {
		html += '<tr>' +
		'<td><input type="text" data="careerCompName" name="careerList[' + i + '].careerCompName" class="careerCompName" value="' + careerList[i].careerCompName + '"></td>' +
		'<td><input type="text" data="careerEnterdate" name="careerList[' + i + '].careerEnterDate" class="careerEnterDate dateInput prevDate hasDatepicker" value="' + careerList[i].careerEnterDate + '"></td>' +
		'<td><input type="text" data="careerLeavedate" name="careerList[' + i + '].careerLeaveDate" class="careerLeaveDate dateInput laterDate hasDatepicker" value="' + careerList[i].careerEnterDate + '"></td>' +
		'<td><input type="text" data="careerSpot" name="careerList[' + i + '].careerSpot" class="careerSpot" value="' + careerList[i].careerSpot + '"></td>' +
		'<td><input type="text" data="careerResponsib" name="careerList[' + i + '].careerResponsib" class="careerResponsib" value="' + careerList[i].careerResponsib + '"></td>' +
		'<td style="display:none;" class="removeTrBtn"><button type="button" id="careerBtn' + i + '"  class="career">-</button></td>' +
		'</tr>';
	}

	careerTable.find("tbody").html(html);
	fnDatePicker(careerTable);
	removeBtn();
	$("#careerBtn0").parent().remove();
}

/*training데이터 뿌리기 */
function trainingDetailList(trainList) {
	var trainTable = $(".training-table");
	var html = "";
	var emptyCheck = isEmpty(trainList);
	if(emptyCheck){
		fnDatePicker(trainTable);
		return;
	}
	if(trainList.length>0){$("#trainNum").val(trainList.length-1);}

	for(var i = 0; i < trainList.length; i++){
		html += '<tr>' +
					'<td><input type="text" data="trainingName" name="trainList[' + i + '].trainingName" class="trainingName" value="' + trainList[i].trainingName + '"></td>' +
					'<td><input type="text" data="trainingStartDate" name="trainList[' + i + '].trainingStartDate" class="trainingStartDate dateInput prevDate" value="' + trainList[i].trainingStartDate + '"></td>' +
					'<td><input type="text" data="trainingEndDate" name="trainList[' + i + '].trainingEndDate" class="trainingEndDate dateInput laterDate" value="' + trainList[i].trainingEndDate + '"></td>' +
					'<td><input type="text" data="trainingAgency" name="trainList[' + i + '].trainingAgency" class="trainingAgency" value="' + trainList[i].trainingAgency + '"></td>' +
					'<td><button type="button" style="display:none;" class="removeTrBtn train" id="trainingBtn' + i + '"  class="training">-</button></td>' +
				'</tr>';
	}
	
	trainTable.find("tbody").html(html);
	
	fnDatePicker(trainTable);
	$("#trainingBtn0").parent().remove();
	
	removeBtn();
}

/*licen 데이터 뿌리기*/
function licenDetailList(licenList){
		
	var licenTable = $(".licen-table");
	var html = "";
	
	var emptyCheck = isEmpty(licenList);
	if(emptyCheck){
		return;
	}
	
	if(licenList.length>0){$("#licenNum").val(licenList.length-1);}
	
	for(var i = 0; i < licenList.length; i++){
		html += '<tr>' +
					'<td><input type="text" data="licenName" name="licenList[' + i + '].licenName" class="licenName" value="' + licenList[i].licenName + '"></td>' +
					'<td><input type="text" data="licenSkillLevel" name="licenList[' + i + '].licenSkillLevel" class="licenSkillLevel" value="' + licenList[i].licenSkillLevel + '"></td>' +
					'<td style="display:none;" class="removeTrBtn"><button type="button" id="licenBtn' + i + '"  class="licen">-</button></td>' +
				'</tr>';

	}
	licenTable.find("tbody").html(html);
	removeBtn();
	$("#licenBtn0").parent().remove();
}

/*skill데이터 뿌리기*/
function skillDetailList(skillList) {
	
	var skillTable = $("#skill_table");
	var html = "";
	

	var emptyCheck = isEmpty(skillList);
	if(emptyCheck){
		fnDatePicker(skillTable);
		return;
	}
	
	if(skillList.length>0){$("#skillNum").val(skillList.length-1);}

	for(var i = 0; i < skillList.length; i++){
		html += '<tr>' +
					'<td><textarea data="skillProjectName" name="skillList[' + i + '].skillProjectName" class="skillProjectName">' + skillList[i].skillProjectName + '</textarea></td>' +
					'<td><input type="text" data="skillStartDate" name="skillList[' + i + '].skillStartDate" class="skillStartDate dateInput prevDate" value="' + skillList[i].skillStartDate + '"></td>' +
					'<td><input type="text" data="skillEndDate" name="skillList[' + i + '].skillEndDate" class="skillEndDate dateInput laterDate" value="' + skillList[i].skillEndDate + '"></td>' +
					'<td><textarea data="skillCustomerComp" name="skillList[' + i + '].skillCustomerComp" class="skillCustomerComp">' + skillList[i].skillCustomerComp + '</textarea></td>' +
					'<td><textarea data="skillWorkComp" name="skillList[' + i + '].skillWorkComp" class="skillWorkComp">' + skillList[i].skillWorkComp + '</textarea></td>' +
					'<td><textarea data="skillIndustry" name="skillList[' + i + '].skillIndustry" class="skillIndustry">' + skillList[i].skillIndustry + '</textarea></td>' +
					'<td><textarea data="skillApplied" name="skillList[' + i + '].skillApplied" class="skillApplied">' + skillList[i].skillApplied + '</textarea></td>' +
					'<td><textarea data="skillRole" name="skillList[' + i + '].skillRole" class="skillRole">' + skillList[i].skillRole + '</textarea></td>' +
					'<td><textarea data="skillModel" name="skillList[' + i + '].skillModel" class="skillModel">' + skillList[i].skillModel + '</textarea></td>' +
					'<td><textarea data="skillOs" name="skillList[' + i + '].skillOs" class="skillOs">' + skillList[i].skillOs + '</textarea></td>' +
					'<td><textarea data="skillLang" name="skillList[' + i + '].skillLang" class="skillLang">' + skillList[i].skillLang + '</textarea></td>' +
					'<td><textarea data="skillDbms" name="skillList[' + i + '].skillDbms" class="skillDbms">' + skillList[i].skillDbms + '</textarea></td>' +
					'<td><textarea data="skillTool" name="skillList[' + i + '].skillTool" class="skillTool">' + skillList[i].skillTool + '</textarea></td>' +
					'<td><textarea data="skillComm" name="skillList[' + i + '].skillComm" class="skillComm">' + skillList[i].skillComm + '</textarea></td>' +
					'<td><textarea data="skillEtc" name="skillList[' + i + '].skillEtc" class="skillEtc">' + skillList[i].skillEtc + '</textarea></td>' +
					'<td style="display:none;" class="removeTrBtn"><button type="button" id="skillBtn' + i + '"  class="skill">-</button></td>' +
				'</tr>';
	}
	
	skillTable.find("tbody").html(html);
	fnDatePicker(skillTable);
	removeBtn();
	
	$("#skillBtn0").parent().remove();

}

/*연차별 인원 구하기*/
function searchYear() {
	$("#getUserCountByCareerDate").css("display", "none");
	$("#userInfoList").css("display", "block");
	
	
	$.ajax({
		type : 'POST',
		url : '/card/searhYear.do',
		dataType : 'html',
		data : {},
		success : function(data) {
			$("#result_div").html(data);
		},
		error : function(request, status, error) { // 통신 에러시
			alert("code : " + request.status + "\r\nmessage : "
					+ request.reponseText);
		},
		beforeSend : function() {
		} // 통신을 시작할때 처리
		,
		complete : function() {
		} // 통신을 완료한후 처리
	});
}

/*eud table 행추가*/
function eduSchoolPlus() {
	var eduNum = $("#eduNum").val();
	var num = parseInt(eduNum) + 1;

	$("#eduNum").val(num);

	var a = "";
	a = "<tr>"
			+ "<td><input type='text' data='eduSchoolName' class='eduSchoolName' name='eduList["
			+ num
			+ "].eduSchoolName'></td>"
			+ "<td>"
			+ "<select data='eduStatus' class='eduStatus' name='eduList["
			+ num
			+ "].eduStatus'>"
			+ "<option value=''>선택없음</option>"
			+ "<option value='입학'>입학</option>"
			+ "<option value='재학'>재학</option>"
			+ "<option value='졸업'>졸업</option>"
			+ "<option value='졸업예정'>졸업예정</option>"
			+ "</select>"
			+ "</td>"
			+ "<td><input type='text' data='eduYear' placeholder='' class='eduYear' name='eduList["
			+ num
			+ "].eduYear'></td>"
			+ "<td>년</td>"
			+ "<td><input type='text' data='eduMonth' placeholder='' class='eduMonth' name='eduList["
			+ num
			+ "].eduMonth'></td>"
			+ "<td>월</td>"
			+ "<td><button type='button' style='display:none;' class='removeTrBtn edu'>-</button></td>"
			+ "</tr>"
			
	$(".edu-table").find("tbody").append(a);

	removeBtn();

}

/*qualifi 테이블 행추가*/
function qualifiPlus() {
	var a = "";

	var qualifiNum = $("#qualifiNum").val();
	var num = parseInt(qualifiNum) + 1;
	var qualifiTable = $(".qualifi-table");
	$("#qualifiNum").val(num);

	a = "<tr>"
			+ "<td><input type='text' data='qualifiName' class='qualifiName' name='qualifiList["
			+ num
			+ "].qualifiName'></td>"
			+ "<td><input type='text' data='qualifiGetDate' class='qualifiGetDate dateInput' name='qualifiList["
			+ num
			+ "].qualifiGetDate'></td>"
			+ "<td><button type='button' style='display:none;' class='removeTrBtn qualifi'>-</button></td>"
			+ "</tr>";
	
	$(".qualifi-table").find("tbody").append(a);
	fnDatePicker(qualifiTable);
	removeBtn();

}

/*career 테이블 행추가*/
function careerPlus() {

	var a = "";
	var careerNum = $("#careerNum").val();
	var num = parseInt(careerNum) + 1;
	var careerTable = $(".career-info");

	$("#careerNum").val(num);

	a = "<tr>"
			+ "<td><input type='text' data='careerCompName' class='careerCompName' name='careerList["
			+ num
			+ "].careerCompName'></td>"
			+ "<td><input type='text' data='careerEnterDate' class='careerEnterDate dateInput prevDate' name='careerList["
			+ num
			+ "].careerEnterDate'></td>"
			+ "<td><input type='text' data='careerLeaveDate' class='careerLeaveDate dateInput laterDate' name='careerList["
			+ num
			+ "].careerLeaveDate'></td>"
			+ "<td><input type='text' data='careerSpot' class='careerSpot' name='careerList["
			+ num
			+ "].careerSpot'></td>"
			+ "<td><input type='text' data='careerResponsib' class='careerResponsib' name='careerList["
			+ num
			+ "].careerResponsib'></td>"
			+ "<td><button type='button' style='display:none;' class='removeTrBtn career'>-</button></td>"
			+ "</tr>";

	
	$(".career-info").find("tbody").append(a);
	fnDatePicker(careerTable);
	
	removeBtn();

}

/*taining 테이블 행추가*/
function trainPlus() {
	var a = "";

	var trainNum = $("#trainNum").val();
	var num = parseInt(trainNum) + 1;
	var trainTable = $(".training-table")
	$("#trainNum").val(num);

	a = "<tr>"
			+ "<td><input type='text' data='trainingName' class='trainingName' name='trainList["
			+ num
			+ "].trainingName'></td>"
			+ "<td><input type='text' data='trainingStartDate' class='trainingStartDate dateInput prevDate' name='trainList["
			+ num
			+ "].trainingStartDate'></td>"
			+ "<td><input type='text' data='trainingEndDate' class='trainingEndDate dateInput laterDate' name='trainList["
			+ num
			+ "].trainingEndDate'></td>"
			+ "<td><input type='text' data='trainingAgency' class='trainingAgency' name='trainList["
			+ num
			+ "].trainingAgency'></td>"
			+ "<td><button type='button' style='display:none;' class='removeTrBtn train'>-</button></td>"
			+ "</tr>"
			
	$(".training-table").find("tbody").append(a);

	fnDatePicker(trainTable);
	removeBtn();

}

/*licen 테이블 행추가*/
function licenPlus() {
	var a = "";
	var licenNum = $("#licenNum").val();
	var num = parseInt(licenNum) + 1;
	var licenTable = $(".licen-table");

	$("#licenNum").val(num);

	a = "<tr>"
			+ "<td><input type='text' data='licenName' class='licenName' name='licenList["
			+ num
			+ "].licenName'></td>"
			+ "<td><input type='text' data='licenSkillLevel' class='licenSkillLevel' name='licenList["
			+ num
			+ "].licenSkillLevel'></td>"
			+ "<td><button type='button' style='display:none;' class='removeTrBtn licen'>-</button></td>"
			+ "</tr>";

	$(".licen-table").find("tbody").append(a);

	fnDatePicker(licenTable);

	removeBtn();
}

/*skill 테이블 행추가*/
function skillPlus() {

	var a = "";
	var skillNum = $("#skillNum").val();
	var num = parseInt(skillNum) + 1;
	var skillTable = $("#skill_table");

	$("#skillNum").val(num);

	a = "<tr>"
			+ "<td><textarea data='skillProjectName' class='skillProjectName' name='skillList["
			+ num
			+ "].skillProjectName'></textarea></td>"
			+ "<td><input type='text' data='skillStartDate' class='skillStartDate dateInput prevDate' name='skillList["
			+ num
			+ "].skillStartDate'></td>"
			+ "<td><input type='text' data='skillEndDate' class='skillEndDate dateInput laterDate' name='skillList["
			+ num
			+ "].skillEndDate'></td>"
			+ "<td><textarea data='skillCustomerComp' class='skillCustomerComp' name='skillList["
			+ num
			+ "].skillCustomerComp'></textarea></td>"
			+ "<td><textarea data='skillWorkComp' class='skillWorkComp' name='skillList["
			+ num
			+ "].skillWorkComp'></textarea></td>"
			+ "<td><textarea data='skillIndustry' class='skillIndustry' name='skillList["
			+ num
			+ "].skillIndustry'></textarea></td>"
			+ "<td><textarea data='skillApplied' class='skillApplied' name='skillList["
			+ num
			+ "].skillApplied'></textarea></td>"
			+ "<td><textarea data='skillRole' class='skillRole' name='skillList["
			+ num
			+ "].skillRole'></textarea></td>"
			+ "<td><textarea data='skillModel' class='skillModel' name='skillList["
			+ num
			+ "].skillModel'></textarea></td>"
			+ "<td><textarea data='skillOs' class='skillOs' name='skillList["
			+ num
			+ "].skillOs'></textarea></td>"
			+ "<td><textarea data='skillLang' class='skillLang' name='skillList["
			+ num
			+ "].skillLang'></textarea></td>"
			+ "<td><textarea data='skillDbms' class='skillDbms' name='skillList["
			+ num
			+ "].skillDbms'></textarea></td>"
			+ "<td><textarea data='skillTool' class='skillTool' name='skillList["
			+ num
			+ "].skillTool'></textarea></td>"
			+ "<td><textarea data='skillComm' class='skillComm' name='skillList["
			+ num
			+ "].skillComm'></textarea></td>"
			+ "<td><textarea data='skillEtc' class='skillEtc' name='skillList["
			+ num
			+ "].skillEtc'></textarea></td>"
			+ "<td><button type='button' style='display:none;' class='removeTrBtn skill'>-</button></td>"
			+ "</tr>";

	
	$(".skill-inventory-table").find("tbody").append(a);
	fnDatePicker(skillTable);
	removeBtn();
}

/*행삭제 버튼*/ 
function removeBtn() {

	$(".edu").unbind().click(function() {
		var $btnSelf = $(this);
		var $parentTr = $btnSelf.parent().parent();
		/* var $parentTbody = $parentTr.parent(); */

		var eduCnt = $("#eduNum").val();
		var minCnt = parseInt(eduCnt) - 1;
		$("#eduNum").val(minCnt);

		$parentTr.remove();

		var i = 0;

		$('input[data="eduSchoolName"]').each(function() {
			$(this).attr('name', 'eduList[' + i + '].eduSchoolName');
			if (i != eduCnt - 1) {
				i++;
			}
		});
		i = 0;
		$('select[data="eduStatus"]').each(function() {
			$(this).attr('name', 'eduList[' + i + '].eduStatus');
			if (i != eduCnt - 1) {
				i++;
			}
		});
		i = 0;
		$('input[data="eduYear"]').each(function() {
			$(this).attr('name', 'eduList[' + i + '].eduYear');
			if (i != eduCnt - 1) {
				i++;
			}
		});
		i = 0;
		$('input[data="eduMonth"]').each(function() {
			$(this).attr('name', 'eduList[' + i + '].eduMonth');
			if (i != eduCnt - 1) {
				i++;
			}
		});
	})

	$(".qualifi").unbind().click(function() {
		var $btnSelf = $(this);
		var $parentTr = $btnSelf.parent().parent();

		var qualifiCnt = $("#qualifiNum").val();
		var minCnt = parseInt(qualifiCnt) - 1;
		$("#qualifiNum").val(minCnt);

		$parentTr.remove();

		var i = 0;
		$("input[data='qualifiName']").each(function() {
			$(this).attr("name", "qualifiList[" + i + "].qualifiName");
			if (i != qualifiCnt - 1) {
				i++;
			}
		})

		i = 0;
		$("input[data='qualifiGetDate']").each(function() {
			$(this).attr("name", "qualifiList[" + i + "].qualifiGetDate");
			if (i != qualifiCnt - 1) {
				i++;
			}
		})

	});

	$(".career").unbind().click(function() {
		var $btnSelf = $(this);
		var $parentTr = $btnSelf.parent().parent();

		var careerCnt = $("#careerNum").val();
		var minCnt = parseInt(careerCnt) - 1;
		$("#careerNum").val(minCnt);

		$parentTr.remove();

		var i = 0;
		$("input[data='careerCompName']").each(function() {
			$(this).attr("name", "careerList[" + i + "].careerCompName");
			if (i != careerCnt - 1) {
				i++;
			}
		});
		i = 0;
		$("input[data='careerEnterDate']").each(function() {
			$(this).attr("name", "careerList[" + i + "].careerEnterDate");
			if (i != careerCnt - 1) {
				i++;
			}
		});
		i = 0;
		$("input[data='careerLeaveDate']").each(function() {
			$(this).attr("name", "careerList[" + i + "].careerLeaveDate");
			if (i != careerCnt - 1) {
				i++;
			}
		});
		i = 0;
		$("input[data='careerSpot']").each(function() {
			$(this).attr("name", "careerList[" + i + "].careerSpot");
			if (i != careerCnt - 1) {
				i++;
			}
		});
		i = 0;
		$("input[data='careerResponsib']").each(function() {
			$(this).attr("name", "careerList[" + i + "].careerResponsib");
			if (i != careerCnt - 1) {
				i++;
			}
		});

	});

	$(".train").unbind().click(function() {
		var $btnSelf = $(this);
		var $parentTr = $btnSelf.parent().parent();
		
		var trainCnt = $("#trainNum").val();
		var minCnt = parseInt(trainCnt) - 1;
		$("#trainNum").val(minCnt);

		$parentTr.remove();
		var i = 0;

		$("input[data='trainingName']").each(function() {
			$(this).attr("name", "trainList[" + i + "].trainingName");
			if (i != trainCnt - 1) {
				i++;
			}
		});
		i = 0;
		$("input[data='trainingStartDate']").each(function() {
			$(this).attr("name", "trainList[" + i + "].trainingStartDate");
			if (i != trainCnt - 1) {
				i++;
			}
		});
		i = 0;
		$("input[data='trainingEndDate']").each(function() {
			$(this).attr("name", "trainList[" + i + "].trainingEndDate");
			if (i != trainCnt - 1) {
				i++;
			}
		});
		i = 0;
		$("input[data='trainingAgency']").each(function() {
			$(this).attr("name", "trainList[" + i + "].trainingAgency");
			if (i != trainCnt - 1) {
				i++;
			}
		});
	});

	$(".licen").unbind().click(function() {
		var $btnSelf = $(this);
		var $parentTr = $btnSelf.parent().parent();

		var licenCnt = $("#licenNum").val();
		var minCnt = parseInt(licenCnt) - 1;
		$("#licenNum").val(minCnt);

		$parentTr.remove();
		var i = 0;
		$("input[data='licenName']").each(function() {
			$(this).attr("name", "licenList[" + i + "].licenName");
			if (i != licenCnt - 1) {
				i++;
			}
		})
		i = 0;
		$("input[data='licenSkillLevel']").each(function() {
			$(this).attr("name", "licenList[" + i + "].licenSkillLevel");
			if (i != licenCnt - 1) {
				i++;
			}
		})
	});

	$(".skill").unbind().click(function() {
		var $btnSelf = $(this);
		var $parentTr = $btnSelf.parent().parent();

		var skillCnt = $("#skillNum").val();
		var minCnt = parseInt(skillCnt) - 1;
		$("#skillNum").val(minCnt);

		$parentTr.remove();
		var i = 0;
		$("textarea[data='skillProjectName']").each(function() {
			$(this).attr("name", "skillList[" + i + "].skillProjectName");
			if (i != skillCnt - 1) {
				i++;
			}
		})
		i = 0;
		$("input[data='skillStartDate']").each(function() {
			$(this).attr("name", "skillList[" + i + "].skillStartDate");
			if (i != skillCnt - 1) {
				i++;
			}
		})
		i = 0;
		$("input[data='skillEndDate']").each(function() {
			$(this).attr("name", "skillList[" + i + "].skillEndDate");
			if (i != skillCnt - 1) {
				i++;
			}
		})
		i = 0;
		$("textarea[data='skillCustomerComp']").each(function() {
			$(this).attr("name", "skillList[" + i + "].skillCustomerComp");
			if (i != skillCnt - 1) {
				i++;
			}
		})
		i = 0;
		$("textarea[data='skillWorkComp']").each(function() {
			$(this).attr("name", "skillList[" + i + "].skillWorkComp");
			if (i != skillCnt - 1) {
				i++;
			}
		})
		i = 0;
		$("textarea[data='skillIndustry']").each(function() {
			$(this).attr("name", "skillList[" + i + "].skillIndustry");
			if (i != skillCnt - 1) {
				i++;
			}
		})
		i = 0;
		$("textarea[data='skillApplied']").each(function() {
			$(this).attr("name", "skillList[" + i + "].skillApplied");
			if (i != skillCnt - 1) {
				i++;
			}
		})
		i = 0;
		$("textarea[data='skillRole']").each(function() {
			$(this).attr("name", "skillList[" + i + "].skillRole");
			if (i != skillCnt - 1) {
				i++;
			}
		})
		i = 0;
		$("textarea[data='skillModel']").each(function() {
			$(this).attr("name", "skillList[" + i + "].skillModel");
			if (i != skillCnt - 1) {
				i++;
			}
		})
		i = 0;
		$("textarea[data='skillOs']").each(function() {
			$(this).attr("name", "skillList[" + i + "].skillOs");
			if (i != skillCnt - 1) {
				i++;
			}
		})
		i = 0;
		$("textarea[data='skillLang']").each(function() {
			$(this).attr("name", "skillList[" + i + "].skillLang");
			if (i != skillCnt - 1) {
				i++;
			}
		})
		i = 0;
		$("textarea[data='skillDbms']").each(function() {
			$(this).attr("name", "skillList[" + i + "].skillDbms");
			if (i != skillCnt - 1) {
				i++;
			}
		})
		i = 0;
		$("textarea[data='skillTool']").each(function() {
			$(this).attr("name", "skillList[" + i + "].skillTool");
			if (i != skillCnt - 1) {
				i++;
			}
		})
		i = 0;
		$("textarea[data='skillComm']").each(function() {
			$(this).attr("name", "skillList[" + i + "].skillComm");
			if (i != skillCnt - 1) {
				i++;
			}
		})
		i = 0;
		$("textarea[data='skillEtc']").each(function() {
			$(this).attr("name", "skillList[" + i + "].skillEtc");
			if (i != skillCnt - 1) {
				i++;
			}
		})
	})

	$(".flexibleTable").find("tbody").find("tr").unbind().hover(function() {
		var $trSelf = $(this);
		var $childRemoveBtn = $trSelf.find(".removeTrBtn");

		$childRemoveBtn.css("display", "block");
	}, function() {
		var $trSelf = $(this);
		var $childRemoveBtn = $trSelf.find(".removeTrBtn");

		$childRemoveBtn.css("display", "none");
	});

}

//모든 입력 창 리셋
function resetInput() {
	var notElementId = "#userIdx, #userInfoDataSize, #userInfoPageSize, #personalZipcodeSearchBtn";
	var defaltId = "#careerNum, #eduNum, #licenNum, #qualifiNum, #skillNum, #trainNum, #pageNo1";

	$("input, select").not(notElementId).val("");
	$("textarea").not(notElementId).text("");
	$("#status").val("status");

	$(defaltId).val("0");

	$(".flexibleTable").find("tbody").find("tr:not(:first-child)").remove();
	$(".flexibleTable").find(".dateInput").attr("id", "").removeClass(
			'hasDatepicker').datepicker();
	$("textarea").each(function() {
		resize($(this));
	}) // 새로 불러온 정보 textarea 리사이징
}

//오브젝트 높이 재설정
function resize($obj) {
	$obj.height(1).height($obj.prop('scrollHeight') + 12);
}

//작성상태변경
function modeChange(gubun) {	
	if (gubun == "NEW") { // 새 이력작성
		if (confirm("새 이력을 작성하시겠습니까?")) {
			resetInput(); // 모든 입력 창 리셋
			$(".status-display-pannel").find("h5").text("※ 새 이력 작성");
			$("#userIdx").val("");
			$("#pageNo1").val("1");
			/*$("#status").val("new");*/
			$("#userSocialSecunum").prop("disabled", false);
			$(".user-info-list-pannel").css("background-color", "#ebf2f1");
			$("#status").val("status");
		}
	}
}

/*datePicker함수*/
function fnDatePicker(picker) {
	picker.find("tr").find(".dateInput").attr("id","").removeClass('hasDatepicker').datepicker({
        showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
          ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
          ,changeYear: true //콤보박스에서 년 선택 가능
          ,changeMonth: true //콤보박스에서 월 선택 가능                              
          ,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
          ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
          ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
          ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
          ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
        ,dateFormat: 'yy-mm-dd' //Input Display Format 변경
     });   // datepicker 재정의
}

/*프린트 클릭 시 적용된 css변경*/
function fnPrint() 
{
	document.getElementById("function-btn-pannel").style.display ="none";
	document.getElementById("personalZipcodeSearchBtn").style.display ="none";
	$(".addRowBtn").css("display","none");
	$("select").replaceWith("<input type='text");
	$(".dateInput").removeAttr("class");
	
	window.print();
	location.reload();
}

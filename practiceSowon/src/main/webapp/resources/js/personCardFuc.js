
/*우편번호 찾기 (주소 찾기)*/
function openDaumZipAddress() {

	new daum.Postcode({

		oncomplete:function(data) {

			$("#userZipcode").val(data.zonecode);

			$("#userAddress").val(data.address);

			console.log(data);

		}

	}).open();
}



/*유효성검사*/
var crossCheck = function (){
	
	/*현재 날짜 구하기*/
	let date = new Date();
	
	/*현재날짜 구하기*/
	var year = date.getFullYear(); 
	var month = new String(date.getMonth()+1); 
	var day = new String(date.getDate()); 

	var sysdate = year + month  + day;
	
	/*(입사일) 변수에 담기*/
	var userCompEnterdate = $("#userCompEnterdate").val();
	
	/*하이픈 삭제를 위하여 split()처리를 하며 split()처리 시 배열에 담김*/
	var compEnterArr = userCompEnterdate.split("-");
	
	/*배열에 있는 값을 각각 변수에 담는 작업*/
	var compEnterYear = compEnterArr[0]
	var compEnterMonth =parseInt(compEnterArr[1]);
	var compEnterDay = compEnterArr[2];
	
	var compEnterDate = compEnterYear+compEnterMonth+compEnterDay;
	
	
	/*(입대일, 제대일) 변수에 담기*/
	var userArmyServEnter = $("#userArmyServEnter").val();
	var userArmyServLeave = $("#userArmyServLeave").val();
	/*하이픈 삭제를 위하여 split()처리를 하며 split()처리 시 배열에 담김*/
	var armyServEnterArr = userArmyServEnter.split("-");
	var armyServLeaveArr = userArmyServLeave.split("-");
	/*배열에 있는 값을 각각 변수에 담는 작업*/
	var armyServEnterYear = armyServEnterArr[0]
	var armyServEnterMonth =parseInt(armyServEnterArr[1]);
	var armyServEnterDay = armyServEnterArr[2];
	
	var armyServLeaveYear = armyServLeaveArr[0];
	var armyServLeaveMonth = parseInt(armyServLeaveArr[1]);
	var armyServLeaveDay = armyServLeaveArr[2];
	
	var armyServEnterDate = armyServEnterYear+armyServEnterMonth+armyServEnterDay;
	var armyServLeaveDate = armyServLeaveYear+armyServLeaveMonth+armyServLeaveDay;
	
		
	if($("#userName").val()=="" || $("#userSocialSecunum").val() == "")
	{
		alert("필수사항 입력이 누락되었습니다.")
		return false;
	}
	
			
	/*입사일을 현재를 초과할 수 없다는 조건*/
	if(userCompEnterdate != "" )
	{
		if(compEnterDate>sysdate)
		{
			alert("입사일이 현재날짜 이후로 초과될 수 없습니다.");
			return false;
		}
	}
	
	if(userArmyServEnter != "" && userArmyServLeave != "")
	{
		/*제대일이 입대일을 초과할 수 없다는 조건*/
		if(armyServEnterDate>armyServLeaveDate)
		{
			alert("제대일이 입대일보다 앞설 수 없습니다.");
			return false;
		}
	}	
	
	//userEmail 과 emailDomain과 합치기	
	var userEmail = $("#userEmail").val().trim();
	var emailDomain = $("#emailDomain").val();
	var addEmail = userEmail + emailDomain;
	
	if(userEmail != "")
	{
				
		if($("#emailDomain option:first").prop("selected") == true || $("#emailDomain option:last").prop("selected") == true)
		{
			$("#userEmail").val(userEmail);
		}
		else
		{
			$("#userEmail").val(addEmail);
		}
	}
	
	return true;
	
}
function pageCh(pageNo1) 
{
	$("#pageNo1").val(pageNo1);
	callBackList();
}

/*불러오기 버튼*/
function callBackList(gubun) { 
	if(gubun == "searchBtn"){
		$("#pageNo1").val("1");
	}
	
	// 불러오기 화면 띄우기
	$("#drag-ele1").css("display","block");
	$("#userGender").val($("#genderSelect option:selected").val());
	
	/*var userInfoDataSize = $("#userInfoDataSize").val();	
	$("#userInfoPageSize").val(userInfoDataSize);*/
	
	/*var userInfoPageSize = $("userInfoPageSize").val();*/
	
	
	var params = $("#userInfoRead").serialize();
	
	$.ajax({ 
		type: 'POST' 
		, url: '/card/userInfoRead.do'
		, dataType : 'html'
		, data : params
		, success: function(data) { 
			$("#result_div").html(data);
			$("#infoCnt").text($("#userInfoCnt").val());
		},
		error : function(request, status, error){ //통신 에러시
			alert("code : " +request.status + "\r\nmessage : " + request.reponseText);
		}
		,beforeSend:function(){} //통신을 시작할때 처리
		,complete :function(){}  //통신을 완료한후 처리
	});
	
	
	// 불러오기 창 숨기기
	$(".pop-user-top-btn-pannel").click(function() {
		$("#drag-ele1").hide();
	})

	
}

function eduSchoolPlus() {
	
	var eduNum = $("#eduNum").val();
	
	var num = parseInt(eduNum) + 1;
	
	$("#eduNum").val(num);
	
	var a = "";
	a  = "<tr>"
	   + "<td><input type='text' data='eduSchoolName' class='eduSchoolName' name='eduList[" + num + "].eduSchoolName'></td>"
	   + "<td>"
	   + "<select data='eduStatus' class='eduStatus' name='eduList[" + num + "].eduStatus'>"
	   + "<option value=''>선택없음</option>"
	   + "<option value='입학'>입학</option>"
	   + "<option value='재학'>재학</option>"
	   + "<option value='졸업'>졸업</option>"
	   + "<option value='졸업예정'>졸업예정</option>"
	   + "</select>"
	   + "</td>"
	   + "<td><input type='text' data='eduYear' placeholder='' class='eduYear' name='eduList["+num+"].eduYear'></td>"
	   + "<td>년</td>"
	   + "<td><input type='text' data='eduMonth' placeholder='' class='eduMonth' name='eduList["+num+"].eduMonth'></td>"
	   + "<td>월</td>"
	   + "<td><button type='button' style='display:none;' class='removeTrBtn edu'>-</button></td>"
       + "</tr>"
   
       $(".edu-table").find("tbody").append(a);
	
	removeBtn();
	
}

function qualifiPlus() {
	var a = "";
	
	var qualifiNum =  $("#qualifiNum").val();
	var num = parseInt(qualifiNum) + 1;
	
	$("#qualifiNum").val(num);
	
	a = "<tr>"
		+ "<td><input type='text' data='qualifiName' class='qualifiName' name='qualifiList["+ num +"].qualifiName'></td>"
		+ "<td><input type='text' data='qualifiGetdate' class='qualifiGetdate dateInput' name='qualifiList["+num+"].qualifiGetDate'></td>"
		+ "<td><button type='button' style='display:none;' class='removeTrBtn qualifi'>-</button></td>"
		+ "</tr>";
	$(".qualifi-table").find("tbody").append(a);
	
	$(".dateInput").datepicker({
		showMonthAfterYear: true,
		changeMonth: true,
		changeYear: true,
		dateFormat:"yy-mm-dd",
		dayNamesMin:['월','화','수','목','금','토','일'],
		monthNamesShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
	});
	
	removeBtn();
	
}

function careerPlus() {
	
	var a = "";
	var careerNum = $("#careerNum").val();
	var num = parseInt(careerNum)+1;
	
	$("#careerNum").val(num);
	
	a = "<tr>"
	   + "<td><input type='text' data='careerCompName' class='careerCompName' name='careerList[" +careerNum + "].careerCompName'></td>"
	   + "<td><input type='text' data='careerEnterDate' class='careerEnterDate dateInput prevDate' name='careerList["+careerNum+"].careerEnterDate'></td>"
	   + "<td><input type='text' data='careerLeaveDate' class='careerLeaveDate dateInput laterDate' name='careerList["+careerNum+"].careerLeaveDate'></td>"
	   + "<td><input type='text' data='careerSpot' class='careerSpot' name='careerList["+careerNum+"].careerSpot'></td>"
	   + "<td><input type='text' data='careerResponsib' class='careerResponsib' name='careerList["+careerNum+"].careerResponsib'></td>"
	   + "<td><button type='button' style='display:none;' class='removeTrBtn career'>-</button></td>"
	   + "</tr>";
	
	 $(".career-info").find("tbody").append(a);
	 
	 $(".dateInput").datepicker({
			showMonthAfterYear: true,
			changeMonth: true,
			changeYear: true,
			dateFormat:"yy-mm-dd",
			dayNamesMin:['월','화','수','목','금','토','일'],
			monthNamesShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		});

	 removeBtn();
	   
	
}


function trainPlus() {
	var a = "";
	
	var trainNum =  $("#trainNum").val();
	var num = parseInt(trainNum) + 1;
	$("#trainNum").val(num);
	
	a = "<tr>"
	  +	"<td><input type='text' data='trainingName' class='trainingName' name='trainList["+num+"].trainingName'></td>"
	  + "<td><input type='text' data='trainingStartDate' class='trainingStartDate dateInput prevDate' name='trainList["+num+"].trainingStartDate'></td>"
	  + "<td><input type='text' data='trainingEndDate' class='trainingEndDate dateInput laterDate' name='trainList["+num+"].trainingEndDate'></td>"
	  + "<td><input type='text' data='trainingAgency' class='trainingAgency' name='trainList["+num+"].trainingAgency'></td>"
	  + "<td><button type='button' style='display:none;' class='removeTrBtn train'>-</button></td>"
	  + "</tr>"
	  
	 $(".training-table").find("tbody").append(a);
	
	 $(".dateInput").datepicker({
			showMonthAfterYear: true,
			changeMonth: true,
			changeYear: true,
			dateFormat:"yy-mm-dd",
			dayNamesMin:['월','화','수','목','금','토','일'],
			monthNamesShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		});
	
	 removeBtn();
	
}

function licenPlus()
{
	var a = "";
	var licenNum = $("#licenNum").val();
	var num = parseInt(licenNum)+1;
	
    $("#licenNum").val(num);
	
	a = "<tr>"
	  + "<td><input type='text' data='licenName' class='licenName' name='licenList["+num+"].licenName'></td>"
	  + "<td><input type='text' data='licenSkillLevel' class='licenSkillLevel' name='licenList["+num+"].licenSkillLevel'></td>"
	  + "<td><button type='button' style='display:none;' class='removeTrBtn licen'>-</button></td>"
	  + "</tr>";
	  
	$(".licen-table").find("tbody").append(a);
	
	$(".dateInput").datepicker({
		showMonthAfterYear: true,
		changeMonth: true,
		changeYear: true,
		dateFormat:"yy-mm-dd",
		dayNamesMin:['월','화','수','목','금','토','일'],
		monthNamesShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
	});

	
	removeBtn();
}

function skillPlus() 
{

	var a = "";
	var skillNum = $("#skillNum").val();
	var num = parseInt(skillNum)+1;
	
    $("#skillNum").val(num);
    
    a = "<tr>"
      +	"<td><textarea data='skillProjectName' class='skillProjectName' name='skillList["+num+"].skillProjectName'></textarea></td>"
      + "<td><input type='text' data='skillStartDate' class='skillStartDate dateInput prevDate' name='skillList["+num+"].skillStartDate'></td>"
	  + "<td><input type='text' data='skillEndDate' class='skillEndDate dateInput laterDate' name='skillList["+num+"].skillEndDate'></td>"
	  + "<td><textarea data='skillCustomerComp' class='skillCustomerComp' name='skillList["+num+"].skillCustomerComp'></textarea></td>"
	  + "<td><textarea data='skillWorkComp' class='skillWorkComp' name='skillList["+num+"].skillWorkComp'></textarea></td>" 
	  + "<td><textarea data='skillIndustry' class='skillIndustry' name='skillList["+num+"].skillIndustry'></textarea></td>"
	  + "<td><textarea data='skillApplied' class='skillApplied' name='skillList["+num+"].skillApplied'></textarea></td>"
	  + "<td><textarea data='skillRole' class='skillRole' name='skillList["+num+"].skillRole'></textarea></td>"
	  + "<td><textarea data='skillModel' class='skillModel' name='skillList["+num+"].skillModel'></textarea></td>"
	  + "<td><textarea data='skillOs' class='skillOs' name='skillList["+num+"].skillOs'></textarea></td>"
	  + "<td><textarea data='skillLang' class='skillLang' name='skillList["+num+"].skillLang'></textarea></td>"
	  + "<td><textarea data='skillDbms' class='skillDbms' name='skillList["+num+"].skillDbms'></textarea></td>"
	  + "<td><textarea data='skillTool' class='skillTool' name='skillList["+num+"].skillTool'></textarea></td>"
	  + "<td><textarea data='skillComm' class='skillComm' name='skillList["+num+"].skillComm'></textarea></td>"
	  + "<td><textarea data='skillEtc' class='skillEtc' name='skillList["+num+"].skillEtc'></textarea></td>"
	  + "<td><button type='button' style='display:none;' class='removeTrBtn skill'>-</button></td>"
      + "</tr>";
    
    
	$(".skill-inventory-table").find("tbody").append(a);
	
	$(".dateInput").datepicker({
		showMonthAfterYear: true,
		changeMonth: true,
		changeYear: true,
		dateFormat:"yy-mm-dd",
		dayNamesMin:['월','화','수','목','금','토','일'],
		monthNamesShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
	});
	
	removeBtn();
}


function removeBtn() {
	
	$(".edu").unbind().click(function() {
		var $btnSelf = $(this); 
		var $parentTr = $btnSelf.parent().parent();
		/*var $parentTbody = $parentTr.parent();*/
		
		var eduCnt = $("#eduNum").val();
		var minCnt = parseInt(eduCnt) - 1;
		$("#eduNum").val(minCnt);
		
		$parentTr.remove();
		
		var i = 0;
		
		$('input[data="eduSchoolName"]').each(function () { 
			$(this).attr('name', 'eduList[' + i + '].eduSchoolName'); 
			if(i != eduCnt-1){
				i++;
			}
		});
		i=0;
		$('select[data="eduStatus"]').each(function () { 
			$(this).attr('name', 'eduList[' + i + '].eduStatus'); 
			if(i != eduCnt-1){
				i++;
			}
		});
		i=0;
		$('input[data="eduYear"]').each(function () { 
			$(this).attr('name', 'eduList[' + i + '].eduYear'); 
			if(i != eduCnt-1){
				i++;
			}
		});
		i=0;
		$('input[data="eduMonth"]').each(function () { 
			$(this).attr('name', 'eduList[' + i + '].eduMonth'); 
			if(i != eduCnt-1){
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
		
		var i= 0;
		$("input[data='qualifiName']").each(function() {
			$(this).attr("name", "qualifiList["+ i +"].qualifiName");
			if( i != qualifiCnt-1){
				i++;
			}
		})
		
		i=0;
		$("input[data='qualifiGetDate']").each(function() {
			$(this).attr("name", "qualifiList["+ i +"].qualifiGetDate");
			if( i != qualifiCnt-1){
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
		
		var i=0;
		$("input[data='careerCompName']").each(function() {
			$(this).attr("name", "careerList["+ i +"].careerCompName");
			if( i != careerCnt-1){
				i++;
			}
		});
		i=0;
		$("input[data='careerEnterDate']").each(function() {
			$(this).attr("name", "careerList["+ i +"].careerEnterDate");
			if( i != careerCnt-1){
				i++;
			}
		});
		i=0;
		$("input[data='careerLeaveDate']").each(function() {
			$(this).attr("name", "careerList["+ i +"].careerLeaveDate");
			if( i != careerCnt-1){
				i++;
			}
		});
		i=0;
		$("input[data='careerSpot']").each(function() {
			$(this).attr("name", "careerList["+ i +"].careerSpot");
			if( i != careerCnt-1){
				i++;
			}
		});
		i=0;
		$("input[data='careerResponsib']").each(function() {
			$(this).attr("name", "careerList["+ i +"].careerResponsib");
			if( i != careerCnt-1){
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
		var i=0;
		
		$("input[data='trainingName']").each(function() {
			$(this).attr("name", "trainList["+ i +"].trainingName");
			if( i != trainCnt-1){
				i++;
			}
		});
		i=0;
		$("input[data='trainingStartDate']").each(function() {
			$(this).attr("name", "trainList["+ i +"].trainingStartDate");
			if( i != trainCnt-1){
				i++;
			}
		});
		i=0;
		$("input[data='trainingEndDate']").each(function() {
			$(this).attr("name", "trainList["+ i +"].trainingEndDate");
			if( i != trainCnt-1){
				i++;
			}
		});
		i=0;
		$("input[data='trainingAgency']").each(function() {
			$(this).attr("name", "trainList["+ i +"].trainingAgency");
			if( i != trainCnt-1){
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
		var i=0;
		$("input[data='licenName']").each(function() {
			$(this).attr("name","licenList["+i+"].licenName");
			if(i != licenCnt-1){
				i++;
			}
		})
		i=0;
		$("input[data='licenSkillLevel']").each(function() {
			$(this).attr("name","licenList["+i+"].licenSkillLevel");
			if(i != licenCnt-1){
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
		var i=0;
		$("textarea[data='skillProjectName']").each(function() {
			$(this).attr("name","skillList["+i+"].skillProjectName");
			if(i != skillCnt-1){
				i++;
			}
		})
		i=0;
		$("input[data='skillStartDate']").each(function() {
			$(this).attr("name","skillList["+i+"].skillStartDate");
			if(i != skillCnt-1){
				i++;
			}
		})
		i=0;
		$("input[data='skillEndDate']").each(function() {
			$(this).attr("name","skillList["+i+"].skillEndDate");
			if(i != skillCnt-1){
				i++;
			}
		})
		i=0;
		$("textarea[data='skillCustomerComp']").each(function() {
			$(this).attr("name","skillList["+i+"].skillCustomerComp");
			if(i != skillCnt-1){
				i++;
			}
		})
		i=0;
		$("textarea[data='skillWorkComp']").each(function() {
			$(this).attr("name","skillList["+i+"].skillWorkComp");
			if(i != skillCnt-1){
				i++;
			}
		})
		i=0;
		$("textarea[data='skillIndustry']").each(function() {
			$(this).attr("name","skillList["+i+"].skillIndustry");
			if(i != skillCnt-1){
				i++;
			}
		})
		i=0;
		$("textarea[data='skillApplied']").each(function() {
			$(this).attr("name","skillList["+i+"].skillApplied");
			if(i != skillCnt-1){
				i++;
			}
		})
		i=0;
		$("textarea[data='skillRole']").each(function() {
			$(this).attr("name","skillList["+i+"].skillRole");
			if(i != skillCnt-1){
				i++;
			}
		})
		i=0;
		$("textarea[data='skillModel']").each(function() {
			$(this).attr("name","skillList["+i+"].skillModel");
			if(i != skillCnt-1){
				i++;
			}
		})
		i=0;
		$("textarea[data='skillOs']").each(function() {
			$(this).attr("name","skillList["+i+"].skillOs");
			if(i != skillCnt-1){
				i++;
			}
		})
		i=0;
		$("textarea[data='skillLang']").each(function() {
			$(this).attr("name","skillList["+i+"].skillLang");
			if(i != skillCnt-1){
				i++;
			}
		})
		i=0;
		$("textarea[data='skillDbms']").each(function() {
			$(this).attr("name","skillList["+i+"].skillDbms");
			if(i != skillCnt-1){
				i++;
			}
		})
		i=0;
		$("textarea[data='skillTool']").each(function() {
			$(this).attr("name","skillList["+i+"].skillTool");
			if(i != skillCnt-1){
				i++;
			}
		})
		i=0;
		$("textarea[data='skillComm']").each(function() {
			$(this).attr("name","skillList["+i+"].skillComm");
			if(i != skillCnt-1){
				i++;
			}
		})
		i=0;
		$("textarea[data='skillEtc']").each(function() {
			$(this).attr("name","skillList["+i+"].skillEtc");
			if(i != skillCnt-1){
				i++;
			}
		})
	})
	
	$(".flexibleTable").find("tbody").find("tr").unbind().hover(function(){
		var $trSelf = $(this);
		var $childRemoveBtn = $trSelf.find(".removeTrBtn");
		
		$childRemoveBtn.css("display","block");
	},function(){
		var $trSelf = $(this);
		var $childRemoveBtn = $trSelf.find(".removeTrBtn");
		
		$childRemoveBtn.css("display","none");
	});
	
}

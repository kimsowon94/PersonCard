/* 출력 버튼 클릭시 !! */

$(document).ready(function() {

	$(".printBtn").on("click", function($) {
		
		$(".user-info-list-pannel").print({
			globalStyles : true,
			mediaPrint : true,
			stylesheet : './resources/css/personalHistory/print.css',
			noPrintSelector : ".no-print",
			iframe : true,
			append : null,
			prepend : null,
			deferred : $.Deferred(),
			timeout : 750,
			title : null,
			doctype : '<!doctype html>'
		});

	});
	
	/*저장 버튼 클릭 시 */
	$(".personalHistorySaveBtn").on("click", function() {

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
		else
		{
			//userEmail 과 emailDomain과 합치기			
			var userEmail = $("#userEmail").val().trim();
			var emailDomain = $("#emailDomain").val();
			
			var addEmail = userEmail + emailDomain;
		
			
			if($("#emailDomain option:first").prop("selected") == true || $("#emailDomain option:last").prop("selected") == true)
			{
				$("#userEmail").val(userEmail);
			}
			else
			{
				$("#userEmail").val(addEmail);
			}
						
			
			var $frm = $(".main1 :input");
			var param = $frm.serialize();
			
			$.ajax({
				url : "/card/personCardInsert.do",
				dataType : "JSON",
				type : "POST",
				data :param,
				success : function(data, textStatus, jqXHR) 
				{
					alert("작성완료");
					location.href="/home.do";
				},
				error : function(request,status,error) 
				{
					alert("알수없는 오류");
					alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
				}
				
			})
		}
		
		
	});
	
	/*datePicker설정*/
	$(".dateInput").datepicker({
		showMonthAfterYear: true,
		changeMonth: true,
		changeYear: true,
		dateFormat:"yy-mm-dd",
		dayNamesMin:['월','화','수','목','금','토','일'],
		monthNamesShort:['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
	});
	
	
		
	
});



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



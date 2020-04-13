

$(document).ready(function() {	
	/* 출력 버튼 클릭시 !! */
/*	var pHeader="<html><head><link rel='stylesheet' type='text/css'	href='./resources/css/personalHistory/personalHistory.css?ver=1'><title></title></head><body>";
	
	var innerDiv = document.getElementById("innerDiv").innerHTML;
	
	var pFooter = "</body></html>";
	var pContent = pHeader +  innerDiv + pFooter;
	$(".printBtn").on("click", function() {
		document.getElementById("function-btn-pannel").style.display ="none";
		  window.onbeforeprint = function (ev) {
             document.body.innerHTML = innerDiv;
             
         };

         pwin=document.open("","print","status=yes,scrollbars=yes");

        		 
         pwin.document.write(pContent);
         pwin.document.close();
         pwin.window.print();
         location.reload();

	});
	*/
	
	/*저장 버튼 클릭 시 */
	$(".personalHistorySaveBtn").on("click", function() { 

		var check = crossCheck()
		if(check == true)
		{
			if($("#status").val() == "status")
			{
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
					}
						
				})
			}
			else
			{
				
				var $frm = $(".main1 :input");
				var param = $frm.serialize();
				
				$.ajax({
					url : "/card/personCardUpdate.do",
					dataType : "JSON",
					type : "POST",
					data :param,
					success : function(data, textStatus, jqXHR) 
					{
						alert("수정이 완료되었습니다.");
						location.href="/home.do";
					},
					error : function(request,status,error) 
					{
						alert("알수없는 오류");
					}
						
				})
			}

			return true;
		}

	});

	/*datePicker설정*/
	$(".dateInput").datepicker({
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
	});
	

	/*전체적인 유효성검사================================================================*/
	$("#userName").bind("keyup", function() {
		/* 특수문자 정규식 */
		re1 = /[~!@\#$%^&*\()\-=+_']/gi;
		/* 영어 + 숫자 정규식 */
		re2 = /^[a-zA-Z0-9]*$/;
		/*전체 공백*/
		re3 = / /g;

		var temp = $("#userName").val();

		if (re1.test(temp)) {//특수문자가 포함되면 삭제하여 값으로 다시셋팅
			$("#userName").val(temp.replace(re1, ""));
		}
		if (re2.test(temp)) {//숫자가 포함되면 삭제하여 값으로 다시셋팅
			$("#userName").val(temp.replace(re2, ""));
		}
		if (re3.test(temp)) {//공백이 포함되면 삭제하여 값으로 다시셋팅
			$("#userName").val(temp.replace(re3, ""));
		}
	})
	
	/*주민등록번호 13자리 제한*/
	$("#userSocialSecunum").bind("keyup", function() {
		if($("#userSocialSecunum").val().length > 14) 
		{
			$(this).val($(this).val().substr(0, 14));
			
		}
	});
	
	$("#userTelnumWireless").on("keyup", function() {
		if($(this).val().length >= 14) 
		{
			$(this).val($(this).val().substr(0, 13));					
		}

		if($(this).val().length == 11){
			var pre = $("#userTelnumWireless").val().substring(0,3);
			var su1 = $("#userTelnumWireless").val().substring(3,7);
			var su2 = $("#userTelnumWireless").val().substring(7,11);
			$(this).val(pre+"-"+su1+"-"+su2);
		}
	});
	
	
	$("#userTelnumWired").on("keyup", function() {
		var pre =  $("#userTelnumWired").val().substring(0,2);
		if(pre == "02")
		{
			if($(this).val().length >= 13) 
			{
				$(this).val($(this).val().substr(0, 12));					
			}
			if($(this).val().length == 10){
				var su1 = $("#userTelnumWired").val().substring(2,6);
				var su2 = $("#userTelnumWired").val().substring(6,10);
				$(this).val(pre+"-"+su1+"-"+su2);
			}
		}
		else
		{
			if($(this).val().length >= 13) 
			{
				$(this).val($(this).val().substr(0, 12));					
			}
			if($(this).val().length == 10){
				var su0 = $("#userTelnumWired").val().substring(0,3);
				var su1 = $("#userTelnumWired").val().substring(3,6);
				var su2 = $("#userTelnumWired").val().substring(6,10);
				$(this).val(su0+"-"+su1+"-"+su2);
			}
		}
	});

});






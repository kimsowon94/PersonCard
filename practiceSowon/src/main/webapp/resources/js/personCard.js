

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
				 
				/*var $frm = $(".main1 :input");
				var param = $frm.serialize();	*/	
				 
				var form = $(".main1")[0];
				var formData = new FormData(form);
		
				$.ajax({
					url : "/card/personCardInsert.do",
					enctype : 'multipart/form-data',
					dataType : "JSON",
					type : "POST",
					processData: false,
                    contentType: false,
                    data: formData,
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
				
				/*var $frm = $(".main1 :input");
				var param = $frm.serialize();*/
				
				var form = $(".main1")[0];
				var formData = new FormData(form);
				
				$.ajax({
					url : "/card/personCardUpdate.do",
					enctype : 'multipart/form-data',
					processData: false,
                    contentType: false,
					dataType : "JSON",
					type : "POST",
					data :formData,
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
/*
	$("#userSocialSecunum").bind("keyup", function() {
		var regNumber = /^[0-9]*$/;
		var temp = $("#userSocialSecunum").val();
	
		$("#userSocialSecunum").val(temp.replace(/^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/g));
	    if(!regNumber.test(temp))
	    {
	    	$(this).val( $(this).val().replace(/[^0-9]/g, ""));
	    }	    
	   
	});*/
	
	$("#userTelnumWireless").on("keyup", function() {
		if($(this).val().length >= 14) 
		{
			$(this).val($(this).val().substr(0, 13));					
		}
	});
	
	
	$("#userTelnumWired").on("keyup", function() {	
		if($(this).val().length >= 13) 
		{
			$(this).val($(this).val().substr(0, 12));					
		}
	});
});






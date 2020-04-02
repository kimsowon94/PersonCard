

$(document).ready(function() {	
	
	/* 출력 버튼 클릭시 !! */
	$(".printBtn").on("click", function() {

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
						alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
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
						alert("수정완료");
						location.href="/home.do";
					},
					error : function(request,status,error) 
					{
						alert("알수없는 오류");
						alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error)
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
	

});






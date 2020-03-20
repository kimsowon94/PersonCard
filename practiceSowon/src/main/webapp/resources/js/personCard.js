

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
			
			return true;
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






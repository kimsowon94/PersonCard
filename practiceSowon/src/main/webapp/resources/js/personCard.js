/* 출력 버튼 클릭시 !! */

$(document).ready(function() {

	$(".printBtn").on("click", function() {
		
		$("#userSex").replaceWith("<input type='text' id='userSex'>");
		
		
		$(".user-info-list-pannel").print({
			globalStyles : true,
			mediaPrint : true,
			stylesheet : './resources/css/personalHistory/print.css',
			noPrintSelector : ".no-print",
			iframe : true,
			append : null,
			prepend : null,
			manuallyCopyFormValues : true,
			deferred : $.Deferred(),
			timeout : 750,
			title : null,
			doctype : '<!doctype html>'
		});

	})
	
	/*저장 버튼 클릭 시 */
	$(".personalHistorySaveBtn").on("click", function() {
		
		if($("#userName").val()=="" || $("#userSocialSecunum").val() == "")
		{
			alert("필수사항 입력이 누락되었습니다.")
			return false;
		}
	
		$.ajax({
			
		})
	});
});

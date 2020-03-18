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
		else
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

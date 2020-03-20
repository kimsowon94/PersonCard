
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


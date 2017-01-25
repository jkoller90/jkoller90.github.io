//test array that holds data taken from ajax response 
//in doc.ready below. this is used during submission 
//to verify that a. the code exists and b. it hasn't been
//redeemed 
var availableCodes; 

$(document).ready(function(){
	$.ajax({
		type: "get"
		, url: "test_code.php"
		, datatype: "json"
		, success: function (response) {
			availableCodes = response;
		}
		, error: function(){
			alert("That code is invalid.");
		}
	});	
});

$("#submit").click(function (event) {
	$(".main-content").append("<?php require 'user_process.php';?>");
	var currentDateTime = new Date();
	var redeemedOn = formatDate(currentDateTime);
	var code = $("#code").val(); 
	var name = $("#name").val();
	
	//check for code's existence in DB and if it can still be redeemed

										
	if(code!== "" && name!=="" && availableCodes[code] && availableCodes[code] === "Unredeemed"){
		$.ajax({
			type: "post"
			, url: "user_process.php"
			, data: "code=" + code + "&name="+name+"&redeemed="+redeemedOn
			, success: function (data) {
				console.log(data);
			}
			, error: function(){
				alert("That code is invalid.");
			}
		});
	}else if(name === "" || code === ""){
		alert("Please enter both your name and a code.");
	}else if(!(availableCodes.hasOwnProperty('key'))){
		alert("Please check your code");
	}else if(availableCodes[code] !== "Unredeemed"){
		alert("This code has already been submitted.");
	}else{
		alert("Please check your code."); 
	} 
});
function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}


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

$("#submit").click(function (event) {
	$(".main-content").append("<?php require 'user_process.php';?>	");
//	if() each has a value else alert error 
var currentDateTime = new Date();
var redeemedOn = formatDate(currentDateTime);
var code = $("#code").val(); 
var name = $("#name").val();
var email = $("#email").val();
	$.ajax({
		type: "get"
		, url: "user_process.php"
		, data: "code=" + code 
		, success: function (data) {
			console.log(this.data);
		}
		, error: function(){
			alert("That code is invalid or has already been redeemed!");
		}
	});
//	 + "&name="+name+"&email="+email+"&redeemed="+redeemedOn
	$.ajax({
		type: "post"
		, url: "user_process.php"
		, data: "code=" + code + "&name="+name+"&email="+email+"&redeemed="+redeemedOn
		, success: function (data) {
//			alert('good');
			console.log(this.data);
		}
		, error: function(){
			alert("That code is invalid or has already been redeemed!");
		}
	});
});


//Written by Jon Koller, 2017. 
//Takes input from user on basic html form and either outputs voucher codes on the page or prompts the user
//to download a .csv file. 
var length, amount, charSet; //initial (input)
var charSet; //process (post-submission)
var charExclusions = []; //optional initial (input)
var toDownload; //optional process (post-submission)
var codeGenerated;
var displayCodeCheck = true;
var storedCodes = undefined;
var timedate = new Date();
var createdTime;

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

//loads code at bottom of view
$("#loadCode").click(function (event) {
	$.ajax({
		type: "GET"
		, url: "loadCode.php"
		, dataType: "html"
		, success: function (response) {
			if($("#show").html() == ""){
				$("#show").append(response);				
			}else{ 
		//clears show div so same table doesn't continuously stack
				$("#show").html("");
				$("#show").append(response);	
			}
		}
	});
	event.preventDefault();
});


//downloads table of all codes
$("#downloadCodes").click(function(event){
	$.ajax({
		type: "GET"
		, url: "downloadCodes.php"
		, dataType: "text"
		, success: function (response) {
//			console.log(response);
        var blob = new Blob([response], {
        type: "text/csv"
    });
    saveAs(blob, "couponcodes.csv");			
		}
	});
	event.preventDefault();
});

//downloads table of unused codes
$("#downloadNew").click(function(event){
	$.ajax({
		type: "POST"
		, url: "downloadNew.php"
		, data: "createdTime="+ createdTime
		, success: function (data) {
				console.log(data + "passed");
		}	
	});
event.preventDefault();
	$.ajax({
		type: "GET"
		, url: "downloadNew.php"
		, dataType: "text"
		, success: function (response) {
        var blob = new Blob([response], {
        type: "text/csv"
    });
    saveAs(blob, "New Codes.csv");			
		}
	});
	event.preventDefault();
	});

//add conditional for over 10 results? 
function charset(name) {
	var charsets = {
		numeric: "0123456789"
		, alphabetic: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
		, alphanumeric: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	};
	return charsets[name];
}
$('html').keypress(function (e) {
	var key = e.which;
	if (key == 13) { // the enter key code
		processInput();
	}
});

//posts code
function postCodes(codeGenerated, i) {
	$.ajax({
		type: "post"
		, url: "postCodes.php"
		, data: "code=" + codeGenerated[i] + "&name=Unredeemed&email=N/a&redeemed=0000/00/00 00:00:00&createdTime=" + createdTime
		, success: function (data) {
			$("#info").html(data);
		}
	});
}
$("#submit").click(function (event) {
	processInput();	
});

function clearInput() {
	$("#form-basic :input").each(function () {
		$(this).val('');
	})
}

//generates code
function processInput() {
	if (displayCodeCheck) {
		console.log(createdTime);
		//input 
		length = $("#length").val();
		amount = $("#amount").val();
		charSet = $("#charSet").val().toLowerCase();
		charExclusions.push($("#charExclusions").val());
		var inputCheck = false;
		if (length === '' || amount === '') {
			alert("Please enter values for length and amount.");
		}
		else {
			inputCheck = true;
		}
		if (inputCheck) {
			$("#showStoredData").css('visibility', 'visible');
			if (charExclusions[0] !== 0) {
				charSet = charset(charSet);
				charSet = charSet.split("");
				for (var i = 0; i < charExclusions[0].length; i++) {
					charSet.splice(charSet.indexOf(charExclusions[0][i]), 1);
				}
				charSet.join('');
			}
			else {
				charSet = charset(charSet);
			}
			codeGenerated = voucher_codes.generate({
				length: length
				, count: amount
				, charset: charSet
			});
			}
			console.log(codeGenerated);
		}
		//#if undefined 
		storedCodes = {};
		//generate JSON object
		for (var i = 0; i < codeGenerated.length; i++) {
			storedCodes[i] = {
				"code": codeGenerated[i]
				, "redeemedBy": "null"
				, "timeRedeemed": "null"
			};
		}
		displayCodeCheck = false;
		//loops to complete async post request within closure of function call
		createdTime = formatDate(timedate);
		for (var i = 0; i < codeGenerated.length; i++) {
			postCodes(codeGenerated, i);
			console.log(i);
		}	
}
$("#reload").click(function (event) {
	location.reload();
});



//// saveAs(blob, "storedCodes.json");
//var storedCodesCheck = true; //limits rendering under Stored Codes
//$("#showStoredData").click(function (event) {
//	//what to make this hidden then show it 
//	$("#showDB").css("visibility", "visible");
//	if (storedCodesCheck) {
//		var tbl = $("<table/>").attr("id", "codeTable");
//		$("#displayStoredCodes").append(tbl);
//		$("#codeTable").append("<tr><td>Index</td><td>Code</td><td>User</td><td>Time Redeemed</td></tr>");
//		for (var i in storedCodes) {
//			var tr = "<tr>";
//			var td = "<td>" + i + "</td>";
//			var td1 = "<td>" + storedCodes[i]["code"] + "</td>";
//			var td2 = "<td>" + storedCodes[i]["redeemedBy"] + "</td>";
//			var td3 = "<td>" + storedCodes[i]["timeRedeemed"] + "</td></tr>";
//			$("#codeTable").append(tr + td + td1 + td2 + td3);
//		}
//		storedCodesCheck = false;
//	}
//});

//https://api.jquery.com/unload/ <-- close browser
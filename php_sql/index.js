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
// var db = new PouchDB('CodeStorage');

function charset(name) {
    var charsets = {
        numeric: "0123456789",
        alphabetic: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        alphanumeric: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    };
    return charsets[name];
}

$('html').keypress(function(e) {
    var key = e.which;
    if (key == 13) { // the enter key code
        processInput();
    }
});

$("#submit").click(function(event) {
    processInput();
});
$("#myForm").submit(function(){
    return false;
})
function clearInput(){
    $("#myForm :input").each(function(){
        $(this).val('');
    })
}

$(document).ready(function(){
    $('.button').click(function(){
        var clickBtnValue = $(this).val();
        var ajaxurl = 'ajax.php',
        data =  {'action': clickBtnValue};
        $.post(ajaxurl, data, function (response) {
            // Response div goes here.
            alert("action performed successfully");
        });
    });

});


//two attempts to loop over items in codegnerated array
//still unsure as to how I should get these post requests to work
//******//******//******//******//******//******//******//******//******
//******//******//******//******//******//******//******//******//******

// function recursePost(codeGenerated, i){
//     if(i === 0 ){
//         clearInput();
//         return;
//     }
//     var data = [{code:codeGenerated[i]}];
//     $.post($("#myForm").attr("action"),data,function(info){
//     });
//     return recursePost(codeGenerated, i-1);
// }
// function loopPost(codeGenerated){
//     for(var i = 0 ; i < codeGenerated.length ; i++){
        
//     }



function processInput() {
    if (displayCodeCheck) {
        //input 
        length = $("#length").val();
        amount = $("#amount").val();
        charSet = $("#charSet").val().toLowerCase();
        charExclusions.push($("#charExclusions").val());
        var inputCheck = false;
        if (length === '' || amount === '') {
            alert("Please enter values for length and amount.");
        } else {
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
            } else {
                charSet = charset(charSet);
            }
            if (amount > 10) {
                var toDownload = confirm('The limit of codes displayed on this page is 10. You entered 11 or greater and can download a .csv file with these codes provided. Is that okay?');
                if (toDownload) {
                    var codeGenerated = voucher_codes.generate({
                        length: length,
                        count: amount,
                        charset: charSet
                    });
                    var blob = new Blob([codeGenerated], {
                        type: "text/csv"
                    });
                    saveAs(blob, "codefile.csv");
                } else {
                    alert("Please re-enter a value under 10 for the amount.");
                }
            } else { // amount < 10 
                codeGenerated = voucher_codes.generate({
                    length: length,
                    count: amount,
                    charset: charSet
                });
                for (var i = 0; i < codeGenerated.length; i++) {
                    $("#dataContainer").append(codeGenerated[i]); //placeholder for php to pickup data
//                    $("#displayCode").append("<br><p>" + codeGenerated[i] + "</p><br>");
                }
                $("#dataContainer").append("<?php $codeData = new DOMDocument();$codeData = $codeData->getElementById('dataContainer'); echo strip_tags($codeData); echo $codeData; ?>");
            }
            console.log(codeGenerated);
            var i = codeGenerated.length-1;
            recursePost(codeGenerated, i);
        }
    // codeGenerated.forEach(function(item){
    //     // var data = item.serializeArray();
    //     var data = [{code:item}];
    //     $.post($("#myForm").attr("action"), data, function(info){
        
    //     });
            //#if undefined 
            storedCodes = {};
            //generate JSON object
            for (var i = 0; i < codeGenerated.length; i++) {
                storedCodes[i] = {
                    "code": codeGenerated[i],
                    "redeemedBy": "null",
                    "timeRedeemed": "null"
                };
            }

            displayCodeCheck = false;
        }


}


$("#reload").click(function(event) {
    location.reload();

});


// saveAs(blob, "storedCodes.json");
var storedCodesCheck = true; //limits rendering under Stored Codes
$("#showStoredData").click(function(event) {
    //what to make this hidden then show it 
    $("#showDB").css("visibility", "visible");
    
    
    if (storedCodesCheck) {
        var tbl = $("<table/>").attr("id", "codeTable");
        $("#displayStoredCodes").append(tbl);
        $("#codeTable").append("<tr><td>Index</td><td>Code</td><td>User</td><td>Time Redeemed</td></tr>");
        for (var i in storedCodes) {
            var tr = "<tr>";
            var td = "<td>" + i + "</td>";
            var td1 = "<td>" + storedCodes[i]["code"] + "</td>";
            var td2 = "<td>" + storedCodes[i]["redeemedBy"] + "</td>";
            var td3 = "<td>" + storedCodes[i]["timeRedeemed"] + "</td></tr>";
            $("#codeTable").append(tr + td + td1 + td2 + td3);
        }
        storedCodesCheck = false;
    }
});



// var blob = new Blob([codeGenerated], {
//        type: "text/csv"
//    });
//    saveAs(blob, "codefile.csv");
//https://api.jquery.com/unload/ <-- close browser
//Written by Jon Koller, 2017. 
//Takes input from user on basic html form and either outputs voucher codes on the page or prompts the user
//to download a .csv file. 
//updates 1/13/17:
//+<Show Stored Data> button added to show data below "Code Here" section.
//+displayCodeCheck and storedCodesCheck added to limit button functionality to one press each
//+enter key now acts as submit button 
var length, amount, charSet; //initial (input)
var charSet; //process (post-submission)
var charExclusions = []; //optional initial (input)
var toDownload; //optional process (post-submission)
var codeGenerated;
var displayCodeCheck = true;
var storedCodes = undefined;
var db = new PouchDB('CodeStorage');

function charset(name) {
    var charsets = {
        numeric: "0123456789",
        alphabetic: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        alphanumeric: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    };
    return charsets[name];
}
//webstorage 
//enter key functionality
$('html').keypress(function(e) {
    var key = e.which;
    if (key == 13) { // the enter key code
        processInput();
    }
});
$("#submit").click(function(event) {
    processInput();
});

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
                    $("#displayCode").append("<br><p>" + codeGenerated[i] + "</p><br>");
                }
            }

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
            console.log(db);
        }
        for (var i in db){
            $("script").append(db[i]);
        }
    }
    console.log(storedCodes);
}


$("#reload").click(function(event) {
    location.reload();
});


// saveAs(blob, "storedCodes.json");
var storedCodesCheck = true; //limits rendering under Stored Codes
$("#showStoredData").click(function(event) {
    //what to make this hidden then show it 
    $("#displayStoredCodes").css("visibility", "visible");
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
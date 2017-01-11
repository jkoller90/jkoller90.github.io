//Written by Jon Koller, 2017. 
//Takes input from user on basic html form and either outputs voucher codes on the page or prompts the user
//to download a .csv file. 
var length, amount, charSet; //initial (input)
var charSet; //process (post-submission)
var charExclusions = []; //optional initial (input)
//var wordExclusions = [];
var toDownload; //optional process (post-submission)
var codeGenerated;
//function wordExclusionHandler(generatedCode) {
//    var checkCode = true;
//    var newCode;
//    wordExclusions[0].forEach(function (word) { //iterate over exclusions array 
//        if (generatedCode[0].indexOf(word) > -1) { //if detected
//            while (!checkCode) { //generate new code until it fits 
//                if (generatedCode.indexOf(word) === -1) {
//                    newCode = voucher_codes.generate({
//                        length: length
//                        , count: 1
//                        , charset: charSet
//                    });
//                    checkCode = false;
//                }
//            }
//            generatedCode.replace(word, newCode);
//        }
//    });
//}
function charset(name) {
    var charsets = {
        numeric: "0123456789"
        , alphabetic: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        , alphanumeric: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    };
    return charsets[name];
}
$("#submit").click(function (event) {
    //input 
    length = $("#length").val();
    amount = $("#amount").val();
    charSet = $("#charSet").val().toLowerCase();
    charExclusions.push($("#charExclusions").val());
    //    wordExclusions.push($("#wordExclusions").val();
    var inputCheck = false;
    if (length === '' || amount === '') {
        alert("Please enter values for length and amount.");
    }
    else {
        inputCheck = true;
    }
    if (inputCheck) {
        if (charExclusions[0] !== 0) {
            charSet = charset(charSet);
            charSet = charSet.split("");
            for (var i = 0; i < charExclusions[0].length; i++) {
                console.log(charExclusions[0].length);
                charSet.splice(charSet.indexOf(charExclusions[0][i]), 1);
                console.log(charSet.indexOf(charExclusions[0][i]));
            }
            charSet.join('');
        }
        else {
            charSet = charset(charSet);
        }
        if (amount > 10) {
            var toDownload = confirm('The limit of codes displayed on this page is 10. You entered 11 or greater and can download a .csv file with these codes provided. Is that okay?');
            if (toDownload) {
                var codeGenerated = voucher_codes.generate({
                    length: length
                    , count: amount
                    , charset: charSet
                });
                //            if (wordExclusions[0][0] !== "") {
                //                codeGenerated = wordExclusionHandler(codeGenerated);
                //            }
                var blob = new Blob([codeGenerated], {
                    type: "text/csv"
                });
                saveAs(blob, "codefile.csv");
            }
            else {
                alert("Please re-enter a value under 10 for the amount.");
            }
        }
        else { // amount < 10 
            //        if (wordExclusions[0][0] !== "") {
            //            codeGenerated = wordExclusionHandler(codeGenerated);
            //        }
            //        else {
            codeGenerated = voucher_codes.generate({
                length: length
                , count: amount
                , charset: charSet
            });
            //        }
            for (var i = 0; i < codeGenerated.length; i++) {
                $(".code").append("<br><p>" + codeGenerated[i] + "</p><br>");
            }
        }
    }
});
$("#reload").click(function (event) {
    location.reload();
});
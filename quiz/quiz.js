function getRandomOrder(choices) {
	var used = [];
	var randomized = [];
	var used = [];
	var l = 0;
	while (l < choices.length) {
		var y = Math.floor((Math.random() * choices.length));
		if (used.indexOf(y) == -1) {
			used.push(y);
			randomized[y] = choices[l];
			l++;
		}
	}
	return randomized;
}

function renderQuestion(question) {
	var questionId = questions.indexOf(question);
	var render_string = "<div class='question' id='" + questionId + "'><h4>" + questions[questionId].q + "</h4>";
	var choices = getRandomOrder(question.choices);
	for (var i = 0; i < choices.length; i++) {
		render_string += "<div class='choice'; answer='" + questions[questionId].a + "'>" + choices[i] + "</div>";
	}
	render_string += "</div>";
	return render_string;
}

function renderQuiz(randomized_questions) {
	for (var i = 0; i < 4; i++) {
		//	for (var i = 0; i < randomized_questions.length; i++) { 
		//swap these for statements to debug string rendering of all  questions
		var appendStr = renderQuestion(randomized_questions[i]);
		$("#quiz").append(appendStr);
	}
  $("#quiz").append('<div id="next">Next </div>')    
}
var randomized_questions = getRandomOrder(questions);
renderQuiz(randomized_questions);
//final code is a mechanism to swap properly answered questions for new questions
var score = 0;
var ObjDivArray = document.getElementsByClassName("question");
var i = 0;
var currId = ObjDivArray[i].id;
$("#" + currId).css("display", "block");
var myBarValue = 0; //red bar = 0
$(".choice").click(function () {
	if ($(this).text() == $(this).attr("answer")) {
		//give white highlight, blue text

    $(this).attr("style","background-color:white; color: rgba(0, 10, 20, .85);");
     ++score; 
  $(".score").text(score+" of 4");
  myBarValue+=25;
  $("#myBar").attr("style", "height: 20px;background-color: red; width:"+(myBarValue+"%;"));
          
	}
//	else alert("Try again!");
	else {
     alert("Please try again.");}
//$("#" + currId).attr("style", "display: none"); //makes current question disappear
		++i;
		if(i !== 4){
		currId = ObjDivArray[i].id;
		(function () {
			var currId = ObjDivArray[i].id;
//			$("#" + currId).css("display", "block");
		})();			
		}else{
			$("#results").html("Your score: " + score + ". <a href='quiz.html'> Try again? </a>");
//			$("#results").css("display","block");
		}
	
});

$("#understood").click(function(){
	$("#info_splash").css("display","none");
	$("#quiz").css("display","block");
 $("header").append('<div class="score">0 of 4</div><div id="myProgress"><div id="myBar"></div></div>');
});

function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
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
	var render_string = "<div class='question' id='" + questionId + "'><h2>" + questions[questionId].title + "</h2>" + "<h4>" + questions[questionId].q + "</h4>";
	var choices = getRandomOrder(question.choices);
	for (var i = 0; i < choices.length; i++) {
		render_string += "<div class='choice'; answer='" + questions[questionId].a + "'>" + choices[i] + "</div>";
	}
	render_string += "</div>";
	return render_string;
}

function renderQuiz(randomized_questions) {
	$("#quiz").prepend("<h1>Quiz</h1>");
	for (var i = 0; i < 5; i++) {
		//	for (var i = 0; i < randomized_questions.length; i++) { 
		//swap these for statements to debug string rendering of all  questions
		var appendStr = renderQuestion(randomized_questions[i]);
		$("#quiz").append(appendStr);
	}
}
var randomized_questions = getRandomOrder(questions);
renderQuiz(randomized_questions);
//final code is a mechanism to swap properly answered questions for new questions
var score = 0;
var ObjDivArray = document.getElementsByClassName("question");
var i = 0;
var currId = ObjDivArray[i].id;
$("#" + currId).css("display", "block");
$(".choice").click(function () {
	if ($(this).text() == $(this).attr("answer")) {
		++score; 
		alert("Great job!");
//		$("#" + currId).attr("style", "display: none");
//		++i;
//		currId = ObjDivArray[i].id;
//		(function () {
//			var currId = ObjDivArray[i].id;
//			$("#" + currId).css("display", "block");
//		})();
	}
//	else alert("Try again!");
	else {alert("Woops!");}
$("#" + currId).attr("style", "display: none");
		++i;
		if(i !== 5){
		currId = ObjDivArray[i].id;
		(function () {
			var currId = ObjDivArray[i].id;
			$("#" + currId).css("display", "block");
		})();			
		}else{
			$("#results").html("Your score: " + score + ". <a href='quiz.html'> Try again? </a>");
			$("#results").css("display","block");
		}
	
});

$("#understood").click(function(){
	$("#info_splash").css("display","none");
	$("#quiz").css("display","block");
})
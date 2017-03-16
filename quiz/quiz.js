/* public Object[] */
function getRandomOrder(choices) {
	var used = [];
	var randomized = [];
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
/*Object[]*/
var randomized_questions = getRandomOrder(questions);
renderQuiz(randomized_questions);
/*public String*/
function renderQuestion(question) {
	var questionId = questions.indexOf(question);
	var render_string = "<div class='question' id='" + questionId + "'><h2>" + questions[questionId].q + "</h2>";
	var choices = getRandomOrder(question.choices);
	for (var i = 0; i < choices.length; i++) {
		render_string += "<div class='choice'; answer='" + questions[questionId].a + "'><p>" + choices[i] + "</p></div>";
	}
	render_string += "</div>";
	return render_string;
}
/*public void*/
function renderQuiz(randomized_questions) {
	for (var i = 0; i < 4; i++) {
		//	for (var i = 0; i < randomized_questions.length; i++) { 
		//swap these for statements to debug string rendering of all  questions
		var appendStr = renderQuestion(randomized_questions[i]);
		$("#quiz").append(appendStr);
	}
	$("#quiz").append('<div id="next">Next </div>')
}
/* int */
var score = 0;
/* domObject */
var ObjDivArray = document.getElementsByClassName("question");
/* int */
var i = 0;
/* int */
var currId = ObjDivArray[i].id;
$("#" + currId).css("display", "block");
/*int*/
var myBarValue = 0;
$(".choice").click(function () {
	//right answer 
	if ($(this).text() == $(this).attr("answer")) {
		i++;
		//give white highlight, blue text
		$(this).attr("style", "background-color:white; color: rgba(0, 10, 20, .85);");
		setTimeout(function () {
			$("#next").attr("style", "display: block");
			++score;
			$(".score").text(score + " of 4");
			myBarValue += 25;
			$("#myBar").attr("style", "height: 20px;background-color: red; width:" + (myBarValue + "%;"));
			$("#next").click(function () {
				$("#next").attr("style", "display: none");
				//makes current question disappear
				$("#" + currId).attr("style", "display: none");
				if (i !== 4) {
					currId = ObjDivArray[i].id;
					(function () {
						var currId = ObjDivArray[i].id;
						$("#" + currId).css("display", "block");
					})();
				}
				else { //can report score in modifications 
					$("#results").html("<h1>Great job!<br><a href='quiz.html'>Play again? </a></h1>");
					$("#results").css("display", "block");
				}
			});
		}, 500);
	}
	//wrong answer
	else {
		$(this).attr("style", "background-color:white; color: rgba(0, 10, 20, .85);");
		var x = $(this); //placeholder because "this" changes in setTimeout callback
		setTimeout(function () {
			alert("Please try again.");
			x.attr("style", "background-color:rgba(0,0,0,0); color: white;");
		}, 500);
	}
});
$("#understood").click(function () {
	$("#info_splash").css("display", "none");
	$("#quiz").css("display", "block");
	$(".header").append('<div class="score">0 of 4</div><div id="myProgress"><div id="myBar"></div></div>');
});
/*public void*/
function move() {
	var elem = document.getElementById("myBar");
	var width = 1;
	var id = setInterval(frame, 10);
	/*private void*/
	function frame() {
		if (width >= 100) {
			clearInterval(id);
		}
		else {
			width++;
			elem.style.width = width + '%';
		}
	}
}
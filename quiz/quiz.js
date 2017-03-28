$(document).ready(function () {
//		$.ajax({
//			url: "/hi"
//			, type: "POST"
//			, data: {
//				foo: "bar"
//			}
//			, processData: true
//			, contentType: 'application/json'
//		});
var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?foo=bar';
window.history.pushState({path:newurl},'',newoffurl);	
	})
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
	$("#quiz").append('<div id="next"> <p> Next </p> </div>')
}
var score = 0;
var ObjDivArray = document.getElementsByClassName("question");
var i = 0;
var answered = false; //blocks simultanous answers 
var currId = ObjDivArray[i].id;
$("#" + currId).css("display", "block");
var myBarValue = 0;
var resultMessages = ["Sensational!", "Way to Go!", "Good Going!", "Perfect!", "That's Great!", "Outstanding!", "Superb!", "Marvelous!", "Terrific!", "Congratulations!", "Tremendous!", "Fantastic!", "Excellent!"];

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
$(".choice").click(function () {
	if (!answered) {
		//right answer 
		if ($(this).text() == $(this).attr("answer")) {
			answered = true; //blocks simultanous answers 
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
					answered = false; //unblocks answering
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
						var m = getRandomInt(0, 4);
						$("#results").html("<h1>" + resultMessages[m] + "</h1><a href='quiz.html'><div class='choice' id='playagain'><p style='text-decoration:none;'>Play Again?</></div></a>");
						$("#results").css("display", "block");
					}
				});
			}, 500);
		}
		//wrong answer
		else {
			answered = true; //blocks simultanous answers 
			$(this).attr("style", "background-color:white; color: rgba(0, 10, 20, .85);");
			var x = $(this); //placeholder because "this" changes in setTimeout callback
			setTimeout(function () {
				answered = false; //unblocks answering
				swal({
					title: " "
					, text: "Please try again."
					, confirmButtonColor: "red"
					, confirmButtonText: "Okay"
				});
				x.attr("style", "background-color:rgba(0,0,0,0); color: white;");
			}, 500);
		}
	}
});
$("#understood").click(function () {
	$("#info_splash").css("display", "none");
	$("#quiz").css("display", "block");
	$(".header").append('<div class="score">0 of 4</div><div id="myProgress"><div id="myBar"></div></div>');
});
//$("#playagain").click(function(){
//	window.location.href = "http://www.google.com";
//});
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
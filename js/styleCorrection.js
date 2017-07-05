var resizeEvent = new Event('resize');
var portfolio = document.getElementById('portMenu');
//$('.portfolio').click(function () {
//	$('#portfolio').css('visibility', 'visible');
//	$('#portfolio').children().css('visibility', 'visible');
//	$('#portfolio').children().children().css('visibility', 'visible');
//	portfolio.scrollIntoView();
//})
//var about = document.getElementById('about');
//$('.blue').click(function () {
//	$('#about').css('visibility', 'visible');
//	$('#about').children().css('visibility', 'visible');
//	$('#about').children().children().css('visibility', 'visible');
//	$('#about').children().css('display', 'block');
//	$('#about').css('display', 'block');
//	$('#about').css('width', '100%');
//	$('#about').css('padding', '30% 70% 3% 3%');
//	about.scrollIntoView({
//		block: "start"
//		, behavior: "instant"
//	});
//})
var i, buttons, classGame;
document.addEventListener("DOMContentLoaded", function (event) {
	buttons = document.getElementsByClassName('button');
	classGame = document.getElementsByClassName('game');
	for (i = 0; i < buttons.length; i++) {
		buttons[i].onmouseover = function () {
			this.style.backgroundColor = "antiquewhite";
		}
		buttons[i].onmouseout = function () {
			this.style.backgroundColor = 'white';
		}
		buttons[i].onmousedown = function () {
			this.style.backgroundColor = "antiquewhite";
			if (this.id == 'aboutButton') {
				for (i = 0; i < classGame.length; i++) {
					classGame[i].style.display = 'none';
				}
				portfolio.style.display = 'none';
			}
			else if (this.id == 'cvButton') {
				for (i = 0; i < classGame.length; i++) {
					classGame[i].style.display = 'none';
				}
				portfolio.style.display = 'none';
			}
			else if (this.id == 'portButton') {
				for (i = 0; i < classGame.length; i++) {
					classGame[i].style.display = 'block';
				}
				portfolio.style.display = 'inline';
			}
		}
	}
});
//$('#shaker').vibrate(); 
function vibratetransition() {
	if (shake) {
		//https://illyism.github.io/jquery.vibrate.js/ 
		$('#shaker').effect('shake', {
			direction: 'down'
			, distance: 10
		}, 500);
if (window.navigator && window.navigator.vibrate) {
navigator.vibrate(500);
}
		$('#drinktitle_container').text('Answer the following questions about the above cocktail correctly to earn points.');
		setTimeout(function () {
			$('#question').css({
				'font-size': '1.78em'
				, 'margin': '0 0% 0 5%'
				, 'top': '14%'
			});
			$('#drinktitle_container').css({
				'top': '26%'
				, 'padding-bottom': '2em'
				, 'left': '0'
				, 'width': '96%'
				, 'font-size': '.9em'
			});
			$('#question').text(questions[drink_count][question_count].drink);
		shake = false; //in main.js
		}, 1000);
		setTimeout(function () {
			switchSequence();
		}, 1000);
		//	http://elrumordelaluz.github.io/csshake/
		//	https://api.jqueryui.com/shake-effect/
		setTimeout(function () {}, 5000);
	}
}
$('#shaker').click(function () {
	vibratetransition();
})
window.onload = function () {
	$('#drinktitle_container').css('display', 'none');
	//create a new instance of shake.js.
	var myShakeEvent = new Shake({
		threshold: 9
	});
	// start listening to device motion
	myShakeEvent.start();
	// register a shake event
	window.addEventListener('shake', shakeEventDidOccur, false);
	//shake event callback
	function shakeEventDidOccur() {
		vibratetransition();
		$('#shaker').vibrate();
	}
};
$(document).click(function () {
	if (question_count == 5) {
		question_count = 1;
		drink_count++;
	}
})
$(document).ready(function () {
	switchSequence();
	$('#drinktitle_container').text(questions[drink_count][question_count].drink);
});
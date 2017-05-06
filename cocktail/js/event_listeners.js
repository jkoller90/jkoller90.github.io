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
			if (($(window).width() == 320) && ($(window).height() == 460)) {
				$('#question').css({
					'font-size': '1.5em'
					, 'top': '12%'
				});
				$('#drinktitle_container').css({
					'font-size': '.8em'
					, 'padding-bottom': '2em'
					, 'letter-spacing': '0px'
					, 'top': '26%'
					, 'margin-bottom':'1%'	
					, 'left': '4%'
					, 'height': '15px'
					, 'text-align': 'center'
					, 'width': '90%'
					, 'z-index': '2'
					, 'letter-spacing': '.08em'
					, 'display': 'block'
				});
			}
			else {
				$('#question').css({
					'font-size': '1.78em'						
					, 'top': '13%'
				});
				$('#drinktitle_container').css({
					'top': '26%'
					, 'padding-bottom': '2em'
					, 'left': '5%'
					, 'width': '90%'
					, 'font-size': '.9em'
				});
				if (($(window).width() == 360) && ($(window).height() == 460)) {
					$('#question').css({
						'font-size': '1.78em'
						, 'top': '10%'
					});
					$('#drinktitle_container').css({
						'font-size': '.9em'
						, 'padding-bottom': '2em'
						, 'letter-spacing': '0px'
						, 'top': '20%'
						, 'left': '4%'
						, 'height': '15px'
						, 'text-align': 'center'
						, 'width': '90%'
						, 'z-index': '2'
						, 'letter-spacing': '.08em'
						, 'display': 'block'
					});
				}
			}
			$('#question').text(questions[drink_count][question_count].drink);
			$('#question').widowFix();
			$('#drinktitle_container').widowFix();
			shake = false; //in main.js
		}, 1000);
		setTimeout(function () {
			switchSequence();
		}, 1000);
		//	http://elrumordelaluz.github.io/csshake/
		//	https://api.jqueryui.com/shake-effect/
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
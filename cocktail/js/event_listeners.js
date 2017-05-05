$('#shaker').click(function () {
	(function vibratetransition() {
		//https://illyism.github.io/jquery.vibrate.js/ 
		$(this).attr('class', 'shake');
		$('#shaker').effect('shake', {
			direction: 'up'
			, distance: 5
		}, 300);
		$('#drinktitle_container').text('Answer the following questions about the above cocktail correctly to earn points.');
		setTimeout(function () {
			$('#shaker').attr('class', '');
			//		$('#question').attr('style','font-size: 1.78em)
			$('#question').css({
				'font-size': '1.78em'
//				, 'left': '-1.55%'
				, 'margin': '0 0% 0 5%'
			});
			$('#drinktitle_container').css({
				'top': '26%'
				, 'padding-bottom': '2em'
				, 'left': '0'
				, 'width': '96%'
				, 'font-size': '.9em'
			});
			$('#question').text(questions[drink_count][question_count].drink);
		}, 600);
		setTimeout(function () {
			//	switchSequence(); //main.js
			switchSequence();
		}, 600);
		shake = false; //in main.js
		//	http://elrumordelaluz.github.io/csshake/
		//	https://api.jqueryui.com/shake-effect/
		setTimeout(function () {
			switchSequence();
		}, 3600);
	})();
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
		//put your own code here etc.
		//			alert('Shake!');
		$('#shaker').effect('shake', {
			direction: ['up']
			, distance: 5
		}, 500);
		//		$('#shaker').effect('shake');
		shake = false; //in main.js
		switchSequence(); //main.js
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
//Answer the following questions about the above cocktail correctly to earn points.
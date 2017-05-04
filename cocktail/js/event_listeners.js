$('#shaker').click(function(){
//	$('#shaker').css()
$('#shaker').effect('shake');	
//	$('#shaker').css()
})
window.onload = function () {
		$('#drinktitle_container').css('display','none');
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
			$( '#shaker' ).effect( 'shake' );
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
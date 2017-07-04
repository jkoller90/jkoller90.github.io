var score = 0; 
var roundScore = 0;
function setfourchoice(a) {
	roundScore = 0;
	$('#fourchoice1').text(questions[drink_count][question_count].choices.choices[0]);
	$('#fourchoice2').text(questions[drink_count][question_count].choices.choices[1]);
	$('#fourchoice3').text(questions[drink_count][question_count].choices.choices[2]);
	$('#fourchoice4').text(questions[drink_count][question_count].choices.choices[3]);
	var thisscore = 4;
		setInterval(function () {
		if (totalSeconds == 15 && thisscore > 1) {
			thisscore--; //3
		}
		else if (totalSeconds == 20 && thisscore > 1) {
			thisscore--; // 2
		}
		else if (totalSeconds == 25 && thisscore > 1) {
			thisscore--; //1
		}
//		console.log(thisscore);
	}, 1000);
	if (a == 0) {
		$('#fourchoice1').click(function () {
			question_count++;
			if(totalSeconds < 8) thisscore++;
			$('div').off('click');
			$('#minutes').text('00');
			$('#seconds').text('00');
			totalSeconds = 0;
			score+=thisscore;
			roundScore+=thisscore;
			switchSequence();
		});
		$('#fourchoice2').click(function () {
			if(thisscore > 1) thisscore--;
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice3').click(function () {
			if(thisscore > 1) thisscore--;
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice4').click(function () {
			if(thisscore > 1) thisscore--;
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
	}
	else if (a == 1) {
		$('#fourchoice1').click(function () {
			if(thisscore > 1) thisscore--;
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice2').click(function () {
			question_count++;
			if(totalSeconds < 8) thisscore++;
			$('div').off('click');
			$('#minutes').text('00');
			$('#seconds').text('00');
			totalSeconds = 0;
			score+=thisscore;
			roundScore+=thisscore;
			switchSequence();
		});
		$('#fourchoice3').click(function () {
			if(thisscore > 1) thisscore--;
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice4').click(function () {
			if(thisscore > 1) thisscore--;
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
	}
	else if (a == 2) {		
		$('#fourchoice1').click(function () {
			if(thisscore > 1) thisscore--;
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice2').click(function () {
			if(thisscore > 1) thisscore--;
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice3').click(function () {
			question_count++;
			if(totalSeconds < 8) thisscore++;
			$('div').off('click');
			$('#minutes').text('00');
			$('#seconds').text('00');
			totalSeconds = 0;
			score+=thisscore;	
			roundScore+=thisscore;
			switchSequence();
		});
		$('#fourchoice4').click(function () {
			if(thisscore > 1) thisscore--;
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
	}
	else if (a == 3) {
		$('#fourchoice1').click(function () {
			if(thisscore > 1) thisscore--;
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice2').click(function () {
			if(thisscore > 1) thisscore--;
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice3').click(function () {
			if(thisscore > 1) thisscore--;
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice4').click(function () {
			question_count++;
			if(totalSeconds < 8) thisscore++;
			$('div').off('click');
			$('#minutes').text('00');
			$('#seconds').text('00');
			totalSeconds = 0;
			score+=thisscore;	
			roundScore+=thisscore;
			switchSequence();
		});
	}	
}
function settwochoice(a) {
	roundScore = 0;
	$('#twochoice1').text(questions[drink_count][question_count].choices.choices[0]);
	$('#twochoice2').text(questions[drink_count][question_count].choices.choices[1]);
		var thisscore = 4;
		setInterval(function () {
		if (totalSeconds == 15 && thisscore > 1) {
			thisscore--; //3
		}
		else if (totalSeconds == 20 && thisscore > 1) {
			thisscore--; // 2
		}
		else if (totalSeconds == 25 && thisscore > 1) {
			thisscore--; //1
		}
//		console.log(thisscore);
	}, 1000);
	if (a == 0) {
		$('#twochoice1').click(function () {
			question_count++;
			if(totalSeconds < 8) score++;
			$('div').off('click');
			switchSequence();
			$('#minutes').text('00');
			$('#seconds').text('00');
			totalSeconds = 0;
			score+=thisscore;	
			roundScore+=thisscore;
		});
		$('#twochoice2').click(function () {
			if(thisscore > 1) thisscore-=2;
			swal({
			title: "Incorrect!"
				, text: "Try again", confirmButtonColor: "#D3D3D3"
			});
		});
	}
	else if (a == 1) {
		$('#twochoice1').click(function () {
			if(thisscore > 1) thisscore-=2;
			swal({
			title: "Incorrect!"
				, text: "Try again", confirmButtonColor: "#D3D3D3"
			});
		});
		$('#twochoice2').click(function () {
			question_count++;
			if(totalSeconds < 8) score++;
			$('div').off('click');
			switchSequence();
			$('#minutes').text('00');
			$('#seconds').text('00');
			totalSeconds = 0;
			score+=thisscore;		
			roundScore+=thisscore;
		});
	}
}


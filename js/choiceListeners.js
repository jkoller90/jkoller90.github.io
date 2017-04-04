function setfourchoice(a) {
	$('#fourchoice1').text(questions[drink_count][question_count].choices.choices[0]);
	$('#fourchoice2').text(questions[drink_count][question_count].choices.choices[1]);
	$('#fourchoice3').text(questions[drink_count][question_count].choices.choices[2]);
	$('#fourchoice4').text(questions[drink_count][question_count].choices.choices[3]);
	if (a == 0) {
		$('#fourchoice1').click(function () {
			question_count++;
			$('div').off('click');
			switchSequence();
		});
		$('#fourchoice2').click(function () {
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice3').click(function () {
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice4').click(function () {
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
	}
	else if (a == 1) {
		$('#fourchoice1').click(function () {
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice2').click(function () {
			question_count++;
			$('div').off('click');
			switchSequence();
		});
		$('#fourchoice3').click(function () {
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice4').click(function () {
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
	}
	else if (a == 2) {
		$('#fourchoice1').click(function () {
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice2').click(function () {
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice3').click(function () {
			question_count++;
			$('div').off('click');
			switchSequence();
		});
		$('#fourchoice4').click(function () {
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
	}
	else if (a == 3) {
		$('#fourchoice1').click(function () {
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice2').click(function () {
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice3').click(function () {
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#fourchoice4').click(function () {
			question_count++;
			$('div').off('click');
			switchSequence();
		});
	}
}

function settwochoice(a) {
	$('#twochoice1').text(questions[drink_count][question_count].choices.choices[0]);
	$('#twochoice2').text(questions[drink_count][question_count].choices.choices[1]);
	if (a == 0) {
		$('#twochoice1').click(function () {
			question_count++;
			$('div').off('click');
			switchSequence();
		});
		$('#twochoice2').click(function () {
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
	}
	else if (a == 1) {
		$('#twochoice1').click(function () {
			swal({
			title: "Incorrect!"
				, text: "Try again"				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#twochoice2').click(function () {
			question_count++;
			$('div').off('click');
			switchSequence();
		});
	}
}
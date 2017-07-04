function setRightGlass(a) {
	$('#question').widowFix();
	var thisscore = 4;
	roundScore = 0;
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
	}, 1000);
	
	if (a == 0) {
		$('#fluteIMG').click(function () {
			question_count++;
			if(totalSeconds < 8) score++;
			$('body').css('background-image', '');
			$('div').off('click');
			$('#minutes').text('00');
			$('#seconds').text('00');
			score+=thisscore;
			roundScore+=thisscore;
			totalSeconds = 0;
			switchSequence();
		});
		$('#aztecaIMG').click(function () {
			if (thisscore > 1) thisscore--;
			swal({
				title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#rocksIMG').click(function () {
			if (thisscore > 1) thisscore--;
			swal({
				title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#catalinaIMG').click(function () {
			if (thisscore > 1) thisscore--;
			swal({
				title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
	}
	else if (a == 1) {
		$('#fluteIMG').click(function () {
			if (thisscore > 1) thisscore--;
			swal({
				title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#aztecaIMG').click(function () {
			question_count++;
			if(totalSeconds < 8) score++;
			$('body').css('background-image', '');
			$('div').off('click');
			$('#minutes').text('00');
			$('#seconds').text('00');
			score+=thisscore;	
			roundScore+=thisscore;
			totalSeconds = 0;
			switchSequence();
		});
		$('#rocksIMG').click(function () {
			if (thisscore > 1) thisscore--;
			swal({
				title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#catalinaIMG').click(function () {
			if (thisscore > 1) thisscore--;
			swal({
				title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
	}
	else if (a == 2) {
		$('#fluteIMG').click(function () {
			if (thisscore > 1) thisscore--;
			swal({
				title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#aztecaIMG').click(function () {
			if (thisscore > 1) thisscore--;
			swal({
				title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#rocksIMG').click(function () {
			question_count++;
			if(totalSeconds < 8) score++;
			$('body').css('background-image', '');
			$('div').off('click');
			$('#minutes').text('00');
			$('#seconds').text('00');
			score+=thisscore;
			roundScore+=thisscore;
			totalSeconds = 0;
			switchSequence();
		});
		$('#catalinaIMG').click(function () {
			if (thisscore > 1) thisscore--;
			swal({
				title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
	}
	else if (a == 3) {
		$('#fluteIMG').click(function () {
			if (thisscore > 1) thisscore--;
			swal({
				title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#aztecaIMG').click(function () {
			if (thisscore > 1) thisscore--;
			swal({
				title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#rocksIMG').click(function () {
			if (thisscore > 1) thisscore--;
			swal({
				title: "Incorrect!"
				, text: "Try again"
				, confirmButtonColor: "#D3D3D3"
			});
		});
		$('#catalinaIMG').click(function () {
			question_count++;
			if(totalSeconds < 8) score++;
			$('body').css('background-image', '');
			$('div').off('click');
			$('#minutes').text('00');
			$('#seconds').text('00');
			score+=thisscore;	
			roundScore+=thisscore;
			totalSeconds = 0;
			switchSequence();
		});
	}
}
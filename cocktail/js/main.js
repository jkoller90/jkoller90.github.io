var drink_count = 0;
var question_count = 1;
var delay = 3000;
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

function switchSequence() {
	if (question_count == 5) {	
		if (drink_count != 8) {
			var pre_cat = questions[drink_count][question_count - 1].category;
		}
		else {
			var pre_cat = questions[0][question_count - 1].category;
		}
			$('.' + pre_cat).css('display', 'none');
			$('#question').css('display', 'none');
			$('#drinktitle_container').css('display', 'none');
			$('.congrats').css('display', 'block');
			$('#timer').css('display','none');
			$('body').css('background-size', 'cover');
		//change bellow line to an class with this as the image 
			$('body').attr('id', questions[drink_count][0]);
				totalSeconds = -3;
			setTimeout(function(){
				$('#timer').css('display','inline');
				if (drink_count == 9) {
					drink_count = 0;
				}
				$('.congrats').css('display', 'none');
				switchSequence();
				$('#drinktitle_container').css('display', 'inline');
				$('#question').css('display', 'inline');
			}, 2700)
//			$('#continue').click(function () {
//				
//			});
		}
		else {
			switch (questions[drink_count][question_count].category) {
			case 'Glass':
				if (drink_count === 0) {
					setTimeout(function () {
						$('#timer').css('display','inline');
						setRightGlass(questions[drink_count][question_count].choices.a);
						$('#drinktitle_container').text(questions[drink_count][question_count].drink);
						$('#question').text(questions[drink_count][question_count].query);
						$('.glassquestion').css('display', 'block');
						$('body').attr('id', 'backgroundGrid');
						$('.intro').css('display', 'none');
						setInterval(setTime, 1000);
					}, delay);
					delay = 0;
				}
				else {
					setRightGlass(questions[drink_count][question_count].choices.a);
					$('#drinktitle_container').text(questions[drink_count][question_count].drink);
					$('#question').text(questions[drink_count][question_count].query);
					$('.glassquestion').css('display', 'block');
					$('body').attr('id', 'backgroundGrid');
				}
				break;
			case "Two-choice":
				settwochoice(questions[drink_count][question_count].choices.a);
				$('#drinktitle_container').text(questions[drink_count][question_count].drink);
				$('#question').text(questions[drink_count][question_count].query);
				$('body').attr('id', '');
				$('.glassquestion').css('display', 'none');
				$('.four-choice').css('display', 'none');
				$('.two-choice').css('display', 'block');
				break;
			case "Four-choice":
				setfourchoice(questions[drink_count][question_count].choices.a);
				$('#drinktitle_container').text(questions[drink_count][question_count].drink);
				$('#question').text(questions[drink_count][question_count].query);
				$('body').attr('id', '');
				$('.glassquestion').css('display', 'none');
				$('.two-choice').css('display', 'none');
				$('.four-choice').css('display', 'block');
				break;
			default:
				return;
			}
		}

	}
var drink_count = 0;
var question_count = 1;
var delay = 3000;
var shake = true;

function switchSequence() {
	if (!shake) {
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
			$('#timer').css('display', 'none');
			$('body').css('background-size', 'cover');
			//change bellow line to an class with this as the image 
			$('body').attr('id', questions[drink_count][0]);
			totalSeconds = -3;
			$('#continue').click(function () {
				if (drink_count == 9) {
					drink_count = 0; //reset game
				}
				$('body').css('background-image', 'none');
				$('.congrats').css('display', 'none');
				$('.intro').css('display', 'block'); //shows shaker again
				setTimeout(function () {
					$('#shaker').effect('shake', {
						direction: 'up'
						, distance: 14
					}, 500);
					if (navigator.vibrate) {
						navigator.vibrate(500);
					}
				}, 1000);
				$('#question').css({
					'font-size': '1.78em'
					, 'margin': '0 0% 0 0%'
				});
				$('#drinktitle_container').css({
					'top': '27%'
					, 'padding-bottom': '2em'
					, 'left': '0'
					, 'width': '96%'
					, 'font-size': '.9em'
				});
				$('#question').text(questions[drink_count][question_count].drink);
				$('#question').widowFix();
				$('#drinktitle_container').text('Answer the following questions about the above cocktail correctly to earn points.');
				$('#question').css('display', 'block');
				$('#drinktitle_container').css('display', 'block');
				setTimeout(function () {
					$('#question').css({
						'font-size': '1.35em'
						, 'margin': '0 2% 0 0'
						, 'width': '100%'
						, 'top': '13.5%'
					});
					$('.intro').css('display', 'none');
					$('#timer').css('display', 'inline');
					if (drink_count == 9) {
						drink_count = 0;
					}
					$('.congrats').css('display', 'none');
					switchSequence();
					$('body').css('background-image', 'url("https://i.imgur.com/MaH93Cg.png")');
					$('#drinktitle_container').css('display', 'inline');
					$('#question').css('display', 'inline');
					totalSeconds = 0;
				}, 4000);
			});
		}
		else {
			switch (questions[drink_count][question_count].category) {
			case 'Glass':
				if (drink_count === 0) {
					$('#drinktitle_container').css('display', 'block');
					$('#question').css('display', 'block');
					//needs to set question text to drink 
					//need to set drink title to instructions
					setTimeout(function () {
						$('#question').widowFix();
						$('#question').css({
							'font-size': '1.35em'
							, 'margin': '0 0% 0 5%'
							, 'width': '90%'
							, 'top': '13.5%'
						});
						$('#timer').css('display', 'inline');
						$('#drinktitle_container').text(questions[drink_count][question_count].drink);
						setRightGlass(questions[drink_count][question_count].choices.a);
						$('#question').text(questions[drink_count][question_count].query);
						$('#question').widowFix();
						$('.glassquestion').css('display', 'block');
						$('body').attr('id', 'backgroundGrid');
						$('.intro').css('display', 'none');
						setInterval(setTime, 1000);
					}, delay);
					delay = 0;
				}
				//Answer the following questions about the above cocktail correctly to earn points.
				else {
					setRightGlass(questions[drink_count][question_count].choices.a);
					$('#drinktitle_container').text(questions[drink_count][question_count].drink);
					$('#question').text(questions[drink_count][question_count].query);
					$('#question').widowFix();
					$('.glassquestion').css('display', 'block');
					$('body').attr('id', 'backgroundGrid');
				}
				break;
			case "Two-choice":
				settwochoice(questions[drink_count][question_count].choices.a);
				$('#drinktitle_container').text(questions[drink_count][question_count].drink);
				$('#question').text(questions[drink_count][question_count].query);
				$('#question').widowFix();
				$('body').attr('id', '');
				$('.glassquestion').css('display', 'none');
				$('.four-choice').css('display', 'none');
				$('.two-choice').css('display', 'block');
				break;
			case "Four-choice":
				setfourchoice(questions[drink_count][question_count].choices.a);
				$('#drinktitle_container').text(questions[drink_count][question_count].drink);
				$('#question').text(questions[drink_count][question_count].query);
				$('#question').widowFix();
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
}
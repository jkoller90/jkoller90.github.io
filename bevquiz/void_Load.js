function load(stage) {
	switch (stage) {
	case 1:
		var loading = 0;
		setTimeout(function () {
			while (loading < 2) {
				console.log(loading);
				if (loading === 0) {
					$("#liquorquiz_hype_container").prepend('<div class="q1 q1ch1"></div>');
					$("#liquorquiz_hype_container").prepend('<div class="q1 q1ch2"></div>');
					$("#liquorquiz_hype_container").prepend('<div class="q1 q1ch3"></div>');
					$('div').filter(function () {
						return $(this).css("width") == '343px';
					}).remove();
					answer = $('div').filter(function () {
						return this.style.width == '327px';
					});
					answer[0].setAttribute("id", "answer");
					$("#answer").attr('style', 'pointer-events: auto; position: absolute; border-style: none; cursor: pointer; border-width: 0px; border-color: rgb(229, 196, 0); overflow: visible; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); z-index: 44; width: 327px; height: 327px; transform-origin: 50% 50% 0px; transform: translateX(311px) translateY(615px) rotateY(0deg);');
					$('.q1').click(function () {
						swal({
							confirmButtonColor: "#C1C1C1"
							, confirmButtonText: "Ok!"
							, closeOnConfirm: false
							, title: "Incorrect"
							, text: "<span" + "style='background-color:black'>Try again!"
							, html: true
						});
					});
					$('.q1').on("touchstart", function () {
						swal({
							confirmButtonColor: "#C1C1C1"
							, confirmButtonText: "Ok!"
							, closeOnConfirm: false
							, title: "Incorrect"
							, text: "<span" + "style='background-color:black'>Try again!"
							, html: true
						});
					});
					loading++;
				}
				else if (loading === 1) {
					$("#answer").click(function () {
						++stage;
						$(".q1").remove();
						void_Update(stage);
					});
					$("#answer").on("touchstart", function () {
						++stage;
						$(".q1").remove();
						void_Update(stage);
					});
					loading++;
				}
				else loading++;
			};
		}, 3500);
		break;
	case 2:
		var loading = 0;
		setTimeout(function () {
			while (loading < 2) {
				console.log(loading);
				if (loading === 0) {
					$("#liquorquiz_hype_container").prepend('<div class="q2 q2ch1"></div>');
					
					console.log($('div').filter(function () {return $(this).css("width") == '634px';
					}));
					
					$('div').filter(function () {
						return $(this).css("width") == '634px';
					})[1].remove();
					
					
					answer = $('div').filter(function () {
						return this.style.width == '327px';
					});
					answer[0].setAttribute("id", "answer");
					$("#answer").attr('style', 'pointer-events: auto; position: absolute; border-style: none; cursor: pointer; border-width: 0px; border-color: rgb(229, 196, 0); overflow: visible; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); z-index: 44; width: 327px; height: 327px; transform-origin: 50% 50% 0px; transform: translateX(311px) translateY(615px) rotateY(0deg);');
					$('.q1').click(function () {
						swal({
							confirmButtonColor: "#C1C1C1"
							, confirmButtonText: "Ok!"
							, closeOnConfirm: false
							, title: "Incorrect"
							, text: "<span" + "style='background-color:black'>Try again!"
							, html: true
						});
					});
					$('.q1').on("touchstart", function () {
						swal({
							confirmButtonColor: "#C1C1C1"
							, confirmButtonText: "Ok!"
							, closeOnConfirm: false
							, title: "Incorrect"
							, text: "<span" + "style='background-color:black'>Try again!"
							, html: true
						});
					});
					loading++;
				}
				else if (loading === 1) {
					$("#answer").click(function () {
						++stage;
						$(".q1").remove();
						void_Update(stage);
					});
					$("#answer").on("touchstart", function () {
						++stage;
						$(".q1").remove();
						void_Update(stage);
					});
					loading++;
				}
				else loading++;
			};
		}, 900);			
		break;
	case 3:
		break;
	}
}
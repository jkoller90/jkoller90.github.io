"use strict";
var answer;
$(window).on("load", function () {
	var loading = true;
	setTimeout(function () {
		while (loading) {
			if (loading == false) {
				$('.q1').click(function () {
					swal({
						confirmButtonColor: "#C1C1C1"
						, confirmButtonText: "Ok!"
						, closeOnConfirm: false
						, title: "Incorrect"
						, text: "<span" + "style='background-color:black'>Try again!"
						, html: true
					});
				})
				$("#answer").click(function () {
					$(".q1").remove();
				});
			};
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
			document.getElementById("answer").addEventListener("click", function () {
				$(".q1").remove();
			})
			loading = false;
		};
		console.log(loading);
		// add id then query
	}, 3400);
});
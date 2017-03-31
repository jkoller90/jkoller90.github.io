
		$(window).on("load",function(){
			$(".sweet-alert").attr('style', 'visibility:hidden;');
		})
//		var wait = false;
		function _alert() {
				swal({
					confirmButtonColor: "#C1C1C1"
					, confirmButtonText: "Ok!"
					, closeOnConfirm: false
					, title: "Incorrect"
					, text: "<span" + "style='background-color:black'>Try again!"
					, html: true
				});

		}
	





				var answer = $('div').filter(function () { 
    			return this.style.width == '327px'; 
					
				});
				
				
					answer[0].setAttribute("id", "answer");
					$("#answer").attr('style', 'pointer-events: auto; position: absolute; border-style: none; cursor: pointer; border-width: 0px; border-color: rgb(229, 196, 0); overflow: visible; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); z-index: 44; width: 327px; height: 327px; transform-origin: 50% 50% 0px; transform: translateX(311px) translateY(615px) rotateY(0deg);');	
					
				
				
					$("#answer:parent").click(function(){
						$(".q1").remove();
					})
					
					
					
					
					
					
					
					
								$(document).on('touchstart', 'body', function (e) {
				var xPos = e.originalEvent.touches[0].pageX;
				console.log(xPos + " x");
				var yPos = e.originalEvent.touches[0].pageY;
				console.log(yPos + " y");
			});





<!DOCTYPE html>
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="chrome=1,IE=edge" />
	<title>_liquor_quiz</title>
	<style>
		html {
			height: 100%;
		}
		
		body {
			background-color: #000000;
			margin: 0;
			height: 100%;
		}
	</style>
	<!-- copy these lines to your document head: -->
	<meta name="viewport" content="user-scalable=yes, width=640" />
	<link href='https://fonts.googleapis.com/css?family=Fira+Sans+Condensed&subset=latin' rel='stylesheet' type='text/css'>
	<link href='bevquiz.hyperesources/sweetalert.css' rel='stylesheet'>
	<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
	<script src="bevquiz.hyperesources/sweetalert.min.js" type="text/javascript"></script>
	<script>
		"use strict";
		var answer;
		$(window).on("load", function () {
			setTimeout(function () {
				var loading = true; //boolean for loop
				var a = 0;
				console.log(a + loading);
				while (loading && a==0) {
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
						});
						$("#answer").click(function () {
							$(".q1").remove();
						});
						a = 1;
					}
					else {
						$("#liquorquiz_hype_container").prepend('<div class="q1 q1ch1"></div>');
						$("#liquorquiz_hype_container").prepend('<div class="q1 q1ch2"></div>');
						$("#liquorquiz_hype_container").prepend('<div class="q1 q1ch3"></div>');
						$('div').filter(function () {
							return $(this).css("width") == '343px';
						}).remove();
						answer = $('div').filter(function () {
							return this.style.width == '327px';
						});
						//adjust z-index above container 
						answer[0].setAttribute("id", "answer");
						$("#answer").attr('style', 'pointer-events: auto; position: absolute; border-style: none; cursor: pointer; border-width: 0px; border-color: rgb(229, 196, 0); overflow: visible; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); z-index: 44; width: 327px; height: 327px; transform-origin: 50% 50% 0px; transform: translateX(311px) translateY(615px) rotateY(0deg);');
					
						loading = false;
						console.log(loading);
					}
				};
				// add id then query
			}, 3500);
			//			$('.q1').click(function () {
			//				swal({
			//					confirmButtonColor: "#C1C1C1"
			//					, confirmButtonText: "Ok!"
			//					, closeOnConfirm: false
			//					, title: "Incorrect"
			//					, text: "<span" + "style='background-color:black'>Try again!"
			//					, html: true
			//				});
			//			})
			//			$("#answer").click(function () {
			//				$(".q1").remove();
			//			});
		});

		function _alert() {}

	var clickedBool = false;
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	var hitCoordObjs = [];
	var clickHandler, index = 1;
	$(document).on('tap', '.hit', function () {
		clickedBool = true;		
		$("#" + this.getAttribute("id")).css("animation", "border .15s ease 1 forwards");
		$('#bottle' + index).css('opacity', '1');
		if (iOS) {
			var ios_length = hotspots.length;
			$(".score").text(score + " of " + hotspots.length + " found");
			score+=.5;
		}
		else {
			$(".score").text(score + " of " + hotspots.length + " found");
			score++;
		}
		setTimeout(function () {
			clickedBool = false;
		}, 600)
		index++;
	})
	$(document).on('tap', '#body', function (event) {
		setTimeout(function () {
			if (clickedBool == false) {
				pagX = event.pageX;
				pagY = event.pageY;
				$(".miss").css("width", circleWidth + "px");
				$(".miss").css("height", circleHeight + "px");
				$(".miss").css("left", pagX - circleWidth / 2);
				$(".miss").css("top", pagY - headerSize - circleHeight / 2);
				$(".miss").css("animation", "unborder .45s ease 1 forwards");
				if (!clickedBool) {
					setTimeout(function () {
						$(".miss").css("animation", "");
						$(".miss").css("left", 0);
						$(".miss").css("top", 0);
					}, 400);
				}
			}
		}, 100);
	});
	var fullGlass = '<img class="scoreboard_glasses" src="http://i.imgur.com/mA0nB2z.png">';
	//orientation change requires refresh for alignment			
	$(window).on("orientationchange", function () {
		location.reload();
	});
	var score = 0;
	var hitspots, bh, bw, hotspots;

	function updateData(background) {
		background = getBackgroundSize(document.getElementById('body'));
		$(".debug").css("display", "none");
		document.getElementById('width').innerHTML = background.width + 'px';
		document.getElementById('height').innerHTML = background.height + 'px';
		bh = background.width;
		bw = background.height;
		hotspots = [
			{
				top: bh * .22
				, left: bw * .24
	}

		, {
				top: bh * .43
				, left: bw * .31
	}
		, {
				top: bh * .415
				, left: bw * .485
	}
		, {
				top: bh * .34
				, left: bw * 1.485
	}
		, {
				top: bh * .25
				, left: bw * 1.475
	}
];
		$(".score").html("0 of " + hotspots.length + " found");
		for (var i = 0; i < hotspots.length; i++) {
			$("#container").prepend('<div class="hit" id="hit' + i + '"/>');
			$("#hit" + i).css("top", hotspots[i].top + "px");
			$("#hit" + i).css("left", hotspots[i].left + "px");
			$("#hit" + i).css("width", circleWidth + circleWidth * .13 + "px");
			$("#hit" + i).css("height", circleWidth + circleWidth * .13+ "px");
		};
	}
	window.onload = window.onresize = updateData;
	h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	document.getElementById("container").style.width = w;
	document.getElementById("body").style.width = w;
	document.getElementById("container").style.height = h;
	document.getElementById("body").style.height = h;
	var time = 60;
	var circleWidth = w / 25;
	var circleHeight = w / 25;
	$("body").attr("width", w);
	$("body").attr("height", h);
	$("#body").attr("width", w);
	$("#body").attr("height", h);
	(function setupContainer() {
		$("#container").prepend('<canvas id="mycanvas" style="border: 1px solid #ccc"> Canvas element not supported	<br/> </canvas>');
	})();
	(function alignCanvas() {
		$("#body").attr("width", w + "px");
		$("#body").attr("width", w + "px");
		$("#myCanvas").attr("height", h + "px");
		$("#myCanvas").attr("height", h + "px");
	})();
	var touchzone = document.getElementById("body");
	var sec = 0;

	function pad(val) {
		return val > 9 ? val : "0" + val;
	}
	var timer = setInterval(function () {
		document.getElementsByClassName("time")[0].innerHTML = pad(parseInt(sec / 60, 10)) + ":" + pad(++sec % 60);
	}, 1000);
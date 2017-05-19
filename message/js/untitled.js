var debug = false; //adjust for debug info to show on site 
//build debug library to include coordinate tap
var fullGlass = '<img class="scoreboard_glasses" src="http://i.imgur.com/mA0nB2z.png">';
var clickedBool = false;
var ios_inc_flag = false; //without implementation of this flag with a boolean on hit click listener, safari will inexplicably double the amount of bottles on scoreboard and will add two bottles on each hit. 
//orientation change requires refresh for alignment			
$(window).on("orientationchange", function () {
	location.reload();
});
//def later completed in getBackgroundSize
var background = {
	width: 0
	, height: 0
}

function getBackgroundSize(elem) {
	var computedStyle = getComputedStyle(elem)
		, image = new Image()
		, src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2')
		, cssSize = computedStyle.backgroundSize
		, elemW = parseInt(computedStyle.width.replace('px', ''), 10)
		, elemH = parseInt(computedStyle.height.replace('px', ''), 10)
		, elemDim = [elemW, elemH]
		, computedDim = []
		, ratio;
	image.src = src;
	ratio = image.width > image.height ? image.width / image.height : image.height / image.width;
	// Split background-size properties into array
	cssSize = cssSize.split(' ');
	computedDim[0] = cssSize[0];
	computedDim[1] = cssSize.length > 1 ? cssSize[1] : 'auto';
	if (cssSize[0] === 'cover') {
		if (elemDim[0] > elemDim[1]) {
			if (elemDim[0] / elemDim[1] >= ratio) {
				computedDim[0] = elemDim[0];
				computedDim[1] = 'auto';
			}
			else {
				computedDim[0] = 'auto';
				computedDim[1] = elemDim[1];
			}
		}
		else {
			computedDim[0] = 'auto';
			computedDim[1] = elemDim[1];
		}
	}
	else if (cssSize[0] === 'contain') {
		// Width is less than height
		if (elemDim[0] < elemDim[1]) {
			computedDim[0] = elemDim[0];
			computedDim[1] = 'auto';
		}
		else {
			// elem's ratio is greater than or equal to img ratio
			if (elemDim[0] / elemDim[1] >= ratio) {
				computedDim[0] = 'auto';
				computedDim[1] = elemDim[1];
			}
			else {
				computedDim[1] = 'auto';
				computedDim[0] = elemDim[0];
			}
		}
	}
	else {
		// If not 'cover' or 'contain', loop through the values
		for (var i = cssSize.length; i--;) {
			// Check if values are in pixels or in percentage
			if (cssSize[i].indexOf('px') > -1) {
				// If in pixels, just remove the 'px' to get the value
				computedDim[i] = cssSize[i].replace('px', '');
			}
			else if (cssSize[i].indexOf('%') > -1) {
				// If percentage, get percentage of elem's dimension
				// and assign it to the computed dimension
				computedDim[i] = elemDim[i] * (cssSize[i].replace('%', '') / 100);
			}
		}
	}
	// If both values are set to auto, return image's 
	// original width and height
	if (computedDim[0] === 'auto' && computedDim[1] === 'auto') {
		computedDim[0] = image.width;
		computedDim[1] = image.height;
	}
	else {
		// Depending on whether width or height is auto,
		// calculate the value in pixels of auto.
		// ratio in here is just getting proportions.
		ratio = computedDim[0] === 'auto' ? image.height / computedDim[1] : image.width / computedDim[0];
		computedDim[0] = computedDim[0] === 'auto' ? image.width / ratio : computedDim[0];
		computedDim[1] = computedDim[1] === 'auto' ? image.height / ratio : computedDim[1];
	}
	// Finally, return an object with the width and height of the
	// background image.
	return {
		width: computedDim[0]
		, height: computedDim[1]
	};
}
var background = {
	width: ""
	, height: ""
}
var score = 0;
var hitspots;

function updateData(background) {
	(function debug_click() {
		var touchzone = document.getElementById("container");
		if (debug === true) {
			touchzone.addEventListener("click", clickHandler, false);
			touchzone.addEventListener("touchdown", touchHandler, false);
		}
	})();

	function clickHandler(event) {
		// Get a reference to our coordinates div
		var coords = document.getElementById("coords");
		// Write the coordinates of the touch to the div
		coords.innerHTML = 'x: ' + event.pageX + ', y: ' + event.pageY;
	}

	function touchHandler(event) {
		var coords = document.getElementById("coords");
		coords.innerHTML = 'x: ' + event.touches[0].pageX + ', y: ' + event.touches[0].pageY;
	}
	// background = getBackgroundSize(document.body);
	background = getBackgroundSize(document.getElementById('body'));
	if (debug) $(".debug").css("display", "block");
	else $(".debug").css("display", "none");
	document.getElementById('width').innerHTML = background.width + 'px';
	document.getElementById('height').innerHTML = background.height + 'px';
	//	document.getElementById('winWidth').innerHTML = getComputedStyle(document.body).width;
	//	document.getElementById('winHeight').innerHTML = getComputedStyle(document.body).height;
	var bh = background.width;
	var bw = background.height;
	var hotspots = [
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
	(function createHotspots() {
		for (var i = 0; i < hotspots.length; i++) {
			$("#container").prepend('<div class="hit" id="hit' + i + '"/>');
			$("#hit" + i).css("top", hotspots[i].top + "px");
			$("#hit" + i).css("left", hotspots[i].left + "px");
			$("#hit" + i).css("width", circleWidth + "px");
			$("#hit" + i).css("height", circleWidth + "px");
		};
	})();
	hitspots = document.getElementsByClassName("hit");
	for (var i = 0; i < hitspots.length; i++) {
		var id = hitspots[i].getAttribute("id");
	}
	var index = 1;
	$(".hit").on("click", function (event) {
		clickedBool = true;
		if (clickedBool === true) {
			$("#" + this.getAttribute("id")).css("animation", "border .15s ease 1 forwards");
			$('#bottle' + index).css('opacity', '1');
			ios_inc_flag = true;
			if (iOS && ios_inc_flag === true) {
				var ios_length = hotspots.length / 2;
				$(".score").text(score + " of " + hotspots.length + " found");
			}
			else {
				$(".score").text(score + " of " + hotspots.length + " found");
			}
			score++;
		}
		setTimeout(function(){
			
			clickedBool = false;
		}, 500)
		index++;
	});
}
window.onload = window.onresize = updateData;
h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
document.getElementById("container").style.width = w;
document.getElementById("container").style.height = h;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var time = 60;
var circleWidth = w / 25;
var circleHeight = w / 25;
$("body").attr("width", w);
$("body").attr("height", h);
//$("#body").attr("width", w);
//$("#body").attr("height", h);
(function setupContainer() {
	$("#container").prepend('<canvas id="mycanvas" style="border: 1px solid #ccc"> Canvas element not supported	<br/> </canvas>');
})();
(function alignCanvas() {
	$("#body").attr("width", w + "px");
	$("#body").attr("height", h + "px");
})();
var touchzone = document.getElementById("body");
(function setupMissedClicks() {
	touchzone.addEventListener("touchstart", drawCircle, false);
})();

function drawCircle(event) {
	setTimeout(function () {
		setTimeout(function () {
			if (!clickedBool) { // && allowed == true) {
//				setTimeout(function () {
					clickedBool = true;
//				}, 200);
				setTimeout(function () {
					clickedBool = false;
				}, 300)
				$(".miss").css("width", circleWidth + "px");
				$(".miss").css("height", circleHeight + "px");
				$(".miss").css("left", event.touches[0].pageX - circleWidth / 2);
				$(".miss").css("top", event.touches[0].pageY - headerSize - circleHeight / 2);
				$(".miss").css("animation", "unborder .5s ease 1 forwards");
				setTimeout(function () {
					$(".miss").css("animation", "");
					$(".miss").css("left", 0);
					$(".miss").css("top", 0);
				}, 300);
			}
		}, 150);
	}, 150)
}
//function mouse_drawCircle(event) {
//	clickedBool = true;
//	setTimeout(function () {
//		clickedBool = false;
//		//		alert(clickedBool);
//	}, 900);
//	$(".miss").css("width", circleWidth + "px");
//	$(".miss").css("height", circleHeight + "px");
//	//left
//	$(".miss").css("left", event.pageX - circleWidth / 2);
//	//top
//	$(".miss").css("top", event.pageY - circleHeight / 2);
//	//coordinates for debugging
//	$(".miss").css("animation", "unborder .5s ease 1 forwards");
//	setTimeout(function () {
//		$(".miss").css("animation", "");
//		//left reset for reclicking 
//		$(".miss").css("left", 0);
//		//top reset for reclicking 
//		$(".miss").css("top", 0);
//	}, 500);
//}
var sec = 0;

function pad(val) {
	return val > 9 ? val : "0" + val;
}
var timer = setInterval(function () {
	document.getElementsByClassName("time")[0].innerHTML = pad(parseInt(sec / 60, 10)) + ":" + pad(++sec % 60); // + ":" + pad(parseInt(sec / 60, 10));
}, 1000);
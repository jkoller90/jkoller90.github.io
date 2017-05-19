var bh, bw, background
setTimeout(function () {
	background = getBackgroundSize(document.getElementById('container'));
	$(".debug").css("display", "none");
	document.getElementById('width').innerHTML = background.width + 'px';
	document.getElementById('height').innerHTML = background.height + 'px';
	bh = background.width;
	bw = background.height;
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
}, 500);
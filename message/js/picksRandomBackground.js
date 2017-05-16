var images = [
 'http://i.imgur.com/vXYAuAL.png'
 , 'http://i.imgur.com/GEIwlp3.jpg'
 , 'http://i.imgur.com/CzMegFm.jpg'
 , 'http://i.imgur.com/O07WkaQ.jpg'
	];

	var hotspots = [
		{
			top: bh * .4
			, left: bw * .9
	}, //chair 1
		{
			top: bh * .4
			, left: bw * .64
	}, //chair 2
		{
			top: bh * .4
			, left: bw * .4
	}, //chair 3
		{
			top: bh * .4
			, left: bw * .2
	}, //chair 4	
		{
			top: bh * .28
			, left: bw * .035
	}, //boat	
		{
			top: bh * .22
			, left: bw * .42
	}, //bell	
//		{
//			top: bh * .11
//			, left: bw * .92
//	}, //palm tree window	
//		{
//			top: bh * .275
//			, left: bw * 1.56
//	}, //gopher shadow 	
];
var random_number;

$(document).ready(function () {
	random_number = Math.round(Math.random() * 3);
	$('body').css('background-image', 'url("' + images[random_number] + '")');
	if (random_number == 1) {
		$('header').css('background-color', 'rgba(120, 120, 120, .7)');
	}
});


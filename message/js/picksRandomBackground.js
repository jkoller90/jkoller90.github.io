var images = [
 'http://i.imgur.com/vXYAuAL.png'
 , 'http://i.imgur.com/GEIwlp3.jpg'
 , 'http://i.imgur.com/CzMegFm.jpg'
 , 'http://i.imgur.com/O07WkaQ.jpg'
	];

var random_number;

$(document).ready(function () {
	random_number = Math.round(Math.random() * 3);
	$('body').css('background-image', 'url("' + images[random_number] + '")');
	if (random_number == 1) {
		$('header').css('background-color', 'rgba(120, 120, 120, .7)');
	}
});


 //bell	
//		,{
//			top: bh * .11
//			, left: bw * .92
//	}, //palm tree window	
//		{
//			top: bh * .275
//			, left: bw * 1.56
//	}, //gopher shadow 	
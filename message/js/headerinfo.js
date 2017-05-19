var headerSize;
$(document).ready(function(){
	headerSize = $("header").height();
	var secBodyH = $('body').height() - headerSize*2;
	setTimeout(function(){
		
	$("#body").attr('height', secBodyH);
	}, 1000)
	console.log($('body').height())
	console.log(secBodyH);
		console.log(headerSize);
})
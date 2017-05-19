var headerSize;
$(document).ready(function(){
	headerSize = $("header").height();
	$("#body").height(window.height - headerSize);
	console.log(headerSize);
})
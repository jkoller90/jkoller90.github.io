//function toggleFullScreen() {
//  var doc = window.document;
//  var docEl = doc.documentElement;
//
//  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
//  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
//
//  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
//    requestFullScreen.call(docEl);
//  }
//  else {
//    cancelFullScreen.call(doc);
//  }
//}
//
//$(window).on("load",function(){
//	var video = document.getElementById("video");
////	$("video").requestFullScreen();
//	// 	toggleFullScreen();
////// Mozilla
////video.mozRequestFullScreen();
//// 
//// Webkit for video elements only
////video.webkitEnterFullScreen();
////	document.documentElement.webkitRequestFullScreen();
//});

//var elem = document.getElementById("video");
//elem.requestFullscreen();
//if (elem.requestFullscreen) {
//  elem.requestFullscreen();
//} else if (elem.mozRequestFullScreen) {
//  elem.mozRequestFullScreen();
//} else if (elem.webkitRequestFullscreen) {
//  elem.webkitRequestFullscreen();
//}

var videoElement = document.getElementById('video
																					 ');    
videoElement.webkitRequestFullScreen();
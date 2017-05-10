(function setupMissedClicks(){
	var touchzone = document.getElementById("mycanvas");
	touchzone.addEventListener("touchstart", drawCircle, false);
		touchzone.addEventListener("touchstart", touchHandler, false);
	if (!iOS) {
		touchzone.addEventListener("mousedown", mouse_drawCircle, false);
		touchzone.addEventListener("touchstart", touchHandler, false);		
	}
	setInterval(function () {
		if (time > 0) {
			--time;
		}
	$(".time").text("Time: " + time);
		}, 1000);		
})();	

function touchHandler(event) {
  // Get a reference to our coordinates div
  var coords = document.getElementById("coords");
  // Write the coordinates of the touch to the div
  coords.innerHTML = 'x: ' + (event.touches[0].pageX || event.pageX) + ', y: ' + (event.touches[0].pageY || event.pageY);
}

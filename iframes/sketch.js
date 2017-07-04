var i, x, y, originalWidth, originalHeight;

function setup() {
	originalWidth = window.innerWidth;
	originalHeight = window.innerHeight;
	createCanvas(originalWidth, 175);
	x = width / 3;
	y = height/2;
}
var ellipseX = 4;
var ellipseY = 2;

function draw() {
//	background(31, y, 209);
	// Draw a circle
	stroke(1);
	fill(31, 209 , 209);
	if (ellipseX < 1000) {
		ellipseX += 10;
		ellipse(x, y, ellipseX, ellipseX)
	}
	else {
		for (i = 0; i < 4000; i++) {
			ellipseX -= .5;
			ellipse(y, y, ellipseX, ellipse);
		}
	}
	// Moving up at a constant speed
	if(y != 145){
	y = y - 11;
		
	}
	// Reset to the top
	if (y < 0) {
		y = height;
	}
}
var windowWidth, windowHeight;

function windowResized() {
	x = width / 2;
	y = height;
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
	ellipse(x, y, 24, 24);
	resizeCanvas(windowWidth, windowHeight);
}
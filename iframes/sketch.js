var i, x, y, originalWidth, originalHeight;

function setup() {
	originalWidth = window.innerWidth;
	originalHeight = window.innerHeight;
	createCanvas(originalWidth, 175);
	//position of circles: 
	x = width / 3;
	y = height / 2;
}
var ellipseX = 4;
var ellipseY = 2;
var colorFlag = 0;
var grayFlag = false;
function draw() {
	//	background(31, y, 209);
	// Draw a circle
	stroke(1);
	if (colorFlag > 50) {
		fill(0, 102, 204);
		colorFlag++;
		if (colorFlag > 100){
			if(!grayFlag){
							document.getElementsByTagName('html')[0].style.filter = 'grayscale(100%)';
			grayFlag = true;				
			}else{
								document.getElementsByTagName('html')[0].style.filter = 'grayscale(0%)';
				grayFlag = false;
			}
			colorFlag = 0;
		}
	}
	else {
		colorFlag++;
		fill(31, 209, 209);
	}
	if (ellipseX < 900) {
		ellipseX += 2;
		ellipse(x, y, ellipseX, ellipseX)
	}
	else {
		for (i = 0; i < 2000; i++) { //4000
			ellipseX -= .25; //.5
			ellipse(y, y, ellipseX, ellipse);
		}
	}
	// Moving up at a constant speed
	if (y != 145) {
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
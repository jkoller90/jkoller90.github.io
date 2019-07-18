var i, x, y, originalWidth, originalHeight;

function setup() {
	originalWidth = window.outerWidth * .45;
	originalHeight = window.innerHeight;
	createCanvas(originalWidth, 350);
	//position of circles: 
	x = width /2  ;
	y = height /2 ;

}
var ellipseX = 1;
var ellipseY = 1;
var colorFlag = 0;
var grayFlag = false;
function draw() {
	//	background(31, y, 209);
	// Draw a circle
	// stroke(1);
	stroke(color(255, 204, 0));

	fill(255, 231, 145)
	if (colorFlag > 50) 
	{
		// fill(66,161,245); //blue
		// fill(255,255,255)
		// fill(255, 231, 145)
		fill(237,62,62)
		colorFlag++;
		
		
		if (colorFlag > 80)
		{
			if(!grayFlag)
			{
				document.getElementsByTagName('html')[0].style.filter = 'grayscale(30%)';
				grayFlag = true;				
			}
			else
			{
				document.getElementsByTagName('html')[0].style.filter = 'grayscale(0%)';
				grayFlag = false;
			}
			colorFlag = 0;
		}

	}
	else 
	{
		colorFlag++;
		// fill(247, 152, 27)
		// fill(255,0,0)
		// fill(237,62,62)
		fill(255, 231, 145)
	}
	
	// var ellix = 900; 
	// ellix = 100;
	// ellix= 200;

	// variables for adjustment of speed and position

	ellix = 400;
	ellidec = 0.5

	if (ellipseX < ellix) 
	{

		ellipseX += 2;
		ellipse(x, y, ellipseX, ellipseX)
	}
	else {
		for (i = 0; i < 1000; i++) { //4000
			
			ellipseX -= ellidec; //.5
			ellipse(y, y, ellipseX, ellipse);
		}
	}
	// Moving up at a constant speed
	if (y != 15) {
		y = y - 1;
	}
	// Reset to the top
	if (y < 0) {
		y = height;
	}
}
var windowWidth, windowHeight;

// function windowResized() {
// 	x = width ;
// 	y = height;
// 	windowWidth = window.innerWidth;
// 	windowHeight = window.innerHeight;
// 	ellipse(x, y, 24, 24);
// 	resizeCanvas(windowWidth, windowHeight);
// }


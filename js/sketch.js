// Where is the circle
var i, x, y, originalWidth, originalHeight;

function setup() {
  originalWidth = window.innerWidth;
  originalHeight = window.innerHeight;
  createCanvas(originalWidth, 300);
  // Starts in the middle
  x = width / 2;
  y = height;
}
var ellipseX = 4;
var ellipseY = 2;

function draw() {
  background(0, y * .5, 200);

  // Draw a circle
  stroke(1);
  fill(y, y, x+y);

  
  if (ellipseX < 500) {
    ellipseX+=4;
    ellipse(x, y, ellipseX, ellipseX)
  } else {
    for (i = 0; i < 520; i++) {
      ellipseX--;
      ellipse(y, y, ellipseX, ellipse);
    }


  }



  // Jiggling randomly on the horizontal axis
//  x = x + random(-5, 5);
  // Moving up at a constant speed
  y = y - 2;

  // Reset to the bottom
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

// Where is the circle
var i, x, y, originalWidth, originalHeight;

function setup() {
  createCanvas(300, 300);
  originalWidth = window.innerWidth;
  originalHeight = window.innerHeight;
  // Starts in the middle
  x = width / 2;
  y = height;
}
var ellipseX = 4;
var ellipseY = 24;

function draw() {
  background(133, 255, 210);

  // Draw a circle
  stroke(50)
  fill(y, y, 0);

  
  if (ellipseX < 500) {
    ellipseX++;
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
//  y = y + 2; //gradual to static color
//  y = y - y/2; //shoots up fast and slowly descends
  y = y-.5;

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

let angle = 0; // Initial angle for drawing the circle

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 255, 0);

  line()
  drawCircle();
  angle += 0.05; // Increment angle for the next frame
  if (angle >= TWO_PI) {
    angle = TWO_PI; // Ensure the angle doesn't exceed a full circle
  }
  drawCheckMark(615, 310, 100);
}


function drawCheckMark(x, y, size) {
    // Calculate coordinates for the check mark lines
    let startX = x - size * 0.4;
    let startY = y - size * 0;
    let midX = x - size * 0.05;
    let midY = y + size * 0.30;
    let endX = x + size * 0.45;
    let endY = y - size * 0.5;
    
    // Draw the check mark
    stroke(255);
    strokeWeight(4);
    noFill();
    beginShape();
    vertex(startX, startY);
    vertex(midX, midY);
    vertex(endX, endY);
    endShape();
  }

function drawCircle() {
  let circleRadius = 100; // Radius of the circle
  let circleX = width / 2; // X-coordinate of the circle center
  let circleY = height / 2; // Y-coordinate of the circle center

  // Draw the circle
  noFill();
  stroke(255);
  strokeWeight(4);
  beginShape();
  for (let a = 0; a <= angle; a += 0.01) {
    let x = circleX + cos(a) * circleRadius;
    let y = circleY + sin(a) * circleRadius;
    vertex(x, y);
  }
  endShape();
}

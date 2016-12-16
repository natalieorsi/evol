//Inspired by CodingRainbow: https://youtu.be/JXuxYMGe4KI
//Created and maintained by Natalie Orsi at http://natalieorsi.net

function Spike(x, y, radius) {
  this.pos = createVector(x, y);
  this.radius = radius;
  this.vel = createVector(0,0);

  this.show = function() {
    //fill(233,0,233);
    // ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    push();
    rotate(frameCount / 200.0);
    star(x, y, 5, 70, 3); 
    pop();
  }
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
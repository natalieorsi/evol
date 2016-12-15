// Inspired by CodingRainbow: https://youtu.be/JXuxYMGe4KI

function Food(x, y, radius) {
  yoff = 0.0
  this.pos = createVector(x, y);
  this.radius = radius;
  this.vel = createVector(0,0);

  this.show = function() {
    //fill(233,0,233);
    // ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    push();
    translate(this.pos.x, this.pos.y);
    beginShape();
    for (var a = 0; a < TWO_PI; a += 0.1) {
      var offset = map(sin(a*10 + frameCount * 0.1), 0, 1, -25, 25);
      var r = this.radius + offset;
      var x = r * cos(a);
      var y = r * sin(a);
      vertex(x,y);
    }
    endShape();
    pop();
    yoff += 0.00;
  }
}

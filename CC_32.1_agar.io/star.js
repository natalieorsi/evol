// Inspired by CodingRainbow: https://youtu.be/JXuxYMGe4KI

function Star(x, y, radius) {
  this.pos = createVector(x, y);
  this.radius = radius;
  this.vel = createVector(0,0);
  this.speed = 3;

  this.show = function() {
    //fill(233,0,233);
    // ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    push();
    translate(this.pos.x, this.pos.y);
    beginShape();
    for (var a = 0; a < TWO_PI; a += 0.1) {
      var offset = map(sin(a*100 + frameCount * 0.1), 0, 1, -25, 25);
      var r = this.radius + offset;
      var x = r * cos(a);
      var y = r * sin(a);
      vertex(x,y);
    }
    endShape();
    pop();
  }

  this.move = function() {
    this.pos.x += random(-this.speed, this.speed);
    this.pos.y += random(-this.speed, this.speed);
  };
}

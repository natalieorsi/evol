// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/JXuxYMGe4KI

function Blob(x, y, r) {
  this.pos = createVector(x, y);
  this.r = r;
  this.vel = createVector(0,0);

  this.update = function() {
    this.speed = 3
    var newvel = createVector(mouseX-width/2, mouseY-height/2);
    newvel.setMag(this.speed);
    this.vel.lerp(newvel, 0.2);
    this.pos.add(this.vel);
  }

  this.eats = function(other) {
    var d = p5.Vector.dist(this.pos, other.pos);
    if (d < this.r + other.radius) {
      var sum = PI * this.r * this.r + PI * other.radius * other.radius;
      this.r = sqrt(sum / PI);
      //this.r += other.r;
      console.log("Yum!")
      this.speed += 1
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }
}

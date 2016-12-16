// Blob based on a coding challenge at http://codingrainbow.com
//Created and maintained by Natalie Orsi at http://natalieorsi.net

function Blob(x, y, r) {
  this.pos = createVector(x, y);
  this.r = r;
  //Speed control:
  this.vel = createVector(0,0);
  this.newvel = createVector(0,0);
  this.speed = 1;
  //For evolution:
  this.shell = 1;
  this.polygons = 1;
  this.noisy = 16;
  this.vibration = 0.03 * this.r;


  this.update = function() {
    newvel = createVector(curs.pos.x-height/2, curs.pos.y-height/2);
    this.newvel.setMag(this.speed);
    this.vel.lerp(curs.pos, 0.9);
    this.pos.add(this.vel);
  }

  this.eats = function(other) {
    var d = p5.Vector.dist(this.pos, other.pos);
    if (d < this.r + other.radius) {
      var sum = PI * this.r * this.r + PI * other.radius * other.radius;
      this.r = sqrt(sum / PI);
      //this.r += other.r;
      this.vibration += 0.001*other.radius;
      console.log("Yum!");
      return true;
    } else {
      return false;
    }
  }

  // this.show = function() {
  //   fill(255);
  //   ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  // }

  this.show = function() {
      beginShape();
      var xoff = 0;
      for (var a = 0; a < this.shell * TWO_PI; a += 0.1 * this.polygons) {
        var offset = map(noise(xoff, yoff), 0, 1, -this.r/this.noisy, this.r/this.noisy);
        var r = this.r + offset;
        var x = this.pos.x + r * cos(a);
        var y = this.pos.y + r * sin(a);
        vertex(x, y);
        xoff += this.vibration;
        //ellipse(x, y, 4, 4);
      }
      endShape();
      
      yoff += 0.03*this.vibration;
    }

  this.constrain = function() {
    blob.pos.x = constrain(blob.pos.x, -max_width, max_width)
    blob.pos.y = constrain(blob.pos.y, -max_height, max_height)
  }

  this.shake = function() {
    this.pos.x += random(-this.speed/2, this.speed/2);
    this.pos.y += random(-this.speed/2, this.speed/2);
  };
  // this.stop = function() {
  //   this.newvel.setMag(0);
  //   curs.pos.x = this.pos.x;
  //   curs.pos.y = this.pos.y;
  // }
}
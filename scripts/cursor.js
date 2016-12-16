// Inspired by CodingRainbow: https://youtu.be/JXuxYMGe4KI
//Created and maintained by Natalie Orsi at http://natalieorsi.net

function CursorObj(x, y) {
  this.pos = createVector(x, y);
  this.speed = 1;


  this.up = function() {
    this.pos.y -= this.speed;
  }
  this.down = function() {
    this.pos.y += this.speed;
  }
  this.left = function() {
    this.pos.x -= this.speed;
  }
  this.right = function() {
    this.pos.x += this.speed;
  }

  this.show = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, blob.r/3, blob.r/3);
  }

  this.constrain = function() {
      this.pos.x = constrain(this.pos.x, -max_width, max_width);
      this.pos.y = constrain(this.pos.y, -max_height, max_height);
      //max_width^2 + max_height^2 = max_mag^2
    }
}

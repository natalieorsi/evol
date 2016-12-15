// Inspired by CodingRainbow: https://youtu.be/JXuxYMGe4KI

function CursorObj(x, y) {
  this.pos = createVector(x, y);
  this.speed = 50;

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
    ellipse(this.pos.x, this.pos.y, 6, 6);
  }

}

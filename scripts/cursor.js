// Inspired by CodingRainbow: https://youtu.be/JXuxYMGe4KI
//Created and maintained by Natalie Orsi at http://natalieorsi.net

function CursorObj(x, y) {
  this.pos = createVector(x, y);
  this.yvel = 1;
  this.xvel = 1;
  var speed_limit = 2.5;
  this.sl_sq = speed_limit * speed_limit;
  this.y_acc = 0;
  this.x_acc = 0;
  this.sensitivity = 1;

  this.up = function() {
    new_speed = this.yvel - this.y_acc - this.sensitivity;
    //Check if vectors sum to exceed speed (magnitude) limit
    if ((new_speed * new_speed + this.xvel * this.xvel) < (this.sl_sq)) {
      this.y_acc -= this.sensitivity;
    }
  }

  this.down = function() {
    new_speed = this.yvel + this.y_acc + this.sensitivity;
    //Check if vectors sum to exceed speed (magnitude) limit
    if ((new_speed * new_speed + this.xvel * this.xvel) < (this.sl_sq)) {
      this.y_acc += this.sensitivity;
    }
  }

  this.left = function() {
    new_speed = this.xvel - this.x_acc - this.sensitivity;
    //Check if vectors sum to exceed speed (magnitude) limit
    if ((new_speed * new_speed + this.yvel * this.yvel) < (this.sl_sq)) {
      this.x_acc -= this.sensitivity;
    }
  }
  this.right = function() {
    new_speed = this.xvel + this.x_acc + this.sensitivity;
    //Check if vectors sum to exceed speed (magnitude) limit
    if ((new_speed * new_speed + this.yvel * this.yvel) < (this.sl_sq)) {
      this.x_acc += this.sensitivity;
    }
  }

  this.update = function() {
    this.pos.y += this.y_acc;
    this.pos.x += this.x_acc;
  }

  this.decel = function() {
    if (this.y_acc > 0) {
      this.y_acc -= 1;
    }
    else if (this.y_acc < 0) {
      this.y_acc += 1;
    }
    if (this.x_acc > 0) {
      this.x_acc -= 1;
    }
    else if (this.x_acc < 0) {
      this.x_acc += 1;
    }
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

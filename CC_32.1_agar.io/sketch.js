// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/JXuxYMGe4KI

var blob;
var food = [];
var danger = [];
var zoom = 1;
var curs;
var max_width = 10000;
var max_height = 10000;
var yoff = 0.0;
var specks_count = 0;

var leaves;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  draw_map = new Surroundings();
  var start_radius = 64;
  var spread;
  blob = new Blob(0, 0, start_radius);
  curs = new CursorObj(0,0);
  for (var i = 0; i < 100; i++) {
    var x = random(-spread*start_radius,spread*start_radius);
    var y = random(-spread*start_radius,spread*start_radius);
    food[i] = new Star(x, y, 30);
  }
}

// window.onresize = function() {
//   var w = window.innerWidth;
//   var h = window.innerHeight;  
//   canvas.size(w,h);
//   width = w;
//   height = h;
// };

function draw() {
  background(0);
  // image(leaves, 0, 0);

  if ((frameCount % 40 == 0) && (food.length < 60)) {
    var spread = 1;
    curr_x = blob.pos.x;
    curr_y = blob.pos.y;
    var x = random(-max_width,max_width);
    var y = random(-max_height,max_height);
    var r = random(30,3*blob.r/4);
    food.push(new Star(x, y, blob.r/2));
  }

  if ((frameCount % 20 == 0) && (curs.speed > 10)) {
    curs.speed -= random(-4,4);
  }

  if ((blob.r > 1000) && (max_width<100000)){
    max_width += blob.r;
    max_height += blob.r;
  }

  if ((frameCount%10 == 0) && (specks_count < 500)) {
    var x = random(-max_width,max_width);
    var y = random(-max_height,max_height);
    for (var i = food.length-1; i >=0; i--) {
      ellipse(x, y, this.r/1, this.r/1);
    }
  }

  translate(width/2, height/2);
  var newzoom = 64 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);
  draw_map.show();
  for (var i = food.length-1; i >=0; i--) {
    food[i].move();
    food[i].show();
    if (blob.eats(food[i])) {
      food.splice(i, 1);
    }
  }

  if (blob.r % 49 == 0){
    var x = random(-max_width,max_width);
    var y = random(-max_height,max_height);
    var r = random(30,3*blob.r/4);
    danger.push(new Spike(x, y, blob.r/2));
  }
  for (var i = danger.length-1; i >=0; i--) {
    danger[i].show();
  }
  blob.newvel = createVector(curs.pos.x/2, curs.pos.y/2);

  blob.shake();
  blob.show();
  blob.update();
  blob.constrain();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    curs.up();
    console.log("UP");
  }
  if (keyCode === DOWN_ARROW) {
    curs.down();
    console.log("DOWN");
  }
  if (keyCode === LEFT_ARROW) {
    curs.left();
    console.log("LEFT");
  }
  if (keyCode === RIGHT_ARROW) {
    curs.right();
    console.log("RIGHT");
  }
  if (key == ' ') {
    blob.stop();
    console.log("STOP");
  }
}
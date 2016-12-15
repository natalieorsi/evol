// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/JXuxYMGe4KI

var blob;
var food = [];
var zoom = 1;
var curs;
var max_width = 10000;
var max_height = 10000;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  blob = new Blob(0, 0, 64);
  curs = new CursorObj(0,0);
  for (var i = 0; i < 50; i++) {
    var x = random(-width,width);
    var y = random(-height,height);
    food[i] = new Food(x, y, 30);
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

  if ((frameCount % 10 == 0) && (food.length < 60)) {
    curr_x = blob.pos.x;
    curr_y = blob.pos.y;
    var x = random(-max_width,max_width);
    var y = random(-max_height,max_height);
    food.push(new Food(x, y, blob.r/4));
  }

  if ((frameCount % 20 == 0) && (curs.speed > 10)) {
    curs.speed -= random(-2,2);
  }

  translate(width/2, height/2);
  var newzoom = 64 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);

  for (var i = food.length-1; i >=0; i--) {
    food[i].show();
    if (blob.eats(food[i])) {
      food.splice(i, 1);
    }
  }
  blob.newvel = createVector(curs.pos.x/2, curs.pos.y/2);
  blob.show();
  blob.update();

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
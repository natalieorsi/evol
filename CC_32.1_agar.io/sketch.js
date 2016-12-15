// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/JXuxYMGe4KI

var blob;
var food = [];
var zoom = 1;
var curs;

function setup() {
  createCanvas(1200, 600);
  blob = new Blob(0, 0, 64);
  curs = new CursorObj(0,0);
  for (var i = 0; i < 50; i++) {
    var x = random(-width,width);
    var y = random(-height,height);
    food[i] = new Food(x, y, 30);
  }
}

function draw() {
  background(0);

  if ((frameCount % 100 == 0) && (food.length < 50)) {
    curr_x = blob.pos.x;
    curr_y = blob.pos.y;
    var x = random(-20*curr_x,20*curr_x);
    var y = random(-20*curr_y,20*curr_y);
    food.push(new Food(x, y, blob.r/4));
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
}
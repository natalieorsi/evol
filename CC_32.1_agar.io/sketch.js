// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/JXuxYMGe4KI

var blob;

var food = [];
var zoom = 1;

function setup() {
  createCanvas(600, 600);
  blob = new Blob(0, 0, 64);
  for (var i = 0; i < 200; i++) {
    var x = random(-width,width);
    var y = random(-height,height);
    food[i] = new Food(x, y, 16);
  }
}

function draw() {
  background(0);

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


  blob.show();
  blob.update();

}

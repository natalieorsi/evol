//Created and maintained by Natalie Orsi at http://natalieorsi.net

function Surroundings() {
  
  
  this.show = function() {
  var limits = new Rect(-max_width,-max_height,max_width,-max_height,max_width,max_height,-max_width,max_height);
  limits.show();
  //borders
  ellipse(-max_width,max_height,blob.r,blob.r);
  ellipse(max_width,max_height,blob.r,blob.r);
  ellipse(-max_width,-max_height,blob.r,blob.r);
  ellipse(max_width,-max_height,blob.r,blob.r);
  //+y axis points "down" relative to start
  //-y axis points "up" relative to start
  //-x axis points "left" relative to start, etc.

  }

}

function Rect(point1x,point1y,point2x,point2y,point3x,point3y,point4x,point4y) {
  this.p1x = point1x;
  this.p1y = point1y;
  this.p2x = point2x;
  this.p2y = point2y;
  this.p3x = point3x;
  this.p3y = point3y;
  this.p4x = point4x;
  this.p4y = point4y;

  this.show = function() {
    fill(255);
    // Draw gray boundary
    stroke(153);
    //Lines will be drawn clockwise!
    line(this.p1x, this.p1y, this.p2x, this.p2y);
    line(this.p2x, this.p2y, this.p3x, this.p3y);
    line(this.p3x, this.p3y, this.p4x, this.p4y);
    line(this.p4x, this.p4y, this.p1x, this.p1y);
  }

}


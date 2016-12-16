function Leaf(x, y, leaf_len) {
	this.x = x;
	this.y = y;
	this.length = leaf_len;
  
  this.show = function() {
  	ellipse(this.x, this.y, this.length, 1.5*this.length);
  	//Default ellipse mode has the center of the ellipse at this.x, this.y
  	//To draw a line through the leaf we must run a from one vertex to the other
  	//If there were no tilt, we would want the line to start at (this.x, this.y+(1.5*this.length)/2)
  	//(Recall that +y is down, -y is up)
  	//We would then want this line to end at (this.x, this.y-(1.5*this.length)/2)
  	line_start = this.y + (1.5 * this. length)/2;
  	line_end = this.y - (1.5 * this. length)/2;
  	line(this.x, line_start, this.x, line_end);

  }

}


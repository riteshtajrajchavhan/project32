class Box2 {
  constructor(x, y,height) {
    var options = {
        isStatic:false
    }
    this.body = Bodies.rectangle(x, y, 40, height, options);
    this.width = 40;
    this.height = height;
   
   
   
    World.add(world, this.body);
  }
 
  score(){
    if(this.Visiblity<0 && this.Visiblity>-1000){
      score++
    }
  };
 
 
  display(color, border){
    var pos =this.body.position;
    
    push();
    if (this.body.speed < 3) {
      rectMode(CENTER);
      translate(pos.x, pos.y);
     
      fill(color);
      stroke(border);
      strokeWeight(4);
      rect(0, 0, this.width, this.height);
      pop();
  } else {
      push();
      World.remove(world, this.body);
      this.visibility = this.visibility - 1;
      tint(255, this.visibility);
     
  }
    pop();
  }

 


};

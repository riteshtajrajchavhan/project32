class Box {
  constructor(x, y,height) {
    var options = {
        isStatic:false
      
    }
   
    this.Visibility = 255;
    this.body = Bodies.rectangle(x, y, 40, height, options);
    this.width = 40;
    this.height = height;
   
   
   
    World.add(world, this.body);
  }
 
  
 
 
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
      this.Visibility = this.Visibility - 5;
      tint(255, this.Visibility);
      pop();
  }
    pop();
  }

  score(){
    if(this.Visibility<0 && this.Visibility >-105){
     
       score++;
      }
 }



};

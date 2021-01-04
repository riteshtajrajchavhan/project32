const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var score = 0;
var backgroundImg;
var bg = "bg.png"



function preload() {
    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(750,height,1500,40)
    ground2 = new Ground(710,555,300,20)
    
    
   
    
    stone= new Stone(220,450,90);
    sling = new Chain(stone.body,{x:240,y:440});
   
    log1 = new Box(600, 530, 50, 50);
   
  
    log2 = new Box(650, 530, 50, 50);
   

    log3 = new Box(700, 530, 50, 50);
   

    log4 = new Box(750, 530, 50, 50);
   

    log5 = new Box(800, 530, 50, 50);
   

    log6 = new Box(625, 480, 50, 50);
  

    log7 = new Box(675, 480, 50, 50);
   

    log8 = new Box(725, 480, 50, 50);
  

    log9 = new Box(775, 480, 50, 50);
   

    log10 = new Box(650, 430, 50, 50);
  

    log11 = new Box(700, 430, 50, 50);
  

    log12 = new Box(750, 430, 50, 50);
   

    log13 = new Box(675, 380, 50, 50);
   

    log14 = new Box(725, 380, 50, 50);
   

    log15 = new Box(700, 330, 50, 50);
   

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
       }
   
    Engine.update(engine);
   
    getBackgroundImage();

    ground.display();

ground2.display();

stone.display();
sling.display();
log1.display("red", "pink");
log1.score();

log2.display("red", "pink");
log2.score();

log3.display("red", "pink");
log3.score();

log4.display("red", "pink");
log4.score();

log5.display("red", "pink");
log5.score();

log6.display("indigo", "pink");
log6.score();

log7.display("indigo", "pink");
log7.score();

log8.display("indigo", "pink");
log8.score();

log9.display("indigo", "pink");
log9.score();

log10.display("green", "pink");
log10.score();

log11.display("green", "pink");
log11.score();

log12.display("green", "pink");
log12.score();

log13.display("yellow", "pink");
log13.score();

log14.display("yellow", "pink");
log14.score();

log15.display("white", "pink");
log15.score();












  textSize(40);
  fill("orange");
  text("PRESS SPACE FOR A SECOND CHANCE !!",240,50)

  textSize(30);
  fill("orange");
  text("Score :"+ score, width-300, 50);


}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   
    sling.fly();
    
}


function keyPressed() {
    if (keyCode === 32) {
        sling.attack(stone.body);
    }
  }


  async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
var datetime =  responseJSON.datetime;
var hour = datetime.slice(11,13);
if(hour>=0600 && hour<=1900){
    bg="bg.png"
}else{
    bg="bg2.png"
}
backgroundImg=loadImage(bg);



console.log(backgroundImg);

}






   



    



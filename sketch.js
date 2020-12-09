
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  //Create the Bodies Here.
 
    bob1 = new BobClass(320,350,30);
    bob2 = new BobClass(380,350,30);
    bob3 = new BobClass(440,350,30);
    bob4 = new BobClass(500,350,30);
    bob5 = new BobClass(560,350,30);
    
    stand=new StandClass(width/2,50,400,40);
    joint=new JoinClass(bob1.body,{x:320,y:70});
    joint2=new JoinClass(bob2.body,{x:380,y:70});
    joint3=new JoinClass(bob3.body,{x:440,y:70});
    joint4=new JoinClass(bob4.body,{x:500,y:70});
    joint5=new JoinClass(bob5.body,{x:560,y:70});
}


function draw() {
  background(100,250,00);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  stand.display();
  joint.display();
  joint2.display();
  joint3.display();
  joint4.display();
  joint5.display();
 
}

function keyPressed(){

if(keyCode === LEFT_ARROW){
  
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:0});
    
}

if(keyCode === RIGHT_ARROW){
  
  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:20,y:0});
      
  }
  
}



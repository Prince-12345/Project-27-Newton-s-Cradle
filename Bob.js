class BobClass{

constructor(x,y,r){
      
var options = {
  'isStatic': false,
  'restitution':0.8,
  'density':0.1,
  'friction':1
 }
this.body=Bodies.circle(x,y,r,options);
this.r=r;
World.add(world,this.body);

}
  
display(){
var pos=this.body.position;
var angle=this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
ellipseMode(RADIUS);
fill(200,22,100);
ellipse(0,0, this.r, this.r);
pop();
}

}
class JoinClass{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
         stiffness: 0.07,
          length: 300
      }
      this.join = Constraint.create(options);
      World.add(world, this.join);
      this.pointB=pointB;
  
  }
     
  display(){

          var pointA = this.join.bodyA.position;
          var pointB = this.pointB;
          strokeWeight(2);
          stroke("blue");
          line(pointA.x, pointA.y-30, pointB.x, pointB.y);

  }
}
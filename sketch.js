
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var options={
        isStatic:true
	}
	bar=Bodies.rectangle(400,100,400,40,options)
	World.add(world,bar)
	
	bob1=new Bob(560,600,40)
	bob2=new Bob(480,600,40)
	bob3=new Bob(400,600,40)
	bob4=new Bob(320,600,40)
	bob5=new Bob(240,600,40)
	/* rope1=new Rope(this.bar,bob1.body)
	rope2=new Rope(this.bar,bob2.body)
	rope3=new Rope(this.bar,bob3.body)
	rope4=new Rope(this.bar,bob4.body)
        rope5=new Rope(this.bar,bob5.body) */


        var options={
                bodyA:this.bar,
                bodyB:bob1.body,
            }
          rope1=Constraint.create(options) 
          World.add(world,rope1);
        var options={
                bodyA:this.bar,
                bodyB:bob2.body,
            }
          rope2=Constraint.create(options) 
          World.add(world,rope2)
        var options={
                bodyA:this.bar,
                bodyB:bob3.body,
            }
          rope3=Constraint.create(options) 
          World.add(world,rope3);
        var options={
                bodyA:this.bar,
                bodyB:bob4.body,
            }
          rope4=Constraint.create(options) 
          World.add(world,rope4)
        var options={
                bodyA:this.bar,
                bodyB:bob5.body,
            }
          rope5=Constraint.create(options) 
          World.add(world,rope5)

	
	Engine.run(engine);
  
}


function draw() {
   background(0);
   rectMode(CENTER);
   rect(bar.position.x,bar.position.y,600,40)
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();

  /*  rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display(); */

   strokeWeight(4)
   stroke("red")
   line(this.bar.position.x+160,this.bar.position.y,bob1.body.position.x,bob1.body.position.y)
   line(this.bar.position.x+80,this.bar.position.y,bob2.body.position.x,bob2.body.position.y)
   line(this.bar.position.x,this.bar.position.y,bob3.body.position.x,bob3.body.position.y)
   line(this.bar.position.x-80,this.bar.position.y,bob4.body.position.x,bob4.body.position.y)
   line(this.bar.position.x-160,this.bar.position.y,bob5.body.position.x,bob5.body.position.y)
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:50,y:-45})
  }
}



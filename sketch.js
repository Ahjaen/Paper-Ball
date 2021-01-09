
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	box = new Box(600,640,200,10);
	boxR = new Box(705,595,10,100);
	boxL = new Box(495,595,10,100);

	paper = new Paper(50,645,35);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x, ground.position.y, width, 10);

  box.display();
  boxR.display();
  boxL.display();

  paper.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position,{x:50,y:-50});
	}
}




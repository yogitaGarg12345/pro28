
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(650,680,1300,20)

  
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  ground.display()
  
  drawSprites();
 
}




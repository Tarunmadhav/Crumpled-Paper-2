
var paper,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,100,70);
	//World.add(world, paper);
	/*box = new Dustbin(600,400,10,50);
	//World.add(world,box);
	box2 = new Dustbin(675,420,150,10);
	//World.add(world,box2);
	box3 = new Dustbin(750,400,10,50);
	//World.add(world,box3);*/
	box1=new Box(400,400,70,100);
	//Create a Ground
	fill("green")
	ground = Bodies.rectangle(400, 480, 800, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background("#1998e6");
  paper.display();
  /*box.display();
  box2.display();
  box3.display();*/
  box1.display();
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-85})
	}
}


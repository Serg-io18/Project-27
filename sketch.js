
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof
var bob1, bob2, bob3, bob4;
var rope1,rope2,rope3,rope4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof = new Roof(400,100,650,50);
	bob1 = new Bob(200,600,50);
	bob2 = new Bob(400,600,50);
	bob3 = new Bob(600,600,50);
	bob4 = new Bob(650,600,50);
	rope1 = new Rope(bob1.body,roof.body,0,0);
	rope2 = new Rope(bob2.body,roof.body,-200,0);
	rope3 = new Rope(bob3.body,roof.body,200,0);
	rope4 = new Rope(bob4.body,roof.body,400,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob3.display();
	bob4.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	
  drawSprites();
 
}



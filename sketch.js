
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1,rect2,rect3;
var ground,paper;
var world;
//function preload()
//{
	
//}

function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  rect1=createSprite(770, 420, 15, 100);
	rect1.shapeColor="white";
	rect1.debug=false;

	rect2=createSprite(970, 420, 15, 100);
	rect2.shapeColor="white";
	rect2.debug=false;

	rect3=createSprite(870, 467, 200, 15);
	rect3.shapeColor="white";
	rect3.debug=false;

    Paper = new Paper(70,390,50,50);
    Ground = new Ground(600,480,1200,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  Paper.display();
  Ground.display();
  
  drawSprites();
 
}

  function keyPressed() {
	  if (keycode === UP_ARROW) {

		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});
	  }
  }



 



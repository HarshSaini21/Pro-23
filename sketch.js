var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG);
	package.scale=0.2;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG);
	helicopter.scale=0.6;

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleft=createSprite(boxPosition, boxY, 20,100);
 	boxleft.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleft=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleft.shapeColor = color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.update(engine);

  
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  package.x = packageBody.position.x 
  package.y = packageBody.position.y 

  


  drawSprites();
}

function keyPressed(){

	
	if(keyCode === RIGHT_ARROW){
		helicopter.x = helicopter.x+20;
		Matter.Body.translate(packageBody, {x:20, y:0})
	}

	if(keyCode === LEFT_ARROW){
		helicopter.x = helicopter.x-20;
		Matter.Body.translate(packageBody, {x:-20, y:0})
	}

	if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(packageBody, false);
	}
	
}


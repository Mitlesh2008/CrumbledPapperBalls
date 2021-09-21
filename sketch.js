
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var upperground;
var left;
var right;

function preload()
{
	
}

function setup() {
	createCanvas(1200,500);

 engine = Engine.create();
 world = engine.world;

 ground = new Ground(width/2,490,width,20);
 left = new Ground(800,420,10,120);
 right = new Ground(600,420,10,120);
 upperground = new Ground(width/2,10,width,20);

 var ball_options = {

 isStatic: false,
 restitution: 0.3,
 friction: 0,
 density:1.2

 }	

 ball = Bodies.circle(100,100,10,ball_options)
 World.add(world,ball);

 Engine.run(engine);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);

 ellipse(ball.position.x,ball.position.y,20);

 left.display();
 right.display();
 ground.display();
 upperground.display();
 
  drawSprites();

}

 function keyPressed() {

 if (keyCode === UP_ARROW){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:-4});
  }
 }


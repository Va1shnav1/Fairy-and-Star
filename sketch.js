var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
	//fairyVoice.play();
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	fairy = createSprite(230, 520, 30, 30);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;


	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	star = createSprite(starBody.position.x,starBody.position.y, 20, 20);
	star.addImage(starImg);
	star.scale = 0.2;

	
}


function draw() {
  background(bgImg);
  Engine.update(engine);
  
   //if(star.y>470 && starBody.position.y>470 ){
	if(star.isTouching(fairy)){
	Matter.Body.setStatic(starBody, true);
	}
	star.x=starBody.position.x;
	star.y=starBody.position.y;
  drawSprites();

}

function keyPressed() {
	if(keyCode===RIGHT_ARROW){
		fairy.velocityX=2;
	}
	if(keyCode===LEFT_ARROW){
		fairy.velocityX=-2;
	}
	if(keyCode===DOWN_ARROW){
		Matter.Body.setStatic(starBody, false);
	}
	
}

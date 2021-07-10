var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyImg,fairy_standing;
var joySound;

const Engine = Matter.Engine;
const World = Matter.World;
 const Boy = Matter.Body;
 const Bodies=Matter.Bodies;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");    
	//load animation for fairy here	

	fairy.addAnimation("fairy_standing", fairyImg)

	joySound = loadSound("sound/JoyMusic.mp3");
}
	
function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	joySound = loadSound("sound/JoyMusic.mp3");
	//create fairy sprite and add animation for fairy

	fairy = createSprite(100,300,40,40);
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}

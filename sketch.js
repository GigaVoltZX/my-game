var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;
var bulletsImg;
var heart_1,heart_2,heart_3;
var heart_1Img,heart_2Img,heart_3Img;
var loseSound;
var winSound;
var explosionSound;

var zombieGroup,bulletGroup;

var score=0,bullets=70,life=3;
var gamestate = fight;
function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg= loadImage("assets/zombie.png");
  bgImg = loadImage("assets/bg.jpeg")
  heart_1Img=loadImage("assets/heart_1.png");
  heart_2Img=loadImage("assets/heart_2.png");
  heart_3Img=loadImage("assets/heart_3.png");
  loseSound=loadSound("assets/lose.mp3");
  winSound=loadSound("assets/win.mp3");
  explosionSound=loadSound("assets/explosion.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300);

 heart_3=createSprite(displayWidth-150,40,20,20);
  heart_3.addImage(heart_3Img);
    heart_3.scale = 0.4

    heart_2=createSprite(displayWidth-150,40,20,20);
    heart_2.addImage(heart_3Img);
      heart_2.scale = 0.4
          heart_2.visible=false;

      heart_1=createSprite(displayWidth-150,40,20,20);
      heart_1.addImage(heart_3Img);
        heart_1.scale = 0.4
        heart_1.visible=false;

  //adding the background image

  zombieGroup=new Group();

  bulletGroup=new Group










}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-10
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+10
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-10
 }
 if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+10
 }
//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){

  bullets=createSprite(windowWidth-1150,player.y-30,20,10);
  bullets.velocityX=50
  bulletGroup.add(bullets);
  
  player.addImage(shooter_shooting)
   
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)

}


spawnZombies();
drawSprites();

}


function spawnZombies(){
if(frameCount%50==0){
 
 var rand=random(displayHeight-400,100);
 
  zombie = createSprite(random(500,1100),random(100,500),50,50);
  zombie.addImage(zombieImg);
  zombie.scale = 0.2
  zombie.debug = true
  zombie.setCollider("rectangle",0,0,300,300);
  zombie.velocityX=-3;
 
zombie.lifetime=400;
zombieGroup.add(zombie);


if(zombie)

}



  
}

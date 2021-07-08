
var monkey , monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var survivalTime = 0;


var ground, ground2, invisibleGround;

function preload(){
 
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(100,350, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.10;
  ground = createSprite(400,400,375,20);
  ground.velocityX = -7;
  ground.x = ground.width/2;
  ground2 = createSprite(300,400,300,20);
  invisibleGround = createSprite(100,400,400,20);
  invisibleGround.visible = false;
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("lightBlue");
  createBananas();
  createObstacles();
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  if(keyDown("space") && monkey.y >= 340){
    monkey.velocityY = -20;
  }
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime, 100, 50);
 
  monkey. velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(invisibleGround);
  
  console.log(frameCount);
  
  drawSprites();
}

function createBananas(){
  if(frameCount% 80 === 0){
  banana = createSprite(400,100,10,10);
  banana.y = Math.round(random(120,200))
  banana.addImage(bananaImage);
  banana.velocityX = -7;
  banana.scale = 0.10;
    
  banana.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;
  banana.lifetime = 200;
  foodGroup.add(banana);
  }
  
}

function createObstacles(){
  if(frameCount% 300 === 0){
    obstacle = createSprite(400,350,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -7;
    obstacle.scale = 0.25;
    obstacleGroup.add(obstacle);
  }
}



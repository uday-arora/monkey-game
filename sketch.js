
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,10 , 10)
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.2 ;
  obstacleGroup = createGroup () ;
  FoodGroup = createGroup () ;
  ground=createSprite(400,380,900,10);

  
}


function draw() {
  background ("skyblue");
  text("Survival Time" + score , 300 , 20)
  score=Math.ceil(frameCount/frameRate())
  if(keyDown("space") ) { 
  monkey.velocityY = -12; 
  } 
  monkey.velocityY = monkey.velocityY + 0.8; 
  monkey.collide(ground);
  
  if(obstacleGroup.isTouching(monkey)){  
    obstacleGroup.setVelocityXEach(0); 
  FoodGroup.setVelocityXEach(0); }
  drawSprites();

  spawnBananas();
  spawnObstacles();
}

function spawnBananas(){
  if (frameCount % 80 === 0) { 
  banana = createSprite(600,250,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.12 ;
    banana.velocityX = -5 ;
    banana.y = random(120,200);
    FoodGroup.add(banana) ;
  }
}

function spawnObstacles(){
  if (frameCount % 80 === 0) { 
  obstacle = createSprite(600,353,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.12 ;
    obstacle.velocityX = -5 ;
        obstacleGroup.add(obstacle) ;
  }
}



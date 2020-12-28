var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(300, 100, 100, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 2;
  movingRect = createSprite(300,350,70,60);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -2;
}

function draw() {
  background(0);  
  // movingRect.x = mouseX;
  // movingRect.y = mouseY;

  // if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
  //   fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
  //   movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
  //   fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
  //   movingRect.shapeColor = "red";
  //   fixedRect.shapeColor = "red";
  // }else{
  //   movingRect.shapeColor = "green";
  //   fixedRect.shapeColor = "green";
  // }

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
      movingRect.velocityX = (-1)* movingRect.velocityX;
      fixedRect.velocityX = -1 * fixedRect.velocityX;
    }

  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
      movingRect.velocityY = -1 * movingRect.velocityY;
      fixedRect.velocityY = -1 * fixedRect.velocityY;
    }
  drawSprites();
}
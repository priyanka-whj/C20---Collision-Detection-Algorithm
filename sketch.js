var fixedRect;
var movingRect;
var fixedRect1;

function setup() 
{
  createCanvas(1200,400);

  fixedRect = createSprite(600, 200, 100, 40);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(850, 200, 80, 30);
  movingRect.shapeColor = "green";

  fixedRect1 = createSprite(400, 150, 60, 100);
  fixedRect1.shapeColor = "green";
}

function draw() 
{
  background("white");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, fixedRect))
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else if(isTouching(movingRect, fixedRect1))
      {
        fixedRect1.shapeColor = "red";
        movingRect.shapeColor = "red";
      }
      else
      {
        fixedRect.shapeColor = "green";
        movingRect.shapeColor = "green";
        fixedRect1.shapeColor = "green";
      }

  drawSprites();
}









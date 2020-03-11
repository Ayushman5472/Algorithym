var fixedRect
var movingRect
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(100,100,60,60);
  fixedRect.shapeColor="cyan"
  movingRect.shapeColor="cyan"
}

function draw() {
  background(255,255,255);  
  drawSprites();
movingRect.x=mouseX
movingRect.y=mouseY
if(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
 movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
 fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2&&
 movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"
}
else{
  fixedRect.shapeColor="cyan"
  movingRect.shapeColor="cyan"
}
}
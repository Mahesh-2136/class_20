



function setup() {
  createCanvas(800,400);
 rect1 = createSprite(400, 200, 50, 50);
 rect2 =createSprite(100,200,50,50);
 rect1.velocityX=-3
 rect2.velocityX=4
// rect2.velocityY=2
}

function draw() {

  background("yellow"); 
  
  coll();
  changecolo();
  drawSprites();
}
function changecolo(){
  if(rect1.x - rect2.x <=rect1.width/2 + rect2.width/2 && 
    rect2.x - rect1.x <=rect1.width/2 + rect2.width/2 &&
    rect1.y - rect2.y <=rect1.height/2 + rect2.height/2 && 
    rect2.y - rect1.y <=rect1.height/2 + rect2.height/2 ){
  rect1.shapeColor="red"
  rect2.shapeColor="red"
  }else{
    rect1.shapeColor="black"
    rect2.shapeColor="black"
  }
}
function coll(){
  if(rect1.x - rect2.x <=rect1.width/2 + rect2.width/2 && 
    rect2.x - rect1.x <=rect1.width/2 + rect2.width/2 &&
    rect1.y - rect2.y <=rect1.height/2 + rect2.height/2 && 
    rect2.y - rect1.y <=rect1.height/2 + rect2.height/2 ){
      rect2.velocityX=-(rect2.velocityX)
      rect1.velocityX=-(rect1.velocityX)
    }
}

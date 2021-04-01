
function preload() {
    bgImage = loadImage("images/garden.png");
    catImage = loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png");
    mouseImage = loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600);
    cat.addAnimation("catSleeping",catImage);
    cat.scale = 0.3;

    mouse = createSprite(200,600);
    mouse.addAnimation("mouseRunning",mouseImage);
    mouse.scale = 0.2;

}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  if(keyCode===LEFT_ARROW){
     cat.velocityX = -2;
  }


}

var bg,bgimg
var player,playerimg,bullet
var enmy,enmyimg
var count=0
function preload() {
   bgimg=loadImage("forst.jpg")
playerimg=loadImage("manarmy.png")
enmyimg=loadImage("fox1.png")
}
function setup() {
  createCanvas(1200,800);
  player=createSprite(200,700)
  player.addImage(playerimg)
  bullet=createSprite(200,620,10,5)
  bullet.shapeColor="black"
 enmy=  createSprite(1200,700)
 enmy.addImage(enmyimg)
 enmy.velocityX=-7
 enmy.visible=true
}

function draw() {
  background(bgimg); 
if(keyDown("space")){
bullet.velocityX=15
}
if (bullet.x>1100){
  bullet.velocityX=0
  bullet.x=200
  bullet.y=620
}

if (bullet.isTouching(enmy)){
enmy.visible=false
count=count+1
}
if (enmy.x<0||enmy.visible===false){
  enmy.visible=true
  enmy.x=1200
  enmy.velocityX=-7
}
  drawSprites();
  textSize(35)
  fill ("white")
  text("score:-"+ count,200,100)
}

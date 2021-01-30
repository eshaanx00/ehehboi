const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var soundp;
var drops=[]
var score=0
var game="home"
var maxDrops=100
var thu,thug
var thu1,thu2,thu3,thu4
function preload(){
    walk=loadImage("/Walking Frame/walking_1.png");
    walk2=loadImage("walk2.png")
    thu1=loadImage("thunderbolt/1.png")
    thu2=loadImage("thunderbolt/4.png")
    thu3=loadImage("thunderbolt/3.png")
    thu4=loadImage("thunderbolt/2.png")
    burnt=loadImage("burn.png");
    mine=loadSound("minecraft.mp3");
    soundp=loadSound("thunder2.mp3")
    rain=loadSound("rain-03.mp3")
}

function setup(){
    canvas=createCanvas(displayWidth,displayHeight)
   
    engine = Engine.create();
    world = engine.world;
   boy=createSprite(displayWidth/2,displayHeight-200);
boy.addImage(walk);
boy.scale=0.6

 /*  for(var i=0;i<maxDrops;i++){
    drops.push(new drop(random(0,1000),random(0,100)))
   
    
}*/
thug=new Group()
}

function draw(){
    
    background("black")
    if(game==="home"){

        fill("white");
        text("Score: "+score,displayWidth-50,20)
        textSize(33);
        boy.visible=false
        text("To start playing press space",displayWidth/2-205,displayHeight/2-100);
        text("The aim is to stay alive",displayWidth/2-180,displayHeight/2+40)
    }
    if(keyDown("space")){
        game="play"
    }
    
textSize(22)
if(game==="play"){
    
    if(frameCount%24===0){
        score+=1
    }
    fill("white")
    textSize(12)
    text("Score: "+score,displayWidth-50,20)
    boy.visible=true
if(boy.isTouching(thug)){
    
    game="end1"
}
if(keyDown("LEFT_ARROW")){
    boy.x-=6
    boy.addImage(walk2)
}
if(keyDown("RIGHT_ARROW")){
    boy.x+=6
    boy.addImage(walk)
}
if(frameCount%150===0){
    background("grey")
    thu=createSprite(random(0,1200),random(0,450))
    var rand = Math.round(random(1,4));
    var srand=Math.round(random(1,3));
    thu.setCollider("rectangle",0,0,140,600)
soundp.play()
switch(rand){
case 1:thu.addImage(thu1)
case 2:thu.addImage(thu4)
case 3:thu.addImage(thu3)
case 4:thu.addImage(thu2)
}
switch(srand){
case 1:soundp=loadSound("thunder.mp3")
case 2:soundp=loadSound("thunder2.mp3")
case 3:soundp=loadSound("thunder3.mp3")
}
thu.lifetime=10
thug.add(thu)
}
}
if(game==="end1"){
    mine.play();
    
game="end"

}
if(game==="end"){
    textSize(32)
    fill("white");
    if(keyDown("space")){
        game="play"
        
        boy.addImage(walk)
    }
    text("Score: "+score,displayWidth/2-84,displayHeight/2+43)
    text("To start playing press space",displayWidth/2-205,displayHeight/2-100);
    text("Dont worry your score continuous",displayWidth/2-215,displayHeight/2-50);
    text("You died",displayWidth/2-80,displayHeight/2);
    boy.addImage(burnt)
    
}

    
    Engine.update(engine);

    drawSprites()
   
    
}   
function thunder(){
    if(frameCount%150===0){
        thu=createSprite(random(0,1200),random(0,500))
        var rand = Math.round(random(1,4));
        var srand=Math.round(random(1,3));
       
soundp.play()
switch(rand){
    case 1:thu.addImage(thu1)
    case 2:thu.addImage(thu4)
    case 3:thu.addImage(thu3)
    case 4:thu.addImage(thu2)
}
switch(srand){
    case 1:soundp=loadSound("thunder.mp3")
    case 2:soundp=loadSound("thunder2.mp3")
    case 3:soundp=loadSound("thunder3.mp3")
}
thu.lifetime=10
thug.add(thu)
    }
}

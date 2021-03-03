
var theif, theifImg, theifImg2;
var shopkeep, shopkeepImg;
var shop, shopImg;
var insideshop, insideshopImg;
var start, startImg;
var gameState="intro";
var stand1, stand1Img, stand2, stand2Img;
var stand3, stand3Img, stand4, stand4Img;
var entry, entryImg, exit, exitImg;
var stand5, stand5Img, stand6, stand6Img;
var stand7, stand7Img, billcount, billcountImg;
var item1, item2, item3, item4, item5, item6;

function preload(){
theifImg = loadImage("Images/theif.png");
theifImg2 = loadImage("Images/theif2.png");
shopkeepImg = loadImage("Images/shopkeeper.png");
shopImg = loadImage("Images/shop.jpg");
insideshopImg = loadImage("Images/inside shop.jpg");
startImg = loadImage("Images/start.png");
stand1Img = loadImage("Images/stand3(1).jpeg");
stand2Img = loadImage("Images/stand3(2).jpeg");
stand3Img = loadImage("Images/frozen.png");
stand4Img = loadImage("Images/meat2.png");
stand5Img=loadImage("Images/vegs(1).png");
stand6Img = loadImage("Images/stand41.jpeg");
stand7Img = loadImage("Images/stand42.jpeg");
entryImg = loadImage("Images/entry.png");
exitImg = loadImage("Images/exit.png");
billcountImg = loadImage("Images/counter4.png");
}



function setup() {
  createCanvas(displayWidth-20,displayHeight-30);

  shopkeep = createSprite(displayWidth-250, displayHeight/2, 50, 50);
  shopkeep.addImage(shopkeepImg);
  shopkeep.scale = 0.2;

  theif = createSprite(20, displayHeight-80, 50, 50);
  theif.addImage(theifImg);
  theif.scale = 0.05;
 // theif.setAnimation(bounce);

  start = createSprite(displayWidth/2-50,displayHeight-200, 80, 40);
  start.addImage(startImg);
  start.scale = 0.2;

  stand1 = createSprite(200, displayHeight/2-50, 300, 100);
  stand1.addImage(stand1Img);
  stand1.scale=0.3;

  stand2 = createSprite(270, displayHeight/2+200, 300, 100);
  stand2.addImage(stand2Img);
  stand2.scale=0.4;

  stand3 = createSprite(displayWidth/2+100, displayHeight/2-50, 300, 100);
  stand3.addImage(stand7Img);
  stand3.scale=0.5;

  stand4 = createSprite(displayWidth/2+100, displayHeight/2+200, 300, 100);
  stand4.addImage(stand4Img);
  stand4.scale=1.1;

  stand5 = createSprite(250, 100, 300, 100);
  stand5.addImage(stand5Img);
  stand5.scale=1;

  stand6 = createSprite(displayWidth/2+100, 100, 300, 100);
  stand6.addImage(stand6Img);
  stand6.scale=0.7;

  //stand7 = createSprite(displayWidth/2+100, displayHeight/2-250, 300, 100);
 // stand7.addImage(stand7Img);
  //stand7.scale=0.3;

  entry = createSprite(100, displayHeight-50, 50, 50);
  entry.addImage(entryImg);
  entry.scale=0.2;

  exit = createSprite(displayWidth-100, 100, 50, 50);
  exit.addImage(exitImg);
  exit.scale=0.2;

  billcount = createSprite(displayWidth-100, displayHeight/2, 50, 150);
  billcount.addImage(billcountImg);
  billcount.scale=0.08;

  item1 = createSprite(10, 220, 10, 10);
  item2 = createSprite(10, 500, 10, 10);
  item3 = createSprite(10, 700, 10, 10);
  item4 = createSprite(800, 220, 10, 10);
  item5 = createSprite(800, 500, 10, 10);
  item6 = createSprite(800, 700, 10, 10);
  item1.shapeColor='red';
  item2.shapeColor='red';
  item3.shapeColor='red';
  item4.shapeColor='red';
  item5.shapeColor='red';
  item6.shapeColor='red';
}

function draw() {
  background(0);  

  if(gameState==="intro"){
    //image(shopImg,0,0, displayWidth-20, displayHeight-30);
    background(shopImg);
    
    shopkeep.visible=false;
    theif.visible=false;
    stand1.visible=false;
    stand2.visible=false;
    stand3.visible=false;
    stand4.visible=false;
    stand5.visible=false;
    stand6.visible=false;
   // stand7.visible=false;
   item1.visible=false;
   item2.visible=false;
   item3.visible=false;
   item4.visible=false;
   item5.visible=false;
   item6.visible=false;


    entry.visible=false;
    exit.visible=false;
    billcount.visible=false;

start.visible=true;
    if(mousePressedOver(start)) {
      gameState="level1";
    }
    drawSprites();
  }

  if(gameState==="level1"){
   // background(insideshopImg);

    //barriers();

   // var entry = createSprite(200, displayHeight-100, 50, 50);
    fill("black");
    textSize(30);
   // rect(200, displayHeight-100, 100, 50);
    text("ENTRY", 600, displayHeight-100);

    
   // rect(displayWidth-100, displayHeight-500, 100, 50);
    text("EXIT", displayWidth-100, 300);
    


    shopkeep.visible=true;
    theif.visible=true;
    start.visible=false;

    stand1.visible=true;
    stand2.visible=true;
    stand3.visible=true;
    stand4.visible=true;
    stand5.visible=true;
    stand6.visible=true;
   // stand7.visible=true;
   item1.visible=true;
   item2.visible=true;
   item3.visible=true;
   item4.visible=true;
   item5.visible=true;
   item6.visible=true;

    entry.visible=true;
    exit.visible=true;
    billcount.visible=true;

    if(keyDown(UP_ARROW)){
      theif.y = theif.y-3;
    }

    if(keyDown(DOWN_ARROW)){
      theif.y = theif.y+3;
    }

    if(keyDown(RIGHT_ARROW)){
      theif.x = theif.x+3;
    }

    if(keyDown(LEFT_ARROW)){
      theif.x = theif.x-3;
    }
    
    theif.bounceOff(stand1);
    theif.bounceOff(stand2);
    theif.bounceOff(stand3);
    theif.bounceOff(stand4);
    theif.bounceOff(stand5);
    theif.bounceOff(stand6);

    drawSprites();
  }

 //drawSprites(); 
}


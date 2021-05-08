var ground , groundImg;
var andy , andyImg;
var sideA , sideB ;
var CarIMG = new Array();
var Carpos = [50 , 150 , 250]
var c1 , c2 , c3;



function preload(){
  //pre-load images
andyImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
  
  groundImg = loadImage("path.png");
  
  CarIMG[0] = loadImage("car1.png");
  CarIMG[1] = loadImage("car2.png");
  CarIMG[2] = loadImage("car3.png");
  CarIMG[3] = loadImage("car4.png");
  CarIMG[4] = loadImage("car5.png");
  CarIMG[5] = loadImage("car6.png");
  

  
}

function setup(){
  createCanvas(300,400);

  //ground
  ground = createSprite(200,200,400,20);
  ground.addImage("ground",groundImg);
  ground.x = ground.width /2;
  ground.velocityY = 4;
  
  c1 = createSprite(600,-20,10,10);
  c1.velocityY = 4;
  c1.scale = 0.6;
  c2 = createSprite(600,-200,10,10);
  c2.velocityY = 4;
  c2.scale = 0.6;
  c3 = createSprite(600,-60,10,10);
  c3.velocityY = 4;
  c3.scale = 0.6;
  
  
  //player
  andy = createSprite(150,340,20,20);
  andy.addAnimation("running",andyImg);
  andy.scale = 0.5;
  //invisble sides
  sideA = createSprite(10,200,20,400);
  sideA.visible = false;
  sideB = createSprite(290,200,20,400);
  sideB.visible = false;
  
}

function randomCar(){
  
  
  var i = Math.floor(CarIMG.length*Math.random());
        if(c1.y > 460){
 c1.addImage("car1", CarIMG[i]);
 c1.x = 50;
 c1.y = Math.floor((Math.random() * 300))*(-1);
 c1.velocityY = Math.floor((Math.random() * 8)+1);
        }else if(c2.y > 460){
      i = Math.floor(CarIMG.length*Math.random())
 c2.addImage("car2", CarIMG[i]);
 c2.x = 150;
 c2.y = Math.floor((Math.random() * 500))*(-1);
 c2.velocityY = Math.floor((Math.random() * 8)+1);
        }else if(c3.y > 460){
      i = Math.floor(CarIMG.length*Math.random())
 c3.addImage("car2", CarIMG[i]);
 c3.x = 250;
 c3.y = Math.floor((Math.random() * 400))*(-1);
 c3.velocityY = Math.floor((Math.random() * 8)+1);
        }
  
}


function draw() {
  background(0);

  if(frameCount%100 ===0){
    ground.velocityY = ground.velocityY+1;
    c1.velocityY = c1.velocityY + 1;
    c2.velocityY = c2.velocityY + 1;
    c3.velocityY = c3.velocityY + 1;
    
  }
  
  
    //limiting the cursor
  if(mouseX > 20 && mouseX < 280){
    if(mouseX > 10 && mouseX < 99){
      andy.x = 50;
    }else if(mouseX > 100 && mouseX < 200){
      andy.x = 150;
    }else if(mouseX > 200 && mouseX < 300){
      andy.x = 250;
    }
    
    
    //andy.x = mouseX;
  }
  console.log(andy.x)
  
const z = setInterval(randomCar, 3000);
  
    //moving ground
    if (ground.y > 300) {
    ground.y = ground.width / 2 +25;
    }
  
    andy.collide(sideA);
    andy.collide(sideB);


  if(andy.isTouching(c1) || andy.isTouching(c2) || andy.isTouching(c3)){
     window.navigator.vibrate(50);
     }


  drawSprites();
}


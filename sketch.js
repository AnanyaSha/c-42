var bg , issimg , s1 , s2 , s3 , s4 ;
var spacecraft , iss;
var hasDocked = false;

function preload(){

bg=loadImage("spacebg.jpg");
issimg= loadImage("iss.png");
s1=loadImage("spacecraft1.png");
s2=loadImage("spacecraft2.png");
s3=loadImage("spacecraft3.png");
s4=loadImage("spacecraft4.png");


}

function setup() {
  createCanvas(600,350);
 spacecraft= createSprite (285 , 240); 
 spacecraft.addImage(s1);
 spacecraft.scale=0.15;

 iss= createSprite (330 , 130); 
 iss.addImage(issimg);
 iss.scale=0.45;
 
}

function draw() {
  background(bg);  

if(!hasDocked){
   spacecraft.x = spacecraft.x + random(-1,1);


   if (keyDown("UP_ARROW")){
     spacecraft.y = spacecraft.y-2;
   }
   if (keyDown("DOWN_ARROW")){
      spacecraft.addImage(s1);

  }
  if (keyDown("RIGHT_ARROW")){
    spacecraft.addImage(s2);
    spacecraft.x = spacecraft.x+1;
  }
  if (keyDown("LEFT_ARROW")){
    spacecraft.addImage(s3);
    spacecraft.x = spacecraft.x-1;
  }
}

if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){
hasDocked=true;
textSize(25);
fill("YELLOW");
text("Docking Successful!",200,300)

}

  drawSprites();
}

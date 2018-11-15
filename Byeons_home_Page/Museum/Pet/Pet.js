var PetX;
var PetY;
//var bob;


var PetEyeX;
var PetEyeY;

var PetRad;

var R,G,B,A;

var eyeX_dist,eyeY_dist;


function setup() {
 //bob= loadImage('data/johnny_automatic_bowl_of_rice.png');
  createCanvas(1000, 1000);
  PetX=0;
  PetY=0;
  PetRad=30;
  eyeX_dist=10;
  eyeY_dist=5;
  
}

function draw() {
  //image(bob,mouseX,mouseY);
   background(1);
  if (mouseX-10<PetX&&PetX<mouseX+10&&mouseY-10<PetY&&PetY<mouseY+10) {

    if(PetRad<100){
    PetRad+=1;
    if(eyeX_dist<20){
    eyeX_dist+=5;
    eyeY_dist+=5;
    }
    }
    
    R=random(100,255);
  G=random(100,255);
  B=random(100,255);
  A=random(100,255);
  }

  if (PetX<mouseX) {

    PetX+=3;
    PetY+=random(0, 1);
    if (PetY<mouseY) {

      PetY+=3;
    } else {

      PetY-=3;
    }
  } else {

    PetX-=3;
    PetY+=random(0, 1);
    if (PetY<mouseY) {

      PetY+=3;
    } else {

      PetY-=3;
    }
  }
  
  fill(R,G,B,A);
  ellipse(PetX, PetY, PetRad, PetRad);
  fill(255,255,255);
   ellipse(PetX-eyeX_dist, PetY-eyeY_dist, 20, 20);
    ellipse(PetX+eyeX_dist, PetY-eyeY_dist, 20, 20);
     fill(1);
    ellipse(PetX-eyeX_dist, PetY-eyeY_dist, 5, 5);
    ellipse(PetX+eyeX_dist, PetY-eyeY_dist, 5, 5);
    
    fill(255,255,255);
    
      fill(150,100,250);
     ellipse(mouseX, mouseY, 30, 20);
      fill(255,255,255);
      ellipse(mouseX, mouseY-5, 30, 10);
  if(mouseIsPressed){
    
    if(PetRad>30){
    PetRad-=3;
    
    if(eyeX_dist>PetRad){
    eyeX_dist-=5;
    eyeY_dist-=5;
    }
    }
  }
  
  
}

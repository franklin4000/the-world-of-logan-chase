

var emotion = 0;
var energyY = 0;

function setup(){
  createCanvas (500,500);

}


function draw() {

  //Conditions
    if (emotion == 0) {
      background(0,0,80); //Calm Blue
    }

    else if (emotion == 1) {
      background(120,0,0); //Angry Red
    }
    
    else if (emotion == 2) {
      background(200,150,0) //Happy Yellow
    }
    
    else if (emotion == 3) {
      background(80,0,120); //Sad Purple 
    }


  //City Buildings
    fill(20);
    rect(50, 300, 80, 200);
    rect(180, 250, 100, 250);
    rect(330, 280, 120, 220);

  //Emotion Detector
    fill(255, 255, 255, 115);
    noStroke(0);
    ellipse(mouseX, mouseY, 60, 60);

  //Text
  fill(255);
  noStroke();
  textSize(28);
  textAlign(CENTER);

  //Text Display


  if (emotion == 0) {
    text('Calm' , width/2, 50); //Calm
  }

  else if (emotion == 1) {
    text('Angry' , width/2, 50); //Angry
  }

  else if (emotion == 2) {
    text('Happy' , width/2, 50); //Happy
  }

  else if (emotion == 3) {
    text('Sad' , width/2, 50); //Sad
  }

}


// Change emotion
function mousePressed() {
  emotion = emotion + 1;

  if (emotion > 3) {
    emotion = 0;
  }
}

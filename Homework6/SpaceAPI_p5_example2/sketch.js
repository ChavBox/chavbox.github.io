
// This P5 sketch gets data from the people in space API and then displays the number of people in space as colorful circles.

function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(230);
  noStroke();
  loadJSON("http://api.open-notify.org/astros.json", dataReceived);
}

function dataReceived(data){

  for (let i = 0; i < data.number; i++){
   fill(random(255), random(255), random(255));
   ellipse(random(width),random(height),150,150, 50);

  }


}

function draw() { 
  }
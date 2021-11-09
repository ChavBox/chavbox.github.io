class Craft {
  constructor(name){
    this.name = name;
    this.passList = [];

    this.addPass = function(newPerson){
      this.passList.push(newPerson);
    }
  }
}

var numPeople;
var crafts = [];
var w = window.innerWidth;
var h = window.innerHeight;
var craftLocation = [];

$.getJSON('./data/astros.json', function(data) {
    data['people'].forEach(function (d) {
      const ship = new Craft(d['craft']);
      ship.addPass(d['name'])
      if(crafts.length == 0){
        crafts.push(ship);
      }else{
        //Flag assumes the new ship is unique,
        //if the same ship if found within crafts,
        //flag is set to true, because the ship already
        //exists in crafts, so just add the person to the craft.
        var flag = false;
        for(let i = 0; i < crafts.length; i++){
          if(crafts[i].name == d['craft']){
            crafts[i].addPass(d['name']);
            flag = true;
            break;
          }
        }
        if(!flag){
          crafts.push(ship);
        }
      }
    });
});


//Not my code
function getRandomWithin(min, max) {
  return Math.random() * (max - min) + min;
}

function setup(){
  noLoop();
  createCanvas(w, h);
  fill('#321A43');
  circle(w/2, h/2, 800);
  fill('#F8F8FF');
  for(var i = 0; i < 3000; i++){
    var x = getRandomWithin(w/2-400, w/2+400);
    var yMin = h/2-Math.sqrt(160000-(x-w/2)**2);
    var yMax = h/2+Math.sqrt(160000-(x-w/2)**2);
    var y = getRandomWithin(yMin+2, yMax-2);
    noStroke();
    size = getRandomWithin(1, 4);
    circle(x, y, size);
  }
}

function xCoordinate(xMain, dMain, dNew){
  var xMin = xMain - dMain/2;
  var xMax = xMain + dMain/2;
  var x = getRandomWithin(xMin+dNew, xMax-dNew);
  return x;
}

function yCoord(xMain, yMain, dMain, xCoord, dNew){
  var flag = false;
  while(!flag){
    var yMin = yMain-Math.sqrt((dMain/2)**2-(xCoord-xMain)**2);
    var yMax = yMain+Math.sqrt((dMain/2)**2-(xCoord-xMain)**2);
    var y = getRandomWithin(yMin, yMax);
    if(dist(xCoord, y, xMain, yMain) <= dMain/2-dNew/2){
      flag = true;
    }
  }
  return y;
}

function drawPeople(list, x, y, diameter){
  var newD = 20;
  fill(90,90,90);
  var coords = [];
  for (var i = 0; i < list.length; i++) {
    var xvar = xCoordinate(x, diameter, newD);
    var yvar = yCoord(x, y, diameter, xvar, newD);
    var point = {
      x: xvar,
      y: yvar
    };
    if(coords.length == 0){
      circle(xvar, yvar, newD);
      coords.push(point);
    }
    else{
      var flag = false;
      while(!flag){
        for (var j = 0; j < coords.length; j++) {
          var current = coords[j];
          if(dist(xvar, yvar, current.x, current.y) < 30){
            xvar = xCoordinate(x, diameter);
            yvar = yCoord(x, y, diameter, xvar, newD);
            break;
          }else if(j == coords.length -1){
            flag = true;
          }
        }
      }
      circle(xvar, yvar, newD);
      coords.push(point);
    }
  }
}


function draw(){
  var coords = [];
  fill(153,69,32);
  for (var i = 0; i < crafts.length; i++) {
    var diameter = 50*crafts[i].passList.length;
    var x = xCoordinate(w/2, 800, diameter);
    var y = yCoord(w/2, h/2, 800, x, diameter);
    var ship = {
      x:  x,
      y:  y,
      d: diameter
    };
    if(coords.length == 0){
      var temp = crafts[i].passList;
      circle(x, y, diameter);
      textSize(32);
      fill(0);
      text(crafts[i].name, x, y-diameter/2 + 30);
      coords.push(ship);
      drawPeople(temp, x, y, diameter);
      fill(153,69,32);
    }else{
      var passList = crafts[i].passList;
      var flag = false;

      while(!flag){
        for (var j = 0; j < coords.length; j++) {
          var current = coords[j];
          if(dist(x, y, current.x, current.y) < diameter/2+current.d/2){
            x = xCoordinate(w/2, 800, diameter);
            y = yCoord(w/2, h/2, 800, x, diameter);
            break;
          }else if(j == coords.length -1){
            flag = true;
          }
        }
      }

      circle(x, y, diameter);
      textSize(18);
      fill(0);
      var name = crafts[i].name
      text(name, x-name.length*5, y-diameter/2 + 30);
      coords.push(ship);
      drawPeople(passList, x, y, diameter);
      fill(153,69,32);
    }
  }
}

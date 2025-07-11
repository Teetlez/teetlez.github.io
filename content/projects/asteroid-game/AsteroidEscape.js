//sorry if the code is not very clean :/
void setup() {
  size(400, 400, P2D);
  textSize(20);
}
//starting pos of asteroids
var comX = [];
var comY = [];

//pos of healthpack
var HPX = [random(0, 400)];
var HPY = [random(0, -400)];

var starX = [];
var starY = [];

//base HP, lower it if you want a challenge
var HP = 300;

//don't touch, ya cheater!
var score = 0;


//pause if mouse is out of canvas
void mouseOut() {
  noLoop();
}
void mouseOver() {
  loop();
}


void draw() {
  //engine+assets
  var ship = {
    x: mouseX,
    y: mouseY,
    health: HP,
    speed: 5
  };
  //win (edit to raise the bar)
  if (score > 15) {
    textSize(20);
    score = "YOU WIN!!!";
  }


  var shipHealth = function(x) {
    fill(255, 0, 0);
    rect(56, 353, 300, 20);
    fill(13, 255, 0);
    rect(x, 353, ship.health, 20);
  }
  var comet = function() {
    for (var i = 0; i < 24; i++) {
      fill(166, 132, 76);
      comX.push(random(0, 400));
      comY.push(random(0, -400));
      ellipse(comX[i], comY[i], 20, 30);
      comY[i] += ship.speed;
      fill(0, 255, 106);
      if (comY[i] >= 400 && score <= 15) {
        comX[i] = random(0, 400);
        comY[i] = random(0, -400);
        score += 0.005;
      }
      if (
        comX[i] > ship.x - 20 &&
        comX[i] < ship.x + 20 &&
        comY[i] > ship.y - 25 &&
        comY[i] < ship.y + 30 &&
        score < 15
      ) {
        HP -= 5;
        shipHealth();
      } 
    }
  }
  var health = function() {
    for (var i = 0; i < HPX.length; i++) {
      fill(255, 255, 255);
      ellipse(HPX[i], HPY[i], 30, 30);
      fill(255, 0, 0);
      rect(HPX[i] - 15, HPY[i] - 5, 30, 10, 20);
      rect(HPX[i] - 5, HPY[i] - 15, 10, 30, 20);
      HPY[i] += 2;
      if (HPY[i] >= 400) {
        HPX[i] = random(0, 400);
        HPY[i] = random(-400, -800);
      }
      if (
        HPX[i] > ship.x - 30 &&
        HPX[i] < ship.x + 30 &&
        HPY[i] > ship.y - 30 &&
        HPY[i] < ship.y + 30
      ) {
        HP += 50;
        shipHealth();
        HPX[i] = random(0, 400);
        HPY[i] = random(-400, -800);
      }
    }
  }
  var shipFunction = function(m) {
    fill(255, 204, 0, m);
    triangle(
      ship.x,
      ship.y + random(50, 75),
      ship.x - 9,
      ship.y + 25,
      ship.x + 9,
      ship.y + 25
    );
    fill(255, 119, 0, m);
    triangle(
      ship.x,
      ship.y + random(35, 50),
      ship.x - 5,
      ship.y + 20,
      ship.x + 5,
      ship.y + 20
    );

    fill(255, 0, 0, m);
    triangle(
      ship.x,
      ship.y - 20,
      ship.x - 10,
      ship.y + 30,
      ship.x + 10,
      ship.y + 30
    );
    fill(0, 0, 0, m);
    rect(ship.x + 3, ship.y - 3, 4, 20);
    rect(ship.x + -8, ship.y - 3, 5, 20);
    fill(0, 255, 221, m);
    ellipse(ship.x - 0.5, ship.y - 2, 5, 10);
  }
  var onOff = 56;


  //death screen
  var death = function() {
    ship.x = -10;
    ship.y = -10;
    onOff = -10;
    fill(255, 25, 25);
    textSize(50);
    text("Game Over", 71, 200);
    textSize(25);
    text("right click to restart", 100, 250);
  }

  //motion blur
  noStroke();
  fill(4, 9, 56, 255 / 2);
  rect(-1, -1, width + 5, height + 5);

  for (var i = 0; i < 100; i++) {
    strokeWeight(5);
    stroke(255, 255, 255);
    starY.push(random(-200, 400));
    starX.push(random(0, 400));
    starY[i] += 0.25;
    point(starX[i], starY[i]);
    noStroke();
    if (starY[i] >= 410) {
      starY[i] = random(0, -400);
      starX[i] = random(0, 400);
    }
  }

  //restart
  if (mousePressed && mouseButton === RIGHT) {
    Program.restart();
  }

  comet();
  health();

  if (ship.health <= 0) {
    death();
  }

  shipFunction();
  shipHealth(onOff);

  //hide mouse
  cursor("none");

  //score disp.
  text(score, 21, 39);
}

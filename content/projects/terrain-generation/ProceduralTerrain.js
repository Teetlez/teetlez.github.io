void setup() {
  size(400, 400, P2D);
  background(42,153,17);
}

var tree = function(x, y) {
  strokeWeight(1); stroke(115,86,7);  fill(82,69,9);
  rect(x-1, y-10, 2, 8);
  stroke(27,230,9); fill(73,189,6);
  triangle(x-3,y-10, x+4,y-10, x+1,y-15);
  triangle(x-3,y-15, x+4,y-15, x+1,y-20);
  strokeWeight(5); stroke(31,26,19);
};

var Xoff = random(0,500), 
    Yoff = random(0,500), 
    moveY = -50, 
    tilt  = 0.008;

void draw() {
  strokeWeight(5);
  var N = 0.0035;
  for (var i = 0; i < width; i++) {
    // precompute noise + maps once per column
    var nx   = (Xoff - i) * N,
        ny   = (Yoff - i) * N,
        n    = noise(nx, ny),
        m    = map(n, 0, 1, -150, 150),
        land = map(n, 0.3, 0.65, 255, 0),
        snow = map(n, 0.3, 0.65, 255, 100),
        cl   = map(noise((Xoff-500-i)*N, (Yoff-500-i)*N),
                   0.3, 0.65, 200, 0);

    moveY += 0.004;

    // pick stroke by height
    if      (m >= 15)      stroke(62,192,209);
    else if (m >=  8)      stroke(255, random(210,240), land);
    else if (m <= -50)     stroke(snow-30,   snow-30,   snow-30);
    else if (m <= -30)     stroke(snow-135,  snow-135,  snow-135);
    else if (m <= -20)     stroke(snow-150,  snow-150,  random(5,35));
    else {
      var sd = random(0,10);
      if (sd > 5.47 && sd < 5.5) tree(i, m + moveY);
      stroke(0, land, 0);
    }

    // draw terrain
    point(i, m + moveY);

    // clouds
    strokeWeight(6);
    stroke(255,255,255, cl - 150 + random(-20,20));
    point(i, moveY + m/4 - 50);
    strokeWeight(5);

    // advance your noise “camera”
    Xoff += tilt;
    Yoff -= tilt;
  }

  // reset when we’ve scrolled past
  if (moveY >= 600) {
    moveY = -50;
    fill(42,153,17);
    rect(0,0,width,height);
  }
}

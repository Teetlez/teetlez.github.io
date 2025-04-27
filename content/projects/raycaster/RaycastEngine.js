var Player = function(x, y, xd, yd, xp, yp) {
  this.x = x; this.y = y;
  this.xDir = xd; this.yDir = yd;
  this.xPlane = xp; this.yPlane = yp;
  this.world = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1],
    [1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1],
    [1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1],
    [1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1],
    [1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1],
    [1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1],
    [1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1],
    [1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1],
    [1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1],
    [1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1],
    [1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1],
    [1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1],
    [1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1],
    [1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ];
};

Player.prototype = {
  move: function(spd) {
    var nx = this.x + this.xDir * spd,
        ny = this.y + this.yDir * spd;
    if (!this.world[floor(nx)][floor(this.y)]) this.x = nx;
    if (!this.world[floor(this.x)][floor(ny)]) this.y = ny;
  },

  turn: function(ang) {
    var c = cos(ang), s = sin(ang),
        xd = this.xDir, xp = this.xPlane;
    this.xDir   = xd * c - this.yDir * s;
    this.yDir   = xd * s + this.yDir * c;
    this.xPlane = xp * c - this.yPlane * s;
    this.yPlane = xp * s + this.yPlane * c;
  },

  render: function(step) {
    for (var x = 0; x < width; x += step) {
      var cam     = 2 * x / width - 1,
          rayX    = this.xDir + this.xPlane * cam,
          rayY    = this.yDir + this.yPlane * cam,
          mapX    = floor(this.x),
          mapY    = floor(this.y),
          dX      = sqrt(1 + (rayY * rayY) / (rayX * rayX)),
          dY      = sqrt(1 + (rayX * rayX) / (rayY * rayY)),
          stepX   = rayX < 0 ? -1 : 1,
          stepY   = rayY < 0 ? -1 : 1,
          sideDistX = (rayX < 0
                       ? (this.x - mapX)
                       : (mapX + 1 - this.x)) * dX,
          sideDistY = (rayY < 0
                       ? (this.y - mapY)
                       : (mapY + 1 - this.y)) * dY,
          hit = false, side;

      while (!hit) {
        if (sideDistX < sideDistY) {
          sideDistX += dX; mapX += stepX; side = 0;
        } else {
          sideDistY += dY; mapY += stepY; side = 1;
        }
        if (this.world[mapX][mapY]) hit = true;
      }

      var perp = side === 0
                 ? abs((mapX - this.x + (1 - stepX) / 2) / rayX)
                 : abs((mapY - this.y + (1 - stepY) / 2) / rayY),
          lineH = perp ? abs(height / perp) : height,
          y0    = max(0,    -lineH/3 + height/2),
          y1    = min(height-1, lineH/2.3 + height/2);

      strokeWeight(step);
      stroke(side ? 110 : 90);
      line(x, y0, x, y1);
      strokeWeight(1);
    }
  }
};

// key handling
const keys = {};
void keyPressed()   { keys[keyCode] = true; }
void keyReleased()  { keys[keyCode] = false; }

// setup & draw
const player, moveSpeed = 0.03, turnSpeed = radians(2.7);
void setup() {
  size(400, 400, P2D);
  player = new Player(1.5, 1.5, 1, 0, 0, -0.66);
}
void draw() {
  if (keys[UP]   || keys[DOWN])  player.move(moveSpeed * (keys[UP] ?  1 : -1));
  if (keys[LEFT] || keys[RIGHT]) player.turn(turnSpeed * (keys[RIGHT] ? -1 : 1));
  background(150);
  fill(171); rect(-1, 200, 401, 200);
  player.render(2);
}

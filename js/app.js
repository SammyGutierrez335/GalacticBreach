// Creates the canvas
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 960;
canvas.height = 480;
document.body.appendChild(canvas);

let audio = new Audio("sound/Space Ambience.mp3")
audio.play()
audio.pause()
// audio.addEventListener("loadedData", () => audio.play())



// Background image
let bgReady = false;
let bgImage = new Image();
bgImage.src = "assets/backgrounds/bg1.png";

bgImage.onload = function () {
  bgReady = true;
};





//player spaceship
let spaceShipImage = new Image();
spaceShipImage.src = "assets/player/playership.png";
let ssReady = false
spaceShipImage.onload = function () {
  ssReady = true

  window.requestAnimationFrame(gameLoop);

}

let spaceShip = {
  speed: 3, // movement in pixels per second
  x: 50,
  y: 200
};

// Handle keyboard controls
//To accomplish this we simply have a letiable keysDown which 
//stores any event's keyCode. If a key code is in the object, the user is currently pressing that key. Simple!
let keyPresses = {};

window.addEventListener('keydown', keyDownListener, false);
function keyDownListener(event) {
  keyPresses[event.key] = true;
}

window.addEventListener('keyup', keyUpListener, false);
function keyUpListener(event) {
  keyPresses[event.key] = false;
}







const WIDTH = 64
const HEIGHT = 64
const SCALE = 1
const SCALED_WIDTH = SCALE * WIDTH
const SCALED_HEIGHT = SCALE * HEIGHT
//(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
//draws a sprite frame dynamically - sprites are 64x64pixels

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(bgImage, 0, 0)
  ctx.drawImage(spaceShipImage,
    frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
    canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
}


const CYCLE_LOOP = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let currentLoopIndex = 0;
let frameCount = 0;
const FLYING_DOWN = 0;
const FLYING_UP = 0;
const FLYING_LEFT = 0;
const FLYING_RIGHT = 0;
let currentDirection = FLYING_DOWN;

const FRAME_LIMIT = 5;
// The main game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let hasMoved = false;

  if (keyPresses.w) {
    moveShip(0, -spaceShip.speed, FLYING_UP)
    hasMoved = true;
  } else if (keyPresses.s) {
    moveShip(0, spaceShip.speed, FLYING_DOWN)
    hasMoved = true;
  }
  if (keyPresses.a) {
    moveShip(-spaceShip.speed, 0, FLYING_LEFT)
    hasMoved = true;
  } else if (keyPresses.d) {
    moveShip(spaceShip.speed, 0, FLYING_RIGHT)
    hasMoved = true;
  }

  frameCount++;
  if (frameCount >= FRAME_LIMIT) {
    frameCount = 0;
    currentLoopIndex++;
    if (currentLoopIndex >= CYCLE_LOOP.length) {
      currentLoopIndex = 0;
    }
  }


  drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, spaceShip.x, spaceShip.y);
  window.requestAnimationFrame(gameLoop);
}

function moveShip(deltaX, deltaY, direction) {
  if (spaceShip.x + deltaX > 0 && spaceShip.x + SCALED_WIDTH + deltaX < canvas.width) {
    spaceShip.x += deltaX;
  }
  if (spaceShip.y + deltaY > 0 && spaceShip.y + SCALED_HEIGHT + deltaY < canvas.height) {
    spaceShip.y += deltaY;
  }
  currentDirection = direction;
}


import Spaceship from "./spaceship.js"
import Enemy from "./enemy.js"
// import KeyBinding from "./keyBinding"

// Creates the canvas
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 960;
canvas.height = 480;
document.body.appendChild(canvas);

let audio = new Audio("sound/Space Ambience.mp3")
// audio.play()
// audio.pause()


// Background image

let bgImage = new Image();
bgImage.src = "assets/backgrounds/bg1.png";

let bgImageFlipped = new Image();
bgImageFlipped.src = "assets/backgrounds/bg1-flipped-blurred-left.png";



//player spaceship
let spaceShip = new Spaceship({
  speed: 4,
  x: 50,
  y: 200,
  imgSrc: "assets/player/playership.png",
})

let enemy = new Enemy({
  speed: 2,
  x: 1000,
  y: 200,
  imgSrc: "assets/attackers/atom.png"
})

let spaceShipImage = new Image();
spaceShip.renderImg(spaceShipImage)

let enemyImage = new Image()
enemy.renderImg(enemyImage)

window.requestAnimationFrame(gameLoop)



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

let bgImageX = 0

let bgImageFlippedX = canvas.width

//(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
//draws a sprite frame dynamically - sprites are 64x64pixels
function drawFrame(frameX, frameY, canvasX, canvasY, enemyX, enemyY) {
  if (bgImageX < -(canvas.width)) {
    bgImageX = canvas.width
  }
  if (bgImageFlippedX < -canvas.width) {
    bgImageFlippedX = canvas.width
  }
  ctx.drawImage(bgImage, bgImageX -= 5, 0)
  ctx.drawImage(bgImageFlipped, bgImageFlippedX -= 5, 0)

  ctx.drawImage(spaceShipImage,
    frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
    canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
  if (enemy.offScreen) {
    ctx.drawImage(enemyImage,
      frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
      enemyX, enemyY, SCALED_WIDTH, SCALED_HEIGHT);
  }
}

//enemy atom has 24 stack frames
const CYCLE_LOOP = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let currentLoopIndex = 0;
let frameCount = 0;
// const FLYING_DOWN = 0;
// const FLYING_UP = 0;
// const FLYING_LEFT = 0;
// const FLYING_RIGHT = 0;
// let currentDirection = FLYING_DOWN;
const FRAME_LIMIT = 5;
// The main game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (keyPresses.w) {
    spaceShip.moveShip(0, -spaceShip.speed, 0, canvas)
    // moveShip(0, -spaceShip.speed, FLYING_UP)
  } else if (keyPresses.s) {
    spaceShip.moveShip(0, spaceShip.speed, 0, canvas)
    // moveShip(0, spaceShip.speed, FLYING_DOWN)
  }
  if (keyPresses.a) {
    spaceShip.moveShip(-spaceShip.speed, 0, 0, canvas)
    // moveShip(-spaceShip.speed, 0, FLYING_LEFT)
  } else if (keyPresses.d) {
    spaceShip.moveShip(spaceShip.speed, 0, 0, canvas)
    // moveShip(spaceShip.speed, 0, FLYING_RIGHT)
  }
  enemy.moveEnemy(enemy.speed, 0, 0, canvas)
  if (!enemy.offScreen) {
    setTimeout(function () {
      enemy.x = 1000
      enemy.offScreen = true
      console.log()
    }, 2000);
  }

  frameCount++;
  if (frameCount >= FRAME_LIMIT) {
    frameCount = 0;
    currentLoopIndex++;
    if (currentLoopIndex >= CYCLE_LOOP.length) {
      currentLoopIndex = 0;
    }
  }

  drawFrame(CYCLE_LOOP[currentLoopIndex], 0, spaceShip.x, spaceShip.y, enemy.x, enemy.y);
  window.requestAnimationFrame(gameLoop);
}

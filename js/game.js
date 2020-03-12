import Spaceship from "./spaceship.js"
import Enemy from "./enemy.js"

export default class Game {
  constructor() {
    this.enemies = [];
    this.ships = [];
    Game.prototype.allObjects = Game.prototype.allObjects.bind(this)
  }
}
let canvas = document.getElementsByTagName("canvas");

// Background image
let bgImage = new Image();
bgImage.src = "assets/backgrounds/bg1.png";

let bgImageFlipped = new Image();
bgImageFlipped.src = "assets/backgrounds/bg1-flipped-edged.png";

Game.prototype.addEnemy = function addEnemy() {
  let enemy = new Enemy({
    speed: 2,
    x: 1000,
    y: 200,
    imgSrc: "assets/attackers/atom.png"
  })
  this.enemies.push(enemy)
  let enemyImage = new Image()
  enemy.renderImg(enemyImage)
};

//player spaceship
Game.prototype.addShip = function addShip() {
  let spaceShip = new Spaceship({
    hasMoved: false,
    speed: 4,
    x: 50,
    y: 200,
    imgSrc: "assets/player/playership.png",
  })
  this.ships.push(spaceShip)
  let spaceShipImage = new Image();
  spaceShip.renderImg(spaceShipImage)
}
Game.prototype.allObjects = function allObjects() {
  return [].concat(this.ships, this.enemies);
};

function checkCollision(obj1, obj2) {
  const allObjects = Game.prototype.allObjects();
  console.log(allObjects)
  for (let i = 0; i < allObjects.length; i++) {
    for (let j = 0; j < allObjects.length; j++) {
      const obj1 = allObjects[i];
      const obj2 = allObjects[j];
      if (obj1.x < obj2.x + obj2.width &&
        obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height &&
        obj1.y + obj1.height > obj2.y) {
        return true
      }
    }
    return false
  }
}



let bgImageX = 0
let bgImageFlippedX = canvas.width

//(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
//draws a sprite frame dynamically - sprites are 64x64pixels

Game.prototype.drawFrame = function drawFrame(frameX, frameY, canvasX, canvasY, enemyX, enemyY) {
  const SCALE = 1
  const SCALED_WIDTH = SCALE * 64
  const SCALED_HEIGHT = SCALE * 64
  if (bgImageX < -(canvas.width)) {
    bgImageX = canvas.width
  }
  if (bgImageFlippedX < -canvas.width) {
    bgImageFlippedX = canvas.width
  }
  ctx.drawImage(bgImage, bgImageX -= 5, 0)
  ctx.drawImage(bgImageFlipped, bgImageFlippedX -= 5, 0)

  ctx.drawImage(spaceShipImage,
    frameX * spaceShip.width, frameY * spaceShip.height, spaceShip.width, spaceShip.height,
    canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
  if (enemy.offScreen) {
    ctx.drawImage(enemyImage,
      frameX * enemy.width, frameY * enemy.height, enemy.width, enemy.height,
      enemyX, enemyY, SCALED_WIDTH, SCALED_HEIGHT);
  }
}

//enemy atom has 24 stack frames
const CYCLE_LOOP = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let currentLoopIndex = 0;
let frameCount = 0;

const FRAME_LIMIT = 5;


// The main game loop
Game.prototype.gameloop = function gameloop(canvas, ctx) {
  let enemy = this.enemies[0]
  let spaceShip = this.ships[0]
  console.log(enemy)
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  spaceShip.moveShip(canvas)
  enemy.moveEnemy(enemy.speed, 0, 0, canvas)
  if (!enemy.offScreen) {
    setTimeout(function () {
      enemy.x = 1000
      enemy.offScreen = true
    }, 2000);
  }
  if (checkCollision(spaceShip, enemy)) {
    return
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

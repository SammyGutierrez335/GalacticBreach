import Spaceship from "./spaceship.js"
import Enemy from "./enemy.js"
import Bullet from "./bullet.js";

export default class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas
    this.ctx = ctx
    this.enemies = [];
    this.ships = [];
    this.bullets = [];
    this.spaceShipImage = new Image();
    this.enemyImage = new Image();
    this.bulletImage = new Image();
    this.CYCLE_LOOP = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    this.currentLoopIndex = 0;
    this.frameCount = 0;
    this.FRAME_LIMIT = 5;
    this.bgImageX = 0;
    this.bgImageFlippedX = canvas.width

    // Background image
    // this.allObjects = this.allObjects.bind(this)
    this.drawFrame = this.drawFrame.bind(this)
    this.gameloop = this.gameloop.bind(this)
  }
  addEnemy() {
    let enemy = new Enemy({
      speed: 2,
      x: 1000,
      y: 200,
      imgSrc: "assets/attackers/atom.png"
    })
    this.enemies.push(enemy)
    enemy.renderImg(this.enemyImage)
  };

  //player spaceship
  addShip() {
    let spaceShip = new Spaceship({
      hasMoved: false,
      speed: 4,
      x: 50,
      y: 200,
      imgSrc: "assets/player/playership.png",
    })
    this.ships.push(spaceShip)
    spaceShip.renderImg(this.spaceShipImage)
  }

  addBullet(bullet) {
    this.bullets.push(bullet)
    bullet.renderImg(this.bulletImage)
  }
  // allObjects() {
  //   return [].concat(this.ships, this.enemies);
  // };




  checkCollision(obj1, obj2) {
    // const allObjects = this.allObjects();
    // for (let i = 0; i < allObjects.length; i++) {
    //   for (let j = 0; j < allObjects.length; j++) {
    // const obj1 = allObjects[i];
    // const obj2 = allObjects[j];
    if (obj1.x < obj2.x + obj2.width &&
      obj1.x + obj1.width > obj2.x &&
      obj1.y < obj2.y + obj2.height &&
      obj1.y + obj1.height > obj2.y) {
      return true
    }
    return false
  }
  // }
  // }

  //(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  //draws a sprite frame dynamically - sprites are 64x64pixels

  drawFrame(frameX, frameY, canvasX, canvasY, enemyX, enemyY, bulletX, bulletY) {
    let ctx = this.ctx
    let spaceShip = this.ships[0]
    let enemy = this.enemies[0]
    let spaceShipImage = this.spaceShipImage
    let enemyImage = this.enemyImage
    let bulletImage = this.bulletImage
    let bgImage = new Image();


    bgImage.src = "assets/backgrounds/bg1.png";
    let bgImageFlipped = new Image();
    bgImageFlipped.src = "assets/backgrounds/bg1-flipped-edged.png";


    const SCALE = 1
    const SCALED_WIDTH = SCALE * 64
    const SCALED_HEIGHT = SCALE * 64

    if (this.bgImageX < -(this.canvas.width)) {
      this.bgImageX = this.canvas.width
    }
    if (this.bgImageFlippedX < -this.canvas.width) {
      this.bgImageFlippedX = this.canvas.width
    }

    ctx.drawImage(bgImage, this.bgImageX -= 5, 0)
    ctx.drawImage(bgImageFlipped, this.bgImageFlippedX -= 5, 0)
    ctx.drawImage(spaceShipImage,
      frameX * spaceShip.width, frameY * spaceShip.height, spaceShip.width, spaceShip.height,
      canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);

    if (enemy.offScreen) {
      ctx.drawImage(enemyImage,
        frameX * enemy.width, frameY * enemy.height, enemy.width, enemy.height,
        enemyX, enemyY, SCALED_WIDTH, SCALED_HEIGHT);
    }
    if (this.bullets.length > 0) {
      let bullet = this.bullets[0]
      ctx.drawImage(bulletImage,
        0, 0, 32, 32,
        bulletX, bulletY, 32, 32)
    }
  }



  // The main game loop
  gameloop() {
    this.addEnemy();
    let spaceShip = this.ships[0]
    if (spaceShip.keyPresses[" "]) {
      let bullet = new Bullet({
        speed: 6,
        x: spaceShip.x,
        y: spaceShip.y,
        imgSrc: "assets/fx/bullet_blue.png",
      })
      spaceShip.keyPresses[" "] = false
      this.addBullet(bullet);
    }
    let canvas = this.canvas
    let ctx = this.ctx
    let enemy = this.enemies[0]
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    spaceShip.moveShip(canvas)
    enemy.moveEnemy(enemy.speed, 0, 0, canvas)
    if (!enemy.offScreen) {
      setTimeout(function () {
        enemy.x = 1000
        enemy.offScreen = true
      }, 2000);
    }

    if (this.checkCollision(spaceShip, enemy)) {
      return
    }

    this.frameCount++;
    if (this.frameCount >= this.FRAME_LIMIT) {
      this.frameCount = 0;
      this.currentLoopIndex++;
      if (this.currentLoopIndex >= this.CYCLE_LOOP.length) {
        this.currentLoopIndex = 0;
      }
    }


    if (this.bullets.length > 0) {
      let bullet = this.bullets[0]
      bullet.moveBullet(bullet.speed, 0, 0, canvas)
      this.drawFrame(this.CYCLE_LOOP[this.currentLoopIndex], 0, spaceShip.x, spaceShip.y, enemy.x, enemy.y, bullet.x, bullet.y)
    } else {
      this.drawFrame(this.CYCLE_LOOP[this.currentLoopIndex], 0, spaceShip.x, spaceShip.y, enemy.x, enemy.y)
    }
    window.requestAnimationFrame(this.gameloop);
  }

}

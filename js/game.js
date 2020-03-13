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
    this.CYCLE_LOOP = []
    this.currentLoopIndex = 0;
    this.frameCount = 0;
    this.FRAME_LIMIT = 5;
    this.bgImageX = 0;
    this.bgImageFlippedX = canvas.width
    this.shotsFired = false
    this.spaceAmbience = null
    this.battleMusic = null
    this.drawFrame = this.drawFrame.bind(this)
    this.gameloop = this.gameloop.bind(this)
    this.i = 0
  }

  setInterval() {
    this.addEnemy(), 1000
  }

  addEnemy() {
    let enemy = new Enemy({
      speed: 2,
      x: this.getRandomX(),
      y: this.getRandomY(),
      imgSrc: "assets/attackers/atom.png"
    })
    this.enemies.push(enemy)
    enemy.renderImg(this.enemyImage)
  };

  getRandomX() {
    return Math.random() * (1300 - this.canvas.width) + this.canvas.width
  }
  getRandomY() {
    return Math.random() * (480 - 0)
  }

  //player spaceship

  addShip() {
    this.spaceAmbience = new Audio("assets/soundfx/Space Ambience.mp3")
    this.spaceAmbience.play()
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
    let audio = new Audio("assets/soundfx/fx/shot-1.mp3")
    audio.play()
    if (!this.shotsFired) {
      this.shotsFired = true
      this.spaceAmbience.pause()
      this.battleMusic = new Audio("assets/soundfx/space-battle.mp3")
      this.battleMusic.play()
    }
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

  remove(object, bullet) {
    if (object instanceof Bullet) {
      this.bullets.splice(this.bullets.indexOf(object), 1);
    } else if (object instanceof Enemy) {
      this.enemies.splice(this.enemies.indexOf(object), 1);
      this.remove(bullet)
    } else if (object instanceof SpaceShip) {
      this.ships.splice(this.ships.indexOf(object), 1);
    } else {
      throw new Error("unknown type of object");
    }
  };



  drawFrame(frameX, frameY, canvasX, canvasY, enemyX, enemyY) {
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
      (frameX % 16) * spaceShip.width, frameY * spaceShip.height, spaceShip.width, spaceShip.height,
      canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);

    if (enemy.offScreen) {

      ctx.drawImage(enemyImage,
        (frameX % 24) * enemy.width, frameY * enemy.height, enemy.width, enemy.height,
        enemyX, enemyY, SCALED_WIDTH, SCALED_HEIGHT);
    }
    if (this.bullets.length > 0) {
      for (let i = 0; i < this.bullets.length; i++) {
        let bullet = this.bullets[i]
        ctx.drawImage(bulletImage,
          (frameX % 4), 0, 32, 32,
          bullet.x, bullet.y, 32, 32)
      }
    }
  }



  // The main game loop should run about 60 times per second
  gameloop() {
    this.addEnemy()
    let spaceShip = this.ships[0]
    if (spaceShip.keyPresses[" "]) {
      let bullet = new Bullet({
        speed: 6,
        x: spaceShip.x,
        y: spaceShip.y,
        imgSrc: "assets/fx/bullet_blue.png",
      })
      spaceShip.keyPresses[" "] = false
      this.addBullet(bullet)
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
    if (this.bullets.length > 0) {
      if (this.bullets[0].x > canvas.width) {
        this.remove(this.bullets.shift())
      }
    }
    if (this.checkCollision(spaceShip, enemy)) {
      return
    }
    if (this.bullets.length > 0) {
      if (this.checkCollision(this.bullets[0], enemy)) {
        this.remove(enemy, this.bullets[0])
      }
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
      for (let i = 0; i < this.bullets.length; i++) {
        let bullet = this.bullets[i]
        bullet.moveBullet(bullet.speed, 0, 0, canvas)
      }
      // } else {
      // this.drawFrame(this.CYCLE_LOOP[this.currentLoopIndex], 0, spaceShip.x, spaceShip.y, enemy.x, enemy.y)
      //arguments in drawFrame(frameX, frameY, canvasX, canvasY, enemyX, enemyY, bulletX, bulletY)
    }
    this.drawFrame(this.CYCLE_LOOP[this.currentLoopIndex], 0, spaceShip.x, spaceShip.y, enemy.x, enemy.y)
    window.requestAnimationFrame(this.gameloop);
  }

}

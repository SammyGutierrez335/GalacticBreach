import Spaceship from "./spaceship.js"
import Enemy from "./enemy.js"
import Bullet from "./bullet.js";

export default class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas
    this.ctx = ctx
    this.CYCLE_LOOP = []
    this.frameCount = 0;
    this.FRAME_LIMIT = 5;
    this.currentLoopIndex = 0;
    this.spaceshipImage = new Image();
    this.ships = [];
    this.enemyImage = new Image();
    this.enemies = [];
    this.bulletImage = new Image();
    this.bullets = [];
    this.bgImageX = 0;
    this.bgImageFlippedX = canvas.width
    this.shotsFired = false
    this.spaceAmbience = null
    this.battleMusic = new Audio("assets/soundfx/space-battle.mp3")
    this.levelUpSfx = new Audio("assets/soundfx/fx/incoming-radar(louder).mp3")
    this.damage1 = new Audio("assets/soundfx/fx/damage-1.mp3")
    this.damage2 = new Audio("assets/soundfx/fx/damage-2.mp3")
    this.damage3 = new Audio("assets/soundfx/fx/damage-3.mp3")
    this.drawFrame = this.drawFrame.bind(this)
    this.gameloop = this.gameloop.bind(this)
    this.remove = this.remove.bind(this)
    this.maxEnemies = 3
    this.score = 0
    this.playerLevel = 1
    this.numHits = 0
    this.playerInvicibility = false
    this.slippynoooooo = false
  }



  addEnemy() {
    if (this.enemies.length < this.maxEnemies) {
      let enemy = new Enemy({
        speed: Math.ceil(Math.random() * 5),
        x: this.getRandomX(),
        y: this.getRandomY(),
        imgSrc: "assets/attackers/atom.png"
      })
      this.enemies.push(enemy)
      enemy.renderImg(this.enemyImage)
    }
  };

  getRandomX() {
    return Math.random() * (1200 - this.canvas.width) + this.canvas.width
  }
  getRandomY() {
    return Math.random() * (440 - 0)
  }

  //player spaceship

  addShip() {
    this.spaceAmbience = new Audio("assets/soundfx/Space Ambience.mp3")
    this.spaceAmbience.play()
    let spaceship = new Spaceship({
      hasMoved: false,
      speed: 4,
      x: 50,
      y: 200,
      imgSrc: "assets/player/playership.png",
    })
    this.ships.push(spaceship)
    spaceship.renderImg(this.spaceshipImage)
  }

  addBullet(bullet) {
    this.bullets.push(bullet)
    bullet.renderImg(this.bulletImage)
    let audio = new Audio("assets/soundfx/fx/shot-1.mp3")
    audio.play()
    if (!this.shotsFired) {
      this.shotsFired = true
      this.spaceAmbience.pause()
      this.battleMusic.play()
    }
  }

  checkCollision(obj1, obj2) {
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
      if (bullet) {
        this.remove(bullet)
      }
      this.score += 1
      if (this.score === this.playerLevel * 10) {
        this.playerLevel += 1
        this.maxEnemies += 3
        this.levelUpSfx.play()
        console.log("score:", this.score)
        console.log("level:", this.playerLevel)
      }
    } else if (object instanceof Spaceship) {
      //eventually lose a life/gameover here...
      this.ships.shift()
    } else {
      throw new Error("unknown type of object");
    }
  }

  takeDamage() {
    this.numHits += 1;
    this.playerInvicibility = false
    if (this.numHits === 1) {
      this.damage1.play();
    } else if (this.numHits === 2) {
      this.damage2.play();
    } else if (this.numHits === 3) {
      this.damage3.play();
    } else {
      this.slippynoooooo = true
    }
  }


  drawFrame(frameX, frameY) {
    let ctx = this.ctx
    let bgImage = new Image();
    let spaceship = this.ships[0]
    let spaceshipImage = this.spaceshipImage
    let enemyImage = this.enemyImage
    let bulletImage = this.bulletImage
    const SCALE = .9
    const SCALED_WIDTH = SCALE * 64
    const SCALED_HEIGHT = SCALE * 64

    // background
    bgImage.src = "assets/backgrounds/bg1.png";
    let bgImageFlipped = new Image();
    bgImageFlipped.src = "assets/backgrounds/bg1-flipped-edged.png";

    //cycles background animation
    if (this.bgImageX < -(this.canvas.width)) {
      this.bgImageX = this.canvas.width
    }
    if (this.bgImageFlippedX < -this.canvas.width) {
      this.bgImageFlippedX = this.canvas.width
    }

    ctx.drawImage(bgImage, this.bgImageX -= 5, 0)
    ctx.drawImage(bgImageFlipped, this.bgImageFlippedX -= 5, 0)



    //renders ship
    ctx.drawImage(spaceshipImage,
      (frameX % 16) * spaceship.width, frameY * spaceship.height, spaceship.width, spaceship.height,
      spaceship.x, spaceship.y, SCALED_WIDTH, SCALED_HEIGHT);

    //enemy rendering

    if (this.enemies.length > 0) {
      if (this.enemies.length <= this.maxEnemies) {
        for (let i = 0; i < this.enemies.length; i++) {
          let enemy = this.enemies[i]
          enemy.moveEnemy(enemy.speed, 0, 0, this.canvas)
          if (this.checkCollision(this.ships[0], enemy) && !this.playerInvicibility) {
            setTimeout(this.takeDamage(), 5000)
          }
          ctx.drawImage(enemyImage,
            (frameX % 24) * enemy.width, frameY * enemy.height, enemy.width, enemy.height,
            enemy.x, enemy.y, SCALED_WIDTH, SCALED_HEIGHT)
          if (enemy.x < 0) {
            this.remove(enemy, null)
          }
        }
      }
    }
    //bullet logic
    if (this.bullets.length >= 0) {
      for (let i = 0; i < this.bullets.length; i++) {
        let bullet = this.bullets[i]
        bullet.moveBullet(bullet.speed, 0, 0, this.canvas)

        ctx.drawImage(bulletImage,
          (frameX % 4), 0, 32, 32,
          bullet.x, bullet.y, 32, 32)

        //despawns bullet when it goes out of bounds
        if (bullet.x > this.canvas.width) {
          this.remove(bullet)
        }

        //checks if bullets hit enemies
        for (let i = 0; i < this.enemies.length; i++) {
          let enemy = this.enemies[i]
          if (this.checkCollision(enemy, bullet)) {
            this.remove(enemy, bullet)
          }
        }
      }
    }
  }



  // The main game loop should run about 60 times per second
  gameloop() {

    let spaceship = this.ships[0]
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.enemies.length < this.maxEnemies) {
      this.addEnemy()
    }

    //fires bullet
    if (spaceship.keyPresses[" "]) {
      let bullet = new Bullet({
        speed: 6,
        x: spaceship.x + 13,
        y: spaceship.y + 5,
        imgSrc: "assets/fx/bullet_blue.png",
      })
      spaceship.keyPresses[" "] = false
      this.addBullet(bullet)
    }

    spaceship.moveShip(this.canvas)

    //increments frames/loopindex for sprite animation
    this.frameCount++;
    if (this.frameCount >= this.FRAME_LIMIT) {
      this.frameCount = 0;

      this.currentLoopIndex++;
      if (this.currentLoopIndex >= this.CYCLE_LOOP.length) {
        this.currentLoopIndex = 0;
      }
    }



    this.drawFrame(this.CYCLE_LOOP[this.currentLoopIndex], 0)
    let myReq = window.requestAnimationFrame(this.gameloop);
    if (this.slippynoooooo) {
      window.cancelAnimationFrame(myReq)

    }
  }
}

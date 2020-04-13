import Bullet from "./bullet"

export default class Spaceship {
  constructor(options) {
    this.speed = options.speed; // movement in pixels per second
    this.x = options.x;
    this.y = options.y;
    this.height = 64
    this.width = 64
    this.thrust = false
    // this.cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    this.imgSrc = options.imgSrc
    this.deltaX = 0
    this.deltaY = 0
    this.keyPresses = {}
    this.keyDownListener = this.keyDownListener.bind(this)
    this.keyUpListener = this.keyUpListener.bind(this)
    window.addEventListener('keydown', this.keyDownListener, false);
    window.addEventListener('keyup', this.keyUpListener, false);

  }



  keyDownListener(event) {
    this.keyPresses[event.key] = true;
  }

  keyUpListener(event) {
    this.keyPresses[event.key] = false;
    this.deltaX = 0
    this.deltaY = 0
  }

  renderImg(spaceShipImage) {
    spaceShipImage.src = this.imgSrc;

  }


  moveShip(canvas) {
    let deltaX = this.speed
    let deltaY = this.speed

    if (this.keyPresses.w) {
      this.deltaY = -(deltaY)
      // moveShip(0, -spaceShip.speed, FLYING_UP)
    } else if (this.keyPresses.s) {
      this.deltaY = deltaY
      // moveShip(0, spaceShip.speed, FLYING_DOWN)
    }
    if (this.keyPresses.a) {
      this.deltaX = -(deltaX) + 3
      // moveShip(-spaceShip.speed, 0, FLYING_LEFT)
    } else if (this.keyPresses.d) {
      this.deltaX = deltaX + 3
      this.thrust = true
      // moveShip(spaceShip.speed, 0, FLYING_RIGHT)
    }

    //stop moving if going out of bounds
    if (this.x + this.deltaX > 0 && this.x + 64 + this.deltaX < canvas.width) {
      this.x += this.deltaX;
    }
    if (this.y + this.deltaY > 0 && this.y + 64 + this.deltaY < canvas.height) {
      this.y += this.deltaY;
    }
  }

}
export default class Spaceship {
  constructor(options) {
    this.speed = options.speed; // movement in pixels per second
    this.x = options.x;
    this.y = options.y;
    this.imgSrc = options.imgSrc
    this.deltaX = 0
    this.deltaY = 0
  }

  renderImg(spaceShipImage) {
    spaceShipImage.src = this.imgSrc;
  }

  // const FLYING_DOWN = 0;
  // const FLYING_UP = 0;
  // const FLYING_LEFT = 0;
  // const FLYING_RIGHT = 0;
  // let currentDirection = FLYING_DOWN;

  moveShip(canvas) {
    let deltaX = this.speed
    let deltaY = this.speed
    let keyPresses = {};

    window.addEventListener('keydown', keyDownListener, false);
    function keyDownListener(event) {
      keyPresses[event.key] = true;
    }

    window.addEventListener('keyup', keyUpListener, false);
    function keyUpListener(event) {
      keyPresses[event.key] = false;
    }

    if (keyPresses.w) {
      this.deltaY = -(deltaY)
      // moveShip(0, -spaceShip.speed, FLYING_UP)
    } else if (keyPresses.s) {
      this.deltaY = deltaY
      // moveShip(0, spaceShip.speed, FLYING_DOWN)
    }
    if (keyPresses.a) {
      debugger
      this.deltaX = -(deltaX)
      // moveShip(-spaceShip.speed, 0, FLYING_LEFT)
    } else if (keyPresses.d) {
      this.deltaX = deltaX
      // moveShip(spaceShip.speed, 0, FLYING_RIGHT)
    }


    if (this.x + this.deltaX > 0 && this.x + 64 + this.deltaX < canvas.width) {
      this.x += this.deltaX;
    }
    if (this.y + this.deltaY > 0 && this.y + 64 + this.deltaY < canvas.height) {
      this.y += this.deltaY;
    }
  }
}
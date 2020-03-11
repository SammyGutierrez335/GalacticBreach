export default class Spaceship {
  constructor(options) {
    this.speed = options.speed; // movement in pixels per second
    this.x = options.x;
    this.y = options.y;
    this.imgSrc = options.imgSrc
    this.ssReady = false;
    this.ctx = options.ctx
  }

  renderImg(spaceShipImage) {
    spaceShipImage.src = this.imgSrc;
    spaceShipImage.onload = function () {
      this.ssReady = true
    }
  }
}

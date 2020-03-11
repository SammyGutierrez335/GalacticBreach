export default class Spaceship {
  constructor(options) {
    this.speed = options.speed; // movement in pixels per second
    this.x = options.x;
    this.y = options.y;
    this.imgSrc = options.imgSrc
    this.ssReady = false;
  }

  renderImg(spaceShipImage) {
    spaceShipImage.src = this.imgSrc;
    spaceShipImage.onload = function () {
      this.ssReady = true
    }
  }
  moveShip(deltaX, deltaY, direction, canvas) {
    if (this.x + deltaX > 0 && this.x + 64 + deltaX < canvas.width) {
      this.x += deltaX;
    }
    if (this.y + deltaY > 0 && this.y + 64 + deltaY < canvas.height) {
      this.y += deltaY;
    }
  }
}
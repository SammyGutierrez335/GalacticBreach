export default class Bullet {
  constructor(options) {
    this.speed = options.speed; // movement in pixels per second
    this.x = options.x;
    this.y = options.y;
    this.height = 32
    this.width = 32
    this.imgSrc = options.imgSrc
    this.offScreen = true
  }

  renderImg(bulletImage) {
    bulletImage.src = this.imgSrc;
  }

  //checks for inbounds
  moveBullet(deltaX, deltaY, direction, canvas) {
    if (this.x + deltaX === +100) {
      this.offScreen = false
    }
    this.x += deltaX;
  }
}
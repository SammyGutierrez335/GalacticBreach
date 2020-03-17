export default class Bullet {
  constructor(options) {
    this.speed = options.speed; // movement in pixels per second
    // this.cycleLoop = [0]
    this.x = options.x;
    this.y = options.y;
    this.height = 32
    this.width = 32
    this.imgSrc = options.imgSrc
  }

  renderImg(bulletImage) {
    bulletImage.src = this.imgSrc;
  }

  //checks for inbounds
  moveBullet(deltaX, deltaY, direction, canvas) {
    this.x += deltaX;
  }
}
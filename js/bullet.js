export default class Bullet {
  constructor({speed, x, y, imgSrc}) {
    this.speed = speed; // movement in pixels per second
    // this.cycleLoop = [0]
    this.x = x;
    this.y = y;
    this.height = 32
    this.width = 32
    this.imgSrc = imgSrc
  }

  renderImg(bulletImage) {
    bulletImage.src = this.imgSrc;
  }

  //checks for inbounds
  //deltaY, direction, canvas are the 2nd, 3rd, and 4th params. Currently unused
  moveBullet(deltaX) {
    this.x += deltaX;
  }
}
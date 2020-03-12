export default class Enemy {
  constructor(options) {
    this.speed = options.speed; // movement in pixels per second
    this.x = options.x;
    this.y = options.y;
    this.height = 64
    this.width = 64
    this.imgSrc = options.imgSrc
    this.offScreen = true
  }

  renderImg(enemyImage) {
    enemyImage.src = this.imgSrc;
  }
  //checks for inbounds
  moveEnemy(deltaX, deltaY, direction, canvas) {
    if (this.x + deltaX === -100) {
      console.log("offscreen")
      this.offScreen = false
    }
    this.x -= deltaX;
  }
}
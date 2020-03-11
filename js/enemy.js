export default class Enemy {
  constructor(options) {
    this.speed = options.speed; // movement in pixels per second
    this.x = options.x;
    this.y = options.y;
    this.imgSrc = options.imgSrc
  }

  renderImg(enemyImage) {
    enemyImage.src = this.imgSrc;
  }
  //checks for inbounds
  moveEnemy(deltaX, deltaY, direction, canvas) {
    if (this.x + deltaX === -100) {
      console.log("offscreen")
      return false
    }
    this.x -= deltaX;
    return true
  }
}
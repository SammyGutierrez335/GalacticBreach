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
    if (this.x + deltaX > 0) {
      this.x -= deltaX;
    }
    if (this.y + deltaY > 0 && this.y + 64 + deltaY < canvas.height) {
      this.y -= deltaY;
    }
  }
}
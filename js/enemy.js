export default class Enemy {
  constructor(options) {
    this.speed = options.speed; // movement in pixels per second
    //need to find a way to make cycleLoop more dynamic
    // this.cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
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
  moveEnemy(deltaX) {
    if (this.x + deltaX === -100) {
      this.offScreen = true
    }
    this.x -= deltaX;
  }
}
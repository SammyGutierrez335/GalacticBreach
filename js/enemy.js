export default class Enemy {
  constructor(options) {
    this.speed = options.speed; // movement in pixels per second
    // this.cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    this.x = options.x;
    this.y = options.y;
    this.height = 64
    this.width = 64
    this.enemyImage = options.enemyImage
    this.frames = options.frames
    this.imgSrc = options.imgSrc
    this.hit = [false, null]
    this.despawning = [false, 0, 0]
  }

  renderImg(enemyImage, imgSrc = this.imgSrc) {
    enemyImage.src = imgSrc
  }

  
  //checks for inbounds
  moveEnemy(deltaX, spaceX, spaceshipY) {
    this.x -= deltaX;
  
    if (spaceshipY) {
      if (spaceshipY > this.y)
          this.y += .5
      else {
          this.y -= .5
      }
    }
  }


}
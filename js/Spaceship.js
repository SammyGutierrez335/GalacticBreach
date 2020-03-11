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
  //   function moveShip(deltaX, deltaY, direction) {
  //   if (spaceShip.x + deltaX > 0 && spaceShip.x + SCALED_WIDTH + deltaX < canvas.width) {
  //     spaceShip.x += deltaX;
  //   }
  //   if (spaceShip.y + deltaY > 0 && spaceShip.y + SCALED_HEIGHT + deltaY < canvas.height) {
  //     spaceShip.y += deltaY;
  //   }
  //   currentDirection = direction;
  // }
}

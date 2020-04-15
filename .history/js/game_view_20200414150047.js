export default class GameView {
  constructor(game, canvas, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.canvas = canvas
  }
  start() {
    for (let i = 0; i < 3; i++) {
      this.game.addShip();
    }
  
    // start the animation
    for (let i = 0; i < 384 ; i++) {
      this.game.CYCLE_LOOP.push(i);
    }
    requestAnimationFrame(this.game.gameloop)
  }
}
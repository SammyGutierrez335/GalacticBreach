export default class GameView {
  constructor(game, canvas, ctx, rightCanvas, rightCanvasCtx) {
    this.ctx = ctx;
    this.game = game;
    this.canvas = canvas
    this.rightCanvas = rightCanvas
    this.rightCanvasCtx = rightCanvasCtx
  }
  start() {
    this.game.addShip();
    // start the animation
    for (let i = 0; i < 384 ; i++) {
      this.game.CYCLE_LOOP.push(i);
    }
    requestAnimationFrame(this.game.gameloop)
    if(this.game.slippynoooooo) {
      this.rightCanvasCtx.fillText('Game Over', 350, 100)
      this.rightCanvasCtx.font = "20px fantasy"

      this.rightCanvasCtx.fillText('All Time High Score : ' + this.allTimeBest, 375, 250)
      this.rightCanvasCtx.fillText('Your Score : ' + this.score, 400, 350)
      this.rightCanvasCtx.fillText('Your Level : ' + this.playerLevel, 400, 450)
    }
  }
}
export default class GameView {
  constructor(game, canvas, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.canvas = canvas
    this.animate = this.animate.bind(this)
  }
  start() {
    this.game.addShip();
    // start the animation
    requestAnimationFrame(this.animate);
  }

  animate() {
    //sets up cyle_loop for sprites
    for (let i = 0; i < 48; i++) {
      this.game.CYCLE_LOOP.push(i);
    }

    // every call to animate requests causes another call to animates
    this.game.gameloop();
  };
};

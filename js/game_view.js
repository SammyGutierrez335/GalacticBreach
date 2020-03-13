export default class GameView {
  constructor(game, canvas, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.canvas = canvas
    this.animate = this.animate.bind(this)
  }
  start() {
    this.game.addShip();
    this.game.addEnemy();
    // start the animation
    requestAnimationFrame(this.animate);
  }

  animate() {
    for (let i = 0; i < 48; i++) {
      this.game.CYCLE_LOOP.push(i);
    }

    this.game.gameloop();
    // every call to animate requests causes another call to animates
  };
};

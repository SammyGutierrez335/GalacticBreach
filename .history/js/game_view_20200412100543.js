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
    for (let i = 0; i < 384 ; i++) {
      this.game.CYCLE_LOOP.push(i);
    }
    requestAnimationFrame(this.animate);
    
  }

  animate() {
    //sets up cyle_loop for sprites


    // every call to animate requests causes another call to animates
    let results = this.game.gameloop();
    return results
  };
};

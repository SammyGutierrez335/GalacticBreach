function GameView(game, canvas, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.canvas = canvas
  this.ship = this.game.addShip();
}

GameView.prototype.start = function start() {
  this.lastTime = 0;
  // start the animation
  requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.animate = function animate(time) {
  const timeDelta = time - this.lastTime;

  this.game.gameloop(canvas);
  this.game.drawframe(this.ctx);
  this.lastTime = time;

  // every call to animate requests causes another call to animate
  requestAnimationFrame(this.animate.bind(this));
};

module.exports = GameView;
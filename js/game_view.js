function GameView(game, canvas, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.canvas = canvas
  this.ship = this.game.addShip();
}

GameView.prototype.start = function start() {
  this.game.addShip()
  this.game.addEnemy();

  this.lastTime = 0;
  // start the animation
  requestAnimationFrame(this.animate().bind(this));
};

GameView.prototype.animate = function animate() {


  this.game.gameloop(this.canvas, this.ctx);
  this.game.drawframe(this.ctx);

  // every call to animate requests causes another call to animate
  requestAnimationFrame(this.animate.bind(this));
};

module.exports = GameView;
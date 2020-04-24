import Game from "./game";

export default class GameView {
  constructor(canvas, ctx, rightCanvas, rightCanvasCtx) {
    this.ctx = ctx;
    this.canvas = canvas
    this.game = new Game(canvas, ctx, rightCanvas, rightCanvasCtx)
    this.musicToggle = document.getElementById('music-toggle-button');
    this.musicToggleImage = document.getElementById('music-toggle-img');
    this.sfxToggle = document.getElementById('sfx-toggle-button');
    this.sfxToggleImage = document.getElementById('sfx-toggle-img');
    this.toggleMusic = this.toggleMusic.bind(this)
    this.toggleSfx = this.toggleSfx.bind(this)
    this.start = this.start.bind(this)
    this.musicToggle.addEventListener("click", this.toggleMusic)
    this.musicToggle.addEventListener('focus', function () { this.blur() })

    this.sfxToggle.addEventListener("click", this.toggleSfx)
    this.sfxToggle.addEventListener('focus', function () { this.blur() })
  }

  toggleMusic() {
    if (this.game.musicMuted) {
      this.game.musicMuted = false
      this.musicToggleImage.src = "assets/menu/music-toggle.png";
    } else {
      this.game.musicMuted = true
      this.musicToggleImage.src = "assets/menu/music-toggle-mute.png"
    }
    this.game.handleAudioToggles()
  }

  toggleSfx() {
    if (this.game.sfxMuted) {
      this.game.sfxMuted = false
      this.sfxToggleImage.src = "assets/menu/sfx-toggle.png";
    } else {
      this.game.sfxMuted = true
      this.sfxToggleImage.src = "assets/menu/sfx-toggle-mute.png"
    }
    this.game.handleAudioToggles()
  }

  start() {
    var gameOver = document.getElementById("game-over-title");
    var gameOverScore = document.getElementById("game-over-score");
    let gameOverHighScore = document.getElementById("game-over-high-score")

    if (gameOver.className !== "hide") {
      gameOver.className += "hide"
      
      gameOverScore.removeChild(gameOverScore.childNodes[0])
      gameOverHighScore.removeChild(gameOverHighScore.childNode[0])
      gameOverScore.className += "hide"
      gameOverHighScore.className += "hide"
    }
      this.game.addShip();
      for (let i = 0; i < 384 ; i++) {
        this.game.CYCLE_LOOP.push(i);
      }
      
      this.game.addEnemy();
        requestAnimationFrame(this.game.gameloop)
  }
}
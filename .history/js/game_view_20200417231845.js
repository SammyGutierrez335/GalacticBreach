export default class GameView {
  constructor(game, canvas, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.canvas = canvas
    const musicToggle = document.getElementById('music-toggle-button');
    const musicToggleImage = document.getElementById('music-toggle-img');
    const sfxToggle = document.getElementById('sfx-toggle-button');
    const sfxToggleImage = document.getElementById('sfx-toggle-img');

    musicToggle.addEventListener("click", toggleMusic)
    musicToggle.addEventListener('focus', function () { this.blur() })

    sfxToggle.addEventListener("click", toggleSfx)
    sfxToggle.addEventListener('focus', function () { this.blur() })
  }




toggleMusic() {
  let game= this.game
  if (game.musicMuted) {
    game.musicMuted = false
    musicToggleImage.src = "assets/menu/music-toggle.png";
  } else {
    game.musicMuted = true
    musicToggleImage.src = "assets/menu/music-toggle-mute.png"
  }
  game.handleAudioToggles()
}

toggleSfx() {
  let game= this.game
  if (game.sfxMuted) {
    game.sfxMuted = false
    sfxToggleImage.src = "assets/menu/sfx-toggle.png";
  } else {
    game.sfxMuted = true
    sfxToggleImage.src = "assets/menu/sfx-toggle-mute.png"
  }
  game.handleAudioToggles()
}



  start() {
      this.game.addShip();
    // start the animation
    for (let i = 0; i < 384 ; i++) {
      this.game.CYCLE_LOOP.push(i);
    }
    requestAnimationFrame(this.game.gameloop)
  }
}
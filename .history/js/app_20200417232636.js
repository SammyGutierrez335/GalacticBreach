import Game from "./game";
import GameView from "./game_view";


let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 960;
canvas.height = 480;
let height = canvas.height


let rightCanvas = document.createElement("canvas")
let rightCanvasCtx = canvas.getContext("2d")
rightCanvas.width = 220
rightCanvas.height = 480


let gameview = new GameView(null, canvas, ctx)


const playButton = document.getElementById('play-button');

playButton.addEventListener("click", () =>  {
  playButton.className += " hide"
  let game = new Game(canvas, ctx, rightCanvas, rightCanvasCtx);
  gameview.game = game
  gameview.start()
})

const musicToggle = document.getElementById('music-toggle-button');
const musicToggleImage = document.getElementById('music-toggle-img');
const sfxToggle = document.getElementById('sfx-toggle-button');
const sfxToggleImage = document.getElementById('sfx-toggle-img');

musicToggle.addEventListener("click", toggleMusic)
musicToggle.addEventListener('focus', function () {this.blur()})

sfxToggle.addEventListener("click", toggleSfx)
sfxToggle.addEventListener('focus', function () { this.blur() })

function toggleMusic() {
  if (game.musicMuted) {
    game.musicMuted = false
    musicToggleImage.src = "assets/menu/music-toggle.png";
  } else {
    game.musicMuted = true
    musicToggleImage.src = "assets/menu/music-toggle-mute.png"
  }
  game.handleAudioToggles()
}

function toggleSfx() {
  if (game.sfxMuted) {
    game.sfxMuted = false
    sfxToggleImage.src = "assets/menu/sfx-toggle.png";
  } else {
    game.sfxMuted = true
    sfxToggleImage.src = "assets/menu/sfx-toggle-mute.png"
  }
  game.handleAudioToggles()
}


//title assets
let titleBackground= new Image()
titleBackground.src = "assets/menu/background.png";
let titleImage = new Image();
titleImage.src = "assets/menu/blue/title.png";

//controls

let frames = 32;
let timerId = 0;
let intervalId = 0;

//animates background
timerId = setInterval(update, 1000 / frames);
let backgroundY = 0;
let speed = .4;
let bounce = false


function update() {
  clear(ctx);
  move();
  draw();
}

function clear(ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function move() {
  backgroundY -= speed;
  if (backgroundY < -200) {
    speed = -(speed);
    bounce = true
  }
  if (bounce && (backgroundY > 0)) {
    speed = -(speed);
  }
}

function draw() {
  ctx.fillRect(75, 0, 800, height, "black");
  ctx.drawImage(titleBackground, 75, backgroundY);
  ctx.drawImage(titleImage, 75, 0 + 150, 820, 200);
}

window.addEventListener('keydown', keyDownListener, false);

function keyDownListener(event) {
  if (event.key === "Enter" || event.key === "Return") {
    window.removeEventListener("keydown", keyDownListener)
    fadeOut(ctx)
    playButton.className += " hide"
    let game = new Game(canvas, ctx, rightCanvas, rightCanvasCtx);
    gameview.game = game
    gameview.start()
  }
}

function fadeOut() {
    intervalId = setInterval(update, 1000 / frames);
}



let canvasElement = document.body.appendChild(canvas);
let rightCanvasElement = document.body.appendChild(rightCanvas);

rightCanvasElement.setAttribute("class", "scoreboard-canvas")
canvasElement.setAttribute("class", "canvas");

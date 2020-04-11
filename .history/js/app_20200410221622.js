import Game from "./game";
import GameView from "./game_view";

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 960;
canvas.height = 480;
let height = canvas.width
let width = canvas.width

let scoreboardCanvas = document.createElement("canvas")
let scoreboardCtx = canvas.getContext("2d")
scoreboardCanvas.width = 960
scoreboardCanvas.height = 480
const game = new Game(canvas, ctx, scoreboardCanvas, scoreboardCtx);

//menu
let menuImage = new Image()
menuImage.src = "assets/menu/background.png";
let titleImage = new Image();
titleImage.src = "assets/menu/blue/title.png";


let frames = 32;
let timerId = 0;
let intervalId = 0;


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
  ctx.drawImage(menuImage, 75, backgroundY);
  ctx.drawImage(titleImage, 75, 0 + 150, 820, 200);
}

window.addEventListener('keydown', keyDownListener, false);

function keyDownListener(event) {
  if (event.key === "Enter" || "Return") {
    window.removeEventListener("keydown", keyDownListener)
    fadeOut(ctx)
    new GameView(game, canvas, ctx).start()
  }
}

// canvas.addEventListener("mouseup", checkClick);
// function checkClick(mouseEvent) {
//     let gameView = new GameView(game, canvas, ctx)
//     canvas.removeEventListener("mouseup", checkClick);
//     gameView.start()
// }

function fadeOut() {
    intervalId = setInterval(update, 1000 / frames);
}



let canvasElement = document.body.appendChild(canvas);
// let scoreboardElement = document.body.appendChild(scoreboardCanvas);
canvasElement.setAttribute("class", "canvas");
// scoreboardElement.setAttribute("class", "scoreboard-canvas")
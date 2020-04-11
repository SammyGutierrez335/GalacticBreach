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
let fadeId = 0;
let time = 0.0;

timerId = setInterval(update, 1000 / frames);

function update() {
  clear();
  move();
  draw();
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


let backgroundY = 0;
let speed = .4;
let bounce = false
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
  context.fillStyle = "rgba(0,0,0, 0.2)";
  context.fillRect(0, 0, width, height);
  time += 0.1;
  if (time >= 2) {
    clearInterval(fadeId);
    time = 0;
    timerId = setInterval("update()", 1000 / frames);
  }
}



let canvasElement = document.body.appendChild(canvas);
// let scoreboardElement = document.body.appendChild(scoreboardCanvas);
canvasElement.setAttribute("class", "canvas");
// scoreboardElement.setAttribute("class", "scoreboard-canvas")
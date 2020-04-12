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
scoreboardCanvas.width = 220
scoreboardCanvas.height = 480
const game = new Game(canvas, ctx, scoreboardCanvas, scoreboardCtx);

//title assets
let titleBackground= new Image()
titleBackground.src = "assets/menu/background.png";
let titleImage = new Image();
titleImage.src = "assets/menu/blue/title.png";

//controls
let wasd = new Image()
wasd.src = "assets/menu/controls/wasd.png"

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
  leftCanvasCtx.fillStyle = "lightblue";
  leftCanvasCtx.font = "20px fantasy"   
    leftCanvasCtx.fillText('Controls : ', 0, 50)
    leftCanvasCtx.fillText('Move Up : W' , 900, 50)
    leftCanvasCtx.fillText('Move Down : S' , 900, 50)
    leftCanvasCtx.fillText('Move Left : A' , 900, 50)
    leftCanvasCtx.fillText('Move Right : D' , 900, 50)
    leftCanvasCtx.fillText('Fire : Spacebar' , 900, 50)
    leftCanvasCtx.fillText('Click on Screen to start', 900, 50)
    leftCanvasCtx.fillText('Refresh browser to restart', 900, 50)
}

window.addEventListener('keydown', keyDownListener, false);

function keyDownListener(event) {
  if (event.key === "Enter" || event.key === "Return") {
    window.removeEventListener("keydown", keyDownListener)
    fadeOut(ctx)
    new GameView(game, canvas, ctx).start()
  }
}

function fadeOut() {
    intervalId = setInterval(update, 1000 / frames);
}



let leftCanvasElement = document.body.appendChild(leftCanvas)
let canvasElement = document.body.appendChild(canvas);
let scoreboardElement = document.body.appendChild(scoreboardCanvas);
leftCanvasElement.setAttribute("class", "left-canvas")

scoreboardElement.setAttribute("class", "scoreboard-canvas")
canvasElement.setAttribute("class", "canvas");
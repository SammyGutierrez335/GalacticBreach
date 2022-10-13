
import GameView from "./game_view";

//TODO DYNAMICALLY SET CANVAS BASED ON SCREEN SIZE
let gameCanvas = document.createElement("canvas");
let ctx = gameCanvas.getContext("2d");
gameCanvas.width = 960;
gameCanvas.height = 480;
let height = gameCanvas.height



let rightCanvas = document.createElement("canvas")
let rightCanvasCtx = rightCanvas.getContext("2d")
rightCanvas.width = 220
rightCanvas.height = 480




const playButton = document.getElementById('play-button');
playButton.addEventListener("click", () =>  {
  playButton.className += " hide"
  new GameView(gameCanvas, ctx, rightCanvas, rightCanvasCtx).start()
})



//title assets
let titleBackground= new Image()
titleBackground.src = "assets/menu/background.png";

let titleImage = new Image();
titleImage.src = "assets/menu/blue/title.png";



//animates background
let frames = 32;
// let timerId = setInterval(update, 1000 / frames);


const update = () => {
  clear(ctx);
  move();
  draw();
}

const clear = ctx => {
  ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
}

let backgroundY = 0;
let speed = .4;
let bounce = false

const move = () => {
  backgroundY -= speed;
  if (backgroundY < -200) {
    speed = -(speed);
    bounce = true
  }
  if (bounce && (backgroundY > 0)) {
    speed = -(speed);
  }
}

const draw = () => {
  ctx.fillRect(75, 0, 800, height, "black");
  ctx.drawImage(titleBackground, 75, backgroundY);
  ctx.drawImage(titleImage, 75, 150, 820, 200);
}

window.addEventListener('keydown', keyDownListener, false);

function keyDownListener(event) {
  if (event.key === "Enter" || event.key === "Return") {
    window.removeEventListener("keydown", keyDownListener)
    playButton.className += " hide"
    new GameView(gameCanvas, ctx, rightCanvas, rightCanvasCtx).start()
  }
}

const canvasElement = document.getElementById("game-board").prepend(gameCanvas);

let rightCanvasElement = document.body.appendChild(rightCanvas);
if (rightCanvasElement.className !== "hide" ) {
  rightCanvasElement.setAttribute("class", "scoreboard-canvas")
}

if (typeof canvasElement !== 'undefined') {
  canvasElement.setAttribute("class", "canvas");
}

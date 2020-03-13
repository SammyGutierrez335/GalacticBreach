import Game from "./game";
import GameView from "./game_view";

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 960;
canvas.height = 480;
let width = canvas.width
let height = canvas.width
document.body.appendChild(canvas);

let menuImage = new Image()
menuImage.src = "assets/menu/background.png";
var titleImage = new Image();
titleImage.src = "assets/menu/blue/title.png";
var shipImage = new Image()
shipImage.src = "assets/player/playership.png";
var playImage = new Image();
playImage.src = "assets/menu/blue/play.png";
var instructionsImage = new Image();
instructionsImage.src = "assets/menu/blue/instructions.png";
var settingsImage = new Image();
settingsImage.src = "assets/menu/blue/settings.png";
var creditsImage = new Image();
creditsImage.src = "assets/menu/blue/credits.png";


var buttonX = [192, 110, 149, 160];
var buttonY = [100, 140, 180, 220];
var buttonWidth = [96, 260, 182, 160];
var buttonHeight = [40, 40, 40, 40];



menuImage.onload = function () {
  ctx.drawImage(menuImage, 0, 0);
};

titleImage.onload = function () {
  ctx.drawImage(titleImage, 50, -10);
}
playImage.onload = function () {
  ctx.drawImage(playImage, buttonX[0], buttonY[0]);
}
instructionsImage.onload = function () {
  ctx.drawImage(instructionsImage, buttonX[1], buttonY[1]);
}
settingsImage.onload = function () {
  ctx.drawImage(settingsImage, buttonX[2], buttonY[2]);
}
creditsImage.onload = function () {
  ctx.drawImage(creditsImage, buttonX[3], buttonY[3]);
}







let frames = 30;
let timerId = 0;

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
  if (shipSize === shipWidth) {
    shipRotate = -1;
  }
  if (shipSize === 0) {
    shipRotate = 1;
  }
  shipSize += shipRotate;
}

function draw() {
  ctx.fillRect(0, 0, width, height, "black");
  ctx.drawImage(menuImage, 0, backgroundY);
  menuImage.onload = function () {
    ctx.drawImage(menuImage, 0, 0);
  };


}

var mouseX;
var mouseY;

canvas.addEventListener("mousemove", checkPos);

function checkPos(mouseEvent) {
  if (mouseEvent.pageX || mouseEvent.pageY == 0) {
    mouseX = mouseEvent.pageX - this.offsetLeft;
    mouseY = mouseEvent.pageY - this.offsetTop;
  } else if (mouseEvent.offsetX || mouseEvent.offsetY == 0) {
    mouseX = mouseEvent.offsetX;
    mouseY = mouseEvent.offsetY;
  }

  for (i = 0; i < buttonX.length; i++) {
    if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]) {
      if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]) {
        shipVisible = true;
        shipX[0] = buttonX[i] - (shipWidth / 2) - 2;
        shipY[0] = buttonY[i] + 2;
        shipX[1] = buttonX[i] + buttonWidth[i] + (shipWidth / 2);
        shipY[1] = buttonY[i] + 2;
      }
    } else {
      shipVisible = false;
    }
  }
}

var shipX = [0, 0];
var shipY = [0, 0];
var shipWidth = 35;
var shipHeight = 40;

var shipVisible = false;
var shipSize = shipWidth;
var shipRotate = 0;

// const game = new Game(canvas, ctx);
// new GameView(game, canvas, ctx).start()

// Background music
let audio = new Audio("sound/Space Ambience.mp3")
// audio.play()
// audio.pause()
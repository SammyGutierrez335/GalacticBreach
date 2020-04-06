import Game from "./game";
import GameView from "./game_view";

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 960;
canvas.height = 480;
let width = canvas.width
let height = canvas.width

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
// let shipImage = new Image()
// shipImage.src = "assets/player/playership.png";
// let playImage = new Image();
// playImage.src = "assets/menu/blue/play.png";
// let instructionsImage = new Image();
// instructionsImage.src = "assets/menu/blue/instructions.png";
// let settingsImage = new Image();
// settingsImage.src = "assets/menu/blue/settings.png";
// let creditsImage = new Image();
// creditsImage.src = "assets/menu/blue/credits.png";

let mouseX;
let mouseY;
let buttonX = [300, -20, 149, 160];
let buttonY = [140, 220, 300, 380];
let buttonWidth = [96, 260, 182, 160];
let buttonHeight = [40, 40, 40, 40];
let shipX = [0, 0];
let shipY = [0, 0];
let shipWidth = 64;
let shipHeight = 64;

let shipVisible = true;
let shipSize = shipWidth;
let shipRotate = 0;

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
  if (shipSize === shipWidth) {
    shipRotate = -1;
  }
  if (shipSize === 0) {
    shipRotate = 1;
  }
  shipSize += shipRotate;
}



function draw() {
  ctx.fillRect(75, 0, 800, height, "black");
  ctx.drawImage(menuImage, 75, backgroundY);
  ctx.drawImage(titleImage, 75, 0 + 150, 820, 200);
  // ctx.drawImage(playImage, buttonX[0] + 20, buttonY[0] + 75);
  // ctx.drawImage(instructionsImage, buttonX[1], buttonY[1]);
  // ctx.drawImage(settingsImage, buttonX[2], buttonY[2]);
  // ctx.drawImage(creditsImage, buttonX[3], buttonY[3]);
}

// window.addEventListener('keydown', keyDownListener, false);
canvas.addEventListener("mousemove", checkPos);

// function keyDownListener(event) {
//   if (event.key === "Enter" || "Return") {
//     new GameView(game, canvas, ctx).start()
//   }
// }


//checks mouseEvent's page or offset depending on browser
function checkPos(mouseEvent) {
  if (mouseEvent.pageX || mouseEvent.pageY == 0) {
    mouseX = mouseEvent.pageX - this.offsetLeft;
    mouseY = mouseEvent.pageY - this.offsetTop;
  } else if (mouseEvent.offsetX || mouseEvent.offsetY == 0) {
    mouseX = mouseEvent.offsetX;
    mouseY = mouseEvent.offsetY;
  }

  for (let i = 0; i < buttonX.length; i++) {
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
canvas.addEventListener("mouseup", checkClick);
function checkClick(mouseEvent) {
  if (mouseX > 0 && mouseY > 0) {
    let gameView = new GameView(game, canvas, ctx)
    canvas.removeEventListener("mouseup", checkClick);
    gameView.start()
  }
  // //       
  // for (let i = 0; i < buttonX.length; i++) {
  //   if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]) {
  //     if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]) {
  //       new GameView(game, canvas, ctx).start()
  //       fadeId = setInterval("this.fadeOut()", 1000 / frames);
  //       clearInterval(timerId);
  // //       canvas.removeEventListener("mousemove", checkPos);
  // //       canvas.removeEventListener("mouseup", checkClick);
  // //     }
  // //   }
  // }
}
// function fadeOut() {
//   context.fillStyle = "rgba(0,0,0, 0.2)";
//   context.fillRect(0, 0, width, height);
//   time += 0.1;
//   if (time >= 2) {
//     clearInterval(fadeId);
//     time = 0;
//     timerId = setInterval("update()", 1000 / frames);
//     canvas.addEventListener("mousemove", checkPos);
//     canvas.addEventListener("mouseup", checkClick);
//   }
// }



let canvasElement = document.body.appendChild(canvas);
// let scoreboardElement = document.body.appendChild(scoreboardCanvas);
canvasElement.setAttribute("class", "canvas");
// scoreboardElement.setAttribute("class", "scoreboard-canvas")
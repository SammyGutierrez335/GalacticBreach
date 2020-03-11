// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 960;
canvas.height = 480;
document.body.appendChild(canvas);



// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.src = "assets/backgrounds/bg1.png";

bgImage.onload = function () {
  bgReady = true;
};

var spaceShipImage = new Image();
spaceShipImage.src = "assets/player/playership.png";
var ssReady = false
spaceShipImage.onload = function () {
  ssReady = true
  render()
}



// Handle keyboard controls
//To accomplish this we simply have a variable keysDown which 
//stores any event's keyCode. If a key code is in the object, the user is currently pressing that key. Simple!
var keysDown = {};

addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];
}, false);



let width = 64
let height = 64
let scale = .7
let scaledWidth = scale * width
let scaledHeight = scale * height
//(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
//draws a sprite frame dynamically - sprites are 64x64pixels
//frame0 -
function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(spaceShipImage,
    frameX * width, frameY * height, width, height,
    canvasX, canvasY, scaledWidth, scaledHeight);
}


const cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
  frameCount++
  if (frameCount < 4) {
    window.requestAnimationFrame(step);
    return
  }
  frameCount = 0
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bgImage, 0, 0)
  drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
  currentLoopIndex++;
  if (currentLoopIndex >= cycleLoop.length) {
    currentLoopIndex = 0;
  }
  window.requestAnimationFrame(step);
}


// The main game loop
var main = function () {
  var now = Date.now();
  var delta = now - then;
  ctx.drawImage(bgImage, 0, 0);


  then = now;

  // Request to do this again ASAP
  requestAnimationFrame(step);
};


// Play the game
var then = Date.now();

main();

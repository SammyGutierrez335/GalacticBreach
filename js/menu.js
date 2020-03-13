
// let menuImage = new Image()
// menuImage.src = "assets/menu/background.png";
// var titleImage = new Image();
// titleImage.src = "assets/menu/blue/title.png";
// var shipImage = new Image()
// shipImage.src = "assets/player/playership.png";
// var playImage = new Image();
// playImage.src = "assets/menu/blue/play.png";
// var instructionsImage = new Image();
// instructionsImage.src = "assets/menu/blue/instructions.png";
// var settingsImage = new Image();
// settingsImage.src = "assets/menu/blue/settings.png";
// var creditsImage = new Image();
// creditsImage.src = "assets/menu/blue/credits.png";

// var mouseX;
// var mouseY;
// var buttonX = [300, -20, 149, 160];
// var buttonY = [140, 220, 300, 380];
// var buttonWidth = [96, 260, 182, 160];
// var buttonHeight = [40, 40, 40, 40];
// var shipX = [0, 0];
// var shipY = [0, 0];
// var shipWidth = 64;
// var shipHeight = 64;

// var shipVisible = true;
// var shipSize = shipWidth;
// var shipRotate = 0;

// var frames = 30;
// var timerId = 0;
// var fadeId = 0;
// var time = 0.0;

// timerId = setInterval(update, 1000 / frames);

// function update() {
//   clear();
//   move();
//   draw();
// }

// function clear() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

// let backgroundY = 0;
// let speed = .4;
// let bounce = false
// function move() {
//   backgroundY -= speed;
//   if (backgroundY < -200) {
//     speed = -(speed);
//     bounce = true
//   }
//   if (bounce && (backgroundY > 0)) {
//     speed = -(speed);
//   }
//   if (shipSize === shipWidth) {
//     shipRotate = -1;
//   }
//   if (shipSize === 0) {
//     shipRotate = 1;
//   }
//   shipSize += shipRotate;
// }

// function draw() {
//   ctx.fillRect(0, 0, width, height, "black");
//   ctx.drawImage(menuImage, 75, backgroundY);
//   ctx.drawImage(titleImage, -140, 0);
//   ctx.drawImage(playImage, buttonX[0], buttonY[0]);
//   ctx.drawImage(instructionsImage, buttonX[1], buttonY[1]);
//   ctx.drawImage(settingsImage, buttonX[2], buttonY[2]);
//   ctx.drawImage(creditsImage, buttonX[3], buttonY[3]);
//   if (shipVisible === true) {
//     ctx.drawImage(shipImage, shipX[0] - (shipSize / 2), shipY[0], shipSize, shipHeight);
//     ctx.drawImage(shipImage, shipX[1] - (shipSize / 2), shipY[1], shipSize, shipHeight);
//   }
// }


// canvas.addEventListener("mousemove", checkPos);

// //checks mouseEvent's page or offset depending on browser
// function checkPos(mouseEvent) {
//   if (mouseEvent.pageX || mouseEvent.pageY == 0) {
//     mouseX = mouseEvent.pageX - this.offsetLeft;
//     mouseY = mouseEvent.pageY - this.offsetTop;
//   } else if (mouseEvent.offsetX || mouseEvent.offsetY == 0) {
//     mouseX = mouseEvent.offsetX;
//     mouseY = mouseEvent.offsetY;
//   }

//   for (let i = 0; i < buttonX.length; i++) {
//     if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]) {
//       if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]) {
//         shipVisible = true;
//         shipX[0] = buttonX[i] - (shipWidth / 2) - 2;
//         shipY[0] = buttonY[i] + 2;
//         shipX[1] = buttonX[i] + buttonWidth[i] + (shipWidth / 2);
//         shipY[1] = buttonY[i] + 2;
//       }
//     } else {
//       shipVisible = false;
//     }
//   }
// }
// canvas.addEventListener("mouseup", checkClick);
// function checkClick(mouseEvent) {
//   for (let i = 0; i < buttonX.length; i++) {
//     if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]) {
//       if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]) {
//         new GameView(game, canvas, ctx).start()
//         fadeId = setInterval("fadeOut()", 1000 / frames);
//         clearInterval(timerId);
//         canvas.removeEventListener("mousemove", checkPos);
//         canvas.removeEventListener("mouseup", checkClick);
//       }
//     }
//   }
// }
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
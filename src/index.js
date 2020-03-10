const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", function () {
  const background = document.getElementById("backgroundCanvas");
  background.width = Game.DIM_X;
  background.height = Game.DIM_Y;
  let ctxBackground = background.getContext('2d')
  ctxBackground.fillStyle = "black";

  // ctxBackground.fillRect(0, 0, 800, 600);
  const game = new Game();
  new GameView(game, ctxBackground).start();

  // ctxBackground.beginPath();
  // ctxBackground.arc(100, 100, 20, 0, 2 * Math.PI, true);
  // ctxBackground.strokeStyle = "green";
  // ctxBackground.lineWidth = 5;
  // ctxBackground.stroke();
  // ctxBackground.fillStyle = "blue";
  // ctxBackground.fill();

  // const foreground = document.getElementById("foregroundCanvas");
  // const ctxForeground = foreground.getContext("2d");
  // ctxForeground.beginPath();
  // ctxForeground.arc(100, 100, .8, 0, 2 * Math.PI, true);
  // ctxForeground.strokeStyle = "orange";
  // ctxForeground.lineWidth = 5;
  // ctxForeground.stroke();
  // ctxForeground.fillStyle = "yellow";
  // ctxForeground.fill();
});



const MovingObject = require("./moving_object.js");
const EnemyShip = require("./enemy_ship.js");

window.MovingObject = MovingObject;
window.EnemyShip = EnemyShip


import Game from "./game";
import GameView from "./game_view";

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 960;
canvas.height = 480;
document.body.appendChild(canvas);
console.log(Game)
const game = new Game();
new GameView(game, canvas, ctx).start()

// Background music
let audio = new Audio("sound/Space Ambience.mp3")
// audio.play()
// audio.pause()
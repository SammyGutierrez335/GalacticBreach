const EnemyShip = require("./enemy_ship");
const Bullet = require("./bullet");
const Ship = require("./ship");
const Util = require("./util");


function Game() {
  this.enemyShips = [];
  this.bullets = [];
  this.ships = [];

  this.addEnemyShips();
}

Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;
Game.NUM_ENEMYSHIPS = 10;

Game.prototype.add = function add(object) {
  if (object instanceof EnemyShip) {
    this.enemyShips.push(object);
  } else if (object instanceof Bullet) {
    this.bullets.push(object);
  } else if (object instanceof Ship) {
    this.ships.push(object);
  } else {
    throw new Error("unknown type of object");
  }
};

//checks how many enemy ships there are on the map and adds
//enemy ship if below max
Game.prototype.addEnemyShips = function addEnemyShips() {
  //iterates through the enemyShips array to add enemy ships
  for (let i = 0; i < Game.NUM_ENEMYSHIPS; i++) {
    //adds instance of enemy ship
    this.add(new EnemyShip({ game: this }));
  }
};

//adds players ship
Game.prototype.addShip = function addShip() {
  const ship = new Ship({
    pos: this.randomPosition(),
    game: this
  });

  this.add(ship);

  return ship;
};

//concats all objects on screen into an array to be used in
//checkCollisions method and draw method
Game.prototype.allObjects = function allObjects() {
  return [].concat(this.ships, this.enemyShips, this.bullets);
};

//iterates through all objects and checks for collision
Game.prototype.checkCollisions = function checkCollisions() {
  const allObjects = this.allObjects();
  for (let i = 0; i < allObjects.length; i++) {
    for (let j = 0; j < allObjects.length; j++) {
      const obj1 = allObjects[i];
      const obj2 = allObjects[j];

      if (obj1.isCollidedWith(obj2)) {
        const collision = obj1.collideWith(obj2);
        if (collision) return;
      }
    }
  }
};

Game.prototype.draw = function draw(ctx) {
  //clears canvas
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

  ctx.fillStyle = Game.BG_COLOR;
  //colors background
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

  this.allObjects().forEach(function (object) {
    object.draw(ctx);
  });
};

Game.prototype.isOutOfBounds = function isOutOfBounds(pos) {
  return (pos[0] < 0) || (pos[1] < 0) ||
    (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
};

//delta is a difference between two coords
Game.prototype.moveObjects = function moveObjects(delta) {
  this.allObjects().forEach(function (object) {
    object.move(delta);
  });
};

Game.prototype.randomPosition = function randomPosition() {
  return [
    Game.DIM_X * Math.random(),
    Game.DIM_Y * Math.random()
  ];
};

Game.prototype.remove = function remove(object) {
  if (object instanceof Bullet) {
    this.bullets.splice(this.bullets.indexOf(object), 1);
  } else if (object instanceof EnemyShip) {
    this.enemyShips.splice(this.enemyShips.indexOf(object), 1);
  } else if (object instanceof Ship) {
    this.ships.splice(this.ships.indexOf(object), 1);
  } else {
    throw new Error("unknown type of object");
  }
};

Game.prototype.step = function step(delta) {
  this.moveObjects(delta);
  this.checkCollisions();
};

//!!! will likely remove this function with refactoring  !!!//
//___________________________________________________________//
Game.prototype.wrap = function wrap(pos) {
  return [
    Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)
  ];
};
//___________________________________________________________//
module.exports = Game;

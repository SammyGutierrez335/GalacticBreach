/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nfunction Bullet(options) {\n  options.radius = Bullet.RADIUS;\n\n  MovingObject.call(this, options);\n}\n\nBullet.RADIUS = 2;\nBullet.SPEED = 15;\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.isWrappable = false;\n\nmodule.exports = Bullet;\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/enemy_ship.js":
/*!***************************!*\
  !*** ./src/enemy_ship.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\n//will remove with a sprite image\nconst DEFAULTS = {\n  COLOR: \"#505050\",\n  RADIUS: 25,\n  SPEED: 4\n};\n\nfunction EnemyShip(options) {\n  options = options || {};\n  options.color = DEFAULTS.COLOR;\n  options.pos = options.pos || options.game.randomPosition();\n  options.radius = DEFAULTS.RADIUS;\n  options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);\n\n  MovingObject.call(this, options);\n}\n\n// Must inherit before adding any properties (usually functions) to the Asteroid prototype\nUtil.inherits(EnemyShip, MovingObject);\n\nEnemyShip.prototype.collideWith = function collideWith(otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n    return true;\n  } else if (otherObject instanceof Bullet) {\n    this.remove();\n    otherObject.remove();\n    return true;\n  }\n  return false;\n};\n\nmodule.exports = EnemyShip\n\n//# sourceURL=webpack:///./src/enemy_ship.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const EnemyShip = __webpack_require__(/*! ./enemy_ship */ \"./src/enemy_ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nfunction Game() {\n  this.enemyShips = [];\n  this.bullets = [];\n  this.ships = [];\n\n  this.addEnemyShips();\n}\n\nGame.BG_COLOR = \"#000000\";\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.FPS = 32;\nGame.NUM_ENEMYSHIPS = 10;\n\nGame.prototype.add = function add(object) {\n  if (object instanceof EnemyShip) {\n    this.enemyShips.push(object);\n  } else if (object instanceof Bullet) {\n    this.bullets.push(object);\n  } else if (object instanceof Ship) {\n    this.ships.push(object);\n  } else {\n    throw new Error(\"unknown type of object\");\n  }\n};\n\n//checks how many enemy ships there are on the map and adds\n//enemy ship if below max\nGame.prototype.addEnemyShips = function addEnemyShips() {\n  //iterates through the enemyShips array to add enemy ships\n  for (let i = 0; i < Game.NUM_ENEMYSHIPS; i++) {\n    //adds instance of enemy ship\n    this.add(new EnemyShip({ game: this }));\n  }\n};\n\n//adds players ship\nGame.prototype.addShip = function addShip() {\n  const ship = new Ship({\n    pos: this.randomPosition(),\n    game: this\n  });\n\n  this.add(ship);\n\n  return ship;\n};\n\n//concats all objects on screen into an array to be used in\n//checkCollisions method and draw method\nGame.prototype.allObjects = function allObjects() {\n  return [].concat(this.ships, this.enemyShips, this.bullets);\n};\n\n//iterates through all objects and checks for collision\nGame.prototype.checkCollisions = function checkCollisions() {\n  const allObjects = this.allObjects();\n  for (let i = 0; i < allObjects.length; i++) {\n    for (let j = 0; j < allObjects.length; j++) {\n      const obj1 = allObjects[i];\n      const obj2 = allObjects[j];\n\n      if (obj1.isCollidedWith(obj2)) {\n        const collision = obj1.collideWith(obj2);\n        if (collision) return;\n      }\n    }\n  }\n};\n\nGame.prototype.draw = function draw(ctx) {\n  //clears canvas\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\n  ctx.fillStyle = Game.BG_COLOR;\n  //colors background\n  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\n  this.allObjects().forEach(function (object) {\n    object.draw(ctx);\n  });\n};\n\nGame.prototype.isOutOfBounds = function isOutOfBounds(pos) {\n  return (pos[0] < 0) || (pos[1] < 0) ||\n    (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);\n};\n\n//delta is a difference between two coords\nGame.prototype.moveObjects = function moveObjects(delta) {\n  this.allObjects().forEach(function (object) {\n    object.move(delta);\n  });\n};\n\nGame.prototype.randomPosition = function randomPosition() {\n  return [\n    Game.DIM_X * Math.random(),\n    Game.DIM_Y * Math.random()\n  ];\n};\n\nGame.prototype.remove = function remove(object) {\n  if (object instanceof Bullet) {\n    this.bullets.splice(this.bullets.indexOf(object), 1);\n  } else if (object instanceof EnemyShip) {\n    this.enemyShips.splice(this.enemyShips.indexOf(object), 1);\n  } else if (object instanceof Ship) {\n    this.ships.splice(this.ships.indexOf(object), 1);\n  } else {\n    throw new Error(\"unknown type of object\");\n  }\n};\n\nGame.prototype.step = function step(delta) {\n  this.moveObjects(delta);\n  this.checkCollisions();\n};\n\n//!!! will likely remove this function with refactoring  !!!//\n//___________________________________________________________//\nGame.prototype.wrap = function wrap(pos) {\n  return [\n    Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)\n  ];\n};\n//___________________________________________________________//\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function GameView(game, ctx) {\n  this.ctx = ctx;\n  this.game = game;\n  this.ship = this.game.addShip();\n}\n\nGameView.MOVES = {\n  w: [0, -1],\n  a: [-1, 0],\n  s: [0, 1],\n  d: [1, 0],\n};\n\nGameView.prototype.bindKeyHandlers = function bindKeyHandlers() {\n  const ship = this.ship;\n\n  Object.keys(GameView.MOVES).forEach(function (k) {\n    const move = GameView.MOVES[k];\n    key(k, function () { ship.power(move); });\n  });\n\n  key(\"space\", function () { ship.fireBullet(); });\n};\n\n//starts game\nGameView.prototype.start = function start() {\n  this.bindKeyHandlers();\n  this.lastTime = 0;\n  // start the animation by calling helper function\n  requestAnimationFrame(this.animate.bind(this));\n};\n\nGameView.prototype.animate = function animate(time) {\n  const timeDelta = time - this.lastTime;\n\n  this.game.step(timeDelta);\n  //draws canvas\n  this.game.draw(this.ctx);\n  this.lastTime = time;\n\n  // every call to animate requests causes another call to animate\n  requestAnimationFrame(this.animate.bind(this));\n};\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const background = document.getElementById(\"backgroundCanvas\");\n  background.width = Game.DIM_X;\n  background.height = Game.DIM_Y;\n  let ctxBackground = background.getContext('2d')\n  ctxBackground.fillStyle = \"black\";\n\n  // ctxBackground.fillRect(0, 0, 800, 600);\n  const game = new Game();\n  new GameView(game, ctxBackground).start();\n\n  // ctxBackground.beginPath();\n  // ctxBackground.arc(100, 100, 20, 0, 2 * Math.PI, true);\n  // ctxBackground.strokeStyle = \"green\";\n  // ctxBackground.lineWidth = 5;\n  // ctxBackground.stroke();\n  // ctxBackground.fillStyle = \"blue\";\n  // ctxBackground.fill();\n\n  // const foreground = document.getElementById(\"foregroundCanvas\");\n  // const ctxForeground = foreground.getContext(\"2d\");\n  // ctxForeground.beginPath();\n  // ctxForeground.arc(100, 100, .8, 0, 2 * Math.PI, true);\n  // ctxForeground.strokeStyle = \"orange\";\n  // ctxForeground.lineWidth = 5;\n  // ctxForeground.stroke();\n  // ctxForeground.fillStyle = \"yellow\";\n  // ctxForeground.fill();\n});\n\n\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst EnemyShip = __webpack_require__(/*! ./enemy_ship.js */ \"./src/enemy_ship.js\");\n\nwindow.MovingObject = MovingObject;\nwindow.EnemyShip = EnemyShip\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.collideWith = function collideWith(otherObject) {\n  // default do nothing\n};\n\nMovingObject.prototype.draw = function draw(ctx) {\n  ctx.fillStyle = this.color;\n\n  //draws a circle\n  ctx.beginPath();\n  ctx.arc(\n    this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n};\n// Two circles have collided if the distance between their center \n// points is less than the sum of their radii.\nMovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {\n  const centerDist = Util.dist(this.pos, otherObject.pos);\n  return centerDist < (this.radius + otherObject.radius);\n};\n\n\nMovingObject.prototype.isWrappable = true;\n\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\nMovingObject.prototype.move = function move(timeDelta) {\n  // timeDelta is number of milliseconds since last move\n  // if the computer is busy the time delta will be larger\n  // in this case the MovingObject should move farther in this frame\n  // velocity of object is how far it should move in 1/60th of a second\n  const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n    offsetX = this.vel[0] * velocityScale,\n    offsetY = this.vel[1] * velocityScale;\n\n  this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n  if (this.game.isOutOfBounds(this.pos)) {\n    if (this.isWrappable) {\n      this.pos = this.game.wrap(this.pos);\n    } else {\n      this.remove();\n    }\n  }\n};\n\nMovingObject.prototype.remove = function remove() {\n  this.game.remove(this);\n};\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nfunction randomColor() {\n  const hexDigits = \"0123456789ABCDEF\";\n\n  let color = \"#\";\n  for (let i = 0; i < 3; i++) {\n    color += hexDigits[Math.floor((Math.random() * 16))];\n  }\n\n  return color;\n}\n\nfunction Ship(options) {\n  options.radius = Ship.RADIUS;\n  options.vel = options.vel || [0, 0];\n  options.color = options.color || randomColor();\n\n  MovingObject.call(this, options);\n}\n\nShip.RADIUS = 15;\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.fireBullet = function fireBullet() {\n  const norm = Util.norm(this.vel);\n\n  if (norm === 0) {\n    // Can't fire unless moving.\n    return;\n  }\n\n  const relVel = Util.scale(\n    Util.dir(this.vel),\n    Bullet.SPEED\n  );\n\n  const bulletVel = [\n    relVel[0] + this.vel[0], relVel[1] + this.vel[1]\n  ];\n\n  const bullet = new Bullet({\n    pos: this.pos,\n    vel: bulletVel,\n    color: this.color,\n    game: this.game\n  });\n\n  this.game.add(bullet);\n};\n\nShip.prototype.power = function power(impulse) {\n  this.vel[0] += impulse[0];\n  this.vel[1] += impulse[1];\n};\n\nShip.prototype.relocate = function relocate() {\n  this.pos = this.game.randomPosition();\n  this.vel = [0, 0];\n};\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  // Normalize the length of the vector to 1, maintaining direction.\n  dir(vec) {\n    const norm = Util.norm(vec);\n    return Util.scale(vec, 1 / norm);\n  },\n  // Find distance between two points.\n  dist(pos1, pos2) {\n    return Math.sqrt(\n      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n    );\n  },\n  // Find the length of the vector.\n  norm(vec) {\n    return Util.dist([0, 0], vec);\n  },\n  // Return a randomly oriented vector with the given length.\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n  inherits(ChildClass, BaseClass) {\n    ChildClass.prototype = Object.create(BaseClass.prototype);\n    ChildClass.prototype.constructor = ChildClass;\n  },\n\n  wrap(coord, max) {\n    if (coord < 0) {\n      return max - (coord % max);\n    } else if (coord > max) {\n      return coord % max;\n    } else {\n      return coord;\n    }\n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });
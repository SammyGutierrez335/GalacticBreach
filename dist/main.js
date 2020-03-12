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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./js/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./js/game_view.js\");\n\n\n\nlet canvas = document.createElement(\"canvas\");\nlet ctx = canvas.getContext(\"2d\");\ncanvas.width = 960;\ncanvas.height = 480;\ndocument.body.appendChild(canvas);\nconst game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx);\nnew _game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, canvas, ctx).start()\n\n// Background music\nlet audio = new Audio(\"sound/Space Ambience.mp3\")\n// audio.play()\n// audio.pause()\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/enemy.js":
/*!*********************!*\
  !*** ./js/enemy.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemy; });\nclass Enemy {\n  constructor(options) {\n    this.speed = options.speed; // movement in pixels per second\n    this.x = options.x;\n    this.y = options.y;\n    this.height = 64\n    this.width = 64\n    this.imgSrc = options.imgSrc\n    this.offScreen = true\n  }\n\n  renderImg(enemyImage) {\n    enemyImage.src = this.imgSrc;\n  }\n  //checks for inbounds\n  moveEnemy(deltaX, deltaY, direction, canvas) {\n    if (this.x + deltaX === -100) {\n      this.offScreen = false\n    }\n    this.x -= deltaX;\n  }\n}\n\n//# sourceURL=webpack:///./js/enemy.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _spaceship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaceship.js */ \"./js/spaceship.js\");\n/* harmony import */ var _enemy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy.js */ \"./js/enemy.js\");\n\n\n\nclass Game {\n  constructor(canvas, ctx) {\n    this.canvas = canvas\n    this.ctx = ctx\n    this.enemies = [];\n    this.ships = [];\n    this.spaceShipImage = new Image();\n    this.enemyImage = new Image();\n    this.CYCLE_LOOP = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];\n    this.currentLoopIndex = 0;\n    this.frameCount = 0;\n    this.FRAME_LIMIT = 5;\n    // Background image\n    // this.allObjects = this.allObjects.bind(this)\n    this.drawFrame = this.drawFrame.bind(this)\n    this.gameloop = this.gameloop.bind(this)\n  }\n  addEnemy() {\n    let enemy = new _enemy_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      speed: 2,\n      x: 1000,\n      y: 200,\n      imgSrc: \"assets/attackers/atom.png\"\n    })\n    this.enemies.push(enemy)\n    enemy.renderImg(this.enemyImage)\n  };\n\n  //player spaceship\n  addShip() {\n    let spaceShip = new _spaceship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      hasMoved: false,\n      speed: 4,\n      x: 50,\n      y: 200,\n      imgSrc: \"assets/player/playership.png\",\n    })\n    this.ships.push(spaceShip)\n\n    spaceShip.renderImg(this.spaceShipImage)\n  }\n  // allObjects() {\n  //   return [].concat(this.ships, this.enemies);\n  // };\n\n  checkCollision(obj1, obj2) {\n    // const allObjects = this.allObjects();\n    // for (let i = 0; i < allObjects.length; i++) {\n    //   for (let j = 0; j < allObjects.length; j++) {\n    // const obj1 = allObjects[i];\n    // const obj2 = allObjects[j];\n    if (obj1.x < obj2.x + obj2.width &&\n      obj1.x + obj1.width > obj2.x &&\n      obj1.y < obj2.y + obj2.height &&\n      obj1.y + obj1.height > obj2.y) {\n      return true\n    }\n    return false\n  }\n  // }\n  // }\n\n  //(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)\n  //draws a sprite frame dynamically - sprites are 64x64pixels\n\n  drawFrame(frameX, frameY, canvasX, canvasY, enemyX, enemyY) {\n    let canvas = this.canvas\n    let ctx = this.ctx\n    let spaceShip = this.ships[0]\n    let enemy = this.enemies[0]\n    let spaceShipImage = this.spaceShipImage\n    let enemyImage = this.enemyImage\n    let bgImage = new Image();\n    bgImage.src = \"assets/backgrounds/bg1.png\";\n\n    let bgImageFlipped = new Image();\n    bgImageFlipped.src = \"assets/backgrounds/bg1-flipped-edged.png\";\n\n    let bgImageX = 0\n    let bgImageFlippedX = canvas.width\n\n    const SCALE = 1\n    const SCALED_WIDTH = SCALE * 64\n    const SCALED_HEIGHT = SCALE * 64\n    if (bgImageX < -(canvas.width)) {\n      bgImageX = canvas.width\n    }\n    if (bgImageFlippedX < -canvas.width) {\n      bgImageFlippedX = canvas.width\n    }\n    ctx.drawImage(bgImage, bgImageX -= 5, 0)\n    ctx.drawImage(bgImageFlipped, bgImageFlippedX -= 5, 0)\n    ctx.drawImage(spaceShipImage,\n      frameX * spaceShip.width, frameY * spaceShip.height, spaceShip.width, spaceShip.height,\n      canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);\n\n    if (enemy.offScreen) {\n      ctx.drawImage(enemyImage,\n        frameX * enemy.width, frameY * enemy.height, enemy.width, enemy.height,\n        enemyX, enemyY, SCALED_WIDTH, SCALED_HEIGHT);\n    }\n  }\n\n\n\n  // The main game loop\n  gameloop() {\n    let canvas = this.canvas\n    let ctx = this.ctx\n    let enemy = this.enemies[0]\n    let spaceShip = this.ships[0]\n\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    spaceShip.moveShip(canvas)\n    enemy.moveEnemy(enemy.speed, 0, 0, canvas)\n    if (!enemy.offScreen) {\n      setTimeout(function () {\n        enemy.x = 1000\n        enemy.offScreen = true\n      }, 2000);\n    }\n\n    if (this.checkCollision(spaceShip, enemy)) {\n      return\n    }\n\n    this.frameCount++;\n    console.log(this.frameCount)\n    if (this.frameCount >= this.FRAME_LIMIT) {\n      this.frameCount = 0;\n      this.currentLoopIndex++;\n      if (this.currentLoopIndex >= this.CYCLE_LOOP.length) {\n        this.currentLoopIndex = 0;\n      }\n    }\n\n\n\n    this.drawFrame(this.CYCLE_LOOP[this.currentLoopIndex], 0, spaceShip.x, spaceShip.y, enemy.x, enemy.y);\n    window.requestAnimationFrame(this.gameloop);\n  }\n\n}\n\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ }),

/***/ "./js/game_view.js":
/*!*************************!*\
  !*** ./js/game_view.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameView; });\nclass GameView {\n  constructor(game, canvas, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n    this.canvas = canvas\n    this.animate = this.animate.bind(this)\n  }\n  start() {\n    this.game.addShip();\n    this.game.addEnemy();\n    // start the animation\n    requestAnimationFrame(this.animate);\n  }\n\n  animate() {\n    this.game.gameloop();\n    // every call to animate requests causes another call to animates\n  };\n};\n\n\n//# sourceURL=webpack:///./js/game_view.js?");

/***/ }),

/***/ "./js/spaceship.js":
/*!*************************!*\
  !*** ./js/spaceship.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Spaceship; });\nclass Spaceship {\n  constructor(options) {\n    this.speed = options.speed; // movement in pixels per second\n    this.x = options.x;\n    this.y = options.y;\n    this.height = 64\n    this.width = 64\n    this.imgSrc = options.imgSrc\n    this.hasMoved = options.hasMoved\n    this.deltaX = 0\n    this.deltaY = 0\n    this.keyPresses = {}\n    this.keyDownListener = this.keyDownListener.bind(this)\n    this.keyUpListener = this.keyUpListener.bind(this)\n    window.addEventListener('keydown', this.keyDownListener, false);\n    window.addEventListener('keyup', this.keyUpListener, false);\n  }\n\n\n\n  keyDownListener(event) {\n    this.keyPresses[event.key] = true;\n    this.hasMoved = true\n  }\n\n  keyUpListener(event) {\n    this.keyPresses[event.key] = false;\n    this.deltaX = 0\n    this.deltaY = 0\n  }\n\n  renderImg(spaceShipImage) {\n    spaceShipImage.src = this.imgSrc;\n\n  }\n\n\n  moveShip(canvas) {\n    let deltaX = this.speed\n    let deltaY = this.speed\n\n    if (this.keyPresses.w) {\n      this.deltaY = -(deltaY)\n      // moveShip(0, -spaceShip.speed, FLYING_UP)\n    } else if (this.keyPresses.s) {\n      this.deltaY = deltaY\n      // moveShip(0, spaceShip.speed, FLYING_DOWN)\n    }\n    if (this.keyPresses.a) {\n      this.deltaX = -(deltaX)\n      // moveShip(-spaceShip.speed, 0, FLYING_LEFT)\n    } else if (this.keyPresses.d) {\n      this.deltaX = deltaX\n      // moveShip(spaceShip.speed, 0, FLYING_RIGHT)\n    }\n\n    //stop moving if going out of bounds\n    if (this.x + this.deltaX > 0 && this.x + 64 + this.deltaX < canvas.width) {\n      this.x += this.deltaX;\n    }\n    if (this.y + this.deltaY > 0 && this.y + 64 + this.deltaY < canvas.height) {\n      this.y += this.deltaY;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./js/spaceship.js?");

/***/ })

/******/ });
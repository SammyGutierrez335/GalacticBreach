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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spaceship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaceship.js */ \"./js/spaceship.js\");\n/* harmony import */ var _enemy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy.js */ \"./js/enemy.js\");\n\n\n// import KeyBinding from \"./keyBinding\"\n\n// Creates the canvas\nlet canvas = document.createElement(\"canvas\");\nlet ctx = canvas.getContext(\"2d\");\ncanvas.width = 960;\ncanvas.height = 480;\ndocument.body.appendChild(canvas);\n\n// Background music\nlet audio = new Audio(\"sound/Space Ambience.mp3\")\naudio.play()\naudio.pause()\n\n// Background image\n\nlet bgImage = new Image();\nbgImage.src = \"assets/backgrounds/bg1.png\";\n\nlet bgImageFlipped = new Image();\nbgImageFlipped.src = \"assets/backgrounds/bg1-flipped-edged.png\";\n\n\n\n//player spaceship\nlet spaceShip = new _spaceship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  hasMoved: false,\n  speed: 4,\n  x: 50,\n  y: 200,\n  imgSrc: \"assets/player/playership.png\",\n})\n\nlet enemy = new _enemy_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  speed: 2,\n  x: 1000,\n  y: 200,\n  imgSrc: \"assets/attackers/atom.png\"\n})\n\nlet spaceShipImage = new Image();\nspaceShip.renderImg(spaceShipImage)\n\nlet enemyImage = new Image()\nenemy.renderImg(enemyImage)\n\nwindow.requestAnimationFrame(gameLoop)\n\n\nconst WIDTH = 64\nconst HEIGHT = 64\nconst SCALE = 1\nconst SCALED_WIDTH = SCALE * WIDTH\nconst SCALED_HEIGHT = SCALE * HEIGHT\n\nlet bgImageX = 0\n\nlet bgImageFlippedX = canvas.width\n\n//(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)\n//draws a sprite frame dynamically - sprites are 64x64pixels\nfunction drawFrame(frameX, frameY, canvasX, canvasY, enemyX, enemyY) {\n  if (bgImageX < -(canvas.width)) {\n    bgImageX = canvas.width\n  }\n  if (bgImageFlippedX < -canvas.width) {\n    bgImageFlippedX = canvas.width\n  }\n  ctx.drawImage(bgImage, bgImageX -= 5, 0)\n  ctx.drawImage(bgImageFlipped, bgImageFlippedX -= 5, 0)\n\n  ctx.drawImage(spaceShipImage,\n    frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,\n    canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);\n  if (enemy.offScreen) {\n    ctx.drawImage(enemyImage,\n      frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,\n      enemyX, enemyY, SCALED_WIDTH, SCALED_HEIGHT);\n  }\n}\n\n//enemy atom has 24 stack frames\nconst CYCLE_LOOP = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];\nlet currentLoopIndex = 0;\nlet frameCount = 0;\n\nconst FRAME_LIMIT = 5;\n// The main game loop\nfunction gameLoop() {\n\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  spaceShip.moveShip(canvas)\n  enemy.moveEnemy(enemy.speed, 0, 0, canvas)\n  if (!enemy.offScreen) {\n    setTimeout(function () {\n      enemy.x = 1000\n      enemy.offScreen = true\n      console.log()\n    }, 2000);\n  }\n\n  frameCount++;\n  if (frameCount >= FRAME_LIMIT) {\n    frameCount = 0;\n    currentLoopIndex++;\n    if (currentLoopIndex >= CYCLE_LOOP.length) {\n      currentLoopIndex = 0;\n    }\n  }\n\n  drawFrame(CYCLE_LOOP[currentLoopIndex], 0, spaceShip.x, spaceShip.y, enemy.x, enemy.y);\n  window.requestAnimationFrame(gameLoop);\n}\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/enemy.js":
/*!*********************!*\
  !*** ./js/enemy.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemy; });\nclass Enemy {\n  constructor(options) {\n    this.speed = options.speed; // movement in pixels per second\n    this.x = options.x;\n    this.y = options.y;\n    this.imgSrc = options.imgSrc\n    this.offScreen = true\n  }\n\n  renderImg(enemyImage) {\n    enemyImage.src = this.imgSrc;\n  }\n  //checks for inbounds\n  moveEnemy(deltaX, deltaY, direction, canvas) {\n    if (this.x + deltaX === -100) {\n      console.log(\"offscreen\")\n      this.offScreen = false\n    }\n    this.x -= deltaX;\n  }\n}\n\n//# sourceURL=webpack:///./js/enemy.js?");

/***/ }),

/***/ "./js/spaceship.js":
/*!*************************!*\
  !*** ./js/spaceship.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Spaceship; });\nclass Spaceship {\n  constructor(options) {\n    this.speed = options.speed; // movement in pixels per second\n    this.x = options.x;\n    this.y = options.y;\n    this.imgSrc = options.imgSrc\n    this.hasMoved = options.hasMoved\n    this.deltaX = 0\n    this.deltaY = 0\n    this.keyPresses = {}\n    this.keyDownListener = this.keyDownListener.bind(this)\n    this.keyUpListener = this.keyUpListener.bind(this)\n    window.addEventListener('keydown', this.keyDownListener, false);\n    window.addEventListener('keyup', this.keyUpListener, false);\n  }\n\n\n\n  keyDownListener(event) {\n    this.keyPresses[event.key] = true;\n    this.hasMoved = true\n  }\n\n  keyUpListener(event) {\n    this.keyPresses[event.key] = false;\n    this.deltaX = 0\n    this.deltaY = 0\n  }\n\n  renderImg(spaceShipImage) {\n    spaceShipImage.src = this.imgSrc;\n\n  }\n\n\n  moveShip(canvas) {\n    let deltaX = this.speed\n    let deltaY = this.speed\n\n    if (this.keyPresses.w) {\n      this.deltaY = -(deltaY)\n      // moveShip(0, -spaceShip.speed, FLYING_UP)\n    } else if (this.keyPresses.s) {\n      this.deltaY = deltaY\n      // moveShip(0, spaceShip.speed, FLYING_DOWN)\n    }\n    if (this.keyPresses.a) {\n      this.deltaX = -(deltaX)\n      // moveShip(-spaceShip.speed, 0, FLYING_LEFT)\n    } else if (this.keyPresses.d) {\n      this.deltaX = deltaX\n      // moveShip(spaceShip.speed, 0, FLYING_RIGHT)\n    }\n\n\n    if (this.x + this.deltaX > 0 && this.x + 64 + this.deltaX < canvas.width) {\n      this.x += this.deltaX;\n    }\n    if (this.y + this.deltaY > 0 && this.y + 64 + this.deltaY < canvas.height) {\n      this.y += this.deltaY;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./js/spaceship.js?");

/***/ })

/******/ });
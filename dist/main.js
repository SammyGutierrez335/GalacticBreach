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

/***/ "./js/Spaceship.js":
/*!*************************!*\
  !*** ./js/Spaceship.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Spaceship; });\nclass Spaceship {\n  constructor(options) {\n    this.speed = options.speed; // movement in pixels per second\n    this.x = options.x;\n    this.y = options.y;\n    this.imgSrc = options.imgSrc\n    this.ssReady = false;\n  }\n\n  renderImg(spaceShipImage) {\n    spaceShipImage.src = this.imgSrc;\n    spaceShipImage.onload = function () {\n      this.ssReady = true\n    }\n  }\n  //   function moveShip(deltaX, deltaY, direction) {\n  //   if (spaceShip.x + deltaX > 0 && spaceShip.x + SCALED_WIDTH + deltaX < canvas.width) {\n  //     spaceShip.x += deltaX;\n  //   }\n  //   if (spaceShip.y + deltaY > 0 && spaceShip.y + SCALED_HEIGHT + deltaY < canvas.height) {\n  //     spaceShip.y += deltaY;\n  //   }\n  //   currentDirection = direction;\n  // }\n}\n\n\n//# sourceURL=webpack:///./js/Spaceship.js?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Spaceship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spaceship.js */ \"./js/Spaceship.js\");\n\n\n\n// Creates the canvas\nlet canvas = document.createElement(\"canvas\");\nlet ctx = canvas.getContext(\"2d\");\ncanvas.width = 960;\ncanvas.height = 480;\ndocument.body.appendChild(canvas);\n\nlet audio = new Audio(\"sound/Space Ambience.mp3\")\naudio.play()\naudio.pause()\n\n\n\n\n// Background image\nlet bgReady = false;\nlet bgImage = new Image();\nbgImage.src = \"assets/backgrounds/bg1.png\";\n\nbgImage.onload = function () {\n  bgReady = true;\n};\n\n\n\n\n//player spaceship\nlet spaceShip = new _Spaceship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  speed: 3,\n  x: 50,\n  y: 200,\n  imgSrc: \"assets/player/playership.png\",\n})\n\nlet spaceShipImage = new Image();\nspaceShip.renderImg(spaceShipImage)\nwindow.requestAnimationFrame(gameLoop)\n\n\n\n\nlet keyPresses = {};\n\nwindow.addEventListener('keydown', keyDownListener, false);\nfunction keyDownListener(event) {\n  keyPresses[event.key] = true;\n}\n\nwindow.addEventListener('keyup', keyUpListener, false);\nfunction keyUpListener(event) {\n  keyPresses[event.key] = false;\n}\n\n\n\n\nconst WIDTH = 64\nconst HEIGHT = 64\nconst SCALE = 1\nconst SCALED_WIDTH = SCALE * WIDTH\nconst SCALED_HEIGHT = SCALE * HEIGHT\n//(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)\n//draws a sprite frame dynamically - sprites are 64x64pixels\n\nfunction drawFrame(frameX, frameY, canvasX, canvasY) {\n  ctx.drawImage(bgImage, 0, 0)\n  ctx.drawImage(spaceShipImage,\n    frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,\n    canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);\n}\n\n\nconst CYCLE_LOOP = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];\nlet currentLoopIndex = 0;\nlet frameCount = 0;\n// const FLYING_DOWN = 0;\n// const FLYING_UP = 0;\n// const FLYING_LEFT = 0;\n// const FLYING_RIGHT = 0;\n// let currentDirection = FLYING_DOWN;\n\nconst FRAME_LIMIT = 5;\n// The main game loop\nfunction gameLoop() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n  if (keyPresses.w) {\n    // moveShip(0, -spaceShip.speed, FLYING_UP)\n    moveShip(0, -spaceShip.speed, 0, 0)\n  } else if (keyPresses.s) {\n    moveShip(0, spaceShip.speed, 0, 0)\n    // moveShip(0, spaceShip.speed, FLYING_DOWN)\n  }\n  if (keyPresses.a) {\n    moveShip(-spaceShip.speed, 0, 0)\n    // moveShip(-spaceShip.speed, 0, FLYING_LEFT)\n  } else if (keyPresses.d) {\n    moveShip(spaceShip.speed, 0, 0)\n    // moveShip(spaceShip.speed, 0, FLYING_RIGHT)\n  }\n\n  frameCount++;\n  if (frameCount >= FRAME_LIMIT) {\n    frameCount = 0;\n    currentLoopIndex++;\n    if (currentLoopIndex >= CYCLE_LOOP.length) {\n      currentLoopIndex = 0;\n    }\n  }\n\n\n  drawFrame(CYCLE_LOOP[currentLoopIndex], 0, spaceShip.x, spaceShip.y);\n  window.requestAnimationFrame(gameLoop);\n}\n\nfunction moveShip(deltaX, deltaY, direction) {\n  if (spaceShip.x + deltaX > 0 && spaceShip.x + SCALED_WIDTH + deltaX < canvas.width) {\n    spaceShip.x += deltaX;\n  }\n  if (spaceShip.y + deltaY > 0 && spaceShip.y + SCALED_HEIGHT + deltaY < canvas.height) {\n    spaceShip.y += deltaY;\n  }\n  // currentDirection = direction;\n}\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });
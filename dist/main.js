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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./js/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./js/game_view.js\");\n\n\n\nlet canvas = document.createElement(\"canvas\");\nlet ctx = canvas.getContext(\"2d\");\ncanvas.width = 960;\ncanvas.height = 480;\nlet width = canvas.width\nlet height = canvas.width\n\nlet scoreboardCanvas = document.createElement(\"canvas\")\nlet scoreboardCtx = canvas.getContext(\"2d\")\nscoreboardCanvas.width = 960\nscoreboardCanvas.height = 480\nconst game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx, scoreboardCanvas, scoreboardCtx);\n\n//menu\nlet menuImage = new Image()\nmenuImage.src = \"assets/menu/background.png\";\nlet titleImage = new Image();\ntitleImage.src = \"assets/menu/blue/title.png\";\n// let shipImage = new Image()\n// shipImage.src = \"assets/player/playership.png\";\n// let playImage = new Image();\n// playImage.src = \"assets/menu/blue/play.png\";\n// let instructionsImage = new Image();\n// instructionsImage.src = \"assets/menu/blue/instructions.png\";\n// let settingsImage = new Image();\n// settingsImage.src = \"assets/menu/blue/settings.png\";\n// let creditsImage = new Image();\n// creditsImage.src = \"assets/menu/blue/credits.png\";\n\nlet mouseX;\nlet mouseY;\nlet buttonX = [300, -20, 149, 160];\nlet buttonY = [140, 220, 300, 380];\nlet buttonWidth = [96, 260, 182, 160];\nlet buttonHeight = [40, 40, 40, 40];\nlet shipX = [0, 0];\nlet shipY = [0, 0];\nlet shipWidth = 64;\nlet shipHeight = 64;\n\nlet shipVisible = true;\nlet shipSize = shipWidth;\nlet shipRotate = 0;\n\nlet frames = 32;\nlet timerId = 0;\nlet fadeId = 0;\nlet time = 0.0;\n\ntimerId = setInterval(update, 1000 / frames);\n\nfunction update() {\n  clear();\n  move();\n  draw();\n}\n\nfunction clear() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n}\n\nlet backgroundY = 0;\nlet speed = .4;\nlet bounce = false\nfunction move() {\n  backgroundY -= speed;\n  if (backgroundY < -200) {\n    speed = -(speed);\n    bounce = true\n  }\n  if (bounce && (backgroundY > 0)) {\n    speed = -(speed);\n  }\n  if (shipSize === shipWidth) {\n    shipRotate = -1;\n  }\n  if (shipSize === 0) {\n    shipRotate = 1;\n  }\n  shipSize += shipRotate;\n}\n\n\n\nfunction draw() {\n  ctx.fillRect(75, 0, 800, height, \"black\");\n  ctx.drawImage(menuImage, 75, backgroundY);\n  ctx.drawImage(titleImage, 75, 0 + 150, 820, 200);\n  // ctx.drawImage(playImage, buttonX[0] + 20, buttonY[0] + 75);\n  // ctx.drawImage(instructionsImage, buttonX[1], buttonY[1]);\n  // ctx.drawImage(settingsImage, buttonX[2], buttonY[2]);\n  // ctx.drawImage(creditsImage, buttonX[3], buttonY[3]);\n}\n\n// window.addEventListener('keydown', keyDownListener, false);\ncanvas.addEventListener(\"mousemove\", checkPos);\n\n// function keyDownListener(event) {\n//   if (event.key === \"Enter\" || \"Return\") {\n//     new GameView(game, canvas, ctx).start()\n//   }\n// }\n\n\n//checks mouseEvent's page or offset depending on browser\nfunction checkPos(mouseEvent) {\n  if (mouseEvent.pageX || mouseEvent.pageY == 0) {\n    mouseX = mouseEvent.pageX - this.offsetLeft;\n    mouseY = mouseEvent.pageY - this.offsetTop;\n  } else if (mouseEvent.offsetX || mouseEvent.offsetY == 0) {\n    mouseX = mouseEvent.offsetX;\n    mouseY = mouseEvent.offsetY;\n  }\n\n  for (let i = 0; i < buttonX.length; i++) {\n    if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]) {\n      if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]) {\n        shipVisible = true;\n        shipX[0] = buttonX[i] - (shipWidth / 2) - 2;\n        shipY[0] = buttonY[i] + 2;\n        shipX[1] = buttonX[i] + buttonWidth[i] + (shipWidth / 2);\n        shipY[1] = buttonY[i] + 2;\n      }\n    } else {\n      shipVisible = false;\n    }\n  }\n}\ncanvas.addEventListener(\"mouseup\", checkClick);\nfunction checkClick(mouseEvent) {\n  if (mouseX > 0 && mouseY > 0) {\n    let gameView = new _game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, canvas, ctx)\n    canvas.removeEventListener(\"mouseup\", checkClick);\n    gameView.start()\n  }\n  // //       \n  // for (let i = 0; i < buttonX.length; i++) {\n  //   if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]) {\n  //     if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]) {\n  //       new GameView(game, canvas, ctx).start()\n  //       fadeId = setInterval(\"this.fadeOut()\", 1000 / frames);\n  //       clearInterval(timerId);\n  // //       canvas.removeEventListener(\"mousemove\", checkPos);\n  // //       canvas.removeEventListener(\"mouseup\", checkClick);\n  // //     }\n  // //   }\n  // }\n}\n// function fadeOut() {\n//   context.fillStyle = \"rgba(0,0,0, 0.2)\";\n//   context.fillRect(0, 0, width, height);\n//   time += 0.1;\n//   if (time >= 2) {\n//     clearInterval(fadeId);\n//     time = 0;\n//     timerId = setInterval(\"update()\", 1000 / frames);\n//     canvas.addEventListener(\"mousemove\", checkPos);\n//     canvas.addEventListener(\"mouseup\", checkClick);\n//   }\n// }\n\n\n\nlet canvasElement = document.body.appendChild(canvas);\n// let scoreboardElement = document.body.appendChild(scoreboardCanvas);\ncanvasElement.setAttribute(\"class\", \"canvas\");\n// scoreboardElement.setAttribute(\"class\", \"scoreboard-canvas\")\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/bullet.js":
/*!**********************!*\
  !*** ./js/bullet.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bullet; });\nclass Bullet {\n  constructor(options) {\n    this.speed = options.speed; // movement in pixels per second\n    // this.cycleLoop = [0]\n    this.x = options.x;\n    this.y = options.y;\n    this.height = 32\n    this.width = 32\n    this.imgSrc = options.imgSrc\n  }\n\n  renderImg(bulletImage) {\n    bulletImage.src = this.imgSrc;\n  }\n\n  //checks for inbounds\n  moveBullet(deltaX, deltaY, direction, canvas) {\n    this.x += deltaX;\n  }\n}\n\n//# sourceURL=webpack:///./js/bullet.js?");

/***/ }),

/***/ "./js/enemy.js":
/*!*********************!*\
  !*** ./js/enemy.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemy; });\nclass Enemy {\n  constructor(options) {\n    this.speed = options.speed; // movement in pixels per second\n    //need to find a way to make cycleLoop more dynamic\n    // this.cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];\n    this.x = options.x;\n    this.y = options.y;\n    this.height = 64\n    this.width = 64\n    this.enemyImage = options.enemyImage\n    this.frames = options.frames\n    this.imgSrc = options.imgSrc\n    this.offScreen = true\n    this.hit = [false, null]\n  }\n\n  renderImg(enemyImage, imgSrc = this.imgSrc) {\n    enemyImage.src = imgSrc\n  }\n  //checks for inbounds\n  moveEnemy(deltaX) {\n    if (this.x + deltaX === -100) {\n      this.offScreen = true\n    }\n    this.x -= deltaX;\n  }\n}\n\n//# sourceURL=webpack:///./js/enemy.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _spaceship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaceship.js */ \"./js/spaceship.js\");\n/* harmony import */ var _enemy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy.js */ \"./js/enemy.js\");\n/* harmony import */ var _bullet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bullet.js */ \"./js/bullet.js\");\n\n\n\n\nclass Game {\n  constructor(canvas, ctx, backgroundCanvas, backgroundCtx) {\n    this.canvas = canvas\n    this.ctx = ctx\n    this.backgroundCanvas = backgroundCanvas\n    this.backgroundCtx = backgroundCtx\n    this.CYCLE_LOOP = []\n    this.frameCount = 0;\n    this.FRAME_LIMIT = 5;\n    this.currentLoopIndex = 0;\n    this.spaceshipImage = new Image();\n    this.ships = [];\n    this.backgroundPhase\n    this.enemies = [];\n    this.bulletImage = new Image();\n    this.bullets = [];\n    this.bgImageX = 0;\n    this.bgImageFlippedX = canvas.width\n    this.bgImageSrc = \"assets/backgrounds/bg1.png\"\n    this.bgImageSrc2 = \"assets/backgrounds/bg1-flipped-edged.png\"\n    this.shotsFired = false\n    this.spaceAmbience = null\n    this.battleMusic = new Audio(\"assets/soundfx/space-battle.mp3\")\n    this.levelUpSfx = new Audio(\"assets/soundfx/fx/incoming-radar(louder).mp3\")\n    this.damage1 = new Audio(\"assets/soundfx/fx/damage-1.mp3\")\n    this.damage2 = new Audio(\"assets/soundfx/fx/damage-2.mp3\")\n    this.damage3 = new Audio(\"assets/soundfx/fx/damage-3.mp3\")\n    this.drawFrame = this.drawFrame.bind(this)\n    this.gameloop = this.gameloop.bind(this)\n    this.remove = this.remove.bind(this)\n    this.addEnemy = this.addEnemy.bind(this)\n    this.maxEnemies = 3\n    this.score = 0\n    this.playerLevel = 1\n    this.numHits = 0\n    this.playerInvicibility = false\n    this.slippynoooooo = false\n  }\n\n\n\n  addEnemy() {\n    if (this.enemies.length < this.maxEnemies) {\n      let imgSrc = [\"assets/attackers/atom.png\", \"assets/attackers/mohican.png\", \"assets/attackers/satelite.png\"]\n      let frames = [24, 24, 16]\n      let randomIndex = Math.floor(Math.random() * this.playerLevel)\n      let enemyImage = new Image();\n      let enemy = new _enemy_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        speed: Math.ceil(Math.random() * (4 * (randomIndex || 1))),\n        x: this.getRandomX(),\n        y: this.getRandomY(),\n        frames: frames[randomIndex],\n        enemyImage: enemyImage,\n        imgSrc: imgSrc[randomIndex]\n      })\n      \n      enemy.renderImg(enemyImage)\n      \n      //this is used to prevent the enemy from being pushed prior to having the enemy image loaded.\n      //prevents DOMException: Failed to execute 'drawImage' on 'CanvasRenderingContext2D': \n      //The HTMLImageElement provided is in the 'broken' state.\n      enemy.enemyImage.onload = () => {\n        this.enemies.push(enemy)\n      };\n    }\n  };\n\n  getRandomX() {\n    return Math.random() * (1200 - this.canvas.width) + this.canvas.width\n  }\n  getRandomY() {\n    return Math.random() * (440 - 0)\n  }\n\n  //player spaceship\n\n  addShip() {\n    this.spaceAmbience = new Audio(\"assets/soundfx/Space Ambience.mp3\")\n    this.spaceAmbience.play()\n    let spaceship = new _spaceship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      hasMoved: false,\n      speed: 4,\n      x: 50,\n      y: 200,\n      imgSrc: \"assets/player/playership.png\",\n    })\n    this.ships.push(spaceship)\n    spaceship.renderImg(this.spaceshipImage)\n  }\n\n  addBullet(bullet) {\n    this.bullets.push(bullet)\n    bullet.renderImg(this.bulletImage)\n    let audio = new Audio(\"assets/soundfx/fx/shot-1.mp3\")\n    audio.play()\n    if (!this.shotsFired) {\n      this.shotsFired = true\n      this.spaceAmbience.pause()\n      this.battleMusic.play()\n    }\n  }\n\n  checkCollision(obj1, obj2) {\n    if (obj1.x < obj2.x + obj2.width &&\n      obj1.x + obj1.width > obj2.x &&\n      obj1.y < obj2.y + obj2.height &&\n      obj1.y + obj1.height > obj2.y) {\n      return true\n    }\n    return false\n  }\n\n\n\n\n  //(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)\n  //draws a sprite frame dynamically - sprites are 64x64pixels\n\n  remove(object, bullet) {\n    if (object instanceof _bullet_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      this.bullets.splice(this.bullets.indexOf(object), 1);\n    } else if (object instanceof _enemy_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.enemies.splice(this.enemies.indexOf(object), 1);\n      if (bullet) {\n        this.remove(bullet)\n        this.score += 1\n      }\n\n      if (this.score === this.playerLevel * 10) {\n        this.playerLevel += 1\n        this.maxEnemies += 2\n        this.levelUpSfx.play()\n      }\n    } else if (object instanceof _spaceship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      //eventually lose a life/gameover here...\n      this.ships.shift()\n    } else {\n      throw new Error(\"unknown type of object\");\n    }\n  }\n\n  takeDamage() {\n    this.numHits += 1;\n    this.playerInvicibility = false\n    if (this.numHits === 1) {\n      this.damage1.play();\n    } else if (this.numHits === 2) {\n      this.damage2.play();\n    } else if (this.numHits === 3) {\n      this.damage3.play();\n    } else {\n      this.slippynoooooo = true\n    }\n  }\n\n\n  drawFrame(frameX, frameY) {\n    let ctx = this.ctx\n    let backgroundCtx = this.backgroundCtx\n    let spaceship = this.ships[0]\n    let spaceshipImage = this.spaceshipImage\n    let bulletImage = this.bulletImage\n    const SCALE = .9\n    const SCALED_WIDTH = SCALE * 64\n    const SCALED_HEIGHT = SCALE * 64\n    \n    // // background\n    let bgImage = new Image();\n    let bgImageFlipped = new Image();\n    bgImage.src = this.bgImageSrc\n    bgImageFlipped.src = this.bgImageSrc2\n    this.backgroundRendering = false\n    this.background2Rendering = false\n    //cycles background animation\n    if (this.bgImageX < -(this.canvas.width)) {\n      this.bgImageX = this.canvas.width\n      this.backgroundRendering = true\n    }\n    if (this.bgImageFlippedX < -this.canvas.width) {\n      this.bgImageFlippedX = this.canvas.width\n      this.background2Rendering = true\n    }\n\n    if (this.playerLevel > 5 && this.backgroundRendering) {\n      this.bgImageSrc= \"assets/backgrounds/bg2.png\";\n    }\n\n    if (this.playerLevel > 5 && this.background2Rendering) {\n      this.bgImageSrc2 = \"assets/backgrounds/bg2.png\";\n    }\n\n    if (this.playerLevel > 15 && this.backgroundRendering) {\n      this.bgImageSrc = \"assets/backgrounds/bg3.png\";\n    }\n\n    if (this.playerLevel > 15 && this.background2Rendering) {\n      this.bgImageSrc2 = \"assets/backgrounds/bg3.png\";\n    }\n\n\n      ctx.drawImage(bgImage, this.bgImageX -= 5 + this.playerLevel, 0)\n      ctx.drawImage(bgImageFlipped, this.bgImageFlippedX -= 5 + this.playerLevel, 0)\n\n    \n    \n    ctx.fillStyle = \"#FFFFFF\";\n    ctx.font = \"20px fantasy\"\n    \n    // ctx.fillText('Controls : ', 900, 50)\n    // ctx.fillText('Move Up : W' , 900, 50)\n    // ctx.fillText('Move Down : S' , 900, 50)\n    // ctx.fillText('Move Left : A' , 900, 50)\n    // ctx.fillText('Move Right : D' , 900, 50)\n    // ctx.fillText('Fire : Spacebar' , 900, 50)\n    // ctx.fillText('Click on Screen to start', 900, 50)\n    // ctx.fillText('Refresh browser to restart', 900, 50)\n\n    ctx.fillText('Score : ' + this.score, 50, 50)\n    ctx.fillText('Level : ' + this.playerLevel, 850, 50)\n\n\n    //renders ship\n    ctx.drawImage(spaceshipImage,\n      (frameX % 16) * spaceship.width, frameY * spaceship.height, spaceship.width, spaceship.height,\n      spaceship.x, spaceship.y, SCALED_WIDTH, SCALED_HEIGHT);\n    \n    //enemy rendering\n    if (this.enemies.length > 0) {\n      if (this.enemies.length <= this.maxEnemies) {\n        let enemyImage\n        for (let i = 0; i < this.enemies.length; i++) {\n          let enemy = this.enemies[i]\n          if (enemy.hit[0]) {\n            this.remove(enemy, enemy.hit[1])\n            let prevSrc = enemy.enemyImage.src\n            enemy.enemyImage = new Image()\n            enemy.enemyImage.src = prevSrc.split(\".png\").join(\"_ghosted.png\")\n            enemy.enemyImage.onload = () => {return}\n          }\n          enemyImage = enemy.enemyImage\n          enemy.moveEnemy(enemy.speed, 0, 0, this.canvas)\n          if (this.checkCollision(this.ships[0], enemy) && !this.playerInvicibility) {\n            setTimeout(this.takeDamage(), 5000)\n          }\n          ctx.drawImage(enemyImage,\n            (frameX % enemy.frames) * enemy.width, frameY * enemy.height, enemy.width, enemy.height,\n            enemy.x, enemy.y, SCALED_WIDTH, SCALED_HEIGHT)\n          if (enemy.x < 0) {\n            this.remove(enemy, null)\n          }\n        }\n      }\n    }\n\n    //bullet logic\n    if (this.bullets.length >= 0) {\n      for (let i = 0; i < this.bullets.length; i++) {\n        let bullet = this.bullets[i]\n        bullet.moveBullet(bullet.speed, 0, 0, this.canvas)\n\n        ctx.drawImage(bulletImage,\n          (frameX % 4), 0, 32, 32,\n          bullet.x, bullet.y, 32, 32)\n\n        //despawns bullet when it goes out of bounds\n        if (bullet.x > this.canvas.width) {\n          this.remove(bullet)\n        }\n\n        //checks if bullets hit enemies\n        for (let i = 0; i < this.enemies.length; i++) {\n          let enemy = this.enemies[i]\n          if (this.checkCollision(enemy, bullet)) {\n            new Audio(\"assets/soundfx/fx/explosions/very-short-quiet-bass-boost.mp3\").play()\n            enemy.hit = [true, bullet]\n          }\n        }\n      }\n    }\n    \n  }\n\n\n\n  // The main game loop should run about 60 times per second\n  gameloop() {\n\n    let spaceship = this.ships[0]\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n    if (this.enemies.length < this.maxEnemies) {\n      this.addEnemy()\n    }\n\n    //fires bullet\n    if (spaceship.keyPresses[\" \"]) {\n      let bullet = new _bullet_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        speed: 6,\n        x: spaceship.x + 13,\n        y: spaceship.y + 5,\n        imgSrc: \"assets/fx/bullet_blue.png\",\n      })\n      spaceship.keyPresses[\" \"] = false\n      this.addBullet(bullet)\n    }\n\n    spaceship.moveShip(this.canvas)\n\n    //increments frames/loopindex for sprite animation\n    this.frameCount++;\n    if (this.frameCount >= this.FRAME_LIMIT) {\n      this.frameCount = 0;\n\n      this.currentLoopIndex++;\n      if (this.currentLoopIndex >= this.CYCLE_LOOP.length) {\n        this.currentLoopIndex = 0;\n      }\n    }\n\n    this.drawFrame(this.CYCLE_LOOP[this.currentLoopIndex], 0)\n    let myReq = window.requestAnimationFrame(this.gameloop);\n    if (this.slippynoooooo) {\n      this.ctx.fillStyle = \"#000000\"\n      // this.ctx.fillStyle = \"#FFFFFF\";\n      this.ctx.font = \"20px fantasy\"\n      this.ctx.fillText('Game Over : ',  400, 200)\n      this.ctx.fillText('Your Score : ' + this.score, 400, 300)\n      this.ctx.fillText('Your Level : ' + this.playerLevel, 400, 400)\n      window.cancelAnimationFrame(myReq)\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ }),

/***/ "./js/game_view.js":
/*!*************************!*\
  !*** ./js/game_view.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameView; });\nclass GameView {\n  constructor(game, canvas, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n    this.canvas = canvas\n    this.animate = this.animate.bind(this)\n  }\n  start() {\n    this.game.addShip();\n    // start the animation\n    for (let i = 0; i < 384 ; i++) {\n      this.game.CYCLE_LOOP.push(i);\n    }\n    requestAnimationFrame(this.animate);\n  }\n\n  animate() {\n    //sets up cyle_loop for sprites\n\n\n    // every call to animate requests causes another call to animates\n    let results = this.game.gameloop();\n    return results\n  };\n};\n\n\n//# sourceURL=webpack:///./js/game_view.js?");

/***/ }),

/***/ "./js/spaceship.js":
/*!*************************!*\
  !*** ./js/spaceship.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Spaceship; });\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet */ \"./js/bullet.js\");\n\n\nclass Spaceship {\n  constructor(options) {\n    this.speed = options.speed; // movement in pixels per second\n    this.x = options.x;\n    this.y = options.y;\n    this.height = 64\n    this.width = 64\n    // this.cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]\n    this.imgSrc = options.imgSrc\n    this.deltaX = 0\n    this.deltaY = 0\n    this.keyPresses = {}\n    this.keyDownListener = this.keyDownListener.bind(this)\n    this.keyUpListener = this.keyUpListener.bind(this)\n    window.addEventListener('keydown', this.keyDownListener, false);\n    window.addEventListener('keyup', this.keyUpListener, false);\n\n  }\n\n\n\n  keyDownListener(event) {\n    this.keyPresses[event.key] = true;\n  }\n\n  keyUpListener(event) {\n    this.keyPresses[event.key] = false;\n    this.deltaX = 0\n    this.deltaY = 0\n  }\n\n  renderImg(spaceShipImage) {\n    spaceShipImage.src = this.imgSrc;\n\n  }\n\n\n  moveShip(canvas) {\n    let deltaX = this.speed\n    let deltaY = this.speed\n\n    if (this.keyPresses.w) {\n      this.deltaY = -(deltaY)\n      // moveShip(0, -spaceShip.speed, FLYING_UP)\n    } else if (this.keyPresses.s) {\n      this.deltaY = deltaY\n      // moveShip(0, spaceShip.speed, FLYING_DOWN)\n    }\n    if (this.keyPresses.a) {\n      this.deltaX = -(deltaX)\n      // moveShip(-spaceShip.speed, 0, FLYING_LEFT)\n    } else if (this.keyPresses.d) {\n      this.deltaX = deltaX\n      // moveShip(spaceShip.speed, 0, FLYING_RIGHT)\n    }\n\n    //stop moving if going out of bounds\n    if (this.x + this.deltaX > 0 && this.x + 64 + this.deltaX < canvas.width) {\n      this.x += this.deltaX;\n    }\n    if (this.y + this.deltaY > 0 && this.y + 64 + this.deltaY < canvas.height) {\n      this.y += this.deltaY;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./js/spaceship.js?");

/***/ })

/******/ });
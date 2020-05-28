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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ \"./js/game_view.js\");\n\n\n\n\nlet canvas = document.createElement(\"canvas\");\nlet ctx = canvas.getContext(\"2d\");\ncanvas.width = 960;\ncanvas.height = 480;\nlet height = canvas.height\n\n\nlet rightCanvas = document.createElement(\"canvas\")\nlet rightCanvasCtx = canvas.getContext(\"2d\")\nrightCanvas.width = 220\nrightCanvas.height = 480\n\n\n\n\nconst playButton = document.getElementById('play-button');\n\nplayButton.addEventListener(\"click\", () =>  {\n  playButton.className += \" hide\"\n  new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx, rightCanvas, rightCanvasCtx).start()\n})\n\n\n\n//title assets\nlet titleBackground= new Image()\ntitleBackground.src = \"assets/menu/background.png\";\nlet titleImage = new Image();\ntitleImage.src = \"assets/menu/blue/title.png\";\n\n//controls\n\nlet frames = 32;\nlet timerId = 0;\nlet intervalId = 0;\n\n//animates background\ntimerId = setInterval(update, 1000 / frames);\n\n\nfunction update() {\n  clear(ctx);\n  move();\n  draw();\n}\n\nfunction clear(ctx) {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n}\n\nlet backgroundY = 0;\nlet speed = .4;\nlet bounce = false\n\nfunction move() {\n  backgroundY -= speed;\n  if (backgroundY < -200) {\n    speed = -(speed);\n    bounce = true\n  }\n  if (bounce && (backgroundY > 0)) {\n    speed = -(speed);\n  }\n}\n\nfunction draw() {\n  ctx.fillRect(75, 0, 800, height, \"black\");\n  ctx.drawImage(titleBackground, 75, backgroundY);\n  ctx.drawImage(titleImage, 75, 0 + 150, 820, 200);\n}\n\nwindow.addEventListener('keydown', keyDownListener, false);\n\nfunction keyDownListener(event) {\n  if (event.key === \"Enter\" || event.key === \"Return\") {\n    window.removeEventListener(\"keydown\", keyDownListener)\n    fadeOut(ctx)\n    playButton.className += \" hide\"\n    new _game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx, rightCanvas, rightCanvasCtx).start()\n  }\n}\n\nfunction fadeOut() {\n    intervalId = setInterval(update, 1000 / frames);\n}\n\n\n\nlet canvasElement = document.body.appendChild(canvas);\nlet rightCanvasElement = document.body.appendChild(rightCanvas);\n\nrightCanvasElement.setAttribute(\"class\", \"scoreboard-canvas\")\ncanvasElement.setAttribute(\"class\", \"canvas\");\n\n\n//# sourceURL=webpack:///./js/app.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemy; });\nclass Enemy {\n  constructor(options) {\n    this.speed = options.speed; // movement in pixels per second\n    //need to find a way to make cycleLoop more dynamic\n    // this.cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];\n    this.x = options.x;\n    this.y = options.y;\n    this.height = 64\n    this.width = 64\n    this.enemyImage = options.enemyImage\n    this.frames = options.frames\n    this.imgSrc = options.imgSrc\n    this.hit = [false, null]\n    this.despawning = [false, 0, 0]\n  }\n\n  renderImg(enemyImage, imgSrc = this.imgSrc) {\n    enemyImage.src = imgSrc\n  }\n\n  \n  //checks for inbounds\n  moveEnemy(deltaX, spaceX, spaceshipY) {\n    this.x -= deltaX;\n  \n    if (spaceshipY) {\n      if (spaceshipY > this.y)\n          this.y += .5\n      else {\n          this.y -= .5\n      }\n    }\n  }\n\n\n}\n\n//# sourceURL=webpack:///./js/enemy.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _spaceship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaceship.js */ \"./js/spaceship.js\");\n/* harmony import */ var _enemy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy.js */ \"./js/enemy.js\");\n/* harmony import */ var _bullet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bullet.js */ \"./js/bullet.js\");\n\n\n\n\nclass Game {\n  constructor(canvas, ctx, rightCanvas, rightCanvasCtx) {\n    this.canvas = canvas\n    this.ctx = ctx\n    this.rightCanvas = rightCanvas\n    this.rightCanvasCtx = rightCanvasCtx\n    this.CYCLE_LOOP = []\n    this.currentLoopIndex = 0;\n    this.frameCount = 0;\n    this.FRAME_LIMIT = 5;\n    this.spaceshipImage = new Image();\n    this.ships = [];\n    this.backgroundPhase\n    this.enemies = [];\n    this.bulletImage = new Image();\n    this.bullets = [];\n    this.maxbullets = 3\n    this.bgImageX = 0;\n    this.bgImageFlippedX = canvas.width\n    this.moonX =1800\n    this.asteroidX = 1000\n    this.bgImageSrc = \"assets/backgrounds/bg1.png\"\n    this.bgImageSrc2 = \"assets/backgrounds/bg1-flipped-edged.png\"\n    this.shotsFired = false\n    this.spaceAmbience = new Audio(\"assets/soundfx/Space Ambience.mp3\")\n    this.spaceAmbienceOn = true\n    this.battleMusic = new Audio(\"assets/soundfx/space-battle(quieter).mp3\")\n    this.levelUpSfx = new Audio(\"assets/soundfx/fx/incoming-radar(louder).mp3\")\n    this.sfxMuted = false\n    this.sfxVolume = 1\n    this.musicVolume = 1\n    this.damage1 = new Audio(\"assets/soundfx/fx/damage-1.mp3\")\n    this.damage2 = new Audio(\"assets/soundfx/fx/damage-2.mp3\")\n    this.damage3 = new Audio(\"assets/soundfx/fx/damage-3.mp3\")\n    this.drawFrame = this.drawFrame.bind(this)\n    this.gameloop = this.gameloop.bind(this)\n    this.remove = this.remove.bind(this)\n    this.addEnemy = this.addEnemy.bind(this)\n    this.checkLevelUp = this.checkLevelUp.bind(this)\n    this.handleAudioToggles = this.handleAudioToggles.bind(this)\n    this.checkMusic = this.checkMusic.bind(this)\n    this.maxEnemies = 3\n    this.score = 0\n    this.playerLevel = 1\n    this.lives = 3\n    this.slippynoooooo = false\n  }\n\n\n\n\n\n  addEnemy() {\n      let imgSrc = [\"assets/attackers/atom.png\", \"assets/attackers/mohican.png\", \"assets/attackers/satelite.png\"]\n      let frames = [24, 24, 16]\n      let randomIndex = Math.floor(Math.random() * this.playerLevel)\n      let enemyImage = new Image();\n      let enemy = new _enemy_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        speed: Math.ceil(Math.random() * (4 * (randomIndex || 1))),\n        x: this.getRandomX(),\n        y: this.getRandomY(),\n        frames: frames[randomIndex],\n        enemyImage: enemyImage,\n        imgSrc: imgSrc[randomIndex]\n      })\n      \n      enemy.renderImg(enemyImage)\n      \n      //this is used to prevent the enemy from being pushed prior to having the enemy image loaded.\n      //prevents DOMException: Failed to execute 'drawImage' on 'CanvasRenderingContext2D': \n      //The HTMLImageElement provided is in the 'broken' state.\n      enemy.enemyImage.onload = () => {\n        console.log(\"image has loaded\")\n        this.enemies.push(enemy)\n      };\n  };\n\n  getRandomX() {\n    return Math.random() * (1200 - this.canvas.width) + this.canvas.width\n  }\n\n  getRandomY() {\n    return Math.random() * (440 - 0)\n  }\n\n  //player spaceship\n\n  addShip() {\n    this.spaceAmbience.volume = this.musicVolume\n    this.spaceAmbience.play()\n    let spaceship = new _spaceship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      hasMoved: false,\n      speed: 4,\n      x: 50,\n      y: 200,\n      imgSrc: \"assets/player/playership.png\",\n    })\n    this.ships.push(spaceship)\n    spaceship.renderImg(this.spaceshipImage)\n  }\n\n  addBullet(bullet) {\n    this.bullets.push(bullet)\n    bullet.renderImg(this.bulletImage)\n    let bulletSfx = new Audio(\"assets/soundfx/fx/shot-1.mp3\")\n    bulletSfx.volume = this.sfxVolume\n    bulletSfx.play()\n\n    \n    if (!this.shotsFired) {\n      this.shotsFired = true\n      this.spaceAmbience.pause()\n      this.spaceAmbience.currentTime = 0\n      this.battleMusic.volume = this.musicVolume\n      this.battleMusic.play()\n    }\n  }\n\n  checkCollision(obj1, obj2) {\n    if (obj1 instanceof _enemy_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] && obj1.despawning[0]) return false;\n    if (obj2 instanceof _enemy_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] && obj2.despawning[0]) return false;\n\n    if (obj1.x < obj2.x + obj2.width &&\n      obj1.x + obj1.width > obj2.x &&\n      obj1.y < obj2.y + obj2.height &&\n      obj1.y + obj1.height > obj2.y) {\n      return true\n    }\n    return false\n  }\n\n\n  //(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)\n  //draws a sprite frame dynamically - sprites are 64x64pixels\n\n  remove(object, bullet) {\n    if (object instanceof _bullet_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      this.bullets.splice(this.bullets.indexOf(object), 1);\n    } else if (object instanceof _enemy_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.enemies.splice(this.enemies.indexOf(object), 1);\n      if (bullet) {\n        this.remove(bullet)\n        this.score += 1\n      }\n      this.checkLevelUp()\n    } else if(object === true) {\n      this.score += 1\n      this.remove(bullet)\n      this.checkLevelUp()\n    }\n    else if (object instanceof _spaceship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      //eventually lose a life/gameover here...\n      this.ships.shift()\n    } else {\n      throw new Error(\"unknown type of object\");\n    }\n  }\n\n  checkMusic() {\n      this.spaceAmbience.volume = this.musicVolume\n      this.spaceAmbience.play()\n  }\n\n  handleAudioToggles() {\n   this.sfxMuted ? this.sfxVolume = 0 : this.sfxVolume = 1  \n    if (this.musicMuted && !this.shotsFired) {\n      this.spaceAmbience.pause()\n    } else if (!this.musicMuted && !this.shotsFired) { \n      this.spaceAmbience.play()\n    } else if (this.musicMuted && this.shotsFired) {\n      this.battleMusic.pause()\n    } else if (!this.musicMuted && this.shotsFired) {\n      this.battleMusic.play()\n    }\n  }\n\n  checkLevelUp() {\n    this.levelUpSfx.volume = this.sfxVolume\n      if (this.score === (this.playerLevel) * 10) {\n      this.playerLevel += 1\n      this.maxEnemies += 2\n      this.levelUpSfx.play()\n      }\n  }\n\n\n  takeDamage() {\n    this.ships[0].isInvincible = true\n    if (this.lives === 3) {\n      `this.damage1`.volume = this.sfxVolume\n      this.damage1.play();\n    } else if (this.lives === 2) {\n      this.damage2.volume = this.sfxVolume\n      this.damage2.play();\n    } else if (this.lives === 1) {\n      this.damage3.volume = this.sfxVolume\n      this.damage3.play();\n    } else if (this.lives <= 0) {\n      this.slippynoooooo = true\n    }\n    this.lives -= 1;\n  }\n\n\n  drawFrame(frameX, frameY) {\n    let ctx = this.ctx\n    // // background\n    let bgImage = new Image();\n    let bgImageFlipped = new Image();\n    bgImage.src = this.bgImageSrc\n    bgImageFlipped.src = this.bgImageSrc2\n    this.backgroundRendering = false\n    this.background2Rendering = false\n\n    //cycles background animation\n    if (this.bgImageX < -(this.canvas.width)) {\n      this.bgImageX = this.canvas.width\n      this.backgroundRendering = true\n    }\n    if (this.bgImageFlippedX < -this.canvas.width) {\n      this.bgImageFlippedX = this.canvas.width\n      this.background2Rendering = true\n    }\n\n\n    //waits until a background is about to rerender to replace with new background image.\n    if (this.playerLevel > 5 && this.backgroundRendering) {\n      this.bgImageSrc= \"assets/backgrounds/bg2.png\";\n    }\n\n    if (this.playerLevel > 5 && this.background2Rendering) {\n      this.bgImageSrc2 = \"assets/backgrounds/bg2.png\";\n    }\n\n    if (this.playerLevel > 15 && this.backgroundRendering) {\n      this.bgImageSrc = \"assets/backgrounds/bg3.png\";\n    }\n\n    if (this.playerLevel > 15 && this.background2Rendering) {\n      this.bgImageSrc2 = \"assets/backgrounds/bg3.png\";\n    }\n\n    // increases this.bgImageX to simulate an increase in player's ship speed.\n    ctx.drawImage(bgImage, this.bgImageX -= 5 + this.playerLevel, 0)\n    ctx.drawImage(bgImageFlipped, this.bgImageFlippedX -= 5 + this.playerLevel, 0)\n\n    //moons\n    if (this.moonX > 0) {\n      let moon = new Image()\n      moon.src = \"assets/backgrounds/moon.png\"\n\n      //     img  spriteX, sY, sWidth, sheight, dX, dY, dWidth, dHeight (d will be related to sprite position and size on canvas)\n      ctx.drawImage(moon, 0, 0, 280, 280, this.moonX -= .1 + this.playerLevel * .1, 0, 140, 140)\n    }\n   \n\n    // planets\n    let planets = [\"assets/backgrounds/pfrozen.png\",\n  \"assets/backgrounds/planet1.png\",\n  \"assets/backgrounds/planet2.png\",\n  \"assets/backgrounds/planet3.png\",\n  \"assets/backgrounds/planetx.png\",\n  \"assets/backgrounds/pring.png\",\n  \"assets/backgrounds/prusty.png\"]\n    \n    ctx.fillStyle = \"#FFFFFF\";\n    ctx.font = \"20px fantasy\"   \n\n    ctx.fillText('Score : ' + this.score, 750, 50)\n    ctx.fillText('Level : ' + this.playerLevel, 850, 50)\n    ctx.fillText('Lives : ' + this.lives ,50, 50 )\n\n\n    //renders ship\n    const SCALE = .9\n    const SCALED_WIDTH = SCALE * 64\n    const SCALED_HEIGHT = SCALE * 64\n\n    let spaceship = this.ships[0]\n    let spaceshipImage = this.spaceshipImage\n    ctx.drawImage(spaceshipImage,\n      (frameX % 16) * spaceship.width, frameY * spaceship.height, spaceship.width, spaceship.height,\n      spaceship.x, spaceship.y, SCALED_WIDTH, SCALED_HEIGHT);\n\n\n    if(spaceship.thrust) {\n      let thruster = new Image()\n      thruster.src = \"assets/player/thrust_playership.png\"\n      ctx.drawImage(thruster, 0, 0, 128, 128,\n        spaceship.x - 90, spaceship.y - 20, 128, 128)\n      this.sfxMuted ? spaceship.thruster.volume = 0 :spaceship.thruster.volume = .6;\n      spaceship.thruster.play()\n      spaceship.thrust = false\n      }\n\n    if(spaceship.isInvincible) {\n      spaceshipImage.src = \"assets/player/playership_ghosted.png\"\n     \n      if (spaceship.invincibilityFrames <= 0) {\n        spaceshipImage.src = \"assets/player/playership.png\"\n        spaceshipImage.onload = () => {return}\n      spaceship.invincibilityFrames = 120\n        spaceship.isInvincible = false;\n      } else {\n        spaceship.invincibilityFrames--\n      }\n    }\n\n    //enemy rendering\n    if (this.enemies.length > 0) {\n      if (this.enemies.length <= this.maxEnemies) {\n        let enemyImage\n        for (let i = 0; i < this.enemies.length; i++) {\n          let enemy = this.enemies[i]\n          \n          if (enemy.hit[0]) {\n            this.remove(true, enemy.hit[1])\n            enemy.despawning[0] = true\n            enemy.hit[0] = false\n          \n            enemy.enemyImage = new Image()\n            enemy.enemyImage.src = \"assets/attackers/explosions/explosion2.png\"\n            // enemy.enemyImage.src = prevSrc.split(\".png\").join(\"_ghosted.png\")\n            enemy.enemyImage.onload = () => {return}\n          }\n          enemyImage = enemy.enemyImage\n\n          if (enemy.imgSrc === \"assets/attackers/mohican.png\") {\n            enemy.moveEnemy(enemy.speed, spaceship.x, spaceship.y)\n          } else {\n              enemy.moveEnemy(enemy.speed)\n          }\n          \n          \n          if (this.checkCollision(spaceship, enemy) && !enemy.despawning[0] && !spaceship.isInvincible) {\n            this.takeDamage()\n          }\n\n          if (enemy.despawning[0]) {\n            if (enemy.despawning[1] === 8) {\n              this.remove(enemy)\n            }\n            let explosionFrameX = enemy.despawning[1] * 96\n            let explosionFrameY = enemy.despawning[1] * 93\n            ctx.drawImage(enemyImage,\n              explosionFrameX, explosionFrameY, 96, 93,\n              enemy.x - enemy.speed, enemy.y, 44, 48)\n              enemy.despawning[2] += 1\n              if (enemy.despawning[2] === 8) {\n                enemy.despawning[1] += 1\n                enemy.despawning[2] = 0\n              }\n            } else {\n              ctx.drawImage(enemyImage,\n                (frameX % enemy.frames) * enemy.width, frameY * enemy.height, enemy.width, enemy.height,\n                enemy.x, enemy.y, SCALED_WIDTH, SCALED_HEIGHT)\n              }\n              \n        \n          if (enemy.x < 0) {\n            this.remove(enemy, null)\n          }\n        }\n      }\n    }\n\n    //bullet logic\n    let bulletImage = this.bulletImage\n    if (this.bullets.length >= 0) {\n      for (let i = 0; i < this.bullets.length; i++) {\n        let bullet = this.bullets[i]\n        bullet.moveBullet(bullet.speed + 3, 0, 0, this.canvas)\n\n        ctx.drawImage(bulletImage,\n          (frameX % 8), 0, 32, 32,\n          bullet.x, bullet.y, 32, 32)\n\n        //despawns bullet when it goes out of bounds\n        if (bullet.x > this.canvas.width) {\n          this.remove(bullet)\n        }\n\n        //checks if bullets hit enemies\n        for (let i = 0; i < this.enemies.length; i++) {\n          let enemy = this.enemies[i]\n          if (this.checkCollision(enemy, bullet) ) {\n            enemy.hit = [true, bullet]\n            bullet.speed= .17\n            if(!enemy.despawning[0]) {\n              let explosionSfx = new Audio(\"assets/soundfx/fx/explosions/very-short-quiet-bass-boost.mp3\")\n              explosionSfx.volume = this.sfxVolume\n              explosionSfx.play()\n            }\n          }\n\n        }\n      } \n    }\n\n  }\n\n\n\n  // The main game loop should run about 60 times per second\n  gameloop() {\n    if (this.battleMusicOff && this.spaceAmbienceOff) {\n      this.checkMusic()\n    }\n    this.handleAudioToggles()\n\n    let spaceship = this.ships[0]\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n    if (this.enemies.length < this.maxEnemies) {\n      this.addEnemy()\n    }\n\n    //fires bullet\n    if (spaceship.keyPresses[\" \"] && this.bullets.length < this.maxbullets) {\n      let bullet = new _bullet_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        speed: 6,\n        x: spaceship.x + 13,\n        y: spaceship.y + 5,\n        imgSrc: \"assets/fx/bullet_blue.png\",\n      })\n      spaceship.keyPresses[\" \"] = false\n      this.addBullet(bullet)\n    }\n\n    spaceship.moveShip(this.canvas)\n\n    //increments frames/loopindex for sprite animation\n    this.frameCount++;\n    if (this.frameCount >= this.FRAME_LIMIT) {\n      this.frameCount = 0;\n\n      this.currentLoopIndex++;\n      if (this.currentLoopIndex >= this.CYCLE_LOOP.length) {\n        this.currentLoopIndex = 0;\n      }\n    }\n\n    this.drawFrame(this.CYCLE_LOOP[this.currentLoopIndex], 0)\n    let myReq = window.requestAnimationFrame(this.gameloop);\n\n  \n      //game over logic\n    if (this.slippynoooooo) {\n      var playButton = document.getElementById(\"play-button\");\n      playButton.classList.remove(\"hide\")\n\n      let allTimeBest = localStorage.getItem(\"High Score\")\n     \n      if (!allTimeBest) {\n        allTimeBest = 0\n      }\n\n      if (this.score > allTimeBest) {\n        localStorage.setItem(\"High Score\", this.score)\n        allTimeBest = this.score\n      }\n\n        this.battleMusic.pause()\n        window.cancelAnimationFrame(myReq)\n        this.ctx.fillStyle = \"#000000\"\n        var gameOver = document.getElementById(\"game-over-title\");\n        var score = document.createTextNode(`Your Score: ${this.score}`);        \n        let highScore = document.createTextNode(`Your All Time Best: ${allTimeBest}`)\n        \n        if(document.getElementById(\"game-over-score\")) {\n          document.getElementById(\"game-over-score\").classList.remove(\"hide\")\n          document.getElementById(\"game-over-high-score\").classList.remove(\"hide\")\n        }\n        \n        document.getElementById(\"game-over-score\").appendChild(score);\n      document.getElementById(\"game-over-high-score\").appendChild(highScore);\n\n        gameOver.classList.remove(\"hide\")\n\n    }\n  }\n\n}\n\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ }),

/***/ "./js/game_view.js":
/*!*************************!*\
  !*** ./js/game_view.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameView; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./js/game.js\");\n\n\nclass GameView {\n  constructor(canvas, ctx, rightCanvas, rightCanvasCtx) {\n    this.ctx = ctx;\n    this.canvas = canvas\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx, rightCanvas, rightCanvasCtx)\n    this.musicToggle = document.getElementById('music-toggle-button');\n    this.musicToggleImage = document.getElementById('music-toggle-img');\n    this.sfxToggle = document.getElementById('sfx-toggle-button');\n    this.sfxToggleImage = document.getElementById('sfx-toggle-img');\n    this.toggleMusic = this.toggleMusic.bind(this)\n    this.toggleSfx = this.toggleSfx.bind(this)\n    this.start = this.start.bind(this)\n    this.musicToggle.addEventListener(\"click\", this.toggleMusic)\n    this.musicToggle.addEventListener('focus', function () { this.blur() })\n\n    this.sfxToggle.addEventListener(\"click\", this.toggleSfx)\n    this.sfxToggle.addEventListener('focus', function () { this.blur() })\n  }\n\n  toggleMusic() {\n    if (this.game.musicMuted) {\n      this.game.musicMuted = false\n      this.musicToggleImage.src = \"assets/menu/music-toggle.png\";\n    } else {\n      this.game.musicMuted = true\n      this.musicToggleImage.src = \"assets/menu/music-toggle-mute.png\"\n    }\n    this.game.handleAudioToggles()\n  }\n\n  toggleSfx() {\n\n    if (this.game.sfxMuted) {\n      this.game.sfxMuted = false\n      this.sfxToggleImage.src = \"assets/menu/sfx-toggle.png\";\n    } else {\n      this.game.sfxMuted = true\n      this.sfxToggleImage.src = \"assets/menu/sfx-toggle-mute.png\"\n    }\n    this.game.handleAudioToggles()\n  }\n\n  start() {\n    for (let i = 0; i < 384; i++) {\n      this.game.CYCLE_LOOP.push(i)\n    }\n    \n    var gameOver = document.getElementById(\"game-over-title\");\n    var gameOverScore = document.getElementById(\"game-over-score\");\n    let gameOverHighScore = document.getElementById(\"game-over-high-score\")\n    \n    if (gameOver.className !== \"hide\") {\n      gameOver.className += \"hide\"\n      \n      gameOverScore.removeChild(gameOverScore.childNodes[0])\n      gameOverHighScore.removeChild(gameOverHighScore.childNodes[0])\n      gameOverScore.className += \"hide\"\n      gameOverHighScore.className += \"hide\"\n    }\n    this.game.addShip();\n    this.game.addEnemy()\n    \n    \n    \n      requestAnimationFrame(this.game.gameloop)\n  }\n}\n\n//# sourceURL=webpack:///./js/game_view.js?");

/***/ }),

/***/ "./js/spaceship.js":
/*!*************************!*\
  !*** ./js/spaceship.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Spaceship; });\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet */ \"./js/bullet.js\");\n\n\nclass Spaceship {\n  constructor(options) {\n    this.speed = options.speed; // movement in pixels per second\n    this.x = options.x;\n    this.y = options.y;\n    this.height = 64\n    this.width = 64\n    this.thrust = false\n    this.isInvincible = false\n    this.invincibilityFrames = 120\n    this.thruster = new Audio(\"assets/soundfx/fx/thruster.mp3\")\n    // this.cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]\n    this.imgSrc = options.imgSrc\n    this.deltaX = 0\n    this.deltaY = 0\n    this.keyPresses = {}\n    this.keyDownListener = this.keyDownListener.bind(this)\n    this.keyUpListener = this.keyUpListener.bind(this)\n    window.addEventListener('keydown', this.keyDownListener, false);\n    window.addEventListener('keyup', this.keyUpListener, false);\n\n  }\n\n\n\n  keyDownListener(event) {\n    this.keyPresses[event.key] = true;\n  }\n\n  keyUpListener(event) {\n    this.keyPresses[event.key] = false;\n    this.deltaX = 0\n    this.deltaY = 0\n  }\n\n  renderImg(spaceShipImage) {\n    spaceShipImage.src = this.imgSrc;\n\n  }\n\n\n  moveShip(canvas) {\n    this.thruster.pause()\n    let deltaX = this.speed\n    let deltaY = this.speed\n\n      if (this.keyPresses.w) {\n      this.deltaY = -(deltaY)\n    } else if (this.keyPresses.s) {\n      this.deltaY = deltaY\n    } else if (this.keyPresses.a) {\n      this.deltaX = -(deltaX) + 1\n    } else if (this.keyPresses.d) {\n      this.deltaX = deltaX + 3\n      this.thrust = true\n    }\n\n    //stop moving if going out of bounds\n    if (this.x + this.deltaX > 0 && this.x + 64 + this.deltaX < canvas.width) {\n      this.x += this.deltaX;\n    }\n\n    if (this.y + this.deltaY > 0 && this.y + 64 + this.deltaY < canvas.height) {\n      this.y += this.deltaY;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./js/spaceship.js?");

/***/ })

/******/ });
// Handle keyboard controls
//To accomplish this we simply have a letiable keysDown which 
//stores any event's keyCode. If a key code is in the object, the user is currently pressing that key. Simple!
// (function () {
//   let pressedKeys = {};

//   window.addEventListener('keydown', keyDownListener, false);
//   function keyDownListener(event) {
//     keyPresses[event.key] = true;
//   }

//   window.addEventListener('keyup', keyUpListener, false);
//   function keyUpListener(event) {
//     keyPresses[event.key] = false;
//   }
// })
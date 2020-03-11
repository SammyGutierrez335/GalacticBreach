(function () {
  let pressedKeys = {};

  window.addEventListener('keydown', keyDownListener, false);
  function keyDownListener(event) {
    keyPresses[event.key] = true;
  }

  window.addEventListener('keyup', keyUpListener, false);
  function keyUpListener(event) {
    keyPresses[event.key] = false;
  }
})
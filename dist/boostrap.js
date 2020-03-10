
(function () {
  var resourceCache = {};
  var loading = [];
  var readyCallbacks = [];

  // Load an image url or an array of image urls
  function load(sprites) {
    if (sprites instanceof Array) {
      sprites.forEach(function (url) {
        _load(url);
      });
    }
    else {
      _load(sprites);
    }
  }

  //helper method used in load
  function _load(url) {
    //if it is already cached, return as is.
    if (resourceCache[url]) {
      return resourceCache[url];
    }
    else {
      var sprite = new Image();
      sprite.onload = function () {
        resourceCache[url] = sprite;


        if (isReady()) {
          readyCallbacks.forEach(function (func) { func(); });
        }
      };
      resourceCache[url] = false;
      sprite.src = url;
    }
  }

  function get(url) {
    return resourceCache[url];
  }

  //helper method to check if 
  function isReady() {
    var ready = true;
    for (var k in resourceCache) {
      if (resourceCache.hasOwnProperty(k) &&
        !resourceCache[k]) {
        ready = false;
      }
    }
    return ready;
  }

  function onReady(func) {
    readyCallbacks.push(func);
  }

  window.resources = {
    load: load,
    get: get,
    onReady: onReady,
    isReady: isReady
  };
})();
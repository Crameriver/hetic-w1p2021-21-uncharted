// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js/script.js":[function(require,module,exports) {
oxo.inputs.listenKeyOnce('enter', function () {
  //commande pour passer du screen "home" au screen "game"  
  oxo.screens.loadScreen('game', game); //en meme temps que le screen "game" la commande active la fonction 'game' qui active tout lescript pour la page "game"        
});
var winner; //to memorize who win

function game() {
  var board = document.getElementById('game__board');
  var sign = document.getElementById('sign'); // create board

  var b = jsboard.board({
    attach: "game__board",
    size: "11x13"
  });
  b.cell("each").style({
    width: "73px",
    height: "66px"
  }); // Couleur tableau 

  b.cell("each").style({
    background: "transparent"
  }); // setup pieces

  var piece_gb = jsboard.piece({
    text: "gb",
    textIndent: "-9999px",
    width: "70px",
    height: "65px",
    margin: "0 auto"
  });
  var piece_fb = jsboard.piece({
    text: "fb",
    textIndent: "-9999px",
    width: "70px",
    height: "65px",
    margin: "0 auto"
  });
  var piece_lb = jsboard.piece({
    text: "lb",
    textIndent: "-9999px",
    width: "70px",
    height: "65px",
    margin: "0 auto"
  });
  var piece_cb = jsboard.piece({
    text: "cb",
    textIndent: "-9999px",
    width: "70px",
    height: "65px",
    margin: "0 auto"
  });
  var piece_gr = jsboard.piece({
    text: "gr",
    textIndent: "-9999px",
    width: "70px",
    height: "65px",
    margin: "0 auto"
  });
  var piece_fr = jsboard.piece({
    text: "fr",
    textIndent: "-9999px",
    width: "70px",
    height: "65px",
    margin: "0 auto"
  });
  var piece_lr = jsboard.piece({
    text: "lr",
    textIndent: "-9999px",
    width: "70px",
    height: "65px",
    margin: "0 auto"
  });
  var piece_cr = jsboard.piece({
    text: "cr",
    textIndent: "-9999px",
    width: "70px",
    height: "65px",
    margin: "0 auto"
  }); // utiliser les pièces dans le tableau 

  var bluePieces = [piece_gb.clone(), piece_fb.clone(), piece_fb.clone(), piece_fb.clone(), piece_fb.clone(), piece_lb.clone(), piece_lb.clone(), piece_lb.clone(), piece_lb.clone(), piece_cb.clone(), piece_cb.clone()];
  var redPieces = [piece_gr.clone(), piece_fr.clone(), piece_fr.clone(), piece_fr.clone(), piece_fr.clone(), piece_lr.clone(), piece_lr.clone(), piece_lr.clone(), piece_lr.clone(), piece_cr.clone(), piece_cr.clone()]; // placer les pièces sur le tableau
  // place bluepiece table

  b.cell([10, 6]).place(bluePieces[0]);
  b.cell([10, 9]).place(bluePieces[1]);
  b.cell([10, 7]).place(bluePieces[2]);
  b.cell([10, 5]).place(bluePieces[3]);
  b.cell([10, 3]).place(bluePieces[4]);
  b.cell([9, 4]).place(bluePieces[5]);
  b.cell([9, 5]).place(bluePieces[6]);
  b.cell([9, 7]).place(bluePieces[7]);
  b.cell([9, 8]).place(bluePieces[8]);
  b.cell([10, 1]).place(bluePieces[9]);
  b.cell([10, 11]).place(bluePieces[10]); //classe pour conner l'image du jeton avec les probles de compatibilité des librairies

  bluePieces[0].classList.add('hey0');
  bluePieces[1].classList.add('hey1');
  bluePieces[2].classList.add('hey2');
  bluePieces[3].classList.add('hey3');
  bluePieces[4].classList.add('hey4');
  bluePieces[5].classList.add('hey5');
  bluePieces[6].classList.add('hey6');
  bluePieces[7].classList.add('hey7');
  bluePieces[8].classList.add('hey8');
  bluePieces[9].classList.add('hey9');
  bluePieces[10].classList.add('hey10');
  redPieces[0].classList.add('heyy0');
  redPieces[1].classList.add('heyy1');
  redPieces[2].classList.add('heyy2');
  redPieces[3].classList.add('heyy3');
  redPieces[4].classList.add('heyy4');
  redPieces[5].classList.add('heyy5');
  redPieces[6].classList.add('heyy6');
  redPieces[7].classList.add('heyy7');
  redPieces[8].classList.add('heyy8');
  redPieces[9].classList.add('heyy9');
  redPieces[10].classList.add('heyy10'); // place redpiece table

  b.cell([0, 6]).place(redPieces[0]);
  b.cell([0, 9]).place(redPieces[1]);
  b.cell([0, 7]).place(redPieces[2]);
  b.cell([0, 5]).place(redPieces[3]);
  b.cell([0, 3]).place(redPieces[4]);
  b.cell([1, 4]).place(redPieces[5]);
  b.cell([1, 5]).place(redPieces[6]);
  b.cell([1, 7]).place(redPieces[7]);
  b.cell([1, 8]).place(redPieces[8]);
  b.cell([0, 1]).place(redPieces[9]);
  b.cell([0, 11]).place(redPieces[10]);

  for (var i = 0; i < bluePieces.length; i++) {
    bluePieces[i].addEventListener("click", function () {
      if (board.dataset.player === "2") {
        showMoves(this);
      }

      ;
    });
  }

  ;

  for (var i = 0; i < redPieces.length; i++) {
    redPieces[i].addEventListener("click", function () {
      if (board.dataset.player === "1") {
        showMoves(this);
      }

      ;
    });
  }

  function showMoves(piece) {
    resetBoard();
    var token; //var to memorize the token selectionned with the correct amount of movement points

    var loc = b.cell(piece.parentNode).where();
    var newLocs = [];
    var thisPiece = b.cell(piece.parentNode).get();

    if ((thisPiece == "cb" || thisPiece == "cr") && board.dataset.mvmt == 0) {
      token = 'cav';
      newLocs.push([loc[0] - 1, loc[1]], [loc[0] - 3, loc[1]], [loc[0] - 2, loc[1]], [loc[0] - 4, loc[1]], [loc[0], loc[1] - 1], [loc[0], loc[1] - 3], [loc[0], loc[1] - 2], [loc[0], loc[1] - 4], [loc[0] + 1, loc[1]], [loc[0] + 3, loc[1]], [loc[0] + 2, loc[1]], [loc[0] + 4, loc[1]], [loc[0], loc[1] + 1], [loc[0], loc[1] + 3], [loc[0], loc[1] + 2], [loc[0], loc[1] + 4]);
    }

    if ((thisPiece == "cb" || thisPiece == "cr") && board.dataset.mvmt == 1) {
      token = 'cav';
      newLocs.push([loc[0] - 1, loc[1]], [loc[0] - 3, loc[1]], [loc[0] - 2, loc[1]], [loc[0], loc[1] - 1], [loc[0], loc[1] - 3], [loc[0], loc[1] - 2], [loc[0] + 1, loc[1]], [loc[0] + 3, loc[1]], [loc[0] + 2, loc[1]], [loc[0], loc[1] + 1], [loc[0], loc[1] + 3], [loc[0], loc[1] + 2]);
    }

    if ((thisPiece == "cb" || thisPiece == "cr") && board.dataset.mvmt == 3) {
      token = 'cav';
      newLocs.push([loc[0] - 1, loc[1]], [loc[0], loc[1] - 1], [loc[0] + 1, loc[1]], [loc[0], loc[1] + 1]);
    }

    if ((thisPiece == "cb" || thisPiece == "cr") && board.dataset.mvmt == 2) {
      token = 'cav';
      newLocs.push([loc[0] - 1, loc[1]], [loc[0] - 2, loc[1]], [loc[0], loc[1] - 1], [loc[0], loc[1] - 2], [loc[0] + 1, loc[1]], [loc[0] + 2, loc[1]], [loc[0], loc[1] + 1], [loc[0], loc[1] + 2]);
    }

    if (thisPiece == "gb" || thisPiece == "gr") {
      token = 'foot';
      newLocs.push([loc[0] - 1, loc[1]], [loc[0], loc[1] - 1], [loc[0] + 1, loc[1]], [loc[0], loc[1] + 1]);
    }

    if ((thisPiece == "fb" || thisPiece == "lb" || thisPiece == "fr" || thisPiece == "lr") && board.dataset.mvmt >= 2) {
      //to reduce range after 1 mvmnt
      token = 'foot';
      newLocs.push([loc[0] - 1, loc[1]], [loc[0], loc[1] - 1], [loc[0] + 1, loc[1]], [loc[0], loc[1] + 1]);
    }

    if ((thisPiece == "fb" || thisPiece == "lb" || thisPiece == "fr" || thisPiece == "lr") && board.dataset.mvmt <= 1) {
      token = 'foot';
      newLocs.push([loc[0] - 1, loc[1]], [loc[0] - 2, loc[1]], [loc[0], loc[1] - 1], [loc[0], loc[1] - 2], [loc[0] + 1, loc[1]], [loc[0] + 2, loc[1]], [loc[0], loc[1] + 1], [loc[0], loc[1] + 2]);
    } // enleve les déplacements impossible et permet de manger les jetons ennemis


    if (board.dataset.player === "2") {
      (function removeIllegalMoves(arr) {
        var fixedLocs = [];

        for (var i = 0; i < arr.length; i++) {
          if (b.cell(arr[i]).get() == null || b.cell(arr[i]).get().slice(-1) == 'r') fixedLocs.push(arr[i]);
        }

        newLocs = fixedLocs; //fixed coups légaux
      })(newLocs);
    }

    ;

    if (board.dataset.player === "1") {
      (function removeIllegalMoves(arr) {
        var fixedLocs = [];

        for (var i = 0; i < arr.length; i++) {
          if (b.cell(arr[i]).get() == null || b.cell(arr[i]).get().slice(-1) == 'b') fixedLocs.push(arr[i]);
        }

        newLocs = fixedLocs;
      })(newLocs);
    }

    ;
    bindMoveLocs = newLocs.slice();
    bindMovePiece = piece;
    bindMoveEvents(bindMoveLocs);

    function bindMoveEvents(locs) {
      for (var i = 0; i < locs.length; i++) {
        b.cell(locs[i]).DOM().classList.add("moveable__indication");
        b.cell(locs[i]).on("click", movePiece);
      }
    } // move piece to new location when clicked


    function movePiece() {
      var dest = b.cell(this).where();
      var defender = b.cell(this).get();
      var attacker = piece.innerText;
      console.log(attacker + ' attacks ' + defender);

      switch (defender) {
        case null:
          break;

        default:
          switch (defender[0]) {
            case 'g':
              if (board.dataset.player === "2") {
                winner = 1;
              } else if (board.dataset.player === "1") winner = 2;

              oxo.screens.loadScreen('end', end);
              break;
          }

          break;
      }

      b.cell(this).place(piece);
      b.removeEvents("click", movePiece);

      for (var i = 0; i < newLocs.length; i++) {
        b.cell(newLocs[i]).DOM().classList.remove("moveable__indication");
      }

      var distance = Math.max(Math.abs(loc[0] - dest[0]), Math.abs(loc[1] - dest[1]));
      console.log(distance);

      switch (token) {
        case 'foot':
          switch (distance) {
            case 1:
              board.dataset.mvmt += '2';
              break;

            case 2:
              board.dataset.mvmt += 4;
              break;
          }

          break;

        case 'cav':
          switch (distance) {
            case 1:
              board.dataset.mvmt++;
              break;

            case 2:
              board.dataset.mvmt += '2';
              break;

            case 3:
              board.dataset.mvmt += '3';
              break;

            case 4:
              board.dataset.mvmt += 4;
              break;
          }

          break;
      }

      if (board.dataset.mvmt >= 4) {
        //structure pour enregustrer les points d'actions et changer de joueurs
        board.dataset.mvmt = 0;

        if (board.dataset.player === "1") {
          board.dataset.player = 2;
          sign.classList.toggle('cake');
        } else {
          board.dataset.player = 1;
          sign.classList.toggle('cake');
        }
      }
    } // remove previous green spaces and event listeners


    function resetBoard() {
      for (var r = 0; r < b.rows(); r++) {
        for (var c = 0; c < b.cols(); c++) {
          b.cell([r, c]).DOM().classList.remove("moveable__indication");
          b.cell([r, c]).removeOn("click", movePiece);
        }
      }
    }
  }
}

;

function end() {
  var endimgp1 = document.getElementById('endimgp1');
  var endimgp2 = document.getElementById('endimgp2');

  if (winner == 2) {
    endimgp2.classList.remove('bcake');
  } else if (winner == 1) {
    endimgp1.classList.remove('bcake');
  }
}

oxo.inputs.listenKeyOnce('q', function () {
  oxo.screens.loadScreen('home');
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56334" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.map
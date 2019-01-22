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
})({"js/libs/jsboard.min.js":[function(require,module,exports) {
/*
The MIT License (MIT)

Copyright (c) 2015 Daniel Borowski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
window.jsboard = function () {
  "use strict";

  function e(e, t, r) {
    var a = [],
        n = {
      matrix: function matrix() {
        for (; a.length > 0;) {
          a.pop();
        }

        for (var t = 0; t < e.childNodes.length; t++) {
          a.push([]);

          for (var r = 0; r < e.childNodes[0].childNodes.length; r++) {
            a[t].push("undefined" != typeof e.childNodes[t].childNodes[r].childNodes[0] ? e.childNodes[t].childNodes[r].childNodes[0].innerHTML : null);
          }
        }

        return a;
      },
      rows: function rows() {
        return t[0];
      },
      cols: function cols() {
        return t[1];
      },
      style: function style(e) {
        for (var t in e) {
          document.getElementById(r).style[t] = e[t];
        }
      },
      removeEvents: function removeEvents(e, t) {
        for (var r = 0; r < document.getElementsByTagName("td").length; r++) {
          document.getElementsByTagName("td")[r].removeEventListener(e, t);
        }
      },
      cell: function cell(e, r) {
        function a(e, t) {
          return document.getElementsByClassName("boardRow_" + e)[0].childNodes[t];
        }

        function n(e) {
          var t = e.split("x");

          if (t[0] = parseInt(t[0]), t[1] = parseInt(t[1]), r) {
            var a = i(r, [t[0], t[1]]);
            t[0] = a[0], t[1] = a[1];
          }

          return [t[0], t[1]];
        }

        function i(e, r) {
          if (0 > e) for (; 0 > e;) {
            r[1] > 0 ? r[1] -= 1 : (r[1] = t[1] - 1, r[0] -= 1), e++;
          } else for (; e > 0;) {
            r[1] < t[1] - 1 ? r[1] += 1 : (r[1] = 0, r[0] += 1), e--;
          }
          return [r[0], r[1]];
        }

        var o = {
          DOM: function DOM() {
            if ("number" == typeof e[0]) return e[0] < 0 || e[1] < 0 || e[0] > t[0] - 1 || e[1] > t[1] - 1 ? document.createElement("div") : document.getElementsByClassName("boardRow_" + e[0])[0].childNodes[e[1]];
            var r = n(e.attributes["data-matrixval"].value);
            if (r[0] < 0 || r[1] < 0 || r[0] > t[0] - 1 || r[1] > t[1] - 1) return document.createElement("div");
            var i = a(r[0], r[1]);
            return "undefined" == typeof i.childNodes[0] ? document.createElement("div") : a(r[0], r[1]);
          },
          style: function style(r) {
            if ("each" == e) for (var i in r) {
              for (var o = 0; o < t[0]; o++) {
                for (var d = 0; d < t[1]; d++) {
                  a(o, d).style[i] = r[i];
                }
              }
            } else if ("number" == typeof e[0]) {
              if (e[0] < 0 || e[1] < 0 || e[0] > t[0] - 1 || e[1] > t[1] - 1) return "OOB";

              for (var i in r) {
                a(e[0], e[1]).style[i] = r[i];
              }
            } else {
              var l = n(e.attributes["data-matrixval"].value);
              if (l[0] < 0 || l[1] < 0 || l[0] > t[0] - 1 || l[1] > t[1] - 1) return "OOB";
              var s = a(l[0], l[1]);

              for (var i in r) {
                s.style[i] = r[i];
              }
            }
          },
          place: function place(r) {
            if ("each" == e) for (var i = 0; i < t[0]; i++) {
              for (var o = 0; o < t[1]; o++) {
                for (var d = a(i, o); d.firstChild;) {
                  d.removeChild(d.firstChild);
                }

                var l = Math.floor(3e3 * Math.random() + 1),
                    s = r.cloneNode(!0);
                s.className = "pieceID_" + l, d.appendChild(s);
              }
            } else if ("number" == typeof e[0]) {
              for (var d = a(e[0], e[1]); d.firstChild;) {
                d.removeChild(d.firstChild);
              }

              a(e[0], e[1]).appendChild(r);
            } else {
              var f = n(e.attributes["data-matrixval"].value);
              if (f[0] < 0 || f[1] < 0 || f[0] > t[0] - 1 || f[1] > t[1] - 1) return "OOB";

              for (var d = a(f[0], f[1]); d.firstChild;) {
                d.removeChild(d.firstChild);
              }

              a(f[0], f[1]).appendChild(r);
            }
          },
          rid: function rid() {
            if ("each" == e) for (var r = 0; r < t[0]; r++) {
              for (var i = 0; i < t[1]; i++) {
                for (var o = a(r, i); o.firstChild;) {
                  o.removeChild(o.firstChild);
                }
              }
            } else if ("number" == typeof e[0]) for (var o = a(e[0], e[1]); o.firstChild;) {
              o.removeChild(o.firstChild);
            } else {
              var d = n(e.attributes["data-matrixval"].value);
              if (d[0] < 0 || d[1] < 0 || d[0] > t[0] - 1 || d[1] > t[1] - 1) return "OOB";

              for (var o = a(d[0], d[1]); o.firstChild;) {
                o.removeChild(o.firstChild);
              }
            }
          },
          on: function on(r, i) {
            if ("each" == e) for (var o = 0; o < t[0]; o++) {
              for (var d = 0; d < t[1]; d++) {
                a(o, d).addEventListener(r, i);
              }
            } else if ("number" == typeof e[0]) {
              if (e[0] < 0 || e[1] < 0 || e[0] > t[0] - 1 || e[1] > t[1] - 1) return "OOB";
              a(e[0], e[1]).addEventListener(r, i);
            } else {
              var l = n(e.attributes["data-matrixval"].value);
              if (l[0] < 0 || l[1] < 0 || l[0] > t[0] - 1 || l[1] > t[1] - 1) return "OOB";
              var s = a(l[0], l[1]);
              s.addEventListener(r, i);
            }
          },
          removeOn: function removeOn(r, i) {
            if ("each" == e) for (var o = 0; o < t[0]; o++) {
              for (var d = 0; d < t[1]; d++) {
                a(o, d).removeEventListener(r, i);
              }
            } else if ("number" == typeof e[0]) {
              if (e[0] < 0 || e[1] < 0 || e[0] > t[0] - 1 || e[1] > t[1] - 1) return "OOB";
              a(e[0], e[1]).removeEventListener(r, i);
            } else {
              var l = n(e.attributes["data-matrixval"].value);
              if (l[0] < 0 || l[1] < 0 || l[0] > t[0] - 1 || l[1] > t[1] - 1) return "OOB";
              var s = a(l[0], l[1]);
              s.removeEventListener(r, i);
            }
          },
          get: function get() {
            if ("number" == typeof e[0]) {
              if (e[0] < 0 || e[1] < 0 || e[0] > t[0] - 1 || e[1] > t[1] - 1) return "OOB";
              var r = a(e[0], e[1]);
              return "undefined" == typeof r.childNodes[0] ? null : r.childNodes[0].childNodes[0].data;
            }

            var i = n(e.attributes["data-matrixval"].value);
            if (i[0] < 0 || i[1] < 0 || i[0] > t[0] - 1 || i[1] > t[1] - 1) return "OOB";
            var r = a(i[0], i[1]);
            return "undefined" == typeof r.childNodes[0] ? null : r.childNodes[0].childNodes[0].data;
          },
          where: function where() {
            var r = n(e.attributes["data-matrixval"].value);
            return r[0] < 0 || r[1] < 0 || r[0] > t[0] - 1 || r[1] > t[1] - 1 ? "OOB" : [r[0], r[1]];
          }
        };
        return o;
      }
    };
    return n;
  }

  function t(e) {
    var e = e,
        t = {
      clone: function clone() {
        var t = e.cloneNode(!0),
            r = Math.floor(3e3 * Math.random() + 1);
        return t.className = "pieceID_" + r, t;
      },
      style: function style(t) {
        for (var r in t) {
          e.style[r] = t[r];
        }
      }
    };
    return t;
  }

  var r = {
    board: function board(t) {
      var r = [];

      for (var a in t) {
        if ("size" == a) if (t.attach) {
          var n = t[a].split("x");
          r.push(parseInt(n[0]), parseInt(n[1]));

          for (var i = 0; i < r[0]; i++) {
            var o = document.createElement("tr");
            o.className = "boardRow_" + i;

            for (var d = 0; d < r[1]; d++) {
              var l = document.createElement("td");
              l.className = "boardCol_" + d, l.dataset.matrixval = i + "x" + d, o.appendChild(l);
            }

            document.getElementById(t.attach).appendChild(o);
          }

          document.getElementById(t.attach).style.borderSpacing = "2px";

          for (var i = 0; i < document.getElementsByTagName("td").length; i++) {
            document.getElementsByTagName("td")[i].style.background = "lightgray", document.getElementsByTagName("td")[i].style.width = "50px", document.getElementsByTagName("td")[i].style.height = "50px";
          }

          if (t.style && "checkerboard" == t.style) {
            var s = "gray";

            if (t.stylePattern) {
              for (var i = 0; i < document.getElementsByTagName("td").length; i++) {
                document.getElementsByTagName("td")[i].style.background = t.stylePattern[0];
              }

              s = t.stylePattern[1];
            }

            for (var f = 0; f < r[0]; f++) {
              if (f % 2) var u = !0;else var u = !1;

              for (var c = 0; c < r[1]; c++) {
                u && (document.getElementsByClassName("boardRow_" + f)[0].childNodes[c].style.background = s), u = !u;
              }
            }
          }
        } else console.log("Need attachment for game board");
      }

      return e(document.getElementById(t.attach), r, t.attach);
    },
    piece: function piece(e) {
      var r = document.createElement("div");

      if (e.text) {
        var a = document.createTextNode(e.text);
        r.appendChild(a);
      }

      for (var n in e) {
        "text" != n && (r.style[n] = e[n]);
      }

      return t(r);
    }
  };
  return r;
}();
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/libs/jsboard.min.js"], null)
//# sourceMappingURL=/jsboard.min.2a486eb6.map
/*
 * Minimal runtime for the Snake game controller.
 * Replaces the Google page framework that used to live in js/google
 * (dependency injection, controller base class, jsaction dispatch, telemetry).
 * Must be loaded before js/lib/closure-utils.js and js/game/snake-game.js.
 */
(function () {
  "use strict";
  var ns = (window._ = window._ || {});
  ns.ea = window;
  ns.Ti = window._xjs_toggles || [];
  ns.cy = new Map();           // event-name registry (only used for a no-op "closed" event)
  ns.Lo = {};                  // share-dialog hooks: unused in the standalone build
  ns.E0g = {};
  ns.FWg = function () {};     // telemetry service token (unused)
  ns.Ru = {};                  // viewport service token (unused)
  ns.nu = function () {        // URL query helper: nu().get(name)
    var p = new URLSearchParams(location.search);
    return { get: function (k) { return p.get(k); } };
  };
  // Impression / click logging hooks: nothing is logged in the standalone build.
  ns.Tv = function () {};
  ns.Uv = function () {};

  var dash = function (k) { return k.replace(/[A-Z]/g, function (c) { return "-" + c.toLowerCase(); }); };

  // Value wrapper returned by getData(key)
  function Data(v) { this.v = v; }
  Data.prototype.Lb = function () { return this.v !== null && this.v !== undefined; };
  Data.prototype.Ub = function (d) {
    if (!this.Lb()) return d;
    var s = String(this.v).toLowerCase();
    return !(s === "false" || s === "0");
  };
  Data.prototype.string = function (d) { return this.Lb() ? this.v : (d === undefined ? "" : d); };
  Data.prototype.Eb = Data.prototype.string;

  // Element wrapper returned by Ha(jsname) / Ua(jsname) / getRoot()
  function Wrap(els) { this.ka = els.filter(Boolean); }
  Wrap.prototype.el = Wrap.prototype.Jf = Wrap.prototype.Xa = function () { return this.ka[0]; };
  Wrap.prototype.size = function () { return this.ka.length; };
  Wrap.prototype.eq = function (i) { return new Wrap([this.ka[i]]); };
  Wrap.prototype.first = function () { return this.ka.length ? new Wrap([this.ka[0]]) : null; };
  Wrap.prototype.getData = function (k) {
    var el = this.ka[0];
    return new Data(el ? el.getAttribute("data-" + dash(k)) : null);
  };

  function byJsname(root, name) {
    var all = Array.prototype.slice.call(root.querySelectorAll('[jsname="' + name + '"]'));
    var own = all.filter(function (e) { return e.closest("[jscontroller]") === root; });
    return own.length ? own : all;
  }

  // Controller base class
  ns.qs = class {
    constructor(root) { this._root = new Wrap([root]); }
    getRoot() { return this._root; }
    getData(k) { return this._root.getData(k); }
    Ha(name) {
      var found = byJsname(this._root.el(), name);
      if (!found.length) throw new Error("Element with jsname " + name + " not found");
      return new Wrap([found[0]]);
    }
    Ua(name) { return new Wrap(byJsname(this._root.el(), name)); }
    Id() { return new Promise(function () {}); }   // share dialog lookup: never resolves
    trigger() {}
  };

  var controllers = {};
  ns.registerController = function (id, cls) { controllers[id] = cls; };

  // jsaction dispatch: "event:action; event2:action2" -> controller["$wa$action"]()
  var DOM_EVENTS = { click: 1, mousedown: 1, mouseup: 1, touchstart: 1, touchmove: 1, touchend: 1,
    touchcancel: 1, keydown: 1, keyup: 1, mouseover: 1, mouseout: 1, focus: 1, blur: 1, change: 1, input: 1 };
  function parseActions(attr) {
    var out = {};
    attr.split(";").forEach(function (p) {
      p = p.trim(); if (!p) return;
      var i = p.indexOf(":");
      var ev = i < 0 ? "click" : p.slice(0, i).trim();
      out[ev] = i < 0 ? p : p.slice(i + 1).trim();
    });
    return out;
  }
  function wire(root, ctrl) {
    var types = {};
    Array.prototype.forEach.call(root.querySelectorAll("[jsaction]"), function (el) {
      var a = parseActions(el.getAttribute("jsaction"));
      for (var t in a) if (DOM_EVENTS[t]) types[t] = 1;
    });
    var ra = parseActions(root.getAttribute("jsaction") || "");
    for (var rt in ra) if (DOM_EVENTS[rt]) types[rt] = 1;
    Object.keys(types).forEach(function (type) {
      var capture = type === "focus" || type === "blur";
      var opts = { capture: capture, passive: !(type === "touchstart" || type === "touchmove") };
      root.addEventListener(type, function (e) {
        for (var el = e.target; el && el.nodeType === 1; el = el.parentNode) {
          var attr = el.getAttribute && el.getAttribute("jsaction");
          if (attr) {
            var act = parseActions(attr)[type];
            var getter = act && ctrl["$wa$" + act];
            if (getter) {
              var fn = getter.call(ctrl);
              if (typeof fn === "function") fn.call(ctrl, { type: e.type, event: e, targetElement: new Wrap([el]) });
              return;
            }
          }
          if (el === root) break;
        }
      }, opts);
    });
  }

  // Viewport service: notifies listeners on resize / orientation change.
  function Viewport() {
    var set = new Set(), fire = function () { set.forEach(function (f) { try { f({}); } catch (e) { console.error(e); } }); };
    window.addEventListener("resize", fire);
    window.addEventListener("orientationchange", fire);
    this.addListener = function (f) { set.add(f); };
    this.removeListener = function (f) { set.delete(f); };
  }

  ns.startControllers = function () {
    Object.keys(controllers).forEach(function (id) {
      var root = document.querySelector('[jscontroller="' + id + '"]');
      if (!root) return;
      var noop = function () {};
      var counters = { KIa: function () { return Promise.resolve(); }, nfb: function () { return new Promise(noop); } };
      var ctrl = new controllers[id]({ Ma: root, service: { kE: { ka: function () { return counters; } }, Wf: new Viewport() } });
      wire(root, ctrl);
      root.__controller = ctrl;
    });
  };
})();

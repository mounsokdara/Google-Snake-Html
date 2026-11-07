(function () {
  var obj = { kEI: "j4Duau2GMvSe5NoPl6PcoAw", kOPI: 89978449 };
  (function () {
    var local;
    ((local = window.google) == null ? 0 : local.stvsc)
      ? (google.kEI = obj.kEI)
      : (window.google = obj);
  }).call(this);
})();
(function () {
  google.sn = "web";
  google.kHL = "en";
  google.usb = true;
})();
(function () {
  var global_scope = this || self;
  var regex = /#|$/;
  function fn(text, list) {
    var search = text.search(regex);
    a: {
      var num = 0;
      for (var len = list.length; (num = text.indexOf(list, num)) >= 0 && num < search;) {
        var char_code_at = text.charCodeAt(num - 1);
        if (char_code_at == 38 || char_code_at == 63)
          if (
            ((char_code_at = text.charCodeAt(num + len)),
            !char_code_at || char_code_at == 61 || char_code_at == 38 || char_code_at == 35)
          )
            break a;
        num += len + 1;
      }
      num = -1;
    }
    if (num < 0) return null;
    len = text.indexOf("&", num);
    if (len < 0 || len > search) len = search;
    num += list.length + 1;
    return decodeURIComponent(text.slice(num, len !== -1 ? len : 0).replace(/\+/g, " "));
  }
  function fn_2() {
    return (window.google && window.google.kOPI) || null;
  }
  var local;
  function fn_3(element) {
    for (
      var local_2;
      element && (!element.getAttribute || !(local_2 = element.getAttribute("eid")));
    )
      element = element.parentNode;
    (element = local_2) || (element = local);
    return element;
  }
  function fn_4(element) {
    for (
      var local_2 = null;
      element && (!element.getAttribute || !(local_2 = element.getAttribute("leid")));
    )
      element = element.parentNode;
    return local_2;
  }
  function fn_5(first_arg, second_arg, fn_6, fourth_arg, fifth_arg) {
    var text = "";
    second_arg.search("&ei=") === -1 &&
      ((text = "&ei=" + fn_3(fourth_arg)),
      second_arg.search("&lei=") === -1 &&
        (fourth_arg = fn_4(fourth_arg)) &&
        (text += "&lei=" + fourth_arg));
    var local_2 = second_arg.search("&cshid=") === -1 && first_arg !== "slh";
    var local_3 = local_3 === void 0 ? window.location : local_3;
    fourth_arg = "&zx=" + Date.now().toString();
    global_scope._cshid && local_2 && (fourth_arg += "&cshid=" + global_scope._cshid);
    (fn_6 = fn_6()) && (fourth_arg += "&opi=" + fn_6);
    (fn_6 = fn(local_3.search, "gemcid")) && (fourth_arg += "&gemcid=" + fn_6);
    (fn_6 = fn(local_3.search, "gemrid")) && (fourth_arg += "&gemrid=" + fn_6);
    (fn_6 = fn(local_3.search, "gemhist")) && (fourth_arg += "&gemhist=" + fn_6);
    (local_3 = fn(local_3.search, "gemsp")) && (fourth_arg += "&gemsp=" + local_3);
    return (
      "/" +
      (fifth_arg || "gen_204") +
      "?atyp=i&ct=" +
      String(first_arg) +
      "&cad=" +
      (second_arg + text + fourth_arg)
    );
  }
  local = google.kEI;
  google.getEI = fn_3;
  google.getLEI = fn_4;
  google.ml = function () {
    return null;
  };
  google.log = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg) {
    sixth_arg = sixth_arg === void 0 ? fn_2 : sixth_arg;
    third_arg || (third_arg = fn_5(first_arg, second_arg, sixth_arg, fourth_arg, fifth_arg));
    first_arg = third_arg;
    /^http:/i.test(first_arg) &&
      window.location.protocol === "https:" &&
      (google.ml && google.ml(Error("a"), !1, { src: first_arg, glmm: 1 }), (first_arg = ""));
    if ((third_arg = first_arg))
      try {
        window.navigator.sendBeacon(third_arg, "");
      } catch (error) {}
  };
  google.logUrl = function (first_arg, second_arg) {
    second_arg = second_arg === void 0 ? fn_2 : second_arg;
    return fn_5("", first_arg, second_arg);
  };
}).call(this);
(function () {
  google.y = {};
  google.sy = {};
  function fn(first_arg, second_arg, third_arg) {
    if (first_arg) var id = first_arg.id;
    else {
      do id = Math.random();
      while (third_arg[id]);
    }
    third_arg[id] = [first_arg, second_arg];
  }
  var local;
  (local = google).x ||
    (local.x = function (first_arg, second_arg) {
      fn(first_arg, second_arg, google.y);
    });
  var local_2;
  (local_2 = google).sx ||
    (local_2.sx = function (first_arg, second_arg) {
      fn(first_arg, second_arg, google.sy);
    });
  google.bx = !1;
  var local_3;
  (local_3 = google).lx || (local_3.lx = function () {});
  var list = [],
    local_4;
  (local_4 = google).fce ||
    (local_4.fce = function (first_arg, second_arg, third_arg, fourth_arg) {
      list.push([first_arg, second_arg, third_arg, fourth_arg]);
    });
  google.qce = list;
  google.adl = [];
}).call(this);
google.f = {};
(function () {
  document.documentElement.addEventListener(
    "submit",
    function (event) {
      var element;
      if ((element = event.target)) {
        var attribute = element.getAttribute("data-submitfalse");
        element = attribute === "1" || (attribute === "q" && !element.elements.q.value);
      } else element = !1;
      element && (event.preventDefault(), event.stopPropagation());
    },
    !0
  );
  document.documentElement.addEventListener(
    "click",
    function (event) {
      var element;
      a: {
        for (
          element = event.target;
          element && element !== document.documentElement;
          element = element.parentElement
        )
          if (element.tagName === "A") {
            element = element.getAttribute("data-nohref") === "1";
            break a;
          }
        element = !1;
      }
      element && event.preventDefault();
    },
    !0
  );
}).call(this);
(function () {
  google.hs = { h: true, nhs: false };
})();
(function () {
  function fn() {
    for (var shift = google.drc.shift(); shift;) (shift(), (shift = google.drc.shift()));
  }
  google.drc = [
    function () {
      google.tick && google.tick("load", "dcl");
    }
  ];
  google.dclc = function (fn_2) {
    google.drc.length ? google.drc.push(fn_2) : fn_2();
  };
  window.addEventListener
    ? (document.addEventListener("DOMContentLoaded", fn, !1),
      window.addEventListener("load", fn, !1))
    : window.attachEvent && window.attachEvent("onload", fn);
}).call(this);
(function () {
  var fn = function (list_3) {
      var index = 0;
      return function () {
        return index < list_3.length ? { done: !1, value: list_3[index++] } : { done: !0 };
      };
    },
    fn_2 = function (list_3) {
      var local_3 = typeof Symbol != "undefined" && Symbol.iterator && list_3[Symbol.iterator];
      if (local_3) return local_3.call(list_3);
      if (typeof list_3.length == "number") return { next: fn(list_3) };
      throw Error("a`" + String(list_3));
    },
    fn_3 =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (first_arg, second_arg, third_arg) {
            if (first_arg == Array.prototype || first_arg == Object.prototype) return first_arg;
            first_arg[second_arg] = third_arg.value;
            return first_arg;
          },
    fn_4 = function (list_3) {
      list_3 = [
        "object" == typeof globalThis && globalThis,
        list_3,
        "object" == typeof window && window,
        "object" == typeof self && self,
        "object" == typeof global && global
      ];
      for (var index = 0; index < list_3.length; ++index) {
        var local_3 = list_3[index];
        if (local_3 && local_3.Math == Math) return local_3;
      }
      throw Error("b");
    },
    local = fn_4(this),
    fn_5 = function (text, fn_16) {
      if (fn_16)
        a: {
          var local_3 = local;
          text = text.split(".");
          for (var index = 0; index < text.length - 1; index++) {
            var local_4 = text[index];
            if (!(local_4 in local_3)) break a;
            local_3 = local_3[local_4];
          }
          text = text[text.length - 1];
          index = local_3[text];
          fn_16 = fn_16(index);
          fn_16 != index &&
            fn_16 != null &&
            fn_3(local_3, text, { configurable: !0, writable: !0, value: fn_16 });
        }
    },
    fn_6 =
      typeof Object.assign == "function"
        ? Object.assign
        : function (first_arg, second_arg) {
            if (first_arg == null) throw new TypeError("No nullish arg");
            first_arg = Object(first_arg);
            for (var index = 1; index < arguments.length; index++) {
              var local_3 = arguments[index];
              if (local_3)
                for (var local_4 in local_3)
                  Object.prototype.hasOwnProperty.call(local_3, local_4) &&
                    (first_arg[local_4] = local_3[local_4]);
            }
            return first_arg;
          };
  fn_5("Promise", function (first_arg) {
    function fn_16() {
      this.j = null;
    }
    function fn_17(first_arg_2) {
      return first_arg_2 instanceof fn_18
        ? first_arg_2
        : new fn_18(function (fn_19) {
            fn_19(first_arg_2);
          });
    }
    if (first_arg) return first_arg;
    fn_16.prototype.A = function (first_arg_2) {
      if (this.j == null) {
        this.j = [];
        var that = this;
        this.B(function () {
          that.D();
        });
      }
      this.j.push(first_arg_2);
    };
    var set_timeout = local.setTimeout;
    fn_16.prototype.B = function (first_arg_2) {
      set_timeout(first_arg_2, 0);
    };
    fn_16.prototype.D = function () {
      for (; this.j && this.j.length;) {
        var list_3 = this.j;
        this.j = [];
        for (var index = 0; index < list_3.length; ++index) {
          var fn_19 = list_3[index];
          list_3[index] = null;
          try {
            fn_19();
          } catch (error) {
            this.C(error);
          }
        }
      }
      this.j = null;
    };
    fn_16.prototype.C = function (first_arg_2) {
      this.B(function () {
        throw first_arg_2;
      });
    };
    var fn_18 = function (fn_19) {
      this.A = 0;
      this.B = void 0;
      this.j = [];
      this.H = !1;
      var local_3 = this.C();
      try {
        fn_19(local_3.resolve, local_3.reject);
      } catch (error) {
        local_3.reject(error);
      }
    };
    fn_18.prototype.C = function () {
      function fn_19(first_arg_2) {
        return function (first_arg_3) {
          num || ((num = !0), first_arg_2.call(that, first_arg_3));
        };
      }
      var that = this,
        num = !1;
      return { resolve: fn_19(this.M), reject: fn_19(this.D) };
    };
    fn_18.prototype.M = function (first_arg_2) {
      if (first_arg_2 === this) this.D(new TypeError("A Promise cannot resolve to itself"));
      else if (first_arg_2 instanceof fn_18) this.O(first_arg_2);
      else {
        a: switch (typeof first_arg_2) {
          case "object":
            var num = first_arg_2 != null;
            break a;
          case "function":
            num = !0;
            break a;
          default:
            num = !1;
        }
        num ? this.L(first_arg_2) : this.G(first_arg_2);
      }
    };
    fn_18.prototype.L = function (promise) {
      var num = void 0;
      try {
        num = promise.then;
      } catch (error) {
        this.D(error);
        return;
      }
      typeof num == "function" ? this.P(num, promise) : this.G(promise);
    };
    fn_18.prototype.D = function (first_arg_2) {
      this.I(2, first_arg_2);
    };
    fn_18.prototype.G = function (first_arg_2) {
      this.I(1, first_arg_2);
    };
    fn_18.prototype.I = function (first_arg_2, second_arg) {
      if (this.A != 0) throw Error("c`" + first_arg_2 + "`" + second_arg + "`" + this.A);
      this.A = first_arg_2;
      this.B = second_arg;
      this.A === 2 && this.N();
      this.J();
    };
    fn_18.prototype.N = function () {
      var that = this;
      set_timeout(function () {
        if (that.K()) {
          var console = local.console;
          typeof console !== "undefined" && console.error(that.B);
        }
      }, 1);
    };
    fn_18.prototype.K = function () {
      if (this.H) return !1;
      var custom_event = local.CustomEvent,
        event = local.Event,
        dispatch_event = local.dispatchEvent;
      if (typeof dispatch_event === "undefined") return !0;
      typeof custom_event === "function"
        ? (custom_event = new custom_event("unhandledrejection", { cancelable: !0 }))
        : typeof event === "function"
          ? (custom_event = new event("unhandledrejection", { cancelable: !0 }))
          : ((custom_event = local.document.createEvent("CustomEvent")),
            custom_event.initCustomEvent("unhandledrejection", !1, !0, custom_event));
      custom_event.promise = this;
      custom_event.reason = this.B;
      return dispatch_event(custom_event);
    };
    fn_18.prototype.J = function () {
      if (this.j != null) {
        for (var index = 0; index < this.j.length; ++index) instance.A(this.j[index]);
        this.j = null;
      }
    };
    var instance = new fn_16();
    fn_18.prototype.O = function (first_arg_2) {
      var local_3 = this.C();
      first_arg_2.F(local_3.resolve, local_3.reject);
    };
    fn_18.prototype.P = function (first_arg_2, second_arg) {
      var local_3 = this.C();
      try {
        first_arg_2.call(second_arg, local_3.resolve, local_3.reject);
      } catch (error) {
        local_3.reject(error);
      }
    };
    fn_18.prototype.then = function (first_arg_2, second_arg) {
      function fn_19(fn_22, second_arg_2) {
        return typeof fn_22 == "function"
          ? function (first_arg_3) {
              try {
                fn_20(fn_22(first_arg_3));
              } catch (error) {
                fn_21(error);
              }
            }
          : second_arg_2;
      }
      var fn_20,
        fn_21,
        instance_2 = new fn_18(function (first_arg_3, second_arg_2) {
          fn_20 = first_arg_3;
          fn_21 = second_arg_2;
        });
      this.F(fn_19(first_arg_2, fn_20), fn_19(second_arg, fn_21));
      return instance_2;
    };
    fn_18.prototype.catch = function (first_arg_2) {
      return this.then(void 0, first_arg_2);
    };
    fn_18.prototype.F = function (fn_19, fn_20) {
      function fn_21() {
        switch (that.A) {
          case 1:
            fn_19(that.B);
            break;
          case 2:
            fn_20(that.B);
            break;
          default:
            throw Error("d`" + that.A);
        }
      }
      var that = this;
      this.j == null ? instance.A(fn_21) : this.j.push(fn_21);
      this.H = !0;
    };
    fn_18.resolve = fn_17;
    fn_18.reject = function (first_arg_2) {
      return new fn_18(function (first_arg_3, fn_19) {
        fn_19(first_arg_2);
      });
    };
    fn_18.race = function (first_arg_2) {
      return new fn_18(function (first_arg_3, second_arg) {
        for (
          var local_3 = fn_2(first_arg_2), next = local_3.next();
          !next.done;
          next = local_3.next()
        )
          fn_17(next.value).F(first_arg_3, second_arg);
      });
    };
    fn_18.all = function (first_arg_2) {
      var local_3 = fn_2(first_arg_2),
        next = local_3.next();
      return next.done
        ? fn_17([])
        : new fn_18(function (fn_19, second_arg) {
            function fn_20(first_arg_3) {
              return function (first_arg_4) {
                list_3[first_arg_3] = first_arg_4;
                index--;
                index == 0 && fn_19(list_3);
              };
            }
            var list_3 = [],
              index = 0;
            do
              (list_3.push(void 0),
                index++,
                fn_17(next.value).F(fn_20(list_3.length - 1), second_arg),
                (next = local_3.next()));
            while (!next.done);
          });
    };
    return fn_18;
  });
  var list = ["focus", "blur", "error", "load", "toggle"];
  function fn_7(first_arg) {
    return first_arg === "mouseenter"
      ? "mouseover"
      : first_arg === "mouseleave"
        ? "mouseout"
        : first_arg === "pointerenter"
          ? "pointerover"
          : first_arg === "pointerleave"
            ? "pointerout"
            : first_arg;
  }
  var fn_8 = function (first_arg) {
    this.B = {};
    this.C = {};
    this.A = null;
    this.j = [];
    this.D = first_arg;
  };
  fn_8.prototype.handleEvent = function (first_arg, event, third_arg) {
    fn_9(this, {
      eventType: first_arg,
      event: event,
      targetElement: event.target,
      eic: third_arg,
      timeStamp: Date.now(),
      eia: void 0,
      eirp: void 0,
      eiack: void 0
    });
  };
  var fn_9 = function (first_arg, second_arg) {
    if (first_arg.A) first_arg.A(second_arg);
    else {
      second_arg.eirp = !0;
      var list_3;
      (list_3 = first_arg.j) == null || list_3.push(second_arg);
    }
  };
  fn_8.prototype.addEvent = function (first_arg, second_arg, third_arg) {
    var that = this;
    if (!(first_arg in this.B) && this.D) {
      var fn_16 = function (first_arg_2, second_arg_2, third_arg_2) {
        that.handleEvent(first_arg_2, second_arg_2, third_arg_2);
      };
      this.B[first_arg] = fn_16;
      second_arg = fn_7(second_arg || first_arg);
      if (second_arg !== first_arg) {
        var list_3 = this.C[second_arg] || [];
        list_3.push(first_arg);
        this.C[second_arg] = list_3;
      }
      this.D.addEventListener(
        second_arg,
        function (first_arg_2) {
          return function (first_arg_3) {
            fn_16(first_arg, first_arg_3, first_arg_2);
          };
        },
        third_arg
      );
    }
  };
  fn_8.prototype.handler = function (first_arg) {
    return this.B[first_arg];
  };
  fn_8.prototype.ecrd = function (first_arg) {
    this.A = first_arg;
    var list_3;
    if ((list_3 = this.j) == null ? 0 : list_3.length) {
      for (first_arg = 0; first_arg < this.j.length; first_arg++) fn_9(this, this.j[first_arg]);
      this.j = null;
    }
  };
  function fn_10(first_arg, second_arg) {
    return {
      trigger: function (event) {
        var handler = first_arg.handler(event.type);
        handler || (first_arg.addEvent(event.type), (handler = first_arg.handler(event.type)));
        var local_3 = event.target || event.srcElement;
        handler && handler(event.type, event, second_arg || local_3.ownerDocument.documentElement);
      },
      configure: function (fn_16) {
        fn_16(first_arg);
      }
    };
  }
  function fn_11(element, fn_16) {
    element.addEventListener("_custom", function (event) {
      var detail = event.detail;
      detail &&
        detail._type &&
        fn_16({ type: detail._type, target: event.target, bubbles: !0, detail: detail });
    });
  }
  var fn_12 = function (first_arg) {
    this.element = first_arg;
    this.j = [];
  };
  fn_12.prototype.addEventListener = function (first_arg, fn_16, third_arg) {
    var list_3 = this.j,
      push = list_3.push,
      element = this.element;
    fn_16 = fn_16(this.element);
    var num = !1;
    list.indexOf(first_arg) >= 0 && (num = !0);
    element.addEventListener(
      first_arg,
      fn_16,
      typeof third_arg === "boolean" ? { capture: num, passive: third_arg } : num
    );
    push.call(list_3, { eventType: first_arg, handler: fn_16, capture: num, passive: third_arg });
  };
  var split =
      "click focusin focusout auxclick change copy dblclick beforeinput input keyup keydown keypress mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup paste pointerdown pointerenter pointerleave pointerup touchstart touchmove touchend touchcancel transitioncancel transitionend transitionrun transitionstart animationcancel animationend dragover dragenter dragleave drop dragstart dragend scroll speech".split(
        " "
      ),
    list_2 = ["focus", "blur", "error", "load"];
  function fn_13(first_arg) {
    for (var list_3 = split.concat(list_2), index = 0; index < list_3.length; index++)
      first_arg.addEvent(list_3[index]);
  }
  function fn_14(first_arg) {
    var num = !!first_arg;
    first_arg = num ? document.getElementById(first_arg) : window.document.documentElement;
    var instance = new fn_8(new fn_12(first_arg));
    fn_13(instance);
    var local_3 = fn_6({}, fn_10(instance, first_arg), {
      addEvent: function (first_arg_2) {
        instance.addEvent(first_arg_2);
      }
    });
    num && (first_arg.__jsac = local_3);
    fn_11(first_arg, local_3.trigger);
    return local_3;
  }
  window.jsac_init = fn_14;
  var local_2 = fn_14("");
  window.gws_wizbind = local_2;
  (function (first_arg) {
    if (first_arg.__gwbp === void 0) {
      var local_3,
        promise = new Promise(function (first_arg_2) {
          local_3 = first_arg_2;
        });
      promise.__r = local_3;
      first_arg.__gwbp = promise;
    }
  })(document);
  var gwbp = document.__gwbp,
    fn_15 = gwbp.__r;
  fn_15 && (fn_15(local_2), delete gwbp.__r);
}).call(this);
(function () {
  function fn(event) {
    var element;
    a: {
      for (
        element = event.target;
        element && element !== document.documentElement;
        element = element.parentElement
      )
        if (element.tagName === "A" && element.getAttribute("data-jsarwt") === "1") break a;
      element = null;
    }
    element && window.jsarwt(element, null, event);
    return !0;
  }
  window.document.documentElement.addEventListener("mousedown", fn, !0);
  window.document.documentElement.addEventListener("touchstart", fn, !0);
}).call(this);
(function () {
  google.xjs = {
    basecomb:
      "/xjs/_/js/k\x3dxjs.s.en.8aXlnig_7XI.2023.O/ck\x3dxjs.s.LzmIVjdeLEE.L.W.O/am\x3dCAAQAAAAAAAAAAgAAAAAAAAAAAAABAggAgAAAAAAAAAAAAAAAAAAAEIAIAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAACAAEAAAAAAAAAAAAgAAAEAAAAAAAQRAAAABAIAAEAIASACAAAIAQAgAAAACAAAAAAAAAAAAAACj0AAQAQAEAAAAAAIAHMABwEQgAAAAAAAAAAAABAAAAEIBAAAAgAQAAAAAAAAAAAAAEEIAAAAAEAAAABAAAAAwAABAAgAChBAAAAAAKCgAAgAAAAAAAAQAAAAAAAAAAASYAESAAIAICAAAAIAAAwD8EAAAAAA8AAAAAAAgAAAAAAAAAACAAAAAAAAAAAEAAAAAAIYIDAAAAAAAEgwUAAAAARgABAAgEgAACIAAAAAAAAAAAAAAAkQARAAAQAAAAAACAAAAAAAAAAAAAAACBAMAQCgEAAoACAAFXhAIAgAAADgAAIAAAAAAEAACKCAAABAAAAAAAKAAAAAAAAAAgBCAEEAAAABAAAACAAgAAAAAAgCAAAAAAAAAAAAikAAQgAMAIJABAUshUCBABACAAgAADAAAIICgAAAAAAACExA8AAEAAACAAAAAAEQAAAAAAAAAAAAAAAEAAAAAAAAAAFiAAgAIAAABwAB4PMERQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAUwB5KCABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEVP2RoAEA/d\x3d1/ed\x3d1/dg\x3d0/ujg\x3d1/ichc\x3d1/rs\x3dACT90oHXtukuK9_oa-foVZhYATS2KyadVA/cb\x3dloaded_h_0?cb\x3d121509378",
    basecss:
      "/xjs/_/ss/k\x3dxjs.s.LzmIVjdeLEE.L.W.O/am\x3dCAAQAAAAAAAAAAgAAAAAAAAAAAAABAggAgAAAAAAAAAAAAAAAAAAAEIAIAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAACAAEAAAAAAAAAAAAgAAAEAAAAAAAQRAAAAAAAAAAAIACAAAAAIAQAgAAAACAAAAAAAAAAAAAACj0AAAAQAEAAAAAAIAHMABwEQgAAAAAAAAAAAABAAAAAABAAAAgAQAAAAAAAAAAAAAEEAAAAAAAAAAABAAAAAAAABAAgAChAAAAAAAACgAAgAAAAAAAAQAAAAAAAAAAAQYAESAAAAAAAAAAIAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAACAAAAAAAAAAAEAAAAAAAIIDAAAAAAAEAwAAAAAABgAAAAgEAAACAAAAAAAAAAAAAAAAkQARAAAQAAAAAACAAAAAAAAAAAAAAACBAMAQCgEAAoACAAFXhAIAAAAADgAAIAAAAAAEAACKCAAABAAAAAAAIAAAAAAAAAAgBCAEEAAAABAAAAAAAAAAAAAAgCAAAAAAAAAAAAigAAQgAMAIJABAUshUCBABACAAAAACAAAIICgAAAAAAAAEBAAAAAAAACAAAAAAEQAAAAAAAAAAAAAAAAAAAAAAAAAAFiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAIACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ/cb\x3dloaded_h_0/rs\x3dACT90oGu7qA7ENexsdv3aOh6e3ZcgIzO6Q?cb\x3d121509378",
    basejs:
      "/xjs/_/js/k\x3dxjs.s.en.8aXlnig_7XI.2023.O/am\x3dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIAAEAAASACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIAAAAAgAQAAAAAAAAAAAAAEEIAAAAAEAAAAAAAAAAwAABAAgAAgBAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAASAAAQAAIAICAAAAIAAAwD8EAAAAAA0AAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIQAAAAAAAAAAgAUAAAAAQAABAAAEgAACIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAIACAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAABAAAACAAgAAAAAAACAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAgAADAAAAAAAAAAAAAACAwA8AAEAAAAAAAAAAAQAAAAAAAAAAAAAAAEAAAAAAAAAAEAAAgAIAAABwAB4PMERQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAUwB5KAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEVP2RoAEA/dg\x3d0/ichc\x3d1/rs\x3dACT90oG_qGsE7pUX9_Qig9gv1U3BvdcohA/cb\x3dloaded_h_0?cb\x3d121509378",
    excm: []
  };
})();
(function () {
  var split = "src href async nonce type charset crossorigin onload rel".split(" ");
  window._rtf = function (element, fn) {
    var element_2 = document.createElement(element.tagName);
    split.forEach(function (first_arg) {
      element_2[first_arg] = element[first_arg];
    });
    element_2.onerror = function () {
      window._rtf(element_2, fn);
    };
    var local = element.dataset.rtc === void 0 ? 0 : Number(element.dataset.rtc);
    local >= 4
      ? fn && fn()
      : ((element_2.dataset.rtc = String(local + 1)),
        setTimeout(
          function () {
            if (element_2 instanceof HTMLScriptElement) {
              var list;
              (list = google.xjsq) == null || list.push({ k: "h", e: element_2, r: local + 1 });
            }
            document.body.appendChild(element_2);
          },
          50 * Math.pow(2, local) + Math.random() * 50
        ));
  };
}).call(this);

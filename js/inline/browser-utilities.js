(function () {
  window.rwt = function () {
    return !0;
  };
}).call(this);
(function () {
  var global_scope = this || self;
  function fn(first_arg) {
    var local_2;
    a: {
      if ((local_2 = global_scope.navigator)) if ((local_2 = local_2.userAgent)) break a;
      local_2 = "";
    }
    return local_2.indexOf(first_arg) != -1;
  }
  function fn_2(first_arg) {
    return String(first_arg).replace(/\-([a-z])/g, function (first_arg_2, text) {
      return text.toUpperCase();
    });
  }
  var local =
    !(fn("Trident") || fn("MSIE")) &&
    !(
      fn("Safari") &&
      !(
        ((fn("Chrome") || fn("CriOS")) && !fn("Edge")) ||
        fn("Silk") ||
        fn("Coast") ||
        fn("Opera") ||
        fn("Edge") ||
        fn("Edg/") ||
        fn("OPR") ||
        fn("Firefox") ||
        fn("FxiOS") ||
        fn("Silk") ||
        fn("Android")
      )
    );
  window.jsarwt = function (element, second_arg, third_arg) {
    if (!second_arg)
      if (local && element.dataset) second_arg = element.dataset;
      else {
        second_arg = {};
        for (var attributes = element.attributes, index = 0; index < attributes.length; ++index) {
          var local_2 = attributes[index];
          if (local_2.name.lastIndexOf("data-", 0) == 0) {
            var local_3 = fn_2(local_2.name.slice(5));
            second_arg[local_3] = local_2.value;
          }
        }
      }
    if (!("jrwt" in second_arg))
      if (
        (window.rwt(
          element,
          second_arg.cd || "",
          second_arg.usg || "",
          "",
          second_arg.ved || "",
          Number(second_arg.au) || null,
          second_arg.psig || "",
          third_arg
        ),
        local && element.dataset)
      )
        element.dataset.jrwt = "1";
      else {
        if (/-[a-z]/.test("jrwt")) throw Error("a");
        element.setAttribute.call(
          element,
          "data-" + "jrwt".replace(/([A-Z])/g, "-$1").toLowerCase(),
          "1"
        );
      }
    return !1;
  };
}).call(this);
(function () {
  window.google.erd = {
    jsr: 1,
    bv: 2576,
    sd: true,
    de: true,
    dpf: "6zc_Cw6_v7nyimydXJaE7tCCmuzH7Im9G6q9wl-QOKU",
    c: "3833"
  };
})();
(function () {
  var flag = false;
  var num = 10;
  var num_2 = 0;
  var num_3 = 0;
  var global_scope = this || self;
  var local,
    local_2 = (local = global_scope.mei) != null ? local : 1,
    local_3,
    local_4 = (local_3 = global_scope.diel) != null ? local_3 : 0,
    local_5,
    local_6 = (local_5 = global_scope.sdo) != null ? local_5 : !0;
  typeof num_2 === "number" && num_2 > 0 && (Error.stackTraceLimit = num_2);
  var index = 0,
    local_7,
    erd = google.erd,
    jsr = erd.jsr;
  google.ml = function (first_arg, fn, third_arg, fourth_arg, fifth_arg) {
    fifth_arg = fifth_arg === void 0 ? 2 : fifth_arg;
    fn && (local_7 = first_arg && first_arg.message);
    third_arg === void 0 && (third_arg = {});
    third_arg.cad = "ple_" + google.ple + ".aple_" + google.aple;
    if (google.dl) return (google.dl(first_arg, fifth_arg, third_arg, !0), null);
    fn = third_arg;
    if (jsr < 0) {
      window.console && console.error(first_arg, fn);
      if (jsr === -2) throw first_arg;
      fn = !1;
    } else
      fn = !(
        !first_arg ||
        !first_arg.message ||
        first_arg.message === "Error loading script" ||
        (index >= local_2 && !fourth_arg)
      );
    if (!fn) return null;
    index++;
    third_arg = third_arg || {};
    fn = encodeURIComponent;
    var text = "&ei=" + fn(google.kEI);
    google.kEXPI && (text += "&jexpid=" + fn(google.kEXPI));
    text += "&srcpg=" + fn(google.sn) + "&jsr=" + fn(erd.jsr) + "&bver=" + fn(erd.bv);
    erd.dpf && (text += "&dpf=" + fn(erd.dpf));
    var local_8, text_2;
    if ((local_8 = (text_2 = third_arg == null ? void 0 : third_arg.__bl) != null ? text_2 : null))
      for (var local_9 in local_8)
        local_8.hasOwnProperty(local_9) && (text += "&" + local_9 + "=" + fn(local_8[local_9]));
    text_2 = first_arg.lineNumber;
    text_2 !== void 0 && (text += "&line=" + text_2);
    if ((local_9 = first_arg.fileName))
      (local_9.indexOf("-extension:/") > 0 && (fifth_arg = 3),
        (text += "&script=" + fn(local_9)),
        text_2 &&
          local_9 === window.location.href &&
          ((text_2 = document.documentElement.outerHTML.split("\n")[text_2 - 1]),
          (text += "&cad=" + fn(text_2 ? text_2.substring(0, 300) : "No script found."))));
    google.ple && google.ple === 1 && (fifth_arg = 2);
    text += "&jsel=" + fifth_arg;
    third_arg && erd.c && (third_arg.ofc = String(erd.c));
    text = text + "&ectx=" + fn(JSON.stringify(third_arg));
    text = text + "&emsg=" + fn(first_arg.name + ": " + first_arg.message);
    text = text + "&jsst=" + fn(first_arg.stack || "N/A");
    text.length >= 12288 && (text = text.substring(0, 12288));
    first_arg = text;
    text_2 = ("/gen_204?atyp=i" + first_arg).substring(0, 12288);
    fourth_arg ||
      (google.log(0, "", text_2),
      google.log(0, "", ("/httpservice/retry/jserror?atyp=i" + first_arg).substring(0, 12288)));
    return text_2;
  };
  window.onerror = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
    local_7 !== first_arg &&
      ((first_arg = fifth_arg instanceof Error ? fifth_arg : Error(first_arg)),
      third_arg === void 0 || "lineNumber" in first_arg || (first_arg.lineNumber = third_arg),
      second_arg === void 0 || "fileName" in first_arg || (first_arg.fileName = second_arg),
      google.ml(
        first_arg,
        !1,
        void 0,
        !1,
        first_arg.name === "SyntaxError" ||
          first_arg.message.substring(0, 11) === "SyntaxError" ||
          first_arg.message.indexOf("Script error") !== -1
          ? 3
          : local_4
      ));
    local_7 = null;
    local_6 && index >= local_2 && (window.onerror = null);
  };
})();
(function () {
  var flag = false;
  var flag_2 = true;
  (function () {
    var fn =
      typeof Object.assign == "function"
        ? Object.assign
        : function (first_arg, second_arg) {
            if (first_arg == null) throw new TypeError("No nullish arg");
            first_arg = Object(first_arg);
            for (var index = 1; index < arguments.length; index++) {
              var local = arguments[index];
              if (local)
                for (var local_2 in local)
                  Object.prototype.hasOwnProperty.call(local, local_2) &&
                    (first_arg[local_2] = local[local_2]);
            }
            return first_arg;
          };
    function fn_2(first_arg) {
      try {
        var origin = new URL(window.location.href).origin;
        return new URL(first_arg.toString(), origin).origin !== origin;
      } catch (error) {
        return !0;
      }
    }
    function fn_3() {
      var sglc = window.sglc;
      return (
        ",isrpe=" +
        ((sglc ? sglc.isrpe : typeof flag !== "undefined" && flag) ? "1" : "0") +
        ",hcs=" +
        ((sglc ? sglc.hcs : typeof flag_2 !== "undefined" && flag_2) ? "1" : "0")
      );
    }
    function fn_4(first_arg, second_arg, third_arg, fourth_arg) {
      var list = first_arg.__sg_lite_queue || [];
      first_arg.__sg_lite_queue = list;
      list.push({ input: second_arg, init: third_arg, response: fourth_arg });
      document.dispatchEvent(new Event("sg_lite_queue_ready"));
    }
    function fn_5() {
      if (
        window.fetch &&
        typeof URL === "function" &&
        typeof Event === "function" &&
        typeof WeakMap === "function"
      ) {
        var local = window;
        if (!local.sgLiteEarlyInstalled) {
          local.sgLiteEarlyInstalled = !0;
          var fetch = window.fetch;
          window.fetch = function (first_arg, second_arg) {
            if (fn_2(first_arg instanceof Request ? first_arg.url : first_arg))
              return fetch.apply(this, [first_arg, second_arg]);
            var local_2 = null;
            second_arg && second_arg.headers
              ? (local_2 = new Headers(second_arg.headers).get("x-sg-e"))
              : first_arg instanceof Request && (local_2 = first_arg.headers.get("x-sg-e"));
            var local_3 = first_arg,
              local_4 = second_arg;
            if (!local_2 || local_2 === "1" || local_2 === "2") {
              var local_5,
                headers = new Headers(
                  (local_5 = second_arg == null ? void 0 : second_arg.headers) != null
                    ? local_5
                    : first_arg instanceof Request
                      ? first_arg.headers
                      : void 0
                );
              headers.set("x-sg-e", (local_2 === "1" ? "1" : "2") + fn_3());
              first_arg instanceof Request
                ? (local_3 = new Request(first_arg, { headers: headers }))
                : (local_4 = fn({}, second_arg, { headers: headers }));
            }
            return fetch.apply(this, [local_3, local_4]).then(function (first_arg_2) {
              var get_value = first_arg_2.headers.get("X-Sg-Cs");
              ((get_value !== null && get_value !== "") ||
                (first_arg_2.url && first_arg_2.url.indexOf("/sorry/index") > -1) ||
                first_arg_2.headers.has("X-Sorry-Redirect")) &&
                fn_4(local, local_3, local_4, first_arg_2);
              return first_arg_2;
            });
          };
          if (typeof XMLHttpRequest !== "undefined") {
            var prototype = XMLHttpRequest.prototype,
              weak_map = new WeakMap(),
              open = XMLHttpRequest.prototype.open,
              set_request_header = XMLHttpRequest.prototype.setRequestHeader,
              send = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.open = function (first_arg, second_arg) {
              prototype.sgLiteDeferredInstalled ||
                weak_map.set(this, { method: first_arg, A: fn_2(second_arg) });
              open.apply(this, arguments);
            };
            XMLHttpRequest.prototype.setRequestHeader = function (text, second_arg) {
              if (!prototype.sgLiteDeferredInstalled && text.toLowerCase() === "x-sg-e") {
                var local_2 = weak_map.get(this) || {};
                if (second_arg === "1" || second_arg === "2") second_arg = "" + second_arg + fn_3();
                local_2.j = second_arg;
                weak_map.set(this, local_2);
              }
              set_request_header.apply(this, [text, second_arg]);
            };
            XMLHttpRequest.prototype.send = function (first_arg) {
              var that = this;
              if (!prototype.sgLiteDeferredInstalled) {
                var local_2 = weak_map.get(this) || {};
                weak_map.set(this, local_2);
                local_2.A || local_2.j || this.setRequestHeader("x-sg-e", "2" + fn_3());
                var fn_6 = function () {
                  if (
                    that.readyState === XMLHttpRequest.DONE &&
                    (that.removeEventListener("load", fn_6),
                    that.removeEventListener("readystatechange", fn_6),
                    !local_2.A)
                  ) {
                    var response_header = that.getResponseHeader("X-Sg-Cs"),
                      local_3 = response_header !== null && response_header !== "",
                      num = !!that.getResponseHeader("X-Sorry-Redirect"),
                      local_4 = !!that.responseURL && that.responseURL.indexOf("/sorry/index") > -1;
                    if (local_3 || local_4 || num)
                      ((local_4 = new Headers()),
                        local_3 && response_header && local_4.set("X-Sg-Cs", response_header),
                        num && local_4.set("X-Sorry-Redirect", "true"),
                        (response_header = that.responseURL || window.location.href),
                        (local_3 = { url: response_header, headers: local_4 }),
                        (num = {}),
                        local_2.j && (num["x-sg-e"] = local_2.j),
                        fn_4(
                          local,
                          response_header,
                          { method: local_2.method, headers: num },
                          local_3
                        ));
                  }
                };
                this.addEventListener("load", fn_6, { once: !0 });
                this.addEventListener("readystatechange", fn_6);
              }
              send.apply(this, arguments);
            };
          }
        }
      }
    }
    typeof window === "undefined" || window.__karma__ || fn_5();
  }).call(this);
})();
(function () {
  var num = 2500;
  (function () {
    "use strict";
    function fn() {
      var query_selector_all = document.querySelectorAll("link[blocking=render]");
      for (let local of query_selector_all) local.remove();
    }
    var num_2 = num - performance.now();
    num_2 > 0 ? setTimeout(fn, num_2) : fn();
  }).call(this);
})();
(function () {
  var flag = false;
  (function () {
    "use strict";
    var global_scope = this || self;
    var parse = global_scope.JSON.parse,
      stringify = global_scope.JSON.stringify;
    function fn(text, second_arg, third_arg) {
      (text = text.getItem(second_arg + ";;" + third_arg))
        ? ((second_arg = text.indexOf("_")),
          (text = second_arg < 0 ? null : parse(text.substr(second_arg + 1))))
        : (text = null);
      return text;
    }
    function fn_2(first_arg, second_arg, third_arg, fourth_arg, fifth_arg = "m", sixth_arg = !0) {
      var num = !1;
      try {
        if (fifth_arg != "x") {
          var local_2 = first_arg == "s" ? window.sessionStorage : window.localStorage,
            local_3 = fn(local_2, "_c", "i") || 0,
            local_4 = stringify(local_3 + 1);
          local_2.setItem("_c;;i", "p:*|l:9007199254740991_" + local_4);
          var local_5 = local_3;
          local_4 = local_2;
          local_2 = second_arg;
          local_3 = third_arg;
          var local_6 = local_5,
            local_7 = stringify(fourth_arg);
          local_4.setItem(
            local_2 + ";;" + local_3,
            "p:" + fifth_arg + "|l:" + (local_6 + "_") + local_7
          );
          num = !0;
        }
      } catch (error) {}
      sixth_arg &&
        (global_scope.mPPkxd || (global_scope.mPPkxd = []),
        global_scope.mPPkxd.push([num, arguments, local_5]));
    }
    var list = [
      { A: "data-vt-d", types: ["d"] },
      { A: "data-vt-mb", types: ["aimc", "sb", "mb"] },
      { A: "data-vt-rq", types: ["rq"] },
      { A: "data-vt-spth", types: ["spth"] },
      { A: "data-vt-lows", types: ["lows"] },
      { A: "data-vt-stad", types: ["stad"] },
      { A: "data-vt-msu-left", types: ["mcsl", "mbu", "sb"] },
      { A: "data-vt-msu-right", types: ["mcsr", "mbu", "sb"] }
    ];
    function fn_3(first_arg, second_arg, third_arg) {
      try {
        first_arg?.viewTransition?.types?.clear();
        for (let local_2 of second_arg) first_arg?.viewTransition?.types?.add(local_2);
      } catch (error) {
        google.ml(error, !0, { src: third_arg });
      }
    }
    function fn_4() {
      var local_2 = window;
      local_2.mpaVtPsc?.abort();
      local_2.mpaVtPsc = void 0;
    }
    function fn_5(first_arg) {
      fn_4();
      var local_2 = window,
        abort_controller = new AbortController();
      local_2.mpaVtPsc = abort_controller;
      window.addEventListener(
        "pageswap",
        (first_arg_2) => {
          local_2.mpaVtPsc === abort_controller && (local_2.mpaVtPsc = void 0);
          fn_3(first_arg_2, first_arg, "mpa_vt-ps");
          fn_2("s", "mpavt", "mpa-vt-types", JSON.stringify(first_arg));
          fn_6(first_arg);
        },
        { once: !0, signal: abort_controller.signal }
      );
    }
    function fn_6(first_arg) {
      if (window.navigation) {
        var local_2 = window.navigation.currentEntry?.getState() || {};
        local_2.j || (local_2.j = {});
        var local_3;
        (local_3 = local_2.j).next || (local_3.next = {});
        local_2.j.next.types = first_arg;
        window.navigation.updateCurrentEntry({ state: local_2 });
      }
    }
    var local;
    window.addEventListener("pageswap", (first_arg) => {
      first_arg = first_arg.activation?.navigationType;
      (first_arg === "push" || first_arg === "replace") &&
        window.navigation?.currentEntry?.getState()?.j?.next?.types?.length &&
        fn_6([]);
    });
    window.addEventListener("pagereveal", async (first_arg) => {
      first_arg?.viewTransition?.ready?.catch(() => {});
      try {
        fn_7(first_arg);
      } catch (error) {
        google.ml(error instanceof Error ? error : Error(String(error)), !0, { src: "mpa_vt-pr" });
      }
      try {
        await first_arg?.viewTransition?.finished;
      } catch {
      } finally {
        fn_9();
      }
    });
    fn_10();
    document.addEventListener(
      "click",
      (event) => {
        try {
          a: {
            for (let { A: local_3, types: local_4 } of list)
              if (event.target?.closest(`[${local_3}]`)) {
                var local_2 = local_4;
                break a;
              }
            local_2 = [];
          }
          event = local_2;
          event.length > 0 ? (fn_10(), fn_5(event)) : (fn_4(), fn_9());
        } catch (error) {
          google.ml(error, !0, { src: "mpa_vt-t" });
        }
      },
      { capture: !0, passive: !0 }
    );
    function fn_7(first_arg) {
      a: {
        try {
          var local_2 = fn(window.sessionStorage, "mpavt", "mpa-vt-types");
          break a;
        } catch (error) {}
        local_2 = null;
      }
      var local_3 = local_2;
      local_2 = [];
      var navigation = window.navigation;
      navigation =
        navigation?.activation?.from && navigation.activation.navigationType !== "reload"
          ? navigation.activation.navigationType === "traverse" &&
            navigation.activation.entry &&
            navigation.activation.entry.index < navigation.activation.from.index
            ? "b"
            : "f"
          : "o";
      if (local_3)
        try {
          window.sessionStorage.removeItem("mpavt;;mpa-vt-types");
        } catch (error) {}
      if (local_3 && window.navigation?.activation?.navigationType !== "traverse") {
        if (((navigation = "f"), (local_3 = local_2 = JSON.parse(local_3)), window.navigation)) {
          var local_4 = window.navigation.currentEntry?.getState() || {};
          local_4.j || (local_4.j = {});
          var local_5;
          (local_5 = local_4.j).B || (local_5.B = {});
          local_4.j.B.types = local_3 || local_4.j.B.types;
          window.navigation.updateCurrentEntry({ state: local_4 });
        }
      } else
        window.navigation &&
          ((local_5 = window.navigation.currentEntry?.getState()?.j),
          (local_2 =
            navigation === "f"
              ? local_5?.B?.types
              : navigation === "b"
                ? local_5?.next?.types
                : []));
      first_arg.viewTransition &&
        local_2?.length &&
        fn_3(first_arg, [...local_2, navigation], "mpa_vt-pr");
    }
    function fn_8() {
      local?.isConnected ||
        ((local = document.createElement("style")), document.head.append(local));
      return local;
    }
    function fn_9() {
      if (typeof flag === "undefined" || !flag) {
        var element = fn_8();
        element.textContent !== "@view-transition{navigation:none;}" &&
          (element.textContent = "@view-transition{navigation:none;}");
      }
    }
    function fn_10() {
      var element = fn_8();
      element.textContent !== "@view-transition{navigation:auto;}" &&
        (element.textContent = "@view-transition{navigation:auto;}");
    }
  }).call(this);
})();
(function () {
  "use strict";
  var regex =
    /viewport size changed|prepaint layout check failed|page already revealed|document.*hidden/i;
  function fn(first_arg) {
    google.ml(first_arg instanceof Error ? first_arg : Error(String(first_arg)), !0, {
      src: "mpa_vt-c"
    });
  }
  window.addEventListener("pagereveal", async (first_arg) => {
    first_arg = first_arg.viewTransition;
    first_arg?.ready?.catch(() => {});
    if (first_arg?.types?.size) {
      try {
        await first_arg.ready;
      } catch (error) {
        document.visibilityState === "hidden" ||
          (error instanceof Error && (error.name === "AbortError" || regex.test(error.message))) ||
          fn(error);
        return;
      }
      try {
        first_arg = [["root"], ["sb"], ["mb"], ["ubi", !0], ["mode-selector-underbar", !0]];
        let animations = document.getAnimations();
        for (let [local, local_2] of first_arg) fn_3(animations, local, local_2);
      } catch (error) {
        fn(error);
      }
    }
  });
  function fn_2(text) {
    return Number(text.split("px")[0]);
  }
  function fn_3(list, second_arg, third_arg) {
    var text = `::view-transition-group(${second_arg})`;
    if ((list = list.find((first_arg) => first_arg.effect?.pseudoElement === text))) {
      var effect = list.effect,
        keyframes = effect.getKeyframes(),
        dommatrix = new DOMMatrix(keyframes[0].transform),
        local = fn_2(keyframes[0].width),
        local_2 = fn_2(keyframes[0].height),
        dommatrix_2 = new DOMMatrix(keyframes[1].transform),
        local_3 = fn_2(keyframes[1].height);
      local /= fn_2(keyframes[1].width);
      third_arg = third_arg ? local_2 / local_3 : local;
      var local_4 = dommatrix.e;
      dommatrix = dommatrix.f;
      var local_5 = dommatrix_2.e;
      dommatrix_2 = dommatrix_2.f;
      second_arg !== "sb" &&
        (dommatrix + local_2 < 0 || dommatrix_2 + local_3 < 0) &&
        list.cancel();
      effect.setKeyframes([
        {
          transform: `translate(${local_4}px, ${dommatrix}px) scale(${local}, ${third_arg})`,
          easing: keyframes[0].easing
        },
        {
          transform: `translate(${local_5}px, ${dommatrix_2}px) scale(1, 1)`,
          easing: keyframes[1].easing
        }
      ]);
    }
  }
}).call(this);

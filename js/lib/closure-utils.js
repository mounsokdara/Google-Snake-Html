/* utility subset from google/core-framework */
(function (namespace) {
var window = this;
var fn;
var fn_2;
var fn_3;
var fn_4;
var fn_5;
var fn_6;
var fn_7;
var fn_8;
var fn_9;
var fn_10;
var fn_11;
var fn_12;
var fn_13;
var fn_14;
var fn_15;
var fn_16;
var fn_17;
var fn_18;
var fn_19;
var fn_20;
var fn_21;
var fn_170;
var cls;
var local_47;
var fn_190;
var fn_191;
var fn_192;
var fn_193;
var fn_194;
var local_48;
var cls_4;
var local_49;
var fn_195;
var fn_196;
var fn_197;
var fn_386;
var local_90;
var fn_387;
var fn_388;
var fn_389;
var fn_390;
var fn_391;
var fn_392;
var local_91;
var local_92;
var fn_393;
var fn_394;
var fn_395;
var local_95;
var local_96;
namespace.fa = function (first_arg) {
    namespace.ea.setTimeout(() => {
      throw first_arg;
    }, 0);
  };
namespace.ka = function (first_arg, second_arg) {
    return first_arg.indexOf(second_arg) != -1;
  };
namespace.jaa = function (text_8, text_9) {
    return namespace.ka(text_8.toLowerCase(), text_9.toLowerCase());
  };
namespace.laa = function (list_164, list_165) {
    var num_94 = 0;
    list_164 = namespace.la(String(list_164)).split(".");
    list_165 = namespace.la(String(list_165)).split(".");
    var num_95 = Math.max(list_164.length, list_165.length);
    for (let index_13 = 0; num_94 == 0 && index_13 < num_95; index_13++) {
      var local_737 = list_164[index_13] || "",
        local_738 = list_165[index_13] || "";
      do {
        local_737 = /(\d*)(\D*)(.*)/.exec(local_737) || ["", "", "", ""];
        local_738 = /(\d*)(\D*)(.*)/.exec(local_738) || ["", "", "", ""];
        if (local_737[0].length == 0 && local_738[0].length == 0) break;
        num_94 =
          fn(
            local_737[1].length == 0 ? 0 : parseInt(local_737[1], 10),
            local_738[1].length == 0 ? 0 : parseInt(local_738[1], 10)
          ) ||
          fn(local_737[2].length == 0, local_738[2].length == 0) ||
          fn(local_737[2], local_738[2]);
        local_737 = local_737[3];
        local_738 = local_738[3];
      } while (num_94 == 0);
    }
    return num_94;
  };
fn = function (first_arg, second_arg) {
    return first_arg < second_arg ? -1 : first_arg > second_arg ? 1 : 0;
  };
namespace.ma = function () {
    var navigator_3 = namespace.ea.navigator;
    return navigator_3 && (navigator_3 = navigator_3.userAgent) ? navigator_3 : "";
  };
namespace.na = function (first_arg) {
    return namespace.ka(namespace.ma(), first_arg);
  };
fn_2 = function (first_arg) {
    for (
      var local_737 = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"),
        list_164 = [],
        local_738;
      (local_738 = local_737.exec(first_arg));
    )
      list_164.push([local_738[1], local_738[2], local_738[3] || void 0]);
    return list_164;
  };
fn_3 = function (first_arg = !1) {
    return first_arg ? !!local_113 && local_113.brands.length > 0 : !1;
  };
fn_4 = function () {
    return fn_3() ? !1 : namespace.na("Opera");
  };
fn_5 = function () {
    return fn_3() ? !1 : namespace.na("Trident") || namespace.na("MSIE");
  };
fn_6 = function () {
    return fn_3() ? !1 : namespace.na("Edge");
  };
fn_7 = function () {
    return fn_3() ? !1 : namespace.na("Edg/");
  };
fn_8 = function () {
    return fn_3() ? !1 : namespace.na("OPR");
  };
fn_9 = function () {
    return namespace.na("Firefox") || namespace.na("FxiOS");
  };
fn_10 = function () {
    return (
      namespace.na("Safari") &&
      !(
        fn_12() ||
        fn_11() ||
        fn_4() ||
        fn_6() ||
        fn_7() ||
        fn_8() ||
        fn_9() ||
        fn_14() ||
        namespace.na("Android")
      )
    );
  };
fn_11 = function () {
    return fn_3() ? !1 : namespace.na("Coast");
  };
fn_12 = function () {
    return fn_3() ? !1 : ((namespace.na("Chrome") || namespace.na("CriOS")) && !fn_6()) || fn_14();
  };
fn_13 = function () {
    return namespace.na("Android") && !(fn_12() || fn_9() || fn_4() || fn_14());
  };
fn_14 = function () {
    return namespace.na("Silk");
  };
fn_15 = function (list_164) {
    var obj_80 = {};
    list_164.forEach((first_arg) => {
      obj_80[first_arg[0]] = first_arg[1];
    });
    return (list_165) => obj_80[list_165.find((first_arg) => first_arg in obj_80)] || "";
  };
fn_16 = function () {
    var ma = namespace.ma();
    if (fn_5()) return fn_17(ma);
    ma = fn_2(ma);
    var fn_1916 = fn_15(ma);
    return fn_4()
      ? fn_1916(["Version", "Opera"])
      : fn_6()
        ? fn_1916(["Edge"])
        : fn_7()
          ? fn_1916(["Edg"])
          : fn_14()
            ? fn_1916(["Silk"])
            : fn_12()
              ? fn_1916(["Chrome", "CriOS", "HeadlessChrome"])
              : ((ma = ma[2]) && ma[1]) || "";
  };
fn_17 = function (first_arg) {
    var exec = /rv: *([\d\.]*)/.exec(first_arg);
    if (exec && exec[1]) return exec[1];
    exec = "";
    var exec_2 = /MSIE +([\d\.]+)/.exec(first_arg);
    if (exec_2 && exec_2[1])
      if (((first_arg = /Trident\/(\d.\d)/.exec(first_arg)), exec_2[1] == "7.0"))
        if (first_arg && first_arg[1])
          switch (first_arg[1]) {
            case "4.0":
              exec = "8.0";
              break;
            case "5.0":
              exec = "9.0";
              break;
            case "6.0":
              exec = "10.0";
              break;
            case "7.0":
              exec = "11.0";
          }
        else exec = "7.0";
      else exec = exec_2[1];
    return exec;
  };
fn_18 = function (first_arg) {
    var ma = namespace.ma();
    if (first_arg === "Internet Explorer") return fn_5() ? fn_17(ma) : "";
    ma = fn_2(ma);
    var fn_1916 = fn_15(ma);
    switch (first_arg) {
      case "Opera":
        if (fn_4()) return fn_1916(["Version", "Opera"]);
        if (fn_8()) return fn_1916(["OPR"]);
        break;
      case "Microsoft Edge":
        if (fn_6()) return fn_1916(["Edge"]);
        if (fn_7()) return fn_1916(["Edg"]);
        break;
      case "Chromium":
        if (fn_12()) return fn_1916(["Chrome", "CriOS", "HeadlessChrome"]);
    }
    return (first_arg === "Firefox" && fn_9()) ||
      (first_arg === "Safari" && fn_10()) ||
      (first_arg === "Android Browser" && fn_13()) ||
      (first_arg === "Silk" && fn_14())
      ? ((first_arg = ma[2]) && first_arg[1]) || ""
      : "";
  };
fn_19 = function (first_arg) {
    if (fn_3() && first_arg !== "Silk") {
      var find = local_113.brands.find(({ brand: arg }) => arg === first_arg);
      if (!find || !find.version) return NaN;
      find = find.version.split(".");
    } else {
      find = fn_18(first_arg);
      if (find === "") return NaN;
      find = find.split(".");
    }
    return find.length === 0 ? NaN : Number(find[0]);
  };
fn_20 = function (first_arg, second_arg) {
    return fn_19(first_arg) >= second_arg;
  };
fn_21 = function (first_arg) {
    var text_8 = "";
    fn_20("Chromium", 98) || (text_8 = fn_18(first_arg));
    var local_737 = first_arg !== "Silk" && fn_3(!0);
    if (local_737) {
      if (!local_113.brands.find(({ brand: arg }) => arg === first_arg)) return;
    } else if (text_8 === "") return;
    return new cls_9(first_arg, local_737, text_8);
  };
namespace.Jaa = function () {
    return namespace.na("Macintosh");
  };
namespace.ua = function (first_arg, second_arg) {
    return namespace.ta(first_arg, second_arg) >= 0;
  };
namespace.xa = function (first_arg, second_arg) {
    second_arg = namespace.ta(first_arg, second_arg);
    var local_737;
    (local_737 = second_arg >= 0) && namespace.va(first_arg, second_arg);
    return local_737;
  };
namespace.va = function (first_arg, second_arg) {
    return Array.prototype.splice.call(first_arg, second_arg, 1).length == 1;
  };
namespace.Aa = function (list_164) {
    var len_2 = list_164.length;
    if (len_2 > 0) {
      let local_737 = Array(len_2);
      for (let index_13 = 0; index_13 < len_2; index_13++) local_737[index_13] = list_164[index_13];
      return local_737;
    }
    return [];
  };
namespace.cba = function (first_arg, second_arg) {
    var list_164 = [];
    for (let index_13 = 0; index_13 < second_arg; index_13++) list_164[index_13] = first_arg;
    return list_164;
  };
namespace.eba = function (list_164) {
    var random = Math.random;
    for (let num_94 = list_164.length - 1; num_94 > 0; num_94--) {
      let num_95 = Math.floor(random() * (num_94 + 1)),
        local_737 = list_164[num_94];
      list_164[num_94] = list_164[num_95];
      list_164[num_95] = local_737;
    }
  };
namespace.fba = function () {
    return namespace.jaa(namespace.ma(), "WebKit") && !namespace.na("Edge");
  };
namespace.gba = function () {
    return (
      namespace.na("Gecko") &&
      !namespace.fba() &&
      !(namespace.na("Trident") || namespace.na("MSIE")) &&
      !namespace.na("Edge")
    );
  };
namespace.Bc = function (first_arg, second_arg, third_arg) {
    for (let local_737 in first_arg)
      second_arg.call(third_arg, first_arg[local_737], local_737, first_arg);
  };
namespace.Eja = function (first_arg, second_arg) {
    for (let local_737 in first_arg)
      if (second_arg.call(void 0, first_arg[local_737], local_737, first_arg)) return !0;
    return !1;
  };
namespace.Hc = function (first_arg) {
    for (let local_737 in first_arg) return !1;
    return !0;
  };
namespace.Ija = function (first_arg) {
    for (let local_737 in first_arg) delete first_arg[local_737];
  };
namespace.Oja = function (first_arg, second_arg) {
    for (let index_13 = 1; index_13 < arguments.length; index_13++) {
      var local_737 = arguments[index_13];
      for (local_738 in local_737) first_arg[local_738] = local_737[local_738];
      for (let index_14 = 0; index_14 < split_5.length; index_14++) {
        var local_738 = split_5[index_14];
        Object.prototype.hasOwnProperty.call(local_737, local_738) &&
          (first_arg[local_738] = local_737[local_738]);
      }
    }
  };
namespace.Jka = function (first_arg) {
    return String(first_arg).replace(/\-([a-z])/g, function (first_arg_2, text_8) {
      return text_8.toUpperCase();
    });
  };
namespace.Lka = function (text_8) {
    return text_8.replace(
      RegExp("(^|[\\s]+)([a-z])", "g"),
      function (first_arg, second_arg, text_9) {
        return second_arg + text_9.toUpperCase();
      }
    );
  };
namespace.Id = function (first_arg) {
    first_arg && typeof first_arg.dispose == "function" && first_arg.dispose();
  };
namespace.Kd = function () {
    this.oo = this.oo;
    this.Hl = this.Hl;
  };
fn_170 = function (element_4) {
    return typeof element_4.className == "string"
      ? element_4.className
      : (element_4.getAttribute && element_4.getAttribute("class")) || "";
  };
namespace.Rla = function (element_4) {
    return element_4.classList ? element_4.classList : fn_170(element_4).match(/\S+/g) || [];
  };
namespace.Ld = function (element_4, second_arg) {
    typeof element_4.className == "string"
      ? (element_4.className = second_arg)
      : element_4.setAttribute && element_4.setAttribute("class", second_arg);
  };
namespace.Nd = function (element_4, second_arg) {
    return element_4.classList
      ? element_4.classList.contains(second_arg)
      : namespace.ua(namespace.Rla(element_4), second_arg);
  };
namespace.Pd = function (element_4, second_arg) {
    if (element_4.classList) element_4.classList.add(second_arg);
    else if (!namespace.Nd(element_4, second_arg)) {
      let list_164 = fn_170(element_4);
      namespace.Ld(element_4, list_164 + (list_164.length > 0 ? " " + second_arg : second_arg));
    }
  };
namespace.Rd = function (element_4, second_arg) {
    element_4.classList
      ? element_4.classList.remove(second_arg)
      : namespace.Nd(element_4, second_arg) &&
        namespace.Ld(
          element_4,
          Array.prototype.filter
            .call(namespace.Rla(element_4), function (first_arg) {
              return first_arg != second_arg;
            })
            .join(" ")
        );
  };
namespace.Td = function (first_arg, second_arg, third_arg) {
    third_arg ? namespace.Pd(first_arg, second_arg) : namespace.Rd(first_arg, second_arg);
  };
namespace.Xd = function (first_arg, second_arg) {
    var num_94 = !namespace.Nd(first_arg, second_arg);
    namespace.Td(first_arg, second_arg, num_94);
    return num_94;
  };
namespace.Yd = function (first_arg, second_arg, third_arg) {
    return Math.min(Math.max(first_arg, second_arg), third_arg);
  };
namespace.Zd = function (first_arg, second_arg) {
    first_arg %= second_arg;
    return first_arg * second_arg < 0 ? first_arg + second_arg : first_arg;
  };
namespace.Tla = function (first_arg) {
    return (first_arg * 180) / Math.PI;
  };
namespace.de = function (first_arg, second_arg) {
    this.x = first_arg !== void 0 ? first_arg : 0;
    this.y = second_arg !== void 0 ? second_arg : 0;
  };
namespace.ee = function (first_arg, second_arg) {
    this.width = first_arg;
    this.height = second_arg;
  };
namespace.Wla = function () {
    return namespace.fe ? "Webkit" : namespace.ie ? "Moz" : null;
  };
namespace.le = function (first_arg, second_arg, third_arg, fourth_arg) {
    this.top = first_arg;
    this.right = second_arg;
    this.bottom = third_arg;
    this.left = fourth_arg;
  };
namespace.te = function (first_arg) {
    this.id = first_arg;
  };
namespace.ve = function (first_arg, second_arg) {
    namespace.ue.call(this, first_arg ? first_arg.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
      this.offsetY =
      this.offsetX =
        0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.ka = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.timeStamp = 0;
    this.Fi = null;
    first_arg && this.init(first_arg, second_arg);
  };
namespace.ema = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
    this.listener = first_arg;
    this.proxy = null;
    this.src = second_arg;
    this.type = third_arg;
    this.capture = !!fourth_arg;
    this.handler = fifth_arg;
    this.key = ++index;
    this.removed = this.Gra = !1;
  };
cls = function (first_arg) {
    this.src = first_arg;
    this.Gf = {};
    this.ka = 0;
  };
namespace.xe = function () {
    namespace.Kd.call(this);
    this.SLa = new cls(this);
    this.G6d = this;
    this.HXc = null;
  };
namespace.Ee = function (first_arg, second_arg) {
    var local_737 = first_arg;
    second_arg && (local_737 = first_arg.bind(second_arg));
    local_737 = namespace.Ee.c8e(local_737);
    namespace.Ee.R4d
      ? setTimeout(local_737, 0)
      : ((local_737 = namespace.Ee.dQe(local_737)),
        namespace.Ee.fkb || (namespace.Ee.fkb = namespace.Ee.uqe()),
        namespace.Ee.fkb(local_737));
  };
local_47 = function () {
    for (var local_737; (local_737 = local_259.remove());) {
      try {
        local_737.fn.call(local_737.scope);
      } catch (error) {
        namespace.fa(error);
      }
      l_ma.put(local_737);
    }
    local_258 = !1;
  };
namespace.wma = function (first_arg) {
    return first_arg;
  };
namespace.ooa = function () {};
namespace.Ef = function () {};
namespace.poa = function (first_arg) {
    return { value: first_arg, done: !1 };
  };
namespace.roa = function (list_164) {
    if (list_164 instanceof namespace.Ef) return list_164;
    if (typeof list_164.hV == "function") return list_164.hV(!1);
    if (namespace.Ba(list_164)) {
      let index_13 = 0,
        ef = new namespace.Ef();
      ef.next = function () {
        for (;;) {
          if (index_13 >= list_164.length) return namespace.qoa;
          if (index_13 in list_164) return namespace.poa(list_164[index_13++]);
          index_13++;
        }
      };
      return ef;
    }
    throw Error("Va");
  };
namespace.soa = function (first_arg, second_arg) {
    if (namespace.Ba(first_arg)) namespace.Ha(first_arg, second_arg, void 0);
    else
      for (first_arg = namespace.roa(first_arg); ;) {
        let { done: next, value: next_2 } = first_arg.next();
        if (next) break;
        second_arg.call(void 0, next_2, void 0, first_arg);
      }
  };
fn_190 = function (first_arg, second_arg) {
    var roa = namespace.roa(first_arg);
    first_arg = new namespace.Ef();
    first_arg.next = function () {
      for (;;) {
        let { done: next, value: next_2 } = roa.next();
        if (next) return namespace.qoa;
        if (second_arg.call(void 0, next_2, void 0, roa)) return namespace.poa(next_2);
      }
    };
    return first_arg;
  };
fn_191 = function (first_arg, second_arg) {
    var roa = namespace.roa(first_arg);
    first_arg = new namespace.Ef();
    first_arg.next = function () {
      var { done: next, value: next_2 } = roa.next();
      if (next) return namespace.qoa;
      var call = second_arg.call(void 0, next_2, void 0, roa);
      return namespace.poa(call);
    };
    return first_arg;
  };
fn_192 = function (first_arg) {
    return fn_193(arguments);
  };
fn_193 = function (first_arg) {
    var roa = namespace.roa(first_arg);
    first_arg = new namespace.Ef();
    var local_737 = null;
    first_arg.next = function () {
      for (;;) {
        if (local_737 == null) {
          var next = roa.next();
          if (next.done) return namespace.qoa;
          local_737 = namespace.roa(next.value);
        }
        next = local_737.next();
        if (next.done) local_737 = null;
        else return namespace.poa(next.value);
      }
    };
    return first_arg;
  };
fn_194 = function (first_arg) {
    if (namespace.Ba(first_arg)) return namespace.Aa(first_arg);
    first_arg = namespace.roa(first_arg);
    var list_164 = [];
    namespace.soa(first_arg, function (first_arg_2) {
      list_164.push(first_arg_2);
    });
    return list_164;
  };
local_48 = function (first_arg) {
    this.ka = first_arg;
    this.oa = null;
  };
namespace.zoa = function () {
    var local_737 = null;
    try {
      local_737 = namespace.ea.localStorage || null;
    } catch (error) {}
    local_48.call(this, local_737);
  };
namespace.Aoa = function () {
    var local_737 = null;
    try {
      local_737 = namespace.ea.sessionStorage || null;
    } catch (error) {}
    local_48.call(this, local_737);
  };
namespace.Eoa = function (first_arg, second_arg, third_arg, fourth_arg) {
    switch (first_arg) {
      case "Storage mechanism: Storage disabled":
        return;
      case local_288:
        return;
      case "Storage mechanism: Quota exceeded":
        return;
    }
    first_arg = typeof first_arg === "string" ? Error(first_arg) : first_arg;
    third_arg = { op: second_arg, k: third_arg };
    second_arg === "set" && (third_arg.v = fourth_arg);
    google.ml(first_arg, !1, third_arg);
  };
cls_4 = function (first_arg) {
    this.ka = first_arg || { cookie: "" };
  };
namespace.Goa = function () {
    try {
      if (!namespace.Ff.isEnabled()) return !1;
      if (!namespace.Ff.isEmpty()) return !0;
      namespace.Ff.set("TESTCOOKIESENABLED", "1", { maxAge: 60 });
      if (namespace.Ff.get("TESTCOOKIESENABLED") != "1") return !1;
      namespace.Ff.remove("TESTCOOKIESENABLED");
      return !0;
    } catch (error) {
      return !1;
    }
  };
local_49 = function (first_arg, second_arg, third_arg) {
    fn_597(first_arg, second_arg, third_arg);
  };
fn_195 = function (first_arg, second_arg) {
    var local_737 = fn_196(first_arg),
      fn_1916 = (first_arg_2) => {
        local_737.set(
          "i",
          new cls_39({ priority: "*", lastAccessed: Number.MAX_SAFE_INTEGER }, first_arg_2)
        );
      },
      fn_1917 = () => {
        var get_value = local_737.get("i");
        get_value === null && fn_1916(0);
        var num_94 = 0;
        get_value != null && (num_94 = get_value.getValue());
        return num_94;
      };
    return () => {
      fn_597 = second_arg;
      var local_738 = fn_1917();
      fn_1916(local_738 + 1);
      fn_597 = function () {};
      return local_738;
    };
  };
fn_196 = function (first_arg) {
    first_arg in local_292 || (local_292[first_arg] = fn_197("_c", first_arg, local_49, !1));
    return local_292[first_arg];
  };
fn_197 = function (first_arg, second_arg, third_arg, fourth_arg) {
    namespace.Hf(second_arg) || (second_arg = "n");
    if (second_arg == "n") second_arg = new cls_45();
    else {
      if (second_arg in local_290) second_arg = local_290[second_arg];
      else {
        var qoa = new cls_44(fn_596(second_arg));
        second_arg = local_290[second_arg] = qoa;
      }
      second_arg = new cls_42(third_arg, second_arg);
      second_arg = new cls_46(first_arg, second_arg);
      fourth_arg || (second_arg = new cls_45(second_arg));
    }
    return second_arg;
  };
namespace.Ng = function (first_arg, second_arg) {
    var obj_80 = {};
    first_arg in obj_19 || (obj_19[first_arg] = obj_80);
    obj_80 = second_arg.name;
    return obj_19[first_arg][obj_80]
      ? obj_19[first_arg][obj_80]
      : (obj_19[first_arg][obj_80] = new namespace.Mra(first_arg, obj_80, {
          gkb: !!second_arg.gkb
        }));
  };
namespace.Pua = function () {
    return namespace.ea.parentWindow ? namespace.ea.parentWindow : namespace.ea;
  };
fn_386 = function (element_4, second_arg) {
    element_4 && second_arg && element_4.addEventListener("abort", second_arg);
  };
local_90 = function (first_arg) {
    if (first_arg !== obj_28) throw first_arg;
  };
fn_387 = function () {
    fn_388();
    return local_465;
  };
fn_388 = function () {
    if (!local_463) {
      local_463 = !0;
      local_464 = new cls_167();
      var obj_80 = { c1e: local_464 };
      local_465 = new (namespace.bCa || namespace.cCa)(obj_80);
      local_466 = new namespace.eCa(obj_80);
      local_467 = [...namespace.gCa].map((cls_515) => new cls_515(obj_80));
      fn_389();
    }
  };
fn_389 = function () {
    for (let local_737 of local_467);
    fn_859(local_464, local_465, local_466, ...local_467);
  };
fn_390 = function () {
    num_62 ||
      typeof document === "undefined" ||
      ((num_62 = !0),
      document.addEventListener("visibilitychange", () => {
        document.hidden &&
          num_60 &&
          list_44.length > 0 &&
          (local_469 !== null && (window.cancelAnimationFrame(local_469), (local_469 = null)),
          local_470 === null && (local_470 = window.setTimeout(local_92, 50)));
      }));
  };
fn_391 = function () {
    num_60 ||
      list_44.length === 0 ||
      ((num_60 = !0),
      fn_390(),
      typeof document !== "undefined" && document.hidden
        ? (local_470 = window.setTimeout(local_92, 50))
        : (local_469 = window.requestAnimationFrame((first_arg) => {
            local_469 = null;
            var local_737 = num_61 > 0 && first_arg - num_61 < 12 ? 8.33 : 16.67;
            num_61 = first_arg;
            first_arg += local_737;
            local_468 ||
              ((local_468 = new window.MessageChannel()), (local_468.port1.onmessage = local_91));
            local_468.port2.postMessage(first_arg);
          })));
  };
fn_392 = function (first_arg, second_arg) {
    first_arg.zv !== null && window.clearTimeout(first_arg.zv);
    try {
      first_arg.callback(second_arg);
    } catch (error) {
      typeof reportError === "function"
        ? reportError(error)
        : window.setTimeout(() => {
            throw error instanceof Error ? error : Error(String(error));
          }, 0);
    }
  };
local_91 = function (list_164) {
    num_60 = !1;
    var data = list_164.data;
    list_164 = performance.now();
    if (data - list_164 >= 1) {
      for (
        list_45 = list_164 = list_44.splice(0, list_44.length);
        list_164.length > 0 && data - performance.now() >= 1;
      ) {
        let shift = list_164.shift();
        fn_392(shift, {
          didTimeout: !1,
          timeRemaining: () => Math.max(0, data - performance.now())
        });
      }
      list_45 = null;
      list_164.length > 0 && list_44.unshift(...list_164);
    }
    list_44.length > 0 && fn_391();
  };
local_92 = function () {
    num_60 = !1;
    local_470 = null;
    if (list_44.length !== 0) {
      var local_737 = performance.now() + 50,
        splice = list_44.splice(0, list_44.length);
      for (list_45 = splice; splice.length > 0 && local_737 - performance.now() >= 1;) {
        let shift = splice.shift();
        fn_392(shift, {
          didTimeout: !1,
          timeRemaining: () => Math.max(0, local_737 - performance.now())
        });
      }
      list_45 = null;
      splice.length > 0 && list_44.unshift(...splice);
      list_44.length > 0 && fn_391();
    }
  };
fn_393 = function () {
    list_44.length !== 0 ||
      (list_45 && list_45.length !== 0) ||
      (local_469 !== null && (window.cancelAnimationFrame(local_469), (local_469 = null)),
      local_470 !== null && (window.clearTimeout(local_470), (local_470 = null)),
      (num_60 = !1));
  };
fn_394 = function (first_arg) {
    for (let list_164 of [list_44, list_45]) {
      if (!list_164) continue;
      let pos = list_164.findIndex((first_arg_2) => first_arg_2.id === first_arg);
      if (pos !== -1) return list_164.splice(pos, 1)[0];
    }
  };
fn_395 = function (first_arg) {
    (first_arg = fn_394(first_arg)) &&
      fn_392(first_arg, { didTimeout: !0, timeRemaining: () => 0 });
    fn_393();
  };
namespace.ACa = function (first_arg, second_arg) {
    if (typeof window.requestIdleCallback === "function")
      return window.requestIdleCallback(first_arg, second_arg);
    var local_737 = index_4++,
      local_738 = null;
    second_arg &&
      typeof second_arg.timeout === "number" &&
      second_arg.timeout >= 0 &&
      (local_738 = window.setTimeout(() => {
        fn_395(local_737);
      }, second_arg.timeout));
    list_44.push({ id: local_737, callback: first_arg, zv: local_738 });
    fn_391();
    return local_737;
  };
namespace.BCa = function (first_arg) {
    typeof window.cancelIdleCallback === "function"
      ? window.cancelIdleCallback(first_arg)
      : ((first_arg = fn_394(first_arg)) &&
          first_arg.zv !== null &&
          window.clearTimeout(first_arg.zv),
        fn_393());
  };
namespace.CCa = async function () {
    if (window.scheduler?.yield) return window.scheduler.yield();
    window.scheduler?.postTask &&
      window.scheduler.postTask(() => {}, { priority: "user-blocking" });
    return new Promise((fn_1916) => {
      window.setTimeout(() => {
        fn_1916();
      }, 0);
    });
  };
local_95 = function () {
    return local_96;
  };
namespace.eg = function () {
    return local_95;
  };
local_96 = function (first_arg) {
    return first_arg;
  };
namespace._DumpException =
    window._DumpException ||
    function (first_arg) {
      throw first_arg;
    };
window._DumpException = namespace._DumpException;
var local_100;
var local_101;
namespace.Qi = function (text_8, second_arg, third_arg) {
    text_8 = text_8.split(".");
    third_arg = third_arg || namespace.ea;
    for (var local_737; text_8.length && (local_737 = text_8.shift());)
      text_8.length || second_arg === void 0
        ? third_arg[local_737] && third_arg[local_737] !== Object.prototype[local_737]
          ? (third_arg = third_arg[local_737])
          : (third_arg = third_arg[local_737] = {})
        : (third_arg[local_737] = second_arg);
  };
namespace.tca = function (first_arg) {
    var num_94 = typeof first_arg;
    return num_94 != "object"
      ? num_94
      : first_arg
        ? Array.isArray(first_arg)
          ? "array"
          : num_94
        : "null";
  };
namespace.Ba = function (list_164) {
    var tca = namespace.tca(list_164);
    return tca == "array" || (tca == "object" && typeof list_164.length == "number");
  };
namespace.Jg = function (first_arg) {
    var num_94 = typeof first_arg;
    return (num_94 == "object" && first_arg != null) || num_94 == "function";
  };
namespace.xf = function (first_arg) {
    return (
      (Object.prototype.hasOwnProperty.call(first_arg, local_100) && first_arg[local_100]) ||
      (first_arg[local_100] = ++local_101)
    );
  };
local_100 = "closure_uid_" + ((Math.random() * 1e9) >>> 0);
local_101 = 0;
namespace.Wi = function (first_arg, second_arg) {
    var call = Array.prototype.slice.call(arguments, 1);
    return function () {
      var list_164 = call.slice();
      list_164.push.apply(list_164, arguments);
      return first_arg.apply(this, list_164);
    };
  };
namespace.gd = function () {
    return Date.now();
  };
namespace.Xi = function (first_arg, second_arg) {
    function fn_1916() {}
    fn_1916.prototype = second_arg.prototype;
    first_arg.Qf = second_arg.prototype;
    first_arg.prototype = new fn_1916();
    first_arg.prototype.constructor = first_arg;
    first_arg.base = function (first_arg_2, second_arg_2, third_arg) {
      for (
        var local_737 = Array(arguments.length - 2), index_13 = 2;
        index_13 < arguments.length;
        index_13++
      )
        local_737[index_13 - 2] = arguments[index_13];
      return second_arg.prototype[second_arg_2].apply(first_arg_2, local_737);
    };
  };
namespace.la = function (text_8) {
    return text_8.trim();
  };
var local_113;
var navigator_2 = namespace.ea.navigator;
local_113 = navigator_2 ? navigator_2.userAgentData || null : null;
var cls_8 = class {
    constructor(first_arg) {
      this.ka = first_arg;
    }
    G5a(first_arg) {
      return namespace.laa(this.ka, first_arg) >= 0;
    }
  };
var instance = new (class {
    constructor() {
      this.ka = this.oa = void 0;
      this.wa = !1;
    }
    Aa() {
      if (local_113) return this.oa;
    }
    async load() {
      if (local_113)
        return (
          this.ka ||
            ((this.wa = !0),
            (this.ka = (async () => {
              var fn_1916 = (0, namespace.eg)(),
                fn_1917 = fn_1916();
              fn_1916 = fn_1916(1);
              try {
                try {
                  return (this.oa = fn_1916(
                    await fn_1917(local_113.getHighEntropyValues(["fullVersionList"]))
                  ).fullVersionList);
                } finally {
                  (fn_1916(), (this.wa = !1));
                }
              } finally {
                fn_1917();
              }
            })())),
          await this.ka
        );
    }
    CBa() {
      if (this.wa) throw Error("u");
      this.oa = this.ka = void 0;
      this.wa = !1;
    }
  })();
namespace.Ja = {
    E$: {
      kaf: "Android Browser",
      D0a: "Chromium",
      KGb: "Microsoft Edge",
      WCa: "Firefox",
      NGb: "Internet Explorer",
      brb: "Opera",
      Rab: "Safari",
      UZf: "Silk"
    }
  };
namespace.Ja.mSb = fn_4;
namespace.Ja.BGa = fn_5;
namespace.Ja.Whb = fn_6;
namespace.Ja.rxd = fn_7;
namespace.Ja.Mxd = fn_8;
namespace.Ja.UWa = fn_9;
namespace.Ja.EB = fn_10;
namespace.Ja.chg = fn_11;
namespace.Ja.Ygc = function () {
    return (
      (namespace.na("iPad") || namespace.na("iPhone")) &&
      !fn_10() &&
      !fn_12() &&
      !fn_11() &&
      !fn_9() &&
      namespace.na("AppleWebKit")
    );
  };
namespace.Ja.NX = fn_12;
namespace.Ja.xgc = fn_13;
namespace.Ja.byd = fn_14;
namespace.Ja.getVersion = fn_16;
namespace.Ja.oBe = function () {
    return namespace.laa(fn_16(), 10) >= 0;
  };
namespace.Ja.G5a = fn_20;
namespace.Ja.UNa = function (first_arg, second_arg) {
    return fn_19(first_arg) <= second_arg;
  };
var cls_9 = class {
      constructor(first_arg, second_arg, third_arg) {
        this.oa = first_arg;
        this.ka = new cls_8(third_arg);
        this.wa = second_arg;
      }
      Aa() {
        if (this.wa) {
          var aa_2 = instance.Aa();
          if (aa_2 !== void 0)
            return (
              (aa_2 = aa_2.find(({ brand: arg }) => this.oa === arg)),
              new cls_8(aa_2.version)
            );
        }
        if (num_4) return this.ka;
      }
      async load() {
        var fn_1916 = (0, namespace.eg)(),
          fn_1917 = fn_1916();
        fn_1916 = fn_1916(1);
        try {
          if (this.wa) {
            let list_164 = fn_1916(await fn_1917(instance.load()));
            if (list_164 !== void 0) {
              let find = list_164.find(({ brand: arg }) => this.oa === arg);
              return new cls_8(find.version);
            }
          } else fn_1916(await fn_1917(0));
          num_4 = !0;
          return this.ka;
        } finally {
          fn_1917();
        }
      }
    };
var num_4 = !1;
namespace.Ja.Big = async function () {
    var fn_1916 = (0, namespace.eg)(),
      fn_1917 = fn_1916();
    fn_1916 = fn_1916(1);
    try {
      (fn_3(!0) && fn_1916(await fn_1917(instance.load())), (num_4 = !0));
    } finally {
      fn_1917();
    }
  };
namespace.Ja.CBa = () => {
    num_4 = !1;
    instance.CBa();
  };
namespace.Ja.Zne = fn_21;
namespace.Ja.Lfg = function (first_arg) {
    if (fn_3(!0)) {
      var local_737 = fn_21(first_arg);
      return local_737
        ? (local_737 = local_737.Aa())
          ? local_737.ka
          : local_113.brands.find(({ brand: arg }) => arg === first_arg).version
        : "";
    }
    return fn_18(first_arg);
  };
namespace.ta = function (first_arg, second_arg, third_arg) {
    return Array.prototype.indexOf.call(first_arg, second_arg, third_arg);
  };
namespace.Ha = function (first_arg, second_arg, third_arg) {
    Array.prototype.forEach.call(first_arg, second_arg, third_arg);
  };
namespace.ie = namespace.gba();
namespace.fe = namespace.fba();
namespace.fEa = namespace.Jaa();
namespace.jaa(namespace.ma(), "KaiOS");
var split_5 =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
namespace.Kd.prototype.oo = !1;
namespace.Kd.prototype.isDisposed = function () {
    return this.oo;
  };
namespace.Kd.prototype.dispose = function () {
    this.oo || ((this.oo = !0), this.Jc());
  };
namespace.Kd.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
namespace.Kd.prototype.we = function (first_arg) {
    this.addOnDisposeCallback(namespace.Wi(namespace.Id, first_arg));
  };
namespace.Kd.prototype.addOnDisposeCallback = function (fn_1916, second_arg) {
    this.oo
      ? second_arg !== void 0
        ? fn_1916.call(second_arg)
        : fn_1916()
      : (this.Hl || (this.Hl = []),
        second_arg && (fn_1916 = fn_1916.bind(second_arg)),
        this.Hl.push(fn_1916));
  };
namespace.Kd.prototype.Jc = function () {
    if (this.Hl) for (; this.Hl.length;) this.Hl.shift()();
  };
namespace.de.prototype.clone = function () {
    return new namespace.de(this.x, this.y);
  };
namespace.de.prototype.equals = function (first_arg) {
    return first_arg instanceof namespace.de && namespace.iKa(this, first_arg);
  };
namespace.iKa = function (first_arg, second_arg) {
    return first_arg == second_arg
      ? !0
      : first_arg && second_arg
        ? first_arg.x == second_arg.x && first_arg.y == second_arg.y
        : !1;
  };
namespace.Cm = function (first_arg, second_arg) {
    var num_94 = first_arg.x - second_arg.x;
    first_arg = first_arg.y - second_arg.y;
    return Math.sqrt(num_94 * num_94 + first_arg * first_arg);
  };
namespace.ba = namespace.de.prototype;
namespace.ba.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
namespace.ba.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
namespace.ba.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
namespace.ba.translate = function (first_arg, second_arg) {
    first_arg instanceof namespace.de
      ? ((this.x += first_arg.x), (this.y += first_arg.y))
      : ((this.x += Number(first_arg)), typeof second_arg === "number" && (this.y += second_arg));
    return this;
  };
namespace.ba.scale = function (first_arg, second_arg) {
    second_arg = typeof second_arg === "number" ? second_arg : first_arg;
    this.x *= first_arg;
    this.y *= second_arg;
    return this;
  };
namespace.ba = namespace.ee.prototype;
namespace.ba.clone = function () {
    return new namespace.ee(this.width, this.height);
  };
namespace.ba.area = function () {
    return this.width * this.height;
  };
namespace.ba.aspectRatio = function () {
    return this.width / this.height;
  };
namespace.ba.isEmpty = function () {
    return !this.area();
  };
namespace.ba.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
namespace.ba.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
namespace.ba.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
namespace.ba.scale = function (first_arg, second_arg) {
    second_arg = typeof second_arg === "number" ? second_arg : first_arg;
    this.width *= first_arg;
    this.height *= second_arg;
    return this;
  };
var fn_503;
namespace.Gm = function (first_arg, second_arg, third_arg) {
    return namespace.qKa(document, first_arg, second_arg, third_arg);
  };
namespace.qKa = function (element_4, second_arg, third_arg, fourth_arg) {
    element_4 = fourth_arg || element_4;
    return (second_arg = second_arg && second_arg != "*" ? String(second_arg).toUpperCase() : "") ||
      third_arg
      ? element_4.querySelectorAll(second_arg + (third_arg ? "." + third_arg : ""))
      : element_4.getElementsByTagName("*");
  };
namespace.pi = function (first_arg) {
    return fn_503(first_arg || window);
  };
fn_503 = function (element_4) {
    element_4 = element_4.document.documentElement;
    return new namespace.ee(element_4.clientWidth, element_4.clientHeight);
  };
namespace.Qm = function (element_4) {
    for (var local_737; (local_737 = element_4.firstChild);) element_4.removeChild(local_737);
  };
namespace.se = function (first_arg) {
    return first_arg.nodeType == 9 ? first_arg : first_arg.ownerDocument || first_arg.document;
  };
namespace.Wm = function (element_4, second_arg) {
    if ("textContent" in element_4) element_4.textContent = second_arg;
    else if (element_4.nodeType == 3) element_4.data = String(second_arg);
    else if (element_4.firstChild && element_4.firstChild.nodeType == 3) {
      for (; element_4.lastChild != element_4.firstChild;)
        element_4.removeChild(element_4.lastChild);
      element_4.firstChild.data = String(second_arg);
    } else
      (namespace.Qm(element_4),
        element_4.appendChild(namespace.se(element_4).createTextNode(String(second_arg))));
  };
namespace.ba = namespace.le.prototype;
namespace.ba.getWidth = function () {
    return this.right - this.left;
  };
namespace.ba.getHeight = function () {
    return this.bottom - this.top;
  };
namespace.ba.clone = function () {
    return new namespace.le(this.top, this.right, this.bottom, this.left);
  };
namespace.ba.contains = function (first_arg) {
    return this && first_arg
      ? first_arg instanceof namespace.le
        ? first_arg.left >= this.left &&
          first_arg.right <= this.right &&
          first_arg.top >= this.top &&
          first_arg.bottom <= this.bottom
        : first_arg.x >= this.left &&
          first_arg.x <= this.right &&
          first_arg.y >= this.top &&
          first_arg.y <= this.bottom
      : !1;
  };
namespace.ba.expand = function (first_arg, second_arg, third_arg, fourth_arg) {
    namespace.Jg(first_arg)
      ? ((this.top -= first_arg.top),
        (this.right += first_arg.right),
        (this.bottom += first_arg.bottom),
        (this.left -= first_arg.left))
      : ((this.top -= first_arg),
        (this.right += Number(second_arg)),
        (this.bottom += Number(third_arg)),
        (this.left -= Number(fourth_arg)));
    return this;
  };
namespace.ba.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
namespace.ba.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
namespace.ba.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
namespace.ba.translate = function (first_arg, second_arg) {
    first_arg instanceof namespace.de
      ? ((this.left += first_arg.x),
        (this.right += first_arg.x),
        (this.top += first_arg.y),
        (this.bottom += first_arg.y))
      : ((this.left += first_arg),
        (this.right += first_arg),
        typeof second_arg === "number" && ((this.top += second_arg), (this.bottom += second_arg)));
    return this;
  };
namespace.ba.scale = function (first_arg, second_arg) {
    second_arg = typeof second_arg === "number" ? second_arg : first_arg;
    this.left *= first_arg;
    this.right *= first_arg;
    this.top *= second_arg;
    this.bottom *= second_arg;
    return this;
  };
var local_246;
var fn_513;
var local_247;
var fn_514;
var fn_515;
var fn_516;
var fn_517;
var fn_518;
var fn_519;
namespace.cn = function (first_arg, second_arg, third_arg) {
    if (typeof second_arg === "string") fn_513(first_arg, third_arg, second_arg);
    else for (let local_737 in second_arg) fn_513(first_arg, second_arg[local_737], local_737);
  };
local_246 = /^--.+/;
fn_513 = function (element_4, second_arg, third_arg) {
    (third_arg = fn_514(element_4, third_arg)) &&
      (local_246.test(third_arg)
        ? element_4.style.setProperty(third_arg, second_arg)
        : (element_4.style[third_arg] = second_arg));
  };
local_247 = {};
fn_514 = function (element_4, second_arg) {
    var local_737 = local_247[second_arg];
    if (!local_737) {
      var jka = namespace.Jka(second_arg);
      local_737 = jka;
      element_4.style[jka] === void 0 &&
        ((jka = namespace.Wla() + namespace.Lka(jka)),
        element_4.style[jka] !== void 0 && (local_737 = jka));
      local_247[second_arg] = local_737;
    }
    return local_737;
  };
namespace.dn = function (element_4, second_arg) {
    var local_737 = element_4.style[namespace.Jka(second_arg)];
    return typeof local_737 !== "undefined"
      ? local_737
      : element_4.style[fn_514(element_4, second_arg)] || "";
  };
namespace.fn = function (first_arg, second_arg) {
    var se = namespace.se(first_arg);
    return se.defaultView &&
      se.defaultView.getComputedStyle &&
      (first_arg = se.defaultView.getComputedStyle(first_arg, null))
      ? first_arg[second_arg] || first_arg.getPropertyValue(second_arg) || ""
      : "";
  };
namespace.eLa = function (element_4, second_arg) {
    return (
      namespace.fn(element_4, second_arg) ||
      (element_4.currentStyle ? element_4.currentStyle[second_arg] : null) ||
      (element_4.style && element_4.style[second_arg])
    );
  };
namespace.hn = function (element_4, second_arg, third_arg) {
    if (second_arg instanceof namespace.de) {
      var local_737 = second_arg.x;
      second_arg = second_arg.y;
    } else ((local_737 = second_arg), (second_arg = third_arg));
    element_4.style.left = fn_516(local_737, !1);
    element_4.style.top = fn_516(second_arg, !1);
  };
namespace.iLa = function (first_arg) {
    return new namespace.de(first_arg.offsetLeft, first_arg.offsetTop);
  };
fn_515 = function (element_4) {
    try {
      return element_4.getBoundingClientRect();
    } catch (error) {
      return { left: 0, top: 0, right: 0, bottom: 0 };
    }
  };
fn_516 = function (first_arg, second_arg) {
    typeof first_arg == "number" &&
      (first_arg = (second_arg ? Math.round(first_arg) : first_arg) + "px");
    return first_arg;
  };
namespace.sn = function (first_arg) {
    return fn_517(fn_518, first_arg);
  };
fn_517 = function (fn_1916, element_4) {
    if (namespace.eLa(element_4, "display") != "none") return fn_1916(element_4);
    var style = element_4.style,
      display = style.display,
      visibility = style.visibility,
      position = style.position;
    style.visibility = "hidden";
    style.position = "absolute";
    style.display = "inline";
    fn_1916 = fn_1916(element_4);
    style.display = display;
    style.position = position;
    style.visibility = visibility;
    return fn_1916;
  };
fn_518 = function (element_4) {
    var offset_width = element_4.offsetWidth,
      offset_height = element_4.offsetHeight,
      local_737 = namespace.fe && !offset_width && !offset_height;
    return (offset_width === void 0 || local_737) && element_4.getBoundingClientRect
      ? ((element_4 = fn_515(element_4)),
        new namespace.ee(element_4.right - element_4.left, element_4.bottom - element_4.top))
      : new namespace.ee(offset_width, offset_height);
  };
namespace.wn = function (element_4, second_arg) {
    element_4 = element_4.style;
    "opacity" in element_4
      ? (element_4.opacity = second_arg)
      : "MozOpacity" in element_4
        ? (element_4.MozOpacity = second_arg)
        : "filter" in element_4 &&
          (element_4.filter =
            second_arg === "" ? "" : "alpha(opacity=" + Number(second_arg) * 100 + ")");
  };
fn_519 = function (first_arg, second_arg) {
    var fn_1916 = namespace.fn(first_arg, second_arg + "Left"),
      fn_1917 = namespace.fn(first_arg, second_arg + "Right"),
      fn_1918 = namespace.fn(first_arg, second_arg + "Top");
    first_arg = namespace.fn(first_arg, second_arg + "Bottom");
    return new namespace.le(
      parseFloat(fn_1918),
      parseFloat(fn_1917),
      parseFloat(first_arg),
      parseFloat(fn_1916)
    );
  };
namespace.zn = function (first_arg) {
    return fn_519(first_arg, "padding");
  };
namespace.nLa = function (first_arg) {
    var fn_1916 = namespace.fn(first_arg, "borderLeftWidth"),
      fn_1917 = namespace.fn(first_arg, "borderRightWidth"),
      fn_1918 = namespace.fn(first_arg, "borderTopWidth");
    first_arg = namespace.fn(first_arg, "borderBottomWidth");
    return new namespace.le(
      parseFloat(fn_1918),
      parseFloat(fn_1917),
      parseFloat(first_arg),
      parseFloat(fn_1916)
    );
  };
namespace.te.prototype.toString = function () {
    return this.id;
  };
namespace.ue = function (first_arg, second_arg) {
    this.type = first_arg instanceof namespace.te ? String(first_arg) : first_arg;
    this.currentTarget = this.target = second_arg;
    this.defaultPrevented = this.wa = !1;
  };
namespace.ue.prototype.stopPropagation = function () {
    this.wa = !0;
  };
namespace.ue.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
namespace.Xi(namespace.ve, namespace.ue);
namespace.ve.prototype.init = function (event, second_arg) {
    var local_737 = (this.type = event.type),
      event_2 =
        event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : null;
    this.target = event.target || event.srcElement;
    this.currentTarget = second_arg;
    second_arg = event.relatedTarget;
    second_arg ||
      (local_737 == "mouseover"
        ? (second_arg = event.fromElement)
        : local_737 == "mouseout" && (second_arg = event.toElement));
    this.relatedTarget = second_arg;
    event_2
      ? ((this.clientX = event_2.clientX !== void 0 ? event_2.clientX : event_2.pageX),
        (this.clientY = event_2.clientY !== void 0 ? event_2.clientY : event_2.pageY),
        (this.screenX = event_2.screenX || 0),
        (this.screenY = event_2.screenY || 0))
      : ((this.offsetX = namespace.fe || event.offsetX !== void 0 ? event.offsetX : event.layerX),
        (this.offsetY = namespace.fe || event.offsetY !== void 0 ? event.offsetY : event.layerY),
        (this.clientX = event.clientX !== void 0 ? event.clientX : event.pageX),
        (this.clientY = event.clientY !== void 0 ? event.clientY : event.pageY),
        (this.screenX = event.screenX || 0),
        (this.screenY = event.screenY || 0));
    this.button = event.button;
    this.keyCode = event.keyCode || 0;
    this.key = event.key || "";
    this.charCode = event.charCode || (local_737 == "keypress" ? event.keyCode : 0);
    this.ctrlKey = event.ctrlKey;
    this.altKey = event.altKey;
    this.shiftKey = event.shiftKey;
    this.metaKey = event.metaKey;
    this.ka = namespace.fEa ? event.metaKey : event.ctrlKey;
    this.pointerId = event.pointerId || 0;
    this.pointerType = event.pointerType;
    this.state = event.state;
    this.timeStamp = event.timeStamp;
    this.Fi = event;
    event.defaultPrevented && namespace.ve.Qf.preventDefault.call(this);
  };
namespace.ve.prototype.stopPropagation = function () {
    namespace.ve.Qf.stopPropagation.call(this);
    this.Fi.stopPropagation ? this.Fi.stopPropagation() : (this.Fi.cancelBubble = !0);
  };
namespace.ve.prototype.preventDefault = function () {
    namespace.ve.Qf.preventDefault.call(this);
    var fi = this.Fi;
    fi.preventDefault ? fi.preventDefault() : (fi.returnValue = !1);
  };
namespace.ve.prototype.Qna = function () {
    return this.Fi;
  };
var fn_520;
namespace.DLa = "closure_listenable_" + ((Math.random() * 1e6) | 0);
fn_520 = function (first_arg) {
    return !(!first_arg || !first_arg[namespace.DLa]);
  };
var index = 0;
var fn_521 = function (first_arg) {
    first_arg.removed = !0;
    first_arg.listener = null;
    first_arg.proxy = null;
    first_arg.src = null;
    first_arg.handler = null;
  };
cls.prototype.add = function (list_164, second_arg, third_arg, fourth_arg, fifth_arg) {
    var text_8 = list_164.toString();
    list_164 = this.Gf[text_8];
    list_164 || ((list_164 = this.Gf[text_8] = []), this.ka++);
    var local_737 = fn_523(list_164, second_arg, fourth_arg, fifth_arg);
    local_737 > -1
      ? ((second_arg = list_164[local_737]), third_arg || (second_arg.Gra = !1))
      : ((second_arg = new namespace.ema(second_arg, this.src, text_8, !!fourth_arg, fifth_arg)),
        (second_arg.Gra = third_arg),
        list_164.push(second_arg));
    return second_arg;
  };
cls.prototype.remove = function (first_arg, second_arg, third_arg, fourth_arg) {
    first_arg = first_arg.toString();
    if (!(first_arg in this.Gf)) return !1;
    var list_164 = this.Gf[first_arg];
    second_arg = fn_523(list_164, second_arg, third_arg, fourth_arg);
    return second_arg > -1
      ? (fn_521(list_164[second_arg]),
        namespace.va(list_164, second_arg),
        list_164.length == 0 && (delete this.Gf[first_arg], this.ka--),
        !0)
      : !1;
  };
var fn_522 = function (first_arg, second_arg) {
    var type = second_arg.type;
    if (!(type in first_arg.Gf)) return !1;
    var xa = namespace.xa(first_arg.Gf[type], second_arg);
    xa &&
      (fn_521(second_arg),
      first_arg.Gf[type].length == 0 && (delete first_arg.Gf[type], first_arg.ka--));
    return xa;
  };
cls.prototype.removeAll = function (first_arg) {
    first_arg = first_arg && first_arg.toString();
    var index_13 = 0;
    for (let local_737 in this.Gf)
      if (!first_arg || local_737 == first_arg) {
        let list_164 = this.Gf[local_737];
        for (let index_14 = 0; index_14 < list_164.length; index_14++)
          (++index_13, fn_521(list_164[index_14]));
        delete this.Gf[local_737];
        this.ka--;
      }
    return index_13;
  };
cls.prototype.Ffb = function (list_164, second_arg) {
    list_164 = this.Gf[list_164.toString()];
    var list_165 = [];
    if (list_164)
      for (let index_13 = 0; index_13 < list_164.length; ++index_13) {
        let local_737 = list_164[index_13];
        local_737.capture == second_arg && list_165.push(local_737);
      }
    return list_165;
  };
cls.prototype.Efb = function (first_arg, second_arg, third_arg, fourth_arg) {
    first_arg = this.Gf[first_arg.toString()];
    var num_94 = -1;
    first_arg && (num_94 = fn_523(first_arg, second_arg, third_arg, fourth_arg));
    return num_94 > -1 ? first_arg[num_94] : null;
  };
cls.prototype.hasListener = function (first_arg, second_arg) {
    var num_94 = first_arg !== void 0,
      local_737 = num_94 ? first_arg.toString() : "",
      num_95 = second_arg !== void 0;
    return namespace.Eja(this.Gf, function (list_164) {
      for (let index_13 = 0; index_13 < list_164.length; ++index_13)
        if (!(
          (num_94 && list_164[index_13].type != local_737) ||
          (num_95 && list_164[index_13].capture != second_arg)
        ))
          return !0;
      return !1;
    });
  };
var fn_523 = function (list_164, second_arg, third_arg, fourth_arg) {
    for (let index_13 = 0; index_13 < list_164.length; ++index_13) {
      let local_737 = list_164[index_13];
      if (
        !local_737.removed &&
        local_737.listener == second_arg &&
        local_737.capture == !!third_arg &&
        local_737.handler == fourth_arg
      )
        return index_13;
    }
    return -1;
  };
var local_250;
var local_251;
var local_252;
var fn_524;
var fn_525;
var fn_526;
var fn_527;
var local_253;
var fn_528;
var local_254;
local_250 = "closure_lm_" + ((Math.random() * 1e6) | 0);
local_251 = {};
local_252 = 0;
namespace.De = function (first_arg, list_164, third_arg, fourth_arg, fifth_arg) {
    if (fourth_arg && fourth_arg.once)
      return namespace.Dn(first_arg, list_164, third_arg, fourth_arg, fifth_arg);
    if (Array.isArray(list_164)) {
      for (let index_13 = 0; index_13 < list_164.length; index_13++)
        namespace.De(first_arg, list_164[index_13], third_arg, fourth_arg, fifth_arg);
      return null;
    }
    third_arg = namespace.LLa(third_arg);
    return fn_520(first_arg)
      ? first_arg.listen(
          list_164,
          third_arg,
          namespace.Jg(fourth_arg) ? !!fourth_arg.capture : !!fourth_arg,
          fifth_arg
        )
      : fn_524(first_arg, list_164, third_arg, !1, fourth_arg, fifth_arg);
  };
fn_524 = function (element_4, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg) {
    if (!second_arg) throw Error("ka");
    var local_737 = namespace.Jg(fifth_arg) ? !!fifth_arg.capture : !!fifth_arg,
      local_738 = fn_528(element_4);
    local_738 || (element_4[local_250] = local_738 = new cls(element_4));
    third_arg = local_738.add(second_arg, third_arg, fourth_arg, local_737, sixth_arg);
    if (third_arg.proxy) return third_arg;
    fourth_arg = fn_525();
    third_arg.proxy = fourth_arg;
    fourth_arg.src = element_4;
    fourth_arg.listener = third_arg;
    if (element_4.addEventListener)
      (fifth_arg === void 0 && (fifth_arg = !1),
        element_4.addEventListener(second_arg.toString(), fourth_arg, fifth_arg));
    else if (element_4.attachEvent)
      element_4.attachEvent(fn_526(second_arg.toString()), fourth_arg);
    else if (element_4.addListener && element_4.removeListener) element_4.addListener(fourth_arg);
    else throw Error("la");
    local_252++;
    return third_arg;
  };
fn_525 = function () {
    var local_737 = local_253,
      fn_1916 = function (first_arg) {
        return local_737.call(fn_1916.src, fn_1916.listener, first_arg);
      };
    return fn_1916;
  };
namespace.Dn = function (first_arg, list_164, third_arg, fourth_arg, fifth_arg) {
    if (Array.isArray(list_164)) {
      for (let index_13 = 0; index_13 < list_164.length; index_13++)
        namespace.Dn(first_arg, list_164[index_13], third_arg, fourth_arg, fifth_arg);
      return null;
    }
    third_arg = namespace.LLa(third_arg);
    return fn_520(first_arg)
      ? first_arg.listenOnce(
          list_164,
          third_arg,
          namespace.Jg(fourth_arg) ? !!fourth_arg.capture : !!fourth_arg,
          fifth_arg
        )
      : fn_524(first_arg, list_164, third_arg, !0, fourth_arg, fifth_arg);
  };
namespace.En = function (first_arg, list_164, third_arg, fourth_arg, fifth_arg) {
    if (Array.isArray(list_164)) {
      for (let index_13 = 0; index_13 < list_164.length; index_13++)
        namespace.En(first_arg, list_164[index_13], third_arg, fourth_arg, fifth_arg);
      return null;
    }
    fourth_arg = namespace.Jg(fourth_arg) ? !!fourth_arg.capture : !!fourth_arg;
    third_arg = namespace.LLa(third_arg);
    if (fn_520(first_arg)) return first_arg.unlisten(list_164, third_arg, fourth_arg, fifth_arg);
    if (!first_arg) return !1;
    if ((first_arg = fn_528(first_arg)))
      if ((list_164 = first_arg.Efb(list_164, third_arg, fourth_arg, fifth_arg)))
        return namespace.Fn(list_164);
    return !1;
  };
namespace.Fn = function (first_arg) {
    if (typeof first_arg === "number" || !first_arg || first_arg.removed) return !1;
    var src = first_arg.src;
    if (fn_520(src)) return src.Yu(first_arg);
    var type = first_arg.type,
      proxy_2 = first_arg.proxy;
    src.removeEventListener
      ? src.removeEventListener(type, proxy_2, first_arg.capture)
      : src.detachEvent
        ? src.detachEvent(fn_526(type), proxy_2)
        : src.addListener && src.removeListener && src.removeListener(proxy_2);
    local_252--;
    (type = fn_528(src))
      ? (fn_522(type, first_arg), type.ka == 0 && ((type.src = null), (src[local_250] = null)))
      : fn_521(first_arg);
    return !0;
  };
fn_526 = function (first_arg) {
    return first_arg in local_251
      ? local_251[first_arg]
      : (local_251[first_arg] = "on" + first_arg);
  };
namespace.Gn = function (first_arg, list_164, third_arg) {
    if (fn_520(first_arg)) third_arg = first_arg.Vub(list_164, !1, third_arg);
    else {
      let num_94 = !0;
      if ((first_arg = fn_528(first_arg)))
        if ((list_164 = first_arg.Gf[list_164.toString()]))
          for (
            list_164 = list_164.concat(), first_arg = 0;
            first_arg < list_164.length;
            first_arg++
          ) {
            var local_737 = list_164[first_arg];
            local_737 &&
              local_737.capture == 0 &&
              !local_737.removed &&
              ((local_737 = fn_527(local_737, third_arg)), (num_94 = num_94 && local_737 !== !1));
          }
      third_arg = num_94;
    }
    return third_arg;
  };
fn_527 = function (first_arg, second_arg) {
    var listener = first_arg.listener,
      local_737 = first_arg.handler || first_arg.src;
    first_arg.Gra && namespace.Fn(first_arg);
    return listener.call(local_737, second_arg);
  };
local_253 = function (first_arg, second_arg) {
    return first_arg.removed ? !0 : fn_527(first_arg, new namespace.ve(second_arg, this));
  };
fn_528 = function (first_arg) {
    first_arg = first_arg[local_250];
    return first_arg instanceof cls ? first_arg : null;
  };
local_254 = "__closure_events_fn_" + ((Math.random() * 1e9) >>> 0);
namespace.LLa = function (first_arg) {
    if (typeof first_arg === "function") return first_arg;
    first_arg[local_254] ||
      (first_arg[local_254] = function (first_arg_2) {
        return first_arg.handleEvent(first_arg_2);
      });
    return first_arg[local_254];
  };
namespace.VLa = function (first_arg) {
    if (
      (first_arg >= 48 && first_arg <= 57) ||
      (first_arg >= 96 && first_arg <= 106) ||
      (first_arg >= 65 && first_arg <= 90) ||
      (namespace.fe && first_arg == 0)
    )
      return !0;
    switch (first_arg) {
      case 32:
      case 43:
      case 63:
      case 64:
      case 107:
      case 109:
      case 110:
      case 111:
      case 186:
      case 59:
      case 189:
      case 187:
      case 61:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
      case 219:
      case 220:
      case 221:
      case 163:
      case 58:
        return !0;
      case 173:
      case 171:
        return namespace.ie;
      default:
        return !1;
    }
  };
namespace.XLa = function (first_arg) {
    switch (first_arg) {
      case 61:
        return 187;
      case 59:
        return 186;
      case 173:
        return 189;
      case 224:
        return 91;
      case 0:
        return 224;
      default:
        return first_arg;
    }
  };
namespace.Xi(namespace.xe, namespace.Kd);
namespace.xe.prototype[namespace.DLa] = !0;
namespace.ba = namespace.xe.prototype;
namespace.ba.Nfb = function () {
    return this.HXc;
  };
namespace.ba.BDb = function (first_arg) {
    this.HXc = first_arg;
  };
namespace.ba.addEventListener = function (first_arg, second_arg, third_arg, fourth_arg) {
    namespace.De(this, first_arg, second_arg, third_arg, fourth_arg);
  };
namespace.ba.removeEventListener = function (first_arg, second_arg, third_arg, fourth_arg) {
    namespace.En(this, first_arg, second_arg, third_arg, fourth_arg);
  };
namespace.ba.dispatchEvent = function (event) {
    var list_164,
      nfb = this.Nfb();
    if (nfb) for (list_164 = []; nfb; nfb = nfb.Nfb()) list_164.push(nfb);
    nfb = this.G6d;
    var local_737 = event.type || event;
    if (typeof event === "string") event = new namespace.ue(event, nfb);
    else if (event instanceof namespace.ue) event.target = event.target || nfb;
    else {
      var local_738 = event;
      event = new namespace.ue(local_737, nfb);
      namespace.Oja(event, local_738);
    }
    local_738 = !0;
    var local_739;
    if (list_164)
      for (local_739 = list_164.length - 1; !event.wa && local_739 >= 0; local_739--) {
        var local_740 = (event.currentTarget = list_164[local_739]);
        local_738 = local_740.Vub(local_737, !0, event) && local_738;
      }
    event.wa ||
      ((local_740 = event.currentTarget = nfb),
      (local_738 = local_740.Vub(local_737, !0, event) && local_738),
      event.wa || (local_738 = local_740.Vub(local_737, !1, event) && local_738));
    if (list_164)
      for (local_739 = 0; !event.wa && local_739 < list_164.length; local_739++)
        ((local_740 = event.currentTarget = list_164[local_739]),
          (local_738 = local_740.Vub(local_737, !1, event) && local_738));
    return local_738;
  };
namespace.ba.Jc = function () {
    namespace.xe.Qf.Jc.call(this);
    this.removeAllListeners();
    this.HXc = null;
  };
namespace.ba.listen = function (first_arg, second_arg, third_arg, fourth_arg) {
    return this.SLa.add(String(first_arg), second_arg, !1, third_arg, fourth_arg);
  };
namespace.ba.listenOnce = function (first_arg, second_arg, third_arg, fourth_arg) {
    return this.SLa.add(String(first_arg), second_arg, !0, third_arg, fourth_arg);
  };
namespace.ba.unlisten = function (first_arg, second_arg, third_arg, fourth_arg) {
    return this.SLa.remove(String(first_arg), second_arg, third_arg, fourth_arg);
  };
namespace.ba.Yu = function (first_arg) {
    return fn_522(this.SLa, first_arg);
  };
namespace.ba.removeAllListeners = function (first_arg) {
    return this.SLa ? this.SLa.removeAll(first_arg) : 0;
  };
namespace.ba.Vub = function (list_164, second_arg, third_arg) {
    list_164 = this.SLa.Gf[String(list_164)];
    if (!list_164) return !0;
    list_164 = list_164.concat();
    var num_94 = !0;
    for (let index_13 = 0; index_13 < list_164.length; ++index_13) {
      let local_737 = list_164[index_13];
      if (local_737 && !local_737.removed && local_737.capture == second_arg) {
        let listener = local_737.listener,
          local_738 = local_737.handler || local_737.src;
        local_737.Gra && this.Yu(local_737);
        num_94 = listener.call(local_738, third_arg) !== !1 && num_94;
      }
    }
    return num_94 && !third_arg.defaultPrevented;
  };
namespace.ba.Ffb = function (first_arg, second_arg) {
    return this.SLa.Ffb(String(first_arg), second_arg);
  };
namespace.ba.Efb = function (first_arg, second_arg, third_arg, fourth_arg) {
    return this.SLa.Efb(String(first_arg), second_arg, third_arg, fourth_arg);
  };
namespace.ba.hasListener = function (first_arg, second_arg) {
    return this.SLa.hasListener(first_arg !== void 0 ? String(first_arg) : void 0, second_arg);
  };
var fn_537 =
    typeof AsyncContext !== "undefined" && typeof AsyncContext.Snapshot === "function"
      ? (first_arg) => first_arg && AsyncContext.Snapshot.wrap(first_arg)
      : (first_arg) => first_arg;
var cls_25 = class {
    constructor(first_arg, second_arg) {
      this.wa = first_arg;
      this.Aa = second_arg;
      this.oa = 0;
      this.ka = null;
    }
    get() {
      if (this.oa > 0) {
        this.oa--;
        var ka = this.ka;
        this.ka = ka.next;
        ka.next = null;
      } else ka = this.wa();
      return ka;
    }
    put(first_arg) {
      this.Aa(first_arg);
      this.oa < 100 && (this.oa++, (first_arg.next = this.ka), (this.ka = first_arg));
    }
  };
namespace.Ee.dQe = fn_537;
namespace.Ee.R4d = !1;
namespace.Ee.uqe = function () {
    if (typeof MessageChannel !== "undefined") {
      let message_channel = new MessageChannel(),
        obj_80 = {},
        local_737 = obj_80;
      message_channel.port1.onmessage = function () {
        if (obj_80.next !== void 0) {
          obj_80 = obj_80.next;
          let cb_2 = obj_80.cb;
          obj_80.cb = null;
          cb_2();
        }
      };
      return function (first_arg) {
        local_737.next = { cb: first_arg };
        local_737 = local_737.next;
        message_channel.port2.postMessage(0);
      };
    }
    return function (first_arg) {
      namespace.ea.setTimeout(first_arg, 0);
    };
  };
namespace.Ee.c8e = (first_arg) => first_arg;
var cls_26 = class {
      constructor() {
        this.oa = this.ka = null;
      }
      add(first_arg, second_arg) {
        var get_value = l_ma.get();
        get_value.set(first_arg, second_arg);
        this.oa ? (this.oa.next = get_value) : (this.ka = get_value);
        this.oa = get_value;
      }
      remove() {
        var local_737 = null;
        this.ka &&
          ((local_737 = this.ka),
          (this.ka = this.ka.next),
          this.ka || (this.oa = null),
          (local_737.next = null));
        return local_737;
      }
    };
var l_ma = new cls_25(
      () => new cls_27(),
      (first_arg) => first_arg.reset()
    );
var cls_27 = class {
      constructor() {
        this.next = this.scope = this.fn = null;
      }
      set(first_arg, second_arg) {
        this.fn = first_arg;
        this.scope = second_arg;
        this.next = null;
      }
      reset() {
        this.next = this.scope = this.fn = null;
      }
    };
var fn_538;
var local_258;
var local_259;
var fn_539;
local_258 = !1;
local_259 = new cls_26();
namespace.qMa = (first_arg, second_arg) => {
    fn_538 || fn_539();
    local_258 || (fn_538(), (local_258 = !0));
    local_259.add(first_arg, second_arg);
  };
fn_539 = () => {
    var resolve_2 = Promise.resolve(void 0);
    fn_538 = () => {
      resolve_2.then(local_47);
    };
  };
var fn_540 = function (first_arg) {
    if (!first_arg) return !1;
    try {
      return !!first_arg.$goog_Thenable;
    } catch (error) {
      return !1;
    }
  };
namespace.Kn = function (first_arg, second_arg, third_arg) {
    if (typeof first_arg === "function") third_arg && (first_arg = first_arg.bind(third_arg));
    else if (first_arg && typeof first_arg.handleEvent == "function")
      first_arg = first_arg.handleEvent.bind(first_arg);
    else throw Error("oa");
    return Number(second_arg) > 2147483647
      ? -1
      : namespace.ea.setTimeout(first_arg, second_arg || 0);
  };
namespace.Ln = function (first_arg) {
    namespace.ea.clearTimeout(first_arg);
  };
var fn_573;
fn_573 = function (first_arg, second_arg, fn_1916 = (cls_515) => new cls_515()) {
    if (!second_arg.ctor) return second_arg.instance;
    fn_1916 = fn_1916(second_arg.ctor);
    first_arg.oa && (delete second_arg.ctor, (second_arg.instance = fn_1916));
    return fn_1916;
  };
namespace.xOa = class {
    constructor() {
      this.ka = [];
      this.oa = !1;
    }
    delegate(first_arg) {
      return this.ka.length ? fn_573(this, this.ka[0], first_arg) : void 0;
    }
  };
namespace.Xn = function (first_arg, second_arg) {
    first_arg.ka.push({ instance: second_arg });
  };
namespace.Yn = class extends namespace.xOa {};
namespace.bo = class {
    constructor(first_arg, second_arg) {
      this.element = first_arg;
      this.type = second_arg;
    }
  };
namespace.rPa = new namespace.Yn();
var fn_586;
var local_286;
fn_586 = function (first_arg) {
    first_arg.delegate || (first_arg.delegate = namespace.rPa.delegate());
    return first_arg.delegate;
  };
local_286 = new (class {
    ka() {
      return this.delegate != null;
    }
    JK(first_arg) {
      return fn_586(this).JK(first_arg);
    }
    Ulc(first_arg) {
      return fn_586(this).Ulc(first_arg);
    }
    flush() {
      fn_586(this).flush();
    }
    o7a(first_arg) {
      return fn_586(this).o7a(first_arg);
    }
    debounce(first_arg, second_arg) {
      return fn_586(this).debounce(first_arg, second_arg);
    }
    setTimeout(first_arg, second_arg, ...arg) {
      return fn_586(this).setTimeout(first_arg, second_arg, ...arg);
    }
    clearTimeout(first_arg) {
      fn_586(this).clearTimeout(first_arg);
    }
    clearInterval(first_arg) {
      fn_586(this).clearInterval(first_arg);
    }
    setInterval(first_arg, second_arg, ...arg) {
      return fn_586(this).setInterval(first_arg, second_arg, ...arg);
    }
    yield() {
      return fn_586(this).yield();
    }
    requestIdleCallback(first_arg, second_arg) {
      return fn_586(this).requestIdleCallback(first_arg, second_arg);
    }
    cancelIdleCallback(first_arg) {
      fn_586(this).cancelIdleCallback(first_arg);
    }
  })();
local_286.flush.bind(local_286);
namespace.ho = local_286.setTimeout.bind(local_286);
namespace.io = local_286.clearTimeout.bind(local_286);
local_286.ka.bind(local_286);
namespace.Qi("google.lve.G", namespace.bo);
namespace.Qi("google.setTimeoutSx", namespace.ho);
var local_287 = Error("Ta");
var local_288 = Error("Ua");
namespace.Ef.prototype.next = function () {
    return namespace.qoa;
  };
namespace.qoa = { done: !0, value: void 0 };
namespace.Ef.prototype.hV = function () {
    return this;
  };
var fn_587 = function (first_arg) {
      if (first_arg instanceof cls_36 || first_arg instanceof cls_37 || first_arg instanceof cls_38)
        return first_arg;
      if (typeof first_arg.next == "function") return new cls_36(() => first_arg);
      if (typeof first_arg[Symbol.iterator] == "function")
        return new cls_36(() => first_arg[Symbol.iterator]());
      if (typeof first_arg.hV == "function") return new cls_36(() => first_arg.hV());
      throw Error("Wa");
    };
var cls_36 = class {
      constructor(first_arg) {
        this.oa = first_arg;
      }
      hV() {
        return new cls_37(this.oa());
      }
      [Symbol.iterator]() {
        return new cls_38(this.oa());
      }
      ka() {
        return new cls_38(this.oa());
      }
    };
var cls_37 = class extends namespace.Ef {
      constructor(first_arg) {
        super();
        this.g6a = first_arg;
      }
      next() {
        return this.g6a.next();
      }
      [Symbol.iterator]() {
        return new cls_38(this.g6a);
      }
      ka() {
        return new cls_38(this.g6a);
      }
    };
var cls_38 = class extends cls_36 {
      constructor(first_arg) {
        super(() => first_arg);
        this.g6a = first_arg;
      }
      next() {
        return this.g6a.next();
      }
    };
var fn_588 = function () {};
namespace.Xi(fn_588, namespace.ooa);
fn_588.prototype.rl = function () {
    var index_13 = 0;
    for (let local_737 of this) index_13++;
    return index_13;
  };
fn_588.prototype[Symbol.iterator] = function () {
    return fn_587(this.hV(!0)).ka();
  };
fn_588.prototype.clear = function () {
    var from = Array.from(this);
    for (let local_737 of from) this.remove(local_737);
  };
namespace.Xi(local_48, fn_588);
namespace.ba = local_48.prototype;
namespace.ba.isAvailable = function () {
    if (this.oa === null) {
      var ka = this.ka;
      if (ka)
        try {
          ka.setItem("__sak", "1");
          ka.removeItem("__sak");
          var num_94 = !0;
        } catch (error) {
          num_94 =
            error instanceof DOMException &&
            (error.name === "QuotaExceededError" ||
              error.code === 22 ||
              error.code === 1014 ||
              error.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            ka &&
            ka.length !== 0;
        }
      else num_94 = !1;
      this.oa = num_94;
    }
    return this.oa;
  };
namespace.ba.set = function (first_arg, second_arg) {
    fn_589(this);
    try {
      this.ka.setItem(first_arg, second_arg);
    } catch (error) {
      if (this.ka.length == 0) throw "Storage mechanism: Storage disabled";
      throw "Storage mechanism: Quota exceeded";
    }
  };
namespace.ba.get = function (first_arg) {
    fn_589(this);
    first_arg = this.ka.getItem(first_arg);
    if (typeof first_arg !== "string" && first_arg !== null)
      throw "Storage mechanism: Invalid value was encountered";
    return first_arg;
  };
namespace.ba.remove = function (first_arg) {
    fn_589(this);
    this.ka.removeItem(first_arg);
  };
namespace.ba.rl = function () {
    fn_589(this);
    return this.ka.length;
  };
namespace.ba.hV = function (first_arg) {
    fn_589(this);
    var index_13 = 0,
      ka = this.ka,
      ef = new namespace.Ef();
    ef.next = function () {
      if (index_13 >= ka.length) return namespace.qoa;
      var key = ka.key(index_13++);
      if (first_arg) return namespace.poa(key);
      key = ka.getItem(key);
      if (typeof key !== "string") throw "Storage mechanism: Invalid value was encountered";
      return namespace.poa(key);
    };
    return ef;
  };
namespace.ba.clear = function () {
    fn_589(this);
    this.ka.clear();
  };
namespace.ba.key = function (first_arg) {
    fn_589(this);
    return this.ka.key(first_arg);
  };
var fn_589 = function (first_arg) {
    if (first_arg.ka == null) throw Error("Xa");
    first_arg.isAvailable() || namespace.fa(Error("Xa"));
  };
namespace.Xi(namespace.zoa, local_48);
namespace.Xi(namespace.Aoa, local_48);
namespace.DPa = namespace.ea.JSON.stringify;
var fn_590;
namespace.ba = cls_4.prototype;
namespace.ba.isEnabled = function () {
    if (!namespace.ea.navigator.cookieEnabled) return !1;
    if (!this.isEmpty()) return !0;
    this.set("TESTCOOKIESENABLED", "1", { maxAge: 60 });
    if (this.get("TESTCOOKIESENABLED") !== "1") return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0;
  };
namespace.ba.set = function (first_arg, second_arg, third_arg) {
    var num_94 = !1;
    if (typeof third_arg === "object") {
      var same_site = third_arg.sameSite;
      num_94 = third_arg.secure || !1;
      var local_737 = third_arg.domain || void 0;
      var local_738 = third_arg.path || void 0;
      var max_age = third_arg.maxAge;
    }
    if (/[;=\s]/.test(first_arg)) throw Error("Ya`" + first_arg);
    if (/[;\r\n]/.test(second_arg)) throw Error("Za`" + second_arg);
    max_age === void 0 && (max_age = -1);
    third_arg = local_737 ? ";domain=" + local_737 : "";
    local_738 = local_738 ? ";path=" + local_738 : "";
    num_94 = num_94 ? ";secure" : "";
    max_age =
      max_age < 0
        ? ""
        : max_age == 0
          ? ";expires=" + new Date(1970, 1, 1).toUTCString()
          : ";expires=" + new Date(Date.now() + max_age * 1e3).toUTCString();
    this.ka.cookie =
      first_arg +
      "=" +
      second_arg +
      third_arg +
      local_738 +
      max_age +
      num_94 +
      (same_site != null ? ";samesite=" + same_site : "");
  };
namespace.ba.get = function (first_arg, second_arg) {
    var list_164 = first_arg + "=",
      split_14 = (this.ka.cookie || "").split(";");
    for (let index_13 = 0, list_165; index_13 < split_14.length; index_13++) {
      list_165 = namespace.la(split_14[index_13]);
      if (list_165.lastIndexOf(list_164, 0) == 0) return list_165.slice(list_164.length);
      if (list_165 == first_arg) return "";
    }
    return second_arg;
  };
namespace.ba.remove = function (first_arg, second_arg, third_arg) {
    var num_94 = this.get(first_arg) !== void 0;
    this.set(first_arg, "", { maxAge: 0, path: second_arg, domain: third_arg });
    return num_94;
  };
namespace.ba.getKeys = function () {
    return fn_590(this).keys;
  };
namespace.ba.wI = function () {
    return fn_590(this).values;
  };
namespace.ba.isEmpty = function () {
    return !this.ka.cookie;
  };
namespace.ba.rl = function () {
    return this.ka.cookie ? (this.ka.cookie || "").split(";").length : 0;
  };
namespace.ba.clear = function () {
    var keys = fn_590(this).keys;
    for (let num_94 = keys.length - 1; num_94 >= 0; num_94--) this.remove(keys[num_94]);
  };
fn_590 = function (list_164) {
    list_164 = (list_164.ka.cookie || "").split(";");
    var list_165 = [],
      list_166 = [];
    for (let index_13 = 0; index_13 < list_164.length; index_13++) {
      var la = namespace.la(list_164[index_13]);
      var pos = la.indexOf("=");
      pos == -1
        ? (list_165.push(""), list_166.push(la))
        : (list_165.push(la.substring(0, pos)), list_166.push(la.substring(pos + 1)));
    }
    return { keys: list_165, values: list_166 };
  };
namespace.Ff = new cls_4(typeof document == "undefined" ? null : document);
var local_289;
var cls_39;
local_289 = RegExp("^p:([a-z\\*])\\|l:(\\d+)", "i");
namespace.GPa = function (first_arg, second_arg, third_arg) {
    return "p:" + second_arg + "|l:" + (third_arg + "_") + first_arg;
  };
cls_39 = class {
    constructor(first_arg, second_arg, third_arg) {
      this.ka = second_arg;
      this.oa = third_arg;
      this.metadata = first_arg;
    }
    getValue() {
      if (this.ka === void 0) {
        a: {
          var oa = this.oa;
          try {
            let parse = JSON.parse(oa);
            if (parse === null) throw Error("$a`" + oa);
            var local_737 = parse;
            break a;
          } catch (error) {
            throw Error("$a`" + oa);
          }
          local_737 = void 0;
        }
        this.ka = local_737;
      }
      return this.ka;
    }
    serialize() {
      this.oa === void 0 && (this.oa = namespace.DPa(this.ka));
      return namespace.GPa(this.oa, this.metadata.priority, this.metadata.lastAccessed);
    }
  };
var fn_591 = function (first_arg) {
      for (let local_737 of fn_194(first_arg)) first_arg.remove(local_737);
      first_arg.reset();
    };
var cls_40 = class {
      clear() {
        fn_591(this);
      }
      reset() {}
    };
var cls_41 = class extends cls_40 {
    constructor(first_arg) {
      super();
      this.E9 = first_arg;
    }
    get(first_arg, second_arg = !1) {
      return this.E9.get(first_arg, second_arg);
    }
    has(first_arg) {
      return this.E9.has(first_arg);
    }
    set(first_arg, second_arg) {
      this.E9.set(first_arg, second_arg);
    }
    remove(first_arg) {
      this.E9.remove(first_arg);
    }
    clear() {
      this.E9.clear();
    }
    reset() {
      this.E9.reset();
    }
    hV() {
      return this.E9.hV();
    }
  };
var fn_592 = function (first_arg, fn_1916, third_arg, fourth_arg = {}) {
      try {
        fn_1916();
      } catch (error) {
        first_arg.ka(error, third_arg, fourth_arg);
      }
    };
var cls_42 = class extends cls_41 {
      constructor(first_arg, second_arg) {
        super(second_arg);
        this.ka = first_arg;
      }
      get(first_arg, second_arg = !1) {
        var local_737 = null;
        fn_592(this, () => (local_737 = super.get(first_arg, second_arg)), "get", {
          key: first_arg
        });
        return local_737;
      }
      has(first_arg) {
        var num_94 = !1;
        fn_592(this, () => (num_94 = super.has(first_arg)), "has", { key: first_arg });
        return num_94;
      }
      set(first_arg, second_arg) {
        fn_592(this, () => super.set(first_arg, second_arg), "set", {
          key: first_arg,
          value: second_arg.getValue()
        });
      }
      remove(first_arg) {
        fn_592(this, () => super.remove(first_arg), "remove", { key: first_arg });
      }
      hV() {
        try {
          var h_v = this.E9.hV();
        } catch (error) {
          return (this.ka(error, "iterator", {}), new namespace.Ef());
        }
        var index_13 = 0,
          ef = new namespace.Ef();
        ef.next = () => {
          for (;;)
            try {
              let next = h_v.next();
              return next.done ? namespace.qoa : namespace.poa(next.value);
            } catch (error) {
              index_13++;
              if (index_13 > 5) return namespace.qoa;
              this.ka(error, "iterator", {});
            }
        };
        return ef;
      }
      clear() {
        fn_592(this, () => super.clear(), "clear");
      }
      reset() {
        fn_592(this, () => super.reset(), "reset");
      }
    };
var cls_43 = class extends cls_41 {
    constructor(first_arg, second_arg) {
      super(second_arg);
      this.ka = first_arg;
    }
    get(first_arg, second_arg = !1) {
      var get_value = super.get(first_arg, second_arg);
      !second_arg &&
        get_value &&
        get_value.metadata.priority < "x" &&
        ((get_value.metadata.lastAccessed = this.ka()), super.set(first_arg, get_value));
      return get_value;
    }
    set(first_arg, second_arg) {
      second_arg.metadata.priority < "x" && (second_arg.metadata.lastAccessed = this.ka());
      super.set(first_arg, second_arg);
    }
  };
var num_40 = 2 / 3;
var fn_593 = function (
      first_arg,
      list_164,
      third_arg,
      fourth_arg,
      list_165,
      sixth_arg,
      seventh_arg = 0
    ) {
      sixth_arg = sixth_arg || list_164.length + list_165.length;
      if (first_arg.oa !== void 0 && seventh_arg == 0 && sixth_arg >= first_arg.oa) throw local_287;
      try {
        first_arg.Aa.set(list_164, list_165);
      } catch (error) {
        if (error == "Storage mechanism: Quota exceeded" && seventh_arg < 4) {
          fn_594(first_arg);
          first_arg.oa = first_arg.wa + Math.ceil(num_40 * sixth_arg);
          if (!(first_arg.oa > first_arg.wa + sixth_arg)) {
            var local_737 = fn_595(first_arg, third_arg);
            for (let local_738 of local_737)
              if ((first_arg.remove(local_738), first_arg.oa > first_arg.wa + sixth_arg)) break;
          }
          fn_593(first_arg, list_164, third_arg, fourth_arg, list_165, sixth_arg, seventh_arg + 1);
          return;
        }
        throw error;
      }
      first_arg.wa += sixth_arg;
      first_arg.oa !== void 0 && (first_arg.oa = Math.max(first_arg.oa, first_arg.wa));
      first_arg.ka[list_164] = { priority: third_arg, lastAccessed: fourth_arg, weight: sixth_arg };
    };
var fn_594 = function (first_arg) {
      first_arg.Ba ||
        (namespace.soa(first_arg, (first_arg_2) => {
          first_arg_2 in first_arg.ka || first_arg.get(first_arg_2);
        }),
        (first_arg.Ba = !0));
    };
var fn_595 = function (first_arg, second_arg) {
      var from = Array.from(Object.keys(first_arg.ka));
      from = from.filter((first_arg_2) => first_arg.ka[first_arg_2].priority >= second_arg);
      if (from.length == 0) throw local_288;
      from.sort((first_arg_2, second_arg_2) => {
        first_arg_2 = first_arg.ka[first_arg_2];
        second_arg_2 = first_arg.ka[second_arg_2];
        return first_arg_2.priority == second_arg_2.priority
          ? first_arg_2.lastAccessed - second_arg_2.lastAccessed
          : first_arg_2.priority < second_arg_2.priority
            ? 1
            : -1;
      });
      return from;
    };
var cls_44 = class extends cls_40 {
      constructor(first_arg) {
        super();
        this.Aa = first_arg;
        this.wa = 0;
        this.ka = {};
        this.Ba = !1;
      }
      get(list_164) {
        var get_value = this.Aa.get(list_164);
        if (get_value === null) return null;
        var pos = get_value.indexOf("_");
        pos = pos < 0 ? null : { SHe: get_value.substr(0, pos), i6e: get_value.substr(pos + 1) };
        if (pos === null) pos = null;
        else {
          var exec = local_289.exec(pos.SHe);
          if (exec === null) var local_737 = null;
          else
            ((local_737 = exec[1]),
              (exec = parseInt(exec[2], 10)),
              (local_737 = Number.isNaN(exec)
                ? null
                : { priority: local_737, lastAccessed: exec }));
          pos = local_737 === null ? null : new cls_39(local_737, void 0, pos.i6e);
        }
        if (pos === null) return null;
        this.ka[list_164] === void 0 &&
          ((get_value = list_164.length + get_value.length),
          (this.ka[list_164] = {
            priority: pos.metadata.priority,
            lastAccessed: pos.metadata.lastAccessed,
            weight: get_value
          }),
          (this.wa += get_value),
          this.oa !== void 0 && (this.oa += get_value));
        return pos;
      }
      has(first_arg) {
        return this.Aa.get(first_arg) !== null;
      }
      remove(list_164) {
        var get_value = this.Aa.get(list_164);
        get_value !== null &&
          (list_164 in this.ka &&
            (delete this.ka[list_164], (this.wa -= list_164.length + get_value.length)),
          this.Aa.remove(list_164));
      }
      reset() {
        this.oa = void 0;
        this.wa = 0;
        for (let local_737 of Object.keys(this.ka)) delete this.ka[local_737];
      }
      set(first_arg, second_arg) {
        first_arg in this.ka && this.remove(first_arg);
        fn_593(
          this,
          first_arg,
          second_arg.metadata.priority,
          second_arg.metadata.lastAccessed,
          second_arg.serialize()
        );
      }
      hV() {
        return this.Aa.hV(!0);
      }
    };
var cls_45 = class extends cls_40 {
    constructor(first_arg = null) {
      super();
      this.ka = first_arg;
      this.oa = {};
    }
    get(first_arg, second_arg = !1) {
      var local_737 = this.oa[first_arg] || null;
      local_737 === null &&
        this.ka &&
        ((local_737 = this.ka.get(first_arg, second_arg)),
        local_737 !== null && (this.oa[first_arg] = local_737));
      return local_737;
    }
    has(first_arg) {
      return this.oa.hasOwnProperty(first_arg) || (this.ka != null && this.ka.has(first_arg));
    }
    set(first_arg, second_arg) {
      this.oa[first_arg] = second_arg;
      second_arg.metadata.priority < "x" && this.ka && this.ka.set(first_arg, second_arg);
    }
    remove(first_arg) {
      var local_737 = this.oa[first_arg];
      this.ka &&
        ((local_737 && local_737.metadata.priority < "x") || !local_737) &&
        this.ka.remove(first_arg);
      delete this.oa[first_arg];
    }
    clear() {
      this.ka && this.ka.clear();
      this.oa = {};
    }
    hV() {
      var keys = Object.keys(this.oa);
      keys = namespace.roa(keys);
      if (!this.ka) return keys;
      var local_737 = fn_190(this.ka, (first_arg) => !(first_arg in this.oa));
      return fn_192(keys, local_737);
    }
  };
var cls_46 = class extends cls_41 {
    constructor(first_arg, second_arg) {
      super(second_arg);
      this.ka = first_arg + ";;";
    }
    get(first_arg, second_arg = !1) {
      return super.get(this.ka + first_arg, second_arg);
    }
    has(first_arg) {
      return super.has(this.ka + first_arg);
    }
    set(first_arg, second_arg) {
      super.set(this.ka + first_arg, second_arg);
    }
    remove(first_arg) {
      super.remove(this.ka + first_arg);
    }
    hV() {
      var len_2 = this.ka.length,
        local_737 = fn_191(this.E9, (text_8) => {
          if (text_8.substr(0, len_2) == this.ka) return text_8.substr(len_2);
        });
      return fn_190(local_737, namespace.wma);
    }
    clear() {
      fn_591(this);
    }
    reset() {}
  };
var fn_596;
var local_290;
var local_291;
var local_292;
var fn_597;
namespace.Hf = function (first_arg) {
    if (first_arg == "n") return !0;
    first_arg = fn_596(first_arg);
    return (
      !(first_arg instanceof namespace.zoa && namespace.Ja.BGa() && !namespace.Goa()) &&
      first_arg.isAvailable()
    );
  };
fn_596 = function (first_arg) {
    if (first_arg in local_291) return local_291[first_arg];
    var local_737;
    first_arg == "s" ? (local_737 = new namespace.Aoa()) : (local_737 = new namespace.zoa());
    return (local_291[first_arg] = local_737);
  };
namespace.Mra = class {
    constructor(
      first_arg,
      second_arg,
      { errorHandler: arg = namespace.RPa, gkb: arg_2 = !1 } = {}
    ) {
      var list_164 = (this.getNextId = fn_195(first_arg, arg));
      arg = fn_197(second_arg, first_arg, arg, arg_2);
      this.ka = new cls_43(list_164, arg);
      if ((arg = namespace.ea.mPPkxd)) {
        list_164 = [];
        for (let local_738 of arg)
          if (((arg = local_738[1]), arg[0] == first_arg && arg[1] == second_arg)) {
            var local_737 = local_738[1];
            arg = local_737[4] || "m";
            arg_2 = local_737[2];
            local_737 = local_737[3];
            local_738[0] ? this.ka.get(arg_2) : this.set(arg_2, local_737, arg);
          } else list_164.push(local_738);
        namespace.ea.mPPkxd = list_164;
      }
    }
    set(first_arg, second_arg, third_arg = "m") {
      this.ka.set(first_arg, new cls_39({ priority: third_arg }, second_arg));
    }
    get(first_arg) {
      return (first_arg = this.ka.get(first_arg)) ? first_arg.getValue() : null;
    }
    has(first_arg) {
      return this.ka.has(first_arg);
    }
    hV() {
      return fn_190(
        fn_191(this.ka, (first_arg) => {
          var get_value = this.ka.get(first_arg, !0);
          return get_value
            ? {
                key: first_arg,
                value: get_value.getValue(),
                priority: get_value.metadata.priority,
                lastAccessed: get_value.metadata.lastAccessed
              }
            : null;
        }),
        (first_arg) => !!first_arg
      );
    }
    [Symbol.iterator]() {
      return this.hV();
    }
    remove(first_arg) {
      this.ka.remove(first_arg);
    }
    clear() {
      this.ka.clear();
    }
  };
local_290 = {};
local_291 = {};
local_292 = {};
namespace.RPa = function () {};
fn_597 = function () {};
namespace.UPa = { name: "LH" };
namespace.RPa = (first_arg, second_arg, event) => {
    var key = event.key;
    key.startsWith(namespace.UPa.name + ";;") ||
      (first_arg !== local_287 && namespace.Eoa(first_arg, second_arg, key, event.value));
  };
var obj_19 = {};
window.google = window.google || {};
namespace.Wq = function () {
    namespace.Gn(window, "attn_dom_update", null);
  };
window.google = window.google || {};
window.google.domchange = namespace.Wq;
window.google.attnSignal = function (first_arg, second_arg) {
    namespace.Gn(window, first_arg, second_arg);
  };
namespace.Xq = class {
    constructor() {
      this.promise = new Promise((first_arg, second_arg) => {
        this.resolve = first_arg;
        this.reject = second_arg;
      });
    }
  };
namespace.cbb = function (first_arg, second_arg, third_arg) {
    return new namespace.bbb(first_arg, second_arg, third_arg);
  };
namespace.bbb = class {
    constructor(first_arg, second_arg, third_arg) {
      this.NJ = first_arg;
      this.newState = second_arg;
      this.oldState = third_arg;
    }
  };
namespace.dbb = class {
    constructor({ c1e: arg }) {
      this.oa = arg;
    }
    xWb() {}
    reset() {}
  };
var obj_27 = { udf: 1, OSf: 2, cwf: 3, v9f: 4, LXf: 5, RESOLVED: 6, REJECTED: 7, L8e: 8 };
var local_459;
local_459 = window.AbortController != null;
var cls_163 = AbortController;
var obj_28 = {};
var cls_164 = local_459 ? window.AbortController : cls_163;
var local_461;
var fn_856;
var local_462;
local_461 = 1;
fn_856 = function (first_arg, second_arg) {
    var bf = first_arg.Bf;
    first_arg.Bf = second_arg;
    first_arg.onStateChange(first_arg, second_arg, bf);
  };
namespace.pbb = function (first_arg) {
    first_arg.Bf === 1 && fn_856(first_arg, 2);
  };
local_462 = class {
    constructor({ priority: arg, signal: arg_2 } = {}) {
      this.Bf = 1;
      this.ka = new namespace.Xq();
      this.promise = this.ka.promise;
      this.id = local_461++;
      this.priority = arg;
      arg_2 &&
        fn_386(arg_2, () => {
          this.aea() || (fn_856(this, 8), this.ka.reject(obj_28));
        });
    }
    block() {
      (this.Bf !== 2 && this.Bf !== 4) || fn_856(this, 1);
    }
    Igc() {
      var bf = this.Bf;
      return bf === 2 || bf === 4;
    }
    aea() {
      var bf = this.Bf;
      return bf === 7 || bf === 6 || bf === 8;
    }
    execute(first_arg = !1) {
      fn_856(this, 3);
      (first_arg = this.wa(first_arg)) && fn_856(this, first_arg);
      return this.Bf;
    }
    getState() {
      return this.Bf;
    }
    resolve(first_arg) {
      this.aea() || (fn_856(this, 6), this.ka.resolve(first_arg));
    }
    reject(first_arg) {
      this.aea() || (fn_856(this, 7), this.ka.reject(first_arg));
    }
  };
namespace.rbb = class extends local_462 {
    constructor(first_arg, second_arg = {}) {
      super(second_arg);
      this.callback = first_arg;
      this.h$a = second_arg.h$a;
      this.S5b = second_arg.S5b;
    }
    wa() {
      var num_94 = !1;
      try {
        var apply = this.callback.apply(this.h$a, this.S5b);
      } catch (error) {
        num_94 = !0;
        var local_737 = error;
      }
      if (!num_94) return this.oa(apply);
      this.reject(local_737);
    }
    oa(promise_2) {
      if (promise_2 instanceof Promise || fn_540(promise_2))
        return (promise_2.then(this.resolve.bind(this), this.reject.bind(this)), 5);
      this.resolve(promise_2);
    }
  };
var cls_165 = class extends local_462 {
    constructor(first_arg, second_arg) {
      super(second_arg);
      this.iterator = first_arg;
    }
    wa(fn_1916) {
      var num_94 = !1;
      try {
        do var done = this.iterator.next().done;
        while (!done && fn_1916 && (fn_1916 === !0 || fn_1916()));
      } catch (error) {
        num_94 = done = !0;
        var local_737 = error;
      }
      if (!done) return 4;
      num_94 ? this.reject(local_737) : this.resolve();
    }
  };
var cls_166 = class extends namespace.rbb {
    oa() {
      this.resolve();
    }
  };
namespace.ubb = class {
    constructor(first_arg) {
      this.value = first_arg;
    }
  };
var fn_857;
fn_857 = function (first_arg, second_arg, third_arg, element_4) {
    fn_858(first_arg.oa, second_arg);
    if (third_arg)
      if (element_4) {
        let local_737,
          fn_1916 = () => void window.clearTimeout(local_737);
        fn_386(element_4, fn_1916);
        local_737 = window.setTimeout(() => {
          element_4 && fn_1916 && element_4.removeEventListener("abort", fn_1916);
          first_arg.ka(second_arg);
        }, third_arg);
      } else window.setTimeout(() => void first_arg.ka(second_arg), third_arg);
    else first_arg.ka(second_arg);
  };
namespace.cCa = class extends namespace.dbb {
    JK(first_arg) {
      var aa_2 = this.Aa(first_arg);
      fn_857(this, aa_2, first_arg.delay, first_arg.signal);
      return aa_2.promise;
    }
    Aa(first_arg) {
      if (typeof first_arg === "function") return new namespace.rbb(first_arg, void 0);
      if (first_arg.callback) return new namespace.rbb(first_arg.callback, first_arg);
      var local_737 = first_arg.iterator || first_arg.qRc[Symbol.iterator]();
      return new cls_165(local_737, first_arg);
    }
    ka(first_arg) {
      namespace.pbb(first_arg);
    }
    setTimeout(first_arg, second_arg, ...arg) {
      second_arg ||= 0;
      var mbb_2 = new cls_164(),
        signal = mbb_2.signal;
      first_arg = new cls_166(first_arg, { S5b: arg, signal: signal });
      first_arg.promise.then(void 0, local_90);
      fn_857(this, first_arg, second_arg, signal);
      return new namespace.ubb(mbb_2);
    }
    setInterval(first_arg, second_arg, ...arg) {
      second_arg < 10 && (second_arg = 10);
      var mbb_2 = new cls_164(),
        signal = mbb_2.signal,
        obj_80 = { S5b: arg, signal: signal },
        fn_1916 = () => {
          if (!signal.aborted) {
            let tbb_2 = new cls_166(first_arg, obj_80);
            tbb_2.promise.then(fn_1916, fn_1916);
            fn_857(this, tbb_2, second_arg, signal);
          }
        };
      fn_1916();
      return new namespace.ubb(mbb_2);
    }
    clearTimeout(first_arg) {
      first_arg != null && first_arg.value.abort();
    }
    clearInterval(first_arg) {
      this.clearTimeout(first_arg);
    }
  };
var fn_858 = function (first_arg, second_arg) {
      var state = second_arg.getState();
      first_arg.ka.get(state).add(second_arg);
      first_arg.wa.add(second_arg);
      second_arg.onStateChange = first_arg.Ga;
      second_arg = namespace.cbb(second_arg, state, null);
      first_arg.oa.push(second_arg);
      fn_860(first_arg);
    };
var fn_859 = function (first_arg, ...arg) {
      for (let local_737 of arg) first_arg.Aa.add(local_737);
    };
var fn_860 = function (first_arg) {
      !first_arg.Ba &&
        first_arg.oa.length > 0 &&
        ((first_arg.Ba = !0),
        namespace.qMa(() => {
          first_arg.Ba = !1;
          var oa = first_arg.oa;
          first_arg.oa = [];
          var from = Array.from(first_arg.Aa);
          for (let local_737 of from)
            try {
              local_737.xWb(oa);
            } catch (error) {
              namespace.fa(error);
            }
          fn_860(first_arg);
        }));
    };
var cls_167 = class {
      constructor() {
        this.Aa = new Set();
        this.wa = new Set();
        this.ka = new Map();
        for (let local_737 of Object.values(obj_27))
          local_737 === 3 ||
            local_737 === 7 ||
            local_737 === 6 ||
            local_737 === 8 ||
            this.ka.set(local_737, new Set());
        this.Ia = this.ka.get(2);
        this.Ka = this.ka.get(4);
        this.oa = [];
        this.Ga = (first_arg, second_arg, third_arg) => {
          third_arg === 3 ? (this.Ca = void 0) : this.ka.get(third_arg).delete(first_arg);
          if (second_arg === 3) this.Ca = first_arg;
          else {
            let get_value = this.ka.get(second_arg);
            get_value ? get_value.add(first_arg) : this.wa.delete(first_arg);
          }
          first_arg = namespace.cbb(first_arg, second_arg, third_arg);
          this.oa.push(first_arg);
          fn_860(this);
        };
        this.Ba = !1;
      }
      Ffb() {
        return this.Aa;
      }
      reset() {}
    };
var local_463;
var local_464;
var local_465;
var local_466;
var local_467;
local_463 = !1;
namespace.gCa = new Set();
var list_44 = [];
var list_45 = null;
var index_4 = 1;
var num_60 = !1;
var local_468 = null;
var num_61 = 0;
var local_469 = null;
var local_470 = null;
var num_62 = !1;
var cls_173;
cls_173 = class {
    JK(first_arg) {
      return fn_387().JK(first_arg);
    }
    setTimeout(first_arg, second_arg, ...arg) {
      return fn_387().setTimeout(first_arg, second_arg, ...arg);
    }
    setInterval(first_arg, second_arg, ...arg) {
      return fn_387().setInterval(first_arg, second_arg, ...arg);
    }
    clearTimeout(first_arg) {
      return fn_387().clearTimeout(first_arg);
    }
    clearInterval(first_arg) {
      return fn_387().clearInterval(first_arg);
    }
  };
namespace.Cib = new cls_173();
namespace.djb = function (first_arg, second_arg) {
    return (second_arg || 1) - (first_arg || 1);
  };
var local_480;
var local_481;
local_480 = function (first_arg, second_arg) {
    return namespace.djb(first_arg.priority, second_arg.priority);
  };
local_481 = class extends namespace.dbb {
    xWb(first_arg) {
      for (let { NJ: local_737, newState: local_738 } of first_arg)
        if ((local_738 === 2 || local_738 === 4) && local_737.Igc()) {
          this.ka = null;
          this.Aa();
          break;
        }
    }
  };
namespace.kjb = class extends local_481 {
    constructor(list_164) {
      super(list_164);
      this.Ba = list_164.sort || local_480;
      this.ka = null;
    }
    next() {
      if (!this.ka) {
        var local_737 = Array,
          from = local_737.from;
        var oa = this.oa;
        oa = [...oa.Ka, ...oa.Ia];
        this.ka = from.call(local_737, oa);
        this.ka.sort(this.Ba);
      }
      for (; (local_737 = this.ka.shift()) && !local_737.Igc(););
      from = !1;
      this.ka.length || ((this.ka = null), (from = !0));
      return { NJ: local_737, done: from };
    }
    reset() {
      super.reset();
    }
  };
var fn_882 = function (first_arg) {
      first_arg.wa ||
        ((first_arg.wa = !0),
        namespace.Ee(() => {
          first_arg.wa = !1;
          var { NJ: next, done: next_2 } = first_arg.next();
          next && next.execute(!0);
          next_2 || fn_882(first_arg);
        }));
    };
var cls_176 = class extends namespace.kjb {
      constructor(first_arg) {
        super(first_arg);
        this.wa = !1;
      }
      Aa() {
        fn_882(this);
      }
    };
namespace.eCa = cls_176;
var fn_883 = function (first_arg) {
    if (!first_arg.rhb) {
      let play = first_arg.play;
      first_arg.play = () => {
        var call = play.call(first_arg),
          gl = first_arg.Gl();
        if (gl !== Infinity) {
          let set_timeout = window.setTimeout(() => first_arg.finish(), gl);
          gl = () => void window.clearTimeout(set_timeout);
          call.then(gl, gl);
        }
        return call;
      };
      first_arg.rhb = !0;
    }
  };
namespace.Xn(
    namespace.rPa,
    new (class {
      JK(first_arg) {
        fn_883(first_arg);
        return namespace.Cib.JK({ callback: first_arg.play, h$a: first_arg });
      }
      Ulc(first_arg) {
        fn_883(first_arg);
        return namespace.Cib.JK({ callback: first_arg.play, h$a: first_arg, priority: 3 });
      }
      flush() {
        throw Error("Ae");
      }
      o7a(first_arg) {
        return namespace.Cib.JK(first_arg);
      }
      debounce(first_arg, second_arg) {
        var num_94 = !1;
        return (...arg) => {
          num_94 ||
            ((num_94 = !0),
            namespace.Cib.JK(() => void (num_94 = !1)),
            first_arg.apply(second_arg, arg));
        };
      }
      setTimeout(first_arg, second_arg, ...arg) {
        return namespace.Cib.setTimeout(first_arg, second_arg, ...arg);
      }
      clearTimeout(first_arg) {
        namespace.Cib.clearTimeout(first_arg);
      }
      clearInterval(first_arg) {
        namespace.Cib.clearInterval(first_arg);
      }
      setInterval(first_arg, second_arg, ...arg) {
        return namespace.Cib.setInterval(first_arg, second_arg, ...arg);
      }
      yield() {
        return namespace.CCa();
      }
      requestIdleCallback(first_arg, second_arg) {
        return namespace.ACa(first_arg, second_arg);
      }
      cancelIdleCallback(first_arg) {
        namespace.BCa(first_arg);
      }
    })()
  );
namespace.fub = function (element_4) {
    return new namespace.ee(element_4.offsetWidth, element_4.offsetHeight);
  };
namespace.Cs = function (first_arg) {
    var fub = namespace.fub(first_arg),
      zn = namespace.zn(first_arg);
    first_arg = namespace.nLa(first_arg);
    return new namespace.ee(
      fub.width - first_arg.left - zn.left - zn.right - first_arg.right,
      fub.height - first_arg.top - zn.top - zn.bottom - first_arg.bottom
    );
  };
var local_541;
namespace.$zc = function (first_arg) {
    return first_arg in namespace.Zzc ? namespace.Zzc[first_arg][1] : first_arg;
  };
namespace.cB = function (text_8, list_164, third_arg) {
    var local_737;
    if ((local_737 = list_164)) {
      a: if (list_164 && list_164.length === 3) {
        for (local_737 = 0; local_737 < 3; local_737++) {
          let local_738 = list_164[local_737];
          if (local_738 < "A" || (local_738 > "Z" && local_738 < "a") || local_738 > "z") {
            local_737 = !1;
            break a;
          }
        }
        local_737 = !0;
      } else local_737 = !1;
      local_737 = !local_737;
    }
    if (local_737) throw new TypeError("Kh");
    this.hb = this.Pb = !1;
    this.Nb = list_164 ? list_164.toUpperCase() : null;
    this.Mb = third_arg || 0;
    this.Ra = 40;
    this.Aa = 1;
    this.Ba = 0;
    this.ka = 3;
    this.Ya = this.wa = 0;
    this.rb = this.wb = !1;
    this.Ta = this.Ka = "";
    this.Ca = fn_1131().lad;
    this.Oa = "";
    this.oa = 1;
    this.Ia = !1;
    this.Ga = [];
    this.kb = this.yb = !1;
    this.Qa = 0;
    this.La = null;
    this.Kb = typeof text_8 === "string" ? text_8 : "";
    if (typeof text_8 === "number")
      switch (text_8) {
        case 1:
          fn_1133(this, fn_1131().DECIMAL_PATTERN);
          break;
        case 2:
          fn_1133(this, fn_1131().Y2d);
          break;
        case 3:
          fn_1133(this, fn_1131().b2d);
          break;
        case 4:
          text_8 = fn_1131().b$c;
          list_164 = ["0"];
          if ((third_arg = namespace.Zzc[fn_1132(this)])) {
            third_arg = third_arg[0] & 7;
            if (third_arg > 0)
              for (list_164.push("."), local_737 = 0; local_737 < third_arg; local_737++)
                list_164.push("0");
            text_8 = text_8.replace(/0.00/g, list_164.join(""));
          }
          fn_1133(this, text_8);
          break;
        case 5:
          fn_1134(this, 1);
          break;
        case 6:
          fn_1134(this, 2);
          break;
        default:
          throw Error("Nh");
      }
    else fn_1133(this, text_8);
  };
local_541 = {
    c4b: {
      1e3: { other: "0K" },
      1e4: { other: "00K" },
      1e5: { other: "000K" },
      1e6: { other: "0M" },
      1e7: { other: "00M" },
      1e8: { other: "000M" },
      1e9: { other: "0B" },
      1e10: { other: "00B" },
      1e11: { other: "000B" },
      1e12: { other: "0T" },
      1e13: { other: "00T" },
      1e14: { other: "000T" }
    },
    Guc: {
      1e3: { other: "0 thousand" },
      1e4: { other: "00 thousand" },
      1e5: { other: "000 thousand" },
      1e6: { other: "0 million" },
      1e7: { other: "00 million" },
      1e8: { other: "000 million" },
      1e9: { other: "0 billion" },
      1e10: { other: "00 billion" },
      1e11: { other: "000 billion" },
      1e12: { other: "0 trillion" },
      1e13: { other: "00 trillion" },
      1e14: { other: "000 trillion" }
    }
  };
namespace.eAc = local_541;
namespace.eAc = local_541;
namespace.Zzc = {
    AED: [2, "dh", "\u062f.\u0625."],
    ALL: [0, "Lek", "Lek"],
    AUD: [2, "$", "AU$"],
    BDT: [2, "\u09f3", "Tk"],
    BGN: [2, "lev", "lev"],
    BRL: [2, "R$", "R$"],
    CAD: [2, "$", "C$"],
    CDF: [2, "FrCD", "CDF"],
    CHF: [2, "CHF", "CHF"],
    CLP: [0, "$", "CL$"],
    CNY: [2, "\u00a5", "RMB\u00a5"],
    COP: [32, "$", "COL$"],
    CRC: [0, "\u20a1", "CR\u20a1"],
    CZK: [50, "K\u010d", "K\u010d"],
    DKK: [50, "kr.", "kr."],
    DOP: [2, "RD$", "RD$"],
    EGP: [2, "\u00a3", "LE"],
    ETB: [2, "Birr", "Birr"],
    EUR: [2, "\u20ac", "\u20ac"],
    GBP: [2, "\u00a3", "GB\u00a3"],
    HKD: [2, "$", "HK$"],
    HRK: [2, "kn", "kn"],
    HUF: [34, "Ft", "Ft"],
    IDR: [0, "Rp", "Rp"],
    ILS: [34, "\u20aa", "IL\u20aa"],
    INR: [2, "\u20b9", "Rs"],
    IRR: [0, "Rial", "IRR"],
    ISK: [0, "kr", "kr"],
    JMD: [2, "$", "JA$"],
    JPY: [0, "\u00a5", "JP\u00a5"],
    KRW: [0, "\u20a9", "KR\u20a9"],
    LKR: [2, "Rs", "SLRs"],
    LTL: [2, "Lt", "Lt"],
    MNT: [0, "\u20ae", "MN\u20ae"],
    MVR: [2, "Rf", "MVR"],
    MXN: [2, "$", "Mex$"],
    MYR: [2, "RM", "RM"],
    NOK: [50, "kr", "NOkr"],
    PAB: [2, "B/.", "B/."],
    PEN: [2, "S/.", "S/."],
    PHP: [2, "\u20b1", "PHP"],
    PKR: [0, "Rs", "PKRs."],
    PLN: [50, "z\u0142", "z\u0142"],
    RON: [2, "RON", "RON"],
    RSD: [0, "din", "RSD"],
    RUB: [50, "\u20bd", "RUB"],
    SAR: [2, "SAR", "SAR"],
    SEK: [50, "kr", "kr"],
    SGD: [2, "$", "S$"],
    THB: [2, "\u0e3f", "THB"],
    TRY: [2, "\u20ba", "TRY"],
    TWD: [2, "$", "NT$"],
    TZS: [0, "TSh", "TSh"],
    UAH: [2, "\u0433\u0440\u043d.", "UAH"],
    USD: [2, "$", "US$"],
    UYU: [2, "$", "$U"],
    VND: [48, "\u20ab", "VN\u20ab"],
    YER: [0, "Rial", "Rial"],
    ZAR: [2, "R", "ZAR"]
  };
var local_542;
local_542 = {
    DECIMAL_SEP: ".",
    GROUP_SEP: ",",
    yad: "%",
    Twc: "0",
    c2d: "+",
    lad: "-",
    m$c: "E",
    zad: "\u2030",
    fvc: "\u221e",
    y1d: "NaN",
    DECIMAL_PATTERN: "#,##0.###",
    Y2d: "#E0",
    b2d: "#,##0%",
    b$c: "\u00a4#,##0.00",
    Kuc: "USD"
  };
namespace.gAc = local_542;
namespace.gAc = local_542;
var fn_1131;
var fn_1132;
var fn_1133;
var fn_1134;
fn_1131 = function () {
    var g_ac = namespace.gAc;
    return g_ac && g_ac.DECIMAL_PATTERN ? g_ac : namespace.gAc;
  };
fn_1132 = function (first_arg) {
    return first_arg.Nb || fn_1131().Kuc;
  };
namespace.dB = function (first_arg, second_arg) {
    if (first_arg.Ba > 0 && second_arg > 0) throw Error("Lh");
    first_arg.hb = first_arg.hb || second_arg != first_arg.wa;
    first_arg.wa = second_arg;
    return first_arg;
  };
namespace.eB = function (first_arg, second_arg) {
    if (second_arg > 308) throw Error("Mh`" + second_arg);
    first_arg.hb = first_arg.hb || second_arg != first_arg.ka;
    first_arg.ka = second_arg;
    return first_arg;
  };
namespace.hAc = function (first_arg, second_arg) {
    if (first_arg.wa > 0 && second_arg >= 0) throw Error("Lh");
    first_arg.Pb = second_arg !== first_arg.Ba;
    first_arg.Ba = second_arg;
    return first_arg;
  };
fn_1133 = function (first_arg, text_8) {
    first_arg.Kb = text_8.replace(/ /g, "\u00a0");
    var list_164 = [0];
    first_arg.Ka = fn_1139(first_arg, text_8, list_164);
    var local_737 = list_164[0],
      num_94 = -1,
      index_13 = 0,
      index_14 = 0,
      index_15 = 0,
      num_95 = -1,
      len_2 = text_8.length;
    for (let num_96 = !0; list_164[0] < len_2 && num_96; list_164[0]++)
      switch (text_8.charAt(list_164[0])) {
        case "#":
          index_14 > 0 ? index_15++ : index_13++;
          num_95 >= 0 && num_94 < 0 && num_95++;
          break;
        case "0":
          if (index_15 > 0) throw Error("Vh`" + text_8);
          index_14++;
          num_95 >= 0 && num_94 < 0 && num_95++;
          break;
        case ",":
          num_95 > 0 && first_arg.Ga.push(num_95);
          num_95 = 0;
          break;
        case ".":
          if (num_94 >= 0) throw Error("Wh`" + text_8);
          num_94 = index_13 + index_14 + index_15;
          break;
        case "E":
          if (first_arg.kb) throw Error("Xh`" + text_8);
          first_arg.kb = !0;
          first_arg.Ya = 0;
          list_164[0] + 1 < len_2 &&
            text_8.charAt(list_164[0] + 1) == "+" &&
            (list_164[0]++, (first_arg.wb = !0));
          for (; list_164[0] + 1 < len_2 && text_8.charAt(list_164[0] + 1) == "0";)
            (list_164[0]++, first_arg.Ya++);
          if (index_13 + index_14 < 1 || first_arg.Ya < 1) throw Error("Yh`" + text_8);
          num_96 = !1;
          break;
        default:
          (list_164[0]--, (num_96 = !1));
      }
    index_14 == 0 &&
      index_13 > 0 &&
      num_94 >= 0 &&
      ((index_14 = num_94),
      index_14 == 0 && index_14++,
      (index_15 = index_13 - index_14),
      (index_13 = index_14 - 1),
      (index_14 = 1));
    if (
      (num_94 < 0 && index_15 > 0) ||
      (num_94 >= 0 && (num_94 < index_13 || num_94 > index_13 + index_14)) ||
      num_95 == 0
    )
      throw Error("Zh`" + text_8);
    index_15 = index_13 + index_14 + index_15;
    first_arg.ka = num_94 >= 0 ? index_15 - num_94 : 0;
    num_94 >= 0 &&
      ((first_arg.wa = index_13 + index_14 - num_94), first_arg.wa < 0 && (first_arg.wa = 0));
    first_arg.Aa = (num_94 >= 0 ? num_94 : index_15) - index_13;
    first_arg.kb &&
      ((first_arg.Ra = index_13 + first_arg.Aa),
      first_arg.ka == 0 && first_arg.Aa == 0 && (first_arg.Aa = 1));
    first_arg.Ga.push(Math.max(0, num_95));
    first_arg.yb = num_94 == 0 || num_94 == index_15;
    local_737 = list_164[0] - local_737;
    first_arg.Ta = fn_1139(first_arg, text_8, list_164);
    list_164[0] < text_8.length && text_8.charAt(list_164[0]) == ";"
      ? (list_164[0]++,
        first_arg.oa != 1 && (first_arg.Ia = !0),
        (first_arg.Ca = fn_1139(first_arg, text_8, list_164)),
        (list_164[0] += local_737),
        (first_arg.Oa = fn_1139(first_arg, text_8, list_164)))
      : ((first_arg.Ca += first_arg.Ka), (first_arg.Oa += first_arg.Ta));
  };
fn_1134 = function (first_arg, second_arg) {
    first_arg.Qa = second_arg;
    fn_1133(first_arg, fn_1131().DECIMAL_PATTERN);
    namespace.dB(first_arg, 0);
    namespace.eB(first_arg, 2);
    namespace.hAc(first_arg, 2);
  };
namespace.cB.prototype.parse = function (text_8, second_arg) {
    second_arg = second_arg || [0];
    if (this.Qa !== 0) throw Error("Oh");
    text_8 = text_8.replace(/ |\u202f/g, "\u00a0");
    var num_94 = text_8.indexOf(this.Ka, second_arg[0]) == second_arg[0],
      num_95 = text_8.indexOf(this.Ca, second_arg[0]) == second_arg[0];
    num_94 &&
      num_95 &&
      (this.Ka.length > this.Ca.length
        ? (num_95 = !1)
        : this.Ka.length < this.Ca.length && (num_94 = !1));
    num_94 ? (second_arg[0] += this.Ka.length) : num_95 && (second_arg[0] += this.Ca.length);
    if (text_8.indexOf(fn_1131().fvc, second_arg[0]) == second_arg[0]) {
      second_arg[0] += fn_1131().fvc.length;
      var text_9 = Infinity;
    } else {
      text_9 = text_8;
      let num_96 = !1,
        num_97 = !1,
        num_98 = !1,
        num_99 = -1,
        num_100 = 1,
        decimal_sep = fn_1131().DECIMAL_SEP,
        group_sep = fn_1131().GROUP_SEP,
        m_c = fn_1131().m$c;
      if (this.Qa != 0) throw Error("Ph");
      group_sep = group_sep.replace(/\u202f/g, "\u00a0");
      let text_10 = "";
      for (; second_arg[0] < text_9.length; second_arg[0]++) {
        let text_11 = text_9.charAt(second_arg[0]),
          local_737 = fn_1138(text_11);
        if (local_737 >= 0 && local_737 <= 9) ((text_10 += local_737), (num_98 = !0));
        else if (text_11 == decimal_sep.charAt(0)) {
          if (num_96 || num_97) break;
          text_10 += ".";
          num_96 = !0;
        } else if (
          text_11 == group_sep.charAt(0) &&
          ("\u00a0" != group_sep.charAt(0) ||
            (second_arg[0] + 1 < text_9.length && fn_1138(text_9.charAt(second_arg[0] + 1)) >= 0))
        ) {
          if (num_96 || num_97) break;
        } else if (text_11 == m_c.charAt(0)) {
          if (num_97) break;
          text_10 += "E";
          num_97 = !0;
          num_99 = second_arg[0];
        } else if (text_11 == "+" || text_11 == "-") {
          if (num_98 && num_99 != second_arg[0] - 1) break;
          text_10 += text_11;
        } else if (this.oa == 1 && text_11 == fn_1131().yad.charAt(0)) {
          if (num_100 != 1) break;
          num_100 = 100;
          if (num_98) {
            second_arg[0]++;
            break;
          }
        } else if (this.oa == 1 && text_11 == fn_1131().zad.charAt(0)) {
          if (num_100 != 1) break;
          num_100 = 1e3;
          if (num_98) {
            second_arg[0]++;
            break;
          }
        } else break;
      }
      this.oa != 1 && (num_100 = this.oa);
      text_9 = parseFloat(text_10) / num_100;
    }
    if (num_94) {
      if (text_8.indexOf(this.Ta, second_arg[0]) != second_arg[0]) return NaN;
      second_arg[0] += this.Ta.length;
    } else if (num_95) {
      if (text_8.indexOf(this.Oa, second_arg[0]) != second_arg[0]) return NaN;
      second_arg[0] += this.Oa.length;
    }
    return num_95 ? -text_9 : text_9;
  };
namespace.cB.prototype.format = function (first_arg) {
    if (this.wa > this.ka) throw Error("Sh");
    if (isNaN(first_arg)) return fn_1131().y1d;
    var list_164 = [];
    var local_737 = this.La === null ? first_arg : this.La;
    if (this.Qa == 0) local_737 = obj_52;
    else {
      local_737 = Math.abs(local_737);
      var u_ec = fn_1140(this, local_737 <= 1 ? 0 : fn_1141(local_737)).uEc;
      local_737 = fn_1140(this, u_ec + fn_1141(fn_1135(this, fn_1142(local_737, -u_ec)).Twd));
    }
    first_arg = fn_1142(first_arg, -local_737.uEc);
    (u_ec = first_arg < 0 || (first_arg == 0 && 1 / first_arg < 0))
      ? local_737.qVc
        ? list_164.push(local_737.qVc)
        : (list_164.push(local_737.prefix), list_164.push(this.Ca))
      : (list_164.push(local_737.prefix), list_164.push(this.Ka));
    if (isFinite(first_arg))
      if (((first_arg *= u_ec ? -1 : 1), (first_arg *= this.oa), this.kb)) {
        var local_738 = first_arg;
        if (local_738 == 0)
          (fn_1136(this, local_738, this.Aa, list_164), fn_1137(this, 0, list_164));
        else {
          var num_94 = Math.floor(Math.log(local_738) / Math.log(10) + 2e-15);
          local_738 = fn_1142(local_738, -num_94);
          var aa_2 = this.Aa;
          this.Ra > 1 && this.Ra > this.Aa
            ? ((aa_2 = num_94 % this.Ra),
              aa_2 < 0 && (aa_2 = this.Ra + aa_2),
              (local_738 = fn_1142(local_738, aa_2)),
              (num_94 -= aa_2),
              (aa_2 = 1))
            : this.Aa < 1
              ? (num_94++, (local_738 = fn_1142(local_738, -1)))
              : ((num_94 -= this.Aa - 1), (local_738 = fn_1142(local_738, this.Aa - 1)));
          fn_1136(this, local_738, aa_2, list_164);
          fn_1137(this, num_94, list_164);
        }
      } else fn_1136(this, first_arg, this.Aa, list_164);
    else list_164.push(fn_1131().fvc);
    u_ec
      ? local_737.rVc
        ? list_164.push(local_737.rVc)
        : (isFinite(first_arg) && list_164.push(local_737.suffix), list_164.push(this.Oa))
      : (isFinite(first_arg) && list_164.push(local_737.suffix), list_164.push(this.Ta));
    return list_164.join("");
  };
var fn_1135 = function (first_arg, second_arg) {
      var local_737 = fn_1142(second_arg, first_arg.ka);
      first_arg.Ba > 0 && (local_737 = fn_1144(local_737, first_arg.Ba, first_arg.ka));
      local_737 = Math.round(local_737);
      if (isFinite(local_737)) {
        var num_94 = Math.floor(fn_1142(local_737, -first_arg.ka));
        local_737 = Math.floor(local_737 - fn_1142(num_94, first_arg.ka));
        if (local_737 < 0 || local_737 >= fn_1142(1, first_arg.ka))
          ((num_94 = Math.round(second_arg)), (local_737 = 0));
      } else ((num_94 = second_arg), (local_737 = 0));
      return { Twd: num_94, Ine: local_737 };
    };
var fn_1136 = function (first_arg, second_arg, text_8, list_164) {
      if (first_arg.wa > first_arg.ka) throw Error("Sh");
      list_164 ||= [];
      second_arg = fn_1135(first_arg, second_arg);
      var twd = second_arg.Twd,
        ine = second_arg.Ine,
        local_737 = twd == 0 ? 0 : fn_1141(twd) + 1,
        list_165 = first_arg.wa > 0 || ine > 0 || (first_arg.rb && local_737 < first_arg.Ba);
      second_arg = first_arg.wa;
      list_165 &&
        (second_arg = first_arg.rb && first_arg.Ba > 0 ? first_arg.Ba - local_737 : first_arg.wa);
      var text_9 = "";
      for (local_737 = twd; local_737 > 1e20;)
        ((text_9 = "0" + text_9), (local_737 = Math.round(fn_1142(local_737, -1))));
      text_9 = local_737 + text_9;
      var decimal_sep = fn_1131().DECIMAL_SEP;
      local_737 = fn_1131().Twc.codePointAt(0);
      var len_2 = text_9.length,
        num_94 = 0;
      if (twd > 0 || text_8 > 0) {
        for (twd = len_2; twd < text_8; twd++) list_164.push(String.fromCodePoint(local_737));
        if (first_arg.Ga.length >= 2)
          for (text_8 = 1; text_8 < first_arg.Ga.length; text_8++) num_94 += first_arg.Ga[text_8];
        text_8 = len_2 - num_94;
        if (text_8 > 0) {
          twd = first_arg.Ga;
          num_94 = len_2 = 0;
          var group_sep = fn_1131().GROUP_SEP,
            len_3 = text_9.length;
          for (let index_13 = 0; index_13 < len_3; index_13++)
            if (
              (list_164.push(String.fromCodePoint(local_737 + Number(text_9.charAt(index_13)))),
              len_3 - index_13 > 1)
            ) {
              var local_738 = twd[num_94];
              if (index_13 < text_8) {
                let num_95 = text_8 - index_13;
                (local_738 === 1 || (local_738 > 0 && num_95 % local_738 === 1)) &&
                  list_164.push(group_sep);
              } else
                num_94 < twd.length &&
                  (index_13 === text_8
                    ? (num_94 += 1)
                    : local_738 === index_13 - text_8 - len_2 + 1 &&
                      (list_164.push(group_sep), (len_2 += local_738), (num_94 += 1)));
            }
        } else {
          text_8 = text_9;
          text_9 = first_arg.Ga;
          twd = fn_1131().GROUP_SEP;
          local_738 = text_8.length;
          group_sep = [];
          for (len_2 = text_9.length - 1; len_2 >= 0 && local_738 > 0; len_2--) {
            num_94 = text_9[len_2];
            for (len_3 = 0; len_3 < num_94 && local_738 - len_3 - 1 >= 0; len_3++)
              group_sep.push(
                String.fromCodePoint(local_737 + Number(text_8.charAt(local_738 - len_3 - 1)))
              );
            local_738 -= num_94;
            local_738 > 0 && group_sep.push(twd);
          }
          list_164.push.apply(list_164, group_sep.reverse());
        }
      } else list_165 || list_164.push(String.fromCodePoint(local_737));
      (first_arg.yb || list_165) && list_164.push(decimal_sep);
      ine = String(ine);
      list_165 = ine.split("e+");
      list_165.length == 2 &&
        ((ine = String(fn_1144(parseFloat(list_165[0]), first_arg.Ba, 1))),
        (ine = ine.replace(".", "")),
        (ine += "0".repeat(parseInt(list_165[1], 10) - ine.length + 1)));
      first_arg.ka + 1 > ine.length && (ine = "1" + "0".repeat(first_arg.ka - ine.length) + ine);
      for (first_arg = ine.length; ine.charAt(first_arg - 1) == "0" && first_arg > second_arg + 1;)
        first_arg--;
      for (second_arg = 1; second_arg < first_arg; second_arg++)
        list_164.push(String.fromCodePoint(local_737 + Number(ine.charAt(second_arg))));
    };
var fn_1137 = function (first_arg, text_8, list_164) {
      list_164.push(fn_1131().m$c);
      text_8 < 0
        ? ((text_8 = -text_8), list_164.push(fn_1131().lad))
        : first_arg.wb && list_164.push(fn_1131().c2d);
      text_8 = "" + text_8;
      var twc = fn_1131().Twc;
      for (let len_2 = text_8.length; len_2 < first_arg.Ya; len_2++) list_164.push(twc);
      first_arg = twc.codePointAt(0) - code_point_at;
      for (twc = 0; twc < text_8.length; twc++)
        list_164.push(String.fromCodePoint(first_arg + text_8.codePointAt(twc)));
    };
var fn_1138 = function (text_8) {
      text_8 = text_8.codePointAt(0);
      if (48 <= text_8 && text_8 < 58) return text_8 - 48;
      var code_point_at_2 = fn_1131().Twc.codePointAt(0);
      return code_point_at_2 <= text_8 && text_8 < code_point_at_2 + 10
        ? text_8 - code_point_at_2
        : -1;
    };
var code_point_at = "0".codePointAt(0);
var fn_1139 = function (first_arg, text_8, third_arg) {
      for (
        var text_9 = "", num_94 = !1, len_2 = text_8.length;
        third_arg[0] < len_2;
        third_arg[0]++
      ) {
        var text_10 = text_8.charAt(third_arg[0]);
        if (text_10 == "'")
          third_arg[0] + 1 < len_2 && text_8.charAt(third_arg[0] + 1) == "'"
            ? (third_arg[0]++, (text_9 += "'"))
            : (num_94 = !num_94);
        else if (num_94) text_9 += text_10;
        else
          switch (text_10) {
            case "#":
            case "0":
            case ",":
            case ".":
            case ";":
              return text_9;
            case "\u00a4":
              if (third_arg[0] + 1 < len_2 && text_8.charAt(third_arg[0] + 1) == "\u00a4")
                (third_arg[0]++, (text_9 += fn_1132(first_arg)));
              else
                switch (first_arg.Mb) {
                  case 0:
                    text_9 += namespace.$zc(fn_1132(first_arg));
                    break;
                  case 2:
                    text_10 = fn_1132(first_arg);
                    let local_737 = namespace.Zzc[text_10];
                    text_9 += local_737
                      ? text_10 == local_737[1]
                        ? text_10
                        : text_10 + " " + local_737[1]
                      : text_10;
                    break;
                  case 1:
                    ((text_10 = fn_1132(first_arg)),
                      (text_9 += text_10 in namespace.Zzc ? namespace.Zzc[text_10][2] : text_10));
                }
              break;
            case "%":
              if (!first_arg.Ia && first_arg.oa != 1) throw Error("Th");
              if (first_arg.Ia && first_arg.oa != 100) throw Error("Uh");
              first_arg.oa = 100;
              first_arg.Ia = !1;
              text_9 += fn_1131().yad;
              break;
            case "\u2030":
              if (!first_arg.Ia && first_arg.oa != 1) throw Error("Th");
              if (first_arg.Ia && first_arg.oa != 1e3) throw Error("Uh");
              first_arg.oa = 1e3;
              first_arg.Ia = !1;
              text_9 += fn_1131().zad;
              break;
            default:
              text_9 += text_10;
          }
      }
      return text_9;
    };
var obj_52 = { uEc: 0, qVc: "", rVc: "", prefix: "", suffix: "" };
var fn_1140 = function (first_arg, second_arg) {
      var e_ac = namespace.eAc;
      e_ac = e_ac && (e_ac.c4b || e_ac.Guc) ? e_ac : namespace.eAc;
      first_arg = first_arg.Qa == 1 ? e_ac.c4b : e_ac.Guc;
      first_arg == null && (first_arg = e_ac.c4b);
      if (first_arg == null || second_arg < 3) return obj_52;
      second_arg = Math.min(14, second_arg);
      e_ac = first_arg[fn_1142(1, second_arg)];
      for (--second_arg; !e_ac && second_arg >= 3;)
        ((e_ac = first_arg[fn_1142(1, second_arg)]), second_arg--);
      if (!e_ac) return obj_52;
      e_ac = e_ac.other;
      var local_737 = (first_arg = ""),
        pos = e_ac.indexOf(";");
      pos >= 0 &&
        ((e_ac = e_ac.substring(0, pos)), (pos = e_ac.substring(pos + 1))) &&
        ((local_737 = /([^0]*)(0+)(.*)/.exec(pos)),
        (first_arg = local_737[1]),
        (local_737 = local_737[3]));
      return e_ac && e_ac != "0"
        ? (e_ac = /([^0]*)(0+)(.*)/.exec(e_ac))
          ? {
              uEc: second_arg + 1 - (e_ac[2].length - 1),
              qVc: first_arg,
              rVc: local_737,
              prefix: e_ac[1],
              suffix: e_ac[3]
            }
          : obj_52
        : obj_52;
    };
var fn_1141 = function (first_arg) {
      if (!isFinite(first_arg)) return first_arg > 0 ? first_arg : 0;
      for (var index_13 = 0; (first_arg /= 10) >= 1;) index_13++;
      return index_13;
    };
var fn_1142 = function (first_arg, second_arg) {
      if (!first_arg || !isFinite(first_arg) || second_arg == 0) return first_arg;
      first_arg = String(first_arg).split("e");
      return parseFloat(first_arg[0] + "e" + (parseInt(first_arg[1] || 0, 10) + second_arg));
    };
var fn_1143 = function (first_arg, second_arg) {
      return first_arg && isFinite(first_arg)
        ? fn_1142(Math.round(fn_1142(first_arg, second_arg)), -second_arg)
        : first_arg;
    };
var fn_1144 = function (first_arg, second_arg, third_arg) {
      if (!first_arg) return first_arg;
      second_arg = second_arg - fn_1141(first_arg) - 1;
      return second_arg < -third_arg
        ? fn_1143(first_arg, -third_arg)
        : fn_1143(first_arg, second_arg);
    };
var local_543;
var local_545;
local_543 = function (first_arg, second_arg) {
    var num_94 = first_arg | 0;
    if (void 0 === second_arg) {
      second_arg = Math;
      var min = second_arg.min;
      let list_164 = first_arg + "",
        pos = list_164.indexOf(".");
      second_arg = min.call(second_arg, pos === -1 ? 0 : list_164.length - pos - 1, 3);
    }
    min = Math.pow(10, second_arg);
    first_arg = { v: second_arg, f: ((first_arg * min) | 0) % min };
    return num_94 == 1 && first_arg.v == 0 ? "one" : "other";
  };
namespace.qB = local_545 = local_545 = local_543;
var local_681;
var local_683;
var local_684;
local_681 = function (first_arg) {
    return first_arg % 10 == 1 && first_arg % 100 != 11
      ? "one"
      : first_arg % 10 == 2 && first_arg % 100 != 12
        ? "two"
        : first_arg % 10 == 3 && first_arg % 100 != 13
          ? "few"
          : "other";
  };
namespace.rB = function (first_arg) {
    this.wa = first_arg;
    this.oa = this.ka = this.Ba = null;
    first_arg =
      (first_arg = namespace.gAc) && first_arg.DECIMAL_PATTERN ? first_arg : namespace.gAc;
    var e_ac = namespace.eAc;
    e_ac = e_ac && (e_ac.c4b || e_ac.Guc) ? e_ac : namespace.eAc;
    if (local_685 !== first_arg || local_686 !== e_ac)
      ((local_685 = first_arg), (local_686 = e_ac), (local_687 = new namespace.cB(1)));
    this.Ca = local_687;
  };
local_684 = local_683 = local_683 = local_681;
var local_685 = null;
var local_686 = null;
var local_687 = null;
var local_688 = RegExp("'([{}#].*?)'", "g");
var local_689 = RegExp("''", "g");
var fn_1620;
var fn_1621;
var fn_1622;
namespace.rB.prototype.format = function (first_arg) {
    return fn_1620(this, first_arg, !1);
  };
fn_1620 = function (first_arg, text_8, third_arg) {
    first_arg.YV();
    if (!first_arg.oa || first_arg.oa.length == 0) return "";
    first_arg.ka = namespace.Aa(first_arg.Ba);
    var list_164 = [];
    fn_1621(first_arg, first_arg.oa, text_8, third_arg, list_164);
    for (text_8 = list_164.join(""); first_arg.ka.length > 0;) {
      third_arg = first_arg.Aa(first_arg.ka);
      let local_737 = String(first_arg.ka.pop());
      text_8 = text_8.replace(third_arg, () => local_737);
    }
    return text_8;
  };
fn_1621 = function (first_arg, list_164, third_arg, fourth_arg, list_165) {
    for (let index_13 = 0; index_13 < list_164.length; index_13++) {
      var num_94 = void 0;
      switch (list_164[index_13].type) {
        case 4:
          list_165.push(list_164[index_13].value);
          break;
        case 3:
          num_94 = list_164[index_13].value;
          var local_737 = first_arg,
            list_166 = list_165,
            local_738 = third_arg[num_94];
          local_738 === void 0
            ? list_166.push("Undefined parameter - " + num_94)
            : (local_737.ka.push(local_738), list_166.push(local_737.Aa(local_737.ka)));
          break;
        case 2:
          num_94 = list_164[index_13].value;
          local_737 = first_arg;
          list_166 = third_arg;
          local_738 = fourth_arg;
          var list_167 = list_165,
            t5b_2 = num_94.T5b;
          list_166[t5b_2] === void 0
            ? list_167.push("Undefined parameter - " + t5b_2)
            : ((t5b_2 = num_94[list_166[t5b_2]]),
              t5b_2 === void 0 && (t5b_2 = num_94.other),
              fn_1621(local_737, t5b_2, list_166, local_738, list_167));
          break;
        case 0:
          num_94 = list_164[index_13].value;
          fn_1622(first_arg, num_94, third_arg, namespace.qB, fourth_arg, list_165);
          break;
        case 1:
          ((num_94 = list_164[index_13].value),
            fn_1622(first_arg, num_94, third_arg, local_684, fourth_arg, list_165));
      }
    }
  };
fn_1622 = function (first_arg, list_164, text_8, fn_1916, fifth_arg, list_165) {
    var t5b_2 = list_164.T5b,
      fdd_2 = list_164.fdd,
      num_94 = +text_8[t5b_2];
    isNaN(num_94)
      ? list_165.push("Undefined or invalid parameter - " + t5b_2)
      : ((fdd_2 = num_94 - fdd_2),
        (t5b_2 = list_164[text_8[t5b_2]]),
        t5b_2 === void 0 &&
          ((fn_1916 = fn_1916(Math.abs(fdd_2))),
          (t5b_2 = list_164[fn_1916]),
          t5b_2 === void 0 && (t5b_2 = list_164.other)),
        (list_164 = []),
        fn_1621(first_arg, t5b_2, text_8, fifth_arg, list_164),
        (text_8 = list_164.join("")),
        fifth_arg
          ? list_165.push(text_8)
          : ((first_arg = first_arg.Ca.format(fdd_2)),
            list_165.push(text_8.replace(/#/g, first_arg))));
  };
namespace.rB.prototype.YV = function () {
    if (this.wa) {
      this.Ba = [];
      let local_737 = fn_1623(this, this.wa);
      this.oa = fn_1625(this, local_737);
      this.wa = null;
    }
  };
var fn_1623 = function (first_arg, text_8) {
      var ba = first_arg.Ba,
        bind = first_arg.Aa.bind(first_arg);
      text_8 = text_8.replace(local_689, function () {
        ba.push("'");
        return bind(ba);
      });
      return (text_8 = text_8.replace(local_688, function (first_arg_2, second_arg) {
        ba.push(second_arg);
        return bind(ba);
      }));
    };
var fn_1624 = function (text_8) {
      var num_94 = 0,
        list_164 = [],
        list_165 = [],
        regex_14 = /[{}]/g;
      regex_14.lastIndex = 0;
      for (var local_737; (local_737 = regex_14.exec(text_8));) {
        let index_13 = local_737.index;
        local_737[0] == "}"
          ? (list_164.pop(),
            list_164.length == 0 &&
              ((local_737 = { type: 1 }),
              (local_737.value = text_8.substring(num_94, index_13)),
              list_165.push(local_737),
              (num_94 = index_13 + 1)))
          : (list_164.length == 0 &&
              ((num_94 = text_8.substring(num_94, index_13)),
              num_94 != "" && list_165.push({ type: 0, value: num_94 }),
              (num_94 = index_13 + 1)),
            list_164.push("{"));
      }
      text_8 = text_8.substring(num_94);
      text_8 != "" && list_165.push({ type: 0, value: text_8 });
      return list_165;
    };
var regex_10 = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/;
var regex_11 = /^\s*(\w+)\s*,\s*selectordinal\s*,/;
var regex_12 = /^\s*(\w+)\s*,\s*select\s*,/;
var fn_1625 = function (first_arg, list_164) {
      var list_165 = [];
      list_164 = fn_1624(list_164);
      for (let index_13 = 0; index_13 < list_164.length; index_13++) {
        let obj_80 = {};
        if (0 == list_164[index_13].type)
          ((obj_80.type = 4), (obj_80.value = list_164[index_13].value));
        else if (1 == list_164[index_13].type) {
          var value = list_164[index_13].value;
          switch (
            regex_10.test(value)
              ? 0
              : regex_11.test(value)
                ? 1
                : regex_12.test(value)
                  ? 2
                  : /^\s*\w+\s*/.test(value)
                    ? 3
                    : 5
          ) {
            case 2:
              obj_80.type = 2;
              obj_80.value = fn_1626(first_arg, list_164[index_13].value);
              break;
            case 0:
              obj_80.type = 0;
              obj_80.value = fn_1627(first_arg, list_164[index_13].value);
              break;
            case 1:
              obj_80.type = 1;
              obj_80.value = fn_1628(first_arg, list_164[index_13].value);
              break;
            case 3:
              ((obj_80.type = 3), (obj_80.value = list_164[index_13].value));
          }
        }
        list_165.push(obj_80);
      }
      return list_165;
    };
var fn_1626 = function (first_arg, text_8) {
      var text_9 = "";
      text_8 = text_8.replace(regex_12, function (first_arg_2, second_arg) {
        text_9 = second_arg;
        return "";
      });
      var obj_80 = {};
      obj_80.T5b = text_9;
      text_8 = fn_1624(text_8);
      for (var index_13 = 0; index_13 < text_8.length;) {
        let value = text_8[index_13].value;
        index_13++;
        let local_737;
        1 == text_8[index_13].type && (local_737 = fn_1625(first_arg, text_8[index_13].value));
        obj_80[value.replace(/\s/g, "")] = local_737;
        index_13++;
      }
      return obj_80;
    };
var fn_1627 = function (first_arg, text_8) {
      var text_9 = "",
        num_94 = 0;
      text_8 = text_8.replace(regex_10, function (first_arg_2, second_arg, third_arg) {
        text_9 = second_arg;
        third_arg && (num_94 = parseInt(third_arg, 10));
        return "";
      });
      var obj_80 = {};
      obj_80.T5b = text_9;
      obj_80.fdd = num_94;
      text_8 = fn_1624(text_8);
      for (var index_13 = 0; index_13 < text_8.length;) {
        let value = text_8[index_13].value;
        index_13++;
        let local_737;
        1 == text_8[index_13].type && (local_737 = fn_1625(first_arg, text_8[index_13].value));
        obj_80[value.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = local_737;
        index_13++;
      }
      return obj_80;
    };
var fn_1628 = function (first_arg, text_8) {
      var text_9 = "";
      text_8 = text_8.replace(regex_11, function (first_arg_2, second_arg) {
        text_9 = second_arg;
        return "";
      });
      var obj_80 = {};
      obj_80.T5b = text_9;
      obj_80.fdd = 0;
      text_8 = fn_1624(text_8);
      for (var index_13 = 0; index_13 < text_8.length;) {
        let value = text_8[index_13].value;
        index_13++;
        let local_737;
        1 == text_8[index_13].type && (local_737 = fn_1625(first_arg, text_8[index_13].value));
        obj_80[value.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = local_737;
        index_13++;
      }
      return obj_80;
    };
namespace.rB.prototype.Aa = function (list_164) {
    return "\ufddf_" + (list_164.length - 1).toString(10) + "_";
  };
var cls_454;
var fn_1765;
var fn_1766;
cls_454 = function (first_arg, second_arg, third_arg, fourth_arg) {
    namespace.ve.call(this, fourth_arg);
    this.type = "key";
    this.keyCode = first_arg;
    this.charCode = second_arg;
    this.repeat = third_arg;
  };
namespace.lJ = function (first_arg, second_arg) {
    namespace.xe.call(this);
    first_arg && this.attach(first_arg, second_arg);
  };
fn_1765 = function (first_arg) {
    if (namespace.ie) first_arg = namespace.XLa(first_arg);
    else if (namespace.fEa && namespace.fe)
      a: switch (first_arg) {
        case 93:
          first_arg = 91;
          break a;
      }
    return first_arg;
  };
fn_1766 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg) {
    if (namespace.fEa && fifth_arg) return namespace.VLa(first_arg);
    if (fifth_arg && !fourth_arg) return !1;
    if (!namespace.ie) {
      typeof second_arg === "number" && (second_arg = fn_1765(second_arg));
      let local_737 = second_arg == 17 || second_arg == 18 || (namespace.fEa && second_arg == 91);
      if (
        ((!third_arg || namespace.fEa) && local_737) ||
        (namespace.fEa && second_arg == 16 && (fourth_arg || sixth_arg))
      )
        return !1;
    }
    if (namespace.fe && fourth_arg && third_arg)
      switch (first_arg) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
          return !1;
      }
    switch (first_arg) {
      case 13:
        return namespace.ie ? (sixth_arg || fifth_arg ? !1 : !(third_arg && fourth_arg)) : !0;
      case 27:
        return !namespace.fe && !namespace.ie;
    }
    return namespace.ie && (fourth_arg || fifth_arg || sixth_arg) ? !1 : namespace.VLa(first_arg);
  };
namespace.Xi(cls_454, namespace.ve);
namespace.Xi(namespace.lJ, namespace.xe);
namespace.ba = namespace.lJ.prototype;
namespace.ba.Xd = null;
namespace.ba.Vhc = null;
namespace.ba.DRc = null;
namespace.ba.Whc = null;
namespace.ba.jua = -1;
namespace.ba.Qib = -1;
namespace.ba.myc = !1;
var obj_68 = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45
    };
var obj_69 = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      "U+007F": 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45
    };
var local_714 = namespace.fEa && namespace.ie;
namespace.ba = namespace.lJ.prototype;
namespace.ba.vgb = function (event) {
    namespace.fe &&
      ((this.jua == 17 && !event.ctrlKey) ||
        (this.jua == 18 && !event.altKey) ||
        (namespace.fEa && this.jua == 91 && !event.metaKey)) &&
      this.resetState();
    this.jua == -1 &&
      (event.ctrlKey && event.keyCode != 17
        ? (this.jua = 17)
        : event.altKey && event.keyCode != 18
          ? (this.jua = 18)
          : event.metaKey && event.keyCode != 91 && (this.jua = 91));
    fn_1766(event.keyCode, this.jua, event.shiftKey, event.ctrlKey, event.altKey, event.metaKey)
      ? ((this.Qib = fn_1765(event.keyCode)), local_714 && (this.myc = event.altKey))
      : this.handleEvent(event);
  };
namespace.ba.resetState = function () {
    this.Qib = this.jua = -1;
  };
namespace.ba.Yse = function (first_arg) {
    this.resetState();
    this.myc = first_arg.altKey;
  };
namespace.ba.handleEvent = function (first_arg) {
    var fi = first_arg.Fi,
      alt_key = fi.altKey;
    if (namespace.fe && first_arg.type == "keypress") {
      var qib = this.Qib;
      var local_737 =
        fi.charCode >= 0 && fi.charCode < 63232 && namespace.VLa(qib) ? fi.charCode : 0;
    } else
      (first_arg.type == "keypress"
        ? (local_714 && (alt_key = this.myc),
          fi.keyCode == fi.charCode
            ? fi.keyCode < 32
              ? ((qib = fi.keyCode), (local_737 = 0))
              : ((qib = this.Qib), (local_737 = fi.charCode))
            : ((qib = fi.keyCode || this.Qib), (local_737 = fi.charCode || 0)))
        : ((qib = fi.keyCode || this.Qib), (local_737 = fi.charCode || 0)),
        namespace.fEa && local_737 == 63 && qib == 224 && (qib = 191));
    var local_738 = (qib = fn_1765(qib));
    qib
      ? qib >= 63232 && qib in obj_68
        ? (local_738 = obj_68[qib])
        : qib == 25 && first_arg.shiftKey && (local_738 = 9)
      : fi.keyIdentifier && fi.keyIdentifier in obj_69 && (local_738 = obj_69[fi.keyIdentifier]);
    if (
      !namespace.ie ||
      first_arg.type != "keypress" ||
      fn_1766(
        local_738,
        this.jua,
        first_arg.shiftKey,
        first_arg.ctrlKey,
        alt_key,
        first_arg.metaKey
      )
    )
      ((first_arg = local_738 == this.jua),
        (this.jua = local_738),
        (fi = new cls_454(local_738, local_737, first_arg, fi)),
        (fi.altKey = alt_key),
        this.dispatchEvent(fi));
  };
namespace.ba.Ha = function () {
    return this.Xd;
  };
namespace.ba.attach = function (first_arg, second_arg) {
    this.Whc && this.detach();
    this.Xd = first_arg;
    this.Vhc = namespace.De(this.Xd, "keypress", this, second_arg);
    this.DRc = namespace.De(this.Xd, "keydown", this.vgb, second_arg, this);
    this.Whc = namespace.De(this.Xd, "keyup", this.Yse, second_arg, this);
  };
namespace.ba.detach = function () {
    this.Vhc &&
      (namespace.Fn(this.Vhc),
      namespace.Fn(this.DRc),
      namespace.Fn(this.Whc),
      (this.Whc = this.DRc = this.Vhc = null));
    this.Xd = null;
    this.Qib = this.jua = -1;
  };
namespace.ba.Jc = function () {
    namespace.lJ.Qf.Jc.call(this);
    this.detach();
  };
namespace.ocr = function () {
    this.blockSize = -1;
  };

}).call(window, window._);

/* utility subset from google/shared-modules */
(function (namespace) {
namespace.Nr = function (first_arg, second_arg, third_arg) {
    namespace.Kd.call(this);
    this.TX = first_arg;
    this.wa = second_arg || 0;
    this.ka = third_arg;
    this.oa = () => fn(this);
  };
namespace.Xi(namespace.Nr, namespace.Kd);
namespace.Nr.prototype.wp = 0;
namespace.Nr.prototype.Jc = function () {
    namespace.Nr.Qf.Jc.call(this);
    this.stop();
    delete this.TX;
    delete this.ka;
  };
namespace.Nr.prototype.start = function (first_arg) {
    this.stop();
    this.wp = namespace.Kn(this.oa, first_arg !== void 0 ? first_arg : this.wa);
  };
namespace.Nr.prototype.stop = function () {
    this.isActive() && namespace.Ln(this.wp);
    this.wp = 0;
  };
namespace.Nr.prototype.fire = function () {
    this.stop();
    fn(this);
  };
namespace.Nr.prototype.isActive = function () {
    return this.wp != 0;
  };
var fn = function (first_arg) {
    first_arg.wp = 0;
    first_arg.TX && first_arg.TX.call(first_arg.ka);
  };

}).call(window, window._);

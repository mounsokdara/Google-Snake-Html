loaded_h_0(function (namespace) {
  var window = this;
  namespace.YYb = [2, 4];
  namespace.v("p3hmRc");
  var fn, fn_2, fn_3, fn_4, fn_5;
  namespace.cZb = function () {
    local ??= Object.freeze({
      get enabled() {
        return local.wpa !== -1 && fn("gTCm1").Ub(!0)
          ? local.x7e.enabled || local.e6c.enabled || local.iTe.enabled
          : !1;
      },
      environment: fn("HiPsbb").wi(obj, 0),
      A8d: fn("MUE6Ne").ka() ?? void 0,
      v1a: fn("cfb2h").ka() ?? void 0,
      wpa: fn("yFnxrf").zc(-1),
      x7e: fn_2("xwAfE", () => "UUFaWc"),
      e6c: fn_2("xnI9P", () => "u4g7r"),
      iTe: fn_2("AfY8Hf", () => "hsFLT")
    });
    return local;
  };
  fn = function (first_arg) {
    var local_3 = hd(first_arg);
    if (!local_3.Lb() && namespace.ea !== namespace.ea.top)
      try {
        local_3 = hd(first_arg, namespace.ea.top);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "SecurityError")) {
          if (error instanceof Error) throw error;
          throw Error("Mf`" + error);
        }
      }
    return local_3;
  };
  fn_2 = function (first_arg, fn_20) {
    first_arg = fn(first_arg).Ub(!1);
    return {
      enabled: first_arg,
      toc: first_arg ? namespace.Am(fn(fn_20()), namespace.eZb).Ke() : kb()
    };
  };
  fn_3 = function () {
    return new cls(() => new cls_2(), "");
  };
  fn_4 = function (first_arg, second_arg, third_arg) {
    var up = namespace.up();
    return new cls(
      () => {
        var v_a = namespace.V$a(
            namespace.W$a(
              namespace.X$a(namespace.U$a(new namespace.Y$a(first_arg, up), second_arg.v1a ?? ""))
            )
          ),
          nla = namespace.Nla();
        nla != null && v_a.setProductID(nla);
        (nla = third_arg?.()) &&
          (nla = nla.mOb()) &&
          !nla.isEmpty() &&
          ((nla = [nla.wa()]), (v_a.Ca = nla));
        return v_a.build();
      },
      second_arg.A8d ?? "",
      fn_5(first_arg),
      second_arg.environment
    );
  };
  fn_5 = function (first_arg) {
    switch (first_arg) {
      case 1957:
        return 3;
      case 2082:
        return 2;
      case 1884:
        return 1;
      case 2649:
        return 0;
      case 2325:
        return 5;
      case 2324:
        return 4;
    }
  };
  namespace.eZb = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
  };
  var kb = namespace.Kb(namespace.eZb);
  var obj = { Ivf: 0, fSf: 1, n0f: 2, dcf: 3, Nvc: 4 };
  var local,
    hd = namespace.Hd;
  var cls = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg = 0) {
        this.oa = first_arg;
        this.appName = second_arg;
        this.ka = third_arg;
        this.environment = fourth_arg;
      }
    },
    cls_2 = class {
      dispatch() {}
      flush() {}
    };
  namespace.lZb = class {
    constructor() {
      this.config = namespace.cZb();
      if (this.config.enabled) {
        let dg = namespace.dg(namespace.Dsb);
        this.ka = fn_4(this.config.wpa, this.config, dg);
      } else this.ka = fn_3();
    }
  };
  namespace.sg(namespace.lZb, namespace.Bab);
  namespace.w();
  namespace.sZb = [2, 3];
  namespace.tZb = [1, 2];
  namespace.uZb = [3, 4, 5];
  var fn_6;
  namespace.oZb = function (first_arg, second_arg) {
    return namespace.uk(first_arg, 2, second_arg);
  };
  fn_6 = function (first_arg, second_arg) {
    Number.isFinite(second_arg) || (second_arg = 0);
    return namespace.oZb(
      first_arg.setSeconds(Math.floor(second_arg / 1e3)),
      (((second_arg % 1e3) + 1e3) % 1e3) * 1e6
    );
  };
  namespace.qZb = function (first_arg) {
    var rm = new namespace.rm();
    return fn_6(rm, first_arg.getTime());
  };
  namespace.rZb = function (first_arg) {
    return fn_6(new namespace.rm(), first_arg);
  };
  namespace.mZb = function (first_arg, second_arg) {
    return namespace.uk(first_arg, 2, second_arg);
  };
  namespace.nZb = function (first_arg, second_arg) {
    if (!Number.isFinite(second_arg)) throw Error();
    var trunc = Math.trunc(second_arg);
    second_arg = (second_arg - trunc + (trunc % 1e3)) * 1e6;
    return namespace.mZb(first_arg.setSeconds(Math.trunc(trunc / 1e3)), Math.trunc(second_arg));
  };
  namespace.v("pNBFbe");
  var fn_7 = function (fn_20) {
      if (namespace.wAa === void 0) throw Error("Zd");
      if (namespace.wAa) for (let [local_3, local_4] of namespace.wAa) fn_20(local_3, local_4);
      namespace.xAa.add(fn_20);
      namespace.wAa = void 0;
    },
    fn_8 = function (fn_20) {
      namespace.JAa.add(fn_20);
      for (let local_5 of namespace.c0a) {
        var local_3 = local_5,
          local_4 = fn_20();
        local_3.ffa === void 0
          ? (local_3.ffa = local_4)
          : local_3.ffa instanceof namespace.U_a
            ? (local_3.ffa = local_3.ffa.oa().merge(local_4))
            : local_3.ffa instanceof namespace.KAa && (local_3.ffa = local_3.ffa.merge(local_4));
      }
    },
    fn_9 = function (first_arg, second_arg, third_arg, fourth_arg) {
      first_arg = fn_14(new cls_13().Uc(first_arg), fourth_arg);
      fourth_arg = namespace.yj(first_arg, cls_10, 5, namespace.uZb);
      fourth_arg = namespace.xj(fourth_arg, cls_9, 1);
      fn_11(fourth_arg, third_arg).Ve(second_arg);
      return first_arg;
    },
    fn_10 = function (first_arg) {
      return namespace.nZb(new namespace.Or(), first_arg);
    },
    cls_3 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
      getUrl() {
        return namespace.u(this, 3);
      }
      Pd() {
        return namespace.Ch(this, 3);
      }
      oa(first_arg) {
        return namespace.rh(this, 5, first_arg);
      }
      Aa(first_arg) {
        namespace.li(this, 8, first_arg);
      }
      Ba(first_arg) {
        namespace.rh(this, 10, first_arg);
      }
      wa(first_arg) {
        return namespace.li(this, 11, first_arg);
      }
    },
    cls_4 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
    },
    cls_5 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
      getType() {
        return namespace.Qj(this, 1);
      }
      setType(first_arg) {
        return namespace.li(this, 1, first_arg);
      }
      If() {
        return namespace.Xk(this, 1);
      }
      Ff() {
        return namespace.oi(this, 1);
      }
      getId() {
        return namespace.fGa(this, 2, namespace.sZb);
      }
      Uc(first_arg) {
        return namespace.vj(this, 2, namespace.sZb, namespace.eb(first_arg));
      }
      Yg() {
        return namespace.Pqb(this, 2, namespace.sZb) != null;
      }
    },
    cls_6 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
      getStatus() {
        return namespace.Qj(this, 2);
      }
      fq() {
        return namespace.Xk(this, 2);
      }
    },
    cls_7 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
    },
    cls_8 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
    },
    fn_11 = function (first_arg, second_arg) {
      return namespace.xk(first_arg, 2, second_arg);
    },
    fn_12 = function (first_arg, second_arg) {
      namespace.Yea(first_arg, 3, namespace.$ca, second_arg, namespace.ada);
    },
    cls_9 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
      getName() {
        return namespace.u(this, 1);
      }
      Ve(first_arg) {
        return namespace.rh(this, 1, first_arg);
      }
      Dh() {
        return namespace.Ch(this, 1);
      }
    },
    cls_10 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
    },
    fn_13 = function (first_arg, second_arg) {
      namespace.li(first_arg, 7, second_arg);
    },
    cls_11 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
      Dda() {
        return namespace.Mj(this, 2);
      }
      setInterval(first_arg) {
        return namespace.mi(this, 9, first_arg);
      }
      clearInterval() {
        return namespace.gf(this, 9);
      }
    },
    cls_12 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
    },
    fn_14 = function (first_arg, second_arg) {
      return namespace.Hb(first_arg, namespace.Or, 2, second_arg);
    },
    fn_15 = function (first_arg) {
      var nzb = new cls_12();
      return namespace.Cj(first_arg, 4, namespace.uZb, nzb);
    },
    cls_13 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
      getId() {
        return namespace.Mj(this, 1);
      }
      Uc(first_arg) {
        return namespace.xk(this, 1, first_arg);
      }
      Yg() {
        return namespace.Rk(this, 1);
      }
    },
    cls_14 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
      getId() {
        return namespace.Mj(this, 1);
      }
      Uc(first_arg) {
        return namespace.zk(this, 1, first_arg);
      }
      Yg() {
        return namespace.Tk(this, 1);
      }
      getName() {
        return namespace.u(this, 2);
      }
      Ve(first_arg) {
        return namespace.rh(this, 2, first_arg);
      }
      Dh() {
        return namespace.Ch(this, 2);
      }
      getStartTime() {
        return namespace.p(this, namespace.rm, 4);
      }
      lja() {
        return namespace.gf(this, 4);
      }
      getDuration() {
        return namespace.p(this, namespace.Or, 11);
      }
      aZ() {
        return namespace.gf(this, 11);
      }
      Qja() {
        return namespace.zj(this, namespace.Or, 11);
      }
    },
    w_a = new namespace.W_a(),
    w_a_2 = new namespace.W_a(),
    cls_15 = class {
      constructor(first_arg) {
        this.ka = first_arg;
      }
    },
    w_a_3 = new namespace.W_a();
  var local_2 = Symbol();
  var cls_16 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
    oa() {
      return namespace.xj(this, cls_3, 5);
    }
    wa(first_arg) {
      namespace.Hb(this, namespace.eZb, 18, first_arg);
    }
  };
  var w_a_4 = new namespace.W_a();
  var cls_17 = class {
      constructor(first_arg, second_arg) {
        this.ka = first_arg;
        this.toc = second_arg;
        fn_7(this.oa.bind(this));
        fn_8(() => {
          var fn_20 = Number;
          var toc = this.toc;
          toc = namespace.Lj(toc, namespace.hj(toc, namespace.YYb, 2));
          return namespace.V_a(w_a_3, new cls_15(fn_20(toc)));
        });
      }
      oa(first_arg, second_arg) {
        if (first_arg.iT.length !== 1 || first_arg.iT[0].Jl !== 0) {
          var get_value = second_arg.get(0),
            local_3 = get_value?.get(w_a_4),
            vzb = new cls_16();
          local_3?.wid && ((local_3 = local_3.wid.getId(local_2)), namespace.Gk(vzb, 19, local_3));
          get_value = get_value?.get(w_a_3);
          first_arg = new cls_18(first_arg, second_arg, get_value.ka / 1e3);
          namespace.Hb(vzb, cls_14, 16, first_arg.Ia);
          first_arg = this.ka;
          second_arg = this.toc;
          get_value = vzb.oa().oa(first_arg.appName).wa(first_arg.environment);
          first_arg.ka && get_value.Aa(first_arg.ka);
          (local_3 = namespace.Wb()?.Upe()?.Wc()) && get_value.Ba(local_3);
          vzb.wa(second_arg);
          first_arg.transport ?? (first_arg.transport = first_arg.oa());
          first_arg.transport.dispatch(vzb);
          first_arg.transport.flush();
        }
      }
    },
    fn_16 = function (first_arg, second_arg) {
      if (!first_arg.extras.get(0)?.has(namespace.Aab)) return second_arg;
      a: {
        for (local_3 of first_arg.extras.values())
          if ((first_arg = local_3.get(namespace.zab))) {
            var local_3 = (0, namespace.tAa)`Le3Jze${first_arg.ka}OWXEXe`;
            break a;
          }
        local_3 = void 0;
      }
      return local_3 ? namespace.vAa(second_arg, local_3) : second_arg;
    },
    fn_17 = function (first_arg, second_arg) {
      var fn_20 = (0, namespace.eg)(1),
        fn_21 = fn_20(),
        fn_22 = fn_20(1);
      return (function* () {
        fn_22();
        try {
          fn_22(
            yield fn_21(
              fn_9(
                fn_19(first_arg, second_arg.id),
                second_arg.name,
                fn_19(first_arg, second_arg.parentId),
                fn_10(second_arg.e7)
              )
            )
          );
        } finally {
          fn_21();
        }
      })();
    },
    fn_18 = function (first_arg, second_arg) {
      var fn_20 = (0, namespace.eg)(1),
        fn_21 = fn_20(),
        fn_22 = fn_20(1);
      return (function* () {
        fn_22();
        try {
          let local_3 = fn_10(second_arg.e7),
            num = void 0,
            local_4;
          second_arg.parentId === void 0
            ? ((num = first_arg.Ba++), (local_4 = 0))
            : (local_4 = fn_19(first_arg, second_arg.parentId));
          if (!second_arg.yob && second_arg.parentId !== void 0) {
            num = first_arg.Ba++;
            let local_7 = first_arg.Aa++;
            fn_22(
              yield fn_21(fn_9(local_7, namespace.vAa(second_arg.name, "APGx0e"), local_4, local_3))
            );
            local_4 = local_7;
          }
          let local_5 = fn_19(first_arg, second_arg.id),
            local_6 = fn_14(new cls_13().Uc(local_5), local_3),
            yj = namespace.yj(local_6, cls_11, 3, namespace.uZb);
          num && namespace.xk(yj, 2, num);
          let name = second_arg.name;
          second_arg.parentId === void 0 && (name = fn_16(first_arg, name));
          fn_11(namespace.xj(yj, cls_9, 1), local_4).Ve(name);
          let get_value = first_arg.extras.get(second_arg.id);
          if (get_value) {
            let get_value_2 = get_value.get(namespace.xab);
            get_value_2 && fn_13(namespace.rh(yj, 6, get_value_2.ka), get_value_2.oa);
            let get_value_3 = get_value.get(namespace.yab);
            if (get_value_3) {
              let from = Array.from(get_value_3.ka, (first_arg_2) => fn_19(first_arg, first_arg_2));
              fn_12(namespace.xj(yj, cls_9, 1), from);
            }
          }
          fn_22(yield fn_21(local_6));
          second_arg.Jl !== void 0 &&
            fn_22(
              yield fn_21(
                fn_15(
                  fn_14(
                    new cls_13().Uc(local_5),
                    second_arg.Jl === 0 ? local_3 : fn_10(second_arg.e7 + (second_arg.Jl ?? 0))
                  )
                )
              )
            );
        } finally {
          fn_21();
        }
      })();
    },
    fn_19 = function (first_arg, second_arg) {
      var local_3 = first_arg.ka[second_arg];
      local_3 === void 0 && (first_arg.ka[second_arg] = local_3 = first_arg.Aa++);
      return local_3;
    },
    cls_18 = class {
      constructor(first_arg, second_arg, third_arg) {
        this.Ga = first_arg;
        this.extras = second_arg;
        this.Ba = this.Aa = 1;
        this.wa = Number.POSITIVE_INFINITY;
        this.oa = Number.NEGATIVE_INFINITY;
        this.Ca = Array(first_arg.iT.length).fill(!1);
        this.ka = Array(first_arg.iT.length);
        second_arg = new cls_14().Uc(String(first_arg.id));
        var r_zb = namespace.rZb(first_arg.startTimeMs);
        second_arg = namespace.Hb(second_arg, namespace.rm, 4, r_zb);
        first_arg.JEd && namespace.tk(second_arg, 5, first_arg.JEd);
        r_zb = namespace.xj(second_arg, cls_8, 10);
        namespace.qGa(r_zb, 1, namespace.tZb, third_arg);
        for (var list of first_arg.iT)
          this.Ca[list.id] ||
            ((this.Ca[list.id] = !0),
            (first_arg = second_arg),
            (third_arg = list.marker ? fn_17(this, list) : fn_18(this, list)),
            namespace.Ej(first_arg, 7, cls_13, third_arg),
            (this.wa = Math.min(this.wa, list.e7)),
            (this.oa = Math.max(this.oa, list.e7 + (list.Jl ?? 0))));
        for (var local_3 of this.extras.values())
          if ((list = local_3.get(w_a_4)) && list.lee.length > 0)
            for (var local_4 of list.lee)
              ((list = new cls_6()),
                (first_arg = local_4.wid.getId(local_2)),
                (list = namespace.tk(list, 1, first_arg)),
                (list = namespace.li(list, 2, local_4.status)),
                local_4.status === 0
                  ? ((first_arg = namespace.li(list, 2, 6)), namespace.li(first_arg, 3, 7))
                  : local_4.incompleteReason && namespace.li(list, 3, local_4.incompleteReason),
                (first_arg = namespace.xj(second_arg, cls_7, 15)),
                namespace.Kh(first_arg, 1, cls_6, list));
        local_4 = void 0;
        local_3 = [];
        for (let [local_5, local_6] of this.extras.entries()) {
          first_arg = local_5;
          list = local_6.get(w_a);
          if (!list) continue;
          third_arg = this.ka[first_arg];
          first_arg = list.oa;
          r_zb = list.ka;
          local_4 ??= first_arg;
          list = local_3;
          first_arg = list.push;
          var fzb = new cls_4();
          third_arg = namespace.xk(fzb, 1, third_arg);
          third_arg = namespace.xk(third_arg, 2, String(r_zb));
          first_arg.call(list, third_arg.Ke());
        }
        local_4
          ? ((list = this.extras.get(0)?.get(w_a_2)),
            (list = list?.oa && list.ka != null ? list.ka / 1e3 : void 0),
            (local_4 = new cls_5().setType(2).Uc(String(local_4))),
            (local_3 = namespace.wi(local_4, 4, local_3)),
            (local_3 = namespace.Lh(local_3, 5, list).Ke()))
          : (local_3 = void 0);
        local_3 && namespace.Kh(second_arg, 8, cls_5, local_3);
        second_arg.Ve(fn_16(this, this.Ga.iT[0].name));
        local_3 = fn_10(this.oa - this.wa);
        namespace.Hb(second_arg, namespace.Or, 11, local_3);
        this.Ia = second_arg.Ke();
      }
      isEmpty() {
        return this.Ga.iT.length === 1;
      }
    };
  namespace.rg(
    namespace.Cab,
    class extends namespace.so {
      constructor(first_arg) {
        super();
        this.config = namespace.cZb();
        this.logger = null;
        this.ka = first_arg.service.dIe.ka;
      }
      static Sa() {
        return { service: { dIe: namespace.lZb } };
      }
      init() {
        this.config.e6c.enabled && new cls_17(this.ka, this.config.e6c.toc);
      }
    }
  );
  namespace.w();
});
// Google Inc.

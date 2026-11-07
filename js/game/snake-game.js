loaded_h_0(function (namespace) {
  var window = this;
  namespace.CVg = !!(namespace.Ti[39] & 64);
  namespace.DVg = !!(namespace.Ti[39] & 128);
  namespace.EVg = !!(namespace.Ti[39] & 512);
  namespace.FVg = !!(namespace.Ti[39] & 8192);
  namespace.GVg = !!((namespace.Ti[39] >> 15) & 1);
  namespace.HVg = !!((namespace.Ti[39] >> 16) & 1);
  namespace.IVg = !!((namespace.Ti[39] >> 17) & 1);
  namespace.JVg = !!((namespace.Ti[39] >> 19) & 1);
  namespace.v("k7aqqc");
  var cls = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
  };
  var fn = function (first_arg, second_arg) {
      return namespace.wi(first_arg, 2, second_arg);
    },
    cls_2 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
    };
  var cls_3 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
  };
  var cls_4 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
  };
  var fn_2 = function (first_arg, second_arg) {
      return namespace.wi(first_arg, 4, second_arg);
    },
    cls_5 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
    };
  var cls_6 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
      rl() {
        return namespace.eGa(this, 2, list);
      }
    },
    cls_7 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
    },
    list = [2, 3];
  var cls_8 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
  };
  var cls_9 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
  };
  var fn_3 = function (first_arg, second_arg) {
      return namespace.wi(first_arg, 1, second_arg);
    },
    cls_10 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
    };
  var cls_11 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
  };
  var cls_12 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
    },
    cls_13 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
    },
    list_2 = [3, 4];
  var cls_14 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
  };
  var cls_15 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
  };
  var cls_16 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
  };
  var cls_17 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
  };
  var cls_18 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
  };
  var obj = {
    Lc: "QwH5k",
    Sc: void 0,
    Pc: !1,
    Rc: class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
    },
    Qc: cls_2
  };
  obj[namespace.Qq] = !0;
  var wt = new namespace.Wt(obj);
  var obj_2 = { Lc: "nKidxe", Sc: void 0, Pc: !0, Rc: cls_8, Qc: cls_5 };
  obj_2[namespace.Qq] = !0;
  var wt_2 = new namespace.Wt(obj_2);
  var obj_3 = { Lc: "pBtQ8e", Sc: void 0, Pc: !0, Rc: cls_14, Qc: cls_10 };
  obj_3[namespace.Qq] = !0;
  var wt_3 = new namespace.Wt(obj_3);
  var obj_4 = { Lc: "G1NKeb", Sc: void 0, Pc: !1, Rc: cls_18, Qc: cls_16 };
  obj_4[namespace.Qq] = !0;
  var wt_4 = new namespace.Wt(obj_4);
  var fn_4 = function (
      first_arg,
      {
        samplingFactor: arg = 1,
        cooldownPeriodMs: arg_2 = 3e4,
        batchFlushDelayMs: arg_3 = 2e3
      } = {}
    ) {
      return new cls_19(first_arg, {
        samplingFactor: arg,
        cooldownPeriodMs: arg_2,
        batchFlushDelayMs: arg_3
      });
    },
    fn_5 = function (first_arg) {
      return JSON.stringify(first_arg, Object.keys(first_arg).sort());
    },
    fn_6 = async function (first_arg) {
      var fn_457 = (0, namespace.eg)(),
        fn_458 = fn_457();
      fn_457 = fn_457(1);
      try {
        if (first_arg.Wx && first_arg.Wx.tAa.size) {
          var d_sc = first_arg.Wx.dSc,
            local_44 = d_sc !== void 0 && Date.now() - d_sc > 5e4;
          if (local_44) for (var local_45 of first_arg.Wx.tAa.values()) local_45.c1b = 0;
          var qc = first_arg.Wx.QC,
            some = Array.from(first_arg.Wx.tAa.values()).some(
              (first_arg_2) => first_arg_2.c1b === 0
            );
          if (!some) {
            let local_46 = first_arg.URc > 0 ? first_arg.URc : first_arg.vHc;
            if (
              local_46 > 0 &&
              local_46 + 5e4 <= Date.now() &&
              Array.from(first_arg.Wx.tAa.values()).every((first_arg_2) => !first_arg_2.eRb)
            ) {
              first_arg.Wx.QC === qc && (first_arg.Wx.QC = void 0);
              return;
            }
          }
          var from = Array.from(first_arg.Wx.tAa.values(), (first_arg_2) => first_arg_2.tI);
          try {
            var list_50 = fn_457(await fn_458(first_arg.nfb(from)));
          } catch (error) {
            fn_457();
            if (!first_arg.Wx) return;
            fn_18(first_arg, qc);
            return;
          }
          if (first_arg.Wx)
            if (list_50.some((first_arg_2) => first_arg_2.Nz !== "SUCCESS")) fn_18(first_arg, qc);
            else {
              some = some ? 3e3 : 3e4;
              var now = Date.now();
              first_arg.Wx.dSc = now;
              first_arg.Wx.SRc = !0;
              first_arg.vHc === 0 && (first_arg.vHc = now);
              first_arg.Wx.QC === qc &&
                ((first_arg.Wx.xtb = some),
                (first_arg.Wx.QC = (0, namespace.ho)(() => {
                  fn_6(first_arg);
                }, some)));
              namespace.GVg && first_arg.Eod++;
              for (qc = 0; qc < list_50.length; qc++) {
                let local_46 = fn_5(from[qc]),
                  get_value = first_arg.Wx.tAa.get(local_46);
                if (!get_value) continue;
                let zwd = get_value.Zwd,
                  count = list_50[qc].count;
                if (count === void 0 || count === null) continue;
                let lqe = zwd.LQe;
                now = some = count / 3456e5;
                if (lqe !== void 0 && count !== void 0 && d_sc !== void 0) {
                  let num_30 = Date.now() - d_sc;
                  local_45 = (count - lqe) / num_30;
                  local_45 > 0 ? (now = local_45) : local_45 < 0 && (now = some * 0.5);
                }
                let xtb = first_arg.Wx.xtb;
                some = count + now * xtb * 0.8;
                namespace.GVg && (some += first_arg.Eod * 1e3);
                let local_47 = local_44 ? count : (zwd.k2a ?? count);
                Object.assign(zwd, {
                  Et: some,
                  LQe: count,
                  Vhd: local_47,
                  wze: some > local_47 ? (some - local_47) / xtb : now
                });
                get_value.c1b++;
                if (get_value.c1b === 1) {
                  for (let fn_459 of get_value.xWc) fn_459();
                  get_value.xWc.length = 0;
                }
              }
            }
        }
      } finally {
        fn_458();
      }
    },
    fn_7 = function (first_arg, second_arg, third_arg, fourth_arg) {
      first_arg.qba.has(second_arg) || first_arg.qba.set(second_arg, new Map());
      first_arg.qba.get(second_arg).has(third_arg) ||
        first_arg.qba.get(second_arg).set(third_arg, []);
      fourth_arg = { increment: fourth_arg, qk: namespace.Jf() };
      first_arg.qba.get(second_arg).get(third_arg).push(fourth_arg);
      return fourth_arg;
    },
    fn_8 = function (first_arg, second_arg, third_arg) {
      switch (namespace.Qj(third_arg, 1)) {
        case 2:
          return { Nz: "INSUFFICIENT_DATA" };
        case 3:
          return { Nz: "BACKEND_ERROR" };
        case 4:
          return { Nz: "NO_DATA" };
        case 1:
          {
            var instance_id = second_arg.instanceId;
            second_arg = second_arg.fieldName;
            let num_30 = 0;
            if (
              instance_id &&
              first_arg.qba.has(instance_id) &&
              second_arg &&
              first_arg.qba.get(instance_id).has(second_arg)
            )
              for (let local_44 of first_arg.qba.get(instance_id).get(second_arg))
                num_30 += local_44.increment;
            first_arg = num_30;
          }
          return { Nz: "SUCCESS", count: namespace.Se(third_arg.rl()) + first_arg };
        default:
          return { Nz: "UNKNOWN" };
      }
    },
    fn_9 = function (list_50) {
      return fn_2(
        new cls_5(),
        list_50.map((first_arg) => {
          var pvg = new cls_4();
          return namespace.rh(pvg, 1, first_arg.instanceId);
        })
      );
    },
    fn_10 = function (first_arg, second_arg, third_arg) {
      switch (namespace.Qj(third_arg, 1)) {
        case 2:
          return { Nz: "INSUFFICIENT_DATA" };
        case 3:
          return { Nz: "BACKEND_ERROR" };
        case 4:
          return { Nz: "NO_DATA" };
        case 1:
          third_arg = namespace.di(third_arg, cls_7, 3, list);
          third_arg = namespace.bl(third_arg, 1, cls_6);
          second_arg = second_arg.instanceId;
          let map_3 = new Map();
          for (let local_44 of third_arg.keys()) {
            let get_value = third_arg.get(local_44);
            map_3.set(
              local_44,
              fn_8(first_arg, { instanceId: second_arg, fieldName: local_44 }, get_value)
            );
          }
          return { Nz: "SUCCESS", eHc: map_3 };
        default:
          return { Nz: "UNKNOWN" };
      }
    },
    fn_11 = function (list_50) {
      return fn(
        new cls_2(),
        list_50.map((first_arg) => {
          var lvg = new cls();
          return namespace.rh(lvg, 1, first_arg.MJa);
        })
      );
    },
    fn_12 = function (list_50) {
      return fn_3(
        new cls_10(),
        list_50.map((first_arg) => {
          var wvg = new cls_9();
          wvg = namespace.rh(wvg, 1, first_arg.instanceId);
          return namespace.rh(wvg, 2, first_arg.fieldName);
        })
      );
    },
    fn_13 = function (first_arg, second_arg, third_arg) {
      switch (namespace.Qj(third_arg, 1)) {
        case 3:
          return { Nz: "BACKEND_ERROR" };
        case 2:
          return { Nz: "MALFORMED_REQUEST" };
        case 4:
          return { Nz: "INVALID_CREDENTIALS" };
        case 5:
          return { Nz: "NO_DATA" };
        case 1:
          if (second_arg.fieldName !== void 0) {
            first_arg = namespace.di(third_arg, cls_11, 3, list_2);
            var mi = namespace.MI;
            first_arg = { Nz: "SUCCESS", uTd: namespace.Wj(first_arg, 1, mi && namespace.sj(mi)) };
          } else {
            second_arg = second_arg.instanceId;
            third_arg = namespace.di(third_arg, cls_13, 4, list_2);
            third_arg = namespace.bl(third_arg, 1, cls_12);
            let map_3 = new Map();
            for (mi of third_arg.keys()) {
              let get_value = third_arg.get(mi);
              map_3.set(mi, fn_13(first_arg, { instanceId: second_arg, fieldName: mi }, get_value));
            }
            first_arg = { Nz: "SUCCESS", Keg: map_3 };
          }
          return first_arg;
        default:
          return { Nz: "UNKNOWN" };
      }
    },
    fn_14 = function (first_arg) {
      var now = Date.now();
      for (let local_44 of first_arg.qba.keys())
        for (let local_45 of first_arg.qba.get(local_44).keys()) {
          for (let { qk: local_46 } of first_arg.qba.get(local_44).get(local_45))
            local_46.resolve({ Nz: "SAMPLED_AWAY_WRITE" });
          let get_value = first_arg.qba.get(local_44);
          get_value.delete(local_45);
          get_value.size === 0 && first_arg.qba.delete(local_44);
          first_arg.Yib.has(local_44) || first_arg.Yib.set(local_44, new Map());
          first_arg.Yib.get(local_44).set(local_45, now);
        }
    },
    fn_15 = function (first_arg, second_arg, third_arg) {
      var d_wg = new cls_15();
      first_arg = namespace.rh(d_wg, 1, first_arg);
      second_arg = namespace.rh(first_arg, 2, second_arg);
      return namespace.tk(second_arg, 3, third_arg);
    },
    fn_16 = async function (first_arg, second_arg) {
      second_arg = wt_4.getInstance(second_arg);
      return first_arg.Hd.Fc(second_arg);
    },
    fn_17 = function (first_arg, list_50) {
      namespace.Ah(first_arg, cls_17, 4).length !== list_50.length &&
        list_50.forEach((first_arg_2) => {
          first_arg_2.resolve({ Nz: "BACKEND_ERROR" });
        });
      for (let [local_44, local_45] of namespace.Ah(first_arg, cls_17, 4).entries()) {
        first_arg = local_44;
        let local_46 = local_45,
          text_5 = "UNKNOWN",
          num_30 = void 0;
        switch (namespace.Qj(local_46, 1)) {
          case 2:
            text_5 = "MALFORMED_REQUEST";
            break;
          case 3:
            text_5 = "BACKEND_ERROR";
            break;
          case 4:
            text_5 = "INVALID_CREDENTIALS";
            break;
          case 5:
            text_5 = "ALREADY_EXISTS";
            break;
          case 6:
            text_5 = "DENYLISTED_FIELD";
            break;
          case 1:
            ((text_5 = "SUCCESS"), (num_30 = namespace.u(local_46, 2)));
        }
        list_50[first_arg].resolve(num_30 ? { Nz: text_5, MJa: num_30 } : { Nz: text_5 });
      }
    },
    fn_18 = function (first_arg, second_arg) {
      if (first_arg.Wx) {
        var local_44 = first_arg.Wx.SRc ? 1e3 : first_arg.Wx.xtb * 2;
        second_arg === void 0 || first_arg.Wx.QC === second_arg
          ? Object.assign(first_arg.Wx, {
              SRc: !1,
              xtb: local_44,
              QC: (0, namespace.ho)(() => {
                fn_6(first_arg);
              }, local_44)
            })
          : ((first_arg.Wx.SRc = !1), (first_arg.Wx.xtb = local_44));
      }
    },
    cls_19 = class {
      constructor(
        first_arg,
        { samplingFactor: arg, cooldownPeriodMs: arg_2, batchFlushDelayMs: arg_3 }
      ) {
        this.Hd = first_arg;
        this.Yib = new Map();
        this.vHc = this.URc = 0;
        this.qba = new Map();
        this.logger = null;
        this.HGd = void 0;
        this.Eod = 0;
        this.samplingFactor = arg;
        this.cooldownPeriodMs = arg_2;
        this.batchFlushDelayMs = arg_3;
      }
      async KIa(list_50, second_arg = { flush: !1 }) {
        var fn_457 = (0, namespace.eg)(),
          fn_458 = fn_457();
        fn_457 = fn_457(1);
        try {
          if (Array.isArray(list_50))
            return fn_457(
              await fn_458(
                Promise.allSettled(
                  list_50.map((first_arg, second_arg_2) =>
                    this.KIa(first_arg, {
                      ...second_arg,
                      flush: second_arg_2 === list_50.length - 1 && second_arg.flush
                    })
                  )
                )
              )
            ).map((first_arg) =>
              first_arg.status === "fulfilled" ? first_arg.value : { Nz: "BACKEND_ERROR" }
            );
          let instance_id = list_50.instanceId,
            field_name = list_50.fieldName,
            increment = list_50.increment;
          if (increment <= 0) return Promise.resolve({ Nz: "NON_POSITIVE_INTEGER_ERROR" });
          this.URc = Date.now();
          this.Wx &&
            !this.Wx.QC &&
            (this.Wx.QC = (0, namespace.ho)(() => {
              fn_6(this);
            }, 50));
          let { qk: local_44 } = fn_7(this, instance_id, field_name, increment);
          if (second_arg.flush)
            return (
              (0, namespace.Kf)(() => {
                this.flush();
              }),
              local_44.promise
            );
          if (this.wuc !== void 0) return local_44.promise;
          let local_45 = (this.Yib.get(instance_id)?.get(field_name) ?? 0) + this.cooldownPeriodMs,
            local_46 = local_45 > Date.now() ? local_45 - Date.now() : this.batchFlushDelayMs;
          this.wuc = (0, namespace.ho)(() => {
            this.flush();
          }, local_46);
          return local_44.promise;
        } finally {
          fn_458();
        }
      }
      async nfb(list_50) {
        var fn_457 = (0, namespace.eg)(),
          fn_458 = fn_457();
        fn_457 = fn_457(1);
        try {
          if (!Array.isArray(list_50)) return fn_457(await fn_458(this.nfb([list_50])))[0];
          if (this.HGd !== void 0) return Array.from({ length: list_50.length }).fill(this.HGd);
          let lcd = this.LCd(list_50),
            rq = namespace.Rq(wt_2.getInstance(lcd), namespace.Zq),
            local_44 = fn_457(await fn_458(this.Hd.fetch(rq)));
          return namespace.Ah(local_44, cls_6, 4).length !== list_50.length
            ? Array.from({ length: list_50.length }).fill({ Nz: "BACKEND_ERROR" })
            : namespace
                .Ah(local_44, cls_6, 4)
                .map((first_arg, second_arg) => fn_8(this, list_50[second_arg], first_arg));
        } finally {
          fn_458();
        }
      }
      AJd(first_arg, second_arg, fn_457, fourth_arg = !1) {
        this.Wx || (this.Wx = { xtb: 3e3, tAa: new Map() });
        var local_44 = fn_5(first_arg),
          get_value = this.Wx.tAa.get(local_44),
          num_30 = !get_value;
        get_value
          ? (get_value.bqa++, (get_value.eRb = get_value.eRb || fourth_arg))
          : ((get_value = {
              tI: first_arg,
              Zwd: { k2a: second_arg, Et: second_arg, Vhd: second_arg },
              bqa: 1,
              c1b: 0,
              xWc: [],
              eRb: fourth_arg
            }),
            this.Wx.tAa.set(local_44, get_value));
        fn_457 && (get_value.c1b > 0 ? fn_457() : get_value.xWc.push(fn_457));
        num_30 && this.Wx.QC && ((0, namespace.io)(this.Wx.QC), (this.Wx.QC = void 0));
        this.Wx.QC ||
          (this.Wx.QC = (0, namespace.ho)(() => {
            fn_6(this);
          }, 50));
      }
      yqd(first_arg) {
        first_arg = fn_5(first_arg);
        if (!this.Wx) return null;
        first_arg = this.Wx.tAa.get(first_arg);
        if (!first_arg) return null;
        first_arg = first_arg.Zwd;
        if (first_arg.Et === void 0) return null;
        if (this.Wx.dSc === void 0) return first_arg.Et;
        var num_30 = Date.now() - this.Wx.dSc;
        num_30 =
          (first_arg.Vhd ?? first_arg.k2a ?? first_arg.Et) +
          (first_arg.wze ?? 0) * Math.min(num_30, this.Wx.xtb + 1e4);
        if (first_arg.k2a === void 0 || num_30 > first_arg.k2a) first_arg.k2a = num_30;
        return Math.floor(first_arg.k2a);
      }
      yTd(first_arg) {
        if (this.Wx) {
          first_arg = fn_5(first_arg);
          var get_value = this.Wx.tAa.get(first_arg);
          get_value && (get_value.bqa > 1 ? get_value.bqa-- : this.Wx.tAa.delete(first_arg));
          this.Wx.tAa.size === 0 && this.xTd();
        }
      }
      xTd() {
        this.Wx &&
          (this.Wx.QC && ((0, namespace.io)(this.Wx.QC), (this.Wx.QC = void 0)),
          (this.Wx = void 0));
      }
      async Hvb(list_50) {
        var fn_457 = (0, namespace.eg)(),
          fn_458 = fn_457();
        fn_457 = fn_457(1);
        try {
          if (!Array.isArray(list_50)) return fn_457(await fn_458(this.Hvb([list_50])))[0];
          let local_44 = fn_9(list_50),
            rq = namespace.Rq(wt_2.getInstance(local_44), namespace.Zq),
            local_45 = fn_457(await fn_458(this.Hd.fetch(rq)));
          return namespace.Ah(local_45, cls_6, 4).length !== list_50.length
            ? Array.from({ length: list_50.length }).fill({ Nz: "BACKEND_ERROR" })
            : namespace
                .Ah(local_45, cls_6, 4)
                .map((first_arg, second_arg) => fn_10(this, list_50[second_arg], first_arg));
        } finally {
          fn_458();
        }
      }
      async D8b(list_50) {
        var fn_457 = (0, namespace.eg)(),
          fn_458 = fn_457();
        fn_457 = fn_457(1);
        try {
          if (!Array.isArray(list_50)) return fn_457(await fn_458(this.D8b([list_50])))[0];
          let local_44 = fn_11(list_50),
            instance = wt.getInstance(local_44),
            local_45 = fn_457(await fn_458(this.Hd.Fc(instance)));
          if (namespace.Ah(local_45, cls_3, 2).length !== list_50.length)
            throw Error("Jp`" + list_50.length);
          return namespace.Ah(local_45, cls_3, 2).map(this.pGe);
        } finally {
          fn_458();
        }
      }
      async tPb(list_50) {
        var fn_457 = (0, namespace.eg)(),
          fn_458 = fn_457();
        fn_457 = fn_457(1);
        try {
          if (!Array.isArray(list_50)) return fn_457(await fn_458(this.tPb([list_50])))[0];
          let local_44 = fn_12(list_50),
            rq = namespace.Rq(wt_3.getInstance(local_44), namespace.Zq),
            local_45 = fn_457(await fn_458(this.Hd.fetch(rq)));
          return namespace.Ah(local_45, cls_12, 1).length !== list_50.length
            ? Array.from({ length: list_50.length }).fill({ Nz: "BACKEND_ERROR" })
            : namespace
                .Ah(local_45, cls_12, 1)
                .map((first_arg, second_arg) => fn_13(this, list_50[second_arg], first_arg));
        } finally {
          fn_458();
        }
      }
      flush() {
        this.wuc !== void 0 && ((0, namespace.io)(this.wuc), (this.wuc = void 0));
        if (Math.random() > 1 / this.samplingFactor) fn_14(this);
        else {
          var e_wg = new cls_16(),
            list_50 = [],
            now = Date.now();
          for (let local_44 of this.qba.keys())
            for (let local_45 of this.qba.get(local_44).keys()) {
              for (let local_46 of this.qba.get(local_44).get(local_45)) {
                var increment = local_46.increment;
                list_50.push(local_46.qk);
                increment = fn_15(local_44, local_45, increment * this.samplingFactor);
                namespace.Kh(e_wg, 5, cls_15, increment);
              }
              increment = this.qba.get(local_44);
              increment.delete(local_45);
              increment.size === 0 && this.qba.delete(local_44);
              this.Yib.has(local_44) || this.Yib.set(local_44, new Map());
              this.Yib.get(local_44).set(local_45, now);
            }
          list_50.length !== 0 &&
            fn_16(this, e_wg)
              .then((first_arg) => {
                fn_17(first_arg, list_50);
              })
              .catch((first_arg) => {
                list_50.forEach((first_arg_2) => {
                  first_arg_2.reject(first_arg);
                });
              });
        }
      }
      LCd(list_50) {
        return fn_2(
          new cls_5(),
          list_50.map((first_arg) => {
            var pvg = new cls_4();
            pvg = namespace.rh(pvg, 1, first_arg.instanceId);
            return namespace.rh(pvg, 2, first_arg.fieldName);
          })
        );
      }
      pGe(first_arg) {
        switch (namespace.Qj(first_arg, 1)) {
          case 2:
            return { Nz: "BACKEND_ERROR" };
          case 3:
            return { Nz: "MALFORMED_REQUEST" };
          case 4:
            return { Nz: "INVALID_CREDENTIALS" };
          case 1:
            return { Nz: "SUCCESS" };
          default:
            return { Nz: "UNKNOWN" };
        }
      }
    };
  namespace.FWg = class extends namespace.so {
    static Sa() {
      return { service: { Le: namespace.Jr } };
    }
    constructor(first_arg) {
      super();
      this.logger = null;
      this.oa = new Map();
      this.Hd = first_arg.service.Le;
      var fn_457 = () => {
        for (let local_44 of this.oa.values()) local_44.flush();
      };
      namespace.De(window, "pagehide", fn_457);
      namespace.De(document, "visibilitychange", () => {
        document.visibilityState === "hidden" && fn_457();
      });
    }
    ka(first_arg) {
      var local_44 = first_arg
        ? JSON.stringify(first_arg, Object.keys(first_arg).sort())
        : "DEFAULT_COUNTER_CLIENT_KEY";
      if (this.oa.has(local_44)) return this.oa.get(local_44);
      first_arg = fn_4(this.Hd, first_arg);
      this.oa.set(local_44, first_arg);
      return first_arg;
    }
  };
  namespace.rg(namespace.KVg, namespace.FWg);
  namespace.w();
  namespace.tPb = class {
    constructor(first_arg) {
      this.Co = first_arg;
    }
  };
  namespace.v("aLUfP");
  var fn_19;
  namespace.uPb = !1;
  fn_19 = function () {
    return namespace.pa() && namespace.Ja.EB() && !navigator.userAgent.includes("GSA");
  };
  namespace.rg(
    namespace.N0a,
    class extends namespace.so {
      static Sa() {
        return { service: { window: namespace.qo } };
      }
      constructor(first_arg) {
        super();
        this.window = first_arg.service.window.get();
        this.wa = this.Co();
        this.oa = window.orientation;
        this.ka = () => {
          var co = this.Co(),
            local_44 =
              this.l1b() &&
              Math.abs(window.orientation) === 90 &&
              this.oa === -1 * window.orientation;
          this.oa = window.orientation;
          if (co !== this.wa || local_44) {
            this.wa = co;
            for (let fn_457 of this.Gf) {
              local_44 = new namespace.tPb(co);
              try {
                fn_457(local_44);
              } catch (error) {
                namespace.fa(error);
              }
            }
          }
        };
        this.Gf = new Set();
        this.window.addEventListener("resize", this.ka);
        this.l1b() && this.window.addEventListener("orientationchange", this.ka);
      }
      addListener(first_arg) {
        this.Gf.add(first_arg);
      }
      removeListener(first_arg) {
        this.Gf.delete(first_arg);
      }
      Co() {
        if (fn_19()) {
          var pi = namespace.pi(this.window);
          pi = new namespace.ee(
            pi.width,
            Math.round((pi.width * this.window.innerHeight) / this.window.innerWidth)
          );
        } else
          pi =
            this.Tc() || (namespace.pa() ? fn_19() : this.window.visualViewport)
              ? namespace.pi(this.window)
              : new namespace.ee(this.window.innerWidth, this.window.innerHeight);
        return pi.height < pi.width;
      }
      destroy() {
        this.window.removeEventListener("resize", this.ka);
        this.window.removeEventListener("orientationchange", this.ka);
      }
      Tc() {
        return namespace.uPb;
      }
      l1b() {
        return "orientation" in window;
      }
    }
  );
  namespace.uPb = !0;
  namespace.w();
  namespace.v("wQlYve");
  namespace.Ru = new namespace.mg(namespace.ar);
  namespace.w();
  namespace.DfF = function (first_arg, second_arg) {
    namespace.Qi(first_arg, second_arg, namespace.Pua());
  };
  var local;
  local = function (first_arg, second_arg) {
    this.blockSize = -1;
    this.blockSize = 64;
    this.wa = namespace.ea.Uint8Array ? new Uint8Array(this.blockSize) : Array(this.blockSize);
    this.Aa = this.oa = 0;
    this.ka = [];
    this.Ca = first_arg;
    this.Ba = second_arg;
    this.Ga = namespace.ea.Int32Array ? new Int32Array(64) : Array(64);
    local_2 === void 0 &&
      (namespace.ea.Int32Array ? (local_2 = new Int32Array(list_4)) : (local_2 = list_4));
    this.reset();
  };
  namespace.Mir = function () {
    local.call(this, 8, list_5);
  };
  namespace.Xi(local, namespace.ocr);
  var list_3 = [].concat(128, namespace.cba(0, 63));
  local.prototype.reset = function () {
    this.Aa = this.oa = 0;
    this.ka = namespace.ea.Int32Array ? new Int32Array(this.Ba) : namespace.Aa(this.Ba);
  };
  var fn_20 = function (first_arg) {
    for (var wa_2 = first_arg.wa, ga = first_arg.Ga, index = 0, num_30 = 0; num_30 < wa_2.length;)
      ((ga[index++] =
        (wa_2[num_30] << 24) |
        (wa_2[num_30 + 1] << 16) |
        (wa_2[num_30 + 2] << 8) |
        wa_2[num_30 + 3]),
        (num_30 = index * 4));
    for (wa_2 = 16; wa_2 < 64; wa_2++)
      ((index = ga[wa_2 - 15] | 0),
        (num_30 = ga[wa_2 - 2] | 0),
        (ga[wa_2] =
          ((((ga[wa_2 - 16] | 0) +
            (((index >>> 7) | (index << 25)) ^ ((index >>> 18) | (index << 14)) ^ (index >>> 3))) |
            0) +
            (((ga[wa_2 - 7] | 0) +
              (((num_30 >>> 17) | (num_30 << 15)) ^
                ((num_30 >>> 19) | (num_30 << 13)) ^
                (num_30 >>> 10))) |
              0)) |
          0));
    wa_2 = first_arg.ka[0] | 0;
    index = first_arg.ka[1] | 0;
    num_30 = first_arg.ka[2] | 0;
    var num_31 = first_arg.ka[3] | 0,
      num_32 = first_arg.ka[4] | 0,
      num_33 = first_arg.ka[5] | 0,
      num_34 = first_arg.ka[6] | 0,
      num_35 = first_arg.ka[7] | 0;
    for (let index_2 = 0; index_2 < 64; index_2++) {
      let num_36 =
          ((((wa_2 >>> 2) | (wa_2 << 30)) ^
            ((wa_2 >>> 13) | (wa_2 << 19)) ^
            ((wa_2 >>> 22) | (wa_2 << 10))) +
            ((wa_2 & index) ^ (wa_2 & num_30) ^ (index & num_30))) |
          0,
        num_37 =
          (((num_35 +
            (((num_32 >>> 6) | (num_32 << 26)) ^
              ((num_32 >>> 11) | (num_32 << 21)) ^
              ((num_32 >>> 25) | (num_32 << 7)))) |
            0) +
            ((((((num_32 & num_33) ^ (~num_32 & num_34)) + (local_2[index_2] | 0)) | 0) +
              (ga[index_2] | 0)) |
              0)) |
          0;
      num_35 = num_34;
      num_34 = num_33;
      num_33 = num_32;
      num_32 = (num_31 + num_37) | 0;
      num_31 = num_30;
      num_30 = index;
      index = wa_2;
      wa_2 = (num_37 + num_36) | 0;
    }
    first_arg.ka[0] = (first_arg.ka[0] + wa_2) | 0;
    first_arg.ka[1] = (first_arg.ka[1] + index) | 0;
    first_arg.ka[2] = (first_arg.ka[2] + num_30) | 0;
    first_arg.ka[3] = (first_arg.ka[3] + num_31) | 0;
    first_arg.ka[4] = (first_arg.ka[4] + num_32) | 0;
    first_arg.ka[5] = (first_arg.ka[5] + num_33) | 0;
    first_arg.ka[6] = (first_arg.ka[6] + num_34) | 0;
    first_arg.ka[7] = (first_arg.ka[7] + num_35) | 0;
  };
  local.prototype.update = function (text_5, second_arg) {
    second_arg === void 0 && (second_arg = text_5.length);
    var index = 0,
      oa = this.oa;
    if (typeof text_5 === "string")
      for (; index < second_arg;)
        ((this.wa[oa++] = text_5.charCodeAt(index++)),
          oa == this.blockSize && (fn_20(this), (oa = 0)));
    else if (namespace.Ba(text_5))
      for (; index < second_arg;) {
        let local_44 = text_5[index++];
        if (!(
          "number" == typeof local_44 &&
          0 <= local_44 &&
          255 >= local_44 &&
          local_44 == (local_44 | 0)
        ))
          throw Error("Xv");
        this.wa[oa++] = local_44;
        oa == this.blockSize && (fn_20(this), (oa = 0));
      }
    else throw Error("Yv");
    this.oa = oa;
    this.Aa += second_arg;
  };
  local.prototype.digest = function () {
    var list_50 = [],
      num_30 = this.Aa * 8;
    this.oa < 56
      ? this.update(list_3, 56 - this.oa)
      : this.update(list_3, this.blockSize - (this.oa - 56));
    for (var index = 63; index >= 56; index--) ((this.wa[index] = num_30 & 255), (num_30 /= 256));
    fn_20(this);
    num_30 = 0;
    for (index = 0; index < this.Ca; index++)
      for (let num_31 = 24; num_31 >= 0; num_31 -= 8)
        list_50[num_30++] = (this.ka[index] >> num_31) & 255;
    return list_50;
  };
  var list_4 = [
      1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221,
      3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580,
      3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
      2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
      666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
      2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
      430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
      1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
    ],
    local_2;
  namespace.Xi(namespace.Mir, local);
  var list_5 = [
    1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225
  ];
  var fn_21, fn_22;
  fn_21 = function () {
    var date = new Date();
    date.setUTCHours(date.getUTCHours() + -5);
    return date;
  };
  namespace.vfF = function (first_arg = 0) {
    var local_44 = fn_21();
    first_arg > 0 && local_44.setUTCDate(local_44.getUTCDate() - first_arg);
    return local_44.toISOString().split("T")[0];
  };
  fn_22 = function (first_arg, second_arg, third_arg, fourth_arg) {
    return () => {
      first_arg |= 0;
      second_arg |= 0;
      third_arg |= 0;
      fourth_arg |= 0;
      var num_30 = (((first_arg + second_arg) | 0) + fourth_arg) | 0;
      fourth_arg = (fourth_arg + 1) | 0;
      first_arg = second_arg ^ (second_arg >>> 9);
      second_arg = (third_arg + (third_arg << 3)) | 0;
      third_arg = (third_arg << 21) | (third_arg >>> 11);
      third_arg = (third_arg + num_30) | 0;
      return (num_30 >>> 0) / 4294967296;
    };
  };
  namespace.xfF = function (list_50) {
    var mir = new namespace.Mir();
    mir.update(list_50, list_50.length);
    list_50 = new Uint8Array(mir.digest()).buffer;
    var data_view = new DataView(list_50);
    list_50 = data_view.getUint32(0);
    mir = data_view.getUint32(4);
    var uint32 = data_view.getUint32(8);
    data_view = data_view.getUint32(12);
    return fn_22(list_50, mir, uint32, data_view);
  };
  namespace.yfF = function () {
    return Math.min(2, window?.devicePixelRatio ?? 1);
  };
  namespace.zfF = function () {
    var local_44 = fn_21(),
      num_30 = (60 - local_44.getUTCSeconds()) % 60,
      num_31 = (60 - local_44.getUTCMinutes() - (num_30 > 0 ? 1 : 0)) % 60;
    return `${(24 - local_44.getUTCHours() - (num_31 > 0 ? 1 : 0)).toString().padStart(2, "0")}:${num_31.toString().padStart(2, "0")}:${num_30.toString().padStart(2, "0")}`;
  };
  namespace.AfF = function () {
    var zf_f = namespace.zfF();
    return new namespace.rB("Time remaining: {TIMEREMAINING}").format({ TIMEREMAINING: zf_f });
  };
  namespace.BfF = function () {
    for (
      var local_44 = window;
      local_44.postMessage("lightbox-exit", "*"), local_44 !== local_44.parent;
    )
      local_44 = local_44.parent;
  };
  namespace.CfF = function (list_50, fn_457) {
    var list_51 = [];
    list_50.forEach((first_arg) => {
      list_51.push(
        new Promise((fn_458) => {
          first_arg.complete
            ? fn_458()
            : namespace.Dn(first_arg, "load", () => {
                fn_458();
              });
        })
      );
    });
    Promise.all(list_51).then(() => {
      fn_457();
    });
  };
  var fn_23 = function (first_arg) {
      if (!first_arg.ka) {
        first_arg.ka = !0;
        for (let fn_457 of first_arg.Aa) fn_457();
      }
    },
    cls_20 = class {
      constructor(first_arg) {
        this.src = first_arg;
        this.ka = !1;
        this.Aa = [];
      }
      T6c() {
        this.Aa = [];
      }
      isLoaded() {
        return this.ka;
      }
    };
  var local_3, local_4, fn_24, fn_25, local_5, fn_26, fn_27, fn_28;
  local_3 = namespace.ma();
  local_4 = local_3.includes("iPad") || local_3.includes("iPhone") || local_3.includes("iPod");
  fn_24 = function (first_arg) {
    first_arg.ka && !first_arg.Aa && ((first_arg.wa !== null && first_arg.Aa) || fn_25(first_arg));
  };
  fn_25 = function (first_arg) {
    first_arg.Aa ||
      ((first_arg.wa = first_arg.ka.createBufferSource()),
      (first_arg.wa.buffer = first_arg.ka.createBuffer(1, 1, 22050)),
      first_arg.wa.connect(first_arg.ka.destination),
      namespace.Dn(first_arg.wa, "ended", () => {
        first_arg.Aa = !0;
      }),
      first_arg.wa.start(0));
  };
  namespace.mfF = function (first_arg) {
    first_arg.oa && (first_arg.oa.gain.value = 0);
  };
  namespace.nfF = function (first_arg) {
    first_arg.oa && (first_arg.oa.gain.value = 1);
  };
  namespace.pfF = class {
    constructor(first_arg, second_arg) {
      this.Ba = first_arg;
      this.Fca = second_arg;
      this.wa = this.oa = this.ka = null;
      this.Aa = !1;
    }
    init(first_arg) {
      if (!local_5) return !1;
      if (this.ka) return !0;
      this.ka = new (namespace.ea.AudioContext || namespace.ea.webkitAudioContext)();
      this.oa = this.ka.createGain();
      this.oa.connect(this.ka.destination);
      for (let local_44 of Object.values(this.Ba)) local_44.init(this.ka);
      for (let local_44 of Object.values(this.Fca)) local_44.init(this.ka, this.oa);
      local_4 &&
        (fn_24(this),
        namespace.Dn(first_arg, "touchend", () => {
          fn_24(this);
        }));
      return !0;
    }
    isInitialized() {
      return !!this.ka;
    }
    getContext() {
      return this.ka;
    }
    destroy() {
      this.ka.close();
      this.ka = null;
    }
    reset() {
      for (let local_44 of Object.values(this.Ba)) local_44.T6c();
      for (let local_44 of Object.values(this.Fca)) local_44.stop();
    }
  };
  local_5 =
    !(!namespace.ea.AudioContext && !namespace.ea.webkitAudioContext) && !!namespace.ea.GainNode;
  fn_26 = function (first_arg) {
    if (first_arg.oa) {
      var num_30 = first_arg.oa.currentTime * 1e3;
      for (let local_44 of Object.keys(first_arg.wa)) {
        let local_45 = first_arg.wa[local_44];
        !local_45.mTc &&
          local_45.playTime + first_arg.duration < num_30 &&
          delete first_arg.wa[local_44];
      }
    }
  };
  namespace.Z6 = class {
    constructor(first_arg, second_arg, third_arg) {
      this.ka = first_arg;
      this.name = second_arg;
      this.duration = third_arg;
      this.wa = {};
      this.Aa = this.oa = this.Ba = null;
      this.Ca = 0;
    }
    init(first_arg, second_arg) {
      this.oa = first_arg;
      this.Aa = second_arg;
      this.oa.createGain && (this.Ba = this.oa.createGain());
    }
    play(first_arg = 0, second_arg = !1) {
      if (!this.oa || !this.Aa) return -1;
      fn_26(this);
      first_arg = this.oa.currentTime + first_arg / 1e3;
      var buffer_source = this.oa.createBufferSource();
      this.Ba
        ? (buffer_source.connect(this.Ba), this.Ba.connect(this.Aa))
        : buffer_source.connect(this.Aa);
      buffer_source.loop = second_arg;
      try {
        buffer_source.buffer = this.ka.buffers[this.name];
      } catch (error) {
        return -1;
      }
      buffer_source.playbackRate.value = 1;
      buffer_source.start(first_arg, 0);
      var local_44 = this.Ca++;
      this.wa[String(local_44)] = {
        node: buffer_source,
        playTime: first_arg * 1e3,
        mTc: second_arg
      };
      return local_44;
    }
    stop(first_arg) {
      fn_26(this);
      if (first_arg !== void 0) {
        if (this.wa[first_arg]) {
          try {
            this.wa[first_arg].node.stop(0);
          } catch (error) {}
          delete this.wa[first_arg];
        }
      } else for (let local_44 of Object.keys(this.wa)) this.stop(local_44);
    }
  };
  fn_27 = function (first_arg, second_arg) {
    second_arg = second_arg.getResponse();
    var local_44 = fn_28(first_arg, new Uint8Array(second_arg)),
      keys = Object.keys(local_44);
    first_arg.status = 2;
    var fn_457 = (first_arg_2, second_arg_2) => {
      second_arg_2 && first_arg_2 && (first_arg.buffers[first_arg_2] = second_arg_2);
      keys.length === 0
        ? ((first_arg.status = 3), fn_23(first_arg))
        : ((first_arg_2 = keys.shift()),
          first_arg.oa.decodeAudioData(local_44[first_arg_2], (first_arg_3) => {
            fn_457(first_arg_2, first_arg_3);
          }));
    };
    fn_457(null, null);
  };
  fn_28 = function (first_arg, second_arg) {
    var obj_21 = {},
      obj_22 = {},
      obj_23 = {},
      num_30 = 0,
      num_31 = !1;
    second_arg[0] === 0 && (num_31 = !0);
    Object.entries(first_arg.index).forEach(([arg, arg_2]) => {
      obj_22[arg] = [];
      obj_23[arg] = [];
      var local_46 = second_arg[arg_2];
      num_31 && (local_46 |= second_arg[++arg_2] << 8);
      num_30 += local_46;
      for (var index = 0; index < local_46; index++)
        num_31
          ? (obj_22[arg].push(second_arg[arg_2 + 1] | (second_arg[arg_2 + 2] << 8)), (arg_2 += 2))
          : obj_22[arg].push(second_arg[++arg_2]);
      for (index = 0; index < local_46; index++)
        num_31
          ? (obj_23[arg].push(second_arg[arg_2 + 1] | (second_arg[arg_2 + 2] << 8)), (arg_2 += 2))
          : obj_23[arg].push(second_arg[++arg_2]);
    });
    var local_44 = num_30 * 2 + Object.keys(first_arg.index).length;
    num_31 && ((local_44 *= 2), (local_44 += 2));
    var local_45 = second_arg[local_44];
    ++local_44;
    num_31 && ((local_45 |= second_arg[local_44] << 8), ++local_44);
    Object.entries(first_arg.index).forEach(([arg]) => {
      var num_32 = 0;
      namespace.Ha(
        obj_22[arg],
        (first_arg_2) => {
          num_32 += first_arg.wa - (second_arg[local_44 + first_arg_2 * 32 + 2] & 2 ? 0 : 1);
        },
        first_arg
      );
      obj_21[arg] = new ArrayBuffer(num_32);
      var uint8_array = new Uint8Array(obj_21[arg]),
        num_33 = 0;
      for (let index = 0; index < obj_22[arg].length; index++) {
        let local_46 = local_44 + obj_22[arg][index] * 32,
          num_34 = first_arg.wa - (second_arg[local_46 + 2] & 2 ? 0 : 1),
          local_47 = local_44 + local_45 * 32 + obj_23[arg][index] * (first_arg.wa - 32);
        uint8_array.set(second_arg.subarray(local_46, local_46 + 32), num_33);
        num_33 += 32;
        uint8_array.set(second_arg.subarray(local_47, local_47 + num_34 - 32), num_33);
        num_33 += num_34 - 32;
      }
    });
    return obj_21;
  };
  namespace.tfF = class extends cls_20 {
    constructor(first_arg, second_arg, third_arg, fourth_arg = 314) {
      super("https://www.google.com" + first_arg + second_arg + ".bin");
      this.index = third_arg;
      this.wa = fourth_arg;
      this.oa = null;
      this.buffers = {};
      this.status = 0;
    }
    getStatus() {
      return this.status;
    }
    init(first_arg) {
      this.oa = first_arg;
    }
    preload(first_arg = !1) {
      if ((this.status === 0 || first_arg) && this.oa) {
        var dr = new namespace.Dr();
        dr.setResponseType("arraybuffer");
        dr.listen("complete", () => {
          fn_27(this, dr);
        });
        dr.send(this.src);
        this.status = 1;
      }
    }
  };
  namespace.UHs = namespace.x("pKhWu", [namespace.KVg, namespace.ar]);
  namespace.BYg = namespace.x("QKZgZd", []);
  namespace.E0g = namespace.x("Wct42", [namespace.yr, namespace.BYg]);
  var fn_29;
  fn_29 = function (first_arg) {
    var local_44 = local_44 || 0;
    return function () {
      return first_arg.apply(this, Array.prototype.slice.call(arguments, 0, local_44));
    };
  };
  namespace.KWg = function (first_arg, second_arg, third_arg) {
    namespace.Kd.call(this);
    this.wp = null;
    this.wa = !1;
    this.TX = first_arg;
    this.Aa = third_arg;
    this.ka = second_arg || window;
    this.oa = () => fn_30(this);
  };
  namespace.Xi(namespace.KWg, namespace.Kd);
  namespace.KWg.prototype.start = function () {
    this.stop();
    this.wa = !1;
    var local_44 = fn_31(this),
      local_45 = fn_32(this);
    local_44 && !local_45 && this.ka.mozRequestAnimationFrame
      ? ((this.wp = namespace.De(this.ka, "MozBeforePaint", this.oa)),
        this.ka.mozRequestAnimationFrame(null),
        (this.wa = !0))
      : (this.wp =
          local_44 && local_45
            ? local_44.call(this.ka, this.oa)
            : this.ka.setTimeout(fn_29(this.oa), 20));
  };
  namespace.KWg.prototype.stop = function () {
    if (this.isActive()) {
      let local_44 = fn_31(this),
        local_45 = fn_32(this);
      local_44 && !local_45 && this.ka.mozRequestAnimationFrame
        ? namespace.Fn(this.wp)
        : local_44 && local_45
          ? local_45.call(this.ka, this.wp)
          : this.ka.clearTimeout(this.wp);
    }
    this.wp = null;
  };
  namespace.KWg.prototype.fire = function () {
    this.stop();
    fn_30(this);
  };
  namespace.KWg.prototype.isActive = function () {
    return this.wp != null;
  };
  var fn_30 = function (first_arg) {
    first_arg.wa && first_arg.wp && namespace.Fn(first_arg.wp);
    first_arg.wp = null;
    first_arg.TX.call(first_arg.Aa, namespace.gd());
  };
  namespace.KWg.prototype.Jc = function () {
    this.stop();
    namespace.KWg.Qf.Jc.call(this);
  };
  var fn_31 = function (first_arg) {
      first_arg = first_arg.ka;
      return (
        first_arg.requestAnimationFrame ||
        first_arg.webkitRequestAnimationFrame ||
        first_arg.mozRequestAnimationFrame ||
        first_arg.oRequestAnimationFrame ||
        first_arg.msRequestAnimationFrame ||
        null
      );
    },
    fn_32 = function (first_arg) {
      first_arg = first_arg.ka;
      return (
        first_arg.cancelAnimationFrame ||
        first_arg.cancelRequestAnimationFrame ||
        first_arg.webkitCancelRequestAnimationFrame ||
        first_arg.mozCancelRequestAnimationFrame ||
        first_arg.oCancelRequestAnimationFrame ||
        first_arg.msCancelRequestAnimationFrame ||
        null
      );
    };
  var fn_33, fn_34, local_6, local_7, local_8;
  fn_33 = function () {
    local_8 ||
      (local_7
        ? (local_8 = new namespace.KWg(function (first_arg) {
            fn_34(first_arg);
          }, local_7))
        : (local_8 = new namespace.Nr(function () {
            fn_34(namespace.gd());
          }, 20)));
    local_8.isActive() || local_8.start();
  };
  fn_34 = function (first_arg) {
    namespace.Bc(local_6, function (first_arg_2) {
      first_arg_2.Iy(first_arg);
    });
    namespace.Hc(local_6) || fn_33();
  };
  namespace.SWg = function (first_arg) {
    return Math.sqrt(first_arg.x * first_arg.x + first_arg.y * first_arg.y);
  };
  namespace.TWg = function (first_arg, second_arg) {
    return new namespace.de(first_arg.x + second_arg.x, first_arg.y + second_arg.y);
  };
  namespace.iR = { Lcf: function () {} };
  local_6 = {};
  local_7 = null;
  local_8 = null;
  namespace.iR.Acg = fn_34;
  namespace.iR.g$f = local_6;
  namespace.iR.c1a = null;
  Object.defineProperty(namespace.iR, "animationDelay_", {
    get: () => local_8,
    set: (first_arg) => {
      local_8 = first_arg;
    }
  });
  namespace.iR.registerAnimation = function (first_arg) {
    var xf_2 = namespace.xf(first_arg);
    xf_2 in local_6 || (local_6[xf_2] = first_arg);
    fn_33();
  };
  namespace.iR.Bog = function (first_arg) {
    var local_44 = local_8 && local_8.isActive();
    namespace.Id(local_8);
    local_8 = null;
    local_7 = first_arg;
    local_44 && fn_33();
  };
  namespace.iR.d$a = function () {
    local_7 = null;
    namespace.Id(local_8);
    local_8 = null;
    namespace.Ija(local_6);
  };
  namespace.iR.TIMEOUT = 20;
  namespace.iR.wN = function (first_arg) {
    first_arg = namespace.xf(first_arg);
    delete local_6[first_arg];
    namespace.Hc(local_6) && local_8 && local_8.stop();
  };
  var fn_35, fn_36;
  namespace.bHe = function (first_arg) {
    var local_44 = fn_35(first_arg);
    if (!local_44) throw Error("nk`" + first_arg);
    return local_44;
  };
  fn_35 = function (text_5) {
    var obj_21 = {};
    text_5 = String(text_5);
    var c_he = namespace.cHe(text_5);
    if (namespace.dHe.test(c_he))
      return ((obj_21.Haa = namespace.eHe(c_he)), (obj_21.type = "hex"), obj_21);
    c_he = namespace.fHe(text_5);
    return c_he.length
      ? ((obj_21.Haa = namespace.FJ(c_he)), (obj_21.type = "rgb"), obj_21)
      : namespace.gHe && (text_5 = namespace.gHe[text_5.toLowerCase()])
        ? ((obj_21.Haa = text_5), (obj_21.type = "named"), obj_21)
        : null;
  };
  namespace.hHe = function (first_arg) {
    var f_he = namespace.fHe(first_arg);
    if (!f_he.length) throw Error("ok`" + first_arg);
    return f_he;
  };
  namespace.eHe = function (text_5) {
    if (!namespace.dHe.test(text_5)) throw Error("pk`" + text_5);
    text_5.length == 4 && (text_5 = text_5.replace(local_9, "#$1$1$2$2$3$3"));
    return text_5.toLowerCase();
  };
  namespace.GJ = function (list_50) {
    list_50 = namespace.eHe(list_50);
    list_50 = parseInt(list_50.slice(1), 16);
    return [list_50 >> 16, (list_50 >> 8) & 255, list_50 & 255];
  };
  namespace.jHe = function (first_arg, second_arg, third_arg) {
    first_arg = Number(first_arg);
    second_arg = Number(second_arg);
    third_arg = Number(third_arg);
    if (
      first_arg != (first_arg & 255) ||
      second_arg != (second_arg & 255) ||
      third_arg != (third_arg & 255)
    )
      throw Error("qk`" + first_arg + "`" + second_arg + "`" + third_arg);
    second_arg = (first_arg << 16) | (second_arg << 8) | third_arg;
    return first_arg < 16
      ? "#" + (16777216 | second_arg).toString(16).slice(1)
      : "#" + second_arg.toString(16);
  };
  namespace.FJ = function (first_arg) {
    return namespace.jHe(first_arg[0], first_arg[1], first_arg[2]);
  };
  namespace.kHe = function (first_arg, second_arg, third_arg) {
    first_arg /= 255;
    second_arg /= 255;
    third_arg /= 255;
    var num_30 = Math.max(first_arg, second_arg, third_arg),
      num_31 = Math.min(first_arg, second_arg, third_arg),
      num_32 = 0,
      num_33 = 0,
      num_34 = 0.5 * (num_30 + num_31);
    num_30 != num_31 &&
      (num_30 == first_arg
        ? (num_32 = (60 * (second_arg - third_arg)) / (num_30 - num_31))
        : num_30 == second_arg
          ? (num_32 = (60 * (third_arg - first_arg)) / (num_30 - num_31) + 120)
          : num_30 == third_arg &&
            (num_32 = (60 * (first_arg - second_arg)) / (num_30 - num_31) + 240),
      (num_33 =
        0 < num_34 && num_34 <= 0.5
          ? (num_30 - num_31) / (2 * num_34)
          : (num_30 - num_31) / (2 - 2 * num_34)));
    return [Math.round(num_32 + 360) % 360, num_33, num_34];
  };
  fn_36 = function (first_arg, second_arg, third_arg) {
    third_arg < 0 ? (third_arg += 1) : third_arg > 1 && --third_arg;
    return 6 * third_arg < 1
      ? first_arg + (second_arg - first_arg) * 6 * third_arg
      : 2 * third_arg < 1
        ? second_arg
        : 3 * third_arg < 2
          ? first_arg + (second_arg - first_arg) * (2 / 3 - third_arg) * 6
          : first_arg;
  };
  namespace.mHe = function (first_arg, second_arg, third_arg) {
    first_arg /= 360;
    if (second_arg == 0) third_arg = second_arg = first_arg = third_arg * 255;
    else {
      let local_44, local_45;
      local_45 =
        third_arg < 0.5
          ? third_arg * (1 + second_arg)
          : third_arg + second_arg - second_arg * third_arg;
      local_44 = 2 * third_arg - local_45;
      third_arg = 255 * fn_36(local_44, local_45, first_arg + 1 / 3);
      second_arg = 255 * fn_36(local_44, local_45, first_arg);
      first_arg = 255 * fn_36(local_44, local_45, first_arg - 1 / 3);
    }
    return [Math.round(third_arg), Math.round(second_arg), Math.round(first_arg)];
  };
  namespace.fHe = function (text_5) {
    var match = text_5.match(local_10);
    if (match) {
      text_5 = Number(match[1]);
      let local_44 = Number(match[2]);
      match = Number(match[3]);
      if (
        text_5 >= 0 &&
        text_5 <= 255 &&
        local_44 >= 0 &&
        local_44 <= 255 &&
        match >= 0 &&
        match <= 255
      )
        return [text_5, local_44, match];
    }
    return [];
  };
  namespace.cHe = function (text_5) {
    return text_5.charAt(0) == "#" ? text_5 : "#" + text_5;
  };
  namespace.HJ = function (first_arg) {
    first_arg = namespace.GJ(first_arg);
    return namespace.kHe(first_arg[0], first_arg[1], first_arg[2]);
  };
  namespace.IJ = function (first_arg, second_arg, third_arg) {
    third_arg = namespace.Yd(third_arg, 0, 1);
    return [
      Math.round(second_arg[0] + third_arg * (first_arg[0] - second_arg[0])),
      Math.round(second_arg[1] + third_arg * (first_arg[1] - second_arg[1])),
      Math.round(second_arg[2] + third_arg * (first_arg[2] - second_arg[2]))
    ];
  };
  namespace.oHe = function (first_arg, second_arg) {
    return namespace.IJ([0, 0, 0], first_arg, second_arg);
  };
  namespace.pHe = function (first_arg, second_arg) {
    return namespace.IJ([255, 255, 255], first_arg, second_arg);
  };
  namespace.gHe = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  var local_9, local_10;
  local_9 = /#(.)(.)(.)/;
  namespace.dHe = /^#(?:[0-9a-f]{3}){1,2}$/i;
  local_10 = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
  namespace.v("pKhWu");
  var fn_37 = function (text_5) {
      return !!(
        namespace.dHe.test(namespace.cHe(text_5)) ||
        namespace.fHe(text_5).length ||
        (namespace.gHe && namespace.gHe[text_5.toLowerCase()])
      );
    },
    fn_38 = function (first_arg) {
      return namespace.FJ(namespace.mHe(first_arg[0], first_arg[1], first_arg[2]));
    },
    fn_39 = function (first_arg, second_arg, third_arg) {
      first_arg.x <= 0
        ? (third_arg.left = !0)
        : first_arg.x >= second_arg.width - 1 && (third_arg.right = !0);
      first_arg.y <= 0
        ? (third_arg.top = !0)
        : first_arg.y >= second_arg.height - 1 && (third_arg.bottom = !0);
    },
    fn_40 = function (first_arg, second_arg, third_arg) {
      var num_30 = second_arg.x % 1 === 0,
        num_31 = second_arg.y % 1 === 0,
        local_44 =
          first_arg.x === Math.floor(second_arg.x) || first_arg.x === Math.ceil(second_arg.x),
        num_32 = Math.abs(first_arg.x - second_arg.x) <= 1,
        num_33 = Math.abs(first_arg.y - second_arg.y) <= 1,
        local_45 = num_32 && first_arg.x < second_arg.x;
      num_32 = num_32 && first_arg.x > second_arg.x;
      var local_46 = num_33 && first_arg.y < second_arg.y;
      num_33 = num_33 && first_arg.y > second_arg.y;
      if (first_arg.y === Math.floor(second_arg.y) || first_arg.y === Math.ceil(second_arg.y))
        local_45 ? (third_arg.left = !0) : num_32 && (third_arg.right = !0);
      local_44 && (local_46 ? (third_arg.top = !0) : num_33 && (third_arg.bottom = !0));
      num_30 &&
        num_31 &&
        (local_45 && local_46
          ? (third_arg.topLeft = !0)
          : num_32 && local_46
            ? (third_arg.topRight = !0)
            : num_32 && num_33
              ? (third_arg.bottomRight = !0)
              : local_45 && num_33 && (third_arg.bottomLeft = !0));
    },
    fn_41 = function (first_arg, second_arg, third_arg) {
      for (let index = 0; index < 2; index++) {
        let num_30 = index === 0,
          num_31 = first_arg.Ce.x < 0,
          num_32 = first_arg.Ce.x > 0,
          num_33 = first_arg.Ce.y < 0,
          num_34 = first_arg.Ce.y > 0;
        if ((num_31 && second_arg.left) || (num_32 && second_arg.right))
          third_arg
            ? fn_42(first_arg, !0, !1)
            : num_30
              ? (first_arg.Ce.x *= -1)
              : (first_arg.QG.x = 0);
        if ((num_33 && second_arg.top) || (num_34 && second_arg.bottom))
          third_arg
            ? fn_42(first_arg, !1, !0)
            : num_30
              ? (first_arg.Ce.y *= -1)
              : (first_arg.QG.y = 0);
        if (
          (num_31 && num_33 && second_arg.topLeft && !second_arg.top && !second_arg.left) ||
          (num_32 && num_33 && second_arg.topRight && !second_arg.top && !second_arg.right) ||
          (num_32 && num_34 && second_arg.bottomRight && !second_arg.bottom && !second_arg.right) ||
          (num_31 && num_34 && second_arg.bottomLeft && !second_arg.bottom && !second_arg.left)
        )
          third_arg
            ? Math.random() < 0.5
              ? fn_42(first_arg, !0, !1)
              : fn_42(first_arg, !1, !0)
            : num_30
              ? ((first_arg.Ce.x *= -1), (first_arg.Ce.y *= -1))
              : ((first_arg.QG.x = 0), (first_arg.QG.y = 0));
      }
    },
    fn_42 = function (first_arg, second_arg, third_arg) {
      second_arg &&
        first_arg.Ce.x !== 0 &&
        ((first_arg.EXa.x = first_arg.Ce.x), (first_arg.Ce.x = 0));
      third_arg &&
        first_arg.Ce.y !== 0 &&
        ((first_arg.EXa.y = first_arg.Ce.y), (first_arg.Ce.y = 0));
    },
    fn_43 = function (first_arg) {
      first_arg = Math.floor(first_arg);
      if (first_arg <= 0) return "00:00:000";
      var num_30 = Math.floor(first_arg / 6e4);
      if (num_30 >= 600) return "9:59:59:999";
      var num_31 = Math.floor(num_30 / 60);
      return `${num_31 === 0 ? "" : `${num_31.toString()}:`}${(num_30 % 60).toString().padStart(2, "0")}:${(Math.floor(first_arg / 1e3) % 60).toString().padStart(2, "0")}:${(
        first_arg % 1e3
      )
        .toString()
        .padStart(3, "0")}`;
    },
    fn_44 = function (first_arg) {
      return (first_arg.x << 16) | first_arg.y;
    },
    fn_45 = function (first_arg) {
      switch (first_arg) {
        case "LEFT":
          return "RIGHT";
        case "RIGHT":
          return "LEFT";
        case "UP":
          return "DOWN";
        case "DOWN":
          return "UP";
        default:
          return "NONE";
      }
    },
    fn_46 = function (first_arg, second_arg, third_arg, fourth_arg) {
      return Math.max(Math.abs(first_arg - third_arg), Math.abs(second_arg - fourth_arg));
    },
    fn_47 = function (first_arg) {
      return first_arg === 0 || first_arg === 1
        ? 0
        : -first_arg * Math.log2(first_arg) - (1 - first_arg) * Math.log2(1 - first_arg);
    },
    fn_48 = function (first_arg) {
      var num_30 = Math.PI / 2;
      return Math.round(first_arg / num_30) * num_30;
    },
    fn_49 = function (first_arg, second_arg, third_arg, ctx, fifth_arg, sixth_arg) {
      if (sixth_arg.bN()) {
        switch (sixth_arg.Aa) {
          case 1:
            sixth_arg = third_arg * 0.5;
            break;
          case 2:
            sixth_arg = third_arg * 1.25;
            break;
          default:
            sixth_arg = third_arg;
        }
        let num_30 = 0,
          num_31 = Math.abs(sixth_arg - list_19[num_30]);
        for (let index = 0; index < list_19.length; index++) {
          let num_32 = Math.abs(sixth_arg - list_19[index]);
          num_32 < num_31 && ((num_30 = index), (num_31 = num_32));
        }
        sixth_arg = num_30;
        third_arg *= 320 / list_18[sixth_arg];
        ctx.drawImage(
          fifth_arg,
          0,
          320 * sixth_arg,
          320,
          320,
          first_arg - third_arg,
          second_arg - third_arg,
          third_arg * 2,
          third_arg * 2
        );
      } else
        (ctx.beginPath(), ctx.arc(first_arg, second_arg, third_arg, 0, Math.PI * 2), ctx.fill());
    },
    fn_50 = function (first_arg, second_arg, third_arg) {
      if (third_arg && first_arg === 4)
        switch (second_arg) {
          default:
          case 0:
            return "snake_arcade/halloween/default_jackolantern.png";
          case 1:
            return "snake_arcade/halloween/px_jackolantern.png";
          case 2:
            return "snake_arcade/halloween/real_jackolantern.png";
        }
      first_arg = fn_52(first_arg);
      switch (second_arg) {
        default:
        case 0:
          return `snake_arcade/v18/apple_${first_arg}.png`;
        case 1:
          return `snake_arcade/pixel/v18/px_apple_${first_arg}.png`;
        case 2:
          return `snake_arcade/real/v18/apple_${first_arg}.png`;
      }
    },
    fn_51 = function (first_arg) {
      return first_arg < -1 ? 1 : first_arg > 1 ? -1 : first_arg;
    },
    fn_52 = function (first_arg) {
      return `${first_arg < 10 ? "0" : ""}${first_arg}`;
    },
    fn_53 = function (first_arg, second_arg) {
      second_arg !== first_arg.src && (first_arg.src = second_arg);
    },
    fn_54 = function (first_arg, second_arg, third_arg) {
      return first_arg === 6 && second_arg !== void 0 && second_arg !== third_arg;
    },
    fn_55 = function (first_arg, second_arg, third_arg) {
      var uint8_array = new Uint8Array(first_arg.pF * 4),
        int32_array = new Int32Array(first_arg.pF * 4);
      third_arg = map_2.get(third_arg) ?? -1;
      for (let num_30 = -1, index = 0; num_30 < index; num_30++) {
        let local_44 = num_30 < 0 ? second_arg : int32_array[num_30] >> 2,
          local_45 = num_30 < 0 ? third_arg : list_23[int32_array[num_30] & 3],
          local_46 = num_30 < 0 ? -1 : first_arg.Mna[local_44];
        for (let index_2 = 0; index_2 < 4; index_2++) {
          let local_47 = first_arg.transitions[local_44 * 4 + index_2],
            local_48 = local_47 * 4 + index_2;
          if (
            index_2 !== local_45 &&
            (local_46 < 0 || local_46 === index_2) &&
            local_47 >= 0 &&
            !uint8_array[local_48] &&
            !first_arg.blocked[local_47] &&
            !(first_arg.mV[local_47] & (1 << index_2))
          ) {
            if (first_arg.qha[local_47]) return !0;
            uint8_array[local_48] = 1;
            int32_array[index++] = local_48;
          }
        }
      }
      return !1;
    },
    fn_56 = function (first_arg, second_arg, third_arg, list_50, fifth_arg) {
      var fn_457 = (first_arg_2) => fn_58(first_arg, second_arg, third_arg, first_arg_2, fifth_arg);
      if (list_50.length < 2) return list_50.map(fn_457);
      var list_51 = [...fifth_arg],
        list_52 = list_50.map((first_arg_2) =>
          list_51.map((first_arg_3) =>
            fn_58(first_arg, second_arg, third_arg, first_arg_2, new Set([first_arg_3]))
          )
        ),
        list_53 = [];
      list_50.forEach((first_arg_2, second_arg_2) => {
        list_51.forEach((first_arg_3, second_arg_3) => {
          first_arg_3 = list_52[second_arg_2][second_arg_3][first_arg_2];
          first_arg_3 >= 0 && list_53.push([first_arg_3, second_arg_2, second_arg_3]);
        });
      });
      list_53.sort((first_arg_2, second_arg_2) => first_arg_2[0] - second_arg_2[0]);
      var list_54 = list_50.map(() => -1),
        set_value_2 = new Set();
      for (let [, local_44, local_45] of list_53) {
        let local_46 = local_44,
          local_47 = local_45,
          pos = first_arg.indexOf(list_51[local_47]);
        list_54[local_46] < 0 &&
          !set_value_2.has(pos) &&
          ((list_54[local_46] = local_47),
          set_value_2.add(pos),
          set_value_2.add(fn_102(first_arg, pos)));
      }
      return list_50.map((first_arg_2, second_arg_2) =>
        list_54[second_arg_2] >= 0
          ? list_52[second_arg_2][list_54[second_arg_2]]
          : fn_457(first_arg_2)
      );
    },
    fn_57 = function (first_arg) {
      var list_50 = [];
      for (let index = 0; index <= first_arg.pF; index++) list_50.push([]);
      first_arg.CSa.forEach((first_arg_2, second_arg) => {
        first_arg_2 >= 0
          ? list_50[first_arg_2].push(second_arg)
          : first_arg_2 === -2 && list_50[first_arg.pF].push(second_arg);
      });
      return list_50;
    },
    fn_58 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      var fill = new Int32Array(first_arg.pF).fill(-1),
        int32_array = new Int32Array(first_arg.pF + 1),
        index = 0;
      if (fifth_arg)
        for (var local_44 of fifth_arg)
          ((fifth_arg = first_arg.indexOf(local_44)),
            fifth_arg >= 0 &&
              fill[fifth_arg] < 0 &&
              ((fill[fifth_arg] = 0), (int32_array[index++] = fifth_arg)));
      else int32_array[index++] = -2;
      for (local_44 = 0; local_44 < index; local_44++) {
        fifth_arg = int32_array[local_44];
        var local_45 = fifth_arg < 0 ? first_arg.pF : fifth_arg;
        fifth_arg = (fifth_arg < 0 ? 0 : fill[fifth_arg]) + 1;
        for (let local_46 of third_arg[local_45]) {
          local_45 = local_46 >> 2;
          let local_47 = second_arg[local_46];
          fill[local_45] < 0 &&
            (local_47 === -2 || local_47 === fourth_arg) &&
            ((fill[local_45] = fifth_arg), (int32_array[index++] = local_45));
        }
      }
      return fill;
    },
    fn_59 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      var local_44 = first_arg.Mna[third_arg];
      return (
        first_arg.transitions[third_arg * 4 + fifth_arg] === fourth_arg &&
        !fn_60(first_arg, second_arg, third_arg) &&
        (local_44 < 0 || local_44 === fifth_arg)
      );
    },
    fn_60 = function (first_arg, second_arg, third_arg) {
      if (!first_arg.blocked[third_arg] || first_arg.Vda[third_arg]) return !1;
      var num_30 = third_arg % first_arg.width;
      return (
        second_arg.ka.wa[(third_arg - num_30) / first_arg.width][num_30] !== 1 &&
        !fn_100(first_arg, third_arg)
      );
    },
    fn_61 = function (first_arg, second_arg, third_arg, fourth_arg) {
      var num_30 = third_arg % first_arg.width;
      num_30 = second_arg.ka.wa[(third_arg - num_30) / first_arg.width][num_30];
      return (
        first_arg.Mna[third_arg] === list_23[fourth_arg] ||
        fn_60(first_arg, second_arg, third_arg) ||
        num_30 === 7 ||
        num_30 === 2 ||
        num_30 === 6
      );
    },
    fn_62 = function (
      first_arg,
      second_arg,
      third_arg,
      fourth_arg,
      fifth_arg,
      sixth_arg,
      seventh_arg
    ) {
      fourth_arg.x = fifth_arg;
      fourth_arg.y = sixth_arg;
      var local_44 = list_20[seventh_arg];
      fifth_arg = (third_arg = fn_187(second_arg)
        ? ((fn_182(second_arg, 19) ? fn_197(third_arg.Ca, fourth_arg, local_44) : void 0) ??
          (fn_182(second_arg, 20) ? fn_156(third_arg.wa, fourth_arg, local_44) : void 0))
        : void 0)
        ? third_arg.x
        : fifth_arg + list_21[seventh_arg];
      sixth_arg = third_arg ? third_arg.y : sixth_arg + list_22[seventh_arg];
      fn_182(second_arg, 4) &&
        ((fifth_arg = first_arg.Cwa(fifth_arg)), (sixth_arg = first_arg.RCa(sixth_arg)));
      return [fifth_arg, sixth_arg, !!third_arg];
    },
    fn_63 = function ({ Ode: arg, Pde: arg_2, q8d: arg_3, zsb: arg_4, LJe: arg_5, bN: arg_6 }) {
      var local_44 = arg_6 ? (list_27[arg] ?? obj_9) : (list_26[arg] ?? obj_8);
      return {
        vtb: Math.max(
          arg_6 ? 82 : 77,
          (arg_6 ? (list_27[arg] ?? obj_9) : (list_26[arg] ?? obj_8)).Rp + 1
        ),
        Rod: (arg_2 + (local_44.Lp + local_44.Rp + 1) / 2) * arg_3 * arg_4 - arg_5,
        zEb: Math.min(
          1,
          Math.max(0.1, ((local_44.Rp - local_44.Lp + 1) * arg_3) / (arg_6 ? 16 : num_3))
        )
      };
    },
    fn_64 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg = 1) {
      second_arg = Math.min(1, Math.max(0, second_arg));
      var num_30 = 1 - second_arg,
        num_31 = 0;
      for (let local_44 of list_25)
        num_31 +=
          local_44.weight *
          (second_arg + num_30 * Math.cos(local_44.mXc * fourth_arg + local_44.nXc)) *
          Math.sin(local_44.u3c * fifth_arg * (first_arg - third_arg) + local_44.v3c);
      return num_31;
    },
    fn_65 = function (first_arg, second_arg) {
      second_arg = (first_arg.Rnd - (second_arg + Math.PI / 2) + Math.PI) % (Math.PI * 2);
      second_arg < 0 && (second_arg += Math.PI * 2);
      second_arg -= Math.PI;
      second_arg =
        second_arg > Math.PI / 2
          ? Math.PI - second_arg
          : second_arg < -Math.PI / 2
            ? -Math.PI - second_arg
            : second_arg;
      second_arg = first_arg.c8b ? 0 : -second_arg / (Math.PI / 2);
      var num_30 = Math.abs(second_arg),
        local_44 = first_arg.c8b ? 2 : 1;
      first_arg = first_arg.c8b ? 0.75 : 1;
      var now = Date.now();
      if (local_11 !== null) {
        let num_31 = Math.min(0.1, Math.max(0, (now - local_11) / 1e3));
        num_6 += second_arg * 3.5 * num_31;
        num_7 += num_31 * local_44;
      }
      local_11 = now;
      return { BLd: num_30, CLd: num_6, AGd: num_7, B3b: local_44, VRd: first_arg };
    },
    fn_66 = function (ctx, second_arg) {
      if (!(second_arg.zsb <= 0)) {
        var local_44 = second_arg.POe ? "#909090" : (second_arg.bodyColor ?? "#5282F2");
        if (local_44 === "#5282F2") var text_5 = "#1C469E";
        else {
          var hj = namespace.HJ("#5282F2");
          text_5 = namespace.HJ(local_44);
          hj = hj[2] === 0 ? 1 : text_5[2] / hj[2];
          var hj_2 = namespace.HJ("#1C469E");
          hj_2[0] = text_5[0];
          hj_2[1] = text_5[1];
          hj_2[2] = Math.min(1, hj_2[2] * hj);
          text_5 = fn_38(hj_2);
        }
        ctx.save();
        if (second_arg.bN) {
          var iec = second_arg.IEc,
            jec = second_arg.JEc;
          hj = second_arg.zsb;
          var num_30 = Math.min(1, Math.max(0.1, second_arg.zEb ?? 1));
          hj_2 = (iec.x + jec.x) / 2;
          var num_31 = (iec.y + jec.y) / 2;
          jec = Math.atan2(jec.y - iec.y, jec.x - iec.x);
          iec = fn_48(jec);
          second_arg = fn_65(second_arg, jec);
          ctx.save();
          ctx.translate(hj_2, num_31);
          ctx.rotate(iec);
          hj_2 = 15 * hj;
          num_31 = 8 * hj * num_30;
          ctx.fillStyle = local_44;
          ctx.fillRect(-hj_2, -num_31, hj_2 * 2, num_31 * 2);
          local_44 = 5 * hj * num_30;
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(-hj_2, -local_44, hj_2 * 2, local_44 * 2);
          ctx.beginPath();
          ctx.rect(-hj_2, -local_44, hj_2 * 2, local_44 * 2);
          ctx.clip();
          local_44 = (hj_2 * 2) / 6;
          num_31 = 2.5 * second_arg.VRd * hj;
          iec = num_31 / 2;
          jec = num_31 * num_30;
          var num_32 = jec / 2;
          num_30 *= 3 * second_arg.B3b * hj;
          let num_33 = 0.5 * second_arg.B3b;
          ctx.fillStyle = text_5;
          text_5 = 0;
          for (let index = 0; index < 6; index++) {
            var local_45 = fn_64(
              ((index + 0.5) / 6) * 2 - 1,
              second_arg.BLd,
              second_arg.CLd,
              second_arg.AGd,
              num_33
            );
            local_45 = Math.round((local_45 * num_30) / hj) * hj;
            let local_46 = -hj_2 + index * local_44;
            ctx.fillRect(local_46, local_45 - num_32, local_44, jec);
            if (index > 0 && local_45 !== text_5) {
              let num_34 = Math.min(text_5, local_45) - num_32;
              ctx.fillRect(
                local_46 - iec,
                num_34,
                num_31,
                Math.max(text_5, local_45) + num_32 - num_34
              );
            }
            text_5 = local_45;
          }
        } else {
          hj = second_arg.IEc;
          num_32 = second_arg.JEc;
          hj_2 = second_arg.zsb;
          num_31 = Math.min(1, Math.max(0.1, second_arg.zEb ?? 1));
          iec = (hj.x + num_32.x) / 2;
          jec = (hj.y + num_32.y) / 2;
          num_30 = Math.hypot(num_32.x - hj.x, num_32.y - hj.y) / 2;
          num_32 = Math.atan2(num_32.y - hj.y, num_32.x - hj.x);
          hj = fn_65(second_arg, num_32);
          ctx.save();
          ctx.translate(iec, jec);
          ctx.rotate(num_32);
          ctx.scale(1, num_31);
          ctx.lineCap = "round";
          ctx.strokeStyle = local_44;
          ctx.lineWidth = num_3 * hj_2;
          ctx.beginPath();
          ctx.moveTo(-num_30, 0);
          ctx.lineTo(num_30, 0);
          ctx.stroke();
          local_44 = (num_4 / 2) * hj_2;
          ctx.beginPath();
          ctx.arc(-num_30, 0, local_44, Math.PI / 2, (Math.PI * 3) / 2);
          ctx.arc(num_30, 0, local_44, -Math.PI / 2, Math.PI / 2);
          ctx.closePath();
          ctx.fillStyle = "#FFFFFF";
          ctx.fill();
          ctx.clip();
          local_44 = num_30 + local_44;
          second_arg = num_5 * hj.B3b * hj_2;
          num_30 = 0.75 * hj.B3b;
          num_31 = 48 * hj.B3b;
          ctx.strokeStyle = text_5;
          ctx.lineWidth = 3 * hj.VRd * hj_2;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.beginPath();
          for (text_5 = 0; text_5 <= num_31; text_5++)
            ((iec = (text_5 / num_31) * 2 - 1),
              (hj_2 = iec * local_44),
              (iec = fn_64(iec, hj.BLd, hj.CLd, hj.AGd, num_30) * second_arg),
              text_5 === 0 ? ctx.moveTo(hj_2, iec) : ctx.lineTo(hj_2, iec));
          ctx.stroke();
        }
        ctx.restore();
        ctx.restore();
      }
    },
    fn_67 = function (first_arg, second_arg) {
      second_arg = second_arg ? "mobile" : "desktop";
      return { ELd: `${first_arg}_${second_arg}_score`, zHd: `${first_arg}_${second_arg}_plays` };
    },
    obj_5 = { name: "snakefbx" };
  var de = new namespace.de(15, 30),
    list_6 = [145, 145, 145],
    list_7 = [100, 100, 100],
    list_8 = [
      ["#4E7CF6", "#17439F"],
      ["#19D8E6", "#15B5C1"],
      ["#B648F2", "#910FD7"],
      ["#ED44B5", "#C31388"],
      ["#F53D40", "#D00B0E"],
      ["#F69C3C", "#EA7E0B"],
      ["#ECD613", "#D9C512"],
      ["#35B63E", "#298E30"],
      ["#6B6B6B", "#404040"],
      ["#F2F2F2", "#D9D9D9"],
      ["#000000", "#FFFFFF"],
      ["#3888F8", "#E4425E"],
      ["#B749EC", "#EF8826"],
      ["#F53AA2", "#F5D40E"],
      ["#F9B202", "#4CBD1E"],
      ["#39C14C", "#3A79F2"],
      ["#6B6B6B", "#F2F2F2"],
      ["#F2F2F2", "#6B6B6B"]
    ],
    list_9 = [5, 4, 7, 7, 1, 2, 0, 3, 9, 8, 0, 14, 15, 15, 11, 12, 17, 16],
    split =
      "#4E7CF6 #15B5C1 #B648F2 #ED44B5 #F53D40 #EA7E0B #A6960D #35B63E #7F7F7F #7F7F7F #000000 #8E65AB #D36989 #E86830 #94A60F #3A9D9F #7F7F7F #7F7F7F".split(
        " "
      ),
    list_10 = [
      { base: "#e7471d", target: "#808080", threshold: 10 },
      { base: "#eaca23", target: "#909090", threshold: 10 },
      { base: "#ea7f00", target: "#909090", threshold: 10 },
      { base: "#9823af", target: "#808080", threshold: 10 },
      { base: "#ef8d15", target: "#909090", threshold: 10 },
      { base: "#49c527", target: "#7a7a7a", threshold: 360 },
      { base: "#9823af", target: "#808080", threshold: 10 },
      { base: "#f40000", target: "#808080", threshold: 10 },
      { base: "#e7471d", target: "#808080", threshold: 10 },
      { base: "#ff9900", target: "#909090", threshold: 10 },
      { base: "#f26e4d", target: "#858585", threshold: 10 },
      { base: "#009900", target: "#858585", threshold: 10 },
      { base: "#e7471d", target: "#909090", threshold: 10 },
      { base: "#00a10d", target: "#808080", threshold: 1 },
      { base: "#00c919", target: "#858585", threshold: 360 },
      { base: "#efce13", target: "#909090", threshold: 10 },
      { base: "#fe8a00", target: "#858585", threshold: 10 },
      { base: "#ff886c", target: "#909090", threshold: 15 },
      { base: "#ca953e", target: "#909090", threshold: 10 },
      { base: "#ff4040", target: "#858585", threshold: 10 },
      { base: "#fc2d00", target: "#808080", threshold: 10 },
      { base: "#0070b4", target: "#808080", threshold: 10 },
      { base: "#fcbb38", target: "#808080", threshold: 10 },
      { base: "#e0e77d", target: "#808080", threshold: 360 }
    ],
    list_11 = [
      0.2, 0.35, 0.25, 0.15, 0.3, 0.35, 0.15, 0.2, 0.25, 0.3, 0.25, 0.2, 0.25, 0.25, 0.25, 0.4, 0.3,
      0.3, 0.25, 0.2, 0.2, 0.2, 0.3, 0.2
    ],
    list_12 = [
      { x: 0, y: 10, scale: 1 },
      { x: 13, y: 13, scale: 0.9 },
      { x: 0, y: 15, scale: 1 },
      { x: 0, y: 5, scale: 1 },
      { x: 0, y: 12, scale: 1 },
      { x: 0, y: 11, scale: 1 },
      { x: 0, y: 15, scale: 1 },
      { x: 0, y: 18, scale: 0.9 },
      { x: 38, y: 30, scale: 0.7 },
      { x: -10, y: -5, scale: 0.8 },
      { x: 0, y: -6, scale: 1 },
      { x: 0, y: -15, scale: 0.85 },
      { x: 8, y: 10, scale: 0.75 },
      { x: 13, y: 12, scale: 0.75 },
      { x: 0, y: -5, scale: 0.9 },
      { x: 2, y: 1, scale: 1 },
      { x: 0, y: 12, scale: 1 },
      { x: 0, y: 10, scale: 0.9 },
      { x: 3, y: 2, scale: 0.7 },
      { x: 0, y: 12, scale: 0.85 },
      { x: 2, y: 10, scale: 0.85 },
      { x: 10, y: 0, scale: 0.85 },
      { x: 8, y: 4, scale: 1 },
      { x: 0, y: 6, scale: 0.7 }
    ],
    list_13 = [
      { x: 0, y: 10, scale: 1 },
      { x: 10, y: 20, scale: 1 },
      { x: 0, y: 20, scale: 1 },
      { x: 0, y: 10, scale: 1 },
      { x: 0, y: 5, scale: 1 },
      { x: 0, y: 10, scale: 1 },
      { x: 0, y: 20, scale: 1 },
      { x: 0, y: 20, scale: 1 },
      { x: 0, y: 20, scale: 1 },
      { x: -10, y: 0, scale: 1 },
      { x: 0, y: -20, scale: 1 },
      { x: 0, y: -10, scale: 1 },
      { x: 10, y: 10, scale: 1 },
      { x: 10, y: 20, scale: 1 },
      { x: 0, y: -10, scale: 1 },
      { x: 0, y: 0, scale: 1 },
      { x: 0, y: 15, scale: 1 },
      { x: 0, y: 10, scale: 1 },
      { x: 0, y: 10, scale: 1 },
      { x: 0, y: 15, scale: 1 },
      { x: 0, y: 10, scale: 1 },
      { x: 10, y: 5, scale: 1 },
      { x: 10, y: 0, scale: 1 },
      { x: 0, y: 0, scale: 1 }
    ],
    list_14 = [
      { x: -3, y: 10, scale: 1 },
      { x: 12, y: 16, scale: 1 },
      { x: 2, y: 23, scale: 1 },
      { x: 2, y: 5, scale: 1 },
      { x: 0, y: 12, scale: 1 },
      { x: 0, y: 11, scale: 1 },
      { x: 1, y: 15, scale: 1 },
      { x: 0, y: 6, scale: 1 },
      { x: 32, y: 38, scale: 0.7 },
      { x: -10, y: -5, scale: 0.8 },
      { x: 0, y: -6, scale: 0.9 },
      { x: 0, y: -15, scale: 0.9 },
      { x: 8, y: 10, scale: 0.85 },
      { x: 13, y: 12, scale: 0.75 },
      { x: 0, y: -5, scale: 1 },
      { x: 2, y: -2, scale: 1 },
      { x: 2, y: 8, scale: 1 },
      { x: -4, y: 10, scale: 1 },
      { x: 3, y: 2, scale: 0.9 },
      { x: 2, y: 15, scale: 0.95 },
      { x: 2, y: 10, scale: 0.9 },
      { x: 14, y: 0, scale: 0.85 },
      { x: 8, y: 4, scale: 1 },
      { x: -7, y: 6, scale: 0.75 }
    ],
    list_15 = [0, 0, 0, 0, 0, 0.075, 0.15, 0, 0, 0.125, 0, 0, 0.05, 0.075, 0.1, 0, 0.1, 0.1],
    split_2 = "#4E7CF6 #5499C7 #AF7AC5 #E74C3C #F39C12 #CCC31C #27AE60".split(" "),
    list_16 = ["#808080", "#9E9E9E", "#808080", "#616161"],
    list_17 = [
      "#aad751 #a2d149 #94bd46 #578a34 #38640e #4a752c #4dc1f9".split(" "),
      "#494351 #443e4c #3d3644 #2c2730 #453d4d #262428 #2a2640".split(" "),
      "#deeced #d1e4e6 #b9d4d5 #879fa1 #506486 #75898a #8cbfd9".split(" "),
      "#6e3535 #673232 #633131 #a33e3e #642b2b #762d2d #292e4c".split(" "),
      "#f2d78c #eccd79 #e6c770 #977b26 #594d26 #725e1d #5fb7e3".split(" "),
      "#3f5543 #3b4f3f #334737 #253227 #354b38 #202822 #2b375a".split(" "),
      "#b4d0f9 #a3c5f5 #94baf0 #275ba5 #11325f #1d457c #42a5f0".split(" "),
      "#432c68 #3d285d #3a2956 #604096 #3f305a #432a6f #32224f".split(" ")
    ],
    de_2 = new namespace.de(15, -30),
    de_3 = new namespace.de(18, -15),
    de_4 = new namespace.de(15, -16),
    de_5 = new namespace.de(15, -10),
    split_3 = "#f4c20d #db3236 #4885ed #ed44b5 #b648f2 #48e6f1 #f4840d #008744".split(" "),
    num = 1 / 3,
    list_18 = [16, 32, 56, 80, 112, 160, 224, 304],
    list_19 = [4, 8, 14, 20, 28, 40, 56, 76],
    set_value = new Set([8, 9]),
    num_2 = 1 / 6;
  var fn_68 = function (first_arg) {
      first_arg.ka > 0 || (first_arg.oa.wa(), first_arg.Ba?.wa(), first_arg.Ca?.wa());
    },
    fn_69 = function (first_arg, second_arg, third_arg, fourth_arg = -1) {
      first_arg.ka > 0
        ? ((first_arg.wa = second_arg), (first_arg.Aa = third_arg), (first_arg.Ga = fourth_arg))
        : (fn_68(first_arg),
          first_arg.oa.Aa(second_arg, third_arg, fourth_arg),
          first_arg.Ba?.Aa(second_arg, third_arg, fourth_arg),
          first_arg.Ca?.Aa(second_arg, third_arg, -1));
    },
    fn_70 = function (first_arg, second_arg) {
      switch (second_arg !== void 0 ? second_arg : first_arg.settings.Qa) {
        default:
        case 0:
          return first_arg.oa;
        case 1:
          return first_arg.Ba ? first_arg.Ba : first_arg.oa;
        case 2:
          return first_arg.Ca ? first_arg.Ca : first_arg.oa;
      }
    },
    cls_21 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg) {
        this.settings = first_arg;
        this.Ia = third_arg;
        this.context = fourth_arg;
        this.ka = 1;
        this.Aa = this.wa = "";
        this.Ga = -1;
        first_arg = () => {
          this.ka--;
          this.ka > 0 ||
            (fn_68(this),
            this.wa !== "" &&
              this.Aa !== "" &&
              (fn_69(this, this.wa, this.Aa, this.Ga), (this.Aa = this.wa = ""), (this.Ga = 0)),
            this.Ka && this.Ka());
        };
        this.oa = new cls_22(second_arg, first_arg);
        fifth_arg !== void 0 && (this.ka++, (this.Ba = new cls_22(fifth_arg, first_arg)));
        sixth_arg !== void 0 && (this.ka++, (this.Ca = new cls_22(sixth_arg, first_arg)));
      }
      onLoad(first_arg) {
        this.Ka = first_arg;
      }
      render(first_arg, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg, seventh_arg = 0) {
        if (!(this.ka > 0)) {
          var local_44 = third_arg ? third_arg.x : 0;
          third_arg = third_arg ? third_arg.y : 0;
          this.context.save();
          this.context.translate(second_arg.x, second_arg.y);
          this.context.rotate(fourth_arg);
          second_arg = fn_70(this, sixth_arg).ka.canvas;
          fourth_arg = this.getWidth(sixth_arg);
          sixth_arg = this.getHeight(sixth_arg);
          fourth_arg = Math.max(0, fourth_arg - seventh_arg);
          this.context.drawImage(
            second_arg,
            seventh_arg,
            sixth_arg * first_arg,
            fourth_arg,
            sixth_arg,
            (local_44 + seventh_arg) * fifth_arg,
            third_arg * fifth_arg,
            fourth_arg * fifth_arg,
            sixth_arg * fifth_arg
          );
          this.context.restore();
        }
      }
      getLength() {
        return this.Ia;
      }
      getWidth(first_arg) {
        return fn_70(this, first_arg).kR.width;
      }
      getHeight(first_arg) {
        return fn_70(this, first_arg).kR.height / this.Ia;
      }
      mJ(first_arg) {
        return fn_70(this, first_arg).mJ();
      }
    },
    fn_71 = function (first_arg, fn_457) {
      first_arg.kR.src = `https://www.google.com/logos/fnbx/${first_arg.path}`;
      namespace.Dn(first_arg.kR, "load", () => {
        first_arg.loaded = !0;
        fn_457();
      });
    },
    cls_22 = class {
      constructor(first_arg, second_arg) {
        this.path = first_arg;
        this.loaded = !1;
        this.kR = new Image();
        this.kR.crossOrigin = "Anonymous";
        this.oa = document.createElement("canvas").getContext("2d");
        this.ka = document.createElement("canvas").getContext("2d");
        fn_71(this, second_arg);
      }
      wa() {
        this.loaded &&
          ((this.oa.canvas.width = this.kR.width),
          (this.oa.canvas.height = this.kR.height),
          this.oa.clearRect(0, 0, this.oa.canvas.width, this.oa.canvas.height),
          this.oa.drawImage(this.kR, 0, 0),
          (this.ka.canvas.width = this.kR.width),
          (this.ka.canvas.height = this.kR.height),
          this.ka.clearRect(0, 0, this.ka.canvas.width, this.ka.canvas.height),
          this.ka.drawImage(this.kR, 0, 0));
      }
      Aa(first_arg, second_arg, third_arg) {
        first_arg = namespace.HJ(first_arg);
        second_arg = namespace.HJ(second_arg);
        var local_44 = first_arg[2] === 0 ? 1 : second_arg[2] / first_arg[2],
          image_data = this.oa.getImageData(0, 0, this.oa.canvas.width, this.oa.canvas.height),
          data = image_data.data;
        for (let num_31 = 0; num_31 < data.length; num_31 += 4)
          if (data[num_31 + 3] > 0) {
            var k_he = namespace.kHe(data[num_31], data[num_31 + 1], data[num_31 + 2]),
              num_30 = Math.abs(k_he[0] - first_arg[0]);
            num_30 > 180 && (num_30 = 360 - num_30);
            num_30 = third_arg >= 0 && num_30 >= third_arg;
            k_he[2] < 1 &&
              !num_30 &&
              ((k_he[0] = second_arg[0]), (k_he[1] = second_arg[1]), (k_he[2] *= local_44));
            k_he = namespace.mHe(k_he[0], k_he[1], k_he[2]);
            data[num_31] = k_he[0];
            data[num_31 + 1] = k_he[1];
            data[num_31 + 2] = k_he[2];
          }
        this.ka.putImageData(image_data, 0, 0);
      }
      mJ() {
        return this.oa.canvas;
      }
    };
  var fn_72 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg = !1) {
      var num_30 = Math.round(first_arg.ub.ka.ka / 5);
      num_30 % 2 !== 0 && (num_30 += 1);
      first_arg.ka.lineWidth = num_30;
      first_arg.ka.lineCap = "butt";
      first_arg.ka.fillStyle = fn_185(first_arg.settings, first_arg.settings.oa, 3);
      first_arg.ka.strokeStyle = first_arg.ka.fillStyle;
      first_arg.ka.save();
      first_arg.ka.translate(second_arg.x, second_arg.y);
      var from = Array.from(third_arg);
      fourth_arg *= first_arg.ub.ka.ka / 2;
      second_arg = num_30 / 2;
      for (var local_44 of from) {
        from = fifth_arg ? fn_45(local_44) : local_44;
        first_arg.ka.beginPath();
        switch (from) {
          case "UP":
            first_arg.ka.moveTo(-fourth_arg + second_arg, -fourth_arg);
            first_arg.ka.lineTo(fourth_arg - second_arg, -fourth_arg);
            break;
          case "DOWN":
            first_arg.ka.moveTo(-fourth_arg + second_arg, fourth_arg);
            first_arg.ka.lineTo(fourth_arg - second_arg, fourth_arg);
            break;
          case "LEFT":
            first_arg.ka.moveTo(-fourth_arg, -fourth_arg + second_arg);
            first_arg.ka.lineTo(-fourth_arg, fourth_arg - second_arg);
            break;
          case "RIGHT":
            (first_arg.ka.moveTo(fourth_arg, -fourth_arg + second_arg),
              first_arg.ka.lineTo(fourth_arg, fourth_arg - second_arg));
        }
        first_arg.ka.stroke();
      }
      local_44 = new Set();
      third_arg.has(fifth_arg ? "RIGHT" : "LEFT") &&
        (local_44.add("top_left"), local_44.add("bottom_left"));
      third_arg.has(fifth_arg ? "LEFT" : "RIGHT") &&
        (local_44.add("top_right"), local_44.add("bottom_right"));
      third_arg.has(fifth_arg ? "DOWN" : "UP") &&
        (local_44.add("top_left"), local_44.add("top_right"));
      third_arg.has(fifth_arg ? "UP" : "DOWN") &&
        (local_44.add("bottom_left"), local_44.add("bottom_right"));
      local_44.has("top_left") &&
        first_arg.ka.fillRect(-fourth_arg - second_arg, -fourth_arg - second_arg, num_30, num_30);
      local_44.has("bottom_left") &&
        first_arg.ka.fillRect(-fourth_arg - second_arg, fourth_arg - second_arg, num_30, num_30);
      local_44.has("top_right") &&
        first_arg.ka.fillRect(fourth_arg - second_arg, -fourth_arg - second_arg, num_30, num_30);
      local_44.has("bottom_right") &&
        first_arg.ka.fillRect(fourth_arg - second_arg, fourth_arg - second_arg, num_30, num_30);
      first_arg.ka.restore();
    },
    fn_73 = function (first_arg, second_arg, ctx, fourth_arg, fifth_arg, sixth_arg, seventh_arg) {
      first_arg.settings.ka === 6 &&
        (first_arg.ka.save(),
        seventh_arg && ctx === 18 && first_arg.ka.scale(-1, 1),
        second_arg !== first_arg.ub.oa.wa
          ? (first_arg.ka.globalAlpha *= 0.5)
          : first_arg.ub.oa.Ba && (first_arg.ka.globalAlpha *= 0.5 + 0.5 * sixth_arg),
        (second_arg = (second_arg - 1) % 10),
        (sixth_arg = first_arg.settings.bN() || fifth_arg === 1),
        (seventh_arg = first_arg.settings.Qa === 2 || fifth_arg === 2),
        (ctx = (sixth_arg ? list_13 : seventh_arg ? list_14 : list_12)[ctx] ?? {
          x: 0,
          y: 0,
          scale: 1
        }),
        (sixth_arg = sixth_arg ? 170 : 128),
        first_arg.Ba.render(
          second_arg,
          new namespace.de(0, 0),
          new namespace.de(-sixth_arg / 2 + ctx.x, -sixth_arg / 2 + ctx.y),
          0,
          (fourth_arg / sixth_arg) * ctx.scale,
          fifth_arg
        ),
        first_arg.ka.restore());
    },
    cls_23 = class {
      constructor(first_arg, second_arg, event, fourth_arg, fifth_arg) {
        this.ub = first_arg;
        this.settings = second_arg;
        this.ka = event;
        this.wa = fourth_arg;
        this.Aa = fifth_arg;
        this.oa = [];
        this.Ba = new cls_21(
          this.settings,
          "snake_arcade/sequence.png",
          10,
          this.ka,
          "snake_arcade/pixel/px_sequence.png"
        );
        for (first_arg = 0; first_arg < 24; first_arg++)
          ((second_arg = new cls_21(
            this.settings,
            fn_50(first_arg, 0, this.settings.Vb),
            1,
            this.ka,
            fn_50(first_arg, 1, this.settings.Vb),
            fn_50(first_arg, 2, this.settings.Vb)
          )),
            (event = list_10[first_arg]),
            fn_69(second_arg, event.base, event.target, event.threshold),
            this.oa.push(second_arg));
      }
      render(first_arg, second_arg) {
        var clone = second_arg.pos.clone();
        clone.x = clone.x * this.ub.ka.ka + this.ub.ka.ka / 2;
        clone.y = clone.y * this.ub.ka.ka + this.ub.ka.ka / 2;
        if (fn_181(this.settings) && !second_arg.Qm && !this.ub.wj) {
          var clone_2 = second_arg.pos.clone();
          clone_2.x += second_arg.QG.x > 0 ? second_arg.Ce.x : 0;
          clone_2.y += second_arg.QG.y > 0 ? second_arg.Ce.y : 0;
          clone_2.x = clone_2.x * this.ub.ka.ka + this.ub.ka.ka / 2;
          clone_2.y = clone_2.y * this.ub.ka.ka + this.ub.ka.ka / 2;
          clone.x = clone.x * (1 - first_arg) + clone_2.x * first_arg;
          clone.y = clone.y * (1 - first_arg) + clone_2.y * first_arg;
          clone_2 =
            (this.ub.ka.ka / 10) *
            (2 * Math.abs(2 * (first_arg + 0.25 - Math.floor(first_arg + 0.75))) - 1);
          second_arg.QG.x === 0 && (clone.x += clone_2 * Math.sign(second_arg.Ce.x));
          second_arg.QG.y === 0 && (clone.y += clone_2 * Math.sign(second_arg.Ce.y));
        }
        clone_2 = this.ub.Ac(second_arg, first_arg);
        var local_44 =
            second_arg.type > 0 && second_arg.type < this.oa.length ? second_arg.type : 0,
          local_45 = second_arg.Mea
            ? fn_70(this.oa[local_44], second_arg.ota).ka.canvas
            : this.oa[local_44].mJ(second_arg.ota);
        fn_182(this.settings, 11) &&
          (this.ka.globalAlpha = fn_253(this.ub, first_arg, second_arg.dh, {
            R6: second_arg.Mea || fn_183(this.settings) ? 0.2 : list_11[local_44],
            WR: !1
          }));
        fn_182(this.settings, 15) &&
          second_arg.m7 &&
          fn_72(this, clone, second_arg.m7, second_arg.Qm ? first_arg : 1);
        var local_46 = this.settings.bN() || second_arg.ota === 1;
        this.ka.save();
        this.ka.translate(clone.x, clone.y);
        var num_30 = 0,
          local_47 = fn_182(this.settings, 7) && fn_182(this.settings, 2);
        fn_182(this.settings, 18) &&
          second_arg.uJa !== void 0 &&
          !local_47 &&
          ((num_30 = second_arg.uJa),
          Math.abs(num_30 - second_arg.aD) >= Math.PI &&
            (num_30 = num_30 > 0 ? num_30 - Math.PI * 2 : num_30 + Math.PI * 2),
          second_arg.dh &&
            ((second_arg.aD = 0.9 * second_arg.aD + 0.1 * num_30),
            second_arg.aD > Math.PI
              ? (second_arg.aD -= 2 * Math.PI)
              : second_arg.aD < -Math.PI && (second_arg.aD += 2 * Math.PI)),
          (num_30 = local_46 ? fn_48(second_arg.aD) : second_arg.aD),
          this.ka.rotate(num_30));
        local_46 = local_46 ? 170 : 128;
        this.ka.drawImage(
          local_45,
          0,
          0,
          local_46,
          local_46,
          -clone_2 / 2,
          -clone_2 / 2,
          clone_2,
          clone_2
        );
        second_arg.sequenceNumber !== void 0 &&
          fn_73(this, second_arg.sequenceNumber, local_44, clone_2, second_arg.ota, first_arg, !1);
        this.ka.restore();
        fn_184(this.settings) &&
          ((clone = new namespace.de(
            this.ub.ka.oa.width * this.ub.ka.ka - clone.x,
            this.ub.ka.oa.height * this.ub.ka.ka - clone.y
          )),
          fn_182(this.settings, 15) &&
            second_arg.m7 &&
            fn_72(this, clone, second_arg.m7, second_arg.Qm ? first_arg : 1, !0),
          this.ka.save(),
          this.ka.translate(clone.x, clone.y),
          this.ka.rotate(num_30 + Math.PI),
          local_44 === 18 && this.ka.scale(-1, 1),
          this.ka.drawImage(
            local_45,
            0,
            0,
            local_46,
            local_46,
            -(clone_2 / 2),
            -(clone_2 / 2),
            clone_2,
            clone_2
          ),
          second_arg.sequenceNumber !== void 0 &&
            fn_73(
              this,
              second_arg.sequenceNumber,
              local_44,
              clone_2,
              second_arg.ota,
              first_arg,
              !0
            ),
          this.ka.restore());
        this.ka.globalAlpha = 1;
      }
    };
  var map = new Map([
      ["LEFT", new namespace.de(-1, 0)],
      ["RIGHT", new namespace.de(1, 0)],
      ["UP", new namespace.de(0, -1)],
      ["DOWN", new namespace.de(0, 1)]
    ]),
    fn_74 = function (first_arg, second_arg, third_arg) {
      second_arg = new namespace.de(
        Math.floor((3 * first_arg.oa.oa.width) / 4) + second_arg,
        Math.floor(first_arg.oa.oa.height / 2) + third_arg
      );
      first_arg = {
        pos: second_arg,
        mM: 0,
        type: -1,
        Qm: !1,
        Ce: fn_182(first_arg.settings, 6) ? fn_81(first_arg) : new namespace.de(0, 0),
        EXa: new namespace.de(0, 0),
        QG: new namespace.de(1, 1),
        Mea: !1,
        dh: !0,
        light: fn_182(first_arg.settings, 14) ? 1.5 : 0,
        ota: first_arg.settings.Qa === 3 ? fn_82() : void 0,
        m7: fn_182(first_arg.settings, 15) ? fn_78(first_arg, second_arg) : void 0,
        aD: 0
      };
      first_arg.EXa = first_arg.Ce.clone();
      return first_arg;
    },
    fn_75 = function (first_arg) {
      if (fn_182(first_arg.settings, 2)) {
        var num_30 = Math.floor(48 / first_arg.ka.length);
        for (let num_31 = 0; num_31 < first_arg.ka.length; num_31 += 2)
          ((first_arg.ka[num_31].type = fn_76(first_arg)),
            (first_arg.ka[num_31 + 1].type = first_arg.ka[num_31].type),
            num_31 > 0 &&
              first_arg.settings.Oa !== 24 &&
              ((first_arg.ka[num_31].type =
                (first_arg.ka[num_31].type + (num_31 / 2) * num_30) % 24),
              (first_arg.ka[num_31 + 1].type = first_arg.ka[num_31].type)));
      }
    },
    fn_76 = function (first_arg) {
      if (first_arg.settings.Oa === 24) {
        var set_value_2 = new Set();
        for (let index = 0; index < 24; index++) set_value_2.add(index);
        for (var local_44 of first_arg.ka) set_value_2.delete(local_44.type);
        return set_value_2.size > 0
          ? Array.from(set_value_2)[Math.floor(Math.random() * set_value_2.size)]
          : Math.floor(Math.random() * 24);
      }
      if (
        fn_182(first_arg.settings, 2) &&
        (fn_182(first_arg.settings, 8) || fn_182(first_arg.settings, 9))
      ) {
        local_44 = new Set();
        for (set_value_2 of first_arg.ka) local_44.add(set_value_2.type);
        for (first_arg = first_arg.settings.Oa; local_44.has(first_arg);)
          first_arg = (first_arg + 1) % 24;
        return first_arg;
      }
      return first_arg.settings.Oa;
    },
    fn_77 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      third_arg = fn_92(first_arg, second_arg, third_arg, fourth_arg, fifth_arg);
      second_arg.QG.x = 1;
      second_arg.QG.y = 1;
      if (
        fn_182(first_arg.settings, 16) &&
        second_arg.pos.x % 1 === 0 &&
        second_arg.pos.y % 1 === 0 &&
        second_arg.dh === fn_97(first_arg.Aa, second_arg.pos)
      ) {
        switch (fn_98(first_arg.Aa, second_arg.pos)) {
          default:
          case "NONE":
            break;
          case "LEFT":
            second_arg.Ce.x = -0.5;
            break;
          case "RIGHT":
            second_arg.Ce.x = 0.5;
            break;
          case "UP":
            second_arg.Ce.y = -0.5;
            break;
          case "DOWN":
            second_arg.Ce.y = 0.5;
        }
        fn_96(first_arg.Aa, second_arg.pos, !0);
      }
      fn_41(second_arg, third_arg, fn_182(first_arg.settings, 18));
    },
    fn_78 = function (first_arg, second_arg) {
      var set_value_2 = new Set();
      if (!fn_182(first_arg.settings, 21)) {
        fn_182(first_arg.settings, 4) ||
          (second_arg.x === 0
            ? set_value_2.add("LEFT")
            : second_arg.x === first_arg.oa.oa.width - 1 && set_value_2.add("RIGHT"),
          second_arg.y === 0
            ? set_value_2.add("UP")
            : second_arg.y === first_arg.oa.oa.height - 1 && set_value_2.add("DOWN"));
        let ca = first_arg.oa.Ca(second_arg, 2);
        for (let [local_47, local_48] of map.entries()) {
          let local_49 = local_47;
          var local_44 = local_48,
            local_45 = first_arg,
            local_46 = ca;
          local_44 = new namespace.de(second_arg.x + local_44.x, second_arg.y + local_44.y);
          local_45 = fn_182(local_45.settings, 4) ? fn_124(local_45.oa, local_44) : local_44;
          local_46.has((local_45.x << 16) | local_45.y) && set_value_2.add(local_49);
        }
        (first_arg.settings.ka !== 4 && first_arg.settings.ka !== 5) ||
          fn_182(first_arg.settings, 4) ||
          ((second_arg.x !== 0 && second_arg.x !== first_arg.oa.oa.width - 1) ||
            set_value_2.add(Math.random() < 0.5 ? "UP" : "DOWN"),
          (second_arg.y !== 0 && second_arg.y !== first_arg.oa.oa.height - 1) ||
            set_value_2.add(Math.random() < 0.5 ? "LEFT" : "RIGHT"));
      }
      second_arg = new Set();
      set_value_2 = Array.from(set_value_2);
      local_46 = fn_83(set_value_2);
      if (local_46 === null) return second_arg;
      second_arg.add(local_46);
      set_value_2.push(local_46);
      if (!fn_181(first_arg.settings) && Math.random() < 0.75) {
        first_arg = fn_83(set_value_2);
        if (first_arg === null) return second_arg;
        second_arg.add(first_arg);
        set_value_2.push(first_arg);
        if (Math.random() < 0.33) {
          first_arg = fn_83(set_value_2);
          if (first_arg === null) return second_arg;
          second_arg.add(first_arg);
        }
      }
      return second_arg;
    },
    fn_79 = function (first_arg) {
      first_arg.wa = 1;
      if (fn_186(first_arg.settings)) {
        var local_44 = fn_80(Math.floor(first_arg.ka.length / 2));
        for (var index = 0; index < first_arg.ka.length; index += 2) {
          let local_45 = local_44[index / 2] ?? 1;
          first_arg.ka[index].sequenceNumber = local_45;
          first_arg.ka[index + 1] && (first_arg.ka[index + 1].sequenceNumber = local_45);
        }
      } else
        for (local_44 = fn_80(first_arg.ka.length), index = 0; index < first_arg.ka.length; index++)
          first_arg.ka[index].sequenceNumber = local_44[index];
      if (fn_182(first_arg.settings, 11))
        for (let local_45 of first_arg.ka)
          local_45.sequenceNumber !== void 0 && (local_45.dh = local_45.sequenceNumber % 2 === 1);
    },
    fn_80 = function (first_arg) {
      first_arg = Array.from({ length: first_arg }, (first_arg_2, second_arg) => second_arg + 1);
      namespace.eba(first_arg);
      return first_arg;
    },
    fn_81 = function (first_arg) {
      var de_6 = new namespace.de(
        Math.random() < 0.5 ? -0.5 : 0.5,
        Math.random() < 0.5 ? -0.5 : 0.5
      );
      Math.random() < 0.25 && (Math.random() < 0.5 ? (de_6.x = 0) : (de_6.y = 0));
      fn_182(first_arg.settings, 18) && fn_91(first_arg, de_6);
      return de_6;
    },
    fn_82 = function () {
      var list_50 = [0, 1, 2];
      return list_50[Math.floor(Math.random() * list_50.length)];
    },
    fn_83 = function (first_arg) {
      var set_value_2 = new Set(["LEFT", "RIGHT", "UP", "DOWN"]);
      for (let local_44 of first_arg) set_value_2.delete(local_44);
      return set_value_2.size <= 1
        ? null
        : Array.from(set_value_2)[Math.floor(Math.random() * set_value_2.size)];
    },
    fn_84 = function (first_arg, second_arg) {
      for (let [local_45, local_46] of map.entries()) {
        let local_47 = local_45;
        var local_44 = local_46;
        local_44 = new namespace.de(second_arg.pos.x + local_44.x, second_arg.pos.y + local_44.y);
        fn_182(first_arg.settings, 4) && (local_44 = fn_124(first_arg.oa, local_44));
        for (let local_48 of first_arg.ka)
          (local_48.pos.equals(local_44) && local_48.m7?.delete(fn_45(local_47)),
            fn_182(first_arg.settings, 7) &&
              fn_121(first_arg.oa, local_48.pos).equals(local_44) &&
              local_48.m7?.delete(local_47));
      }
    },
    fn_85 = function (first_arg, second_arg, third_arg) {
      first_arg.ka[second_arg].pos = third_arg;
      first_arg.ka[second_arg].mM = 0;
      first_arg.ka[second_arg].Qm = !0;
      first_arg.ka[second_arg].aD = 0;
      first_arg.ka[second_arg].uJa = void 0;
      first_arg.settings.Qa === 3 && (first_arg.ka[second_arg].ota = fn_82());
      fn_182(first_arg.settings, 6) &&
        ((first_arg.ka[second_arg].Ce = fn_81(first_arg)),
        (first_arg.ka[second_arg].EXa = first_arg.ka[second_arg].Ce.clone()));
      fn_182(first_arg.settings, 15) && (first_arg.ka[second_arg].m7 = fn_78(first_arg, third_arg));
      fn_182(first_arg.settings, 14) &&
        (first_arg.ka[second_arg].light =
          fn_182(first_arg.settings, 11) && first_arg.ka[second_arg].dh ? 0 : 1.5);
      fn_182(first_arg.settings, 16) && fn_96(first_arg.Aa, third_arg, !1);
    },
    fn_86 = function (first_arg) {
      var local_44 = fn_123(first_arg.oa, null, 4);
      if (local_44) {
        let local_45 = fn_74(first_arg, 0, 0);
        local_45.pos = local_44;
        local_45.Mea = !0;
        local_45.Qm = !0;
        local_45.type = fn_76(first_arg);
        first_arg.ka.push(local_45);
        return !0;
      }
      return !1;
    },
    fn_87 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg = !1) {
      var len = first_arg.ka.length;
      first_arg.ka.push(fn_74(first_arg, 0, 0));
      first_arg.ka[first_arg.ka.length - 1].pos.x = second_arg.x;
      first_arg.ka[first_arg.ka.length - 1].pos.y = second_arg.y;
      first_arg.ka[first_arg.ka.length - 1].Qm = !0;
      first_arg.ka[first_arg.ka.length - 1].sOa = third_arg;
      first_arg.ka[first_arg.ka.length - 1].dh = fourth_arg;
      var local_44 = fn_76(first_arg);
      first_arg.ka[first_arg.ka.length - 1].type = local_44;
      fn_182(first_arg.settings, 2) && !sixth_arg
        ? ((second_arg = fn_182(first_arg.settings, 7) ? fn_121(first_arg.oa, second_arg) : null),
          (second_arg = fn_123(first_arg.oa, second_arg, 2))
            ? (first_arg.ka.push(fn_74(first_arg, 0, 0)),
              (first_arg.ka[first_arg.ka.length - 1].pos.x = second_arg.x),
              (first_arg.ka[first_arg.ka.length - 1].pos.y = second_arg.y),
              (first_arg.ka[first_arg.ka.length - 1].Qm = !0),
              (first_arg.ka[first_arg.ka.length - 1].sOa = third_arg),
              (first_arg.ka[first_arg.ka.length - 1].type = local_44),
              (first_arg.ka[first_arg.ka.length - 1].dh = fourth_arg),
              fn_182(first_arg.settings, 10) &&
                ((third_arg = Math.random() < 0.5),
                (first_arg.ka[first_arg.ka.length - 1].Mea = third_arg),
                (first_arg.ka[first_arg.ka.length - 2].Mea = !third_arg)))
            : first_arg.ka.pop())
        : fn_182(first_arg.settings, 10) &&
          !sixth_arg &&
          fn_86(first_arg) &&
          (fn_182(first_arg.settings, 11) &&
            (first_arg.ka[first_arg.ka.length - 1].dh = fourth_arg),
          (fn_182(first_arg.settings, 8) || fn_182(first_arg.settings, 9)) &&
            Math.random() < 0.5 &&
            ((third_arg = first_arg.ka[first_arg.ka.length - 1].pos.clone()),
            (first_arg.ka[first_arg.ka.length - 1].pos =
              first_arg.ka[first_arg.ka.length - 2].pos.clone()),
            (first_arg.ka[first_arg.ka.length - 2].pos = third_arg)));
      len = first_arg.ka.length - len;
      if (fifth_arg !== void 0)
        for (third_arg = 0; third_arg < len; third_arg++)
          first_arg.ka[first_arg.ka.length - 1 - third_arg].sequenceNumber = fifth_arg;
      if (fn_182(first_arg.settings, 15))
        for (fifth_arg = 0; fifth_arg < len; fifth_arg++)
          ((third_arg = first_arg.ka[first_arg.ka.length - 1 - fifth_arg]),
            (third_arg.m7 = fn_78(first_arg, third_arg.pos)));
      if (fn_182(first_arg.settings, 16))
        for (fifth_arg = 0; fifth_arg < len; fifth_arg++)
          fn_96(first_arg.Aa, first_arg.ka[first_arg.ka.length - 1 - fifth_arg].pos, !1);
    },
    fn_88 = function (first_arg) {
      var index = 0;
      for (let local_44 of first_arg.ka) local_44.Mea && index++;
      index < first_arg.ka.length / 2 && fn_86(first_arg);
    },
    fn_89 = function (first_arg, second_arg, list_50, fn_457) {
      if (list_50) fn_227(first_arg.Yc);
      else if (!fn_182(first_arg.settings, 2)) {
        list_50 = [];
        var index = 0;
        for (var local_44 of first_arg.ka)
          local_44.dh && (index++, local_44.Mea && list_50.push(local_44));
        if (list_50.length === 0) return !1;
        if (list_50.length >= index / 2 || fn_123(first_arg.oa, null, 2) === null) {
          let local_45 =
            first_arg.settings.ka === 6 && first_arg.ka[second_arg]
              ? first_arg.ka[second_arg].sequenceNumber
              : void 0;
          list_50 =
            local_45 !== void 0
              ? (list_50.find((first_arg_2) => first_arg_2.sequenceNumber === local_45) ??
                list_50[Math.floor(Math.random() * list_50.length)])
              : fn_181(first_arg.settings)
                ? list_50.sort(
                    (first_arg_2, second_arg_2) =>
                      fn_125(first_arg.oa, first_arg_2.pos, first_arg.Yc.ka[0]) -
                      fn_125(first_arg.oa, second_arg_2.pos, first_arg.Yc.ka[0])
                  )[0]
                : list_50[Math.floor(Math.random() * list_50.length)];
          for (local_44 = 0; local_44 < first_arg.ka.length; local_44++)
            if (first_arg.ka[local_44].pos.equals(list_50.pos) && first_arg.ka[local_44].Mea) {
              fn_457 = fn_457(first_arg.ka[local_44], 0) / first_arg.oa.ka;
              list_50 =
                first_arg.settings.Qa === 3 ? first_arg.ka[local_44].ota : first_arg.settings.Qa;
              first_arg.Ca.particles.push({
                pos: new namespace.de(
                  first_arg.ka[local_44].pos.x * first_arg.oa.ka,
                  first_arg.ka[local_44].pos.y * first_arg.oa.ka
                ),
                Ce: new namespace.de(0, 0),
                angle: 0,
                m0: 0,
                size: fn_457,
                ZI: first_arg.ka[local_44].type,
                type: 1,
                ota: list_50
              });
              fn_182(first_arg.settings, 7) &&
                ((index = fn_121(first_arg.oa, first_arg.ka[local_44].pos)),
                first_arg.Ca.particles.push({
                  pos: new namespace.de(index.x * first_arg.oa.ka, index.y * first_arg.oa.ka),
                  Ce: new namespace.de(0, 0),
                  angle: 180,
                  m0: 0,
                  size: fn_457,
                  ZI: first_arg.ka[local_44].type,
                  type: 1,
                  ota: list_50
                }));
              first_arg.ka.splice(local_44, 1);
              if (local_44 <= second_arg) return !0;
              break;
            }
        }
      }
      return !1;
    },
    fn_90 = function (first_arg, second_arg, third_arg, fn_457) {
      var local_44 = first_arg.settings.ka === 0 && !fn_182(first_arg.settings, 11),
        local_45 = fn_457(second_arg, !1, null);
      if (
        fn_182(first_arg.settings, 8) ||
        fn_182(first_arg.settings, 9) ||
        first_arg.settings.ka === 6
      )
        first_arg.ka.splice(Math.min(second_arg, third_arg), 2);
      else {
        let local_46 = fn_182(first_arg.settings, 7)
          ? fn_121(first_arg.oa, first_arg.ka[second_arg].pos)
          : null;
        fn_457 = fn_457(third_arg, local_44, local_46);
        (local_45 && fn_457) || first_arg.ka.splice(Math.min(second_arg, third_arg), 2);
      }
    },
    fn_91 = function (first_arg, second_arg) {
      switch (first_arg.Yc.direction) {
        case "LEFT":
          second_arg.x = 0.5;
          break;
        case "NONE":
        case "RIGHT":
          second_arg.x = -0.5;
          break;
        case "UP":
          second_arg.y = 0.5;
          break;
        case "DOWN":
          second_arg.y = -0.5;
      }
    },
    fn_92 = function (first_arg, second_arg, list_50, fourth_arg, fifth_arg) {
      var obj_21 = {};
      fn_182(first_arg.settings, 4) || fn_39(second_arg.pos, first_arg.oa.oa, obj_21);
      var num_30 = second_arg.pos.y % 1 === 0;
      if (second_arg.pos.x % 1 === 0 || num_30) {
        num_30 = [];
        for (var index = 1; index < first_arg.Yc.ka.length; index++) {
          var local_44 = first_arg.Yc.ka[index];
          (fn_182(first_arg.settings, 11) && second_arg.dh !== first_arg.Yc.wa[index]) ||
            ((fn_182(first_arg.settings, 3) && (local_44.x + local_44.y) % 2 !== 1) ||
              num_30.push(first_arg.Yc.ka[index]),
            fn_182(first_arg.settings, 7) &&
              ((fn_182(first_arg.settings, 3) && (local_44.x + local_44.y) % 2 !== 1) ||
                num_30.push(fn_226(first_arg.Yc, index))));
        }
        fn_182(first_arg.settings, 15) &&
          second_arg.dh &&
          ((index = (first_arg_2) =>
            (second_arg.Ce.x < 0 &&
              second_arg.m7?.has("LEFT") &&
              first_arg_2.x < second_arg.pos.x &&
              Math.abs(first_arg_2.y - second_arg.pos.y) < 1) ||
            (second_arg.Ce.x > 0 &&
              second_arg.m7?.has("RIGHT") &&
              first_arg_2.x > second_arg.pos.x &&
              Math.abs(first_arg_2.y - second_arg.pos.y) < 1) ||
            (second_arg.Ce.y < 0 &&
              second_arg.m7?.has("UP") &&
              first_arg_2.y < second_arg.pos.y &&
              Math.abs(first_arg_2.x - second_arg.pos.x) < 1) ||
            (second_arg.Ce.y > 0 &&
              second_arg.m7?.has("DOWN") &&
              first_arg_2.y > second_arg.pos.y &&
              Math.abs(first_arg_2.x - second_arg.pos.x) < 1)),
          (local_44 = first_arg.Yc.ka[0]),
          index(local_44) && num_30.push(local_44),
          fn_182(first_arg.settings, 7) &&
            ((local_44 = fn_226(first_arg.Yc, 0)), index(local_44) && num_30.push(local_44)));
        for (let local_46 of list_50.values())
          (fn_182(first_arg.settings, 11) && second_arg.dh !== local_46.dh) ||
            (fn_182(first_arg.settings, 17) && local_46.ix?.p$ === 0) ||
            local_46.r9 ||
            num_30.push(local_46.pos);
        for (let local_46 of fourth_arg)
          (fn_182(first_arg.settings, 11) && second_arg.dh !== local_46.dh) ||
            (num_30.push(local_46.pos),
            fn_182(first_arg.settings, 7) && num_30.push(fn_121(first_arg.oa, local_46.pos)));
        for (let local_46 of fifth_arg)
          (fn_182(first_arg.settings, 11) && second_arg.dh !== local_46.dh) ||
            (num_30.push(local_46.pos),
            fn_182(first_arg.settings, 7) && num_30.push(fn_121(first_arg.oa, local_46.pos)));
        for (let local_46 of num_30)
          (fn_40(local_46, second_arg.pos, obj_21),
            fn_182(first_arg.settings, 4) &&
              (local_46.x === 0
                ? fn_40(
                    new namespace.de(local_46.x + first_arg.oa.oa.width, local_46.y),
                    second_arg.pos,
                    obj_21
                  )
                : local_46.x === first_arg.oa.oa.width - 1 &&
                  fn_40(
                    new namespace.de(local_46.x - first_arg.oa.oa.width, local_46.y),
                    second_arg.pos,
                    obj_21
                  ),
              local_46.y === 0
                ? fn_40(
                    new namespace.de(local_46.x, local_46.y + first_arg.oa.oa.height),
                    second_arg.pos,
                    obj_21
                  )
                : local_46.y === first_arg.oa.oa.height - 1 &&
                  fn_40(
                    new namespace.de(local_46.x, local_46.y - first_arg.oa.oa.height),
                    second_arg.pos,
                    obj_21
                  ),
              local_46.x === 0 && local_46.y === 0
                ? fn_40(
                    new namespace.de(
                      local_46.x + first_arg.oa.oa.width,
                      local_46.y + first_arg.oa.oa.height
                    ),
                    second_arg.pos,
                    obj_21
                  )
                : local_46.x === first_arg.oa.oa.width - 1 &&
                  local_46.y === 0 &&
                  fn_40(
                    new namespace.de(
                      local_46.x - first_arg.oa.oa.width,
                      local_46.y + first_arg.oa.oa.height
                    ),
                    second_arg.pos,
                    obj_21
                  ),
              local_46.x === 0 && local_46.y === first_arg.oa.oa.height - 1
                ? fn_40(
                    new namespace.de(
                      local_46.x + first_arg.oa.oa.width,
                      local_46.y - first_arg.oa.oa.height
                    ),
                    second_arg.pos,
                    obj_21
                  )
                : local_46.x === first_arg.oa.oa.width - 1 &&
                  local_46.y === first_arg.oa.oa.height - 1 &&
                  fn_40(
                    new namespace.de(
                      local_46.x - first_arg.oa.oa.width,
                      local_46.y - first_arg.oa.oa.height
                    ),
                    second_arg.pos,
                    obj_21
                  )));
      }
      if (first_arg.ka.length > 1 || fn_184(first_arg.settings)) {
        list_50 = [];
        for (var list_51 of first_arg.ka)
          (fn_182(first_arg.settings, 11) && second_arg.dh !== list_51.dh) ||
            (list_50.push(list_51),
            fn_184(first_arg.settings) &&
              list_50.push({
                pos: fn_121(first_arg.oa, list_51.pos),
                mM: 0,
                type: -1,
                Qm: !1,
                Ce: new namespace.de(-list_51.Ce.x, -list_51.Ce.y),
                QG: list_51.QG.clone()
              }));
        if (fn_182(first_arg.settings, 4)) {
          list_51 = [];
          for (var local_45 of list_50)
            (list_51.push(local_45),
              list_51.push({
                pos: new namespace.de(
                  local_45.pos.x - first_arg.oa.oa.width,
                  local_45.pos.y - first_arg.oa.oa.height
                ),
                mM: 0,
                type: -1,
                Qm: !1,
                Ce: local_45.Ce.clone(),
                QG: local_45.QG.clone()
              }),
              list_51.push({
                pos: new namespace.de(local_45.pos.x, local_45.pos.y - first_arg.oa.oa.height),
                mM: 0,
                type: -1,
                Qm: !1,
                Ce: local_45.Ce.clone(),
                QG: local_45.QG.clone()
              }),
              list_51.push({
                pos: new namespace.de(
                  local_45.pos.x + first_arg.oa.oa.width,
                  local_45.pos.y - first_arg.oa.oa.height
                ),
                mM: 0,
                type: -1,
                Qm: !1,
                Ce: local_45.Ce.clone(),
                QG: local_45.QG.clone()
              }),
              list_51.push({
                pos: new namespace.de(local_45.pos.x - first_arg.oa.oa.width, local_45.pos.y),
                mM: 0,
                type: -1,
                Qm: !1,
                Ce: local_45.Ce.clone(),
                QG: local_45.QG.clone()
              }),
              list_51.push({
                pos: new namespace.de(local_45.pos.x + first_arg.oa.oa.width, local_45.pos.y),
                mM: 0,
                type: -1,
                Qm: !1,
                Ce: local_45.Ce.clone(),
                QG: local_45.QG.clone()
              }),
              list_51.push({
                pos: new namespace.de(
                  local_45.pos.x - first_arg.oa.oa.width,
                  local_45.pos.y + first_arg.oa.oa.height
                ),
                mM: 0,
                type: -1,
                Qm: !1,
                Ce: local_45.Ce.clone(),
                QG: local_45.QG.clone()
              }),
              list_51.push({
                pos: new namespace.de(local_45.pos.x, local_45.pos.y + first_arg.oa.oa.height),
                mM: 0,
                type: -1,
                Qm: !1,
                Ce: local_45.Ce.clone(),
                QG: local_45.QG.clone()
              }),
              list_51.push({
                pos: new namespace.de(
                  local_45.pos.x + first_arg.oa.oa.width,
                  local_45.pos.y + first_arg.oa.oa.height
                ),
                mM: 0,
                type: -1,
                Qm: !1,
                Ce: local_45.Ce.clone(),
                QG: local_45.QG.clone()
              }));
          list_50 = list_51;
        }
        for (let local_46 of list_50) {
          if (local_46.pos.equals(second_arg.pos)) continue;
          first_arg = Math.abs(local_46.pos.x - second_arg.pos.x) < 1;
          list_50 = Math.abs(local_46.pos.x - second_arg.pos.x) <= 1;
          list_51 = Math.abs(local_46.pos.y - second_arg.pos.y) <= 1;
          local_45 = list_50 && local_46.pos.x < second_arg.pos.x;
          list_50 = list_50 && local_46.pos.x > second_arg.pos.x;
          fourth_arg = list_51 && local_46.pos.y < second_arg.pos.y;
          list_51 = list_51 && local_46.pos.y > second_arg.pos.y;
          Math.abs(local_46.pos.y - second_arg.pos.y) < 1 &&
            (local_45 ? (obj_21.left = !0) : list_50 && (obj_21.right = !0));
          first_arg && (fourth_arg ? (obj_21.top = !0) : list_51 && (obj_21.bottom = !0));
          local_45 && fourth_arg
            ? (obj_21.topLeft = !0)
            : list_50 && fourth_arg
              ? (obj_21.topRight = !0)
              : list_50 && list_51
                ? (obj_21.bottomRight = !0)
                : local_45 && list_51 && (obj_21.bottomLeft = !0);
        }
      }
      return obj_21;
    },
    fn_93 = function (first_arg) {
      for (let num_30 = 0; num_30 + 1 < first_arg.ka.length; num_30 += 2) {
        let num_31 = Math.random() < 0.5;
        first_arg.ka[num_30].Mea = num_31;
        first_arg.ka[num_30 + 1].Mea = !num_31;
      }
    },
    fn_94 = function (first_arg, second_arg = !0) {
      var list_50 = [];
      for (let local_44 of first_arg.ka)
        if (local_44.dh === second_arg)
          if (fn_181(first_arg.settings)) {
            let de_6 = new namespace.de(
                Math.floor(local_44.pos.x + local_44.Ce.x),
                Math.floor(local_44.pos.y + local_44.Ce.y)
              ),
              de_7 = new namespace.de(
                Math.ceil(local_44.pos.x + local_44.Ce.x),
                Math.ceil(local_44.pos.y + local_44.Ce.y)
              );
            de_7.y >= 0 &&
              de_7.y < first_arg.oa.oa.height &&
              (de_7.x >= 0 && de_7.x < first_arg.oa.oa.width && list_50.push(de_7),
              de_6.x >= 0 &&
                de_6.x < first_arg.oa.oa.width &&
                list_50.push(new namespace.de(de_6.x, de_7.y)));
            de_6.y >= 0 &&
              de_6.y < first_arg.oa.oa.height &&
              (de_7.x >= 0 &&
                de_7.x < first_arg.oa.oa.width &&
                list_50.push(new namespace.de(de_7.x, de_6.y)),
              de_6.x >= 0 && de_6.x < first_arg.oa.oa.width && list_50.push(de_6));
          } else list_50.push(local_44.pos.clone());
      for (let local_44 of list_50)
        ((second_arg = fn_181(first_arg.settings) ? 3 : 2),
          (first_arg.oa.wa[local_44.y][local_44.x] = second_arg),
          fn_184(first_arg.settings) &&
            ((list_50 = fn_121(first_arg.oa, local_44)),
            (first_arg.oa.wa[list_50.y][list_50.x] = second_arg)));
    },
    cls_24 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
        this.settings = first_arg;
        this.oa = second_arg;
        this.Yc = third_arg;
        this.Aa = fourth_arg;
        this.Ca = fifth_arg;
        this.ka = [];
        this.wa = 1;
        this.Ba = !1;
      }
      reset() {
        this.ka = [];
        var local_44 = fn_186(this.settings),
          local_45 = this.settings.ka === 0 || this.settings.ka === 4 || this.settings.ka === 5,
          local_46 = this.settings.ka === 2 || this.settings.ka === 3 || this.settings.ka === 6;
        if (local_44) {
          if ((this.ka.push(fn_74(this, -1, -2)), this.ka.push(fn_74(this, -1, 2)), !local_45))
            if (this.settings.Aa !== 1) {
              this.ka.push(fn_74(this, -3, -3));
              this.ka.push(fn_74(this, -3, 3));
              this.ka.push(fn_74(this, -5, -4));
              this.ka.push(fn_74(this, -5, 4));
              local_46 &&
                (this.ka.push(fn_74(this, -7, -5)),
                this.ka.push(fn_74(this, -7, 5)),
                this.ka.push(fn_74(this, 1, -1)),
                this.ka.push(fn_74(this, 1, 1)),
                this.settings.ka === 3 &&
                  (this.ka.push(fn_74(this, 0, -2)),
                  this.ka.push(fn_74(this, 0, 2)),
                  this.ka.push(fn_74(this, -2, -3)),
                  this.ka.push(fn_74(this, -2, 3)),
                  this.ka.push(fn_74(this, -4, -4)),
                  this.ka.push(fn_74(this, -4, 4)),
                  this.ka.push(fn_74(this, -6, -5)),
                  this.ka.push(fn_74(this, -6, 5)),
                  this.ka.push(fn_74(this, 2, -1)),
                  this.ka.push(fn_74(this, 2, 1))));
              for (var local_47 of this.ka)
                local_47.pos.x +=
                  (this.settings.ka === 1 ? 2 : 1) - (this.settings.isMobile ? 1 : 0);
            } else {
              this.ka[0].pos.x += 2;
              this.ka[0].pos.y += 1;
              this.ka[1].pos.x += 2;
              --this.ka[1].pos.y;
              this.ka.push(fn_74(this, 0, -3));
              this.ka.push(fn_74(this, 0, 3));
              this.ka.push(fn_74(this, -2, -3));
              this.ka.push(fn_74(this, -2, 3));
              if (this.settings.isMobile) for (let local_55 of this.ka) --local_55.pos.x;
              local_46 &&
                (this.settings.isMobile && this.settings.ka === 2
                  ? (this.ka.push(fn_74(this, -2, -5)),
                    this.ka.push(fn_74(this, -2, 5)),
                    this.ka.push(fn_74(this, -4, -5)),
                    this.ka.push(fn_74(this, -4, 5)))
                  : (this.ka.push(fn_74(this, -4, -3)),
                    this.ka.push(fn_74(this, -4, 3)),
                    this.ka.push(fn_74(this, -6, -3)),
                    this.ka.push(fn_74(this, -6, 3)),
                    this.settings.ka === 3 &&
                      (this.ka.push(fn_74(this, 1, -2)),
                      this.ka.push(fn_74(this, 1, 2)),
                      this.ka.push(fn_74(this, 1, -3)),
                      this.ka.push(fn_74(this, 1, 3)),
                      this.ka.push(fn_74(this, -1, -3)),
                      this.ka.push(fn_74(this, -1, 3)),
                      this.ka.push(fn_74(this, -3, -3)),
                      this.ka.push(fn_74(this, -3, 3)),
                      this.ka.push(fn_74(this, -5, -3)),
                      this.ka.push(fn_74(this, -5, 3)))));
            }
        } else if (
          ((local_47 =
            !this.settings.isMobile &&
            fn_182(this.settings, 7) &&
            !fn_182(this.settings, 22) &&
            this.settings.Aa === 1 &&
            this.settings.ka === 3)
            ? this.ka.push(fn_74(this, 0, -1))
            : this.ka.push(fn_74(this, 0, 0)),
          !local_45 &&
            (this.ka.push(fn_74(this, -2, -2)), this.ka.push(fn_74(this, -2, 2)), local_46))
        ) {
          this.ka.push(fn_74(this, 2, -2));
          this.ka.push(fn_74(this, 2, 2));
          this.settings.ka === 3 &&
            (this.ka.push(fn_74(this, -4, -4)),
            this.ka.push(fn_74(this, 0, -4)),
            local_47 ? this.ka.push(fn_74(this, 0, 1)) : this.ka.push(fn_74(this, 4, 0)),
            this.ka.push(fn_74(this, -4, 4)),
            this.ka.push(fn_74(this, 0, 4)));
          for (var local_48 of this.ka)
            local_48.pos.x -=
              this.settings.Aa === 2 || (this.settings.Aa === 1 && this.settings.ka === 3) ? 2 : 1;
        }
        local_46 = Math.floor((this.Yc.ka[0].x + fn_226(this.Yc, 0).x) / 2);
        local_45 = this.oa.oa.width % 2 === 1;
        if (fn_182(this.settings, 7)) {
          local_46 = this.ka[0].pos.x - local_46;
          local_48 = this.oa.oa.height % 2 === 1;
          local_48 = this.settings.isMobile && local_45 && !local_48;
          local_47 = fn_182(this.settings, 7) && local_44;
          !local_45 || local_48 || local_47 || (local_46 += 1);
          this.settings.isMobile || this.settings.Aa === 1 || (local_46 += 1);
          for (let local_55 of this.ka) local_55.pos.x -= local_46;
          if (local_44) {
            local_44 = 0;
            for (var local_49 of this.ka) local_44 = Math.min(local_44, local_49.pos.x);
            if (local_44 < 0) for (var local_50 of this.ka) local_50.pos.x -= local_44;
          }
          local_49 =
            fn_182(this.settings, 2) && !fn_182(this.settings, 8) && !fn_182(this.settings, 9);
          if (!this.settings.isMobile && this.settings.ka === 0 && local_49)
            for (var local_51 of this.ka) --local_51.pos.x;
          if (fn_184(this.settings) && local_45 && this.settings.ka !== 0) {
            local_51 = !1;
            for (var local_52 of this.ka)
              local_52.pos.x === Math.floor(this.oa.oa.width / 2) && (local_51 = !0);
            if (local_51) for (var local_53 of this.ka) --local_53.pos.x;
          }
        }
        if (fn_182(this.settings, 11))
          for (
            local_52 = this.ka.length,
              local_53 =
                !this.settings.isMobile &&
                !fn_182(this.settings, 22) &&
                this.settings.Aa === 1 &&
                this.settings.ka === 3,
              local_51 = 0;
            local_51 < local_52;
            local_51++
          )
            ((local_49 = fn_74(this, 0, 0)),
              local_53
                ? ((local_49.pos.x = this.ka[local_51].pos.x - 1),
                  (local_49.pos.y = this.ka[local_51].pos.y))
                : ((local_49.pos.x = this.ka[local_51].pos.x),
                  (local_49.pos.y = this.ka[local_51].pos.y + 1),
                  --this.ka[local_51].pos.y),
              fn_186(this.settings) &&
                (this.settings.Aa !== 1 && this.settings.ka === 2
                  ? fn_182(this.settings, 7)
                    ? this.settings.Aa === 2
                      ? (local_49.pos.x -= 2)
                      : (--local_49.pos.x, (local_49.pos.y += 1))
                    : --local_49.pos.x
                  : this.settings.Aa === 1 &&
                    this.settings.ka !== 0 &&
                    (fn_182(this.settings, 7)
                      ? this.settings.ka === 1
                        ? (--local_49.pos.x, --local_49.pos.y)
                        : ((local_49.pos.x += 2), (this.ka[local_51].pos.y += 1))
                      : (--local_49.pos.x, (this.ka[local_51].pos.x += 1)))),
              (local_49.dh = !1),
              this.ka.push(local_49));
        if (fn_182(this.settings, 2)) fn_75(this);
        else for (var local_54 of this.ka) local_54.type = fn_76(this);
        for (local_54 = 0; local_54 < this.ka.length; local_54++) {
          local_52 = this.ka[local_54];
          local_53 = !1;
          fn_122(this.oa, local_52.pos) || (local_53 = !0);
          local_51 = fn_182(this.settings, 7) && fn_182(this.settings, 8);
          if (
            local_52.pos.equals(this.Yc.ka[0]) ||
            ((fn_184(this.settings) || local_51) &&
              fn_121(this.oa, local_52.pos).equals(this.Yc.ka[0]))
          )
            fn_182(this.settings, 22) || this.settings.La ? (local_53 = !0) : (local_52.pos.x += 1);
          for (local_51 = 1; local_51 < this.Yc.ka.length; local_51++)
            if (
              local_52.pos.equals(this.Yc.ka[local_51]) ||
              (fn_182(this.settings, 7) &&
                fn_121(this.oa, local_52.pos).equals(this.Yc.ka[local_51]))
            )
              local_53 = !0;
          local_51 = fn_182(this.settings, 7) && fn_182(this.settings, 8);
          local_49 = fn_184(this.settings) || local_51;
          for (local_50 = local_54 + 1; local_50 < this.ka.length; local_50++)
            if (
              ((local_44 = this.ka[local_50]),
              local_52.pos.equals(local_44.pos) ||
                (local_49 && fn_121(this.oa, local_52.pos).equals(local_44.pos)))
            )
              local_53 = !0;
          local_53 &&
            ((local_53 = fn_123(this.oa, null, local_51 ? 6 : 2))
              ? (local_52.pos = local_53)
              : fn_182(this.settings, 2)
                ? local_54 % 2 === 0
                  ? (this.ka.splice(local_54, 2), local_54--)
                  : (this.ka.splice(local_54 - 1, 2), (local_54 -= 2))
                : (this.ka.splice(local_54, 1), local_54--));
        }
        if (fn_181(this.settings))
          for (let local_55 of this.ka) fn_77(this, local_55, new Map(), [], new Set());
        if (fn_182(this.settings, 15))
          for (let local_55 of this.ka) local_55.m7 = fn_78(this, local_55.pos);
        this.settings.ka === 6 && (fn_79(this), (this.Ba = !1));
      }
      update() {
        for (let local_44 of this.ka)
          local_44.Qm ||
            ((local_44.mM = (local_44.mM + 1) % 6),
            fn_181(this.settings) &&
              (local_44.QG.x && (local_44.pos.x += local_44.Ce.x),
              local_44.QG.y && (local_44.pos.y += local_44.Ce.y),
              fn_182(this.settings, 4) &&
                (local_44.pos.x < 0
                  ? (local_44.pos.x += this.oa.oa.width)
                  : local_44.pos.x >= this.oa.oa.width && (local_44.pos.x -= this.oa.oa.width),
                local_44.pos.y < 0
                  ? (local_44.pos.y += this.oa.oa.height)
                  : local_44.pos.y >= this.oa.oa.height && (local_44.pos.y -= this.oa.oa.height))));
      }
      shuffle(first_arg) {
        for (let num_30 = this.ka.length - 1; num_30 > 0; num_30--) {
          let num_31 = Math.floor(Math.random() * (num_30 + 1));
          if (first_arg) {
            var dh = this.ka[num_30].dh;
            this.ka[num_30].dh = this.ka[num_31].dh;
            this.ka[num_31].dh = dh;
          }
          dh = this.ka[num_30];
          this.ka[num_30] = this.ka[num_31];
          this.ka[num_31] = dh;
        }
      }
      clear() {
        this.ka = [];
      }
      refresh() {
        for (let local_44 of this.ka) local_44.Qm = !1;
        this.Ba = !1;
      }
    };
  var obj_6 = {
      U3b: new namespace.tfF(
        "/logos/fnbx/snake_arcade/",
        "arrow_audio",
        { DOWN: 0, LEFT: 23, RIGHT: 46, UP: 69 },
        418
      )
    },
    obj_7 = {
      DOWN: new namespace.Z6(obj_6.U3b, "DOWN", 287.347),
      LEFT: new namespace.Z6(obj_6.U3b, "LEFT", 287.347),
      RIGHT: new namespace.Z6(obj_6.U3b, "RIGHT", 287.347),
      UP: new namespace.Z6(obj_6.U3b, "UP", 287.347)
    },
    cls_25 = class extends namespace.pfF {
      constructor() {
        super(obj_6, obj_7);
      }
    };
  var fn_95 = function (
      first_arg,
      second_arg,
      third_arg,
      fourth_arg,
      fifth_arg,
      sixth_arg,
      seventh_arg,
      eighth_arg
    ) {
      first_arg.ka.save();
      first_arg.ka.translate(fourth_arg + sixth_arg, fifth_arg + sixth_arg);
      fourth_arg = second_arg.direction;
      fourth_arg === "UP"
        ? first_arg.ka.rotate(-Math.PI / 2)
        : fourth_arg === "DOWN"
          ? first_arg.ka.rotate(Math.PI / 2)
          : fourth_arg === "LEFT" && first_arg.ka.rotate(Math.PI);
      fourth_arg = second_arg.Qm ? third_arg : 1;
      fn_182(first_arg.settings, 11) &&
        (first_arg.ka.globalAlpha = fn_253(first_arg.ub, third_arg, second_arg.dh, {
          R6: 0.3,
          WR: !1
        }));
      if (first_arg.settings.bN())
        for (
          first_arg.ka.fillStyle = second_arg.color,
            eighth_arg = (seventh_arg / 2) * fourth_arg,
            second_arg = eighth_arg / 2,
            third_arg = (eighth_arg * 3) / 2,
            seventh_arg = 0;
          seventh_arg < 3;
          seventh_arg++
        )
          (first_arg.ka.fillRect(
            third_arg - second_arg - seventh_arg * eighth_arg,
            -second_arg - seventh_arg * eighth_arg,
            eighth_arg,
            eighth_arg
          ),
            seventh_arg > 0 &&
              first_arg.ka.fillRect(
                third_arg - second_arg - seventh_arg * eighth_arg,
                -second_arg + seventh_arg * eighth_arg,
                eighth_arg,
                eighth_arg
              ));
      else
        ((first_arg.ka.strokeStyle = second_arg.color),
          (second_arg = seventh_arg * fourth_arg),
          (eighth_arg *= fourth_arg),
          first_arg.ka.beginPath(),
          first_arg.ka.moveTo(-eighth_arg, -second_arg),
          first_arg.ka.lineTo(eighth_arg, 0),
          first_arg.ka.lineTo(-eighth_arg, second_arg),
          first_arg.ka.stroke());
      first_arg.ka.restore();
      first_arg.ka.globalAlpha = 1;
    },
    cls_26 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg) {
        this.ub = first_arg;
        this.settings = second_arg;
        this.ka = third_arg;
        this.oa = fourth_arg;
      }
      render(first_arg) {
        var ka = this.ub.ka.ka;
        this.ka.lineWidth = ka / 8;
        this.ka.lineCap = "butt";
        this.ka.setLineDash([]);
        var num_30 = ka / 2,
          num_31 = num_30 * 0.6,
          num_32 = Math.sqrt((3 * Math.pow(num_31, 2)) / 4),
          ka_2 = this.ub.Ba.ka;
        for (let index = 0; index < this.ub.ka.oa.height; index++)
          for (let index_2 = 0; index_2 < this.ub.ka.oa.width; index_2++) {
            let local_44 = ka_2[index][index_2];
            if (
              local_44.direction !== "NONE" &&
              (fn_95(this, local_44, first_arg, index_2 * ka, index * ka, num_30, num_31, num_32),
              fn_182(this.settings, 4))
            )
              for (let local_45 of this.ub.kb)
                fn_95(
                  this,
                  local_44,
                  first_arg,
                  index_2 * ka + local_45.x,
                  index * ka + local_45.y,
                  num_30,
                  num_31,
                  num_32
                );
          }
      }
    };
  var fn_96 = function (first_arg, second_arg, third_arg) {
      var local_44 = first_arg.ka[second_arg.y][second_arg.x];
      if (third_arg)
        switch (local_44.direction) {
          case "DOWN":
            obj_7.DOWN.play();
            break;
          case "UP":
            obj_7.UP.play();
            break;
          case "LEFT":
            obj_7.LEFT.play();
            break;
          case "RIGHT":
            obj_7.RIGHT.play();
        }
      local_44.direction = "NONE";
      local_44.Qm = !1;
      fn_182(first_arg.settings, 7) &&
        ((second_arg = fn_121(first_arg.oa, second_arg)),
        (first_arg = first_arg.ka[second_arg.y][second_arg.x]),
        (first_arg.direction = "NONE"),
        (first_arg.Qm = !1));
    },
    fn_97 = function (first_arg, second_arg) {
      return fn_122(first_arg.oa, second_arg) ? first_arg.ka[second_arg.y][second_arg.x].dh : !1;
    },
    fn_98 = function (first_arg, second_arg) {
      return fn_122(first_arg.oa, second_arg)
        ? first_arg.ka[second_arg.y][second_arg.x].direction
        : "NONE";
    },
    fn_99 = function (first_arg, second_arg, third_arg) {
      var local_44 = first_arg.ka[third_arg.y][third_arg.x];
      local_44.direction = second_arg;
      local_44.Qm = !0;
      local_44.dh = !0;
      var num_30 = first_arg.settings.wa === 10;
      var local_45 = num_30
        ? first_arg.wa(1, Math.floor(Math.random() * split_2.length), 0, !1, !1)
        : split[first_arg.settings.wa];
      local_44.color = local_45;
      fn_182(first_arg.settings, 7) &&
        ((third_arg = fn_121(first_arg.oa, third_arg)),
        (third_arg = first_arg.ka[third_arg.y][third_arg.x]),
        (third_arg.direction = fn_45(second_arg)),
        (third_arg.Qm = !0),
        (third_arg.dh = !0),
        (first_arg = num_30
          ? first_arg.wa(1, Math.floor(Math.random() * split_2.length), 0, !0, !1)
          : split[list_9[first_arg.settings.wa]]),
        (third_arg.color = first_arg));
    },
    cls_27 = class {
      constructor(first_arg, second_arg, third_arg) {
        this.settings = first_arg;
        this.oa = second_arg;
        this.wa = third_arg;
        this.ka = [];
      }
      reset() {
        this.ka = [];
        for (let index = 0; index < this.oa.oa.height; index++) {
          this.ka.push([]);
          for (let index_2 = 0; index_2 < this.oa.oa.width; index_2++)
            this.ka[index].push({ direction: "NONE", Qm: !1, color: "", dh: !0 });
        }
      }
      refresh() {
        for (let index = 0; index < this.oa.oa.height; index++)
          for (let index_2 = 0; index_2 < this.oa.oa.width; index_2++)
            this.ka[index][index_2].Qm = !1;
      }
    };
  var list_20 = ["UP", "DOWN", "LEFT", "RIGHT"],
    list_21 = [0, 0, -1, 1],
    list_22 = [-1, 1, 0, 0],
    list_23 = [1, 0, 3, 2],
    map_2 = new Map([
      ["UP", 0],
      ["DOWN", 1],
      ["LEFT", 2],
      ["RIGHT", 3]
    ]);
  var fn_100 = function (first_arg, second_arg) {
      if (!fn_182(first_arg.settings, 7)) return !1;
      var ka = first_arg.ub.ka;
      for (let local_44 of first_arg.ub.Yc.ka)
        if (first_arg.indexOf(fn_121(ka, local_44)) === second_arg) return !0;
      return !1;
    },
    fn_101 = function (first_arg, second_arg, third_arg) {
      return second_arg < 0 ||
        second_arg >= first_arg.width ||
        third_arg < 0 ||
        third_arg >= first_arg.height
        ? -1
        : third_arg * first_arg.width + second_arg;
    },
    fn_102 = function (first_arg, second_arg) {
      return !fn_182(first_arg.settings, 7) || second_arg < 0 ? -1 : first_arg.pF - 1 - second_arg;
    },
    fn_103 = function (first_arg) {
      var oa = first_arg.ub.oa,
        local_44 = fn_182(first_arg.settings, 15),
        local_45 = fn_182(first_arg.settings, 21),
        local_46 = fn_182(first_arg.settings, 6) && !fn_182(first_arg.settings, 18),
        local_47 = local_46 ? 0 : 1;
      for (let local_48 of oa.ka) {
        if (!local_48.dh) continue;
        let local_49 = fn_54(first_arg.settings.ka, local_48.sequenceNumber, oa.wa),
          num_30 = 0,
          num_31 = 0;
        if (local_44 && local_48.m7)
          for (let local_51 of local_48.m7) {
            var get_value = map_2.get(fn_45(local_51));
            get_value !== void 0 && (num_30 |= 1 << get_value);
            get_value = map_2.get(local_51);
            get_value !== void 0 && (num_31 |= 1 << get_value);
          }
        let local_50 = local_49 && !local_45;
        fn_106(first_arg, local_48, 2, (first_arg_2) => {
          var local_51 = fn_102(first_arg, first_arg_2);
          first_arg.mV[first_arg_2] |= num_30;
          local_51 >= 0 && (first_arg.mV[local_51] |= num_31);
          if (local_48.Mea || local_50)
            (fn_105(first_arg, first_arg_2, local_50), fn_105(first_arg, local_51, local_50));
        });
        local_48.Mea ||
          local_49 ||
          (fn_107(first_arg, local_48.pos, (first_arg_2) => {
            first_arg.qha[first_arg_2] |= local_47;
            first_arg.wa[first_arg_2] = 1;
            first_arg_2 = fn_102(first_arg, first_arg_2);
            first_arg_2 >= 0 &&
              ((first_arg.qha[first_arg_2] |= local_47), (first_arg.wa[first_arg_2] = 1));
          }),
          local_46 && fn_108(first_arg, local_48));
      }
    },
    fn_104 = function (first_arg, second_arg, third_arg) {
      third_arg = Math.min(third_arg, first_arg.Ga - 1);
      return (
        first_arg.qha[second_arg] === 1 || first_arg.Ia[third_arg * first_arg.pF + second_arg] === 1
      );
    },
    fn_105 = function (first_arg, second_arg, third_arg) {
      second_arg < 0 ||
        ((first_arg.Ca[second_arg] =
          third_arg || (first_arg.Ca[second_arg] !== 1 && first_arg.blocked[second_arg]) ? 0 : 1),
        (first_arg.blocked[second_arg] = 1));
    },
    fn_106 = function (first_arg, second_arg, third_arg, fn_457) {
      if (fn_181(first_arg.settings)) {
        var ya_2 = first_arg.Ya,
          oa = first_arg.Oa,
          ce = oa.Ce;
        oa = oa.QG;
        ya_2.x = second_arg.pos.x;
        ya_2.y = second_arg.pos.y;
        ce.x = second_arg.Ce.x;
        ce.y = second_arg.Ce.y;
        oa.x = second_arg.QG.x;
        oa.y = second_arg.QG.y;
        for (let index = 0; index <= third_arg; index++)
          (index > 0 && fn_109(first_arg, ya_2, index, second_arg),
            fn_107(first_arg, ya_2, (first_arg_2) => {
              fn_457(first_arg_2, index);
            }));
      } else
        fn_107(first_arg, second_arg.pos, (first_arg_2) => {
          fn_457(first_arg_2, 0);
        });
    },
    fn_107 = function (first_arg, second_arg, fn_457) {
      if (fn_181(first_arg.settings))
        for (let num_30 = Math.floor(second_arg.y); num_30 <= Math.ceil(second_arg.y); num_30++)
          for (let num_31 = Math.floor(second_arg.x); num_31 <= Math.ceil(second_arg.x); num_31++) {
            let local_44 = fn_101(first_arg, num_31, num_30);
            local_44 >= 0 &&
              (num_31 - second_arg.x) * (num_31 - second_arg.x) +
                (num_30 - second_arg.y) * (num_30 - second_arg.y) <
                1 &&
              fn_457(local_44);
          }
      else ((first_arg = first_arg.indexOf(second_arg)), first_arg >= 0 && fn_457(first_arg));
    },
    fn_108 = function (first_arg, second_arg) {
      fn_106(first_arg, second_arg, first_arg.Ga + 1, (first_arg_2, second_arg_2) => {
        var local_44 = fn_102(first_arg, first_arg_2),
          num_30 = Math.min(second_arg_2 - 1, first_arg.Ga - 1);
        for (second_arg_2 = Math.max(0, second_arg_2 - 2); second_arg_2 <= num_30; second_arg_2++)
          ((first_arg.Ia[second_arg_2 * first_arg.pF + first_arg_2] = 1),
            local_44 >= 0 && (first_arg.Ia[second_arg_2 * first_arg.pF + local_44] = 1));
      });
    },
    fn_109 = function (first_arg, second_arg, third_arg, fourth_arg) {
      var oa = first_arg.Oa,
        ce = oa.Ce;
      oa = oa.QG;
      var local_44 = fn_182(first_arg.settings, 4);
      if (third_arg > 1 || !fourth_arg.Qm)
        ((second_arg.x += ce.x * oa.x),
          (second_arg.y += ce.y * oa.y),
          local_44 &&
            ((second_arg.x = (second_arg.x + first_arg.width) % first_arg.width),
            (second_arg.y = (second_arg.y + first_arg.height) % first_arg.height)));
      ce = {};
      local_44 || fn_39(second_arg, first_arg.ub.ka.oa, ce);
      if (second_arg.x % 1 === 0 || second_arg.y % 1 === 0)
        for (
          fn_110(first_arg, fourth_arg.dh), fourth_arg = Math.floor(second_arg.y) - 1;
          fourth_arg <= Math.ceil(second_arg.y) + 1;
          fourth_arg++
        )
          for (
            let num_30 = Math.floor(second_arg.x) - 1;
            num_30 <= Math.ceil(second_arg.x) + 1;
            num_30++
          ) {
            let local_45 = local_44
              ? fn_101(first_arg, first_arg.Cwa(num_30), first_arg.RCa(fourth_arg))
              : fn_101(first_arg, num_30, fourth_arg);
            local_45 >= 0 &&
              first_arg.Qa[local_45] > third_arg &&
              ((first_arg.Ta.x = num_30),
              (first_arg.Ta.y = fourth_arg),
              fn_40(first_arg.Ta, second_arg, ce));
          }
      oa.x = 1;
      oa.y = 1;
      fn_41(first_arg.Oa, ce, !1);
    },
    fn_110 = function (first_arg, second_arg) {
      if (first_arg.Ra !== second_arg) {
        first_arg.Ra = second_arg;
        var qa = first_arg.Qa;
        qa.fill(0);
        var local_44 = fn_182(first_arg.settings, 11),
          local_45 = fn_182(first_arg.settings, 3),
          fn_457 = (first_arg_2, second_arg_2, third_arg) => {
            for (let local_46 of [
              first_arg.indexOf(first_arg_2),
              third_arg ? fn_102(first_arg, first_arg.indexOf(first_arg_2)) : -1
            ])
              local_46 >= 0 && qa[local_46] < second_arg_2 && (qa[local_46] = second_arg_2);
          },
          ub = first_arg.ub,
          yc = ub.Yc,
          vw = ub.Vw,
          g_n = ub.gN;
        ub = ub.mA;
        var ka = yc.ka;
        for (let index = 0; index < ka.length; index++) {
          let local_46 = ka[index];
          (local_44 && yc.wa[index] !== second_arg) ||
            (local_45 && (local_46.x + local_46.y) % 2 !== 1) ||
            fn_457(local_46, ka.length - index + yc.Ra, !0);
        }
        for (let local_46 of vw.wa.values())
          ((local_45 = local_46.ix?.p$ ?? 2147483647),
            local_46.r9 ||
              !(local_45 > 0) ||
              (local_44 && local_46.dh !== second_arg) ||
              fn_457(local_46.pos, local_45, !1));
        for (let local_46 of [...g_n.keys, ...ub.cK])
          (local_44 && local_46.dh !== second_arg) || fn_457(local_46.pos, 2147483647, !0);
      }
    },
    fn_111 = function (first_arg, second_arg) {
      var local_44 = second_arg.pos.x,
        local_45 = second_arg.pos.y;
      if (fn_181(first_arg.settings)) {
        let local_46 = fn_182(first_arg.settings, 18);
        local_44 % 1 !== 0 &&
          (local_44 -= local_46 && second_arg.Ce.x === 0 ? second_arg.EXa.x : second_arg.Ce.x);
        local_45 % 1 !== 0 &&
          (local_45 -= local_46 && second_arg.Ce.y === 0 ? second_arg.EXa.y : second_arg.Ce.y);
        fn_182(first_arg.settings, 4) &&
          ((local_44 = first_arg.Cwa(local_44)), (local_45 = first_arg.RCa(local_45)));
      }
      return fn_101(first_arg, local_44, local_45);
    },
    fn_112 = function (first_arg, second_arg) {
      fn_182(first_arg.settings, 21) ||
        fn_107(first_arg, second_arg, (first_arg_2) => {
          for (let local_44 of [first_arg_2, fn_102(first_arg, first_arg_2)])
            local_44 >= 0 && ((first_arg.blocked[local_44] = 1), (first_arg.Ca[local_44] = 0));
        });
    },
    cls_28 = class {
      constructor(first_arg, second_arg) {
        this.settings = first_arg;
        this.ub = second_arg;
        this.pF = this.height = this.width = 0;
        this.La = !1;
        this.transitions = new Int32Array(0);
        this.blocked = new Uint8Array(0);
        this.mV = new Uint8Array(0);
        this.Mna = new Int8Array(0);
        this.oa = new Int32Array(0);
        this.Ba = new Float64Array(0);
        this.qha = new Uint8Array(0);
        this.wa = new Uint8Array(0);
        this.Vda = new Uint8Array(0);
        this.Ka = new Uint8Array(0);
        this.CSa = new Int32Array(0);
        this.ka = new Uint8Array(0);
        this.Ca = new Uint8Array(0);
        this.Ia = new Uint8Array(0);
        this.Ga = 0;
        this.Aa = new namespace.de(0, 0);
        this.Ya = new namespace.de(0, 0);
        this.Oa = {
          Ce: new namespace.de(0, 0),
          QG: new namespace.de(0, 0),
          EXa: new namespace.de(0, 0)
        };
        this.Ta = new namespace.de(0, 0);
        this.Qa = new Int32Array(0);
        this.Ra = void 0;
      }
      read() {
        var ka = this.ub.ka;
        this.ub.Ka();
        if (fn_126(ka)) return ((this.pF = this.height = this.width = 0), !1);
        fn_181(this.settings) && fn_229(this.ub.Yc);
        var width = ka.oa.width,
          height = ka.oa.height;
        if (this.width !== width || this.height !== height)
          ((this.width = width),
            (this.height = height),
            (this.pF = width * height),
            (this.transitions = new Int32Array(this.pF * 4)),
            (this.blocked = new Uint8Array(this.pF)),
            (this.mV = new Uint8Array(this.pF)),
            (this.Mna = new Int8Array(this.pF)),
            (this.oa = new Int32Array(this.pF)),
            (this.Ba = new Float64Array(this.pF)),
            (this.qha = new Uint8Array(this.pF)),
            (this.wa = new Uint8Array(this.pF)),
            (this.Vda = new Uint8Array(this.pF)),
            (this.Ka = new Uint8Array(this.pF)),
            (this.CSa = new Int32Array(this.pF * 4)),
            (this.ka = new Uint8Array(this.pF)),
            (this.Ca = new Uint8Array(this.pF)),
            (this.Qa = new Int32Array(this.pF)),
            (this.Ga = 2 * (width + height)),
            (this.Ia = new Uint8Array(this.Ga * this.pF)));
        if (this.pF === 0) return !1;
        this.La = fn_188(this.settings);
        this.Ra = void 0;
        var wa_2 = this.ub.ka.wa;
        for (let index = 0; index < this.height; index++)
          for (let index_2 = 0; index_2 < this.width; index_2++) {
            let local_71 = fn_101(this, index_2, index);
            var local_44 = wa_2[index][index_2];
            this.blocked[local_71] =
              local_44 === 1 ||
              local_44 === 5 ||
              local_44 === 11 ||
              local_44 === 12 ||
              local_44 === 9 ||
              local_44 === 7
                ? 1
                : 0;
            this.mV[local_71] = 0;
            this.Mna[local_71] = -1;
            this.oa[local_71] = -1;
            this.Ba[local_71] = 0;
            this.qha[local_71] = 0;
            this.wa[local_71] = 0;
            this.Vda[local_71] = 0;
            this.Ka[local_71] = 0;
            this.ka[local_71] = 0;
            this.Ca[local_71] = 0;
            for (let index_3 = 0; index_3 < 4; index_3++) this.CSa[local_71 * 4 + index_3] = -1;
          }
        this.Ia.fill(0);
        for (let local_71 of this.ub.Vw.wa.values())
          if (local_71.r9 && fn_213(local_71)) {
            let local_72 = fn_101(this, local_71.pos.x, local_71.pos.y);
            local_72 >= 0 && (this.blocked[local_72] = 1);
          }
        if (fn_182(this.settings, 7)) {
          var ka_2 = this.ub.ka;
          for (let local_71 of this.ub.Yc.ka) {
            let local_72 = fn_121(ka_2, local_71),
              local_73 = fn_101(this, local_72.x, local_72.y);
            local_73 >= 0 && (this.blocked[local_73] = 1);
          }
        }
        if (fn_182(this.settings, 16)) {
          var ba = this.ub.Ba;
          for (let index = 0; index < this.height; index++)
            for (let index_2 = 0; index_2 < this.width; index_2++) {
              this.Aa.x = index_2;
              this.Aa.y = index;
              if (!fn_97(ba, this.Aa)) continue;
              let get_value = map_2.get(fn_98(ba, this.Aa));
              if (get_value === void 0) continue;
              let local_71 = fn_101(this, index_2, index);
              this.Mna[local_71] = get_value;
              this.mV[local_71] |= 1 << list_23[get_value];
            }
        }
        if (fn_182(this.settings, 12))
          for (let local_71 of this.ub.Ga.oa) {
            if (!local_71.dh) continue;
            let num_33 = local_71.pLa < 0,
              local_72 = num_33 ? -1 : local_71.pLa - 1,
              local_73 = num_33 ? 0.25 : 6;
            for (let num_34 = -1; num_34 <= 1; num_34++)
              for (let num_35 = -1; num_35 <= 1; num_35++) {
                let local_74 = fn_101(this, local_71.pos.x + num_35, local_71.pos.y + num_34);
                local_74 < 0 ||
                  ((this.Ba[local_74] += local_73),
                  local_72 >= 0 &&
                    (this.oa[local_74] === -1 || local_72 < this.oa[local_74]) &&
                    (this.oa[local_74] = local_72));
              }
          }
        var local_45 = fn_182(this.settings, 19),
          local_46 = fn_182(this.settings, 20);
        for (let index = 0; index < this.height; index++)
          for (let index_2 = 0; index_2 < this.width; index_2++) {
            let local_71 = fn_101(this, index_2, index);
            for (let index_3 = 0; index_3 < 4; index_3++) {
              var transitions = this.transitions,
                local_47 = local_71 * 4 + index_3;
              a: {
                var local_48 = index_2,
                  local_49 = index,
                  local_50 = index_3;
                let local_72 = local_48,
                  local_73 = local_49,
                  num_33 = !1;
                if (local_45) {
                  this.Aa.x = local_48;
                  this.Aa.y = local_49;
                  let local_74 = fn_197(this.ub.Ca, this.Aa, list_20[local_50]);
                  local_74 && ((local_72 = local_74.x), (local_73 = local_74.y), (num_33 = !0));
                }
                if (
                  !num_33 &&
                  ((local_72 += list_21[local_50]),
                  (local_73 += list_22[local_50]),
                  this.La && ((local_72 = this.Cwa(local_72)), (local_73 = this.RCa(local_73))),
                  fn_101(this, local_72, local_73) < 0)
                ) {
                  var num_30 = -1;
                  break a;
                }
                if (local_46) {
                  let oa = this.ub.wa.oa,
                    index_4 = 0;
                  for (
                    ;
                    local_73 >= 0 &&
                    local_73 < this.height &&
                    local_72 >= 0 &&
                    local_72 < this.width &&
                    oa[local_73]?.[local_72]?.dh;
                  ) {
                    if (++index_4 > 1024) {
                      num_30 = -1;
                      break a;
                    }
                    local_72 += list_21[local_50];
                    local_73 += list_22[local_50];
                    this.La && ((local_72 = this.Cwa(local_72)), (local_73 = this.RCa(local_73)));
                  }
                }
                num_30 = fn_101(this, local_72, local_73);
              }
              transitions[local_47] = num_30;
            }
          }
        if (fn_182(this.settings, 7))
          for (let index = 0; index < this.pF; index++)
            for (let index_2 = 0; index_2 < 4; index_2++)
              this.transitions[index * 4 + index_2] === fn_102(this, index) &&
                (this.transitions[index * 4 + index_2] = -1);
        fn_103(this);
        if (fn_182(this.settings, 2)) {
          var ka_3 = this.ub.oa.ka;
          for (let num_33 = 0; num_33 + 1 < ka_3.length; num_33 += 2) {
            let local_71 = ka_3[num_33],
              local_72 = ka_3[num_33 + 1];
            if (!local_71.dh || !local_72.dh) continue;
            let local_73 = fn_111(this, local_71),
              local_74 = fn_111(this, local_72);
            if (
              !(local_73 < 0 || local_74 < 0 || local_73 === local_74) &&
              this.wa[local_73] &&
              this.wa[local_74]
            )
              for (let index = 0; index < 4; index++) {
                let local_75 = this.transitions[local_73 * 4 + index];
                this.transitions[local_73 * 4 + index] = this.transitions[local_74 * 4 + index];
                this.transitions[local_74 * 4 + index] = local_75;
              }
          }
        }
        for (let local_71 of this.ub.gN.keys) {
          if (!local_71.dh) continue;
          let pos = this.indexOf(local_71.pos);
          if (pos < 0) continue;
          if (fn_54(this.settings.ka, local_71.sequenceNumber, this.ub.oa.wa)) {
            fn_112(this, local_71.pos);
            continue;
          }
          this.qha[pos] = 1;
          let local_72 = fn_102(this, pos);
          local_72 >= 0 && (this.qha[local_72] = 1);
        }
        var settings = this.settings,
          ub = this.ub;
        if (fn_182(settings, 9)) {
          var targets = ub.mA.targets;
          for (let local_71 of targets) {
            let pos = this.indexOf(local_71);
            pos >= 0 && (this.Ka[pos] = 1);
          }
          var ka_4 = settings.ka,
            wa_3 = ub.oa.wa,
            local_51 = fn_182(settings, 21),
            list_50 = [];
          for (let local_71 of ub.mA.cK) {
            if (!local_71.dh || fn_54(ka_4, local_71.sequenceNumber, wa_3)) continue;
            let pos = this.indexOf(local_71.pos);
            pos >= 0 && ((this.Vda[pos] = 1), list_50.push(pos));
          }
          if (list_50.length !== 0) {
            let fill = new Int32Array(this.pF * 4).fill(-1);
            for (let index = 0; index < this.pF; index++)
              if (!fn_60(this, ub, index))
                for (let index_2 = 0; index_2 < 4; index_2++) {
                  let local_73 = this.transitions[index * 4 + index_2];
                  if (
                    local_73 < 0 ||
                    this.mV[local_73] & (1 << index_2) ||
                    fn_60(this, ub, local_73) ||
                    (this.Vda[index] && this.Vda[local_73])
                  )
                    continue;
                  let local_74 = this.Vda[index] ? index : this.Vda[local_73] ? local_73 : -2,
                    local_75 = list_23[index_2],
                    local_76 = this.Mna[local_73];
                  for (let index_3 = 0; index_3 < 4; index_3++) {
                    let local_77 = this.transitions[local_73 * 4 + index_3];
                    if (
                      local_77 < 0 ||
                      index_3 === local_75 ||
                      (local_76 >= 0 && local_76 !== index_3)
                    )
                      continue;
                    let local_78 = local_77 * 4 + index_3;
                    fill[local_78] =
                      fill[local_78] === -1 || fill[local_78] === local_74 ? local_74 : -2;
                  }
                }
            var local_52 = fill;
            let local_71 = fn_182(settings, 21),
              local_72 = fn_182(settings, 4),
              de_6 = new namespace.de(0, 0);
            for (let index = 0; index < this.pF; index++) {
              let num_33 = index % this.width,
                num_34 = (index - num_33) / this.width;
              for (let index_2 = 0; index_2 < 4; index_2++) {
                let local_73 = index * 4 + index_2,
                  local_74 = local_52[local_73];
                if (
                  local_74 === -1 ||
                  (this.Vda[index] === 1 && local_74 >= 0 && local_74 !== index)
                ) {
                  this.CSa[local_73] = -1;
                  this.ka[index] |= 1 << index_2;
                  continue;
                }
                let [local_75, local_76, local_77] = fn_62(
                    this,
                    settings,
                    ub,
                    de_6,
                    num_33,
                    num_34,
                    index_2
                  ),
                  local_78 = fn_101(this, local_75, local_76);
                if (local_78 < 0)
                  ((this.CSa[local_73] = local_77 && !local_72 ? -1 : -2),
                    !local_77 || local_72 || local_71 || (this.ka[index] |= 1 << index_2));
                else if (fn_61(this, ub, local_78, index_2))
                  ((this.CSa[local_73] = -1), local_71 || (this.ka[index] |= 1 << index_2));
                else {
                  var csa = this.CSa;
                  a: {
                    var local_53 = settings,
                      local_54 = ub,
                      local_55 = de_6,
                      local_56 = index;
                    let local_79 = local_78;
                    for (let index_3 = 0; index_3 < this.pF && this.Mna[local_79] >= 0; index_3++) {
                      let num_35 = local_79 % this.width,
                        local_80 = this.Mna[local_79],
                        [local_81, local_82, local_83] = fn_62(
                          this,
                          local_53,
                          local_54,
                          local_55,
                          num_35,
                          (local_79 - num_35) / this.width,
                          local_80
                        ),
                        local_84 = fn_101(this, local_81, local_82);
                      if (local_84 < 0) {
                        var local_57 = local_83 && !local_72 ? local_79 : -2;
                        break a;
                      }
                      if (local_84 !== local_56 && fn_61(this, local_54, local_84, local_80)) {
                        local_57 = -2;
                        break a;
                      }
                      if (local_84 === local_78) break;
                      local_79 = local_84;
                    }
                    local_57 = local_79;
                  }
                  csa[local_73] = local_57;
                  var local_58;
                  if ((local_58 = !local_71)) {
                    let num_35 = local_78 % this.width;
                    local_58 =
                      ub.ka.wa[(local_78 - num_35) / this.width][num_35] === 1 ||
                      fn_100(this, local_78);
                  }
                  local_58 && (this.ka[index] |= 1 << index_2);
                }
              }
            }
            var local_59 = fn_57(this),
              ka_5 = ub.Yc.ka,
              local_60 = ka_5.length > 0 ? this.indexOf(ka_5[0]) : -1,
              local_61 = fn_45(fn_228(ub.Yc)),
              num_31 = !1,
              uint8_array = new Uint8Array(list_50.length),
              local_62 = fn_56(this, local_52, local_59, list_50, targets);
            for (let index = 0; index < list_50.length; index++) {
              let local_73 = list_50[index],
                local_74 = local_62[index],
                local_75 = fn_58(this, local_52, local_59, local_73),
                num_33 = 0,
                num_34 = 0,
                local_76 = local_74[local_73],
                local_77 = local_75[local_73],
                num_35 = this.Mna[local_73] >= 0;
              for (let index_2 = 0; index_2 < 4; index_2++) {
                let local_78 = this.CSa[local_73 * 4 + index_2],
                  local_79 =
                    local_76 < 0 &&
                    local_77 > 0 &&
                    (local_78 === -2 ||
                      (local_78 >= 0 && local_75[local_78] >= 0 && local_75[local_78] < local_77));
                if (
                  (local_76 > 0 &&
                    local_78 >= 0 &&
                    local_74[local_78] >= 0 &&
                    local_74[local_78] < local_76) ||
                  local_79
                ) {
                  var local_63;
                  if (!(local_63 = num_35)) {
                    a: {
                      var local_64 = ub,
                        local_65 = local_73,
                        local_66 = index_2;
                      let num_37 = !(this.ka[local_65] & (1 << local_66));
                      for (let index_3 = 0; index_3 < this.pF; index_3++)
                        if (
                          fn_59(this, local_64, index_3, local_65, local_66) &&
                          !this.Vda[index_3] &&
                          (index_3 === local_60 ? num_37 : !this.blocked[index_3])
                        ) {
                          var num_32 = !0;
                          break a;
                        }
                      num_32 = !1;
                    }
                    local_63 = !num_32;
                  }
                  local_63 ? (num_34 |= 1 << index_2) : (num_33 |= 1 << index_2);
                }
              }
              let num_36 = 0;
              for (let index_2 = 0; local_60 >= 0 && index_2 < 4; index_2++)
                num_33 & (1 << index_2) &&
                  !(this.ka[local_73] & (1 << index_2)) &&
                  list_20[index_2] !== local_61 &&
                  this.transitions[local_60 * 4 + index_2] === local_73 &&
                  (num_36 |= 1 << index_2);
              num_36 !== 0 && ((num_33 = num_36), (num_34 = 0), (num_31 = !0));
              uint8_array[index] = num_33 | num_34;
              num_33 === 0 ||
                fn_100(this, local_73) ||
                ((this.blocked[local_73] = 0),
                (this.mV[local_73] |= ~num_33 & 15),
                (this.qha[local_73] = 1));
              for (let index_2 = 0; num_34 !== 0 && index_2 < 4; index_2++)
                if (num_34 & (1 << index_2)) {
                  var local_67,
                    local_68 = ub,
                    local_69 = local_73,
                    local_70 = index_2;
                  for (let index_3 = 0; index_3 < this.pF; index_3++)
                    if (fn_59(this, local_68, index_3, local_69, local_70) && !this.Vda[index_3])
                      if (this.blocked[index_3])
                        for (let index_4 = 0; index_4 < this.pF; index_4++) {
                          if ((local_67 = !this.blocked[index_4]))
                            a: {
                              let local_78 = list_23[local_70];
                              for (let index_5 = 0; index_5 < 4; index_5++)
                                if (
                                  index_5 !== local_78 &&
                                  this.transitions[index_4 * 4 + index_5] === index_3 &&
                                  !(this.mV[index_3] & (1 << index_5))
                                ) {
                                  local_67 = !0;
                                  break a;
                                }
                              local_67 = !1;
                            }
                          local_67 && (this.qha[index_4] = 1);
                        }
                      else this.qha[index_3] = 1;
                }
            }
            if (!num_31 && !local_51 && local_60 >= 0) {
              var len = ka_5.length;
              if (fn_55(this, local_60, local_61)) {
                var list_51 = [],
                  list_52 = [];
                for (let index = 0; index < list_50.length; index++) {
                  let local_73 = list_50[index],
                    local_74 = uint8_array[index],
                    local_75 = local_62[index];
                  for (let index_2 = 0; local_74 !== 0 && index_2 < 4; index_2++) {
                    if (!(local_74 & (1 << index_2))) continue;
                    list_51.length = 0;
                    list_52.length = 0;
                    let local_76 = local_73;
                    for (let index_3 = 1; 2 * index_3 + 2 < len; index_3++) {
                      let local_77 = this.CSa[local_76 * 4 + index_2];
                      if (
                        local_77 < 0 ||
                        local_75[local_76] <= 0 ||
                        local_75[local_77] < 0 ||
                        local_75[local_77] >= local_75[local_76]
                      )
                        break;
                      this.blocked[local_77] ||
                        this.qha[local_77] ||
                        (list_51.push(local_77),
                        list_52.push(this.mV[local_77]),
                        (this.mV[local_77] |= ~(1 << index_2) & 15));
                      local_76 = local_77;
                    }
                    for (; list_51.length > 0 && !fn_55(this, local_60, local_61);) {
                      let pop = list_51.pop();
                      this.mV[pop] = list_52.pop();
                    }
                  }
                }
              }
            }
          }
        }
        return !0;
      }
      indexOf(first_arg) {
        return fn_101(this, first_arg.x, first_arg.y);
      }
      Cwa(first_arg) {
        return first_arg < 0 ? this.width - 1 : first_arg >= this.width ? 0 : first_arg;
      }
      RCa(first_arg) {
        return first_arg < 0 ? this.height - 1 : first_arg >= this.height ? 0 : first_arg;
      }
    };
  var list_24 = [3, 2, 0, 1],
    fn_113 = function (first_arg, second_arg) {
      return fn_213(first_arg.ub.Vw.RMa(second_arg)) ? -1 : first_arg.ka.indexOf(second_arg);
    },
    fn_114 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      if (!fn_182(first_arg.settings, 17) || fn_182(first_arg.settings, 11) || first_arg.ub.Yc.Oa)
        return fifth_arg;
      var ka = first_arg.ka,
        num_30 = second_arg % ka.width;
      second_arg = Math.floor(second_arg / ka.width);
      if (fn_182(first_arg.settings, 3) && (num_30 + second_arg) % 2 === 0) return fifth_arg;
      var wa_2 = first_arg.ub.ka.wa;
      for (let index = 0; index < 4; index++) {
        var local_44 = num_30 + list_21[index];
        let local_45 = second_arg + list_22[index];
        ka.La && ((local_44 = ka.Cwa(local_44)), (local_45 = ka.RCa(local_45)));
        let local_46 = fn_101(ka, local_44, local_45);
        local_44 = wa_2[local_45]?.[local_44];
        !(local_46 >= 0 && local_46 !== third_arg && local_46 !== fourth_arg) ||
          ka.blocked[local_46] ||
          ka.qha[local_46] ||
          (local_44 !== 0 && local_44 !== 1 && local_44 !== 12) ||
          (fifth_arg = fn_117(first_arg, local_46, 1, fifth_arg));
      }
      return fifth_arg;
    },
    fn_115 = function (
      first_arg,
      second_arg,
      third_arg,
      fourth_arg,
      fifth_arg = !1,
      sixth_arg = -1
    ) {
      var ka = first_arg.ka;
      first_arg.Ka.fill(0);
      first_arg.wa.fill(0);
      third_arg = second_arg * 4 + third_arg;
      first_arg.Aa = fn_104(ka, second_arg, 0) ? 0 : -1;
      first_arg.Ga = second_arg === fourth_arg ? 0 : -1;
      var local_44 = (first_arg.wa[second_arg] = 1);
      for (var index = 0; index < 4; index++) first_arg.Ka[second_arg * 4 + index] = 1;
      first_arg.Ca[third_arg] = 0;
      fifth_arg &&
        ((first_arg.Ba[third_arg] = -1),
        (first_arg.Ia = 0),
        first_arg.Aa === 0 &&
          ((first_arg.rb[0] = third_arg), (first_arg.kb[0] = 0), (first_arg.Ia = 1)));
      index = second_arg = 0;
      for (first_arg.queue[index++] = third_arg; second_arg < index;) {
        let local_46 = first_arg.queue[second_arg++],
          num_30 = local_46 >> 2,
          local_47 = first_arg.Ca[local_46] + 1,
          local_48 = list_23[local_46 & 3],
          local_49 = ka.Mna[num_30],
          local_50 = local_49 !== -1 && local_49 !== local_48;
        for (let index_2 = 0; index_2 < 4; index_2++) {
          if (
            index_2 === local_48 ||
            (local_50 && index_2 !== local_49) ||
            (local_46 === third_arg && sixth_arg >= 0 && index_2 !== sixth_arg)
          )
            continue;
          let local_51 = ka.transitions[num_30 * 4 + index_2];
          if (
            local_51 < 0 ||
            (ka.blocked[local_51] && local_51 !== fourth_arg) ||
            ka.mV[local_51] & (1 << index_2) ||
            ka.oa[local_51] === local_47
          )
            continue;
          let local_52 = local_51 * 4 + index_2;
          if (first_arg.Ka[local_52]) continue;
          first_arg.Ka[local_52] = 1;
          first_arg.Ca[local_52] = local_47;
          var local_45 = fn_104(ka, local_51, local_47);
          local_45 && first_arg.Aa < 0 && (first_arg.Aa = local_47);
          fifth_arg &&
            ((first_arg.Ba[local_52] = local_46),
            local_45 &&
              first_arg.Ia < 8 &&
              ((local_45 = first_arg.Ia++),
              (first_arg.rb[local_45] = local_52),
              (first_arg.kb[local_45] = local_47)));
          (ka.Vda[local_51] && ka.ka[local_51] & (1 << index_2)) ||
            ((first_arg.queue[index++] = local_52),
            first_arg.wa[local_51] ||
              ((first_arg.wa[local_51] = 1),
              local_44++,
              first_arg.Ga < 0 && local_51 === fourth_arg && (first_arg.Ga = local_47)));
        }
      }
      fifth_arg && (first_arg.Nb = index);
      return local_44;
    },
    fn_116 = function (
      first_arg,
      second_arg,
      third_arg,
      fourth_arg,
      fifth_arg,
      sixth_arg,
      seventh_arg,
      eighth_arg,
      arg
    ) {
      var ka = first_arg.ka,
        ka_2 = first_arg.ub.Yc.ka,
        num_30 = fifth_arg >> 2,
        local_44 = fn_182(first_arg.settings, 17),
        local_45 =
          arg && fn_182(first_arg.settings, 11) && (ka.wa[num_30] === 1 || ka.qha[num_30] === 0),
        local_46 = arg
          ? Math.min(sixth_arg, Math.max(0, ka_2.length - 2))
          : Math.min(sixth_arg + 1, ka_2.length),
        local_47 = arg ? seventh_arg : Math.max(1, seventh_arg - 1),
        local_48 = eighth_arg;
      for (var index = 1; index <= local_46; index++) {
        var local_49 = fn_113(first_arg, ka_2[ka_2.length - index]);
        local_49 >= 0 &&
          ((local_48 = fn_117(first_arg, local_49, 0, local_48)),
          (local_48 = fn_117(first_arg, fn_102(ka, local_49), 0, local_48)));
      }
      if (local_44 && local_46 > 0)
        for (var local_50 of first_arg.ub.Vw.wa.values())
          local_50.dh &&
            local_50.ix !== void 0 &&
            local_50.ix.p$ <= local_46 &&
            (local_48 = fn_117(first_arg, ka.indexOf(local_50.pos), 0, local_48));
      local_48 = fn_117(first_arg, fn_102(ka, num_30), 1, local_48);
      fourth_arg = third_arg * 4 + fourth_arg;
      index = first_arg.Ba[fifth_arg];
      local_49 = num_30;
      local_50 = 1;
      if (!local_45)
        for (; index >= 0 && local_50 < local_47;) {
          let num_31 = index >> 2;
          local_48 = fn_117(first_arg, num_31, 1, local_48);
          local_48 = fn_117(first_arg, fn_102(ka, num_31), 1, local_48);
          local_44 && (local_48 = fn_114(first_arg, num_31, local_49, num_30, local_48));
          if (index === fourth_arg) break;
          local_49 = num_31;
          index = first_arg.Ba[index];
          local_50++;
        }
      local_44 &&
        sixth_arg + 1 < local_47 &&
        (local_48 = fn_114(first_arg, second_arg, third_arg, num_30, local_48));
      local_45 &&
        ((local_48 = fn_118(first_arg, !1, sixth_arg, local_48)),
        (local_48 = fn_118(first_arg, !0, sixth_arg, local_48)));
      second_arg = fifth_arg & 3;
      ka.Vda[num_30] &&
        ((fifth_arg = ka.transitions[num_30 * 4 + second_arg]),
        fifth_arg >= 0 &&
          !ka.Ka[fifth_arg] &&
          (ka.Mna[fifth_arg] !== -1 || (ka.ka[fifth_arg] & (1 << second_arg)) !== 0) &&
          (local_48 = fn_117(first_arg, fifth_arg, 1, local_48)));
      arg = arg ? 0 : Math.max(0, ka_2.length - local_46);
      third_arg =
        local_46 < ka_2.length ? fn_113(first_arg, ka_2[ka_2.length - 1 - local_46]) : third_arg;
      num_30 = fn_115(first_arg, num_30, second_arg, third_arg);
      third_arg = first_arg.Ga >= 0;
      for (--local_48; local_48 >= eighth_arg; local_48--)
        ka.blocked[first_arg.Oa[local_48]] = first_arg.Qa[local_48];
      return third_arg || num_30 >= seventh_arg + 2 + arg;
    },
    fn_117 = function (first_arg, second_arg, third_arg, fourth_arg) {
      second_arg >= 0 &&
        first_arg.ka.blocked[second_arg] !== third_arg &&
        ((first_arg.Oa[fourth_arg] = second_arg),
        (first_arg.Qa[fourth_arg] = first_arg.ka.blocked[second_arg]),
        fourth_arg++,
        (first_arg.ka.blocked[second_arg] = third_arg));
      return fourth_arg;
    },
    fn_118 = function (first_arg, second_arg, third_arg, fourth_arg) {
      var ub = first_arg.ub,
        yc = ub.Yc,
        vw = ub.Vw;
      ub = second_arg ? 1 : 0;
      for (let index = 0; index < yc.ka.length - 1 - third_arg; index++)
        if (yc.wa[index] !== second_arg) {
          let pos = first_arg.ka.indexOf(yc.ka[index]);
          fourth_arg = fn_117(first_arg, pos, ub, fourth_arg);
        }
      for (let local_44 of vw.wa.values())
        local_44.r9 ||
          local_44.dh === second_arg ||
          ((third_arg = first_arg.ka.indexOf(local_44.pos)),
          (fourth_arg = fn_117(first_arg, third_arg, ub, fourth_arg)));
      return fourth_arg;
    },
    cls_29 = class {
      constructor(first_arg, second_arg) {
        this.settings = first_arg;
        this.ub = second_arg;
        this.yb = 0;
        this.Ka = new Uint8Array(0);
        this.queue = new Int32Array(0);
        this.Ca = new Int32Array(0);
        this.Ba = new Int32Array(0);
        this.wa = new Uint8Array(0);
        this.rb = new Int32Array(8);
        this.kb = new Int32Array(8);
        this.Ia = 0;
        this.Kb = new Int32Array(8);
        this.wb = new Int32Array(8);
        this.Nb = this.La = 0;
        this.Oa = new Int32Array(0);
        this.Qa = new Uint8Array(0);
        this.Ta = new Uint16Array(0);
        this.Ga = this.Aa = this.Mb = -1;
        this.Pb = !0;
        this.hb = !1;
        this.Ra = new Float64Array(4);
        this.oa = this.Ya = 0;
        this.ka = new cls_28(this.settings, this.ub);
      }
    };
  var fn_119 = async function (first_arg) {
      var fn_457 = (0, namespace.eg)(),
        fn_458 = fn_457();
      fn_457 = fn_457(1);
      try {
        if (
          first_arg.wakeLock &&
          first_arg.ka &&
          !first_arg.oa &&
          first_arg.u8.visibilityState === "visible" &&
          (!first_arg.sentinel || first_arg.sentinel.released)
        ) {
          first_arg.oa = !0;
          try {
            let local_44 = fn_457(await fn_458(first_arg.wakeLock.request("screen")));
            first_arg.ka ? (first_arg.sentinel = local_44) : local_44.release();
          } catch {
            fn_457();
          } finally {
            first_arg.oa = !1;
          }
        }
      } finally {
        fn_458();
      }
    },
    cls_30 = class {
      constructor() {
        var local_44 = document;
        this.wakeLock = "wakeLock" in navigator ? navigator.wakeLock : null;
        this.u8 = local_44;
        this.oa = this.ka = !1;
        this.sentinel = null;
        this.wa = () => {
          fn_119(this);
        };
      }
      release() {
        this.ka &&
          ((this.ka = !1),
          this.u8.removeEventListener("visibilitychange", this.wa),
          this.sentinel && (this.sentinel.release(), (this.sentinel = null)));
      }
    };
  var cls_31 = class {
    constructor(first_arg, second_arg, third_arg, fourth_arg) {
      var ju_f = new cls_30();
      this.settings = first_arg;
      this.ub = second_arg;
      this.Ba = third_arg;
      this.Aa = fourth_arg;
      this.wakeLock = ju_f;
      this.active = !1;
      this.oa = this.ka = 0;
      this.wa = new cls_29(this.settings, this.ub);
    }
    start() {
      this.active = !0;
      this.oa = this.ka = 0;
      var wake_lock = this.wakeLock;
      wake_lock.wakeLock &&
        !wake_lock.ka &&
        ((wake_lock.ka = !0),
        wake_lock.u8.addEventListener("visibilitychange", wake_lock.wa),
        fn_119(wake_lock));
    }
    stop() {
      this.active = !1;
      this.wakeLock.release();
    }
    update(first_arg) {
      if (!this.active || !this.settings.autoplay || this.ub.wj) this.stop();
      else if (first_arg)
        if (
          ((this.oa = this.ub.Ai > this.ka ? 0 : this.oa + 1),
          (this.ka = Math.max(this.ka, this.ub.Ai)),
          this.oa > 600)
        )
          this.Aa();
        else if (!fn_231(this.ub.Yc) && this.ub.Yc.Ca <= 0) {
          first_arg = this.wa;
          var yc = first_arg.ub.Yc,
            ka = yc.ka;
          if (ka.length !== 0 && first_arg.ka.read()) {
            var p_f = first_arg.ka.pF;
            first_arg.yb !== p_f &&
              ((first_arg.yb = p_f),
              (first_arg.Ka = new Uint8Array(p_f * 4)),
              (first_arg.queue = new Int32Array(p_f * 4)),
              (first_arg.Ca = new Int32Array(p_f * 4)),
              (first_arg.Ba = new Int32Array(p_f * 4)),
              (first_arg.wa = new Uint8Array(p_f)),
              (first_arg.Oa = new Int32Array(p_f * 4)),
              (first_arg.Qa = new Uint8Array(p_f * 4)),
              (first_arg.Ta = new Uint16Array(p_f * 4)));
            p_f = first_arg.ka.indexOf(ka[0]);
            if (p_f < 0) first_arg = "NONE";
            else {
              yc = fn_228(yc);
              var local_44 =
                first_arg.ub.Ai * 1000003 +
                first_arg.ub.Yc.ka.length * 9176 +
                first_arg.ub.oa.wa * 313;
              for (local_45 of first_arg.ub.gN.keys) local_45.dh && (local_44 += 17);
              for (var list_50 of first_arg.ub.mA.cK)
                list_50.dh && (local_44 = (local_44 * 31 + list_50.pos.x * 61 + list_50.pos.y) | 0);
              var local_45 = local_44;
              if (first_arg.ub.ticks <= 1 || local_45 !== first_arg.Mb)
                ((first_arg.Mb = local_45),
                  first_arg.Ta.fill(0),
                  first_arg.ub.ticks <= 1 && ((first_arg.Ya = 0), (first_arg.oa = 0)));
              local_45 = map_2.get(yc);
              local_45 !== void 0 && first_arg.Ta[p_f * 4 + local_45]++;
              b: {
                local_45 = first_arg.ka;
                list_50 = first_arg.ub.Yc.ka;
                for (local_44 = 1; local_44 < list_50.length; local_44++) {
                  var pos = local_45.indexOf(list_50[local_44]),
                    pos_2 = local_45.indexOf(list_50[local_44 - 1]),
                    num_30 =
                      Math.abs(list_50[local_44].x - list_50[local_44 - 1].x) +
                        Math.abs(list_50[local_44].y - list_50[local_44 - 1].y) <=
                      1;
                  for (var index = 0; !num_30 && pos >= 0 && index < 4; index++)
                    num_30 = local_45.transitions[pos * 4 + index] === pos_2;
                  if (!num_30) {
                    local_45 = !1;
                    break b;
                  }
                }
                local_45 = !0;
              }
              first_arg.Pb = local_45;
              ka = fn_113(first_arg, ka[ka.length - 1]);
              local_45 = first_arg.ka;
              list_50 = first_arg.ub.Yc.ka.length;
              local_44 = fn_182(first_arg.settings, 16) ? 1.5 : 0.5;
              first_arg.hb = !1;
              first_arg.Ra.fill(-Infinity);
              pos = "NONE";
              pos_2 = -Infinity;
              for (num_30 = 0; num_30 < 4; num_30++) {
                index = list_20[num_30];
                if (!fn_230(first_arg.ub.Yc) && index === fn_45(yc)) continue;
                var local_46 = local_45.transitions[p_f * 4 + num_30],
                  local_47 = local_46 >= 0 && local_45.Ca[local_46] === 1;
                if (
                  local_46 < 0 ||
                  (local_45.blocked[local_46] && !local_47) ||
                  local_45.mV[local_46] & (1 << num_30) ||
                  local_45.oa[local_46] === 0 ||
                  (local_45.Vda[local_46] && local_45.ka[local_46] & (1 << num_30))
                )
                  continue;
                var num_31 = void 0,
                  local_48 = first_arg,
                  local_49 = p_f,
                  local_50 = num_30,
                  ka_2 = local_48.ka,
                  num_32 = -1,
                  index_2 = 0,
                  num_33 = 0;
                if (ka_2.Vda[local_46]) {
                  var local_51 = ka_2.transitions[local_46 * 4 + local_50];
                  local_51 >= 0 &&
                    !ka_2.Ka[local_51] &&
                    ((num_32 = local_51),
                    (index_2 = ka_2.blocked[num_32]),
                    (num_33 = ka_2.mV[num_32]),
                    ka_2.Mna[num_32] !== -1
                      ? (ka_2.blocked[num_32] = 1)
                      : ((ka_2.mV[num_32] |= ka_2.ka[num_32]),
                        (ka_2.mV[num_32] & 15) === 15 && (ka_2.blocked[num_32] = 1)));
                }
                var local_52 = fn_114(local_48, local_49, local_46, -1, 0);
                num_31 = fn_115(local_48, local_46, local_50, ka, !0);
                local_51 = local_48.Ga;
                let local_58 = local_51 >= 0 || list_50 <= 4,
                  aa_2 = local_48.Aa;
                var local_53 =
                  !ka_2.Vda[local_46] &&
                  !fn_182(local_48.settings, 5) &&
                  !fn_182(local_48.settings, 3);
                local_48.La = 0;
                if (!local_58 && local_53 && !fn_182(local_48.settings, 9)) {
                  var num_34 = Math.max(1, list_50 - 1);
                  for (var num_35 = local_48.Nb - 1; num_35 >= 1 && local_48.La < 8; num_35--) {
                    var local_54 = local_48.queue[num_35],
                      local_55 = local_48.Ca[local_54];
                    if (local_55 <= num_34) {
                      var local_56 = local_48.La++;
                      local_48.Kb[local_56] = local_54;
                      local_48.wb[local_56] = local_55;
                    }
                  }
                }
                if (aa_2 >= 0 && local_53)
                  for (aa_2 = -1, num_34 = 0; num_34 < local_48.Ia; num_34++)
                    if (
                      ((num_35 = local_48.kb[num_34]),
                      fn_116(
                        local_48,
                        local_49,
                        local_46,
                        local_50,
                        local_48.rb[num_34],
                        num_35,
                        list_50,
                        local_52,
                        !0
                      ))
                    ) {
                      aa_2 = num_35;
                      break;
                    }
                if (!(aa_2 >= 0 && aa_2 <= 1))
                  b: if (
                    ((num_35 = local_48.ka),
                    !(list_50 < Math.min(num_35.width, num_35.height)) &&
                      ((num_34 = list_23[local_50]),
                      (local_54 = num_35.Mna[local_46]),
                      local_54 === -1 || local_54 === num_34))
                  ) {
                    local_55 = local_54 = 0;
                    local_56 = Math.max(8, Math.floor(num_31 * 0.25));
                    for (let index_3 = 0; index_3 < 4; index_3++) {
                      if (index_3 === num_34) continue;
                      var local_57 = num_35.transitions[local_46 * 4 + index_3];
                      if (
                        local_57 < 0 ||
                        (num_35.blocked[local_57] && local_57 !== ka) ||
                        num_35.mV[local_57] & (1 << index_3) ||
                        num_35.oa[local_57] === 1
                      )
                        continue;
                      local_55++;
                      local_57 = fn_115(local_48, local_46, local_50, ka, !1, index_3);
                      if (num_31 - local_57 < local_56) break b;
                      local_57 > local_54 && (local_54 = local_57);
                    }
                    num_31 = local_55 > 1 ? local_54 : num_31;
                  }
                if (!local_58 && num_31 >= list_50 + 2 && local_53)
                  for (local_53 = 0; local_53 < local_48.La; local_53++)
                    if (
                      fn_116(
                        local_48,
                        local_49,
                        local_46,
                        local_50,
                        local_48.Kb[local_53],
                        local_48.wb[local_53],
                        list_50,
                        local_52,
                        !1
                      )
                    ) {
                      local_58 = !0;
                      break;
                    }
                for (local_49 = local_52 - 1; local_49 >= 0; local_49--)
                  ka_2.blocked[local_48.Oa[local_49]] = local_48.Qa[local_49];
                num_32 >= 0 && ((ka_2.blocked[num_32] = index_2), (ka_2.mV[num_32] = num_33));
                num_32 = num_31 < list_50 && !(local_58 && local_48.Pb);
                local_49 = fn_182(local_48.settings, 9) ? 4 : 1;
                ka_2 =
                  2 * (num_31 + local_52) -
                  ka_2.Ba[local_46] -
                  (local_58 ? 0 : 1200) -
                  (num_32 ? 2e3 : 0);
                local_52 = local_48.ka;
                num_32 = 0;
                for (index_2 = 0; index_2 < 4; index_2++)
                  ((num_33 = local_52.transitions[local_46 * 4 + index_2]),
                    (num_33 < 0 ||
                      (local_52.blocked[num_33] &&
                        local_52.Ba[num_33] === 0 &&
                        !local_52.Vda[num_33])) &&
                      num_32++);
                let {
                  Ai: obj_21,
                  tTe: obj_22,
                  wza: obj_23
                } = {
                  Ai:
                    ka_2 -
                    (aa_2 < 0
                      ? 500 + (local_51 >= 0 ? 0.5 * local_51 : local_58 ? 0.5 * list_50 : 0)
                      : local_49 * aa_2) +
                    (index === yc ? local_44 : 0) +
                    0.25 * num_32 -
                    4 * local_48.Ta[local_46 * 4 + local_50],
                  tTe: ka_2,
                  wza: aa_2 >= 0
                };
                local_48 = local_47 ? 1500 : 0;
                local_47 = obj_21 - local_48;
                first_arg.Ra[num_30] = obj_22 - local_48;
                local_47 > pos_2 && ((pos_2 = local_47), (pos = index), (first_arg.hb = obj_23));
              }
              p_f = pos;
              first_arg.Ya = first_arg.hb ? 0 : first_arg.Ya + 1;
              local_45 = map_2.get(yc);
              first_arg.Ya < 20 || local_45 === void 0 || p_f === "NONE"
                ? ((first_arg.oa = 0), (first_arg = p_f))
                : ((local_45 = (ka =
                    first_arg.oa >= Math.max(4, Math.ceil((first_arg.ub.Yc.ka.length + 2) / 4)) - 1)
                    ? list_24[local_45]
                    : local_45),
                  (list_50 = Math.max(...first_arg.Ra)),
                  first_arg.Ra[local_45] < list_50 - 4
                    ? ((first_arg.oa = 0), (first_arg = p_f))
                    : ((first_arg.oa = ka ? 0 : first_arg.oa + 1),
                      (first_arg = list_20[local_45])));
              first_arg = first_arg === "NONE" ? yc : first_arg;
            }
          } else first_arg = "NONE";
          first_arg !== "NONE" && this.Ba(first_arg);
        }
    }
  };
  var num_3 = 56 * num,
    num_4 = 34 * num,
    num_5 = 11 * num,
    list_25 = [
      { u3c: Math.PI * 2.5, weight: 0.5, mXc: 5.3, v3c: 0, nXc: 0 },
      { u3c: Math.PI * 4.2, weight: 0.3, mXc: 8.7, v3c: 1.7, nXc: 1.1 },
      { u3c: Math.PI * 6.7, weight: 0.2, mXc: 13.1, v3c: 3.8, nXc: 2.3 }
    ],
    num_6 = 0,
    num_7 = 0,
    local_11 = null,
    obj_8 = { Lp: 10, Rp: 58 },
    list_26 = [
      { Lp: 40, Rp: 75 },
      { Lp: 43, Rp: 78 },
      { Lp: 50, Rp: 82 },
      { Lp: 53, Rp: 84 },
      { Lp: 42, Rp: 76 },
      { Lp: 20, Rp: 60 },
      { Lp: 16, Rp: 59 },
      { Lp: 13, Rp: 59 },
      { Lp: 12, Rp: 59 },
      { Lp: 11, Rp: 59 }
    ],
    obj_9 = { Lp: 20, Rp: 63 },
    list_27 = [
      { Lp: 44, Rp: 79 },
      { Lp: 44, Rp: 79 },
      { Lp: 44, Rp: 79 },
      { Lp: 48, Rp: 81 },
      { Lp: 38, Rp: 81 },
      { Lp: 26, Rp: 69 },
      { Lp: 26, Rp: 69 },
      { Lp: 26, Rp: 69 },
      { Lp: 24, Rp: 67 },
      { Lp: 24, Rp: 67 },
      { Lp: 24, Rp: 67 },
      { Lp: 24, Rp: 67 },
      { Lp: 24, Rp: 67 },
      { Lp: 22, Rp: 65 }
    ];
  var fn_120 = function (first_arg) {
      first_arg.ka.fillStyle = fn_185(first_arg.settings, first_arg.settings.oa, 0);
      first_arg.ka.fillRect(0, 0, first_arg.ka.canvas.width, first_arg.ka.canvas.height);
      for (let index = 0; index < first_arg.ub.ka.oa.width; index++)
        for (let index_2 = 0; index_2 < first_arg.ub.ka.oa.height; index_2++)
          (index + index_2) % 2 !== 0 &&
            ((first_arg.ka.fillStyle = fn_185(first_arg.settings, first_arg.settings.oa, 1)),
            first_arg.ka.fillRect(
              index * first_arg.ub.ka.ka,
              index_2 * first_arg.ub.ka.ka,
              first_arg.ub.ka.ka,
              first_arg.ub.ka.ka
            ));
    },
    cls_32 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg) {
        this.ub = first_arg;
        this.settings = second_arg;
        this.context = third_arg;
        this.ka = fourth_arg;
      }
    };
  var fn_121 = function (first_arg, second_arg) {
      return fn_135(first_arg, second_arg.x, second_arg.y);
    },
    fn_122 = function (first_arg, second_arg) {
      return (
        second_arg.x >= 0 &&
        second_arg.x < first_arg.oa.width &&
        second_arg.y >= 0 &&
        second_arg.y < first_arg.oa.height
      );
    },
    fn_123 = function (first_arg, second_arg, third_arg) {
      return first_arg.Ia(second_arg, third_arg, void 0);
    },
    fn_124 = function (first_arg, second_arg) {
      second_arg.x > first_arg.oa.width - 1
        ? (second_arg.x -= first_arg.oa.width)
        : second_arg.x < 0 && (second_arg.x += first_arg.oa.width);
      second_arg.y > first_arg.oa.height - 1
        ? (second_arg.y -= first_arg.oa.height)
        : second_arg.y < 0 && (second_arg.y += first_arg.oa.height);
      return second_arg;
    },
    fn_125 = function (first_arg, second_arg, third_arg) {
      return fn_182(first_arg.settings, 4)
        ? Math.min(
            Math.abs(second_arg.x - third_arg.x) + Math.abs(second_arg.y - third_arg.y),
            Math.abs(second_arg.x + first_arg.oa.width - third_arg.x) +
              Math.abs(second_arg.y - third_arg.y),
            Math.abs(second_arg.x - first_arg.oa.width - third_arg.x) +
              Math.abs(second_arg.y - third_arg.y),
            Math.abs(second_arg.x - third_arg.x) +
              Math.abs(second_arg.y + first_arg.oa.height - third_arg.y),
            Math.abs(second_arg.x - third_arg.x) +
              Math.abs(second_arg.y - first_arg.oa.height - third_arg.y),
            Math.abs(second_arg.x + first_arg.oa.width - third_arg.x) +
              Math.abs(second_arg.y + first_arg.oa.height - third_arg.y),
            Math.abs(second_arg.x + first_arg.oa.width - third_arg.x) +
              Math.abs(second_arg.y - first_arg.oa.height - third_arg.y),
            Math.abs(second_arg.x - first_arg.oa.width - third_arg.x) +
              Math.abs(second_arg.y + first_arg.oa.height - third_arg.y),
            Math.abs(second_arg.x - first_arg.oa.width - third_arg.x) +
              Math.abs(second_arg.y - first_arg.oa.height - third_arg.y)
          )
        : Math.abs(second_arg.x - third_arg.x) + Math.abs(second_arg.y - third_arg.y);
    },
    fn_126 = function (first_arg) {
      return (
        first_arg.wa.length !== first_arg.oa.height || first_arg.wa[0].length !== first_arg.oa.width
      );
    },
    fn_127 = function (first_arg, second_arg, third_arg, fourth_arg = !1) {
      first_arg = first_arg.wa[third_arg][second_arg];
      return !fourth_arg || (first_arg !== 1 && first_arg !== 11 && first_arg !== 12)
        ? first_arg !== 0 && first_arg !== 3
        : !1;
    },
    fn_128 = function (first_arg, second_arg) {
      return fn_127(first_arg, second_arg.x, second_arg.y, !1);
    },
    fn_129 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg) {
      second_arg += list_28[fourth_arg];
      third_arg += list_29[fourth_arg];
      if (fn_188(first_arg.settings))
        (second_arg > first_arg.oa.width - 1
          ? (second_arg -= first_arg.oa.width)
          : second_arg < 0 && (second_arg += first_arg.oa.width),
          third_arg > first_arg.oa.height - 1
            ? (third_arg -= first_arg.oa.height)
            : third_arg < 0 && (third_arg += first_arg.oa.height));
      else if (
        second_arg < 0 ||
        second_arg >= first_arg.oa.width ||
        third_arg < 0 ||
        third_arg >= first_arg.oa.height
      )
        return !1;
      if (
        fifth_arg.has((second_arg << 16) | third_arg) ||
        fn_127(first_arg, second_arg, third_arg, !0)
      )
        return !1;
      sixth_arg[0] = second_arg;
      sixth_arg[1] = third_arg;
      return !0;
    },
    fn_130 = function (first_arg, list_50, list_51) {
      var set_value_2 = new Set(),
        local_44 = fn_188(first_arg.settings);
      for (var local_45 of list_51)
        (fn_122(first_arg, local_45) || local_44) && set_value_2.add(fn_44(local_45));
      local_44 = fn_44(list_50);
      if (set_value_2.has(local_44)) return new Set();
      list_51 = [list_50.x];
      list_50 = [list_50.y];
      set_value_2.add(local_44);
      local_44 = [0, 0];
      for (local_45 = 0; local_45 < list_51.length;) {
        let local_46 = list_51[local_45],
          local_47 = list_50[local_45++];
        for (let index = 0; index < 4; index++)
          fn_129(first_arg, local_46, local_47, index, set_value_2, local_44) &&
            (set_value_2.add((local_44[0] << 16) | local_44[1]),
            list_51.push(local_44[0]),
            list_50.push(local_44[1]));
      }
      return set_value_2;
    },
    fn_131 = function (first_arg, second_arg, third_arg) {
      third_arg = [...third_arg, second_arg];
      var local_44 = fn_188(first_arg.settings);
      second_arg = new Set();
      for (var local_45 of third_arg)
        (fn_122(first_arg, local_45) || local_44) && second_arg.add(fn_44(local_45));
      local_45 = [0, 0];
      for (let local_46 of third_arg) {
        let index = 0;
        for (let index_2 = 0; index_2 < 4; index_2++)
          if (fn_129(first_arg, local_46.x, local_46.y, index_2, second_arg, local_45)) {
            third_arg = local_45[0];
            local_44 = local_45[1];
            let index_3 = 0;
            for (let index_4 = 0; index_4 < 4; index_4++)
              fn_129(first_arg, third_arg, local_44, index_4, second_arg, local_45) && index_3++;
            index_3 >= 2 && index++;
          }
        if (index < 2) return !1;
      }
      return !0;
    },
    fn_132 = function (first_arg, second_arg) {
      for (second_arg = second_arg.clone(); second_arg.x < 0;) second_arg.x += first_arg.oa.width;
      for (; second_arg.x >= first_arg.oa.width;) second_arg.x -= first_arg.oa.width;
      for (; second_arg.y < 0;) second_arg.y += first_arg.oa.height;
      for (; second_arg.y >= first_arg.oa.height;) second_arg.y -= first_arg.oa.height;
      return second_arg;
    },
    fn_133 = function (first_arg, second_arg, third_arg) {
      return fn_182(first_arg.settings, 4)
        ? Math.min(
            namespace.Cm(second_arg, third_arg),
            namespace.Cm(
              second_arg,
              new namespace.de(third_arg.x - first_arg.oa.width, third_arg.y - first_arg.oa.height)
            ),
            namespace.Cm(
              second_arg,
              new namespace.de(third_arg.x, third_arg.y - first_arg.oa.height)
            ),
            namespace.Cm(
              second_arg,
              new namespace.de(third_arg.x + first_arg.oa.width, third_arg.y - first_arg.oa.height)
            ),
            namespace.Cm(
              second_arg,
              new namespace.de(third_arg.x - first_arg.oa.width, third_arg.y)
            ),
            namespace.Cm(
              second_arg,
              new namespace.de(third_arg.x + first_arg.oa.width, third_arg.y)
            ),
            namespace.Cm(
              second_arg,
              new namespace.de(third_arg.x - first_arg.oa.width, third_arg.y + first_arg.oa.height)
            ),
            namespace.Cm(
              second_arg,
              new namespace.de(third_arg.x, third_arg.y + first_arg.oa.height)
            ),
            namespace.Cm(
              second_arg,
              new namespace.de(third_arg.x + first_arg.oa.width, third_arg.y + first_arg.oa.height)
            )
          )
        : namespace.Cm(second_arg, third_arg);
    },
    fn_134 = function (first_arg) {
      return first_arg.oa.width % 2 === 1 && first_arg.oa.height % 2 === 1;
    },
    fn_135 = function (first_arg, second_arg, third_arg) {
      return new namespace.de(
        first_arg.oa.width - 1 - second_arg,
        first_arg.oa.height - 1 - third_arg
      );
    },
    cls_33 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg = () => {}) {
        this.settings = first_arg;
        this.Ia = second_arg;
        this.Ca = third_arg;
        this.Ga = fourth_arg;
        this.oa = new namespace.ee(0, 0);
        this.ka = 0;
        this.Aa = new namespace.de(0, 0);
        this.wa = [];
        this.Ba = 0;
      }
      reset() {
        this.Aa = new namespace.de(0, 0);
        fn_182(this.settings, 3) &&
          fn_182(this.settings, 4) &&
          (this.oa.width % 2 === 1 && ((this.oa.width += 1), (this.Aa.x += 1)),
          this.oa.height % 2 === 1 && ((this.oa.height += 1), (this.Aa.y += 1)));
        this.wa = [];
        for (let index = 0; index < this.oa.height; index++) {
          this.wa.push([]);
          for (let index_2 = 0; index_2 < this.oa.width; index_2++) this.wa[index].push(0);
        }
        this.Ba = 0;
      }
    },
    list_28 = [-1, 1, 0, 0],
    list_29 = [0, 0, -1, 1];
  var fn_136 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg) {
      var local_44 =
        fn_134(first_arg.ub.ka) &&
        second_arg.pos.x === Math.floor(first_arg.ub.ka.oa.width / 2) &&
        second_arg.pos.y === Math.floor(first_arg.ub.ka.oa.height / 2);
      if (fn_182(first_arg.settings, 7) && !local_44) {
        local_44 = new namespace.de(
          first_arg.ub.ka.oa.width * first_arg.ub.ka.ka - fourth_arg.x,
          first_arg.ub.ka.oa.height * first_arg.ub.ka.ka - fourth_arg.y
        );
        first_arg.ka.save();
        if (second_arg.Qzb !== void 0 && fifth_arg) {
          let path2_d = new Path2D(),
            local_45 = fn_121(first_arg.ub.ka, fifth_arg);
          path2_d.rect(
            local_45.x * first_arg.ub.ka.ka,
            local_45.y * first_arg.ub.ka.ka,
            first_arg.ub.ka.ka,
            first_arg.ub.ka.ka
          );
          first_arg.ka.clip(path2_d);
        }
        first_arg.ka.drawImage(
          fn_70(first_arg.oa).ka.canvas,
          128,
          0,
          128,
          128,
          local_44.x - third_arg / 2,
          local_44.y - third_arg / 2,
          third_arg,
          third_arg
        );
        first_arg.ka.restore();
        second_arg.sequenceNumber !== void 0 &&
          fn_137(first_arg, second_arg.sequenceNumber, local_44, third_arg, sixth_arg);
      }
      first_arg.ka.save();
      second_arg.Qzb !== void 0 &&
        fifth_arg &&
        ((local_44 = new Path2D()),
        local_44.rect(
          fifth_arg.x * first_arg.ub.ka.ka,
          fifth_arg.y * first_arg.ub.ka.ka,
          first_arg.ub.ka.ka,
          first_arg.ub.ka.ka
        ),
        first_arg.ka.clip(local_44));
      first_arg.ka.drawImage(
        fn_70(first_arg.oa).ka.canvas,
        0,
        0,
        128,
        128,
        fourth_arg.x - third_arg / 2,
        fourth_arg.y - third_arg / 2,
        third_arg,
        third_arg
      );
      first_arg.ka.restore();
      second_arg.sequenceNumber !== void 0 &&
        fn_137(first_arg, second_arg.sequenceNumber, fourth_arg, third_arg, sixth_arg);
    },
    fn_137 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      if (first_arg.settings.ka === 6) {
        first_arg.ka.save();
        second_arg !== first_arg.ub.oa.wa
          ? (first_arg.ka.globalAlpha *= 0.5)
          : first_arg.ub.oa.Ba && (first_arg.ka.globalAlpha *= 0.5 + 0.5 * fifth_arg);
        second_arg = (second_arg - 1) % 10;
        var local_44 = (fifth_arg = first_arg.settings.bN()) ? 170 : 128;
        first_arg.Ba.render(
          second_arg,
          third_arg,
          new namespace.de(-local_44 / 2, -local_44 / 2),
          0,
          fourth_arg / local_44,
          fifth_arg ? 1 : 0
        );
        first_arg.ka.restore();
      }
    },
    fn_138 = function (first_arg, second_arg, third_arg, fourth_arg) {
      first_arg.Aa.fillStyle =
        (second_arg.x + second_arg.y) % 2 === 0
          ? fn_185(first_arg.settings, first_arg.settings.oa, 0)
          : fn_185(first_arg.settings, first_arg.settings.oa, 1);
      var local_44 =
        second_arg.x === -1 || second_arg.x === first_arg.ub.ka.oa.width ? fourth_arg : 1;
      fourth_arg =
        second_arg.y === -1 || second_arg.y === first_arg.ub.ka.oa.height ? fourth_arg : 1;
      first_arg.Aa.fillRect(
        (second_arg.x === -1 ? first_arg.ub.ka.ka * (1 - local_44) : 0) +
          third_arg.x +
          second_arg.x * first_arg.ub.ka.ka,
        (second_arg.y === -1 ? first_arg.ub.ka.ka * (1 - fourth_arg) : 0) +
          third_arg.y +
          second_arg.y * first_arg.ub.ka.ka,
        local_44 * first_arg.ub.ka.ka,
        fourth_arg * first_arg.ub.ka.ka
      );
      if (fn_182(first_arg.settings, 7)) {
        let local_45 = fn_121(first_arg.ub.ka, second_arg);
        first_arg.Aa.fillRect(
          (second_arg.x === -1 ? 0 : first_arg.ub.ka.ka * (1 - local_44)) +
            third_arg.x +
            local_45.x * first_arg.ub.ka.ka,
          (second_arg.y === -1 ? 0 : first_arg.ub.ka.ka * (1 - fourth_arg)) +
            third_arg.y +
            local_45.y * first_arg.ub.ka.ka,
          local_44 * first_arg.ub.ka.ka,
          fourth_arg * first_arg.ub.ka.ka
        );
      }
    },
    fn_139 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      first_arg.Ca.drawImage(
        fn_70(first_arg.oa).ka.canvas,
        second_arg * 128,
        0,
        128,
        128,
        third_arg.x - first_arg.ub.ka.ka / 2 + fourth_arg,
        third_arg.y - first_arg.ub.ka.ka / 2 + fifth_arg,
        first_arg.ub.ka.ka,
        first_arg.ub.ka.ka
      );
    },
    fn_140 = function (first_arg) {
      for (let local_44 of first_arg.ub.mA.targets) {
        let clone = local_44.clone();
        clone.x = clone.x * first_arg.ub.ka.ka + first_arg.ub.ka.ka / 2;
        clone.y = clone.y * first_arg.ub.ka.ka + first_arg.ub.ka.ka / 2;
        let local_45 =
          2 +
          ((local_44.x + local_44.y) % 2) +
          (first_arg.settings.Aa === 2 || fn_183(first_arg.settings) ? 2 : 0);
        fn_139(first_arg, local_45, clone, 0, 0);
        if (fn_182(first_arg.settings, 4))
          for (let local_46 of first_arg.ub.kb)
            fn_139(first_arg, local_45, clone, local_46.x, local_46.y);
      }
    },
    cls_34 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg) {
        this.ub = first_arg;
        this.settings = second_arg;
        this.Aa = third_arg;
        this.ka = fourth_arg;
        this.Ca = fifth_arg;
        this.wa = sixth_arg;
        this.Ba = new cls_21(
          this.settings,
          "snake_arcade/sequence.png",
          10,
          this.ka,
          "snake_arcade/pixel/px_sequence.png"
        );
        this.oa = new cls_21(
          this.settings,
          "snake_arcade/v4/box.png",
          8,
          this.ka,
          "snake_arcade/pixel/px_box.png"
        );
      }
    };
  var obj_10 = {
      Vm: new namespace.tfF(
        "/logos/fnbx/snake_arcade/",
        "game_audio.8",
        {
          BOX: 2,
          BRIDGE: 120,
          DICE: 302,
          DOWN: 388,
          EAT: 426,
          FLIP: 472,
          GATE: 554,
          KEY: 616,
          LEFT: 678,
          PORTAL: 716,
          REVERSE: 838,
          RIGHT: 960,
          SEQUENCE: 998,
          UP: 1092
        },
        418
      )
    },
    obj_11 = {
      BOX: new namespace.Z6(obj_10.Vm, "BOX", 757.551),
      JXd: new namespace.Z6(obj_10.Vm, "BRIDGE", 1175.51),
      GYd: new namespace.Z6(obj_10.Vm, "DICE", 548.571),
      DOWN: new namespace.Z6(obj_10.Vm, "DOWN", 235.102),
      aZd: new namespace.Z6(obj_10.Vm, "EAT", 287.347),
      KZd: new namespace.Z6(obj_10.Vm, "FLIP", 522.449),
      a_d: new namespace.Z6(obj_10.Vm, "GATE", 391.837),
      KEY: new namespace.Z6(obj_10.Vm, "KEY", 391.837),
      LEFT: new namespace.Z6(obj_10.Vm, "LEFT", 235.102),
      g2d: new namespace.Z6(obj_10.Vm, "PORTAL", 783.673),
      O2d: new namespace.Z6(obj_10.Vm, "REVERSE", 783.673),
      RIGHT: new namespace.Z6(obj_10.Vm, "RIGHT", 235.102),
      CXf: new namespace.Z6(obj_10.Vm, "SEQUENCE", 600.816),
      UP: new namespace.Z6(obj_10.Vm, "UP", 235.102)
    },
    cls_35 = class extends namespace.pfF {
      constructor() {
        super(obj_10, obj_11);
      }
    };
  var fn_141 = function (first_arg, second_arg, third_arg) {
      third_arg = (first_arg.cK.size + third_arg) * (fn_182(first_arg.settings, 7) ? 2 : 1);
      first_arg.targets.size >= third_arg ||
        (first_arg.targets.add(second_arg),
        fn_182(first_arg.settings, 7) && first_arg.targets.add(fn_121(first_arg.ka, second_arg)),
        fn_182(first_arg.settings, 16) && fn_96(first_arg.wa, second_arg, !1));
    },
    fn_142 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg = !1) {
      second_arg.prev = second_arg.pos.clone();
      second_arg.Qzb = void 0;
      var num_30 = !1;
      if (fn_187(first_arg.settings)) {
        let num_31 = !(
            !fn_182(first_arg.settings, 19) ||
            !fn_197(first_arg.Ba, second_arg.pos, third_arg, second_arg.dh)
          ),
          local_44 =
            fn_197(first_arg.Ba, second_arg.pos, third_arg, second_arg.dh) ??
            (fn_182(first_arg.settings, 20)
              ? fn_156(first_arg.Ca, second_arg.pos, third_arg, second_arg.dh)
              : void 0);
        local_44 &&
          (num_31
            ? first_arg.Ba.setActive(second_arg.pos, third_arg, !0)
            : first_arg.Ca.setActive(second_arg.pos, local_44, third_arg, !0, "#e68f1b"),
          (second_arg.pos.x = local_44.x),
          (second_arg.pos.y = local_44.y),
          (second_arg.Qzb = third_arg),
          (num_30 = !0));
      }
      if (!num_30)
        switch (third_arg) {
          case "RIGHT":
            second_arg.pos.x += 1;
            break;
          case "LEFT":
            --second_arg.pos.x;
            break;
          case "DOWN":
            second_arg.pos.y += 1;
            break;
          case "UP":
            --second_arg.pos.y;
        }
      fn_182(first_arg.settings, 7) &&
        fn_134(first_arg.ka) &&
        second_arg.pos.x === Math.floor(first_arg.ka.oa.width / 2) &&
        second_arg.pos.y === Math.floor(first_arg.ka.oa.height / 2) &&
        ((third_arg = fn_121(first_arg.ka, second_arg.prev)),
        first_arg.Aa.particles.push({
          pos: new namespace.de(third_arg.x * first_arg.ka.ka, third_arg.y * first_arg.ka.ka),
          Ce: new namespace.de(
            (second_arg.prev.x - second_arg.pos.x) * 12,
            (second_arg.prev.y - second_arg.pos.y) * 12
          ),
          angle: 0,
          m0: Math.random() * 2 * 10 - 10,
          size: 1,
          ZI: 1,
          type: 3
        }));
      third_arg = !1;
      (fn_182(first_arg.settings, 21) || fifth_arg) &&
        second_arg.pos.y >= 0 &&
        second_arg.pos.y < first_arg.ka.wa.length &&
        second_arg.pos.x >= 0 &&
        second_arg.pos.x < first_arg.ka.wa[second_arg.pos.y].length &&
        first_arg.ka.wa[second_arg.pos.y][second_arg.pos.x] !== 10 &&
        fn_128(first_arg.ka, second_arg.pos) &&
        (third_arg = !0);
      fn_181(first_arg.settings) &&
        second_arg.pos.x >= 0 &&
        second_arg.pos.x < first_arg.ka.oa.width &&
        second_arg.pos.y >= 0 &&
        second_arg.pos.y < first_arg.ka.oa.height &&
        first_arg.ka.wa[second_arg.pos.y][second_arg.pos.x] === 3 &&
        (third_arg = !0);
      if (
        second_arg.pos.x < 0 ||
        second_arg.pos.x >= first_arg.ka.oa.width ||
        second_arg.pos.y < 0 ||
        second_arg.pos.y >= first_arg.ka.oa.height ||
        third_arg
      )
        if (fn_182(first_arg.settings, 4) && !third_arg)
          (second_arg.pos.x < 0
            ? ((second_arg.pos.x += first_arg.ka.oa.width),
              (second_arg.prev = second_arg.pos.clone()),
              (second_arg.prev.x += 1))
            : second_arg.pos.x >= first_arg.ka.oa.width &&
              ((second_arg.pos.x -= first_arg.ka.oa.width),
              (second_arg.prev = second_arg.pos.clone()),
              --second_arg.prev.x),
            second_arg.pos.y < 0
              ? ((second_arg.pos.y += first_arg.ka.oa.height),
                (second_arg.prev = second_arg.pos.clone()),
                (second_arg.prev.y += 1))
              : second_arg.pos.y >= first_arg.ka.oa.height &&
                ((second_arg.pos.y -= first_arg.ka.oa.height),
                (second_arg.prev = second_arg.pos.clone()),
                --second_arg.prev.y));
        else if (((third_arg = !0), (fifth_arg = fn_144(first_arg))))
          ((second_arg.pos = fifth_arg),
            (second_arg.Qm = !0),
            fn_182(first_arg.settings, 16) && fn_96(first_arg.wa, fifth_arg, !1));
        else {
          first_arg.cK.delete(second_arg);
          first_arg.settings.ka === 6 &&
            second_arg.sequenceNumber === first_arg.oa.wa &&
            first_arg.oa.wa++;
          return;
        }
      !third_arg &&
        fourth_arg &&
        ((fourth_arg.rBa = !0),
        (fourth_arg.zDa = 0),
        (fourth_arg.BQa = 0),
        (fourth_arg.gba = !1),
        (fourth_arg.l3 = 0));
      for (let local_44 of first_arg.targets)
        if (second_arg.pos.equals(local_44)) {
          fn_145(first_arg, second_arg);
          first_arg.targets.delete(local_44);
          if (fn_182(first_arg.settings, 7)) {
            second_arg = fn_121(first_arg.ka, local_44);
            for (let local_45 of first_arg.targets)
              if (local_45.equals(second_arg)) {
                first_arg.targets.delete(local_45);
                break;
              }
          }
          fourth_arg && ((fourth_arg.rBa = !1), (fourth_arg.gba = !0), (fourth_arg.l3 = 10));
          break;
        }
    },
    fn_143 = function (first_arg, second_arg) {
      var local_44 = second_arg ? first_arg.Yc.Ba : first_arg.Yc.Aa;
      local_44.rBa = !1;
      var local_45 = second_arg ? fn_226(first_arg.Yc, 0) : first_arg.Yc.ka[0];
      second_arg = second_arg ? fn_45(first_arg.Yc.Ka) : first_arg.Yc.Ka;
      for (let local_46 of first_arg.cK)
        local_46.dh &&
          (fn_54(first_arg.settings.ka, local_46.sequenceNumber, first_arg.oa.wa) ||
            (local_46.prev === null &&
              local_45.equals(local_46.pos) &&
              fn_142(first_arg, local_46, second_arg, local_44)));
    },
    fn_144 = function (first_arg, second_arg = !1) {
      second_arg = second_arg && !fn_182(first_arg.settings, 21) ? fn_148(first_arg) : null;
      var local_44 = fn_123(first_arg.ka, second_arg, 7);
      if (!local_44) return null;
      if (
        ((first_arg.settings.ka === 4 || first_arg.settings.ka === 5) &&
          fn_182(first_arg.settings, 11)) ||
        fn_188(first_arg.settings)
      )
        return local_44;
      var clone = local_44.clone();
      clone.x === 0 && first_arg.ka.wa[clone.y][clone.x + 1] === 0 && (clone.x += 1);
      clone.x === first_arg.ka.oa.width - 1 &&
        first_arg.ka.wa[clone.y][clone.x - 1] === 0 &&
        --clone.x;
      clone.y === 0 && first_arg.ka.wa[clone.y + 1][clone.x] === 0 && (clone.y += 1);
      clone.y === first_arg.ka.oa.height - 1 &&
        first_arg.ka.wa[clone.y - 1][clone.x] === 0 &&
        --clone.y;
      if (second_arg?.some((first_arg_2) => clone.equals(first_arg_2))) return local_44;
      for (let local_45 of first_arg.targets) if (clone.equals(local_45)) return local_44;
      return fn_125(first_arg.ka, first_arg.Yc.ka[0], clone) <= 3 ? local_44 : clone;
    },
    fn_145 = function (first_arg, second_arg) {
      obj_11.BOX.play();
      var pos = second_arg.pos,
        local_44 = fn_182(first_arg.settings, 2),
        local_45 = fn_182(first_arg.settings, 10),
        local_46 = fn_182(first_arg.settings, 15),
        local_47 = fn_181(first_arg.settings);
      if (local_44 || local_45 || local_46 || local_47)
        if (
          ((local_45 = fn_123(first_arg.ka, null, local_45 ? 4 : 2)), local_45 !== null || local_44)
        )
          pos = local_45;
      pos && fn_87(first_arg.oa, pos, second_arg.sOa, second_arg.dh, second_arg.sequenceNumber);
      local_44 = second_arg.prev ? second_arg.prev : second_arg.pos;
      pos = new namespace.de(
        ((second_arg.pos.x + local_44.x) * first_arg.ka.ka) / 2,
        ((second_arg.pos.y + local_44.y) * first_arg.ka.ka) / 2
      );
      local_44 = new namespace.de(
        (second_arg.pos.x - local_44.x) * 12,
        (second_arg.pos.y - local_44.y) * 12
      );
      local_45 = first_arg.ka.ka / 2;
      first_arg.Aa.particles.push({
        pos: pos.clone(),
        Ce: local_44.clone(),
        angle: 0,
        m0: Math.random() * 2 * 10 - 10,
        size: 1,
        ZI: 6,
        type: 3
      });
      first_arg.Aa.particles.push({
        pos: new namespace.de(pos.x, pos.y - local_45),
        Ce: local_44.clone(),
        angle: 0,
        m0: Math.random() * 2 * 10 - 10,
        size: 1,
        ZI: 7,
        type: 3
      });
      first_arg.Aa.particles.push({
        pos: new namespace.de(pos.x, pos.y + local_45),
        Ce: local_44.clone(),
        angle: 0,
        m0: Math.random() * 2 * 10 - 10,
        size: 1,
        ZI: 7,
        type: 3
      });
      first_arg.Aa.particles.push({
        pos: new namespace.de(pos.x - local_45, pos.y),
        Ce: local_44.clone(),
        angle: 90,
        m0: Math.random() * 2 * 10 - 10,
        size: 1,
        ZI: 7,
        type: 3
      });
      first_arg.Aa.particles.push({
        pos: new namespace.de(pos.x + local_45, pos.y),
        Ce: local_44.clone(),
        angle: 90,
        m0: Math.random() * 2 * 10 - 10,
        size: 1,
        ZI: 7,
        type: 3
      });
      fn_182(first_arg.settings, 7) &&
        ((pos = fn_121(first_arg.ka, second_arg.prev !== null ? second_arg.prev : second_arg.pos)),
        first_arg.Aa.particles.push({
          pos: new namespace.de(pos.x * first_arg.ka.ka, pos.y * first_arg.ka.ka),
          Ce: new namespace.de(-local_44.x, -local_44.y),
          angle: 0,
          m0: Math.random() * 2 * 10 - 10,
          size: 1,
          ZI: 1,
          type: 3
        }));
      first_arg.cK.delete(second_arg);
    },
    fn_146 = function (first_arg) {
      return first_arg === 7 || first_arg === 5 || first_arg === 11 || first_arg === 12;
    },
    fn_147 = function (first_arg, second_arg, third_arg, fn_457) {
      second_arg = third_arg ? fn_121(first_arg.ka, second_arg) : second_arg;
      third_arg = third_arg ? fn_45(first_arg.Yc.direction) : first_arg.Yc.direction;
      for (let local_45 of first_arg.cK)
        if (
          local_45.dh &&
          (!fn_182(first_arg.settings, 16) ||
            fn_98(first_arg.wa, local_45.pos) === "NONE" ||
            local_45.dh !== fn_97(first_arg.wa, local_45.pos)) &&
          local_45.pos.equals(second_arg)
        ) {
          if (fn_54(first_arg.settings.ka, local_45.sequenceNumber, first_arg.oa.wa)) {
            fn_457();
            break;
          }
          var clone = local_45.pos.clone(),
            num_30 = !1;
          if (fn_187(first_arg.settings)) {
            var local_44 =
              fn_197(first_arg.Ba, local_45.pos, third_arg) ??
              (fn_182(first_arg.settings, 20)
                ? fn_156(first_arg.Ca, local_45.pos, third_arg)
                : void 0);
            local_44 && ((clone.x = local_44.x), (clone.y = local_44.y), (num_30 = !0));
          }
          if (!num_30)
            switch (third_arg) {
              case "RIGHT":
                clone.x += 1;
                break;
              case "LEFT":
                --clone.x;
                break;
              case "DOWN":
                clone.y += 1;
                break;
              case "UP":
                --clone.y;
            }
          fn_182(first_arg.settings, 4) && fn_124(first_arg.ka, clone);
          local_44 =
            fn_122(first_arg.ka, clone) &&
            first_arg.ka.wa[clone.y][clone.x] !== 10 &&
            fn_128(first_arg.ka, clone);
          num_30 = !fn_122(first_arg.ka, clone) && !fn_182(first_arg.settings, 4) && num_30;
          if (local_44 || num_30) {
            num_30 =
              fn_182(first_arg.settings, 7) &&
              fn_134(first_arg.ka) &&
              local_45.pos.x === Math.floor(first_arg.ka.oa.width / 2) &&
              local_45.pos.y === Math.floor(first_arg.ka.oa.height / 2);
            if (!fn_146(first_arg.ka.wa[clone.y][clone.x]) && !num_30)
              switch (
                ((local_45.prev = local_45.pos.clone()), (clone = 1 / 3), first_arg.Yc.direction)
              ) {
                case "RIGHT":
                  local_45.pos.x += clone;
                  break;
                case "LEFT":
                  local_45.pos.x -= clone;
                  break;
                case "DOWN":
                  local_45.pos.y += clone;
                  break;
                case "UP":
                  local_45.pos.y -= clone;
              }
            fn_457();
          } else
            fn_182(first_arg.settings, 16) &&
              fn_98(first_arg.wa, clone) === fn_45(third_arg) &&
              fn_97(first_arg.wa, clone) &&
              fn_457();
        }
    },
    fn_148 = function (first_arg) {
      var list_50 = [];
      for (let index = 0; index < first_arg.ka.oa.height; index++)
        for (let index_2 = 0; index_2 < first_arg.ka.oa.width; index_2++)
          if (fn_146(first_arg.ka.wa[index][index_2])) {
            let list_51 = [
              new namespace.de(index_2, index - 1),
              new namespace.de(index_2 + 1, index),
              new namespace.de(index_2, index + 1),
              new namespace.de(index_2 - 1, index)
            ];
            fn_182(first_arg.settings, 4) &&
              list_51.forEach((first_arg_2) => {
                fn_124(first_arg.ka, first_arg_2);
              });
            for (let index_3 = 0; index_3 < list_51.length; index_3++) {
              let local_44 = list_51[index_3],
                local_45 = list_51[(index_3 + 1) % list_51.length];
              if (!fn_122(first_arg.ka, local_44) || !fn_122(first_arg.ka, local_45)) continue;
              let local_46 = first_arg.ka.wa[local_45.y][local_45.x];
              fn_146(first_arg.ka.wa[local_44.y][local_44.x]) &&
                fn_146(local_46) &&
                list_50.push(
                  new namespace.de(
                    index_2 === local_44.x ? local_45.x : local_44.x,
                    index === local_44.y ? local_45.y : local_44.y
                  )
                );
            }
          }
      return list_50;
    },
    fn_149 = function (first_arg, second_arg, third_arg) {
      var fn_457 = (first_arg_2) =>
          fn_146(first_arg.ka.wa[first_arg_2.y][first_arg_2.x])
            ? !0
            : (third_arg?.some((first_arg_3) => first_arg_3.equals(first_arg_2)) ?? !1),
        local_44 = fn_188(first_arg.settings),
        fn_458 = (first_arg_2, second_arg_2) => {
          var de_6 = new namespace.de(second_arg.x - first_arg_2, second_arg.y - second_arg_2);
          first_arg_2 = new namespace.de(second_arg.x + first_arg_2, second_arg.y + second_arg_2);
          return local_44
            ? (fn_124(first_arg.ka, de_6),
              fn_124(first_arg.ka, first_arg_2),
              !fn_457(de_6) && !fn_457(first_arg_2))
            : !fn_122(first_arg.ka, de_6) || fn_457(de_6)
              ? !1
              : fn_122(first_arg.ka, first_arg_2)
                ? !fn_457(first_arg_2)
                : !0;
        };
      return fn_458(0, -1) || fn_458(0, 1) || fn_458(-1, 0) || fn_458(1, 0);
    },
    fn_150 = function (first_arg, second_arg) {
      first_arg.cK.add(second_arg);
      fn_182(first_arg.settings, 16) && fn_96(first_arg.wa, second_arg.pos, !1);
    },
    fn_151 = function (first_arg, second_arg, third_arg, fourth_arg = !1) {
      fourth_arg = fn_144(first_arg, fourth_arg);
      var local_44 = fn_123(first_arg.ka, fourth_arg, 8);
      fourth_arg &&
        local_44 &&
        (fn_150(first_arg, { pos: fourth_arg, prev: null, Qm: !0, dh: third_arg }),
        fn_141(first_arg, local_44, second_arg));
    },
    fn_152 = function (first_arg, second_arg = !0) {
      for (let local_44 of first_arg.cK)
        if (
          local_44.dh === second_arg &&
          ((first_arg.ka.wa[local_44.pos.y][local_44.pos.x] = 7), fn_182(first_arg.settings, 7))
        ) {
          let local_45 = fn_121(first_arg.ka, local_44.pos);
          first_arg.ka.wa[local_45.y][local_45.x] = 7;
        }
    },
    cls_36 = class {
      constructor(
        first_arg,
        second_arg,
        third_arg,
        fourth_arg,
        fifth_arg,
        sixth_arg,
        seventh_arg,
        eighth_arg
      ) {
        this.settings = first_arg;
        this.ka = second_arg;
        this.Yc = third_arg;
        this.oa = fourth_arg;
        this.wa = fifth_arg;
        this.Ba = sixth_arg;
        this.Aa = seventh_arg;
        this.Ca = eighth_arg;
        this.cK = new Set();
        this.targets = new Set();
      }
      reset() {
        this.cK = new Set();
        this.targets = new Set();
        if (fn_182(this.settings, 9) && !fn_182(this.settings, 8)) {
          for (let num_30 = 0; num_30 + 1 < this.oa.ka.length; num_30 += 2) {
            let clone = this.oa.ka[num_30].pos.clone(),
              clone_2 = this.oa.ka[num_30 + 1].pos.clone(),
              local_45 =
                this.oa.ka[num_30 + 1]?.sequenceNumber ?? this.oa.ka[num_30]?.sequenceNumber;
            var local_44 = this.settings.ka === 6 && local_45 !== void 0;
            local_44 = fn_182(this.settings, 11)
              ? local_44
                ? local_45 % 2 === 1
                : num_30 < this.oa.ka.length / 2
              : !0;
            this.cK.add({ pos: clone, prev: null, Qm: !1, dh: local_44, sequenceNumber: local_45 });
            fn_141(this, clone_2, 0);
          }
          this.oa.clear();
        }
      }
      refresh() {
        for (let local_44 of this.cK) local_44.Qm = !1;
      }
    };
  var fn_153 = function (first_arg, second_arg, third_arg, fourth_arg) {
      first_arg.ka.save();
      (third_arg === 0 && fourth_arg === 0) || first_arg.ka.translate(third_arg, fourth_arg);
      third_arg = first_arg.ub.ka.ka;
      fourth_arg = first_arg.ub.wa.oa;
      var height = first_arg.ub.ka.oa.height,
        width = first_arg.ub.ka.oa.width;
      for (var index = 0; index < height; index++)
        for (var index_2 = 0; index_2 < width; index_2++) {
          var local_44 = fourth_arg[index]?.[index_2];
          if (!local_44) continue;
          var local_45 = fn_182(first_arg.settings, 11)
            ? fn_253(first_arg.ub, second_arg, local_44.dh, { R6: 0.3, WR: !1 })
            : 1;
          first_arg.ka.globalAlpha = 0.2 * local_45;
          first_arg.ka.fillStyle = local_44.color;
          local_44.Qm
            ? ((local_44 = third_arg * second_arg),
              first_arg.ka.fillRect(
                index_2 * third_arg + third_arg / 2 - local_44 / 2,
                index * third_arg + third_arg / 2 - local_44 / 2,
                local_44,
                local_44
              ))
            : first_arg.ka.fillRect(index_2 * third_arg, index * third_arg, third_arg, third_arg);
        }
      first_arg.ka.globalAlpha = 1;
      first_arg.ka.lineWidth = third_arg * 0.1;
      first_arg.ka.lineCap = "butt";
      index = third_arg / 10;
      first_arg.ka.lineDashOffset = index / 2;
      first_arg.ka.setLineDash([index, index]);
      for (index_2 = 0; index_2 < height; index_2++) {
        for (local_44 = 0; local_44 < width;) {
          var local_46 = fourth_arg[index_2]?.[local_44];
          if (
            !local_46 ||
            local_46.Qm ||
            (index_2 !== 0 && fn_155(first_arg, local_44, index_2 - 1, void 0, local_46.dh))
          )
            local_44++;
          else {
            local_45 = local_44;
            var color = local_46.color;
            for (
              local_46 = local_46.dh;
              local_44 < width &&
              fn_155(first_arg, local_44, index_2, color, local_46) &&
              (index_2 === 0 || !fn_155(first_arg, local_44, index_2 - 1, void 0, local_46));
            )
              local_44++;
            fn_182(first_arg.settings, 11) &&
              (first_arg.ka.globalAlpha = fn_253(first_arg.ub, second_arg, local_46, {
                R6: 0.3,
                WR: !1
              }));
            first_arg.ka.strokeStyle = color;
            first_arg.ka.beginPath();
            first_arg.ka.moveTo(local_45 * third_arg, index_2 * third_arg);
            first_arg.ka.lineTo(local_44 * third_arg, index_2 * third_arg);
            first_arg.ka.stroke();
            first_arg.ka.globalAlpha = 1;
          }
        }
        for (local_44 = 0; local_44 < width;)
          if (
            ((local_46 = fourth_arg[index_2]?.[local_44]),
            !local_46 ||
              local_46.Qm ||
              (index_2 !== height - 1 &&
                fn_155(first_arg, local_44, index_2 + 1, void 0, local_46.dh)))
          )
            local_44++;
          else {
            local_45 = local_44;
            color = local_46.color;
            for (
              local_46 = local_46.dh;
              local_44 < width &&
              fn_155(first_arg, local_44, index_2, color, local_46) &&
              (index_2 === height - 1 ||
                !fn_155(first_arg, local_44, index_2 + 1, void 0, local_46));
            )
              local_44++;
            fn_182(first_arg.settings, 11) &&
              (first_arg.ka.globalAlpha = fn_253(first_arg.ub, second_arg, local_46, {
                R6: 0.3,
                WR: !1
              }));
            first_arg.ka.strokeStyle = color;
            first_arg.ka.beginPath();
            first_arg.ka.moveTo(local_45 * third_arg, (index_2 + 1) * third_arg);
            first_arg.ka.lineTo(local_44 * third_arg, (index_2 + 1) * third_arg);
            first_arg.ka.stroke();
            first_arg.ka.globalAlpha = 1;
          }
      }
      for (index_2 = 0; index_2 < width; index_2++) {
        for (local_44 = 0; local_44 < height;)
          if (
            ((local_46 = fourth_arg[local_44]?.[index_2]),
            !local_46 ||
              local_46.Qm ||
              (index_2 !== 0 && fn_155(first_arg, index_2 - 1, local_44, void 0, local_46.dh)))
          )
            local_44++;
          else {
            local_45 = local_44;
            color = local_46.color;
            for (
              local_46 = local_46.dh;
              local_44 < height &&
              fn_155(first_arg, index_2, local_44, color, local_46) &&
              (index_2 === 0 || !fn_155(first_arg, index_2 - 1, local_44, void 0, local_46));
            )
              local_44++;
            fn_182(first_arg.settings, 11) &&
              (first_arg.ka.globalAlpha = fn_253(first_arg.ub, second_arg, local_46, {
                R6: 0.3,
                WR: !1
              }));
            first_arg.ka.strokeStyle = color;
            first_arg.ka.beginPath();
            first_arg.ka.moveTo(index_2 * third_arg, local_45 * third_arg);
            first_arg.ka.lineTo(index_2 * third_arg, local_44 * third_arg);
            first_arg.ka.stroke();
            first_arg.ka.globalAlpha = 1;
          }
        for (local_44 = 0; local_44 < height;)
          if (
            ((local_46 = fourth_arg[local_44]?.[index_2]),
            !local_46 ||
              local_46.Qm ||
              (index_2 !== width - 1 &&
                fn_155(first_arg, index_2 + 1, local_44, void 0, local_46.dh)))
          )
            local_44++;
          else {
            local_45 = local_44;
            color = local_46.color;
            for (
              local_46 = local_46.dh;
              local_44 < height &&
              fn_155(first_arg, index_2, local_44, color, local_46) &&
              (index_2 === width - 1 ||
                !fn_155(first_arg, index_2 + 1, local_44, void 0, local_46));
            )
              local_44++;
            fn_182(first_arg.settings, 11) &&
              (first_arg.ka.globalAlpha = fn_253(first_arg.ub, second_arg, local_46, {
                R6: 0.3,
                WR: !1
              }));
            first_arg.ka.strokeStyle = color;
            first_arg.ka.beginPath();
            first_arg.ka.moveTo((index_2 + 1) * third_arg, local_45 * third_arg);
            first_arg.ka.lineTo((index_2 + 1) * third_arg, local_44 * third_arg);
            first_arg.ka.stroke();
            first_arg.ka.globalAlpha = 1;
          }
      }
      if (second_arg > 0)
        for (
          index_2 = third_arg * second_arg,
            first_arg.ka.lineWidth = third_arg * 0.1 * second_arg,
            index *= second_arg,
            first_arg.ka.lineDashOffset = index / 2,
            first_arg.ka.setLineDash([index, index]),
            index = 0;
          index < height;
          index++
        )
          for (local_44 = 0; local_44 < width; local_44++) {
            local_45 = fourth_arg[index]?.[local_44];
            if (!local_45?.Qm) continue;
            color = local_44 * third_arg + third_arg / 2 - index_2 / 2;
            local_46 = index * third_arg + third_arg / 2 - index_2 / 2;
            fn_182(first_arg.settings, 11) &&
              (first_arg.ka.globalAlpha = fn_253(first_arg.ub, second_arg, local_45.dh, {
                R6: 0.3,
                WR: !1
              }));
            first_arg.ka.strokeStyle = local_45.color;
            first_arg.ka.strokeRect(color, local_46, index_2, index_2);
            first_arg.ka.globalAlpha = 1;
          }
      first_arg.ka.restore();
    },
    fn_154 = function (first_arg, second_arg) {
      fn_153(first_arg, second_arg, 0, 0);
      if (fn_182(first_arg.settings, 4))
        for (let local_44 of first_arg.ub.kb) fn_153(first_arg, second_arg, local_44.x, local_44.y);
    },
    fn_155 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      first_arg = first_arg.ub.wa.oa[third_arg]?.[second_arg];
      return !(
        !first_arg ||
        first_arg.Qm ||
        (fourth_arg !== void 0 && first_arg.color !== fourth_arg) ||
        (fifth_arg !== void 0 && first_arg.dh !== fifth_arg)
      );
    },
    cls_37 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
        this.ub = first_arg;
        this.settings = second_arg;
        this.ka = third_arg;
        this.oa = fourth_arg;
        this.wa = fifth_arg;
      }
    };
  var fn_156 = function (first_arg, second_arg, third_arg, fourth_arg = !0) {
      second_arg = second_arg.clone();
      third_arg === "DOWN"
        ? second_arg.y++
        : third_arg === "UP"
          ? second_arg.y--
          : third_arg === "LEFT"
            ? second_arg.x--
            : third_arg === "RIGHT" && second_arg.x++;
      fn_188(first_arg.settings) && fn_124(first_arg.ka, second_arg);
      if (
        fn_122(first_arg.ka, second_arg) &&
        first_arg.oa[second_arg.y]?.[second_arg.x]?.dh === fourth_arg
      )
        return (fn_159(first_arg, second_arg, third_arg, fourth_arg), second_arg);
    },
    fn_157 = function (first_arg, second_arg) {
      return split[
        first_arg.settings.wa === 10
          ? second_arg
            ? 8 + Math.floor(Math.random() * 2)
            : Math.floor(Math.random() * 8)
          : second_arg
            ? list_9[first_arg.settings.wa]
            : first_arg.settings.wa
      ];
    },
    fn_158 = function (first_arg) {
      var local_44 = fn_123(first_arg.ka, null, 10);
      local_44 &&
        ((first_arg.oa[local_44.y][local_44.x] = {
          Qm: !0,
          color: fn_157(first_arg, !1),
          dh: !fn_182(first_arg.settings, 11)
        }),
        fn_182(first_arg.settings, 7) &&
          ((local_44 = fn_135(first_arg.ka, local_44.x, local_44.y)),
          (first_arg.oa[local_44.y][local_44.x] = {
            Qm: !0,
            color: fn_157(first_arg, !0),
            dh: !fn_182(first_arg.settings, 11)
          })));
    },
    fn_159 = function (first_arg, second_arg, third_arg, fourth_arg = !0) {
      for (
        ;
        fn_122(first_arg.ka, second_arg) &&
        first_arg.oa[second_arg.y][second_arg.x]?.dh === fourth_arg;
      )
        (third_arg === "DOWN"
          ? second_arg.y++
          : third_arg === "UP"
            ? second_arg.y--
            : third_arg === "LEFT"
              ? second_arg.x--
              : third_arg === "RIGHT" && second_arg.x++,
          fn_188(first_arg.settings) && fn_124(first_arg.ka, second_arg));
    },
    fn_160 = function (first_arg, second_arg = !0) {
      for (let index = 0; index < first_arg.ka.oa.height; index++)
        for (let index_2 = 0; index_2 < first_arg.ka.oa.width; index_2++)
          first_arg.oa[index][index_2]?.dh === second_arg && (first_arg.ka.wa[index][index_2] = 10);
    },
    fn_161 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      var local_44 = fn_44(second_arg) * 4 + (third_arg ? 2 : 0) + (fourth_arg ? 1 : 0),
        get_value = first_arg.Aa.get(local_44),
        local_45 = first_arg.oa[second_arg.y]?.[second_arg.x]?.color ?? split[0];
      get_value ||
        ((get_value = {
          pos: second_arg.clone(),
          Ktc: third_arg,
          lhc: fourth_arg,
          active: !1,
          sAa: !1,
          p_: !1,
          color: local_45,
          dh: !!(first_arg.oa[second_arg.y]?.[second_arg.x]?.dh ?? !0)
        }),
        first_arg.Aa.set(local_44, get_value));
      first_arg = get_value.active || get_value.p_;
      get_value.active = !0;
      get_value.p_ = !1;
      fifth_arg && !first_arg && (get_value.sAa = !0);
      get_value.color = local_45;
    },
    fn_162 = function (
      first_arg,
      second_arg,
      third_arg,
      fourth_arg,
      fifth_arg,
      sixth_arg,
      seventh_arg
    ) {
      var local_44 = fn_44(second_arg) * 2 + (fourth_arg === "DOWN" || fourth_arg === "UP" ? 1 : 0),
        get_value = first_arg.wa.get(local_44);
      get_value ||
        ((get_value = {
          QLa: second_arg.clone(),
          VTa: third_arg.clone(),
          direction: fourth_arg,
          active: !1,
          sAa: !1,
          p_: !1,
          Rrc: 0,
          color: sixth_arg,
          dh: !!(first_arg.oa[second_arg.y]?.[second_arg.x]?.dh ?? !0)
        }),
        first_arg.wa.set(local_44, get_value));
      first_arg = get_value.active || get_value.p_;
      get_value.active = !0;
      get_value.p_ = !1;
      fifth_arg &&
        !first_arg &&
        ((get_value.direction = fourth_arg),
        (get_value.QLa = second_arg.clone()),
        (get_value.VTa = third_arg.clone()),
        (get_value.Rrc = 0),
        (get_value.sAa = !0));
      seventh_arg || (get_value.color = sixth_arg);
    },
    fn_163 = function (first_arg) {
      var map_3 = new Map();
      for (let local_44 of first_arg.wa.values()) {
        local_44.direction = fn_45(local_44.direction);
        let qla = local_44.QLa;
        local_44.QLa = local_44.VTa;
        local_44.VTa = qla;
        map_3.set(
          fn_44(local_44.QLa) * 2 +
            (local_44.direction === "DOWN" || local_44.direction === "UP" ? 1 : 0),
          local_44
        );
      }
      first_arg.wa.clear();
      for (let [local_44, local_45] of map_3) first_arg.wa.set(local_44, local_45);
    },
    cls_38 = class {
      constructor(first_arg, second_arg) {
        this.settings = first_arg;
        this.ka = second_arg;
        this.oa = [];
        this.Aa = new Map();
        this.wa = new Map();
      }
      reset() {
        this.Aa.clear();
        this.wa.clear();
        this.oa = [];
        for (let index = 0; index < this.ka.oa.height; index++) {
          this.oa.push([]);
          for (let index_2 = 0; index_2 < this.ka.oa.width; index_2++) this.oa[index].push(null);
        }
      }
      refresh() {
        for (let [local_46, local_47] of this.Aa.entries()) {
          var local_44 = local_46,
            local_45 = local_47;
          local_45.active || local_45.p_
            ? ((local_45.p_ = local_45.active), (local_45.sAa = !1), (local_45.active = !1))
            : this.Aa.delete(local_44);
        }
        for (let [local_46, local_47] of this.wa.entries())
          if (((local_44 = local_46), (local_45 = local_47), local_45.active || local_45.p_)) {
            if (local_45.active || local_45.p_) local_45.Rrc += 1;
            local_45.p_ = local_45.active;
            local_45.sAa = !1;
            local_45.active = !1;
          } else this.wa.delete(local_44);
        for (local_44 = 0; local_44 < this.ka.oa.height; local_44++)
          for (local_45 = 0; local_45 < this.ka.oa.width; local_45++) {
            let local_46 = this.oa[local_44]?.[local_45];
            local_46 && (local_46.Qm = !1);
          }
      }
      setActive(first_arg, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg = !1) {
        var clone = first_arg.clone(),
          clone_2 = second_arg.clone();
        switch (third_arg) {
          case "RIGHT":
            clone.x += 1;
            --clone_2.x;
            second_arg = !0;
            first_arg = !1;
            var num_30 = !0;
            break;
          case "LEFT":
            --clone.x;
            clone_2.x += 1;
            first_arg = second_arg = !0;
            num_30 = !1;
            break;
          case "DOWN":
            clone.y += 1;
            --clone_2.y;
            first_arg = second_arg = !1;
            num_30 = !0;
            break;
          case "UP":
            --clone.y;
            clone_2.y += 1;
            second_arg = !1;
            first_arg = !0;
            num_30 = !1;
            break;
          default:
            return;
        }
        fn_188(this.settings) && (fn_124(this.ka, clone), fn_124(this.ka, clone_2));
        fn_161(this, clone, second_arg, first_arg, fourth_arg);
        fn_161(this, clone_2, second_arg, num_30, fourth_arg);
        fn_162(
          this,
          clone,
          clone_2,
          third_arg,
          fourth_arg,
          fifth_arg ?? fn_157(this, !1),
          sixth_arg
        );
        fn_182(this.settings, 7) &&
          ((clone = fn_135(this.ka, clone.x, clone.y)),
          (clone_2 = fn_135(this.ka, clone_2.x, clone_2.y)),
          (third_arg = fn_45(third_arg)),
          fn_161(this, clone, second_arg, !first_arg, fourth_arg),
          fn_161(this, clone_2, second_arg, !num_30, fourth_arg),
          fn_162(
            this,
            clone,
            clone_2,
            third_arg,
            fourth_arg,
            fifth_arg ?? fn_157(this, !0),
            sixth_arg
          ));
      }
    };
  var obj_12 = {
      k$c: new namespace.tfF("/logos/fnbx/snake_arcade/", "end_audio", { DEATH: 0, WIN: 49 }, 418)
    },
    obj_13 = {
      Juc: new namespace.Z6(obj_12.k$c, "DEATH", 626.939),
      WIN: new namespace.Z6(obj_12.k$c, "WIN", 914.286)
    },
    cls_39 = class extends namespace.pfF {
      constructor() {
        super(obj_12, obj_13);
      }
    };
  var fn_164 = function (first_arg, second_arg, third_arg, fourth_arg, ctx, sixth_arg = !1) {
      fourth_arg
        ? (ctx.beginPath(),
          ctx.moveTo(second_arg.x + first_arg.ub.ka.ka, second_arg.y),
          ctx.lineTo(second_arg.x + first_arg.ub.ka.ka, second_arg.y + third_arg))
        : (ctx.beginPath(),
          ctx.moveTo(second_arg.x, second_arg.y + first_arg.ub.ka.ka),
          ctx.lineTo(second_arg.x + third_arg, second_arg.y + first_arg.ub.ka.ka));
      ctx.stroke();
      if (fn_182(first_arg.settings, 4) && !sixth_arg)
        for (let local_44 of first_arg.ub.kb)
          fn_164(
            first_arg,
            new namespace.de(second_arg.x + local_44.x, second_arg.y + local_44.y),
            third_arg,
            fourth_arg,
            ctx,
            !0
          );
    },
    fn_165 = function (first_arg, second_arg) {
      for (let local_46 of first_arg.ub.Ca.qga) {
        var local_44 = first_arg,
          local_45 = local_44.ub.wj ? 1 : second_arg;
        let local_47 = local_46.Qm ? local_45 : 1;
        if (!(local_47 <= 0)) {
          local_44.oa.save();
          var de_6 = new namespace.de(
              local_46.Lqa.x * local_44.ub.ka.ka,
              local_46.Lqa.y * local_44.ub.ka.ka
            ),
            num_30 = local_44.ub.ka.ka * 2;
          fn_182(local_44.settings, 11) &&
            (local_44.oa.globalAlpha = fn_253(local_44.ub, local_45, local_46.dh, {
              R6: 0.3,
              WR: !1
            }));
          local_44.oa.strokeStyle = local_46.color;
          local_44.oa.lineWidth = local_44.ub.ka.ka * 0.1 * local_47;
          local_44.ka.lineCap = "butt";
          local_44.oa.lineDashOffset = 0;
          local_45 = (num_30 / 9) * local_47;
          local_44.oa.setLineDash([local_45, (num_30 - local_45 * 5) / 4]);
          fn_164(local_44, de_6, num_30, local_46.vertical, local_44.oa);
          local_44.oa.restore();
        }
      }
    },
    cls_40 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
        this.ub = first_arg;
        this.settings = second_arg;
        this.ka = third_arg;
        this.oa = fourth_arg;
        this.wa = fifth_arg;
      }
    };
  var fn_166 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg) {
      if (first_arg.settings.ka === 6) {
        first_arg.ka.save();
        second_arg !== first_arg.ub.oa.wa
          ? (first_arg.ka.globalAlpha *= 0.5)
          : first_arg.ub.oa.Ba && (first_arg.ka.globalAlpha *= 0.5 + 0.5 * fifth_arg);
        second_arg = (second_arg - 1) % 10;
        var local_44 = (fifth_arg = first_arg.settings.bN()) ? 170 : 128;
        first_arg.Ba.render(
          second_arg,
          sixth_arg ? new namespace.de(0, 0) : third_arg,
          new namespace.de(-local_44 / 2, -local_44 / 2),
          0,
          fourth_arg / local_44,
          fifth_arg ? 1 : 0
        );
        first_arg.ka.restore();
      }
    },
    cls_41 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
        this.ub = first_arg;
        this.settings = second_arg;
        this.ka = third_arg;
        this.oa = fourth_arg;
        this.wa = fifth_arg;
        this.Ba = new cls_21(
          this.settings,
          "snake_arcade/sequence.png",
          10,
          this.ka,
          "snake_arcade/pixel/px_sequence.png"
        );
        this.Aa = new cls_21(
          this.settings,
          "snake_arcade/v19/key_types.png",
          5,
          this.ka,
          "snake_arcade/pixel/v19/px_key_types.png"
        );
      }
      render(first_arg) {
        for (let local_45 of this.ub.gN.keys) {
          var local_44 = first_arg,
            clone = local_45.pos.clone();
          clone.x = clone.x * this.ub.ka.ka + this.ub.ka.ka / 2;
          clone.y = clone.y * this.ub.ka.ka + this.ub.ka.ka / 2;
          let b_n = this.settings.bN(),
            num_30 =
              this.ub.ka.ka * (b_n ? 1.5 : 1.2) * (local_45.Qm && !this.ub.wj ? local_44 : 1);
          if (!local_45.Qm && (this.ub.Yc.direction !== "NONE" || fn_231(this.ub.Yc))) {
            let num_31 = (local_45.mM + (this.ub.wj ? 0 : local_44)) / (b_n ? 16 : 6),
              local_46 = fn_47(num_31);
            num_31 === 0 && (local_46 = 0);
            b_n && (local_46 = local_46 >= 0.75 ? 0.6 : 0);
            num_30 *= 1 + local_46 * 0.25;
            num_30 = Math.round(num_30);
          }
          fn_182(this.settings, 11) &&
            (this.ka.globalAlpha = fn_253(this.ub, local_44, local_45.dh, { R6: 0.3, WR: !1 }));
          this.ka.drawImage(
            this.Aa.mJ(),
            128 * local_45.type,
            0,
            128,
            128,
            clone.x - num_30 / 2,
            clone.y - num_30 / 2,
            num_30,
            num_30
          );
          local_45.sequenceNumber !== void 0 &&
            fn_166(this, local_45.sequenceNumber, clone, num_30, local_44, !1);
          fn_182(this.settings, 7) &&
            ((clone = new namespace.de(
              this.ub.ka.oa.width * this.ub.ka.ka - clone.x,
              this.ub.ka.oa.height * this.ub.ka.ka - clone.y
            )),
            this.ka.save(),
            this.ka.translate(clone.x, clone.y),
            this.ka.rotate(Math.PI),
            this.ka.drawImage(
              this.Aa.mJ(),
              128 * local_45.type,
              0,
              128,
              128,
              -(num_30 / 2),
              -(num_30 / 2),
              num_30,
              num_30
            ),
            local_45.sequenceNumber !== void 0 &&
              fn_166(this, local_45.sequenceNumber, clone, num_30, local_44, !0),
            this.ka.restore());
          this.ka.globalAlpha = 1;
        }
      }
    };
  var fn_167 = function (first_arg, second_arg) {
      for (var local_44 of first_arg.ub.Ga.Aa) {
        var local_45 = first_arg;
        local_45.ka.globalAlpha = Math.max(0, (local_44.ticks - second_arg) / 4) * 0.75;
        fn_170(local_45, local_44, local_44.pos, 0, 0);
        if (fn_182(local_45.settings, 4))
          for (var local_46 of local_45.ub.kb)
            fn_170(local_45, local_44, local_44.pos, local_46.x, local_46.y);
        local_45.ka.globalAlpha = 1;
      }
      for (let local_48 of first_arg.ub.Ga.oa) {
        local_45 = first_arg;
        var local_47 = second_arg;
        local_44 = new namespace.de(
          local_48.pos.x * local_45.ub.ka.ka,
          local_48.pos.y * local_45.ub.ka.ka
        );
        var num_30 = local_45.ub.ka.ka * 3;
        local_46 = 1;
        fn_182(local_45.settings, 11) &&
          (local_46 = fn_253(local_45.ub, local_47, local_48.dh, { R6: 0.3, WR: !1 }));
        local_45.ka.globalAlpha = Math.min(1, (local_48.mM + local_47) / 2) * local_46;
        local_45.ka.strokeStyle = "#f23606";
        local_45.ka.lineWidth = local_45.ub.ka.ka / 12;
        local_45.ka.lineDashOffset = local_45.ub.ka.ka / 8;
        local_45.ka.setLineDash([local_45.ub.ka.ka / 4, local_45.ub.ka.ka / 4]);
        fn_168(local_45, local_44, 0, 0, num_30);
        if (fn_182(local_45.settings, 4))
          for (let local_49 of local_45.ub.kb)
            fn_168(local_45, local_44, local_49.x, local_49.y, num_30);
        local_45.ka.globalAlpha = 1;
        if (local_48.pLa > 0 && !local_45.ub.wj) {
          local_47 = (3 - (local_48.pLa - local_47)) / 3;
          num_30 *= local_47;
          local_45.ka.globalAlpha = fn_47(local_47) * 0.15 * local_46;
          local_45.ka.fillStyle = "#f23606";
          fn_169(local_45, local_44, 0, 0, num_30);
          if (fn_182(local_45.settings, 4))
            for (let local_49 of local_45.ub.kb)
              fn_169(local_45, local_44, local_49.x, local_49.y, num_30);
          local_45.ka.globalAlpha = 1;
        }
      }
    },
    fn_168 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      first_arg.ka.beginPath();
      first_arg.ka.rect(
        second_arg.x + first_arg.ub.ka.ka / 2 - fifth_arg / 2 + third_arg,
        second_arg.y + first_arg.ub.ka.ka / 2 - fifth_arg / 2 + fourth_arg,
        fifth_arg,
        fifth_arg
      );
      first_arg.ka.stroke();
    },
    fn_169 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      first_arg.ka.fillRect(
        second_arg.x + first_arg.ub.ka.ka / 2 - fifth_arg / 2 + third_arg,
        second_arg.y + first_arg.ub.ka.ka / 2 - fifth_arg / 2 + fourth_arg,
        fifth_arg,
        fifth_arg
      );
    },
    fn_170 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      first_arg.ka.fillStyle = second_arg.AEe;
      first_arg.ka.fillRect(
        third_arg.x + fourth_arg,
        third_arg.y + fifth_arg,
        first_arg.ub.ka.ka,
        first_arg.ub.ka.ka
      );
      first_arg.ka.fillStyle = second_arg.darkColor;
      second_arg = first_arg.ub.ka.ka / 4;
      first_arg.settings.bN()
        ? first_arg.ka.fillRect(
            third_arg.x + first_arg.ub.ka.ka / 2 + fourth_arg - second_arg,
            third_arg.y + first_arg.ub.ka.ka / 2 + fifth_arg - second_arg,
            2 * second_arg,
            2 * second_arg
          )
        : (first_arg.ka.beginPath(),
          first_arg.ka.arc(
            third_arg.x + first_arg.ub.ka.ka / 2 + fourth_arg,
            third_arg.y + first_arg.ub.ka.ka / 2 + fifth_arg,
            second_arg,
            0,
            2 * Math.PI
          ),
          first_arg.ka.fill());
    },
    cls_42 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
        this.ub = first_arg;
        this.settings = second_arg;
        this.oa = third_arg;
        this.ka = fourth_arg;
        this.Aa = fifth_arg;
        this.wa = new cls_21(
          this.settings,
          "snake_arcade/mine.png",
          10,
          this.oa,
          "snake_arcade/pixel/px_mine.png"
        );
      }
    };
  var cls_43 = class {
    constructor(first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      this.ub = first_arg;
      this.settings = second_arg;
      this.ka = third_arg;
      this.oa = fourth_arg;
      this.Aa = fifth_arg;
      this.wa = new cls_21(
        this.settings,
        "snake_arcade/v19/key_types_dark.png",
        5,
        this.ka,
        "snake_arcade/pixel/v19/px_key_types_dark.png"
      );
    }
    render(first_arg) {
      for (let local_47 of this.ub.Vw.wa.values()) {
        var local_44 = first_arg;
        if (!local_47.r9 && !local_47.lR) {
          var de_6 = new namespace.de(
              local_47.pos.x * this.ub.ka.ka + this.ub.ka.ka / 2,
              local_47.pos.y * this.ub.ka.ka + this.ub.ka.ka / 2
            ),
            num_30 = this.ub.ka.ka * (local_47.Qm && local_47.ix === void 0 ? local_44 : 1);
          fn_182(this.settings, 11) &&
            (this.ka.globalAlpha = fn_253(this.ub, local_44, local_47.dh, {
              R6: (local_47.pos.x + local_47.pos.y) % 2 === 0 ? 0.365 : 0.265,
              WR: local_47.ix?.WR ?? !1
            }));
          this.ka.fillStyle = local_47.ix?.color ?? fn_185(this.settings, this.settings.oa, 3);
          var local_45 = num_30,
            local_46 = num_30,
            num_31 = de_6.x - num_30 / 2,
            num_32 = de_6.y - num_30 / 2;
          if (local_47.ix && (local_47.Qm || local_47.ix.p$ === 0)) {
            let local_48 = local_47.Qm ? local_44 : 1 - local_44;
            switch (local_47.Qm ? local_47.ix.zBb : local_47.ix.VSa) {
              case "UP":
                local_46 *= local_48;
                local_47.Qm && (num_32 += num_30 - local_46);
                break;
              case "DOWN":
                local_46 *= local_48;
                local_47.Qm || (num_32 += num_30 - local_46);
                break;
              case "LEFT":
                local_45 *= local_48;
                local_47.Qm && (num_31 += num_30 - local_45);
                break;
              case "RIGHT":
                ((local_45 *= local_48), local_47.Qm || (num_31 += num_30 - local_45));
            }
          }
          this.ka.fillRect(num_31, num_32, local_45, local_46);
          local_47.sOa !== void 0 &&
            local_47.sOa >= 0 &&
            (fn_182(this.settings, 11) &&
              (this.ka.globalAlpha = fn_253(this.ub, local_44, local_47.dh)),
            this.ka.drawImage(
              fn_70(this.wa).ka.canvas,
              local_47.sOa * 128,
              0,
              128,
              128,
              de_6.x - num_30 / 2,
              de_6.y - num_30 / 2,
              num_30,
              num_30
            ));
          this.ka.globalAlpha = 1;
        }
      }
    }
  };
  var cls_44 = class {
    constructor(
      first_arg,
      second_arg,
      third_arg,
      fourth_arg,
      fifth_arg,
      sixth_arg,
      seventh_arg,
      eighth_arg
    ) {
      this.ub = first_arg;
      this.settings = second_arg;
      this.ka = third_arg;
      this.oa = fourth_arg;
      this.Ba = fifth_arg;
      this.wa = sixth_arg;
      this.Aa = seventh_arg;
      this.Ca = eighth_arg;
    }
    render() {
      for (var local_44 of this.ub.Ta.particles) {
        var num_30 = Math.round(local_44.pos.x + this.ub.ka.ka / 2);
        let num_31 = Math.round(local_44.pos.y + this.ub.ka.ka / 2),
          num_32 = (local_44.angle * Math.PI) / 180;
        this.settings.bN() && (num_32 = fn_48(num_32));
        var local_45 = local_44.type === 1 ? local_44.size : Math.min(1, local_44.size);
        local_44.type === 4 && local_44.lR
          ? fn_176(this.Ca, local_45, new namespace.de(num_30, num_31), num_32, local_44.lR)
          : (this.ka.save(),
            this.ka.translate(num_30, num_31),
            this.ka.rotate(num_32),
            local_44.type === 0 &&
              ((this.ka.fillStyle = fn_185(this.settings, this.settings.oa, 3)),
              this.ka.fillRect(
                -(this.ub.ka.ka / 2) * local_45,
                -(this.ub.ka.ka / 2) * local_45,
                this.ub.ka.ka * local_45,
                this.ub.ka.ka * local_45
              )),
            local_44.type === 1
              ? ((num_30 = local_44.ota === 1 ? 170 : 128),
                this.ka.drawImage(
                  fn_70(this.oa.oa[local_44.ZI], local_44.ota).ka.canvas,
                  0,
                  0,
                  num_30,
                  num_30,
                  -(this.ub.ka.ka / 2) * local_45,
                  -(this.ub.ka.ka / 2) * local_45,
                  this.ub.ka.ka * local_45,
                  this.ub.ka.ka * local_45
                ))
              : local_44.type === 2
                ? ((num_30 = this.Aa.wa),
                  this.ka.drawImage(
                    num_30.mJ(),
                    0,
                    (num_30.getLength() - 1) * num_30.getHeight(),
                    num_30.getWidth(),
                    num_30.getHeight(),
                    -(this.ub.ka.ka / 2) * local_45,
                    -(this.ub.ka.ka / 2) * local_45,
                    this.ub.ka.ka * local_45,
                    this.ub.ka.ka * local_45
                  ))
                : local_44.ZI !== void 0 &&
                  local_44.ZI >= 0 &&
                  this.ka.drawImage(
                    local_44.type === 0 ? fn_70(this.Ba.wa).ka.canvas : fn_70(this.wa.oa).ka.canvas,
                    local_44.ZI * 128,
                    0,
                    128,
                    128,
                    -(this.ub.ka.ka / 2) * local_45,
                    -(this.ub.ka.ka / 2) * local_45,
                    this.ub.ka.ka * local_45,
                    this.ub.ka.ka * local_45
                  ),
            this.ka.restore());
      }
      for (let local_46 of this.ub.Ta.oa)
        ((local_44 = Math.round(local_46.pos.x + this.ub.ka.ka / 6)),
          (local_45 = Math.round(local_46.pos.y + this.ub.ka.ka / 9)),
          (num_30 = local_46.Ce.x * 0.025),
          this.settings.bN() && (num_30 = fn_48(num_30)),
          this.ka.save(),
          this.ka.translate(local_44, local_45),
          this.ka.rotate(num_30),
          (local_44 = Math.min(1, local_46.size)),
          (this.ka.fillStyle = local_46.color),
          this.ka.fillRect(
            -(this.ub.ka.ka / 6) * local_44,
            -(this.ub.ka.ka / 9) * local_44,
            (this.ub.ka.ka / 3) * local_44,
            (this.ub.ka.ka / 4.5) * local_44
          ),
          this.ka.restore());
    }
  };
  var cls_45 = class {
    constructor(first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      this.ub = first_arg;
      this.settings = second_arg;
      this.oa = third_arg;
      this.wa = fourth_arg;
      this.ka = fifth_arg;
    }
    render(first_arg) {
      for (let local_46 of this.ub.La.ka) {
        var local_44 = first_arg;
        let de_6 = new namespace.de(
          local_46.pos.x * this.ub.ka.ka + this.ub.ka.ka / 2,
          local_46.pos.y * this.ub.ka.ka + this.ub.ka.ka / 2
        );
        var local_45 = this.ub.wj ? 0 : local_44,
          num_30 = (local_46.mM + local_45) / 6,
          num_31 = (Math.sin(num_30 * Math.PI * 2) + 1) / 2;
        num_30 === 0 && (num_31 = 0);
        let num_32 =
          this.ub.ka.ka *
          0.5 *
          (local_46.JOa ? Math.sqrt(1 - local_44) : 1) *
          (local_46.Qm && !this.ub.wj ? 0.3 + local_44 * 0.7 : 1);
        num_32 = Math.round(num_32 * (1 + num_31 * 0.4));
        local_45 = Math.max(0, local_46.vOa - 1 + local_45);
        local_45 = local_46.Lyb ? local_45 : local_45 + 1;
        local_45 = this.ub.Aa(
          local_45 / (this.ub.Yc.ka.length - 1),
          local_45,
          this.ub.Yc.hb ? local_44 : 0,
          local_46.Vjb,
          !1
        );
        local_45 = namespace.GJ(local_45);
        let fj = namespace.FJ(namespace.oHe(local_45, num_31 * 0.15));
        local_45 = namespace.FJ(namespace.oHe(local_45, (1 - num_31) * 0.05));
        let ctx = fn_182(this.settings, 4) ? this.oa : this.wa;
        fn_182(this.settings, 11) && (ctx.globalAlpha = fn_253(this.ub, local_44, local_46.dh));
        ctx.fillStyle = fj;
        this.settings.bN()
          ? ctx.fillRect(de_6.x - num_32, de_6.y - num_32, num_32 * 2, num_32 * 2)
          : (ctx.beginPath(), ctx.arc(de_6.x, de_6.y, num_32, 0, 2 * Math.PI), ctx.fill());
        local_44 = (num_32 / 8) * num_31;
        num_30 = new namespace.de(
          local_44 * Math.cos(num_30 * 2 * Math.PI),
          local_44 * Math.sin(num_30 * 2 * Math.PI)
        );
        num_31 = num_32 * (0.5 + num_31 * 0.25);
        ctx.fillStyle = local_45;
        this.settings.bN()
          ? ctx.fillRect(
              de_6.x + num_30.x - num_31,
              de_6.y + num_30.y - num_31,
              num_31 * 2,
              num_31 * 2
            )
          : (ctx.beginPath(),
            ctx.arc(de_6.x + num_30.x, de_6.y + num_30.y, num_31, 0, 2 * Math.PI),
            ctx.fill());
        ctx.globalAlpha = 1;
      }
    }
  };
  var fn_171 = function (
      first_arg,
      second_arg,
      third_arg,
      fourth_arg,
      fifth_arg = !1,
      sixth_arg = !1
    ) {
      var local_44 = fourth_arg ? first_arg.ub.Yc.Ba : first_arg.ub.Yc.Aa,
        clone = second_arg.clone(),
        clone_2 = second_arg.clone();
      if (fn_188(first_arg.settings) && !fifth_arg) {
        var ka = first_arg.ub.ka.ka,
          num_30 = first_arg.ub.ka.oa.width * ka,
          num_31 = first_arg.ub.ka.oa.height * ka;
        num_30 = second_arg.x < ka ? num_30 : second_arg.x > num_30 - ka ? -num_30 : 0;
        ka = second_arg.y < ka ? num_31 : second_arg.y > num_31 - ka ? -num_31 : 0;
        num_30 !== 0 &&
          fn_171(
            first_arg,
            new namespace.de(second_arg.x + num_30, second_arg.y),
            third_arg,
            fourth_arg,
            !0,
            sixth_arg
          );
        ka !== 0 &&
          fn_171(
            first_arg,
            new namespace.de(second_arg.x, second_arg.y + ka),
            third_arg,
            fourth_arg,
            !0,
            sixth_arg
          );
        num_30 !== 0 &&
          ka !== 0 &&
          fn_171(
            first_arg,
            new namespace.de(second_arg.x + num_30, second_arg.y + ka),
            third_arg,
            fourth_arg,
            !0,
            sixth_arg
          );
      }
      ka = fn_187(first_arg.settings) ? (first_arg.ub.Yc.Qa[0] ?? "NONE") : "NONE";
      ka === "NONE" ||
        fifth_arg ||
        sixth_arg ||
        ((fifth_arg = second_arg.clone()),
        (num_31 = fourth_arg ? -1 : 1),
        (num_30 =
          first_arg.ub.Yc.ka[1].y +
          (ka === "DOWN" ? 1 : ka === "UP" ? -1 : 0) -
          first_arg.ub.Yc.ka[0].y),
        (fifth_arg.x +=
          first_arg.ub.ka.ka *
          (first_arg.ub.Yc.ka[1].x +
            (ka === "RIGHT" ? 1 : ka === "LEFT" ? -1 : 0) -
            first_arg.ub.Yc.ka[0].x) *
          num_31),
        (fifth_arg.y += first_arg.ub.ka.ka * num_30 * num_31),
        fn_171(first_arg, fifth_arg, third_arg, fourth_arg, !1, !0));
      first_arg.ka.save();
      if (ka !== "NONE") {
        fifth_arg = sixth_arg ? first_arg.ub.Yc.ka[1].clone() : first_arg.ub.Yc.ka[0].clone();
        num_31 = fourth_arg ? fn_121(first_arg.ub.ka, fifth_arg) : fifth_arg;
        num_30 = fourth_arg ? fn_45(ka) : ka;
        fifth_arg = first_arg.ub.ka.ka;
        var local_45 = (ka = num_30 === "LEFT" || num_30 === "RIGHT") ? 0 : -1,
          local_46 = ka ? -1 : 0;
        sixth_arg
          ? num_30 === "DOWN"
            ? --local_46
            : num_30 === "RIGHT" && --local_45
          : num_30 === "UP"
            ? --local_46
            : num_30 === "LEFT" && --local_45;
        sixth_arg = new namespace.de(
          num_31.x * fifth_arg + local_45 * fifth_arg,
          num_31.y * fifth_arg + local_46 * fifth_arg
        );
        ka = new namespace.ee(fifth_arg * (ka ? 2 : 3), fifth_arg * (ka ? 3 : 2));
        num_31 = new Path2D();
        num_31.rect(sixth_arg.x, sixth_arg.y, ka.width, ka.height);
        fn_188(first_arg.settings) &&
          ((num_30 = first_arg.ub.ka.oa.width * fifth_arg),
          (fifth_arg *= first_arg.ub.ka.oa.height),
          sixth_arg.x < 0
            ? num_31.rect(sixth_arg.x + num_30, sixth_arg.y, ka.width, ka.height)
            : sixth_arg.x + ka.width > num_30 &&
              num_31.rect(sixth_arg.x - num_30, sixth_arg.y, ka.width, ka.height),
          sixth_arg.y < 0
            ? num_31.rect(sixth_arg.x, sixth_arg.y + fifth_arg, ka.width, ka.height)
            : sixth_arg.y + ka.height > fifth_arg &&
              num_31.rect(sixth_arg.x, sixth_arg.y - fifth_arg, ka.width, ka.height));
        first_arg.ka.clip(num_31);
      }
      if (
        (sixth_arg = first_arg.settings.bN()) ||
        !first_arg.ub.wj ||
        first_arg.ub.Yc.direction === "NONE" ||
        first_arg.ub.Qa ||
        (fn_182(first_arg.settings, 11) && !first_arg.ub.Yc.wa[0])
      )
        ((first_arg.ka.fillStyle = fourth_arg
          ? first_arg.ub.Aa(0, 0, third_arg, !0)
          : first_arg.ub.Aa(0, 0, third_arg, !1)),
          sixth_arg
            ? first_arg.ka.fillRect(
                second_arg.x - first_arg.ub.ka.ka / 2,
                second_arg.y - first_arg.ub.ka.ka / 2,
                first_arg.ub.ka.ka,
                first_arg.ub.ka.ka
              )
            : (first_arg.ka.beginPath(),
              first_arg.ka.arc(
                second_arg.x,
                second_arg.y,
                fn_182(first_arg.settings, 3)
                  ? first_arg.ub.ka.ka * 0.4
                  : first_arg.ka.lineWidth / 2,
                0,
                2 * Math.PI
              ),
              first_arg.ka.fill()));
      fifth_arg = (first_arg.ub.ka.ka / 30) * (first_arg.ub.Yc.Oa ? third_arg : 1);
      ka = num_31 = 0;
      switch (first_arg.ub.Yc.Ka) {
        case "UP":
          ka = -Math.PI / 2;
          break;
        case "DOWN":
          ka = Math.PI / 2;
          break;
        case "LEFT":
          ka = Math.PI;
          break;
        case "NONE":
        case "RIGHT":
          ka = 0;
      }
      if (first_arg.ub.Yc.Oa) num_31 = ka;
      else
        switch (first_arg.ub.Yc.Ia !== "NONE" ? first_arg.ub.Yc.Ia : first_arg.ub.Yc.direction) {
          case "UP":
            num_31 = -Math.PI / 2;
            break;
          case "DOWN":
            num_31 = Math.PI / 2;
            break;
          case "LEFT":
            num_31 = Math.PI;
            break;
          case "NONE":
          case "RIGHT":
            num_31 = 0;
        }
      Math.abs(num_31 - ka) >= Math.PI &&
        (num_31 > 0 ? (ka += Math.PI * 2) : (num_31 += Math.PI * 2));
      ka = num_31 * third_arg + ka * (1 - third_arg);
      first_arg.ub.Yc.direction !== first_arg.ub.Yc.Ka && first_arg.ub.Yc.Ga > 1 && (ka = num_31);
      fourth_arg && (ka += Math.PI);
      sixth_arg && (ka = fn_48(ka));
      num_31 = first_arg.ub.Yc.Ca > 1 && !first_arg.ub.Yc.hb;
      var num_32 = first_arg.ub.ka.ka / 2,
        num_33 = (4 * Math.PI) / 5,
        local_47;
      num_30 = local_44.rBa && !first_arg.ub.wj;
      if ((local_46 = (local_45 = first_arg.ub.wj && !first_arg.ub.Ya) || num_30)) {
        if (num_30) var num_34 = 0;
        else if (first_arg.ub.Yc.Ga === 3) num_34 = Math.floor((third_arg * 4) / 2);
        else if (first_arg.ub.Yc.Ga === 2) num_34 = Math.floor(2 + (third_arg * 4) / 2);
        else if (first_arg.ub.Yc.Ga === 1) num_34 = 4 + Math.floor(third_arg * 16);
        else {
          num_34 = (8 - first_arg.ub.Yc.Vb + third_arg) / 8;
          var num_35 = first_arg.Ba.getLength() - 20;
          num_34 = Math.floor(20 + ((num_35 * num_34) % num_35));
        }
        num_35 = new namespace.de(
          ((num_30 ? -6.25 : -5) * first_arg.Ba.getWidth()) / 8,
          -first_arg.Ba.getHeight() / 2
        );
        var local_48 = num_30 ? 0.875 : 1;
        sixth_arg
          ? ((local_48 *= num_30 ? 0.5 : 0.4), (num_35.x += num_30 ? -1 : 4))
          : (local_48 *= 0.5);
        first_arg.settings.autoplay &&
          (local_47 = fn_63({
            Ode: num_34,
            Pde: num_35.x,
            q8d: local_48,
            zsb: fifth_arg,
            LJe: Math.cos(num_33) * num_32,
            bN: sixth_arg
          }));
        var local_49 = local_47?.vtb ?? 0;
        num_31 ||
          (fourth_arg ? first_arg.Ka : first_arg.Ba).render(
            num_34,
            second_arg,
            num_35,
            ka,
            fifth_arg * local_48,
            void 0,
            local_49
          );
        first_arg.ub.Yc.Ca > 0 &&
          (first_arg.ub.Yc.Ca === 1
            ? (first_arg.ka.globalAlpha = 1 - third_arg)
            : first_arg.ub.Yc.hb && (first_arg.ka.globalAlpha = third_arg),
          first_arg.Qa.render(
            num_34,
            second_arg,
            num_35,
            ka,
            fifth_arg * local_48,
            void 0,
            local_49
          ),
          (first_arg.ka.globalAlpha = 1));
      }
      if (!local_46 || first_arg.settings.autoplay) {
        clone.x += Math.cos(ka + num_33) * num_32;
        clone.y += Math.sin(ka + num_33) * num_32;
        clone_2.x += Math.cos(ka - num_33) * num_32;
        clone_2.y += Math.sin(ka - num_33) * num_32;
        local_47 &&
          ((num_32 = Math.cos(ka) * local_47.Rod),
          (num_33 = Math.sin(ka) * local_47.Rod),
          (clone.x += num_32),
          (clone.y += num_33),
          (clone_2.x += num_32),
          (clone_2.y += num_33));
        num_32 =
          local_44.zDa > 0
            ? Math.floor(((4 - local_44.zDa + third_arg) / 4) * first_arg.oa.getLength()) %
              first_arg.oa.getLength()
            : 0;
        num_33 = fourth_arg ? Math.PI : 0;
        first_arg.ub.Ya && !first_arg.ub.xc
          ? (num_33 = Math.random() * 2 * Math.PI)
          : first_arg.ub.Yc.Ca > 1
            ? (num_33 = ka - Math.PI / 2)
            : first_arg.ub.Yc.direction !== "NONE" &&
              ((num_34 = fn_232(
                first_arg.ub.Yc,
                first_arg.ub.oa.ka,
                fourth_arg,
                fn_184(first_arg.settings),
                first_arg.ub.oa.wa
              )),
              first_arg.ub.oa.ka.length > 0 && (num_33 = fn_173(first_arg, num_34, second_arg)),
              first_arg.ub.gN.keys.length > 0 &&
                ((num_35 = fn_232(
                  first_arg.ub.Yc,
                  first_arg.ub.gN.keys,
                  fourth_arg,
                  fn_182(first_arg.settings, 7),
                  first_arg.ub.oa.wa
                )),
                namespace.Cm(first_arg.ub.Yc.ka[0], num_35) <
                  namespace.Cm(first_arg.ub.Yc.ka[0], num_34) || first_arg.ub.oa.ka.length === 0) &&
                (num_33 = fn_173(first_arg, num_35, second_arg)),
              first_arg.ub.mA.cK.size > 0 &&
                ((num_35 = fn_232(
                  first_arg.ub.Yc,
                  first_arg.ub.mA.cK,
                  fourth_arg,
                  fn_182(first_arg.settings, 7),
                  first_arg.ub.oa.wa
                )),
                namespace.Cm(first_arg.ub.Yc.ka[0], num_35) <
                  namespace.Cm(first_arg.ub.Yc.ka[0], num_34) || first_arg.ub.oa.ka.length === 0) &&
                (num_33 = fn_173(first_arg, num_35, second_arg)));
        Math.abs(num_33 - local_44.eaa) >= Math.PI &&
          (num_33 = num_33 > 0 ? num_33 - Math.PI * 2 : num_33 + Math.PI * 2);
        local_44.eaa = 0.9 * local_44.eaa + 0.1 * num_33;
        local_44.eaa > Math.PI
          ? (local_44.eaa -= 2 * Math.PI)
          : local_44.eaa < -Math.PI && (local_44.eaa += 2 * Math.PI);
        num_33 = new namespace.de(-first_arg.oa.getWidth() / 2, -first_arg.oa.getHeight() / 2);
        local_48 = local_44.eaa;
        first_arg.ub.Yc.Ca > 0 &&
          ((num_34 = 2 * ka - local_44.eaa),
          first_arg.ub.Yc.Ca > 1
            ? (local_48 = num_34)
            : ((num_34 -= local_48),
              num_34 > Math.PI
                ? (num_34 -= 2 * Math.PI)
                : num_34 < -Math.PI && (num_34 += 2 * Math.PI),
              (local_48 += num_34 * (1 - third_arg))));
        num_34 = sixth_arg ? 0.3 : num;
        num_35 = sixth_arg ? fn_48(local_44.eaa) : local_44.eaa;
        local_48 = sixth_arg ? fn_48(local_48) : local_48;
        num_31 ||
          (first_arg.settings.autoplay
            ? ((local_49 = fourth_arg
                ? first_arg.ub.Aa(0, 0, 0, !0)
                : first_arg.settings.wa === 0 || first_arg.settings.wa === 10
                  ? "#5282F2"
                  : first_arg.ub.Yc.Hl),
              fn_66(first_arg.ka, {
                IEc: clone,
                JEc: clone_2,
                Rnd: local_44.eaa,
                zsb: fifth_arg,
                bN: sixth_arg,
                bodyColor: local_49,
                zEb: local_47?.zEb,
                c8b: local_45
              }))
            : ((fourth_arg ? first_arg.Ga : first_arg.oa).render(
                num_32,
                clone,
                num_33,
                num_35,
                fifth_arg * num_34
              ),
              (fourth_arg ? first_arg.Ga : first_arg.oa).render(
                num_32,
                clone_2,
                num_33,
                local_48,
                fifth_arg * num_34
              )));
        local_46 ||
          ((local_44.gba || first_arg.ub.Yc.Ca > 0) && !num_30
            ? (local_44.l3 = local_44.l3 >= 10 ? 10 : local_44.l3 + 0.6)
            : local_44.l3 !== 0 &&
              (local_44.l3 < 10 && (local_44.l3 = 10),
              (local_44.l3 += 0.3),
              local_44.l3 >= first_arg.Aa.getLength() && (local_44.l3 = 0)));
        local_49 = new namespace.de(-first_arg.Aa.getWidth() / 4, -first_arg.Aa.getHeight() / 2);
        local_49.x += sixth_arg ? 15 : 0;
        let local_50 = sixth_arg ? 0.25 : 1;
        local_46 ||
          num_31 ||
          (fourth_arg ? first_arg.La : first_arg.Aa).render(
            Math.floor(local_44.l3),
            second_arg,
            local_49,
            ka,
            fifth_arg * local_50
          );
        first_arg.ub.Yc.Ca > 0 &&
          (first_arg.ub.Yc.Ca === 1
            ? (first_arg.ka.globalAlpha = 1 - third_arg)
            : first_arg.ub.Yc.hb && (first_arg.ka.globalAlpha = third_arg),
          first_arg.settings.autoplay
            ? fn_66(first_arg.ka, {
                IEc: clone,
                JEc: clone_2,
                Rnd: local_44.eaa,
                zsb: fifth_arg,
                bN: sixth_arg,
                POe: !0,
                zEb: local_47?.zEb,
                c8b: local_45
              })
            : (first_arg.Ia.render(num_32, clone, num_33, num_35, fifth_arg * num_34),
              first_arg.Ia.render(num_32, clone_2, num_33, local_48, fifth_arg * num_34)),
          local_46 ||
            first_arg.Ra.render(
              Math.floor(local_44.l3),
              second_arg,
              local_49,
              ka,
              fifth_arg * local_50
            ),
          (first_arg.ka.globalAlpha = 1));
        !local_46 &&
          !local_44.gba &&
          local_44.l3 === 0 &&
          local_44.BQa > 0 &&
          !num_30 &&
          ((third_arg =
            Math.floor(((7 - local_44.BQa + third_arg) / 7) * first_arg.wa.getLength()) %
            first_arg.wa.getLength()),
          (local_44 = new namespace.de(first_arg.wa.getWidth() / 7, -first_arg.wa.getHeight() / 2)),
          (local_44.x += sixth_arg ? 4 : 0),
          (fourth_arg ? first_arg.Oa : first_arg.wa).render(
            third_arg,
            second_arg,
            local_44,
            ka,
            fifth_arg
          ));
      }
      first_arg.ka.restore();
    },
    fn_172 = function (first_arg, second_arg) {
      first_arg = Math.min(1, first_arg / second_arg);
      return (1 - first_arg) * (1 - 0.5 * first_arg);
    },
    fn_173 = function (first_arg, second_arg, third_arg) {
      return Math.atan2(
        second_arg.y * first_arg.ub.ka.ka + first_arg.ub.ka.ka / 2 - third_arg.y,
        second_arg.x * first_arg.ub.ka.ka + first_arg.ub.ka.ka / 2 - third_arg.x
      );
    },
    fn_174 = function (first_arg, second_arg, third_arg, fourth_arg) {
      fn_175(first_arg, second_arg, third_arg, fourth_arg);
      if (fn_188(first_arg.settings)) {
        let num_30 = first_arg.ub.ka.oa.width * first_arg.ub.ka.ka,
          num_31 = first_arg.ub.ka.oa.height * first_arg.ub.ka.ka,
          num_32 = second_arg + fourth_arg > num_30,
          num_33 = second_arg - fourth_arg < 0,
          num_34 = third_arg - fourth_arg < 0;
        third_arg + fourth_arg > num_31 &&
          (fn_175(first_arg, second_arg, third_arg - num_31, fourth_arg),
          num_32 && fn_175(first_arg, second_arg - num_30, third_arg - num_31, fourth_arg),
          num_33 && fn_175(first_arg, second_arg + num_30, third_arg - num_31, fourth_arg));
        num_32 && fn_175(first_arg, second_arg - num_30, third_arg, fourth_arg);
        num_33 && fn_175(first_arg, second_arg + num_30, third_arg, fourth_arg);
        num_34 &&
          (fn_175(first_arg, second_arg, third_arg + num_31, fourth_arg),
          num_32 && fn_175(first_arg, second_arg - num_30, third_arg + num_31, fourth_arg),
          num_33 && fn_175(first_arg, second_arg + num_30, third_arg + num_31, fourth_arg));
      }
    },
    fn_175 = function (first_arg, second_arg, third_arg, fourth_arg) {
      fn_49(second_arg, third_arg, fourth_arg, first_arg.Ta, first_arg.Ya.mJ(), first_arg.settings);
    },
    cls_46 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
        this.ub = first_arg;
        this.settings = second_arg;
        this.ka = third_arg;
        this.Ta = fourth_arg;
        this.Ya = fifth_arg;
        this.oa = new cls_21(
          this.settings,
          "snake_arcade/v19/blink.png",
          9,
          this.ka,
          "snake_arcade/pixel/px_blink.png"
        );
        this.Aa = new cls_21(
          this.settings,
          "snake_arcade/eat.png",
          15,
          this.ka,
          "snake_arcade/pixel/px_eat.png"
        );
        this.Ba = new cls_21(
          this.settings,
          "snake_arcade/v19/die.png",
          37,
          this.ka,
          "snake_arcade/pixel/px_die.png"
        );
        this.wa = new cls_21(
          this.settings,
          "snake_arcade/tongue.png",
          21,
          this.ka,
          "snake_arcade/pixel/px_tongue.png"
        );
        this.Ca = new cls_21(
          this.settings,
          "snake_arcade/effect.png",
          21,
          this.ka,
          "snake_arcade/pixel/px_effect.png"
        );
        this.Ga = new cls_21(
          this.settings,
          "snake_arcade/v19/blink.png",
          9,
          this.ka,
          "snake_arcade/pixel/px_blink.png"
        );
        this.La = new cls_21(
          this.settings,
          "snake_arcade/eat.png",
          15,
          this.ka,
          "snake_arcade/pixel/px_eat.png"
        );
        this.Ka = new cls_21(
          this.settings,
          "snake_arcade/v19/die.png",
          37,
          this.ka,
          "snake_arcade/pixel/px_die.png"
        );
        this.Oa = new cls_21(
          this.settings,
          "snake_arcade/tongue.png",
          21,
          this.ka,
          "snake_arcade/pixel/px_tongue.png"
        );
        this.Ia = new cls_21(
          this.settings,
          "snake_arcade/v19/blink.png",
          9,
          this.ka,
          "snake_arcade/pixel/px_blink.png"
        );
        this.Ra = new cls_21(
          this.settings,
          "snake_arcade/eat.png",
          15,
          this.ka,
          "snake_arcade/pixel/px_eat.png"
        );
        this.Qa = new cls_21(
          this.settings,
          "snake_arcade/v19/die.png",
          37,
          this.ka,
          "snake_arcade/pixel/px_die.png"
        );
        fn_69(this.Ia, "#5282F2", "#909090");
        fn_69(this.Ra, "#5282F2", "#909090");
        fn_69(this.Qa, "#5282F2", "#909090");
      }
      render(first_arg, second_arg, third_arg) {
        var local_44 = first_arg,
          num_30 = Math.pow(local_44, 0.2);
        this.ub.wj &&
          (first_arg =
            this.ub.Yc.Ga === 3
              ? 1
              : this.ub.Yc.Ga === 2
                ? 1 - first_arg
                : this.ub.Yc.Ga === 1
                  ? 1 - Math.pow(first_arg, 0.5) / 2
                  : 0.5);
        if (this.ub.Yc.direction === "NONE" || this.ub.Yc.Oa) first_arg = 0;
        var de_6 = new namespace.de(
            this.ub.Yc.ka[0].x * this.ub.ka.ka + this.ub.ka.ka / 2,
            this.ub.Yc.ka[0].y * this.ub.ka.ka + this.ub.ka.ka / 2
          ),
          clone = de_6.clone(),
          clone_2 = de_6.clone();
        for (let num_33 = this.ub.Yc.ka.length - 1; num_33 >= 0; num_33--) {
          let num_34 = (this.ub.Yc.ka[num_33].x + this.ub.Yc.ka[num_33].y) % 2,
            local_73 = fn_182(this.settings, 3) && num_33 > 0 && num_34 === 0,
            local_74 =
              fn_182(this.settings, 13) &&
              !fn_182(this.settings, 11) &&
              !fn_182(this.settings, 12) &&
              !this.ub.wj &&
              num_33 > 0 &&
              num_33 < this.ub.Yc.Ta.length &&
              this.ub.Yc.Ta[num_33] === 0,
            local_75 = local_73 || local_74,
            local_76 = fn_182(this.settings, 7) || fn_182(this.settings, 15);
          this.ka.lineCap =
            num_33 === this.ub.Yc.ka.length - 1 ||
            ((this.ub.ticks <= 1 || this.ub.Yc.Ga > 0) && num_33 === this.ub.Yc.ka.length - 2) ||
            (this.ub.wj && num_33 === 0) ||
            (this.ub.wj &&
              num_33 === this.ub.Yc.ka.length - 2 &&
              this.ub.Yc.ka[this.ub.Yc.ka.length - 2].equals(
                this.ub.Yc.ka[this.ub.Yc.ka.length - 1]
              )) ||
            (this.ub.wj && num_33 === this.ub.Yc.ka.length - 2 && local_76)
              ? "round"
              : "butt";
          if (fn_182(this.settings, 3) || fn_182(this.settings, 11))
            this.ka.lineCap = this.ub.wj && num_33 === 0 ? "round" : "butt";
          let local_77;
          num_33 === 0
            ? ((local_77 = this.ub.Yc.ka[0].clone()),
              this.ub.Yc.direction === "LEFT"
                ? (--local_77.x, local_77.x < 0 && (local_77.x = this.ub.ka.oa.width - 1))
                : this.ub.Yc.direction === "RIGHT"
                  ? ((local_77.x += 1), local_77.x >= this.ub.ka.oa.width && (local_77.x = 0))
                  : this.ub.Yc.direction === "UP"
                    ? (--local_77.y, local_77.y < 0 && (local_77.y = this.ub.ka.oa.height - 1))
                    : this.ub.Yc.direction === "DOWN" &&
                      ((local_77.y += 1), local_77.y >= this.ub.ka.oa.height && (local_77.y = 0)))
            : (local_77 = this.ub.Yc.ka[num_33 - 1].clone());
          let clone_3 = this.ub.Yc.ka[num_33].clone(),
            local_78;
          local_78 =
            num_33 === this.ub.Yc.ka.length - 1
              ? this.ub.Yc.Ya.clone()
              : this.ub.Yc.ka[num_33 + 1].clone();
          let num_35 = !1,
            local_79 = fn_187(this.settings);
          if (local_79) {
            let local_88 = this.ub.Yc.Qa[num_33 - 1] ?? "NONE";
            if (local_88 !== "NONE") {
              let clone_7 = local_77.clone();
              local_77 = clone_3.clone();
              switch (local_88) {
                case "LEFT":
                  --local_77.x;
                  break;
                case "RIGHT":
                  local_77.x += 1;
                  break;
                case "UP":
                  --local_77.y;
                  break;
                case "DOWN":
                  local_77.y += 1;
              }
              fn_188(this.settings) && fn_124(this.ub.ka, local_77);
              fn_182(this.settings, 19) &&
                fn_197(this.ub.Ca, clone_3, local_88) &&
                this.ub.Ca.setActive(
                  clone_3,
                  local_88,
                  num_33 === 1 && this.ub.Yc.direction !== "NONE"
                );
              fn_182(this.settings, 20) &&
                this.ub.wa.oa[local_77.y]?.[local_77.x] &&
                this.ub.wa.setActive(
                  clone_3,
                  clone_7,
                  local_88,
                  num_33 === 1 && this.ub.Yc.direction !== "NONE",
                  void 0,
                  this.ub.wj
                );
              num_33 === this.ub.Yc.ka.length - 1 &&
                ((num_35 = !0),
                Math.abs(local_77.x - clone_3.x) <= 1 &&
                  Math.abs(local_77.y - clone_3.y) <= 1 &&
                  (this.ka.lineCap = "butt"));
            }
            let local_89 = this.ub.Yc.Qa[num_33] ?? "NONE";
            if (local_89 !== "NONE")
              switch (((local_78 = clone_3.clone()), local_89)) {
                case "LEFT":
                  local_78.x += 1;
                  break;
                case "RIGHT":
                  --local_78.x;
                  break;
                case "UP":
                  local_78.y += 1;
                  break;
                case "DOWN":
                  --local_78.y;
              }
          }
          let num_36 = void 0;
          for (let local_88 of this.ub.La.ka)
            if (clone_3.equals(local_88.pos) && (this.ub.wj || num_33 >= local_88.vOa)) {
              num_36 = local_88;
              local_88.Lyb ? (local_77 = clone_3.clone()) : (local_78 = clone_3.clone());
              break;
            }
          if (fn_182(this.settings, 5) && !fn_182(this.settings, 21)) {
            let index = 0;
            for (let local_88 of this.ub.La.ka) clone_3.equals(local_88.pos) && index++;
            if (index > 1) continue;
          }
          let clone_4 = clone_3.clone(),
            clone_5 = clone_3.clone();
          clone_4.x *= this.ub.ka.ka;
          clone_4.y *= this.ub.ka.ka;
          clone_5.x *= this.ub.ka.ka;
          clone_5.y *= this.ub.ka.ka;
          clone_3.x - local_78.x === -1 || clone_3.x - local_78.x > 1
            ? ((clone_5.x += this.ub.ka.ka), (clone_5.y += this.ub.ka.ka / 2))
            : clone_3.x - local_78.x === 1 || clone_3.x - local_78.x < -1
              ? (clone_5.y += this.ub.ka.ka / 2)
              : clone_3.y - local_78.y === -1 || clone_3.y - local_78.y > 1
                ? ((clone_5.y += this.ub.ka.ka), (clone_5.x += this.ub.ka.ka / 2))
                : clone_3.y - local_78.y === 1 || clone_3.y - local_78.y < -1
                  ? (clone_5.x += this.ub.ka.ka / 2)
                  : ((clone_5.x += this.ub.ka.ka / 2), (clone_5.y += this.ub.ka.ka / 2));
          clone_3.x - local_77.x === -1 || clone_3.x - local_77.x > 1
            ? ((clone_4.x += this.ub.ka.ka), (clone_4.y += this.ub.ka.ka / 2))
            : clone_3.x - local_77.x === 1 || clone_3.x - local_77.x < -1
              ? (clone_4.y += this.ub.ka.ka / 2)
              : clone_3.y - local_77.y === -1 || clone_3.y - local_77.y > 1
                ? ((clone_4.y += this.ub.ka.ka), (clone_4.x += this.ub.ka.ka / 2))
                : clone_3.y - local_77.y === 1 || clone_3.y - local_77.y < -1
                  ? (clone_4.x += this.ub.ka.ka / 2)
                  : ((clone_4.x += this.ub.ka.ka / 2), (clone_4.y += this.ub.ka.ka / 2));
          if (num_33 === 0) {
            let local_88 = first_arg,
              local_89 =
                !fn_188(this.settings) &&
                ((this.ub.Yc.ka[0].x === 0 && this.ub.Yc.direction === "LEFT") ||
                  (this.ub.Yc.ka[0].x === this.ub.ka.oa.width - 1 &&
                    this.ub.Yc.direction === "RIGHT") ||
                  (this.ub.Yc.ka[0].y === 0 && this.ub.Yc.direction === "UP") ||
                  (this.ub.Yc.ka[0].y === this.ub.ka.oa.height - 1 &&
                    this.ub.Yc.direction === "DOWN")),
              clone_7 = this.ub.Yc.ka[0].clone(),
              clone_8 = this.ub.Yc.ka[0].clone(),
              num_41 = !1;
            if (fn_182(this.settings, 19)) {
              let direction = this.ub.Yc.direction,
                local_93 = fn_197(this.ub.Ca, clone_7, direction);
              local_93 &&
                ((clone_7.x = local_93.x),
                (clone_7.y = local_93.y),
                (num_41 = !0),
                (clone_8.x =
                  local_93.x + (direction === "RIGHT" ? 1 : direction === "LEFT" ? -1 : 0)),
                (clone_8.y =
                  local_93.y + (direction === "DOWN" ? 1 : direction === "UP" ? -1 : 0)));
            }
            if (fn_182(this.settings, 20) && !num_41) {
              let direction = this.ub.Yc.direction,
                clone_9 = clone_7.clone();
              switch (direction) {
                case "RIGHT":
                  clone_9.x += 1;
                  break;
                case "LEFT":
                  --clone_9.x;
                  break;
                case "DOWN":
                  clone_9.y += 1;
                  break;
                case "UP":
                  --clone_9.y;
              }
              fn_122(this.ub.ka, clone_9) &&
                this.ub.wa.oa[clone_9.y]?.[clone_9.x] &&
                (fn_159(this.ub.wa, clone_9, direction),
                (clone_7.x = clone_9.x),
                (clone_7.y = clone_9.y),
                (num_41 = !0),
                (clone_8.x =
                  clone_9.x + (direction === "RIGHT" ? 1 : direction === "LEFT" ? -1 : 0)),
                (clone_8.y = clone_9.y + (direction === "DOWN" ? 1 : direction === "UP" ? -1 : 0)),
                fn_188(this.settings) || (local_89 = local_89 || !fn_122(this.ub.ka, clone_7)));
            }
            if (!num_41)
              switch (this.ub.Yc.direction) {
                case "RIGHT":
                  clone_7.x += 1;
                  clone_8.x += 2;
                  break;
                case "LEFT":
                  --clone_7.x;
                  clone_8.x -= 2;
                  break;
                case "DOWN":
                  clone_7.y += 1;
                  clone_8.y += 2;
                  break;
                case "UP":
                  (--clone_7.y, (clone_8.y -= 2));
              }
            fn_182(this.settings, 4) && (fn_124(this.ub.ka, clone_7), fn_124(this.ub.ka, clone_8));
            if (!fn_182(this.settings, 21)) {
              if (
                fn_182(this.settings, 1) ||
                fn_182(this.settings, 8) ||
                fn_182(this.settings, 13) ||
                fn_182(this.settings, 17)
              ) {
                let rma = this.ub.Vw.RMa(clone_7);
                local_89 = local_89 || (fn_122(this.ub.ka, clone_7) && fn_213(rma) && !rma.r9);
              }
              if (fn_182(this.settings, 9) && fn_122(this.ub.ka, clone_7)) {
                let num_42 = !1;
                if (this.settings.ka === 6)
                  for (let local_93 of this.ub.mA.cK)
                    if (
                      local_93.dh &&
                      local_93.pos.equals(clone_7) &&
                      fn_54(this.settings.ka, local_93.sequenceNumber, this.ub.oa.wa)
                    ) {
                      num_42 = !0;
                      break;
                    }
                num_42
                  ? (local_89 = !0)
                  : fn_122(this.ub.ka, clone_8) &&
                    this.ub.ka.wa[clone_7.y][clone_7.x] === 7 &&
                    fn_128(this.ub.ka, clone_8) &&
                    (local_89 = !0);
              }
              if (fn_182(this.settings, 7)) {
                let local_93 = fn_226(this.ub.Yc, 0);
                local_89 = local_89 || clone_7.equals(local_93);
              }
              if (fn_182(this.settings, 15)) {
                let local_93 = fn_45(this.ub.Yc.direction);
                for (let local_94 of this.ub.oa.ka)
                  local_94.dh &&
                    (clone_7.equals(local_94.pos) && local_94.m7?.has(local_93) && (local_89 = !0),
                    fn_182(this.settings, 7) &&
                      fn_121(this.ub.ka, clone_7).equals(local_94.pos) &&
                      local_94.m7?.has(this.ub.Yc.direction) &&
                      (local_89 = !0));
              }
              if (fn_182(this.settings, 16)) {
                let local_93 = fn_97(this.ub.Ba, clone_7);
                fn_98(this.ub.Ba, clone_7) === fn_45(this.ub.Yc.direction) &&
                  local_93 &&
                  (local_89 = !0);
              }
              this.settings.bN() &&
                fn_122(this.ub.ka, clone_7) &&
                this.ub.ka.wa[clone_7.y][clone_7.x] === 1 &&
                !clone_7.equals(this.ub.Yc.ka[this.ub.Yc.ka.length - 1]) &&
                (local_89 = !0);
            }
            local_89 && (local_88 = Math.min(first_arg, 0.5));
            let local_90 = clone_4.x,
              local_91 = clone_4.y;
            clone_4.x = clone_4.x * local_88 + clone_5.x * (1 - local_88);
            clone_4.y = clone_4.y * local_88 + clone_5.y * (1 - local_88);
            clone = clone_4.clone();
            let bc_2 = this.ub.Yc.Bc,
              local_92 = local_89 ? Math.min(bc_2, 0.5) : bc_2;
            clone_2 = this.ub.wj
              ? clone.clone()
              : second_arg
                ? clone_5.clone()
                : new namespace.de(
                    local_90 * local_92 + clone_5.x * (1 - local_92),
                    local_91 * local_92 + clone_5.y * (1 - local_92)
                  );
            this.ub.Yc.direction === this.ub.Yc.Ka || second_arg
              ? ((this.ub.Yc.Ac = clone_4.clone()), (this.ub.Yc.Bc = first_arg))
              : this.ub.wj ||
                ((local_88 = (first_arg - this.ub.Yc.Bc) / (1 - this.ub.Yc.Bc)),
                (clone_4.x = clone_4.x * local_88 + this.ub.Yc.Ac.x * (1 - local_88)),
                (clone_4.y = clone_4.y * local_88 + this.ub.Yc.Ac.y * (1 - local_88)));
            de_6 = clone_4.clone();
          } else if (num_33 === this.ub.Yc.ka.length - 1) {
            let local_88 = first_arg;
            this.ub.Yc.Ra > 0 && (local_88 = this.ub.Yc.ka.length === 2 ? 0.5 - first_arg / 2 : 0);
            clone_5.x = clone_5.x * (1 - local_88) + clone_4.x * local_88;
            clone_5.y = clone_5.y * (1 - local_88) + clone_4.y * local_88;
            fn_182(this.settings, 14) &&
              fn_182(this.settings, 5) &&
              (this.ub.Yc.Wc = clone_5.clone());
          }
          fn_182(this.settings, 5) &&
            (num_33 !== this.ub.Yc.ka.length - 1 || this.ub.Yc.Oa
              ? num_33 === 0 &&
                this.ub.Yc.Oa &&
                (fn_188(this.settings) ||
                  fn_182(this.settings, 2) ||
                  ((clone_4.x = this.ub.Yc.oo.x * (1 - num_30) + clone_4.x * num_30),
                  (clone_4.y = this.ub.Yc.oo.y * (1 - num_30) + clone_4.y * num_30)),
                (de_6 = clone_4.clone()))
              : (this.ub.Yc.oo = clone_5.clone()));
          let linear_gradient = this.ka.createLinearGradient(
              clone_4.x,
              clone_4.y,
              clone_5.x,
              clone_5.y
            ),
            local_80,
            local_81;
          num_33 === 0
            ? ((local_80 = 0), (local_81 = first_arg / (this.ub.Yc.ka.length - 1)))
            : num_33 === this.ub.Yc.ka.length - 1
              ? ((local_80 =
                  first_arg / (this.ub.Yc.ka.length - 1) +
                  (num_33 - 1) / (this.ub.Yc.ka.length - 1)),
                (local_81 = 1))
              : ((local_80 =
                  first_arg / (this.ub.Yc.ka.length - 1) +
                  (num_33 - 1) / (this.ub.Yc.ka.length - 1)),
                (local_81 =
                  first_arg / (this.ub.Yc.ka.length - 1) + num_33 / (this.ub.Yc.ka.length - 1)));
          let num_37 = Math.max(0, num_33 - 1 + first_arg);
          linear_gradient.addColorStop(0, this.ub.Aa(local_80, num_37, local_44, !1));
          linear_gradient.addColorStop(1, this.ub.Aa(local_81, num_37 + 1, local_44, !1));
          this.ka.strokeStyle = linear_gradient;
          let num_38 = Math.min(1, (this.ub.Yc.ka.length - 4) / 12),
            num_39 = (num_33 / this.ub.Yc.ka.length) * num_38;
          this.ub.Yc.Oa &&
            (num_39 =
              num_39 * local_44 + (1 - num_33 / this.ub.Yc.ka.length) * num_38 * (1 - local_44));
          let num_40 = this.ub.ka.ka * 0.4;
          this.ka.lineWidth = this.ub.ka.ka * 0.8 * (1 - num_39) + num_40 * num_39;
          if (fn_182(this.settings, 3))
            for (let index = 0; index < this.ub.Yc.La.length; index++)
              if (!this.ub.Yc.La[index].hqc && Math.abs(this.ub.Yc.La[index].Qma - num_33) < 4) {
                let local_88 =
                  1 +
                  (1 -
                    Math.abs((4 - (num_33 - this.ub.Yc.La[index].Qma) + first_arg) / 8 - 0.5) * 2);
                this.ub.wj &&
                  ((local_88 =
                    this.ub.Yc.Ga === 3
                      ? local_88 * (0.5 + (1 - local_44) / 2)
                      : this.ub.Yc.Ga === 2
                        ? ((1 - local_44) / 2) * local_88
                        : 1),
                  (local_88 = Math.max(1, local_88)));
                local_88 = 1 + (local_88 - 1) * (this.ub.ka.ka / this.ka.lineWidth - 1);
                local_88 = 1 + (local_88 - 1) * (1 - num_33 / this.ub.Yc.ka.length);
                this.ka.lineWidth *= local_88;
                break;
              }
          let clone_6 = clone_3.clone(),
            local_82 =
              !local_75 &&
              !(fn_182(this.settings, 3) && num_33 === 0 && num_34 === 0 && !this.ub.wj),
            local_83 = clone_3.y - local_77.y + (clone_3.y - local_78.y),
            local_84 =
              (clone_3.x - local_77.x + (clone_3.x - local_78.x) !== 0 && local_83 !== 0) ||
              (this.ub.Yc.Oa && num_33 === 0),
            local_85 = local_79 && num_35,
            local_86 = (fn_182(this.settings, 11) || local_85) && !fn_182(this.settings, 3);
          if (local_84)
            if (
              ((clone_3.x = clone_3.x * this.ub.ka.ka + this.ub.ka.ka / 2),
              (clone_3.y = clone_3.y * this.ub.ka.ka + this.ub.ka.ka / 2),
              num_33 === this.ub.Yc.ka.length - 1 && this.ub.Yc.Ra === 0)
            ) {
              let local_88 = local_86 && this.ub.Yc.wa[num_33];
              if (fn_182(this.settings, 3) || local_86) {
                let de_7 = new namespace.de(
                    clone_3.x + (clone_3.x - clone_4.x),
                    clone_3.y + (clone_3.y - clone_4.y)
                  ),
                  num_42 = Math.pow(first_arg, local_88 ? 1 : 1 / 3);
                clone_5.x = clone_5.x * (1 - num_42) + de_7.x * num_42;
                clone_5.y = clone_5.y * (1 - num_42) + de_7.y * num_42;
                clone_5.x = clone_5.x * (1 - first_arg) + clone_4.x * first_arg;
                clone_5.y = clone_5.y * (1 - first_arg) + clone_4.y * first_arg;
              }
              let num_41 = Math.pow(first_arg, local_88 ? 2 : 1);
              clone_3.x = clone_3.x * (1 - num_41) + ((clone_4.x + clone_5.x) / 2) * num_41;
              clone_3.y = clone_3.y * (1 - num_41) + ((clone_4.y + clone_5.y) / 2) * num_41;
            } else if (num_33 === 0) {
              let local_88 = this.ub.Yc.Oa ? 1 - local_44 : first_arg;
              clone_3.x = clone_3.x * local_88 + clone_5.x * (1 - local_88);
              clone_3.y = clone_3.y * local_88 + clone_5.y * (1 - local_88);
            }
          if (local_82) {
            if (fn_182(this.settings, 11)) {
              let local_88 =
                (fn_182(this.settings, 3) ? 0.125 : 0.2) +
                (fn_182(this.settings, 7) || fn_183(this.settings) ? 0 : list_15[this.settings.wa]);
              this.ka.globalAlpha = fn_253(this.ub, local_44, this.ub.Yc.wa[num_33], {
                R6: local_88,
                WR: !1
              });
            }
            if (this.settings.bN()) {
              var local_45 = num_33,
                local_46 = local_77,
                local_47 = clone_6,
                local_48 = local_78,
                local_49 = third_arg,
                local_50 = local_80,
                local_51 = num_37,
                local_52 = first_arg;
              let clone_7 = local_47.clone();
              clone_7.x *= this.ub.ka.ka;
              clone_7.y *= this.ub.ka.ka;
              let ka = this.ub.ka.ka,
                ka_2 = this.ub.ka.ka;
              if (local_45 === this.ub.Yc.ka.length - 1 && this.ub.Yc.Ra === 0) {
                let num_41 = local_46.x - local_47.x,
                  num_42 = local_46.y - local_47.y;
                fn_188(this.settings) && ((num_41 = fn_51(num_41)), (num_42 = fn_51(num_42)));
                num_41 > 0
                  ? ((ka *= 1 - local_52), (clone_7.x += this.ub.ka.ka - ka))
                  : num_41 < 0
                    ? (ka *= 1 - local_52)
                    : num_42 > 0
                      ? ((ka_2 *= 1 - local_52), (clone_7.y += this.ub.ka.ka - ka_2))
                      : num_42 < 0 && (ka_2 *= 1 - local_52);
              } else if (local_45 === 0) {
                let num_41 = local_48.x - local_47.x,
                  num_42 = local_48.y - local_47.y;
                fn_188(this.settings) && ((num_41 = fn_51(num_41)), (num_42 = fn_51(num_42)));
                num_41 > 0
                  ? ((ka *= local_52), (clone_7.x += this.ub.ka.ka - ka))
                  : num_41 < 0
                    ? (ka *= local_52)
                    : num_42 > 0
                      ? ((ka_2 *= local_52), (clone_7.y += this.ub.ka.ka - ka_2))
                      : num_42 < 0 && (ka_2 *= local_52);
              }
              this.ka.fillStyle = this.ub.Aa(local_50, local_51, local_44, !1);
              this.ka.fillRect(clone_7.x, clone_7.y, ka, ka_2);
              fn_182(this.settings, 7) &&
                ((this.ka.fillStyle = this.ub.Aa(local_50, local_51, local_44, !0)),
                this.ka.save(),
                this.ka.translate(local_49.width / 2, local_49.height / 2),
                this.ka.rotate(Math.PI),
                this.ka.translate(-local_49.width / 2, -local_49.height / 2),
                this.ka.fillRect(clone_7.x, clone_7.y, ka, ka_2),
                this.ka.restore());
            } else {
              let local_88;
              var local_53 = num_33,
                local_54 = local_77,
                local_55 = clone_3,
                local_56 = clone_6,
                local_57 = clone_4,
                local_58 = clone_5,
                local_59 = local_78,
                local_60 = third_arg,
                local_61 = local_84,
                local_62 = local_86,
                local_63 = local_80,
                local_64 = local_81,
                local_65 = num_37,
                local_66 = first_arg,
                local_67 = local_44,
                local_68 = num_36;
              this.ka.beginPath();
              this.ka.moveTo(local_57.x, local_57.y);
              local_61
                ? this.ka.quadraticCurveTo(local_55.x, local_55.y, local_58.x, local_58.y)
                : this.ka.lineTo(local_58.x, local_58.y);
              this.ka.stroke();
              let num_41 = 0,
                num_42 = !1,
                local_89 = this.ub.Yc.direction === "NONE" && this.ub.Ai === 0;
              if (local_62 && local_53 === this.ub.Yc.ka.length - 1) {
                this.ka.fillStyle = this.ub.Aa(
                  local_64 - (local_89 ? 0.35 : 0),
                  local_53 - (local_89 ? 1 : 0),
                  local_67,
                  !1
                );
                this.ka.beginPath();
                if (!this.ub.Yc.wa[local_53] || (this.ub.Qa && !fn_182(this.settings, 2))) {
                  if (local_61) {
                    local_88 =
                      local_56.x !== local_59.x
                        ? local_56.x < local_59.x
                          ? (Math.PI * 3) / 2
                          : Math.PI / 2
                        : local_56.y < local_59.y
                          ? 0
                          : Math.PI;
                    let num_43 =
                      local_88 -
                      (this.ub.Yc.Ra > 0
                        ? local_88
                        : local_56.x !== local_54.x
                          ? local_56.x < local_54.x
                            ? (Math.PI * 3) / 2
                            : Math.PI / 2
                          : local_56.y < local_54.y
                            ? 0
                            : Math.PI);
                    num_43 > Math.PI
                      ? (num_43 -= 2 * Math.PI)
                      : num_43 < -Math.PI && (num_43 += 2 * Math.PI);
                    num_41 = local_88 + num_43 * Math.pow(local_66, 0.36);
                  } else if (local_68 && local_68.Lyb)
                    switch (local_68.ydb) {
                      default:
                      case "UP":
                        num_41 = 0;
                        break;
                      case "RIGHT":
                        num_41 = Math.PI / 2;
                        break;
                      case "DOWN":
                        num_41 = Math.PI;
                        break;
                      case "LEFT":
                        num_41 = (Math.PI * 3) / 2;
                    }
                  else if (local_56.equals(local_54)) {
                    let clone_7 = this.ub.Yc.ka[local_53 - 2].clone();
                    num_41 =
                      local_56.x !== clone_7.x
                        ? local_56.x < clone_7.x
                          ? Math.PI / 2
                          : (Math.PI * 3) / 2
                        : local_56.y < clone_7.y
                          ? Math.PI
                          : 0;
                  } else
                    num_41 =
                      local_56.x !== local_54.x
                        ? local_56.x < local_54.x
                          ? Math.PI / 2
                          : (Math.PI * 3) / 2
                        : local_56.y < local_54.y
                          ? Math.PI
                          : 0;
                  this.ka.arc(
                    local_58.x,
                    local_58.y,
                    this.ka.lineWidth / 2,
                    num_41,
                    num_41 + Math.PI
                  );
                } else
                  (this.ka.arc(local_58.x, local_58.y, this.ka.lineWidth / 2, 0, 2 * Math.PI),
                    (num_42 = !0));
                this.ka.fill();
              }
              if (fn_182(this.settings, 7)) {
                let de_7 = new namespace.de(
                    local_60.width - local_57.x,
                    local_60.height - local_57.y
                  ),
                  de_8 = new namespace.de(
                    local_60.width - local_58.x,
                    local_60.height - local_58.y
                  ),
                  linear_gradient_2 = this.ka.createLinearGradient(de_7.x, de_7.y, de_8.x, de_8.y);
                linear_gradient_2.addColorStop(0, this.ub.Aa(local_63, local_65, local_67, !0));
                linear_gradient_2.addColorStop(1, this.ub.Aa(local_64, local_65 + 1, local_67, !0));
                this.ka.strokeStyle = linear_gradient_2;
                this.ka.beginPath();
                this.ka.moveTo(de_7.x, de_7.y);
                if (local_61) {
                  let de_9 = new namespace.de(
                    local_60.width - local_55.x,
                    local_60.height - local_55.y
                  );
                  this.ka.quadraticCurveTo(de_9.x, de_9.y, de_8.x, de_8.y);
                } else this.ka.lineTo(de_8.x, de_8.y);
                this.ka.stroke();
                if (local_62 && local_53 === this.ub.Yc.ka.length - 1) {
                  this.ka.fillStyle = this.ub.Aa(
                    local_64 - (local_89 ? 0.35 : 0),
                    local_53 - (local_89 ? 1 : 0),
                    local_67,
                    !0
                  );
                  this.ka.beginPath();
                  if (num_42) this.ka.arc(de_8.x, de_8.y, this.ka.lineWidth / 2, 0, 2 * Math.PI);
                  else {
                    let local_90 = num_41 + Math.PI;
                    this.ka.arc(
                      de_8.x,
                      de_8.y,
                      this.ka.lineWidth / 2,
                      local_90,
                      local_90 + Math.PI
                    );
                  }
                  this.ka.fill();
                }
              }
            }
          }
          var settings = this.settings;
          let local_87 =
            !fn_182(settings, 5) &&
            !fn_182(settings, 2) &&
            !fn_182(settings, 3) &&
            !fn_182(settings, 11) &&
            !fn_182(settings, 13) &&
            !fn_182(settings, 17) &&
            !this.settings.bN();
          for (let local_88 of this.ub.Yc.La)
            if (local_88.Qma === num_33) {
              let de_7 = new namespace.de(
                clone_4.x * (1 - first_arg) + clone_5.x * first_arg,
                clone_4.y * (1 - first_arg) + clone_5.y * first_arg
              );
              if (local_84) {
                let num_42 = (1 - Math.abs(first_arg - 0.5) / 0.5) * 0.5;
                de_7.x = de_7.x * (1 - num_42) + clone_3.x * num_42;
                de_7.y = de_7.y * (1 - num_42) + clone_3.y * num_42;
              }
              let aa_2 = this.ub.Aa(
                local_80 * first_arg + local_81 * (1 - first_arg),
                num_37,
                this.ub.Yc.hb ? local_44 : 0,
                !1
              );
              local_88.Vjb &&
                ((de_7.x = third_arg.width - de_7.x),
                (de_7.y = third_arg.height - de_7.y),
                (aa_2 = this.ub.Aa(
                  local_80 * first_arg + local_81 * (1 - first_arg),
                  num_37,
                  this.ub.Yc.hb ? local_44 : 0,
                  !0
                )));
              local_88.kcb.x = de_7.x;
              local_88.kcb.y = de_7.y;
              if (!local_87) continue;
              let num_41 = Math.max(
                0,
                this.ub.ka.ka * 0.7 * (1 - (local_88.Qma + first_arg * 2) / (local_88.Onb + 6))
              );
              local_88.Qma + first_arg * 2 < 1 && (num_41 *= local_88.Qma + first_arg * 2);
              this.ub.wj &&
                (num_41 =
                  this.ub.Yc.Ga === 3
                    ? num_41 * (0.5 + (1 - local_44) / 2)
                    : this.ub.Yc.Ga === 2
                      ? ((1 - local_44) / 2) * num_41
                      : 0);
              num_41 < num_40 * 0.75 ||
                ((this.ka.fillStyle = aa_2),
                this.ka.beginPath(),
                this.ka.arc(de_7.x, de_7.y, num_41, 0, 2 * Math.PI),
                this.ka.fill());
            }
        }
        fn_182(this.settings, 11) && (this.ka.globalAlpha = 1);
        if (fn_182(this.settings, 4) || fn_182(this.settings, 14)) this.ub.Yc.Gc = de_6;
        if (fn_182(this.settings, 4) && !fn_189(this.settings)) {
          var local_69 = de_6,
            local_70 = clone,
            local_71 = clone_2;
          let yc = this.ub.Yc,
            rb = yc.rb,
            local_73 = this.ub.ticks + local_44,
            local_74 = this.ub.wj ? 3 : 10;
          if (yc.direction === "NONE")
            ((rb.zTb = !1),
              (rb.F5a = new namespace.de(0, 0)),
              (rb.head = local_69.clone()),
              (rb.Rzb = local_73));
          else if (!this.ub.wj || !this.ub.Ya) {
            var num_31 = this.ub.ka.oa.width * this.ub.ka.ka,
              num_32 = this.ub.ka.oa.height * this.ub.ka.ka;
            if (rb.zTb) {
              let num_33 = rb.head.x - local_71.x,
                num_34 = rb.head.y - local_71.y;
              num_33 > num_31 / 2 ? (num_33 -= num_31) : num_33 < -num_31 / 2 && (num_33 += num_31);
              num_34 > num_32 / 2 ? (num_34 -= num_32) : num_34 < -num_32 / 2 && (num_34 += num_32);
              rb.F5a = new namespace.de(num_33, num_34);
              rb.NRb = rb.Rzb;
              rb.zTb = !1;
              rb.pgc = this.ub.wj;
            } else if (this.ub.wj && !rb.pgc) {
              let local_75 = fn_172(Math.max(0, rb.Rzb - rb.NRb), 10);
              rb.F5a = new namespace.de(rb.F5a.x * local_75, rb.F5a.y * local_75);
              rb.NRb = rb.Rzb;
              rb.pgc = !0;
            }
            var local_72 = fn_172(Math.max(0, local_73 - rb.NRb), local_74);
            rb.head = new namespace.de(
              (((local_70.x + rb.F5a.x * local_72) % num_31) + num_31) % num_31,
              (((local_70.y + rb.F5a.y * local_72) % num_32) + num_32) % num_32
            );
            rb.Rzb = local_73;
          }
        }
        fn_182(this.settings, 7) &&
          fn_171(
            this,
            new namespace.de(
              this.ub.ka.oa.width * this.ub.ka.ka - de_6.x,
              this.ub.ka.oa.height * this.ub.ka.ka - de_6.y
            ),
            local_44,
            !0
          );
        fn_171(this, de_6, local_44, !1);
      }
    };
  var fn_176 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      first_arg.ka.save();
      first_arg.ka.translate(third_arg.x, third_arg.y);
      first_arg.ka.rotate(fourth_arg);
      first_arg.ka.scale(second_arg, second_arg);
      first_arg.ka.fillStyle = fifth_arg.color;
      second_arg = first_arg.ub.ka.ka;
      third_arg = second_arg / 2;
      switch (fifth_arg.type) {
        default:
        case 1:
          first_arg.ka.fillRect(-third_arg, -third_arg, second_arg, second_arg);
          break;
        case 2:
          first_arg.ka.beginPath();
          first_arg.ka.moveTo(-third_arg, third_arg);
          first_arg.ka.lineTo(-third_arg, 0);
          first_arg.ka.quadraticCurveTo(-third_arg, -third_arg, 0, -third_arg);
          first_arg.ka.lineTo(third_arg, -third_arg);
          first_arg.ka.lineTo(third_arg, third_arg);
          first_arg.ka.lineTo(-third_arg, third_arg);
          first_arg.ka.fill();
          break;
        case 0:
          (first_arg.ka.beginPath(),
            first_arg.ka.moveTo(-third_arg, third_arg),
            first_arg.ka.lineTo(-third_arg, 0),
            first_arg.ka.arc(0, 0, third_arg, Math.PI, 0),
            first_arg.ka.moveTo(third_arg, 0),
            first_arg.ka.lineTo(third_arg, third_arg),
            first_arg.ka.lineTo(-third_arg, third_arg),
            first_arg.ka.fill());
      }
      fifth_arg.Vcb &&
        ((third_arg = first_arg.ka.globalAlpha),
        (first_arg.ka.globalAlpha = third_arg * 0.25),
        (fourth_arg = first_arg.settings.bN() ? 160 : 128),
        first_arg.ka.rotate(fifth_arg.YBc),
        first_arg.ka.drawImage(
          first_arg.wa.mJ(),
          fifth_arg.ZBc * fourth_arg,
          0,
          fourth_arg,
          fourth_arg,
          -second_arg / 2,
          -second_arg / 2,
          second_arg,
          second_arg
        ),
        (first_arg.ka.globalAlpha = third_arg));
      first_arg.ka.restore();
    },
    cls_47 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg) {
        this.ub = first_arg;
        this.settings = second_arg;
        this.ka = third_arg;
        this.oa = fourth_arg;
        this.wa = new cls_21(
          this.settings,
          "snake_arcade/cracks.png",
          4,
          this.ka,
          "snake_arcade/pixel/px_cracks.png"
        );
      }
      render(first_arg) {
        for (let local_45 of this.ub.Ra.oa.values()) {
          var local_44 = first_arg;
          if (local_45.lR) {
            let de_6 = new namespace.de(
                local_45.pos.x * this.ub.ka.ka + this.ub.ka.ka / 2,
                local_45.pos.y * this.ub.ka.ka + this.ub.ka.ka / 2
              ),
              local_46 = local_45.Qm ? local_44 : 1;
            fn_182(this.settings, 11) &&
              (this.ka.globalAlpha = fn_253(this.ub, local_44, local_45.dh, {
                R6: (local_45.pos.x + local_45.pos.y) % 2 === 0 ? 0.365 : 0.265,
                WR: !1
              }));
            fn_176(this, local_46, de_6, local_45.lR.angle, local_45.lR);
            this.ka.globalAlpha = 1;
          }
        }
      }
    };
  var fn_177 = function () {
      return document.createElement("canvas").getContext("2d");
    },
    fn_178 = function (first_arg) {
      return [first_arg.Ga.oa, first_arg.Ga.Aa, first_arg.La.oa[0]];
    },
    fn_179 = function (first_arg) {
      return new namespace.ee(
        first_arg.ka.canvas.width -
          (fn_182(first_arg.settings, 4) ? first_arg.ub.ka.ka * (4 - first_arg.ub.ka.Aa.x) : 0),
        first_arg.ka.canvas.height -
          (fn_182(first_arg.settings, 4) ? first_arg.ub.ka.ka * (4 - first_arg.ub.ka.Aa.y) : 0)
      );
    },
    fn_180 = function (first_arg) {
      first_arg.wa.globalCompositeOperation = "destination-atop";
      first_arg.wa.fillStyle = fn_185(first_arg.settings, first_arg.settings.oa, 2);
      first_arg.wa.fillRect(0, 0, first_arg.wa.canvas.width, first_arg.wa.canvas.height);
      first_arg.wa.drawImage(first_arg.ka.canvas, 0, first_arg.ub.ka.ka / 6);
      first_arg.wa.globalCompositeOperation = "source-over";
    },
    cls_48 = class {
      constructor(first_arg, second_arg, third_arg) {
        this.ub = first_arg;
        this.settings = second_arg;
        this.canvas = third_arg;
        this.rb = new namespace.ee(0, 0);
        this.context = third_arg.getContext("2d");
        this.ka = fn_177();
        this.wa = fn_177();
        this.Oa = fn_177();
        this.Ca = fn_177();
        this.oa = fn_177();
        this.oa.fillStyle = "#000";
        this.Aa = fn_177();
        this.Qa = new cls_21(
          this.settings,
          "snake_arcade/pixel/px_circles.png",
          8,
          this.oa,
          "snake_arcade/pixel/px_circles.png"
        );
        this.Ra = new cls_32(this.ub, this.settings, this.context, this.Oa);
        this.Ga = new cls_46(this.ub, this.settings, this.ka, this.oa, this.Qa);
        this.La = new cls_23(this.ub, this.settings, this.ka, this.oa, this.Qa);
        this.Ka = new cls_43(this.ub, this.settings, this.ka, this.oa, this.Qa);
        this.yb = new cls_45(this.ub, this.settings, this.ka, this.wa, this.oa);
        this.wb = new cls_41(this.ub, this.settings, this.ka, this.oa, this.Qa);
        this.Ba = new cls_34(this.ub, this.settings, this.context, this.ka, this.wa, this.oa);
        this.Ia = new cls_42(this.ub, this.settings, this.ka, this.wa, this.oa);
        this.hb = new cls_47(this.ub, this.settings, this.ka, this.oa);
        this.kb = new cls_26(this.ub, this.settings, this.wa, this.oa);
        this.Ya = new cls_40(this.ub, this.settings, this.ka, this.wa, this.oa);
        this.Ta = new cls_37(this.ub, this.settings, this.wa, this.ka, this.oa);
        this.Kb = new cls_44(
          this.ub,
          this.settings,
          this.ka,
          this.La,
          this.Ka,
          this.Ba,
          this.Ia,
          this.hb
        );
      }
      mJ() {
        return this.canvas;
      }
      render(first_arg, second_arg) {
        this.ub.wj && this.ub.Ya && (first_arg = 0);
        this.ka.clearRect(0, 0, this.ka.canvas.width, this.ka.canvas.height);
        this.wa.clearRect(0, 0, this.wa.canvas.width, this.wa.canvas.height);
        this.oa.clearRect(0, 0, this.oa.canvas.width, this.oa.canvas.height);
        this.context.fillStyle = fn_185(this.settings, this.settings.oa, 3);
        this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        fn_182(this.settings, 4) &&
          (this.ka.save(),
          this.ka.translate(this.ub.ka.ka * 2, this.ub.ka.ka * 2),
          this.yb.render(first_arg));
        this.Ga.render(first_arg, second_arg, fn_179(this));
        for (let local_77 of this.ub.oa.ka) this.La.render(first_arg, local_77);
        this.wb.render(first_arg);
        var ba = this.Ba,
          local_44 = first_arg;
        for (let local_77 of ba.ub.mA.cK) {
          var local_45 = ba,
            local_46 = local_44;
          let clone = local_77.pos.clone(),
            num_36 = local_45.ub.ka.ka * (local_77.Qm && !local_45.ub.wj ? local_46 : 1);
          if (local_77.prev) {
            let clone_2 = local_77.prev.clone();
            if (local_77.Qzb !== void 0) {
              clone_2.x = clone.x;
              clone_2.y = clone.y;
              switch (local_77.Qzb) {
                case "UP":
                  clone_2.y += 1;
                  break;
                case "DOWN":
                  --clone_2.y;
                  break;
                case "LEFT":
                  clone_2.x += 1;
                  break;
                case "RIGHT":
                  --clone_2.x;
              }
              let clone_3 = local_77.prev.clone(),
                clone_4 = clone_3.clone();
              switch (local_77.Qzb) {
                case "UP":
                  --clone_4.y;
                  break;
                case "DOWN":
                  clone_4.y += 1;
                  break;
                case "LEFT":
                  --clone_4.x;
                  break;
                case "RIGHT":
                  clone_4.x += 1;
              }
              let de_7 = new namespace.de(
                clone_4.x * local_46 + clone_3.x * (1 - local_46),
                clone_4.y * local_46 + clone_3.y * (1 - local_46)
              );
              de_7.x = de_7.x * local_45.ub.ka.ka + local_45.ub.ka.ka / 2;
              de_7.y = de_7.y * local_45.ub.ka.ka + local_45.ub.ka.ka / 2;
              fn_136(local_45, local_77, num_36, de_7, local_77.prev, local_46);
            }
            clone.x = clone.x * local_46 + clone_2.x * (1 - local_46);
            clone.y = clone.y * local_46 + clone_2.y * (1 - local_46);
          }
          clone.x = clone.x * local_45.ub.ka.ka + local_45.ub.ka.ka / 2;
          clone.y = clone.y * local_45.ub.ka.ka + local_45.ub.ka.ka / 2;
          fn_182(local_45.settings, 11) &&
            (local_45.ka.globalAlpha = fn_253(local_45.ub, local_46, local_77.dh, {
              R6: (local_77.pos.x + local_77.pos.y) % 2 === 0 ? 0.365 : 0.265,
              WR: !1
            }));
          fn_136(local_45, local_77, num_36, clone, local_77.pos, local_46);
          if (fn_182(local_45.settings, 4) && local_77.prev !== null) {
            let num_37 = local_45.ub.ka.ka * local_45.ub.ka.oa.width,
              num_38 = local_45.ub.ka.ka * local_45.ub.ka.oa.height;
            local_77.pos.x === 0 && local_77.prev.x < 0
              ? fn_136(
                  local_45,
                  local_77,
                  num_36,
                  new namespace.de(clone.x + num_37, clone.y),
                  void 0,
                  local_46
                )
              : local_77.pos.x === local_45.ub.ka.oa.width - 1 &&
                local_77.prev.x > local_45.ub.ka.oa.width - 1 &&
                fn_136(
                  local_45,
                  local_77,
                  num_36,
                  new namespace.de(clone.x - num_37, clone.y),
                  void 0,
                  local_46
                );
            local_77.pos.y === 0 && local_77.prev.y < 0
              ? fn_136(
                  local_45,
                  local_77,
                  num_36,
                  new namespace.de(clone.x, clone.y + num_38),
                  void 0,
                  local_46
                )
              : local_77.pos.y === local_45.ub.ka.oa.height - 1 &&
                local_77.prev.y > local_45.ub.ka.oa.height - 1 &&
                fn_136(
                  local_45,
                  local_77,
                  num_36,
                  new namespace.de(clone.x, clone.y - num_38),
                  void 0,
                  local_46
                );
          }
          local_45.ka.globalAlpha = 1;
        }
        fn_182(this.settings, 4) || fn_180(this);
        var ia_2 = this.Ia,
          local_47 = first_arg;
        for (let local_77 of ia_2.ub.Ga.oa) {
          var local_48 = ia_2,
            local_49 = local_47;
          let de_7 = new namespace.de(
            local_77.pos.x * local_48.ub.ka.ka,
            local_77.pos.y * local_48.ub.ka.ka
          );
          fn_182(local_48.settings, 11) &&
            (local_48.oa.globalAlpha = fn_253(local_48.ub, local_49, local_77.dh, {
              R6: 0.3,
              WR: !1
            }));
          let num_36 = (local_77.mM + local_49) / 2,
            num_37 = Math.min(
              local_48.wa.getLength() - 1,
              Math.floor(num_36 * local_48.wa.getLength())
            ),
            num_38 = local_48.ub.ka.ka / local_48.wa.getWidth();
          local_48.wa.render(num_37, de_7, null, 0, num_38);
          local_48.oa.globalAlpha = 1;
        }
        for (let local_77 of ia_2.ub.Ga.wa)
          if (local_77.TWe) {
            var local_50 = ia_2;
            local_50.oa.globalAlpha = ((local_77.ticks - local_47) / 3) * 0.8;
            local_50.oa.fillStyle = local_77.color;
            let num_36 = local_50.ub.ka.ka * 3;
            local_50.oa.fillRect(
              local_77.pos.x - num_36 / 2,
              local_77.pos.y - num_36 / 2,
              num_36,
              num_36
            );
            local_50.oa.globalAlpha = 1;
          }
        !fn_182(this.settings, 4) && fn_182(this.settings, 12) && fn_167(this.Ia, first_arg);
        !fn_182(this.settings, 4) && fn_182(this.settings, 9) && fn_140(this.Ba);
        !fn_182(this.settings, 4) && fn_182(this.settings, 16) && this.kb.render(first_arg);
        if (fn_182(this.settings, 19)) {
          var ya_2 = this.Ya,
            local_51 = first_arg;
          for (let local_77 of ya_2.ub.Ca.qga)
            if (local_77.active || local_77.p_) {
              var local_52 = ya_2,
                local_53 = local_51;
              local_52.ka.save();
              let de_7 = new namespace.de(
                  local_77.Lqa.x * local_52.ub.ka.ka,
                  local_77.Lqa.y * local_52.ub.ka.ka
                ),
                num_36 = local_52.ub.ka.ka * 2,
                local_78 = local_52.ub.wj ? 1 : local_53,
                local_79 = local_77.sAa ? local_78 : local_77.p_ ? 1 - local_78 : 1;
              fn_182(local_52.settings, 11) &&
                (local_52.ka.globalAlpha = fn_253(local_52.ub, local_78, local_77.dh, {
                  R6: 0.3,
                  WR: !1
                }));
              local_52.ka.strokeStyle = local_77.color;
              let num_37 = local_52.ub.ka.ka * 0.1;
              local_52.ka.lineWidth = num_37 + num_37 * 2 * local_79;
              local_52.ka.lineCap = "butt";
              local_52.ka.lineDashOffset = 0;
              if (local_79 !== 1) {
                let num_38 = (num_36 / 9) * (1 - local_79);
                local_52.ka.setLineDash([(num_36 - num_38 * 4) / 5, num_38]);
              } else local_52.ka.setLineDash([]);
              fn_164(local_52, de_7, num_36, local_77.vertical, local_52.ka);
              local_52.ka.restore();
            }
        }
        if (fn_182(this.settings, 20)) {
          var ta = this.Ta,
            local_54 = first_arg;
          for (let local_77 of ta.ub.wa.wa.values())
            if (local_77.active || local_77.p_) {
              ta.oa.strokeStyle = local_77.color;
              var local_55 = ta;
              let local_78 = local_55.ub.wj ? 1 : local_54,
                local_79 = local_77.sAa ? local_78 : local_77.p_ ? 1 - local_78 : 1;
              if (!(local_79 <= 0)) {
                local_55.oa.save();
                fn_182(local_55.settings, 11) &&
                  (local_55.oa.globalAlpha = fn_253(local_55.ub, local_78, local_77.dh, {
                    R6: 0.3,
                    WR: !1
                  }));
                local_55.oa.lineCap = "butt";
                var local_56 = local_55.ub.wj ? 0 : local_78,
                  num_30 = 0.5 * (local_77.Rrc + local_56),
                  ka = local_55.ub.ka.ka,
                  num_31 = ka / 5;
                local_55.oa.setLineDash([num_31, num_31]);
                local_55.oa.lineDashOffset = -num_31 * local_56 * 2;
                local_55.oa.lineWidth = ka * num_2 * local_79;
                var num_32 = (ka / 6) * local_79,
                  local_57 = local_77.QLa.x * ka + ka / 2,
                  local_58 = local_77.QLa.y * ka + ka / 2,
                  local_59 = local_77.VTa.x * ka + ka / 2,
                  local_60 = local_77.VTa.y * ka + ka / 2;
                switch (local_77.direction) {
                  case "RIGHT":
                    local_57 = local_77.QLa.x * ka;
                    local_59 = (local_77.VTa.x + 1) * ka;
                    break;
                  case "LEFT":
                    local_57 = (local_77.QLa.x + 1) * ka;
                    local_59 = local_77.VTa.x * ka;
                    break;
                  case "DOWN":
                    local_58 = local_77.QLa.y * ka;
                    local_60 = (local_77.VTa.y + 1) * ka;
                    break;
                  case "UP":
                    ((local_58 = (local_77.QLa.y + 1) * ka), (local_60 = local_77.VTa.y * ka));
                }
                local_55.oa.beginPath();
                var local_61 = Math.abs(local_59 - local_57) + Math.abs(local_60 - local_58);
                for (let num_36 = 0; num_36 <= local_61; num_36 += 2) {
                  let num_37 = Math.min(num_36, local_61),
                    num_38 = 2 * Math.PI * (num_37 / ka - num_30),
                    local_80 = local_55.settings.bN()
                      ? num_32 * (Math.sin(num_38) >= 0 ? 1 : -1)
                      : num_32 * Math.sin(num_38),
                    local_81 = local_57,
                    local_82 = local_58;
                  switch (local_77.direction) {
                    case "RIGHT":
                      local_81 += num_37;
                      local_82 += local_80;
                      break;
                    case "LEFT":
                      local_81 -= num_37;
                      local_82 -= local_80;
                      break;
                    case "DOWN":
                      local_82 += num_37;
                      local_81 -= local_80;
                      break;
                    case "UP":
                      ((local_82 -= num_37), (local_81 += local_80));
                  }
                  num_36 === 0
                    ? local_55.oa.moveTo(local_81, local_82)
                    : local_55.oa.lineTo(local_81, local_82);
                }
                local_55.oa.stroke();
                local_55.oa.restore();
              }
            }
          for (let local_77 of ta.ub.wa.Aa.values())
            if (local_77.active || local_77.p_) {
              ta.oa.strokeStyle = local_77.color;
              var local_62 = ta,
                local_63 = local_54;
              if (!local_62.ub.wj || !local_77.p_) {
                local_62.oa.save();
                var local_64 = local_62.ub.wj ? 1 : local_63,
                  local_65 = local_77.sAa ? local_64 : local_77.p_ ? 1 - local_64 : 1;
                fn_182(local_62.settings, 11) &&
                  (local_62.oa.globalAlpha = fn_253(local_62.ub, local_64, local_77.dh, {
                    R6: 0.3,
                    WR: !1
                  }));
                var ka_2 = local_62.ub.ka.ka,
                  num_33 = ka_2 * 0.1;
                local_62.oa.lineWidth = num_33 + num_33 * 2 * local_65;
                local_62.oa.lineCap = "butt";
                if (local_65 !== 1) {
                  let num_36 = ka_2 / 10,
                    num_37 = num_36 * (1 - local_65),
                    local_78 = num_36 + num_36 * local_65;
                  local_62.oa.lineDashOffset = local_78 / 2;
                  local_62.oa.setLineDash([local_78, num_37]);
                } else local_62.oa.setLineDash([]);
                var local_66 = local_77.pos.x * ka_2 + (local_77.Ktc && local_77.lhc ? ka_2 : 0),
                  local_67 = local_77.pos.y * ka_2 + (!local_77.Ktc && local_77.lhc ? ka_2 : 0),
                  local_68 =
                    local_77.pos.x * ka_2 + (local_77.Ktc ? (local_77.lhc ? ka_2 : 0) : ka_2),
                  local_69 =
                    local_77.pos.y * ka_2 + (local_77.Ktc ? ka_2 : local_77.lhc ? ka_2 : 0);
                local_62.oa.beginPath();
                local_62.oa.moveTo(local_66, local_67);
                local_62.oa.lineTo(local_68, local_69);
                local_62.oa.stroke();
                local_62.oa.restore();
              }
            }
        }
        !fn_182(this.settings, 4) && fn_182(this.settings, 19) && fn_165(this.Ya, first_arg);
        !fn_182(this.settings, 4) && fn_182(this.settings, 20) && fn_154(this.Ta, first_arg);
        fn_182(this.settings, 4) || this.yb.render(first_arg);
        this.Ka.render(first_arg);
        this.hb.render(first_arg);
        fn_182(this.settings, 13);
        var ga = this.Ga,
          local_70 = first_arg,
          local_71 = fn_179(this);
        if (ga.ub.Yc.oc > 0) {
          let num_36 = ga.ub.ka.ka / 30,
            num_37 =
              Math.floor(((6 - ga.ub.Yc.oc + local_70) / 6) * ga.Ca.getLength()) %
              ga.Ca.getLength(),
            de_7 = new namespace.de(
              ga.ub.Yc.kb.x * ga.ub.ka.ka + ga.ub.ka.ka / 2,
              ga.ub.Yc.kb.y * ga.ub.ka.ka + ga.ub.ka.ka / 2
            ),
            de_8 = new namespace.de(-ga.Ca.getWidth(), -ga.Ca.getHeight() / 2),
            num_38 = num_36 * (ga.settings.bN() ? 0.8 : 1);
          ga.Ca.render(num_37, de_7, de_8, ga.ub.Yc.Qb, num_38);
          fn_182(ga.settings, 7) &&
            ga.Ca.render(
              num_37,
              new namespace.de(local_71.width - de_7.x, local_71.height - de_7.y),
              de_8,
              ga.ub.Yc.Qb + Math.PI,
              num_38
            );
        }
        this.Kb.render();
        if (fn_182(this.settings, 14)) {
          var local_72 = first_arg;
          fn_182(this.settings, 4) &&
            (this.oa.save(), this.oa.translate(this.ub.ka.ka * 2, this.ub.ka.ka * 2));
          var ga_2 = this.Ga;
          let local_77 = ga_2.ub.wj ? 1 : local_72;
          fn_174(
            ga_2,
            ga_2.ub.Yc.Gc.x,
            ga_2.ub.Yc.Gc.y,
            Math.max(2, ga_2.ub.Yc.Aa.light - local_77 * fn_233(ga_2.ub.Yc.Aa.light)) *
              ga_2.ub.ka.ka
          );
          fn_182(ga_2.settings, 7) &&
            fn_174(
              ga_2,
              ga_2.ub.ka.oa.width * ga_2.ub.ka.ka - ga_2.ub.Yc.Gc.x,
              ga_2.ub.ka.oa.height * ga_2.ub.ka.ka - ga_2.ub.Yc.Gc.y,
              Math.max(2, ga_2.ub.Yc.Ba.light - local_77 * fn_233(ga_2.ub.Yc.Ba.light)) *
                ga_2.ub.ka.ka
            );
          fn_182(ga_2.settings, 5) &&
            (fn_175(ga_2, ga_2.ub.Yc.Wc.x, ga_2.ub.Yc.Wc.y, 0.75 * ga_2.ub.ka.ka),
            fn_182(ga_2.settings, 7) &&
              fn_175(
                ga_2,
                ga_2.ub.ka.oa.width * ga_2.ub.ka.ka - ga_2.ub.Yc.Wc.x,
                ga_2.ub.ka.oa.height * ga_2.ub.ka.ka - ga_2.ub.Yc.Wc.y,
                0.75 * ga_2.ub.ka.ka
              ));
          if (!fn_182(ga_2.settings, 13))
            for (let local_81 of ga_2.ub.Yc.La)
              fn_175(
                ga_2,
                local_81.kcb.x,
                local_81.kcb.y,
                ga_2.ub.ka.ka *
                  0.8 *
                  (Math.pow(
                    Math.max(
                      0,
                      1 -
                        (local_81.Qma + local_77 * 2) /
                          (local_81.Onb - (local_81.Onb % 2 === 0 ? 0 : 1))
                    ) - 1,
                    3
                  ) +
                    1) *
                  (ga_2.ub.wj && !ga_2.ub.Ya ? (ga_2.ub.Yc.Ga === 3 ? 1 - local_72 : 0) : 1)
              );
          var la = this.La;
          let local_78 = la.ub.wj ? 1 : local_72;
          for (let local_81 of la.ub.oa.ka) {
            let num_37 =
                Math.max(0, local_81.light - local_78 * 0.1) *
                la.ub.ka.ka *
                (local_81.Qm ? local_78 : 1),
              clone = local_81.pos.clone();
            !fn_181(la.settings) ||
              local_81.Qm ||
              la.ub.wj ||
              ((clone.x += (local_81.QG.x > 0 ? local_81.Ce.x : 0) * local_78),
              (clone.y += (local_81.QG.y > 0 ? local_81.Ce.y : 0) * local_78));
            fn_49(
              clone.x * la.ub.ka.ka + la.ub.ka.ka / 2,
              clone.y * la.ub.ka.ka + la.ub.ka.ka / 2,
              num_37,
              la.wa,
              la.Aa.mJ(),
              la.settings
            );
            if (fn_182(la.settings, 7) && fn_184(la.settings)) {
              let local_82 = fn_121(la.ub.ka, clone);
              fn_49(
                local_82.x * la.ub.ka.ka + la.ub.ka.ka / 2,
                local_82.y * la.ub.ka.ka + la.ub.ka.ka / 2,
                num_37,
                la.wa,
                la.Aa.mJ(),
                la.settings
              );
            }
          }
          var ka_3 = this.Ka;
          for (let local_81 of ka_3.ub.Vw.wa.values()) {
            if (local_81.r9 || local_81.lR || local_81.ix) continue;
            let local_82 = local_81.pos.x * ka_3.ub.ka.ka + ka_3.ub.ka.ka / 2,
              local_83 = local_81.pos.y * ka_3.ub.ka.ka + ka_3.ub.ka.ka / 2,
              num_37 = ka_3.ub.ka.ka * (local_81.Qm ? local_72 : 1);
            if (ka_3.settings.bN()) {
              let num_38 = (320 / 120) * num_37 * 1.4;
              ka_3.oa.drawImage(
                ka_3.Aa.mJ(),
                0,
                2560,
                320,
                320,
                local_82 - num_38,
                local_83 - num_38,
                num_38 * 2,
                num_38 * 2
              );
            } else
              (ka_3.oa.save(),
                ka_3.oa.translate(local_82, local_83),
                ka_3.oa.rotate(Math.PI / 4),
                ka_3.oa.fillRect(-num_37, -num_37, num_37 * 2, num_37 * 2),
                ka_3.oa.restore());
          }
          var wb_2 = this.wb;
          let local_79 = wb_2.ub.wj ? 0 : local_72,
            b_n = wb_2.settings.bN();
          for (let local_81 of wb_2.ub.gN.keys) {
            let num_37 = (local_81.mM + local_79) / (b_n ? 16 : 6),
              local_82 = num_37 === 0 ? 0 : fn_47(num_37);
            b_n && (local_82 = local_82 >= 0.75 ? 0.6 : 0);
            let num_38 = wb_2.ub.ka.ka * (local_81.Qm ? local_72 : 1) * (1 + local_82 * 0.25);
            fn_49(
              local_81.pos.x * wb_2.ub.ka.ka + wb_2.ub.ka.ka / 2,
              local_81.pos.y * wb_2.ub.ka.ka + wb_2.ub.ka.ka / 2,
              num_38,
              wb_2.oa,
              wb_2.wa.mJ(),
              wb_2.settings
            );
            if (fn_182(wb_2.settings, 7)) {
              let local_83 = fn_121(wb_2.ub.ka, local_81.pos);
              fn_49(
                local_83.x * wb_2.ub.ka.ka + wb_2.ub.ka.ka / 2,
                local_83.y * wb_2.ub.ka.ka + wb_2.ub.ka.ka / 2,
                num_38,
                wb_2.oa,
                wb_2.wa.mJ(),
                wb_2.settings
              );
            }
          }
          var ba_2 = this.Ba;
          for (let local_81 of ba_2.ub.mA.cK) {
            let local_82 = local_81.prev
                ? new namespace.de(
                    local_81.pos.x * local_72 + local_81.prev.x * (1 - local_72),
                    local_81.pos.y * local_72 + local_81.prev.y * (1 - local_72)
                  )
                : local_81.pos,
              num_37 = ba_2.ub.ka.ka * (local_81.Qm ? local_72 : 1);
            ba_2.wa.fillRect(
              local_82.x * ba_2.ub.ka.ka + ba_2.ub.ka.ka / 2 - num_37,
              local_82.y * ba_2.ub.ka.ka + ba_2.ub.ka.ka / 2 - num_37,
              num_37 * 2,
              num_37 * 2
            );
            if (fn_182(ba_2.settings, 7)) {
              let local_83 = fn_121(ba_2.ub.ka, local_82);
              ba_2.wa.fillRect(
                local_83.x * ba_2.ub.ka.ka + ba_2.ub.ka.ka / 2 - num_37,
                local_83.y * ba_2.ub.ka.ka + ba_2.ub.ka.ka / 2 - num_37,
                num_37 * 2,
                num_37 * 2
              );
            }
          }
          for (let local_81 of ba_2.ub.mA.targets) {
            let num_37 = ba_2.ub.ka.ka / 2;
            ba_2.wa.fillRect(
              local_81.x * ba_2.ub.ka.ka + ba_2.ub.ka.ka / 2 - num_37,
              local_81.y * ba_2.ub.ka.ka + ba_2.ub.ka.ka / 2 - num_37,
              num_37 * 2,
              num_37 * 2
            );
          }
          var yb_2 = this.yb;
          for (let local_81 of yb_2.ub.La.ka) {
            let num_37 = yb_2.ub.ka.ka * (local_81.JOa ? 1 - local_72 : 1),
              local_82 = local_81.pos.x * yb_2.ub.ka.ka + yb_2.ub.ka.ka / 2,
              local_83 = local_81.pos.y * yb_2.ub.ka.ka + yb_2.ub.ka.ka / 2;
            yb_2.settings.bN()
              ? yb_2.ka.fillRect(local_82 - num_37, local_83 - num_37, num_37 * 2, num_37 * 2)
              : (yb_2.ka.beginPath(),
                yb_2.ka.arc(local_82, local_83, num_37, 0, Math.PI * 2),
                yb_2.ka.fill());
          }
          var ia_3 = this.Ia;
          let num_36 = ia_3.ub.ka.ka * 3;
          for (let local_81 of ia_3.ub.Ga.oa) {
            let num_37 = num_36 * Math.min(1, (local_81.mM + local_72) / 2);
            ia_3.Aa.fillRect(
              local_81.pos.x * ia_3.ub.ka.ka + ia_3.ub.ka.ka / 2 - num_37 / 2,
              local_81.pos.y * ia_3.ub.ka.ka + ia_3.ub.ka.ka / 2 - num_37 / 2,
              num_37,
              num_37
            );
          }
          for (let local_81 of ia_3.ub.Ga.wa) {
            let num_37 = Math.max(0, (local_81.ticks - local_72) / 3),
              num_38 = num_36 * (1 + fn_47(1 - num_37)) * num_37;
            ia_3.Aa.fillRect(
              local_81.pos.x - num_38 / 2,
              local_81.pos.y - num_38 / 2,
              num_38,
              num_38
            );
          }
          var hb = this.hb;
          for (let local_81 of hb.ub.Ra.oa.values()) {
            let num_37 = hb.ub.ka.ka * (local_81.Qm ? local_72 : 1);
            hb.oa.fillRect(
              local_81.pos.x * hb.ub.ka.ka + hb.ub.ka.ka / 2 - num_37,
              local_81.pos.y * hb.ub.ka.ka + hb.ub.ka.ka / 2 - num_37,
              num_37 * 2,
              num_37 * 2
            );
          }
          var kb = this.kb;
          let ka_4 = kb.ub.ka.ka;
          for (let index = 0; index < kb.ub.ka.oa.height; index++)
            for (let index_2 = 0; index_2 < kb.ub.ka.oa.width; index_2++)
              kb.ub.Ba.ka[index][index_2].direction !== "NONE" &&
                kb.oa.fillRect(index_2 * ka_4, index * ka_4, ka_4, ka_4);
          var ya_3 = this.Ya;
          for (let local_81 of ya_3.ub.Ca.qga) {
            let de_7 = new namespace.de(
                local_81.Lqa.x * ya_3.ub.ka.ka,
                local_81.Lqa.y * ya_3.ub.ka.ka
              ),
              num_37 = ya_3.ub.ka.ka * 2,
              local_82 = ya_3.ub.wj ? 1 : local_72,
              local_83 = local_81.Qm ? local_82 : 1;
            local_83 <= 0 ||
              ((ya_3.wa.lineWidth = ya_3.ub.ka.ka * 0.1 * 3 * local_83),
              fn_164(ya_3, de_7, num_37, local_81.vertical, ya_3.wa));
          }
          var ta_2 = this.Ta;
          let local_80 = ta_2.ub.wj ? 1 : local_72;
          for (let index = 0; index < ta_2.ub.ka.oa.height; index++)
            for (let index_2 = 0; index_2 < ta_2.ub.ka.oa.width; index_2++) {
              let local_81 = ta_2.ub.wa.oa[index]?.[index_2];
              if (local_81) {
                let num_37 = ta_2.ub.ka.ka * (local_81.Qm ? local_80 : 1);
                ta_2.wa.fillRect(
                  index_2 * ta_2.ub.ka.ka + ta_2.ub.ka.ka / 2 - num_37,
                  index * ta_2.ub.ka.ka + ta_2.ub.ka.ka / 2 - num_37,
                  num_37 * 2,
                  num_37 * 2
                );
              }
            }
          fn_182(this.settings, 4)
            ? this.oa.restore()
            : ((this.ka.globalCompositeOperation = "destination-in"),
              this.ka.drawImage(this.oa.canvas, 0, 0),
              (this.ka.globalCompositeOperation = "source-over"),
              (this.wa.globalCompositeOperation = "destination-in"),
              this.wa.drawImage(this.oa.canvas, 0, 0),
              (this.wa.globalCompositeOperation = "source-over"),
              (this.oa.globalCompositeOperation = "source-out"),
              this.oa.fillRect(0, 0, this.oa.canvas.width, this.oa.canvas.height),
              (this.oa.globalCompositeOperation = "source-over"),
              (this.wa.globalCompositeOperation = "source-over"),
              (this.wa.globalAlpha = 0.5),
              this.wa.drawImage(this.oa.canvas, 0, 0),
              (this.wa.globalAlpha = 1));
        }
        var num_34 = 0,
          num_35 = 0;
        this.ub.Yc.Ga > 1 && ((num_34 = Math.random() * 8 - 4), (num_35 = Math.random() * 8 - 4));
        if (fn_182(this.settings, 4)) {
          var local_73 = num_34,
            local_74 = num_35,
            local_75 = first_arg,
            ra = this.Ra;
          ra.context.fillStyle = fn_185(ra.settings, ra.settings.oa, 0);
          ra.context.fillRect(0, 0, ra.context.canvas.width, ra.context.canvas.height);
          ra.context.fillStyle = fn_185(ra.settings, ra.settings.oa, 1);
          let ka_4 = ra.ub.ka.ka,
            de_7 = new namespace.de(
              (ra.context.canvas.width / 2) % ka_4,
              (ra.context.canvas.height / 2) % ka_4
            ),
            local_77 = ra.ub.Yc.ka[0],
            head = ra.ub.Yc.rb.head,
            width = ra.ub.ka.oa.width,
            height = ra.ub.ka.oa.height,
            num_36 = Math.floor(head.x / ka_4) - local_77.x,
            num_37 = Math.floor(head.y / ka_4) - local_77.y;
          num_36 > width / 2 ? (num_36 -= width) : num_36 < -width / 2 && (num_36 += width);
          num_37 > height / 2 ? (num_37 -= height) : num_37 < -height / 2 && (num_37 += height);
          let num_38 = Math.abs(num_36 + num_37),
            local_78 = fn_189(ra.settings),
            local_79 = local_78
              ? new namespace.de(
                  ((ra.ub.ka.oa.width % 2 === 0 ? 0 : 1) * ra.ub.ka.ka) / 2,
                  ((ra.ub.ka.oa.height % 2 === 0 ? 0 : 1) * ra.ub.ka.ka) / 2
                )
              : new namespace.de(head.x % ra.ub.ka.ka, head.y % ra.ub.ka.ka),
            local_80 = ra.settings.isMobile
              ? Math.max(Math.floor(ra.context.canvas.width / ra.ub.ka.ka), ra.ub.ka.oa.width) + 3
              : ra.ub.ka.oa.width + 3,
            local_81 = ra.settings.isMobile
              ? Math.max(Math.floor(ra.context.canvas.height / ra.ub.ka.ka), ra.ub.ka.oa.height) + 3
              : ra.ub.ka.oa.height + 3;
          for (let num_50 = -1; num_50 < local_80; num_50++)
            for (let num_51 = -1; num_51 < local_81; num_51++)
              Math.abs((num_50 + num_51) % 2) !== (local_78 ? 0 : ra.ub.ka.Ba + num_38) % 2 &&
                ra.context.fillRect(
                  num_50 * ra.ub.ka.ka - local_79.x + de_7.x,
                  num_51 * ra.ub.ka.ka - local_79.y + de_7.y,
                  ra.ub.ka.ka,
                  ra.ub.ka.ka
                );
          this.ka.restore();
          this.Aa.clearRect(0, 0, this.Aa.canvas.width, this.Aa.canvas.height);
          this.Aa.drawImage(this.ka.canvas, 0, 0);
          this.ka.clearRect(0, 0, this.ka.canvas.width, this.ka.canvas.height);
          let local_82 = fn_189(this.settings),
            local_83 = local_82
              ? -(this.ub.ka.Aa.x * this.ub.ka.ka) / 2
              : Math.round(this.ka.canvas.width / 2 - this.ub.Yc.rb.head.x - this.ub.ka.ka * 2),
            local_84 = local_82
              ? -(this.ub.ka.Aa.y * this.ub.ka.ka) / 2
              : Math.round(this.ka.canvas.height / 2 - this.ub.Yc.rb.head.y - this.ub.ka.ka * 2),
            num_39 = 2 * this.ub.ka.ka,
            num_40 = local_83 >= -num_39,
            num_41 = local_83 <= num_39,
            num_42 = local_84 >= -num_39,
            num_43 = local_84 <= num_39,
            num_44 = this.ub.ka.oa.width * this.ub.ka.ka,
            num_45 = this.ub.ka.oa.height * this.ub.ka.ka;
          num_42 &&
            (num_40 && this.ka.drawImage(this.Aa.canvas, local_83 - num_44, local_84 - num_45),
            num_41 && this.ka.drawImage(this.Aa.canvas, local_83 + num_44, local_84 - num_45),
            this.ka.drawImage(this.Aa.canvas, local_83, local_84 - num_45));
          num_40 && this.ka.drawImage(this.Aa.canvas, local_83 - num_44, local_84);
          num_41 && this.ka.drawImage(this.Aa.canvas, local_83 + num_44, local_84);
          num_43 &&
            (num_40 && this.ka.drawImage(this.Aa.canvas, local_83 - num_44, local_84 + num_45),
            num_41 && this.ka.drawImage(this.Aa.canvas, local_83 + num_44, local_84 + num_45),
            this.ka.drawImage(this.Aa.canvas, local_83, local_84 + num_45));
          this.ka.drawImage(this.Aa.canvas, local_83, local_84);
          fn_180(this);
          fn_182(this.settings, 9) &&
            (this.wa.save(),
            this.wa.translate(local_83 + this.ub.ka.ka * 2, local_84 + this.ub.ka.ka * 2),
            fn_140(this.Ba),
            this.wa.restore());
          this.wa.save();
          this.wa.translate(local_83 + this.ub.ka.ka * 2, local_84 + this.ub.ka.ka * 2);
          fn_182(this.settings, 12) && fn_167(this.Ia, local_75);
          fn_182(this.settings, 16) && this.kb.render(local_75);
          fn_182(this.settings, 19) && fn_165(this.Ya, local_75);
          fn_182(this.settings, 20) && fn_154(this.Ta, local_75);
          this.wa.restore();
          let num_46 = (this.ka.canvas.width - this.context.canvas.width) / 2,
            num_47 = (this.ka.canvas.height - this.context.canvas.height) / 2;
          fn_182(this.settings, 14) &&
            (this.Aa.clearRect(0, 0, this.Aa.canvas.width, this.Aa.canvas.height),
            num_42 &&
              (num_40 && this.Aa.drawImage(this.oa.canvas, local_83 - num_44, local_84 - num_45),
              num_41 && this.Aa.drawImage(this.oa.canvas, local_83 + num_44, local_84 - num_45),
              this.Aa.drawImage(this.oa.canvas, local_83, local_84 - num_45)),
            num_40 && this.Aa.drawImage(this.oa.canvas, local_83 - num_44, local_84),
            num_41 && this.Aa.drawImage(this.oa.canvas, local_83 + num_44, local_84),
            num_43 &&
              (num_40 && this.Aa.drawImage(this.oa.canvas, local_83 - num_44, local_84 + num_45),
              num_41 && this.Aa.drawImage(this.oa.canvas, local_83 + num_44, local_84 + num_45),
              this.Aa.drawImage(this.oa.canvas, local_83, local_84 + num_45)),
            this.Aa.drawImage(this.oa.canvas, local_83, local_84),
            (this.wa.globalCompositeOperation = "destination-in"),
            this.wa.drawImage(this.Aa.canvas, 0, 0),
            (this.wa.globalCompositeOperation = "source-over"),
            (this.ka.globalCompositeOperation = "destination-in"),
            this.ka.drawImage(this.Aa.canvas, 0, 0),
            (this.ka.globalCompositeOperation = "source-over"),
            this.oa.fillRect(0, 0, this.oa.canvas.width, this.oa.canvas.height),
            (this.oa.globalCompositeOperation = "destination-out"),
            this.oa.drawImage(this.Aa.canvas, 0, 0),
            (this.oa.globalCompositeOperation = "source-over"),
            (this.context.globalCompositeOperation = "source-over"),
            (this.context.globalAlpha = 0.5),
            this.context.drawImage(this.oa.canvas, local_73 - num_46, local_74 - num_47),
            (this.context.globalAlpha = 1));
          let num_48 = local_73 - num_46,
            num_49 = local_74 - num_47;
          this.context.drawImage(this.wa.canvas, num_48, num_49);
          this.context.drawImage(this.ka.canvas, num_48, num_49);
          this.settings.isMobile &&
            ((this.context.fillStyle = fn_185(this.settings, this.settings.oa, 3)),
            this.context.fillRect(0, 0, num_48, this.context.canvas.height),
            this.context.fillRect(0, 0, this.context.canvas.width, num_49),
            this.context.fillRect(
              this.context.canvas.width - num_48,
              0,
              num_48,
              this.context.canvas.height
            ),
            this.context.fillRect(
              0,
              this.context.canvas.height - num_49,
              this.context.canvas.width,
              num_49
            ));
        } else {
          let num_36 = Math.round((this.context.canvas.width - this.Ca.canvas.width) / 2),
            num_37 = Math.round((this.context.canvas.height - this.Ca.canvas.height) / 2);
          this.Ca.drawImage(this.Oa.canvas, num_34, num_35);
          this.Ca.drawImage(this.wa.canvas, num_34, num_35);
          this.Ca.drawImage(this.ka.canvas, num_34, num_35);
          if (fn_182(this.settings, 9)) {
            var ba_3 = this.Ba,
              local_76 = first_arg,
              de_6 = new namespace.de(num_36 + num_34, num_37 + num_35);
            for (let local_77 of ba_3.ub.mA.cK) {
              let local_78 = local_77.prev !== null || ba_3.ub.Qa ? local_76 : 1;
              local_77.dh &&
                (local_77.pos.x === 0
                  ? fn_138(ba_3, new namespace.de(-1, local_77.pos.y), de_6, local_78)
                  : local_77.pos.x === ba_3.ub.ka.oa.width - 1 &&
                    fn_138(
                      ba_3,
                      new namespace.de(ba_3.ub.ka.oa.width, local_77.pos.y),
                      de_6,
                      local_78
                    ),
                local_77.pos.y === 0
                  ? fn_138(ba_3, new namespace.de(local_77.pos.x, -1), de_6, local_78)
                  : local_77.pos.y === ba_3.ub.ka.oa.height - 1 &&
                    fn_138(
                      ba_3,
                      new namespace.de(local_77.pos.x, ba_3.ub.ka.oa.height),
                      de_6,
                      local_78
                    ));
              if (local_77.prev !== null || (!local_77.dh && ba_3.ub.Qa)) {
                let local_79 = local_77.prev !== null ? local_77.prev : local_77.pos;
                local_79.x === 0
                  ? fn_138(ba_3, new namespace.de(-1, local_79.y), de_6, 1 - local_76)
                  : local_79.x === ba_3.ub.ka.oa.width - 1 &&
                    fn_138(
                      ba_3,
                      new namespace.de(ba_3.ub.ka.oa.width, local_79.y),
                      de_6,
                      1 - local_76
                    );
                local_79.y === 0
                  ? fn_138(ba_3, new namespace.de(local_79.x, -1), de_6, 1 - local_76)
                  : local_79.y === ba_3.ub.ka.oa.height - 1 &&
                    fn_138(
                      ba_3,
                      new namespace.de(local_79.x, ba_3.ub.ka.oa.height),
                      de_6,
                      1 - local_76
                    );
              }
            }
          }
          this.context.drawImage(this.Ca.canvas, num_36, num_37);
        }
      }
    };
  var fn_181 = function (first_arg) {
      return fn_182(first_arg, 6) || fn_182(first_arg, 18);
    },
    fn_182 = function (first_arg, second_arg) {
      return first_arg.La
        ? first_arg.Wc.has(second_arg)
        : first_arg.wb === 22 && first_arg.XSa.has(second_arg)
          ? !0
          : first_arg.wb === second_arg;
    },
    fn_183 = function (first_arg) {
      return first_arg.oa !== 0 || fn_190(first_arg);
    },
    fn_184 = function (first_arg) {
      return fn_182(first_arg, 7)
        ? fn_182(first_arg, 2) ||
            fn_182(first_arg, 5) ||
            fn_182(first_arg, 9) ||
            fn_182(first_arg, 10) ||
            fn_182(first_arg, 11) ||
            fn_182(first_arg, 15) ||
            fn_182(first_arg, 16) ||
            fn_182(first_arg, 17) ||
            (fn_181(first_arg) && fn_182(first_arg, 12)) ||
            first_arg.ka === 6
        : !1;
    },
    fn_185 = function (first_arg, second_arg, third_arg) {
      return fn_190(first_arg) ? first_arg.hb[third_arg] : list_17[second_arg][third_arg];
    },
    fn_186 = function (first_arg) {
      return (
        fn_182(first_arg, 2) ||
        fn_182(first_arg, 8) ||
        fn_182(first_arg, 9) ||
        fn_182(first_arg, 10)
      );
    },
    fn_187 = function (first_arg) {
      return fn_182(first_arg, 19) || fn_182(first_arg, 20);
    },
    fn_188 = function (first_arg) {
      return fn_182(first_arg, 21) || fn_182(first_arg, 4);
    },
    fn_189 = function (first_arg) {
      return (
        fn_182(first_arg, 4) &&
        (fn_182(first_arg, 2) ||
          fn_182(first_arg, 5) ||
          fn_182(first_arg, 19) ||
          fn_182(first_arg, 20) ||
          first_arg.ka === 6)
      );
    },
    fn_190 = function (first_arg) {
      return first_arg.hb !== void 0 && first_arg.hb.length === 7;
    },
    fn_191 = function (first_arg) {
      return (
        fn_182(first_arg, 21) || fn_181(first_arg) || fn_182(first_arg, 7) || fn_182(first_arg, 11)
      );
    },
    fn_192 = function (first_arg) {
      first_arg.XSa.clear();
      var list_50 = [];
      first_arg.Ya.forEach((first_arg_2, second_arg) => {
        namespace.Nd(first_arg_2, "lH9Ipd") && list_50.push(second_arg);
      });
      if (list_50.length === 0) first_arg.XSa = fn_193(!0);
      else if (list_50.length === 1)
        first_arg.XSa = list_50[0] !== 22 ? fn_193(!1, list_50[0]) : fn_193(!1);
      else for (let local_44 of list_50) first_arg.XSa.add(local_44);
    },
    fn_193 = function (first_arg, fn_457, list_50, fourth_arg = Infinity) {
      var set_value_2 = new Set();
      for (var index = 1; index < 21; index++) set_value_2.add(index);
      index = new Set();
      fn_457 && (index.add(fn_457), set_value_2.delete(fn_457));
      fn_457 = list_50 ? list_50 : Math.random;
      do {
        list_50 = Array.from(set_value_2);
        let num_30 = Math.floor(fn_457() * list_50.length);
        list_50 = list_50[num_30];
        index.add(list_50);
        set_value_2.delete(list_50);
        if (first_arg) break;
      } while (
        set_value_2.size > 0 &&
        (fn_457() < 0.3 || index.size < 2) &&
        index.size < fourth_arg
      );
      return index;
    },
    fn_194 = function (first_arg = 0) {
      first_arg = namespace.vfF(first_arg);
      var xf_f = namespace.xfF(first_arg),
        local_44 = fn_193(!1, void 0, xf_f, 4),
        list_50 = [0, 1, 2, 4];
      xf_f() < 0.25 && list_50.push(6);
      list_50 = list_50[Math.floor(xf_f() * list_50.length)];
      var local_45 = xf_f();
      local_45 < 0.05 && (list_50 = local_45 < 0.01 ? 5 : 3);
      local_45 = 0;
      if ((list_50 === 0 || list_50 === 1) && local_44.size <= 3) {
        let num_30 = 0.5 * (list_50 === 0 ? 1 : 0.5) * (local_44.size === 2 ? 1 : 0.5);
        for (let local_46 of set_value)
          if (local_44.has(local_46)) {
            num_30 = 1;
            break;
          }
        xf_f() < num_30 && (local_45 = 1);
      }
      return { vLa: first_arg, XSa: local_44, Q5b: list_50, I6b: local_45 };
    },
    fn_195 = function (first_arg) {
      var text_5 = "c";
      first_arg = Array.from(first_arg.XSa).sort(
        (first_arg_2, second_arg) => first_arg_2 - second_arg
      );
      for (let local_44 of first_arg) text_5 += local_44;
      return text_5;
    },
    fn_196 = function (first_arg, second_arg = !1) {
      if ((!second_arg && first_arg.La) || first_arg.Ga) return first_arg.kb;
      var local_44;
      fn_182(first_arg, 22)
        ? (local_44 = fn_195(first_arg))
        : (local_44 = second_arg ? first_arg.yb : first_arg.wb);
      return `${local_44},${second_arg ? first_arg.Ca : first_arg.ka},${second_arg ? first_arg.Ra : first_arg.Kb},${second_arg ? first_arg.Ta : first_arg.Aa}`;
    },
    cls_49 = class {
      constructor(list_50, second_arg, third_arg, element = !1) {
        this.oo = list_50;
        this.isMobile = second_arg;
        this.Vb = third_arg;
        this.Xc = element;
        this.Mb = this.Oa = 0;
        this.oc = "";
        this.yb = this.wb = 0;
        this.hc = "";
        this.Ia =
          this.wa =
          this.Nb =
          this.xc =
          this.Ta =
          this.Aa =
          this.Ra =
          this.Kb =
          this.Ca =
          this.ka =
            0;
        this.Bc = !1;
        this.Ba = this.Qa = this.Pb = this.oa = this.Qb = this.Ac = 0;
        this.Gc = !1;
        this.hb = void 0;
        this.XSa = new Set();
        this.Ya = new Map();
        this.Hl = new Map();
        this.Ka = this.autoplay = this.La = this.Ga = !1;
        this.kb = "";
        this.Wc = new Set();
        this.rb = null;
        list_50 = namespace.Gm("DIV", "vuOknd", this.oo);
        second_arg = /trophy_(.*).png/;
        for (third_arg = 0; third_arg < list_50.length; third_arg++) {
          element = list_50[third_arg];
          if (element.children.length !== 1) continue;
          var exec = second_arg.exec(element.children[0].src);
          exec && exec.length >= 2
            ? ((exec = exec[1] === "" ? NaN : Number(exec[1])),
              isNaN(exec) || (this.Ya.set(exec, element), this.Hl.set(element, exec)))
            : (this.Ya.set(22, element), this.Hl.set(element, 22));
        }
      }
      Vt() {
        return fn_190(this) ? !1 : this.oa === 1 || this.oa === 3 || this.oa === 5 || this.oa === 7;
      }
      bN() {
        return this.Qa === 1;
      }
      toString() {
        var local_44 = this.La ? `dc${this.kb}` : fn_182(this, 22) ? fn_195(this) : `${this.wb}`;
        return `v=24,color=${this.xc},apple=${this.Oa},mode=${local_44},count=${this.ka},speed=${this.Kb},size=${this.Aa},theme=${this.Ac},graphics=${this.Qa},auto=${this.autoplay ? 1 : 0}`;
      }
    };
  var fn_197 = function (first_arg, second_arg, third_arg, fourth_arg = !0) {
      second_arg = first_arg.ka[second_arg.y][second_arg.x];
      first_arg = second_arg.qga.get(third_arg)?.dh ?? !0;
      if ((third_arg = second_arg.h8.get(third_arg)) && first_arg === fourth_arg) return third_arg;
    },
    fn_198 = function (first_arg) {
      return first_arg === 5 || first_arg === 11 || first_arg === 12;
    },
    fn_199 = function (first_arg, second_arg, third_arg, fourth_arg) {
      third_arg
        ? (first_arg.ka[second_arg.y][second_arg.x].h8.set(
            "RIGHT",
            new namespace.de(second_arg.x + 1, second_arg.y + 1)
          ),
          first_arg.ka[second_arg.y + 1][second_arg.x + 1].h8.set(
            "LEFT",
            new namespace.de(second_arg.x, second_arg.y)
          ),
          first_arg.ka[second_arg.y + 1][second_arg.x].h8.set(
            "RIGHT",
            new namespace.de(second_arg.x + 1, second_arg.y)
          ),
          first_arg.ka[second_arg.y][second_arg.x + 1].h8.set(
            "LEFT",
            new namespace.de(second_arg.x, second_arg.y + 1)
          ))
        : (first_arg.ka[second_arg.y][second_arg.x].h8.set(
            "DOWN",
            new namespace.de(second_arg.x + 1, second_arg.y + 1)
          ),
          first_arg.ka[second_arg.y + 1][second_arg.x + 1].h8.set(
            "UP",
            new namespace.de(second_arg.x, second_arg.y)
          ),
          first_arg.ka[second_arg.y + 1][second_arg.x].h8.set(
            "UP",
            new namespace.de(second_arg.x + 1, second_arg.y)
          ),
          first_arg.ka[second_arg.y][second_arg.x + 1].h8.set(
            "DOWN",
            new namespace.de(second_arg.x, second_arg.y + 1)
          ));
      fourth_arg =
        first_arg.settings.wa === 10
          ? first_arg.wa(1, Math.floor(Math.random() * split_2.length), 0, fourth_arg, !1)
          : split[fourth_arg ? list_9[first_arg.settings.wa] : first_arg.settings.wa];
      var local_44 =
          (!third_arg && Math.floor(second_arg.x / 2) % 2 === second_arg.y % 2) ||
          (third_arg && Math.floor(second_arg.y / 2) % 2 === second_arg.x % 2),
        local_45 = namespace.HJ(fourth_arg)[2];
      local_45 = local_44 ? 1 - local_45 : local_45;
      local_45 = first_arg.settings.Vt()
        ? (local_44 ? 0.06 : 0.6) * local_45
        : (local_44 ? 0.6 : 0.06) * local_45;
      fourth_arg = namespace.FJ(
        (local_44 ? namespace.oHe : namespace.pHe)(namespace.GJ(fourth_arg), local_45)
      );
      fourth_arg = {
        Lqa: second_arg,
        vertical: third_arg,
        Qm: !0,
        color: fourth_arg,
        active: !1,
        sAa: !1,
        p_: !1,
        dh: !fn_182(first_arg.settings, 11)
      };
      first_arg.qga.push(fourth_arg);
      first_arg.ka[second_arg.y][second_arg.x].qga.set(third_arg ? "RIGHT" : "DOWN", fourth_arg);
      first_arg.ka[second_arg.y][second_arg.x + 1].qga.set(third_arg ? "LEFT" : "DOWN", fourth_arg);
      first_arg.ka[second_arg.y + 1][second_arg.x].qga.set(third_arg ? "RIGHT" : "UP", fourth_arg);
      first_arg.ka[second_arg.y + 1][second_arg.x + 1].qga.set(
        third_arg ? "LEFT" : "UP",
        fourth_arg
      );
    },
    fn_200 = function (first_arg, list_50) {
      var list_51 = [],
        list_52 = [];
      for (var index = 0; index < first_arg.oa.oa.height; index++) {
        list_52.push([]);
        for (var index_2 = 0; index_2 < first_arg.oa.oa.width; index_2++)
          list_52[index].push(new Set());
      }
      for (index = 1; index < list_50.length; index++) {
        index_2 = list_50[index - 1];
        var local_44 = list_50[index],
          num_30 = local_44.x - index_2.x,
          num_31 = local_44.y - index_2.y;
        num_30 === 0 &&
          (num_31 === 1
            ? (list_52[index_2.y][index_2.x].add("DOWN"), list_52[local_44.y][local_44.x].add("UP"))
            : num_31 === -1 &&
              (list_52[index_2.y][index_2.x].add("UP"),
              list_52[local_44.y][local_44.x].add("DOWN")));
        num_31 === 0 &&
          (num_30 === 1
            ? (list_52[index_2.y][index_2.x].add("RIGHT"),
              list_52[local_44.y][local_44.x].add("LEFT"))
            : num_30 === -1 &&
              (list_52[index_2.y][index_2.x].add("LEFT"),
              list_52[local_44.y][local_44.x].add("RIGHT")));
      }
      if (fn_182(first_arg.settings, 7))
        for (index = 0; index < first_arg.oa.oa.height; index++)
          for (index_2 = 0; index_2 < first_arg.oa.oa.width; index_2++) {
            local_44 = list_52[index][index_2];
            if (local_44.size === 0) continue;
            num_30 = fn_135(first_arg.oa, index_2, index);
            for (var local_45 of local_44) list_52[num_30.y][num_30.x].add(fn_45(local_45));
          }
      for (local_45 = 0; local_45 < first_arg.oa.oa.height - 1; local_45++)
        for (index = 0; index < first_arg.oa.oa.width - 1; index++) {
          index_2 = new namespace.de(index, local_45);
          local_44 = new namespace.de(index + 1, local_45);
          num_30 = new namespace.de(index, local_45 + 1);
          var de_6 = new namespace.de(index + 1, local_45 + 1);
          let local_47 = (num_31 = !0);
          if (
            first_arg.ka[index_2.y][index_2.x].h8.has("RIGHT") ||
            first_arg.ka[local_44.y][local_44.x].h8.has("LEFT") ||
            first_arg.ka[num_30.y][num_30.x].h8.has("RIGHT") ||
            first_arg.ka[de_6.y][de_6.x].h8.has("LEFT")
          )
            num_31 = !1;
          if (
            first_arg.ka[index_2.y][index_2.x].h8.has("DOWN") ||
            first_arg.ka[local_44.y][local_44.x].h8.has("DOWN") ||
            first_arg.ka[num_30.y][num_30.x].h8.has("UP") ||
            first_arg.ka[de_6.y][de_6.x].h8.has("UP")
          )
            local_47 = !1;
          let local_48 = list_50[0];
          var list_53 = [index_2, local_44, num_30, de_6];
          list_53.some((first_arg_2) => fn_125(first_arg.oa, local_48, first_arg_2) <= 2) &&
            (local_47 = num_31 = !1);
          if (fn_182(first_arg.settings, 7)) {
            let local_49 = fn_121(first_arg.oa, local_48);
            list_53.some((first_arg_2) => fn_125(first_arg.oa, local_49, first_arg_2) <= 2) &&
              (local_47 = num_31 = !1);
          }
          if (fn_182(first_arg.settings, 1)) {
            list_53 = first_arg.oa.wa[index_2.y][index_2.x];
            var local_46 = first_arg.oa.wa[local_44.y][local_44.x];
            let local_49 = first_arg.oa.wa[num_30.y][num_30.x],
              local_50 = first_arg.oa.wa[de_6.y][de_6.x];
            if ((fn_198(list_53) && fn_198(local_46)) || (fn_198(local_49) && fn_198(local_50)))
              num_31 = !1;
            if ((fn_198(list_53) && fn_198(local_49)) || (fn_198(local_46) && fn_198(local_50)))
              local_47 = !1;
          }
          fn_182(first_arg.settings, 20) &&
            ((list_53 = first_arg.oa.wa[local_44.y][local_44.x]),
            (local_46 = first_arg.oa.wa[num_30.y][num_30.x]),
            (de_6 = first_arg.oa.wa[de_6.y][de_6.x]),
            first_arg.oa.wa[index_2.y][index_2.x] === 10 ||
              list_53 === 10 ||
              local_46 === 10 ||
              de_6 === 10) &&
            (local_47 = num_31 = !1);
          if (
            list_52[index_2.y][index_2.x].has("DOWN") ||
            list_52[local_44.y][local_44.x].has("DOWN")
          )
            local_47 = !1;
          if (
            list_52[index_2.y][index_2.x].has("RIGHT") ||
            list_52[num_30.y][num_30.x].has("RIGHT")
          )
            num_31 = !1;
          if (
            (index_2.x === 0 && index_2.y === 0) ||
            (index_2.x === first_arg.oa.oa.width - 2 && index_2.y === 0) ||
            (index_2.x === 0 && index_2.y === first_arg.oa.oa.height - 2) ||
            (index_2.x === first_arg.oa.oa.width - 2 && index_2.y === first_arg.oa.oa.height - 2)
          )
            if (
              first_arg.ka[index_2.y][index_2.x].h8.has("DOWN") ||
              first_arg.ka[index_2.y][index_2.x].h8.has("RIGHT")
            )
              local_47 = num_31 = !1;
          (num_31 || local_47) && list_51.push({ K2e: index_2, gfd: num_31, mae: local_47 });
        }
      list_51.length !== 0 &&
        ((list_51 = list_51[Math.floor(Math.random() * list_51.length)]),
        (list_50 = list_51.K2e),
        (list_51 = list_51.gfd && list_51.mae ? Math.random() < 0.5 : list_51.gfd),
        fn_199(first_arg, list_50, list_51, !1),
        fn_182(first_arg.settings, 7) &&
          ((list_50 = fn_121(first_arg.oa, list_50)),
          --list_50.x,
          --list_50.y,
          fn_199(first_arg, list_50, list_51, !0)));
    },
    cls_50 = class {
      constructor(first_arg, second_arg, third_arg) {
        this.settings = first_arg;
        this.oa = second_arg;
        this.wa = third_arg;
        this.ka = [];
        this.qga = [];
      }
      reset() {
        this.ka = [];
        for (let index = 0; index < this.oa.oa.height; index++) {
          this.ka.push([]);
          for (let index_2 = 0; index_2 < this.oa.oa.width; index_2++)
            this.ka[index].push({ h8: new Map(), qga: new Map() });
        }
        this.qga = [];
      }
      setActive(first_arg, second_arg, third_arg) {
        var get_value = this.ka[first_arg.y][first_arg.x].qga.get(second_arg);
        get_value &&
          (get_value.active || get_value.p_ || (get_value.sAa = third_arg),
          (get_value.active = !0),
          (get_value.p_ = !1));
        fn_182(this.settings, 7) &&
          ((first_arg = fn_121(this.oa, first_arg)),
          (second_arg = this.ka[first_arg.y][first_arg.x].qga.get(fn_45(second_arg)))) &&
          (second_arg.active || second_arg.p_ || (second_arg.sAa = third_arg),
          (second_arg.active = !0),
          (second_arg.p_ = !1));
      }
      refresh() {
        for (let local_44 of this.qga)
          ((local_44.p_ = local_44.active),
            (local_44.Qm = !1),
            (local_44.sAa = !1),
            (local_44.active = !1));
      }
    };
  var fn_201 = function (first_arg) {
      var set_value_2 = new Set([0, 1, 2, 3, 4]);
      first_arg.settings.ka === 4
        ? (fn_182(first_arg.settings, 11) ? [5, 6, 7, 8, 9, 10, 11] : [5]).forEach(
            (first_arg_2) => {
              set_value_2.add(first_arg_2);
            }
          )
        : first_arg.settings.ka === 3 ||
            ((first_arg.settings.ka === 6 || first_arg.settings.ka === 2) &&
              fn_182(first_arg.settings, 11))
          ? [5, 6, 7, 8, 9].forEach((first_arg_2) => {
              set_value_2.add(first_arg_2);
            })
          : first_arg.settings.ka === 5 &&
            [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].forEach(
              (first_arg_2) => {
                set_value_2.add(first_arg_2);
              }
            );
      for (let local_44 of first_arg.keys) set_value_2.delete(local_44.type);
      return set_value_2.size > 0
        ? Array.from(set_value_2)[Math.floor(Math.random() * set_value_2.size)]
        : Math.floor(Math.random() * 24);
    },
    fn_202 = function (first_arg, second_arg, third_arg) {
      obj_11.KEY.play();
      fn_215(first_arg.Vw, second_arg.v7a);
      fn_182(first_arg.settings, 7) && fn_215(first_arg.Vw, fn_121(first_arg.ka, second_arg.v7a));
      fn_182(first_arg.settings, 9)
        ? fn_150(first_arg.mA, {
            pos: second_arg.v7a.clone(),
            prev: null,
            Qm: !1,
            sOa: second_arg.type,
            dh: !0,
            sequenceNumber: second_arg.sequenceNumber
          })
        : fn_87(first_arg.oa, second_arg.v7a, second_arg.type, !0, second_arg.sequenceNumber);
      first_arg.Aa.particles.push({
        pos: new namespace.de(
          second_arg.v7a.x * first_arg.ka.ka,
          second_arg.v7a.y * first_arg.ka.ka
        ),
        Ce: new namespace.de(Math.random() * 2 * 10 - 10, Math.random() * -20),
        angle: 0,
        m0: Math.random() * 2 * 10 - 10,
        size: 1,
        ZI: second_arg.type,
        type: 0
      });
      fn_182(first_arg.settings, 7) &&
        ((second_arg = fn_121(first_arg.ka, second_arg.v7a)),
        first_arg.Aa.particles.push({
          pos: new namespace.de(second_arg.x * first_arg.ka.ka, second_arg.y * first_arg.ka.ka),
          Ce: new namespace.de(Math.random() * 2 * 10 - 10, Math.random() * -20),
          angle: 0,
          m0: Math.random() * 2 * 10 - 10,
          size: 1,
          ZI: -1,
          type: 0
        }));
      first_arg.Yc.La.push({
        Qma: 0,
        Onb: first_arg.Yc.ka.length + 1,
        Vjb: !1,
        hqc: !1,
        kcb: new namespace.de(0, 0)
      });
      fn_182(first_arg.settings, 7) &&
        first_arg.Yc.La.push({
          Qma: 0,
          Onb: first_arg.Yc.ka.length + 1,
          Vjb: !0,
          hqc: !1,
          kcb: new namespace.de(0, 0)
        });
      first_arg.keys.splice(third_arg, 1);
    },
    fn_203 = function (first_arg) {
      for (let index = 0; index < first_arg.keys.length; index++) {
        let local_44 = first_arg.keys[index];
        if (
          local_44.dh &&
          !fn_54(first_arg.settings.ka, local_44.sequenceNumber, first_arg.oa.wa) &&
          (first_arg.Yc.ka[0].equals(local_44.pos) ||
            (fn_182(first_arg.settings, 7) && fn_226(first_arg.Yc, 0).equals(local_44.pos)))
        ) {
          fn_202(first_arg, local_44, index);
          break;
        }
      }
      first_arg.keys.sort((first_arg_2, second_arg) => first_arg_2.pos.y - second_arg.pos.y);
    },
    fn_204 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg) {
      second_arg =
        (first_arg.settings.Oa === 24 && !fn_182(first_arg.settings, 11)) ||
        first_arg.settings.ka === 4 ||
        first_arg.settings.ka === 5 ||
        first_arg.settings.ka === 6
          ? fn_201(first_arg)
          : (first_arg.oa.ka[second_arg]?.sOa ?? 0);
      fifth_arg =
        fn_182(first_arg.settings, 11) && first_arg.settings.ka === 6 && sixth_arg !== void 0
          ? sixth_arg % 2 === 1
          : fifth_arg;
      fn_214(first_arg.Vw, fourth_arg, {
        pos: fourth_arg,
        Qm: !0,
        sOa: second_arg,
        r9: !1,
        dh: fifth_arg
      });
      if (fn_182(first_arg.settings, 7)) {
        let local_44 = fn_121(first_arg.ka, fourth_arg);
        fn_214(first_arg.Vw, local_44, { pos: local_44, Qm: !1, r9: !1, dh: fifth_arg });
      }
      first_arg.keys.push({
        pos: third_arg.clone(),
        v7a: fourth_arg.clone(),
        mM: 0,
        type: second_arg,
        Qm: !0,
        dh: fifth_arg,
        sequenceNumber: sixth_arg
      });
      fn_182(first_arg.settings, 16) &&
        (fn_96(first_arg.wa, third_arg, !1), fn_96(first_arg.wa, fourth_arg, !1));
    },
    fn_205 = function (first_arg, second_arg, third_arg) {
      var local_44 = fn_123(first_arg.ka, null, 6),
        local_45 = fn_216(first_arg.Vw, first_arg.ka.Ca(local_44, 5));
      local_44 &&
        local_45 &&
        (fn_204(first_arg, second_arg, local_44, local_45, third_arg),
        fn_182(first_arg.settings, 9) &&
          fn_141(first_arg.mA, local_44.clone(), first_arg.keys.length));
    },
    fn_206 = function (first_arg, second_arg = !0) {
      for (let local_44 of first_arg.keys)
        if (
          local_44.dh === second_arg &&
          ((first_arg.ka.wa[local_44.pos.y][local_44.pos.x] = 6), fn_182(first_arg.settings, 7))
        ) {
          let local_45 = fn_121(first_arg.ka, local_44.pos);
          first_arg.ka.wa[local_45.y][local_45.x] = 6;
        }
    },
    cls_51 = class {
      constructor(
        first_arg,
        second_arg,
        third_arg,
        fourth_arg,
        fifth_arg,
        sixth_arg,
        seventh_arg,
        eighth_arg
      ) {
        this.settings = first_arg;
        this.ka = second_arg;
        this.Yc = third_arg;
        this.oa = fourth_arg;
        this.Aa = fifth_arg;
        this.Vw = sixth_arg;
        this.mA = seventh_arg;
        this.wa = eighth_arg;
        this.keys = [];
      }
      reset() {
        this.keys = [];
        if (fn_182(this.settings, 8)) {
          for (let num_31 = 0; num_31 + 1 < this.oa.ka.length; num_31 += 2) {
            let clone = this.oa.ka[num_31].pos.clone(),
              clone_2 = this.oa.ka[num_31 + 1].pos.clone(),
              num_32 = Math.floor(num_31 / 2);
            if (this.settings.Oa !== 24 || fn_182(this.settings, 11)) {
              var num_30 = void 0;
              num_30 =
                this.settings.ka === 3 ||
                ((this.settings.ka === 6 || this.settings.ka === 2) && fn_182(this.settings, 11))
                  ? 10
                  : this.settings.ka === 5
                    ? 24
                    : 5;
              num_32 = (num_32 + this.settings.Oa) % num_30;
            } else num_32 = fn_201(this);
            num_30 = this.oa.ka[num_31 + 1]?.sequenceNumber ?? this.oa.ka[num_31]?.sequenceNumber;
            let local_44 = fn_182(this.settings, 11)
              ? this.settings.ka === 6 && num_30 !== void 0
                ? num_30 % 2 === 1
                : num_31 < this.oa.ka.length / 2
              : !0;
            fn_214(this.Vw, clone, { pos: clone, Qm: !1, sOa: num_32, r9: !1, dh: local_44 });
            if (fn_182(this.settings, 7)) {
              let local_45 = fn_121(this.ka, clone);
              fn_214(this.Vw, local_45, { pos: local_45, Qm: !1, r9: !1, dh: local_44 });
            }
            this.keys.push({
              pos: clone_2,
              v7a: clone.clone(),
              mM: 0,
              type: num_32,
              Qm: !1,
              dh: local_44,
              sequenceNumber: num_30
            });
          }
          this.oa.clear();
        }
      }
      update() {
        for (let local_44 of this.keys) local_44.Qm || (local_44.mM = (local_44.mM + 1) % 6);
      }
      refresh() {
        for (let local_44 of this.keys) local_44.Qm = !1;
      }
    };
  var obj_14 = {
      Vqb: new namespace.tfF(
        "/logos/fnbx/snake_arcade/",
        "minesweeper_audio",
        { MINE_1: 0, MINE_2: 73, MINE_3: 142, MINE_4: 209, MINE_5: 272, PLANT_FLAG: 357 },
        385
      )
    },
    obj_15 = {
      Uvc: new namespace.Z6(obj_14.Vqb, "MINE_1", 864),
      Vvc: new namespace.Z6(obj_14.Vqb, "MINE_2", 816),
      Wvc: new namespace.Z6(obj_14.Vqb, "MINE_3", 792),
      Xvc: new namespace.Z6(obj_14.Vqb, "MINE_4", 744),
      Yvc: new namespace.Z6(obj_14.Vqb, "MINE_5", 1008),
      iHb: new namespace.Z6(obj_14.Vqb, "PLANT_FLAG", 432)
    },
    cls_52 = class extends namespace.pfF {
      constructor() {
        super(obj_14, obj_15);
      }
    };
  var fn_207 = function (first_arg) {
      var local_44 = fn_123(first_arg.ka, null, 9);
      local_44 &&
        (obj_15.iHb.play(),
        first_arg.oa.add({ pos: local_44, pLa: -1, mM: 0, dh: !fn_182(first_arg.settings, 11) }),
        fn_182(first_arg.settings, 16) && fn_96(first_arg.Ga, local_44, !1),
        fn_182(first_arg.settings, 7) &&
          first_arg.oa.add({
            pos: fn_121(first_arg.ka, local_44),
            pLa: -1,
            mM: 0,
            dh: !fn_182(first_arg.settings, 11)
          }));
    },
    fn_208 = function (first_arg, second_arg, third_arg, fn_457, fn_458) {
      var num_30 = !1;
      second_arg.pLa > 0 && --second_arg.pLa;
      if (second_arg.pLa === 0 || fn_209(first_arg, second_arg, 0) !== 0) {
        num_30 = !0;
        first_arg.oa.delete(second_arg);
        switch (Math.floor(Math.random() * 5)) {
          default:
          case 0:
            obj_15.Uvc.play();
            break;
          case 1:
            obj_15.Vvc.play();
            break;
          case 2:
            obj_15.Wvc.play();
            break;
          case 3:
            obj_15.Xvc.play();
            break;
          case 4:
            obj_15.Yvc.play();
        }
        first_arg.Ba.particles.push({
          pos: new namespace.de(
            second_arg.pos.x * first_arg.ka.ka,
            second_arg.pos.y * first_arg.ka.ka
          ),
          Ce: new namespace.de(Math.random() * 2 * 10 - 10, Math.random() * -20),
          angle: 0,
          m0: Math.random() * 2 * 10 - 10,
          size: 1,
          type: 2
        });
      }
      if (num_30 && fn_182(first_arg.settings, 9))
        for (var local_44 of first_arg.mA.cK)
          local_44.dh === second_arg.dh &&
            fn_210(first_arg, local_44.pos, second_arg, 1) &&
            fn_145(first_arg.mA, local_44);
      local_44 = fn_209(first_arg, second_arg, 1);
      var num_31 = !1;
      local_44 !== 0 &&
        (third_arg || !num_30 || local_44 !== 1 || fn_182(first_arg.settings, 21)
          ? second_arg.pLa === -1 && (second_arg.pLa = 3)
          : ((num_31 = !0),
            obj_13.Juc.play(),
            fn_457(),
            fn_234(first_arg.Yc),
            (first_arg.Yc.Ga = 0),
            fn_458()));
      num_30 && fn_182(first_arg.settings, 13) && fn_243(first_arg.Ia, second_arg.pos, 1, !0);
      if (num_30) {
        third_arg = num_31;
        num_30 = split_3[Math.floor(Math.random() * split_3.length)];
        fn_457 = first_arg.Ba;
        fn_458 = second_arg.pos;
        for (local_44 = 0; local_44 < 10; local_44++) {
          num_31 = new namespace.de(
            fn_458.x * fn_457.ka.ka + Math.random() * fn_457.ka.ka,
            fn_458.y * fn_457.ka.ka + Math.random() * fn_457.ka.ka
          );
          var de_6 = new namespace.de(Math.random() * 2 * 10 - 10, Math.random() * -35);
          var num_32 = Math.random() * 0.2;
          num_32 = namespace.FJ(namespace.oHe(namespace.GJ(num_30), num_32));
          num_31 = {
            pos: num_31,
            Ce: de_6,
            color: num_32,
            size: 2 + Math.random() * 2,
            midpoint: 0
          };
          num_31.Ce.y > -15 && (num_31.Ce.y = -15);
          Math.abs(num_31.Ce.x) < 5 && (num_31.Ce.x = 5 * (num_31.Ce.x > 0 ? 1 : -1));
          num_31.midpoint = num_31.pos.x + num_31.Ce.x * 2;
          fn_457.oa.add(num_31);
        }
        first_arg.Aa.add({
          pos: new namespace.de(
            second_arg.pos.x * first_arg.ka.ka,
            second_arg.pos.y * first_arg.ka.ka
          ),
          ticks: 4,
          AEe: num_30,
          darkColor: namespace.FJ(namespace.oHe(namespace.GJ(num_30), 0.35))
        });
        first_arg.wa.add({
          pos: new namespace.de(
            second_arg.pos.x * first_arg.ka.ka + first_arg.ka.ka / 2,
            second_arg.pos.y * first_arg.ka.ka + first_arg.ka.ka / 2
          ),
          ticks: 3,
          color: num_30,
          TWe: third_arg
        });
      }
    },
    fn_209 = function (first_arg, second_arg, third_arg) {
      if (second_arg.dh && fn_210(first_arg, first_arg.Yc.ka[0], second_arg, third_arg)) return 1;
      if (fn_181(first_arg.settings))
        for (var local_44 of first_arg.Ca.ka)
          if (
            local_44.dh === second_arg.dh &&
            fn_210(first_arg, local_44.pos, second_arg, third_arg)
          )
            return 3;
      if (fn_182(first_arg.settings, 9))
        for (let local_45 of first_arg.mA.cK)
          if (
            local_45.dh === second_arg.dh &&
            local_45.prev !== null &&
            fn_210(first_arg, local_45.pos, second_arg, third_arg)
          )
            return 7;
      if (fn_182(first_arg.settings, 17)) {
        local_44 = fn_217(first_arg.Vw);
        for (let local_45 of local_44)
          if (
            local_45.dh === second_arg.dh &&
            local_45.ix.GUc >= 0 &&
            fn_210(first_arg, local_45.pos, second_arg, third_arg)
          )
            return 12;
      }
      return 0;
    },
    fn_210 = function (first_arg, second_arg, third_arg, fourth_arg) {
      return !!(
        fn_211(first_arg, second_arg, third_arg) <= fourth_arg ||
        (fn_182(first_arg.settings, 7) &&
          fn_211(first_arg, fn_121(first_arg.ka, second_arg), third_arg) <= fourth_arg)
      );
    },
    fn_211 = function (first_arg, second_arg, third_arg) {
      var local_44 = fn_46(second_arg.x, second_arg.y, third_arg.pos.x, third_arg.pos.y);
      fn_182(first_arg.settings, 4) &&
        (local_44 = Math.min(
          local_44,
          fn_46(
            second_arg.x - first_arg.ka.oa.width,
            second_arg.y - first_arg.ka.oa.height,
            third_arg.pos.x,
            third_arg.pos.y
          ),
          fn_46(
            second_arg.x,
            second_arg.y - first_arg.ka.oa.height,
            third_arg.pos.x,
            third_arg.pos.y
          ),
          fn_46(
            second_arg.x + first_arg.ka.oa.width,
            second_arg.y - first_arg.ka.oa.height,
            third_arg.pos.x,
            third_arg.pos.y
          ),
          fn_46(
            second_arg.x - first_arg.ka.oa.width,
            second_arg.y,
            third_arg.pos.x,
            third_arg.pos.y
          ),
          fn_46(
            second_arg.x + first_arg.ka.oa.width,
            second_arg.y,
            third_arg.pos.x,
            third_arg.pos.y
          ),
          fn_46(
            second_arg.x - first_arg.ka.oa.width,
            second_arg.y + first_arg.ka.oa.height,
            third_arg.pos.x,
            third_arg.pos.y
          ),
          fn_46(
            second_arg.x,
            second_arg.y + first_arg.ka.oa.height,
            third_arg.pos.x,
            third_arg.pos.y
          ),
          fn_46(
            second_arg.x + first_arg.ka.oa.width,
            second_arg.y + first_arg.ka.oa.height,
            third_arg.pos.x,
            third_arg.pos.y
          )
        ));
      return local_44;
    },
    fn_212 = function (first_arg, second_arg = !0) {
      for (let local_44 of first_arg.oa)
        local_44.dh === second_arg && (first_arg.ka.wa[local_44.pos.y][local_44.pos.x] = 9);
    },
    cls_53 = class {
      constructor(
        first_arg,
        second_arg,
        third_arg,
        fourth_arg,
        fifth_arg,
        sixth_arg,
        seventh_arg,
        eighth_arg,
        arg
      ) {
        this.settings = first_arg;
        this.ka = second_arg;
        this.Yc = third_arg;
        this.Ca = fourth_arg;
        this.Ba = fifth_arg;
        this.mA = sixth_arg;
        this.Ga = seventh_arg;
        this.Vw = eighth_arg;
        this.Ia = arg;
        this.oa = new Set();
        this.Aa = new Set();
        this.wa = new Set();
      }
      reset() {
        this.oa = new Set();
        this.Aa = new Set();
        this.wa = new Set();
      }
    };
  var fn_213 = function (first_arg, second_arg = !0) {
      return (
        first_arg !== void 0 &&
        first_arg.dh === second_arg &&
        (first_arg.ix === void 0 || first_arg.ix.p$ > 0)
      );
    },
    fn_214 = function (first_arg, second_arg, third_arg) {
      first_arg.wa.set(fn_44(second_arg), third_arg);
      first_arg.oa[second_arg.y][second_arg.x]++;
    },
    fn_215 = function (first_arg, second_arg) {
      first_arg.wa.delete(fn_44(second_arg));
      first_arg.oa[second_arg.y][second_arg.x]--;
    },
    fn_216 = function (first_arg, second_arg) {
      for (var index = 0; index < first_arg.ka.oa.width; index++)
        for (var index_2 = 0; index_2 < first_arg.ka.oa.height; index_2++)
          first_arg.oa[index_2][index] > 0 && second_arg.add((index << 16) | index_2);
      index = [];
      for (index_2 = 0; index_2 < first_arg.ka.oa.width; index_2++)
        for (let index_3 = 0; index_3 < first_arg.ka.oa.height; index_3++)
          fn_125(first_arg.ka, first_arg.Yc.ka[0], new namespace.de(index_2, index_3)) <= 3 ||
            (fn_182(first_arg.settings, 7) &&
              fn_125(first_arg.ka, fn_226(first_arg.Yc, 0), new namespace.de(index_2, index_3)) <=
                3) ||
            second_arg.has((index_2 << 16) | index_3) ||
            index.push(new namespace.de(index_2, index_3));
      return index.length > 0 ? index[Math.floor(Math.random() * index.length)] : null;
    },
    fn_217 = function (first_arg) {
      return fn_182(first_arg.settings, 17)
        ? fn_182(first_arg.settings, 22) || first_arg.settings.La
          ? Array.from(first_arg.wa.values()).filter((first_arg_2) => first_arg_2.ix !== void 0)
          : Array.from(first_arg.wa.values())
        : [];
    },
    fn_218 = function (first_arg, second_arg) {
      fn_214(first_arg, second_arg, {
        pos: second_arg,
        Qm: !0,
        r9: !1,
        dh: !fn_182(first_arg.settings, 11)
      });
      var list_50 = [
        new namespace.de(second_arg.x - 1, second_arg.y - 1),
        new namespace.de(second_arg.x, second_arg.y - 1),
        new namespace.de(second_arg.x + 1, second_arg.y - 1),
        new namespace.de(second_arg.x - 1, second_arg.y),
        new namespace.de(second_arg.x + 1, second_arg.y),
        new namespace.de(second_arg.x - 1, second_arg.y + 1),
        new namespace.de(second_arg.x, second_arg.y + 1),
        new namespace.de(second_arg.x + 1, second_arg.y + 1)
      ];
      if (fn_182(first_arg.settings, 4))
        for (var local_44 of list_50) fn_124(first_arg.ka, local_44);
      for (let local_45 of list_50)
        fn_122(first_arg.ka, local_45) && first_arg.oa[local_45.y][local_45.x]++;
      if (!fn_182(first_arg.settings, 4)) {
        local_44 = first_arg.ka.oa;
        if (second_arg.x === 0 || second_arg.x === local_44.width - 1)
          (second_arg.y - 2 >= 0 && first_arg.oa[second_arg.y - 2][second_arg.x]++,
            second_arg.y + 2 <= local_44.height - 1 &&
              first_arg.oa[second_arg.y + 2][second_arg.x]++);
        if (second_arg.y === 0 || second_arg.y === local_44.height - 1)
          (second_arg.x - 2 >= 0 && first_arg.oa[second_arg.y][second_arg.x - 2]++,
            second_arg.x + 2 <= local_44.width - 1 &&
              first_arg.oa[second_arg.y][second_arg.x + 2]++);
        if (
          (second_arg.x === 0 && second_arg.y === 2) ||
          (second_arg.x === 2 && second_arg.y === 0)
        )
          (first_arg.oa[2][0]++, first_arg.oa[0][2]++);
        if (
          (second_arg.x === local_44.width - 3 && second_arg.y === 0) ||
          (second_arg.x === local_44.width - 1 && second_arg.y === 2)
        )
          (first_arg.oa[0][local_44.width - 3]++, first_arg.oa[2][local_44.width - 1]++);
        if (
          (second_arg.x === 0 && second_arg.y === local_44.height - 3) ||
          (second_arg.x === 2 && second_arg.y === local_44.height - 1)
        )
          (first_arg.oa[local_44.height - 3][0]++, first_arg.oa[local_44.height - 1][2]++);
        if (
          (second_arg.x === local_44.width - 3 && second_arg.y === local_44.height - 1) ||
          (second_arg.x === local_44.width - 1 && second_arg.y === local_44.height - 3)
        )
          (first_arg.oa[local_44.height - 3][local_44.width - 1]++,
            first_arg.oa[local_44.height - 1][local_44.width - 3]++);
      }
      fn_182(first_arg.settings, 16) &&
        (fn_96(first_arg.Aa, second_arg, !1),
        fn_98(first_arg.Aa, list_50[1]) === "DOWN" && fn_96(first_arg.Aa, list_50[1], !1),
        fn_98(first_arg.Aa, list_50[3]) === "RIGHT" && fn_96(first_arg.Aa, list_50[3], !1),
        fn_98(first_arg.Aa, list_50[4]) === "LEFT" && fn_96(first_arg.Aa, list_50[4], !1),
        fn_98(first_arg.Aa, list_50[6]) === "UP" && fn_96(first_arg.Aa, list_50[6], !1));
    },
    fn_219 = function (first_arg, second_arg = !0) {
      for (let local_44 of first_arg.wa.values())
        local_44.dh === second_arg &&
          !local_44.r9 &&
          fn_213(local_44, second_arg) &&
          (first_arg.ka.wa[local_44.pos.y][local_44.pos.x] = local_44.lR
            ? 11
            : local_44.ix
              ? 12
              : 5);
    },
    fn_220 = function (first_arg) {
      if (!fn_182(first_arg.settings, 2)) {
        first_arg = fn_217(first_arg);
        for (let local_44 of first_arg) local_44.ix.p$ += 1;
      }
    },
    fn_221 = function (first_arg) {
      return fn_182(first_arg.settings, 11) ? first_arg.Yc.wa[first_arg.Yc.wb ? 2 : 1] : !0;
    },
    fn_222 = function (
      first_arg,
      second_arg,
      third_arg,
      fourth_arg,
      fifth_arg,
      sixth_arg,
      seventh_arg
    ) {
      var local_44 = first_arg.settings.wa === 10 ? first_arg.Ba : 0,
        obj_21 = {
          pos: third_arg,
          Qm: second_arg,
          r9: !1,
          dh: seventh_arg,
          ix: {
            color: first_arg.Ca(0.5, local_44, 0, !1, !1),
            p$: sixth_arg,
            zBb: fourth_arg,
            VSa: fifth_arg,
            WR: !1,
            bJd: local_44,
            Ixd: !1,
            GUc: 1
          }
        };
      fn_214(first_arg, third_arg, obj_21);
      fn_182(first_arg.settings, 7) &&
        ((third_arg = fn_121(first_arg.ka, third_arg)),
        (second_arg = {
          pos: third_arg,
          Qm: second_arg,
          r9: !1,
          dh: seventh_arg,
          ix: {
            color: first_arg.Ca(0.5, local_44, 0, !0, !1),
            p$: sixth_arg,
            zBb: fn_45(fourth_arg),
            VSa: fn_45(fifth_arg),
            WR: !1,
            bJd: local_44,
            Ixd: !0,
            GUc: 1
          }
        }),
        fn_214(first_arg, third_arg, second_arg));
    },
    fn_223 = function (first_arg, second_arg) {
      if (!first_arg.Yc.Oa) {
        var list_50 = first_arg.Yc.ka[first_arg.Yc.wb ? 2 : 1],
          local_44 = fn_221(first_arg);
        if (!fn_182(first_arg.settings, 3) || (list_50.x + list_50.y) % 2 !== 0) {
          list_50 = [
            new namespace.de(list_50.x, list_50.y - 1),
            new namespace.de(list_50.x + 1, list_50.y),
            new namespace.de(list_50.x, list_50.y + 1),
            new namespace.de(list_50.x - 1, list_50.y)
          ];
          fn_182(first_arg.settings, 4) &&
            list_50.forEach((first_arg_2) => {
              fn_124(first_arg.ka, first_arg_2);
            });
          var local_45 = fn_182(first_arg.settings, 3)
            ? Math.ceil(first_arg.Yc.ka.length / 2)
            : first_arg.Yc.ka.length - 1 + first_arg.Yc.Ra;
          for (let index = 0; index < list_50.length; index++) {
            let local_46 = list_50[index];
            var rma = first_arg.RMa(local_46);
            if (rma) {
              if (
                rma.ix &&
                !rma.pos.equals(first_arg.Yc.ka[0]) &&
                ((rma.ix.p$ = local_45),
                (rma.ix.zBb = first_arg.Yc.direction),
                (rma.ix.VSa = first_arg.Yc.direction),
                fn_182(first_arg.settings, 11) &&
                  !rma.dh &&
                  local_44 &&
                  first_arg.ka.wa[local_46.y][local_46.x] === 0 &&
                  !first_arg.Yc.ka.some((first_arg_2) => first_arg_2.equals(local_46)) &&
                  ((rma.dh = !0), (rma.ix.WR = !0)),
                fn_182(first_arg.settings, 7))
              ) {
                let rma_2 = first_arg.RMa(fn_121(first_arg.ka, local_46));
                rma_2 &&
                  rma_2.ix &&
                  ((rma_2.ix.p$ = local_45),
                  (rma_2.ix.zBb = fn_45(first_arg.Yc.direction)),
                  (rma_2.ix.VSa = fn_45(first_arg.Yc.direction)),
                  (rma_2.dh = rma.dh),
                  (rma_2.ix.WR = rma.ix.WR));
              }
              continue;
            }
            if (!fn_122(first_arg.ka, local_46) || first_arg.ka.wa[local_46.y][local_46.x] !== 0)
              continue;
            if (
              (fn_182(first_arg.settings, 3) || fn_182(first_arg.settings, 11)) &&
              first_arg.Yc.ka.some((first_arg_2) => first_arg_2.equals(local_46))
            )
              continue;
            if (
              fn_182(first_arg.settings, 7) &&
              fn_134(first_arg.ka) &&
              local_46.x === Math.floor(first_arg.ka.oa.width / 2) &&
              local_46.y === Math.floor(first_arg.ka.oa.height / 2)
            )
              continue;
            rma = first_arg.Yc.direction;
            if (first_arg.Yc.direction !== second_arg)
              if (first_arg.Yc.direction === "UP" || first_arg.Yc.direction === "DOWN") {
                if (index === 0 || index === 2) rma = second_arg;
              } else if (index === 1 || index === 3) rma = second_arg;
            fn_222(first_arg, !0, local_46, rma, first_arg.Yc.direction, local_45, local_44);
          }
          second_arg = fn_217(first_arg);
          for (let local_46 of second_arg)
            (local_46.ix.p$ > 0 && local_46.ix.p$--,
              fn_182(first_arg.settings, 12) && local_46.ix.GUc--);
          first_arg.Ba++;
        }
      }
    },
    cls_54 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
        this.settings = first_arg;
        this.ka = second_arg;
        this.Yc = third_arg;
        this.Aa = fourth_arg;
        this.Ca = fifth_arg;
        this.wa = new Map();
        this.oa = [];
        this.Ba = 0;
      }
      reset() {
        this.wa = new Map();
        this.oa = [];
        for (var index = 0; index < this.ka.oa.height; index++) {
          this.oa.push([]);
          for (let index_2 = 0; index_2 < this.ka.oa.width; index_2++) {
            let local_44 =
              !fn_182(this.settings, 4) &&
              ((index_2 === 0 && (index === 1 || index === this.ka.oa.height - 2)) ||
                (index_2 === this.ka.oa.width - 1 &&
                  (index === 1 || index === this.ka.oa.height - 2)) ||
                (index === 0 && (index_2 === 1 || index_2 === this.ka.oa.width - 2)) ||
                (index === this.ka.oa.height - 1 &&
                  (index_2 === 1 || index_2 === this.ka.oa.width - 2)));
            this.oa[index].push(local_44 ? 1 : 0);
          }
        }
        fn_182(this.settings, 7) &&
          fn_134(this.ka) &&
          ((index = new namespace.de(
            Math.floor(this.ka.oa.width / 2),
            Math.floor(this.ka.oa.height / 2)
          )),
          fn_214(this, index, { pos: index, Qm: !1, r9: !0, dh: !0 }));
        this.Ba = 0;
      }
      RMa(first_arg) {
        return this.wa.get(fn_44(first_arg));
      }
      refresh() {
        for (let local_44 of this.wa.values())
          (fn_182(this.settings, 16) && local_44.ix && fn_96(this.Aa, local_44.pos, !1),
            (local_44.Qm = !1));
      }
    };
  var cls_55 = class {
    constructor(first_arg, second_arg) {
      this.settings = first_arg;
      this.ka = second_arg;
      this.wa = 0;
      this.particles = [];
      this.oa = new Set();
    }
    reset() {
      this.particles = [];
      this.oa = new Set();
    }
  };
  var obj_16 = {
      crb: new namespace.tfF(
        "/logos/fnbx/snake_arcade/",
        "poison_audio",
        { BURP: 0, DIZZY_1: 27, DIZZY_2: 42, DIZZY_3: 57, DIZZY_4: 72, SQUISH: 87 },
        418
      )
    },
    obj_17 = {
      KXd: new namespace.Z6(obj_16.crb, "BURP", 339.592),
      QYd: new namespace.Z6(obj_16.crb, "DIZZY_1", 182.857),
      RYd: new namespace.Z6(obj_16.crb, "DIZZY_2", 182.857),
      SYd: new namespace.Z6(obj_16.crb, "DIZZY_3", 182.857),
      TYd: new namespace.Z6(obj_16.crb, "DIZZY_4", 182.857),
      Mad: new namespace.Z6(obj_16.crb, "SQUISH", 470.204)
    },
    cls_56 = class extends namespace.pfF {
      constructor() {
        super(obj_16, obj_17);
      }
    };
  var fn_224 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg) {
      second_arg = {
        pos: second_arg,
        mM: 0,
        vOa: 0,
        JOa: !1,
        Lyb: third_arg,
        Qm: !0,
        xlc: null,
        ydb: fourth_arg,
        dh: third_arg || !fn_182(first_arg.settings, 11),
        Vjb: sixth_arg
      };
      fn_182(first_arg.settings, 5) &&
        fn_182(first_arg.settings, 11) &&
        third_arg &&
        (second_arg.dh = fifth_arg[1]);
      return second_arg;
    },
    fn_225 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      var local_44 = fourth_arg ? first_arg.Yc.direction : fn_45(first_arg.Yc.direction);
      if (third_arg) {
        third_arg = first_arg.Yc.direction;
        fn_235(first_arg.Yc, fn_217(first_arg.Vw), first_arg.Vw.RMa.bind(first_arg.Vw));
        local_44 = fourth_arg ? first_arg.Yc.Ia : fn_45(first_arg.Yc.Ia);
        first_arg.Yc.direction = third_arg;
        first_arg.Yc.Ka = third_arg;
        first_arg.Yc.Ia = "NONE";
        for (var local_45 of first_arg.ka)
          if (
            (local_45.JOa || (local_45.vOa = first_arg.Yc.ka.length - 1 - local_45.vOa),
            (local_45.Lyb = !local_45.Lyb),
            local_45.Lyb && local_45.vOa > 0)
          ) {
            third_arg = first_arg.Yc.ka[local_45.vOa - 1];
            let local_46 = first_arg.Yc.ka[local_45.vOa];
            third_arg.x < local_46.x
              ? (local_45.ydb = "LEFT")
              : third_arg.x > local_46.x
                ? (local_45.ydb = "RIGHT")
                : third_arg.y < local_46.y
                  ? (local_45.ydb = "UP")
                  : third_arg.y > local_46.y && (local_45.ydb = "DOWN");
          } else local_45.ydb = fn_45(local_45.ydb);
      }
      third_arg = first_arg.Ba.ka[second_arg % 2 === 0 ? second_arg + 1 : second_arg - 1];
      second_arg = fourth_arg ? first_arg.Yc.ka[0].clone() : fn_226(first_arg.Yc, 0);
      local_45 = third_arg.pos.clone();
      fn_181(first_arg.settings) &&
        (local_45.x % 1 !== 0 &&
          (local_45.x -=
            fn_182(first_arg.settings, 18) && third_arg.Ce.x === 0
              ? third_arg.EXa.x
              : third_arg.Ce.x),
        local_45.y % 1 !== 0 &&
          (local_45.y -=
            fn_182(first_arg.settings, 18) && third_arg.Ce.y === 0
              ? third_arg.EXa.y
              : third_arg.Ce.y),
        fn_182(first_arg.settings, 4) &&
          (fn_122(first_arg.oa, local_45) || (local_45 = fn_132(first_arg.oa, local_45))));
      first_arg.Yc.ka.unshift(fourth_arg ? local_45 : fn_121(first_arg.oa, local_45));
      fn_182(first_arg.settings, 11) && first_arg.Yc.wa.unshift(!1);
      fn_187(first_arg.settings) && first_arg.Yc.Qa.unshift(void 0);
      fn_182(first_arg.settings, 13) && first_arg.Yc.Ta.unshift(1);
      fifth_arg ? first_arg.Aa++ : (first_arg.Yc.Ra = Math.max(0, first_arg.Yc.Ra - 1));
      fifth_arg = fn_224(first_arg, second_arg, !0, local_44, first_arg.Yc.wa, !fourth_arg);
      third_arg = fn_224(first_arg, local_45, !1, local_44, first_arg.Yc.wa, !fourth_arg);
      fifth_arg.xlc = third_arg;
      third_arg.xlc = fifth_arg;
      first_arg.ka.push(fifth_arg);
      first_arg.ka.push(third_arg);
      fn_182(first_arg.settings, 7) &&
        ((fifth_arg = fn_121(first_arg.oa, local_45)),
        (local_44 = fn_45(local_44)),
        (second_arg = fn_224(
          first_arg,
          fn_121(first_arg.oa, second_arg),
          !0,
          local_44,
          first_arg.Yc.wa,
          fourth_arg
        )),
        (fourth_arg = fn_224(first_arg, fifth_arg, !1, local_44, first_arg.Yc.wa, fourth_arg)),
        (second_arg.xlc = fourth_arg),
        (fourth_arg.xlc = second_arg),
        first_arg.ka.push(second_arg),
        first_arg.ka.push(fourth_arg),
        (first_arg.Yc.Ba.l3 = 0),
        (first_arg.Yc.Ba.gba = !1));
      first_arg.Yc.Aa.l3 = 0;
      first_arg.Yc.Aa.gba = !1;
      first_arg.Yc.wb = !0;
      first_arg.Yc.hc = first_arg.Yc.direction;
    },
    cls_57 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
        this.settings = first_arg;
        this.oa = second_arg;
        this.Yc = third_arg;
        this.Ba = fourth_arg;
        this.Vw = fifth_arg;
        this.ka = [];
        this.wa = [];
        this.Aa = 0;
      }
      reset() {
        this.ka = [];
        this.wa = [];
      }
      update() {
        this.wa = [];
        for (let index = 0; index < this.ka.length; index++) {
          let local_44 = this.ka[index];
          local_44.JOa
            ? (this.wa.push(this.ka[index]), this.ka.splice(index, 1), index--)
            : local_44.Qm || (local_44.mM = (local_44.mM + 1) % 6);
        }
      }
      refresh() {
        for (let local_44 of this.ka) local_44.Qm = !1;
      }
    };
  var fn_226 = function (first_arg, second_arg) {
      return second_arg < 0 || second_arg >= first_arg.ka.length
        ? new namespace.de(-1, -1)
        : fn_121(first_arg.oa, first_arg.ka[second_arg]);
    },
    fn_227 = function (first_arg) {
      first_arg.Ca === 0 && (first_arg.hb = !0);
      first_arg.Ca = Math.max(8, Math.floor((first_arg.ka.length * 2) / 3));
      fn_234(first_arg);
    },
    fn_228 = function (first_arg) {
      return first_arg.direction === "NONE" ? first_arg.Ka : first_arg.direction;
    },
    fn_229 = function (first_arg, second_arg = !0) {
      for (let index = 0; index < first_arg.ka.length - 1; index++) {
        var local_44 = first_arg.ka[index];
        (fn_182(first_arg.settings, 3) && (local_44.x + local_44.y) % 2 === 0) ||
          (fn_182(first_arg.settings, 11) && first_arg.wa[index] !== second_arg) ||
          local_44.x % 1 !== 0 ||
          local_44.y % 1 !== 0 ||
          local_44.y < 0 ||
          local_44.y >= first_arg.oa.wa.length ||
          local_44.x < 0 ||
          local_44.x >= first_arg.oa.wa[0].length ||
          ((first_arg.oa.wa[local_44.y][local_44.x] = 1),
          fn_182(first_arg.settings, 7) &&
            ((local_44 = fn_226(first_arg, index)), (first_arg.oa.wa[local_44.y][local_44.x] = 1)));
      }
    },
    fn_230 = function (first_arg) {
      return fn_182(first_arg.settings, 2) && first_arg.wb;
    },
    fn_231 = function (first_arg) {
      return first_arg.Oa || first_arg.Ia !== "NONE";
    },
    fn_232 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      if (first_arg.ka.length === 0) return new namespace.de(0, 0);
      third_arg = third_arg ? fn_226(first_arg, 0) : first_arg.ka[0];
      var local_44 = Infinity,
        de_6 = new namespace.de(Infinity, Infinity);
      for (let local_45 of second_arg) {
        if (!local_45.dh || fn_54(first_arg.settings.ka, local_45.sequenceNumber, fifth_arg))
          continue;
        let cm = namespace.Cm(local_45.pos, third_arg);
        cm < local_44 && ((local_44 = cm), (de_6 = local_45.pos));
      }
      if (fourth_arg)
        for (let local_45 of second_arg) {
          if (!local_45.dh || fn_54(first_arg.settings.ka, local_45.sequenceNumber, fifth_arg))
            continue;
          second_arg = fn_121(first_arg.oa, local_45.pos);
          fourth_arg = namespace.Cm(second_arg, third_arg);
          fourth_arg < local_44 && ((local_44 = fourth_arg), (de_6 = second_arg));
        }
      if (fn_182(first_arg.settings, 4))
        for (let local_45 of first_arg.yb)
          ((first_arg = namespace.Cm(local_45, third_arg)),
            first_arg < local_44 && ((local_44 = first_arg), (de_6 = local_45)));
      return de_6;
    },
    fn_233 = function (first_arg) {
      return Math.pow(first_arg / 2, 4) * 0.0025 + 0.05;
    },
    fn_234 = function (first_arg) {
      first_arg.Kb = "NONE";
      first_arg.Nb = !1;
      first_arg.Ia !== "NONE" && ((first_arg.direction = first_arg.Ia), (first_arg.Ia = "NONE"));
    },
    fn_235 = function (first_arg, second_arg, fn_457) {
      first_arg.ka = first_arg.ka.reverse();
      fn_182(first_arg.settings, 11) && first_arg.wa.reverse();
      fn_182(first_arg.settings, 13) && first_arg.Ta.reverse();
      if (fn_187(first_arg.settings)) {
        var len = first_arg.ka.length,
          fill = Array(len).fill(void 0);
        for (let index = 0; index < len - 1; index++) {
          let local_44 = first_arg.Qa[index];
          local_44 !== void 0 && (fill[len - 2 - index] = fn_45(local_44));
        }
        first_arg.Qa = fill;
      }
      first_arg.direction = "NONE";
      len = first_arg.ka[0].x - first_arg.ka[1].x;
      fill = first_arg.ka[0].y - first_arg.ka[1].y;
      fn_188(first_arg.settings) &&
        ((len = fn_51(len)),
        (fill = fn_51(fill)),
        fn_122(first_arg.oa, first_arg.ka[0]) ||
          (first_arg.ka[0] = fn_132(first_arg.oa, first_arg.ka[0])));
      len === 1
        ? (first_arg.Ka = "RIGHT")
        : len === -1
          ? (first_arg.Ka = "LEFT")
          : fill === 1
            ? (first_arg.Ka = "DOWN")
            : fill === -1 && (first_arg.Ka = "UP");
      fn_187(first_arg.settings) && first_arg.Qa[0] !== void 0 && (first_arg.Ka = first_arg.Qa[0]);
      first_arg.Ia = first_arg.Ka;
      first_arg.Kb = "NONE";
      first_arg.Ya = first_arg.ka[first_arg.ka.length - 1];
      first_arg.xc = first_arg.Ya;
      fn_187(first_arg.settings) && (first_arg.Mb = first_arg.Qa[first_arg.Qa.length - 1]);
      first_arg.Xc = first_arg.Mb;
      first_arg.Ac = first_arg.ka[0];
      (fn_182(first_arg.settings, 10) && first_arg.Ca !== 0) || fn_236(first_arg);
      fn_182(first_arg.settings, 16) && fn_96(first_arg.Pb, first_arg.ka[0], !1);
      if (fn_182(first_arg.settings, 17))
        for (let local_44 of second_arg)
          ((local_44.ix.zBb = fn_45(local_44.ix.zBb)),
            (local_44.ix.VSa = fn_45(local_44.ix.VSa)),
            local_44.ix.p$ > 0 &&
              (local_44.ix.p$ =
                (fn_182(first_arg.settings, 3)
                  ? Math.ceil(first_arg.ka.length / 2)
                  : first_arg.ka.length) +
                2 -
                local_44.ix.p$),
            fn_125(first_arg.oa, first_arg.ka[0], local_44.pos) <= 1 &&
              ((local_44.ix.p$ = 0),
              (local_44.ix.VSa = fn_45(first_arg.Ia)),
              fn_182(first_arg.settings, 7) &&
                (second_arg = fn_457(fn_121(first_arg.oa, local_44.pos))) &&
                second_arg.ix &&
                ((second_arg.ix.p$ = local_44.ix.p$),
                (second_arg.ix.VSa = fn_45(local_44.ix.VSa)))));
      first_arg.Nb = !1;
      first_arg.Oa = !0;
    },
    fn_236 = function (first_arg) {
      first_arg.Aa.zDa = 0;
      first_arg.Aa.vSa = 0;
      first_arg.Aa.gba = !1;
      first_arg.Aa.eaa = 0;
      first_arg.Aa.rBa = !1;
      first_arg.Aa.l3 = 0;
      first_arg.Aa.BQa = 0;
      first_arg.Aa.PZa = 0;
      first_arg.Ba.zDa = 0;
      first_arg.Ba.vSa = 0;
      first_arg.Ba.gba = !1;
      first_arg.Ba.eaa = Math.PI;
      first_arg.Ba.rBa = !1;
      first_arg.Ba.l3 = 0;
      first_arg.Ba.BQa = 0;
      first_arg.Ba.PZa = 0;
    },
    fn_237 = function (first_arg, second_arg) {
      first_arg.direction = second_arg;
      first_arg.Nb = !0;
      first_arg.Kb = "NONE";
      first_arg.Ia = "NONE";
      first_arg.wb && (first_arg.hc = first_arg.direction);
      first_arg.wb = !1;
    },
    fn_238 = function (first_arg) {
      switch (first_arg.direction) {
        case "DOWN":
          obj_11.DOWN.play();
          break;
        case "UP":
          obj_11.UP.play();
          break;
        case "LEFT":
          obj_11.LEFT.play();
          break;
        case "RIGHT":
          obj_11.RIGHT.play();
      }
    },
    fn_239 = function (first_arg, second_arg, list_50, list_51, fifth_arg, sixth_arg) {
      second_arg.zDa === 0
        ? Math.random() < second_arg.vSa || first_arg.Ca === 1
          ? ((second_arg.zDa = 4), (second_arg.vSa = 0))
          : (second_arg.vSa += 0.005)
        : --second_arg.zDa;
      if (list_50.length + (fn_182(first_arg.settings, 8) ? list_51.length : 0) === 0)
        second_arg.gba = !1;
      else {
        let local_44 = fn_232(first_arg, list_50, fifth_arg, fn_184(first_arg.settings), sixth_arg),
          local_45 = fifth_arg ? fn_226(first_arg, 0) : first_arg.ka[0];
        if (fn_181(first_arg.settings)) second_arg.gba = namespace.Cm(local_45, local_44) < 3;
        else {
          let local_46 = fifth_arg ? fn_45(first_arg.direction) : first_arg.direction;
          second_arg.gba =
            namespace.Cm(local_45, local_44) < 3 &&
            !(local_46 === "RIGHT" && local_45.x > local_44.x) &&
            !(local_46 === "LEFT" && local_45.x < local_44.x) &&
            !(local_46 === "UP" && local_45.y < local_44.y) &&
            !(local_46 === "DOWN" && local_45.y > local_44.y);
        }
        list_51.length > 0 &&
          !second_arg.gba &&
          ((list_51 = fn_232(
            first_arg,
            list_51,
            fifth_arg,
            fn_182(first_arg.settings, 7),
            sixth_arg
          )),
          (second_arg.gba = namespace.Cm(local_45, list_51) < 3));
      }
      second_arg.BQa === 0
        ? Math.random() < second_arg.PZa
          ? ((second_arg.BQa = 7), (second_arg.PZa = 0))
          : ((second_arg.PZa += 0.0012),
            list_50.some((first_arg_2) => first_arg_2.Qm) && (second_arg.PZa += 0.0036))
        : second_arg.gba || second_arg.l3 !== 0
          ? (second_arg.BQa = 0)
          : --second_arg.BQa;
      fn_182(first_arg.settings, 18) && (second_arg.gba = !0);
    },
    fn_240 = function (first_arg, second_arg) {
      var width = first_arg.oa.oa.width,
        height = first_arg.oa.oa.height;
      first_arg.yb.push(new namespace.de(second_arg.x - width, second_arg.y - height));
      first_arg.yb.push(new namespace.de(second_arg.x, second_arg.y - height));
      first_arg.yb.push(new namespace.de(second_arg.x + width, second_arg.y - height));
      first_arg.yb.push(new namespace.de(second_arg.x - width, second_arg.y));
      first_arg.yb.push(new namespace.de(second_arg.x + width, second_arg.y));
      first_arg.yb.push(new namespace.de(second_arg.x - width, second_arg.y + height));
      first_arg.yb.push(new namespace.de(second_arg.x, second_arg.y + height));
      first_arg.yb.push(new namespace.de(second_arg.x + width, second_arg.y + height));
    },
    fn_241 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      first_arg.yb = [];
      for (let local_44 of second_arg)
        local_44.dh &&
          !fn_54(first_arg.settings.ka, local_44.sequenceNumber, fifth_arg) &&
          (fn_240(first_arg, local_44.pos),
          fn_184(first_arg.settings) && fn_240(first_arg, fn_121(first_arg.oa, local_44.pos)));
      for (let local_44 of third_arg)
        local_44.dh &&
          !fn_54(first_arg.settings.ka, local_44.sequenceNumber, fifth_arg) &&
          (fn_240(first_arg, local_44.pos),
          fn_182(first_arg.settings, 7) && fn_240(first_arg, fn_121(first_arg.oa, local_44.pos)));
      for (let local_44 of fourth_arg)
        local_44.dh &&
          !fn_54(first_arg.settings.ka, local_44.sequenceNumber, fifth_arg) &&
          (fn_240(first_arg, local_44.pos),
          fn_182(first_arg.settings, 7) && fn_240(first_arg, fn_121(first_arg.oa, local_44.pos)));
    },
    fn_242 = function (first_arg) {
      first_arg.Oa = !1;
      first_arg.Ia !== "NONE" && ((first_arg.direction = first_arg.Ia), (first_arg.Ia = "NONE"));
    },
    cls_58 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
        this.settings = first_arg;
        this.oa = second_arg;
        this.Pb = third_arg;
        this.Fd = fourth_arg;
        this.Ed = fifth_arg;
        this.ka = [];
        this.Ya = new namespace.de(0, 0);
        this.xc = new namespace.de(0, 0);
        this.Ac = new namespace.de(0, 0);
        this.Bc = 0;
        this.Gc = new namespace.de(0, 0);
        this.rb = {
          head: new namespace.de(0, 0),
          zTb: !1,
          F5a: new namespace.de(0, 0),
          NRb: 0,
          Rzb: 0,
          pgc: !1
        };
        this.Wc = new namespace.de(0, 0);
        this.Ra = 0;
        this.La = [];
        this.direction = "NONE";
        this.Ka = "RIGHT";
        this.Kb = "NONE";
        this.Nb = !1;
        this.Ga = 0;
        this.kb = new namespace.de();
        this.Vb = this.oc = this.Qb = 0;
        this.Hl = list_8[0][0];
        this.od = list_8[0][1];
        this.Aa = { zDa: 0, vSa: 0, eaa: 0, l3: 0, gba: !1, BQa: 0, PZa: 0, rBa: !1, light: 2 };
        this.Ba = { zDa: 0, vSa: 0, eaa: 0, l3: 0, gba: !1, BQa: 0, PZa: 0, rBa: !1, light: 2 };
        this.wb = !1;
        this.hc = "NONE";
        this.yb = [];
        this.Ia = "NONE";
        this.Oa = !1;
        this.oo = new namespace.de(0, 0);
        this.Ca = 0;
        this.hb = !1;
        this.wa = [];
        this.Ta = [];
        this.Qa = [];
        this.Xc = this.Mb = void 0;
      }
      reset() {
        this.Kb = "NONE";
        this.Nb = !1;
        this.direction = "NONE";
        this.Ka = "RIGHT";
        this.ka = [];
        this.ka.push(
          new namespace.de(Math.floor(this.oa.oa.width / 4), Math.floor(this.oa.oa.height / 2))
        );
        this.ka.push(
          new namespace.de(Math.floor(this.oa.oa.width / 4) - 1, Math.floor(this.oa.oa.height / 2))
        );
        this.ka.push(
          new namespace.de(Math.floor(this.oa.oa.width / 4) - 2, Math.floor(this.oa.oa.height / 2))
        );
        this.ka.push(
          new namespace.de(Math.floor(this.oa.oa.width / 4) - 3, Math.floor(this.oa.oa.height / 2))
        );
        if (this.ka[this.ka.length - 1].x < 0) {
          var local_44 = this.ka[this.ka.length - 1].x;
          for (let local_46 of this.ka) local_46.x -= local_44;
        }
        if (this.settings.isMobile && fn_182(this.settings, 7) && this.settings.Aa === 1)
          for (let local_46 of this.ka) local_46.y = Math.floor(this.oa.oa.height / 5);
        if (
          !this.settings.isMobile &&
          fn_182(this.settings, 3) &&
          ((local_44 = this.ka[0]), (local_44.x + local_44.y) % 2 === 0)
        )
          for (var local_45 of this.ka) --local_45.x;
        this.wa = [];
        this.Ta = [];
        this.Qa = [];
        for (local_45 = 0; local_45 < this.ka.length; local_45++)
          (this.wa.push(!0), this.Ta.push(1), this.Qa.push(void 0));
        this.Ya = this.ka[2].clone();
        this.xc = this.ka[2].clone();
        this.Xc = this.Mb = void 0;
        fn_182(this.settings, 17) && (--this.Ya.x, --this.xc.x);
        this.Ac = this.ka[0];
        this.Bc = 0;
        this.rb.zTb = !1;
        this.rb.F5a = new namespace.de(0, 0);
        this.rb.NRb = 0;
        this.rb.Rzb = 0;
        this.rb.pgc = !1;
        this.La = [];
        this.Ga = 0;
        this.Ra = fn_182(this.settings, 3) ? 2 : 0;
        this.wb = !1;
        this.hc = "NONE";
        this.Ca = 0;
        this.hb = !1;
        this.Ia = "NONE";
        this.Oa = !1;
        this.oo = new namespace.de(0, 0);
        fn_236(this);
        fn_182(this.settings, 14) && ((this.Aa.light = 2), (this.Ba.light = 2));
        this.oc = this.Vb = 0;
      }
    };
  var obj_18 = {
      Sad: new namespace.tfF(
        "/logos/fnbx/snake_arcade/",
        "statues_audio",
        { CRUMBLE: 0, STATUE: 69 },
        418
      )
    },
    obj_19 = {
      Huc: new namespace.Z6(obj_18.Sad, "CRUMBLE", 888.163),
      Rad: new namespace.Z6(obj_18.Sad, "STATUE", 522.449)
    },
    cls_59 = class extends namespace.pfF {
      constructor() {
        super(obj_18, obj_19);
      }
    };
  var fn_243 = function (first_arg, second_arg, third_arg, fourth_arg = !1) {
      for (let local_44 of first_arg.oa.keys()) {
        let get_value = first_arg.oa.get(local_44);
        (fourth_arg
          ? fn_46(second_arg.x, second_arg.y, get_value.pos.x, get_value.pos.y)
          : fn_125(first_arg.ka, second_arg, get_value.pos)) <= third_arg &&
          (fn_244(first_arg, local_44),
          fn_182(first_arg.settings, 7) &&
            get_value.lR &&
            get_value.lR.FAb !== -1 &&
            fn_244(first_arg, get_value.lR.FAb));
      }
    },
    fn_244 = function (first_arg, second_arg) {
      var get_value = first_arg.oa.get(second_arg);
      first_arg.oa.delete(second_arg);
      fn_215(first_arg.Vw, get_value.pos);
      first_arg.Ba.particles.push({
        pos: new namespace.de(get_value.pos.x * first_arg.ka.ka, get_value.pos.y * first_arg.ka.ka),
        Ce: new namespace.de(Math.random() * 2 * 8 - 8, Math.random() * -15),
        angle: (get_value.lR.angle * 180) / Math.PI,
        m0: Math.random() * 2 * 10 - 10,
        size: 1,
        ZI: -1,
        type: 4,
        lR: get_value.lR
      });
    },
    fn_245 = function (first_arg) {
      var ka = first_arg.Yc.ka,
        num_30 = !1;
      for (let local_44 of first_arg.oa.keys())
        first_arg.oa.get(local_44).lR?.Vcb && (fn_244(first_arg, local_44), (num_30 = !0));
      num_30 && obj_19.Huc.play();
      ka = Math.min(0.4, ka.length / ((first_arg.ka.oa.width * first_arg.ka.oa.height) / 6));
      for (let local_44 of first_arg.oa.keys())
        ((num_30 = first_arg.oa.get(local_44)),
          Math.random() < ka &&
            num_30.lR &&
            num_30.lR.w0b >= first_arg.Yc.ka.length &&
            ((num_30.lR.Vcb = !0),
            fn_182(first_arg.settings, 7) &&
              (num_30 = first_arg.oa.get(num_30.lR.FAb)) &&
              num_30.lR &&
              (num_30.lR.Vcb = !0)));
    },
    fn_246 = function (first_arg, second_arg, third_arg) {
      first_arg.oa.set(fn_44(second_arg), third_arg);
      fn_214(first_arg.Vw, second_arg, third_arg);
    },
    fn_247 = function (first_arg, fn_457) {
      for (
        var ka = first_arg.Yc.ka,
          local_44 = fn_182(first_arg.settings, 5) && !fn_182(first_arg.settings, 2) ? 2 : 1;
        local_44 < ka.length;
        local_44++
      ) {
        var clone = ka[local_44].clone();
        if (first_arg.Vw.RMa(clone)) continue;
        if (fn_182(first_arg.settings, 3) && (clone.x + clone.y) % 2 === 0) continue;
        first_arg.Yc.Ta[local_44] = -1;
        var num_30 = void 0,
          num_31 = 0;
        if (first_arg.settings.bN()) num_30 = 1;
        else if (local_44 === ka.length - 1) {
          num_30 = 0;
          var local_45 = ka[local_44 - 1],
            num_32 = clone.x - local_45.x;
          local_45 = clone.y - local_45.y;
          fn_188(first_arg.settings) && ((num_32 = fn_51(num_32)), (local_45 = fn_51(local_45)));
          num_32 === -1
            ? (num_31 = (Math.PI * 3) / 2)
            : num_32 === 1
              ? (num_31 = Math.PI / 2)
              : local_45 === -1
                ? (num_31 = 0)
                : local_45 === 1 && (num_31 = Math.PI);
        } else
          fn_182(first_arg.settings, 2) && local_44 === 1
            ? (num_30 = 1)
            : ((num_30 = ka[local_44 + 1]),
              (local_45 = ka[local_44 - 1]),
              (num_32 = clone.x - num_30.x + (clone.x - local_45.x)),
              (local_45 = clone.y - num_30.y + (clone.y - local_45.y)),
              fn_188(first_arg.settings) &&
                (num_32 < -1 ? (num_32 = 1) : num_32 > 1 && (num_32 = -1),
                local_45 < -1 ? (local_45 = 1) : local_45 > 1 && (local_45 = -1)),
              num_32 !== 0 && local_45 !== 0
                ? ((num_30 = 2),
                  (num_31 =
                    num_32 === -1
                      ? local_45 === -1
                        ? 0
                        : (Math.PI * 3) / 2
                      : local_45 === -1
                        ? Math.PI / 2
                        : Math.PI))
                : (num_30 = 1));
        num_32 = fn_457(local_44 / ka.length, local_44, 0, !1);
        num_32 = {
          pos: clone,
          Qm: !0,
          r9: !1,
          dh: !0,
          lR: {
            Vcb: !1,
            w0b: local_44,
            FAb: -1,
            color: num_32,
            type: num_30,
            angle: num_31,
            ZBc: Math.floor(Math.random() * 4),
            YBc: (Math.floor(Math.random() * 4) * Math.PI) / 2
          }
        };
        fn_246(first_arg, clone, num_32);
        if (fn_182(first_arg.settings, 7)) {
          local_45 = fn_121(first_arg.ka, clone);
          num_31 += Math.PI;
          var local_46 = fn_457(local_44 / ka.length, local_44, 0, !0);
          fn_246(first_arg, local_45, {
            pos: local_45,
            Qm: !0,
            r9: !1,
            dh: !0,
            lR: {
              Vcb: !1,
              w0b: local_44,
              FAb: fn_44(clone),
              color: local_46,
              type: num_30,
              angle: num_31,
              ZBc: Math.floor(Math.random() * 4),
              YBc: (Math.floor(Math.random() * 4) * Math.PI) / 2
            }
          });
          num_32.lR.FAb = fn_44(local_45);
        }
      }
      if (fn_182(first_arg.settings, 17)) {
        ka = fn_217(first_arg.Vw);
        for (var list_50 of ka)
          ((ka = fn_457(0.5, list_50.ix.bJd % first_arg.Yc.ka.length, 0, list_50.ix.Ixd)),
            (ka = {
              pos: list_50.pos,
              Qm: !1,
              r9: !1,
              dh: list_50.dh,
              lR: {
                Vcb: !1,
                w0b: 0,
                FAb: fn_182(first_arg.settings, 7) ? fn_44(fn_121(first_arg.ka, list_50.pos)) : -1,
                color: ka,
                type: 1,
                angle: 0,
                ZBc: Math.floor(Math.random() * 4),
                YBc: (Math.floor(Math.random() * 4) * Math.PI) / 2
              }
            }),
            fn_215(first_arg.Vw, list_50.pos),
            fn_246(first_arg, list_50.pos, ka));
      }
      obj_19.Rad.play();
      first_arg.Aa.clear();
      if (!fn_182(first_arg.settings, 21)) {
        fn_457 = [];
        for (local_44 = 0; local_44 < first_arg.ka.oa.height; local_44++)
          for (fn_457.push([]), clone = 0; clone < first_arg.ka.oa.width; clone++)
            ((num_30 = fn_249(first_arg, clone, local_44)),
              (list_50 = fn_457[local_44]),
              (ka = list_50.push),
              num_30
                ? (num_31 = -1)
                : ((num_31 = first_arg),
                  (num_32 = clone),
                  (local_45 = local_44),
                  (local_46 = 0),
                  fn_188(num_31.settings)
                    ? (fn_252(num_31, fn_124(num_31.ka, new namespace.de(num_32 - 1, local_45))) &&
                        local_46++,
                      fn_252(num_31, fn_124(num_31.ka, new namespace.de(num_32 + 1, local_45))) &&
                        local_46++,
                      fn_252(num_31, fn_124(num_31.ka, new namespace.de(num_32, local_45 - 1))) &&
                        local_46++,
                      fn_252(num_31, fn_124(num_31.ka, new namespace.de(num_32, local_45 + 1))) &&
                        local_46++)
                    : ((num_32 === 0 || fn_249(num_31, num_32 - 1, local_45)) && local_46++,
                      (num_32 === num_31.ka.oa.width - 1 || fn_249(num_31, num_32 + 1, local_45)) &&
                        local_46++,
                      (local_45 === 0 || fn_249(num_31, num_32, local_45 - 1)) && local_46++,
                      (local_45 === num_31.ka.oa.height - 1 ||
                        fn_249(num_31, num_32, local_45 + 1)) &&
                        local_46++),
                  (num_31 = 4 - local_46)),
              ka.call(list_50, { Gkb: num_31, Swd: num_30, cod: !1, Mbd: !1 }));
        for (list_50 = 0; list_50 < first_arg.ka.oa.height; list_50++)
          for (ka = 0; ka < first_arg.ka.oa.width; ka++) fn_250(first_arg, fn_457, ka, list_50, !1);
        first_arg.wa = 0;
        fn_251(first_arg, fn_457, first_arg.Yc.ka[0]);
        if (
          first_arg.wa /
            (first_arg.wa +
              (first_arg.ka.oa.width * first_arg.ka.oa.height -
                first_arg.wa -
                first_arg.oa.size)) >=
          0.25
        )
          for (list_50 = 0; list_50 < first_arg.ka.oa.height; list_50++)
            for (ka = 0; ka < first_arg.ka.oa.width; ka++)
              ((local_44 = fn_457[list_50][ka]), local_44.Mbd || (local_44.Gkb = 0));
        for (list_50 = 0; list_50 < first_arg.ka.oa.height; list_50++)
          for (ka = 0; ka < first_arg.ka.oa.width; ka++)
            fn_457[list_50][ka].Gkb <= 1 && first_arg.Aa.add((ka << 16) | list_50);
      }
    },
    fn_248 = function (first_arg) {
      var size = first_arg.oa.size;
      fn_243(first_arg, first_arg.Yc.ka[0], 3);
      first_arg.Yc.Ta[0] = 1;
      first_arg.Yc.Ta[1] = 1;
      first_arg.Yc.Ta[2] = 1;
      first_arg.Yc.Ta[3] = 1;
      size !== first_arg.oa.size && obj_19.Huc.play();
    },
    fn_249 = function (first_arg, second_arg, third_arg) {
      second_arg = (second_arg << 16) | third_arg;
      third_arg = first_arg.oa.get(second_arg);
      return !!(
        (third_arg && third_arg.lR && !third_arg.lR.Vcb) ||
        (third_arg === void 0 && fn_182(first_arg.settings, 1) && first_arg.Vw.wa.get(second_arg))
      );
    },
    fn_250 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
      if (!(
        third_arg < 0 ||
        fourth_arg < 0 ||
        third_arg >= first_arg.ka.oa.width ||
        fourth_arg >= first_arg.ka.oa.height
      )) {
        var local_44 = second_arg[fourth_arg][third_arg],
          local_45 = !fifth_arg || local_44.Gkb <= 1;
        (local_44.Swd && local_45) ||
          ((local_44.Swd = !0),
          fifth_arg && local_44.Gkb > 1 && --local_44.Gkb,
          local_44.Gkb === 1 &&
            (fn_188(first_arg.settings)
              ? ((fifth_arg = fn_124(first_arg.ka, new namespace.de(third_arg - 1, fourth_arg))),
                fn_250(first_arg, second_arg, fifth_arg.x, fifth_arg.y, !0),
                (fifth_arg = fn_124(first_arg.ka, new namespace.de(third_arg + 1, fourth_arg))),
                fn_250(first_arg, second_arg, fifth_arg.x, fifth_arg.y, !0),
                (fifth_arg = fn_124(first_arg.ka, new namespace.de(third_arg, fourth_arg - 1))),
                fn_250(first_arg, second_arg, fifth_arg.x, fifth_arg.y, !0),
                (third_arg = fn_124(first_arg.ka, new namespace.de(third_arg, fourth_arg + 1))),
                fn_250(first_arg, second_arg, third_arg.x, third_arg.y, !0))
              : (fn_250(first_arg, second_arg, third_arg - 1, fourth_arg, !0),
                fn_250(first_arg, second_arg, third_arg + 1, fourth_arg, !0),
                fn_250(first_arg, second_arg, third_arg, fourth_arg - 1, !0),
                fn_250(first_arg, second_arg, third_arg, fourth_arg + 1, !0))));
      }
    },
    fn_251 = function (first_arg, second_arg, third_arg) {
      if (fn_122(first_arg.ka, third_arg) && !first_arg.oa.get(fn_44(third_arg))) {
        var local_44 = second_arg[third_arg.y][third_arg.x];
        local_44.cod ||
          ((local_44.cod = !0),
          local_44.Gkb >= 1 &&
            ((local_44.Mbd = !0),
            first_arg.wa++,
            fn_188(first_arg.settings)
              ? (fn_251(
                  first_arg,
                  second_arg,
                  fn_124(first_arg.ka, new namespace.de(third_arg.x - 1, third_arg.y))
                ),
                fn_251(
                  first_arg,
                  second_arg,
                  fn_124(first_arg.ka, new namespace.de(third_arg.x + 1, third_arg.y))
                ),
                fn_251(
                  first_arg,
                  second_arg,
                  fn_124(first_arg.ka, new namespace.de(third_arg.x, third_arg.y - 1))
                ),
                fn_251(
                  first_arg,
                  second_arg,
                  fn_124(first_arg.ka, new namespace.de(third_arg.x, third_arg.y + 1))
                ))
              : (fn_251(first_arg, second_arg, new namespace.de(third_arg.x - 1, third_arg.y)),
                fn_251(first_arg, second_arg, new namespace.de(third_arg.x + 1, third_arg.y)),
                fn_251(first_arg, second_arg, new namespace.de(third_arg.x, third_arg.y - 1)),
                fn_251(first_arg, second_arg, new namespace.de(third_arg.x, third_arg.y + 1)))));
      }
    },
    fn_252 = function (first_arg, second_arg) {
      return fn_249(first_arg, second_arg.x, second_arg.y);
    },
    cls_60 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
        this.settings = first_arg;
        this.ka = second_arg;
        this.Yc = third_arg;
        this.Ba = fourth_arg;
        this.Vw = fifth_arg;
        this.oa = new Map();
        this.Aa = new Set();
        this.wa = 0;
      }
      reset() {
        this.oa.clear();
        this.Aa.clear();
        this.wa = 0;
      }
    };
  var fn_253 = function (first_arg, second_arg, third_arg, fourth_arg = { R6: 0.2, WR: !1 }) {
      first_arg = fourth_arg.WR || first_arg.Qa ? second_arg : 1;
      third_arg && (first_arg = 1 - first_arg);
      return 1 - (1 - fourth_arg.R6) * first_arg;
    },
    fn_254 = function (first_arg, second_arg) {
      return first_arg.localStorage?.has(second_arg)
        ? first_arg.localStorage.get(second_arg)
        : fn_264(first_arg, second_arg)
          ? first_arg.hc.get(second_arg)
          : 0;
    },
    fn_255 = function (first_arg) {
      var num_30 = first_arg.ka.oa.width * first_arg.ka.ka,
        num_31 = first_arg.ka.oa.height * first_arg.ka.ka;
      first_arg.kb = [
        new namespace.de(-num_30, -num_31),
        new namespace.de(0, -num_31),
        new namespace.de(num_30, -num_31),
        new namespace.de(-num_30, 0),
        new namespace.de(num_30, 0),
        new namespace.de(-num_30, num_31),
        new namespace.de(0, num_31),
        new namespace.de(num_30, num_31)
      ];
    },
    fn_256 = function (first_arg) {
      var num_30 = !1;
      first_arg.settings.ka === 6 &&
        first_arg.oa.ka.sort(
          (first_arg_2, second_arg) =>
            (first_arg_2.sequenceNumber ?? 0) - (second_arg.sequenceNumber ?? 0)
        );
      var local_44 = (first_arg.Yc.wb = !1);
      for (let index = 0; index < first_arg.oa.ka.length; index++) {
        var local_45 = first_arg.oa.ka[index];
        if (!local_45.dh) continue;
        if (fn_54(first_arg.settings.ka, local_45.sequenceNumber, first_arg.oa.wa)) continue;
        var num_31 = !1,
          num_32 = !1;
        if (fn_181(first_arg.settings)) {
          var local_46 =
            first_arg.Yc.ka[0] !== void 0 &&
            first_arg.Yc.ka[1] !== void 0 &&
            local_45.pos !== void 0;
          num_31 =
            local_46 &&
            (fn_133(first_arg.ka, first_arg.Yc.ka[0], local_45.pos) < 1 ||
              fn_133(first_arg.ka, first_arg.Yc.ka[1], local_45.pos) < 1);
          fn_182(first_arg.settings, 7) &&
            local_46 &&
            ((local_46 = fn_226(first_arg.Yc, 1)),
            (num_32 =
              fn_133(first_arg.ka, fn_226(first_arg.Yc, 0), local_45.pos) < 1 ||
              fn_133(first_arg.ka, local_46, local_45.pos) < 1));
        } else
          ((num_31 = first_arg.Yc.ka[0].equals(local_45.pos)),
            fn_182(first_arg.settings, 7) &&
              (num_32 = fn_226(first_arg.Yc, 0).equals(local_45.pos)));
        if (num_31 || num_32) {
          local_46 = local_45.Mea;
          local_44 ||
            ((local_44 = !0),
            local_46
              ? obj_17.Mad.play()
              : fn_182(first_arg.settings, 2)
                ? obj_11.g2d.play()
                : fn_182(first_arg.settings, 5)
                  ? obj_11.O2d.play()
                  : fn_182(first_arg.settings, 11)
                    ? obj_11.KZd.play()
                    : obj_11.aZd.play());
          fn_182(first_arg.settings, 10) &&
            fn_89(first_arg.oa, index, local_46, first_arg.Ac.bind(first_arg)) &&
            index--;
          if (!local_46) {
            fn_182(first_arg.settings, 3) ? (first_arg.Yc.Ra += 2) : (first_arg.Yc.Ra += 1);
            fn_182(first_arg.settings, 17) && fn_220(first_arg.Vw);
            fn_182(first_arg.settings, 14) &&
              ((num_31 ? first_arg.Yc.Aa : first_arg.Yc.Ba).light +=
                first_arg.settings.Aa === 0 ? 1 : first_arg.settings.Aa === 1 ? 0.5 : 1.25);
            first_arg.Ai++;
            var local_47 = fn_196(first_arg.settings);
            fn_259(first_arg, local_47, first_arg.Ai);
            fn_268(first_arg.header, first_arg.Ai, first_arg.ticks, first_arg.hb);
          }
          local_47 = !local_46 || fn_182(first_arg.settings, 2);
          first_arg.settings.ka === 6 &&
            ((num_30 = !0), local_47 && (first_arg.oa.wa++, (first_arg.oa.Ba = !0)));
          local_47 =
            fn_182(first_arg.settings, 3) &&
            first_arg.Yc.La.length > 0 &&
            first_arg.Yc.La[first_arg.Yc.La.length - 1].Qma <= 4 &&
            first_arg.Yc.La[first_arg.Yc.La.length - 1].Vjb === num_32;
          first_arg.Yc.La.push({
            Qma: 0,
            Onb: first_arg.Yc.ka.length + 1,
            Vjb: fn_182(first_arg.settings, 7) ? num_32 : !1,
            hqc: local_47,
            kcb: new namespace.de(0, 0)
          });
          fn_182(first_arg.settings, 7) &&
            fn_184(first_arg.settings) &&
            first_arg.Yc.La.push({
              Qma: 0,
              Onb: first_arg.Yc.ka.length + 1,
              Vjb: !num_32,
              hqc: local_47,
              kcb: new namespace.de(0, 0)
            });
          (num_32 = fn_182(first_arg.settings, 5) && !first_arg.wj) && (num_30 = !0);
          if (fn_182(first_arg.settings, 2))
            if (first_arg.oa.ka.length % 2 !== 0) {
              first_arg.oa.ka.splice(0, first_arg.oa.ka.length);
              break;
            } else
              ((num_30 = !0),
                fn_225(first_arg.La, index, num_32, num_31, local_46),
                num_32 && fn_182(first_arg.settings, 20) && fn_163(first_arg.wa));
          if ((num_31 = num_32 && !fn_182(first_arg.settings, 2)))
            (fn_235(first_arg.Yc, fn_217(first_arg.Vw), first_arg.Vw.RMa.bind(first_arg.Vw)),
              fn_182(first_arg.settings, 20) && fn_163(first_arg.wa));
          num_32 =
            !first_arg.wj &&
            !local_46 &&
            (first_arg.Ai % 2 === 1 || fn_182(first_arg.settings, 11));
          fn_182(first_arg.settings, 1) &&
            num_32 &&
            (local_47 = fn_216(first_arg.Vw, first_arg.Mb(null, 5))) &&
            (fn_218(first_arg.Vw, local_47),
            fn_182(first_arg.settings, 7) && fn_218(first_arg.Vw, fn_121(first_arg.ka, local_47)),
            fn_182(first_arg.settings, 9) && first_arg.Ka());
          fn_182(first_arg.settings, 19) &&
            num_32 &&
            ((local_47 = !fn_182(first_arg.settings, 11)),
            first_arg.Ka(local_47),
            fn_200(first_arg.Ca, first_arg.Yc.ka),
            local_47 || first_arg.Ka());
          fn_182(first_arg.settings, 20) &&
            num_32 &&
            (fn_158(first_arg.wa), fn_182(first_arg.settings, 9) && first_arg.Ka());
          fn_182(first_arg.settings, 13) &&
            (num_31 && fn_248(first_arg.Ra),
            fn_245(first_arg.Ra),
            fn_247(first_arg.Ra, first_arg.Wc.bind(first_arg)),
            fn_182(first_arg.settings, 9) && first_arg.Ka());
          fn_182(first_arg.settings, 15) &&
            (fn_84(first_arg.oa, local_45),
            fn_182(first_arg.settings, 2) &&
              fn_84(first_arg.oa, first_arg.oa.ka[index % 2 === 0 ? index + 1 : index - 1]));
          num_31 = !1;
          fn_182(first_arg.settings, 2)
            ? (num_31 = !0)
            : fn_182(first_arg.settings, 10) && local_45.Mea
              ? (num_31 = !1)
              : ((num_31 =
                  first_arg.settings.ka !== 6 &&
                  (fn_181(first_arg.settings) || fn_182(first_arg.settings, 7))),
                (num_31 = first_arg.Gc(index, !num_31, null)));
          num_31
            ? ((num_31 = first_arg.settings.Oa === 24 && first_arg.settings.ka !== 5),
              fn_182(first_arg.settings, 2)
                ? ((local_45 = index % 2 === 0 ? index + 1 : index - 1),
                  num_31 &&
                    ((first_arg.oa.ka[index].type = fn_76(first_arg.oa)),
                    (first_arg.oa.ka[local_45].type = first_arg.oa.ka[index].type)),
                  fn_90(first_arg.oa, index, local_45, first_arg.Gc.bind(first_arg)))
                : num_31 && (local_45.type = fn_76(first_arg.oa)))
            : (first_arg.oa.ka.splice(index, 1), index--);
          !fn_182(first_arg.settings, 10) ||
            fn_182(first_arg.settings, 8) ||
            fn_182(first_arg.settings, 9) ||
            first_arg.settings.ka === 6 ||
            local_46 ||
            fn_88(first_arg.oa);
          fn_182(first_arg.settings, 12) && fn_207(first_arg.Ga);
          !fn_182(first_arg.settings, 11) ||
            (local_46 && !fn_182(first_arg.settings, 2)) ||
            (first_arg.Qb(), (num_30 = !0));
          first_arg.settings.ka === 4
            ? fn_257(first_arg) === 0 && fn_260(first_arg)
            : first_arg.settings.ka === 6 && fn_257(first_arg) === 0 && fn_261(first_arg);
          first_arg.settings.ka !== 5 ||
            first_arg.Pb ||
            first_arg.oa.ka.length !== 0 ||
            first_arg.mA.cK.size !== 0 ||
            first_arg.gN.keys.length !== 0 ||
            (fn_262(first_arg, 24), (first_arg.Pb = !0));
          if (num_30) break;
        }
      }
    },
    fn_257 = function (first_arg) {
      var oa = first_arg.oa;
      var index = 0;
      if (fn_182(oa.settings, 10) || fn_182(oa.settings, 11))
        for (var local_44 of oa.ka) !local_44.Mea && local_44.dh && index++;
      else index = oa.ka.length;
      oa = index;
      index = first_arg.gN;
      local_44 = 0;
      if (fn_182(index.settings, 8)) for (local_45 of index.keys) local_45.dh && local_44++;
      var local_45 = local_44;
      first_arg = first_arg.mA;
      index = 0;
      if (fn_182(first_arg.settings, 9)) for (let local_46 of first_arg.cK) local_46.dh && index++;
      return oa + local_45 + index;
    },
    fn_258 = function (first_arg) {
      if (first_arg.settings.La && !first_arg.settings.autoplay && first_arg.FD) {
        var { ELd: local_44, zHd: local_45 } = fn_67(
            first_arg.settings.kb,
            first_arg.settings.isMobile
          ),
          local_46 = local_45 + "_recorded",
          list_50 = [];
        first_arg.localStorage?.has(local_46) ||
          first_arg.Bc.has(local_46) ||
          (list_50.push({ instanceId: "SNAKE_ARCADE", fieldName: local_45, increment: 1 }),
          first_arg.localStorage?.set(local_46, !0),
          first_arg.Bc.add(local_46));
        first_arg.Ai > first_arg.oc &&
          list_50.push({
            instanceId: "SNAKE_ARCADE",
            fieldName: local_44,
            increment: first_arg.Ai - first_arg.oc
          });
        list_50.length !== 0 &&
          first_arg.FD.KIa(list_50, { flush: !0 })
            .then(() => {})
            .catch(() => {});
      }
    },
    fn_259 = function (first_arg, second_arg, third_arg) {
      first_arg.settings.autoplay ||
        (first_arg.settings.La &&
          third_arg > fn_254(first_arg, second_arg) &&
          first_arg.localStorage?.set(second_arg, third_arg),
        (!fn_264(first_arg, second_arg) || third_arg > fn_254(first_arg, second_arg)) &&
          first_arg.hc.set(second_arg, third_arg));
    },
    fn_260 = function (first_arg) {
      (fn_191(first_arg.settings) && fn_263(first_arg) <= 0) ||
        (fn_262(first_arg, Math.ceil(Math.random() * 6)),
        fn_257(first_arg) > 0 && obj_11.GYd.play());
    },
    fn_261 = function (first_arg) {
      if (!(fn_191(first_arg.settings) && fn_263(first_arg) <= 0)) {
        var local_44 = fn_182(first_arg.settings, 11) ? 10 : 5;
        fn_191(first_arg.settings) && (local_44 = Math.min(local_44, fn_263(first_arg)));
        first_arg.oa.wa = 1;
        first_arg.Ka();
        var list_50 = [],
          list_51 = [],
          local_45 = first_arg.Yc.ka[0],
          local_46 = fn_182(first_arg.settings, 7) ? fn_226(first_arg.Yc, 0) : null,
          local_47 = fn_182(first_arg.settings, 7),
          fn_457 = (first_arg_2) => {
            if (!local_47) return first_arg_2;
            var list_52 = [];
            for (let local_50 of first_arg_2)
              (list_52.push(local_50), list_52.push(fn_121(first_arg.ka, local_50)));
            return list_52;
          };
        for (var index = 0; index < local_44; index++) {
          var local_48 = fn_457([...list_50, ...list_51]),
            local_49 = fn_182(first_arg.settings, 8) ? 6 : fn_182(first_arg.settings, 9) ? 7 : 2,
            mb = first_arg.Mb(local_48, local_49);
          local_49 = new namespace.de(0, 0);
          for (var index_2 = 0; index_2 < first_arg.ka.oa.width; index_2++)
            for (var index_3 = 0; index_3 < first_arg.ka.oa.height; index_3++)
              ((local_49.x = index_2),
                (local_49.y = index_3),
                fn_125(first_arg.ka, local_45, local_49) <= 3
                  ? mb.add((index_2 << 16) | index_3)
                  : local_46 &&
                    fn_125(first_arg.ka, local_46, local_49) <= 3 &&
                    mb.add((index_2 << 16) | index_3));
          local_49 = (index_2 =
            fn_182(first_arg.settings, 8) ||
            (fn_186(first_arg.settings) && !fn_182(first_arg.settings, 9)))
            ? [...list_50, ...list_51]
            : list_50;
          local_49 = fn_457(local_49);
          let local_50 = fn_130(first_arg.ka, local_45, local_49);
          index_3 = list_50.length > 0 ? list_50[list_50.length - 1] : null;
          index_2 = index_2
            ? [...list_50.slice(0, -1), ...list_51.slice(0, -1)]
            : list_50.slice(0, -1);
          index_3 = index_3 !== null ? fn_130(first_arg.ka, index_3, fn_457(index_2)) : null;
          index_2 = null;
          let list_52 = [];
          for (let index_4 = 0; index_4 < first_arg.ka.oa.width; index_4++)
            for (let index_5 = 0; index_5 < first_arg.ka.oa.height; index_5++) {
              let num_30 = (index_4 << 16) | index_5;
              mb.has(num_30) ||
                !local_50.has(num_30) ||
                (index_3 && !index_3.has(num_30)) ||
                list_52.push(new namespace.de(index_4, index_5));
            }
          namespace.eba(list_52);
          for (let local_51 of list_52) {
            mb = fn_457([local_51]);
            let list_53 = [...local_49, ...mb];
            if (fn_131(first_arg.ka, local_51, list_53)) {
              if (fn_182(first_arg.settings, 9)) {
                if (!fn_149(first_arg.mA, local_51, local_49)) continue;
                if (
                  fn_182(first_arg.settings, 7) &&
                  !fn_149(first_arg.mA, fn_121(first_arg.ka, local_51), local_49)
                )
                  continue;
              }
              if (fn_186(first_arg.settings)) {
                let local_52 = fn_130(first_arg.ka, local_51, local_49);
                mb = fn_182(first_arg.settings, 8);
                index_3 = fn_182(first_arg.settings, 9);
                let num_30 = !index_3;
                mb = mb ? 5 : index_3 ? 8 : 2;
                if (
                  (mb = first_arg.Kb([...local_48, local_51], mb, (first_arg_2) => {
                    var local_53 = fn_44(first_arg_2);
                    if (!local_50.has(local_53) || !local_52.has(local_53)) return !1;
                    local_53 = num_30 ? fn_457([first_arg_2]) : [];
                    local_53 = [...list_53, ...local_53];
                    return (
                      fn_131(first_arg.ka, local_51, local_53) &&
                      (!num_30 || fn_131(first_arg.ka, first_arg_2, local_53))
                    );
                  }))
                ) {
                  index_2 = { pos: local_51, secondary: mb };
                  break;
                }
              } else {
                index_2 = { pos: local_51, secondary: null };
                break;
              }
            }
          }
          if (!index_2) break;
          list_50.push(index_2.pos);
          index_2.secondary && list_51.push(index_2.secondary);
        }
        local_44 = list_50.length;
        for (local_45 = 0; local_45 < local_44; local_45++)
          ((local_46 = local_44 - local_45),
            (index = list_50[local_45]),
            (local_48 = !0),
            fn_182(first_arg.settings, 11) && (local_48 = local_46 % 2 === 1),
            fn_182(first_arg.settings, 8)
              ? (fn_204(first_arg.gN, local_45, index, list_51[local_45], local_48, local_46),
                fn_182(first_arg.settings, 9) &&
                  fn_141(first_arg.mA, index.clone(), first_arg.gN.keys.length))
              : fn_182(first_arg.settings, 9)
                ? ((local_49 = list_51[local_45]),
                  fn_150(first_arg.mA, {
                    pos: index.clone(),
                    prev: null,
                    Qm: !0,
                    dh: local_48,
                    sequenceNumber: local_46
                  }),
                  fn_141(first_arg.mA, local_49, first_arg.gN.keys.length))
                : (fn_87(first_arg.oa, index, void 0, local_48, local_46, !0),
                  fn_186(first_arg.settings) &&
                    fn_87(first_arg.oa, list_51[local_45], void 0, local_48, local_46, !0)));
        fn_182(first_arg.settings, 2) && fn_75(first_arg.oa);
        fn_182(first_arg.settings, 10) && fn_93(first_arg.oa);
      }
    },
    fn_262 = function (first_arg, list_50) {
      var num_30 = !0;
      for (let index = 0; index < list_50; index++) {
        if (fn_182(first_arg.settings, 8)) fn_205(first_arg.gN, index, num_30);
        else if (fn_182(first_arg.settings, 9))
          fn_151(first_arg.mA, first_arg.gN.keys.length, num_30, !0);
        else {
          let kb = first_arg.Kb(null, 2);
          kb && fn_87(first_arg.oa, kb, void 0, num_30);
        }
        fn_182(first_arg.settings, 11) && (num_30 = !num_30);
        first_arg.Ka();
        if (fn_191(first_arg.settings) && fn_263(first_arg) <= 0) break;
      }
      list_50 = first_arg.oa.ka;
      if (fn_182(first_arg.settings, 2) && list_50.length > 0)
        for (
          list_50[0].type = fn_76(first_arg.oa), list_50[1].type = list_50[0].type, first_arg = 2;
          first_arg < list_50.length;
          first_arg += 2
        )
          ((list_50[first_arg].type = (list_50[first_arg - 2].type + 1) % 24),
            (list_50[first_arg + 1].type = list_50[first_arg].type));
    },
    fn_263 = function (first_arg) {
      var local_44 = fn_182(first_arg.settings, 7) ? 2 : 1,
        num_30 = first_arg.Yc.ka.length * local_44,
        oa = first_arg.oa,
        index = 0;
      if (fn_182(oa.settings, 10)) for (let local_45 of oa.ka) local_45.Mea || index++;
      else index = oa.ka.length;
      oa =
        (index - (first_arg.settings.ka === 4 || first_arg.settings.ka === 6 ? 0 : 1)) * local_44;
      local_44 =
        fn_181(first_arg.settings) || fn_182(first_arg.settings, 7)
          ? Math.max(0, first_arg.Yc.Ra - 1) * local_44
          : 0;
      return first_arg.ka.oa.width * first_arg.ka.oa.height - (num_30 + oa + local_44);
    },
    fn_264 = function (first_arg, second_arg) {
      return first_arg.localStorage?.has(second_arg) ? !0 : first_arg.hc.has(second_arg);
    },
    fn_265 = function (first_arg) {
      return first_arg.localStorage?.has("virtual_joystick_enabled")
        ? first_arg.localStorage.get("virtual_joystick_enabled")
        : !1;
    },
    cls_61 = class {
      constructor(first_arg, second_arg, third_arg, fourth_arg) {
        this.settings = first_arg;
        this.menu = second_arg;
        this.header = third_arg;
        this.FD = fourth_arg;
        this.Ai = this.hb = this.ticks = this.Oa = 0;
        this.hc = new Map();
        this.Bc = new Set();
        this.oc = 0;
        this.wj = !1;
        this.yb = -1;
        this.xc = this.Ya = !1;
        this.rb = null;
        this.Nb = 0;
        this.Pb = !1;
        this.kb = [];
        this.Qa = !1;
        this.ka = new cls_33(
          this.settings,
          this.Kb.bind(this),
          this.Mb.bind(this),
          this.Ka.bind(this)
        );
        this.Ba = new cls_27(this.settings, this.ka, this.Aa.bind(this));
        this.Ca = new cls_50(this.settings, this.ka, this.Aa.bind(this));
        this.wa = new cls_38(this.settings, this.ka);
        this.Ta = new cls_55(this.settings, this.ka);
        this.Yc = new cls_58(this.settings, this.ka, this.Ba, this.Ca, this.wa);
        this.oa = new cls_24(this.settings, this.ka, this.Yc, this.Ba, this.Ta);
        this.Vw = new cls_54(this.settings, this.ka, this.Yc, this.Ba, this.Aa.bind(this));
        this.La = new cls_57(this.settings, this.ka, this.Yc, this.oa, this.Vw);
        this.mA = new cls_36(
          this.settings,
          this.ka,
          this.Yc,
          this.oa,
          this.Ba,
          this.Ca,
          this.Ta,
          this.wa
        );
        this.gN = new cls_51(
          this.settings,
          this.ka,
          this.Yc,
          this.oa,
          this.Ta,
          this.Vw,
          this.mA,
          this.Ba
        );
        this.Ra = new cls_60(this.settings, this.ka, this.Yc, this.Ta, this.Vw);
        this.Ga = new cls_53(
          this.settings,
          this.ka,
          this.Yc,
          this.oa,
          this.Ta,
          this.mA,
          this.Ba,
          this.Vw,
          this.Ra
        );
        this.localStorage = namespace.Hf("l") ? namespace.Ng("l", obj_5) : null;
      }
      reset() {
        this.rb = null;
        this.settings.autoplay || (this.oc = fn_254(this, fn_196(this.settings)));
        this.Ta.reset();
        this.ka.reset();
        this.Yc.reset();
        this.Vw.reset();
        this.La.reset();
        this.Ga.reset();
        this.Ra.reset();
        this.Ba.reset();
        this.Ca.reset();
        this.wa.reset();
        this.oa.reset();
        this.Qa = !1;
        var list_50 = fn_182(this.settings, 11) && !fn_182(this.settings, 2);
        (fn_182(this.settings, 8) || fn_182(this.settings, 9) || list_50) &&
          this.oa.shuffle(list_50);
        this.settings.ka === 6 && fn_79(this.oa);
        this.gN.reset();
        this.mA.reset();
        if (fn_182(this.settings, 8) && fn_182(this.settings, 9))
          for (var local_44 of this.gN.keys)
            fn_141(this.mA, local_44.pos.clone(), this.gN.keys.length);
        fn_182(this.settings, 10) && fn_93(this.oa);
        if (fn_182(this.settings, 17))
          for (
            this.Ka(), list_50 = this.Vw, local_44 = 1;
            local_44 < list_50.Yc.ka.length - 1;
            local_44++
          ) {
            var local_45 = list_50.Yc.ka[local_44];
            if (fn_182(list_50.settings, 3) && (local_45.x + local_45.y) % 2 === 0) continue;
            local_45 = [
              new namespace.de(local_45.x, local_45.y - 1),
              new namespace.de(local_45.x, local_45.y + 1)
            ];
            for (var local_46 of local_45)
              fn_122(list_50.ka, local_46) &&
                list_50.RMa(local_46) === void 0 &&
                list_50.ka.wa[local_46.y][local_46.x] === 0 &&
                fn_222(
                  list_50,
                  !1,
                  local_46,
                  "RIGHT",
                  "RIGHT",
                  fn_182(list_50.settings, 3)
                    ? Math.floor(list_50.Yc.ka.length / 2)
                    : list_50.Yc.ka.length - 1 - local_44,
                  !0
                );
            list_50.Ba++;
          }
        this.wj = !1;
        this.yb = -1;
        this.xc = this.Ya = !1;
        this.ticks = this.Nb = this.Ai = 0;
        local_46 = this.settings;
        a: switch (local_46.Kb) {
          case 1:
            list_50 = 0.66;
            break a;
          case 2:
            list_50 = 1.33;
            break a;
          default:
            list_50 = 1;
        }
        this.hb = (local_46.isMobile ? 175 : 135) * list_50;
        this.Pb = !1;
        fn_182(this.settings, 4) &&
          (fn_241(this.Yc, this.oa.ka, this.gN.keys, this.mA.cK, this.oa.wa), fn_255(this));
        local_46 = this.Yc;
        list_50 = this.oa.ka;
        local_44 = this.oa.wa;
        fn_182(local_46.settings, 7) &&
          list_50.length > 0 &&
          !fn_54(local_46.settings.ka, list_50[0].sequenceNumber, local_44) &&
          (local_46.ka[0].x === list_50[0].pos.x - 1 ||
            (fn_181(local_46.settings) && local_46.settings.Aa === 0)) &&
          ((local_46.Aa.gba = !0), fn_184(local_46.settings) && (local_46.Ba.gba = !0));
      }
      update(first_arg) {
        var ta = this.Ta,
          num_30 =
            (first_arg - ta.wa) *
            0.0175 *
            (ta.settings.Kb === 0 ? 1 : ta.settings.Kb === 1 ? 1.33 : 0.66);
        for (var index = 0; index < ta.particles.length; index++) {
          let local_44 = ta.particles[index];
          local_44.type !== 1 &&
            ((local_44.Ce.y += 4 * num_30),
            (local_44.pos.x += local_44.Ce.x * num_30),
            (local_44.pos.y += local_44.Ce.y * num_30),
            (local_44.angle += local_44.m0 * num_30));
          var num_31 = 0.025;
          local_44.type === 1
            ? (num_31 = 0.5)
            : local_44.type === 4
              ? (num_31 = 0.065)
              : fn_182(ta.settings, 4) && (num_31 = 0.05);
          local_44.size = Math.max(0, local_44.size - num_30 * num_31);
          fn_182(ta.settings, 4) &&
            ((num_31 = ta.ka.oa.height * ta.ka.ka),
            local_44.pos.y > num_31 && (local_44.pos.y -= num_31),
            (num_31 = ta.ka.oa.width * ta.ka.ka),
            local_44.pos.x < 0
              ? (local_44.pos.x += num_31)
              : local_44.pos.x > num_31 && (local_44.pos.x -= num_31));
          local_44.size <= 0 && (ta.particles.splice(index, 1), index--);
        }
        num_30 *= 0.55;
        for (let local_44 of ta.oa)
          (local_44.Ce.y < 0
            ? (local_44.Ce.y += 4 * num_30)
            : ((local_44.Ce.x += 1.2 * num_30 * (local_44.pos.x < local_44.midpoint ? 1 : -1)),
              (local_44.Ce.y = Math.abs(local_44.Ce.x) * 0.5)),
            (local_44.pos.x += local_44.Ce.x * num_30),
            (local_44.pos.y += local_44.Ce.y * num_30),
            (local_44.size = Math.max(0, local_44.size - num_30 * 0.1)),
            fn_182(ta.settings, 4) &&
              ((index = ta.ka.oa.height * ta.ka.ka),
              local_44.pos.y < 0
                ? (local_44.pos.y += index)
                : local_44.pos.y > index && (local_44.pos.y -= index),
              (index = ta.ka.oa.width * ta.ka.ka),
              local_44.pos.x < 0
                ? ((local_44.pos.x += index), (local_44.midpoint += index))
                : local_44.pos.x > index &&
                  ((local_44.pos.x -= index), (local_44.midpoint -= index))),
            local_44.size <= 0 && ta.oa.delete(local_44));
        ta.wa = first_arg;
        ta = !1;
        if (this.Yc.direction !== "NONE" || fn_231(this.Yc))
          for (; first_arg - this.Oa >= this.hb;)
            ((this.Oa += this.hb), this.ticks++, this.tick(), (ta = !0));
        else ((this.Oa = first_arg), (ta = !0));
        return ta;
      }
      tick() {
        var m_a = this.mA,
          wj = this.wj;
        for (let local_45 of m_a.cK)
          (wj && local_45.prev !== null && (local_45.pos = local_45.prev), (local_45.prev = null));
        var yc = this.Yc,
          wj_2 = this.wj;
        yc.Ca > 0 &&
          (yc.Ca--,
          (yc.hb = !1),
          yc.Ca > 0 && ((yc.Aa.zDa = 0), (yc.Aa.vSa = 0), (yc.Ba.zDa = 0), (yc.Ba.vSa = 0)),
          yc.Ca !== 0 || wj_2 || obj_17.KXd.play());
        var ga = this.Ga;
        for (let local_45 of ga.oa) local_45.mM += 1;
        for (let local_45 of ga.Aa)
          (--local_45.ticks, local_45.ticks <= 0 && ga.Aa.delete(local_45));
        for (let local_45 of ga.wa)
          (--local_45.ticks, local_45.ticks <= 0 && ga.wa.delete(local_45));
        this.Qa = !1;
        if (this.wj || this.Ya) {
          var yc_2 = this.Yc,
            bind = this.Qb.bind(this);
          if (yc_2.Ga === 3) yc_2.Ga = 2;
          else if (yc_2.Ga === 2) {
            yc_2.Ga = 1;
            yc_2.ka.shift();
            fn_187(yc_2.settings) && yc_2.Qa.shift();
            yc_2.Ya !== null &&
              (yc_2.ka.push(yc_2.Ya), fn_187(yc_2.settings) && yc_2.Qa.push(yc_2.Mb));
            fn_182(yc_2.settings, 11) &&
              (yc_2.wa.shift(),
              yc_2.ka.length > yc_2.wa.length && yc_2.wa.push(yc_2.wa[yc_2.wa.length - 1]),
              yc_2.wa[0] || bind());
            var oa = yc_2.oa;
            oa.Ba = (oa.Ba + 1) % 2;
            yc_2.Ya = yc_2.xc;
            yc_2.Mb = yc_2.Xc;
            let num_31 = yc_2.ka[0].x - yc_2.ka[1].x,
              num_32 = yc_2.ka[0].y - yc_2.ka[1].y,
              local_45 = fn_187(yc_2.settings) && yc_2.Qa[0] !== void 0;
            fn_188(yc_2.settings) &&
              !local_45 &&
              (num_31 > 1 ? (num_31 = -1) : num_31 < -1 && (num_31 = 1),
              num_32 > 1 ? (num_32 = -1) : num_32 < -1 && (num_32 = 1));
            num_31 > 0
              ? (yc_2.direction = "RIGHT")
              : num_31 < 0
                ? (yc_2.direction = "LEFT")
                : num_32 > 0
                  ? (yc_2.direction = "DOWN")
                  : num_32 < 0 && (yc_2.direction = "UP");
            Math.abs(num_31) + Math.abs(num_32) > 1 &&
              (local_45
                ? (yc_2.direction = yc_2.Qa[0])
                : fn_182(yc_2.settings, 2) && yc_2.hc !== "NONE" && (yc_2.direction = yc_2.hc));
            yc_2.Ka = yc_2.direction;
          } else yc_2.Ga === 1 && (yc_2.Ga = 0);
          yc_2.Vb > 0 ? yc_2.Vb-- : (yc_2.Vb = 8);
          yc_2.oc > 0 && --yc_2.oc;
          if (this.Yc.Ga > 0) {
            var ra = this.Ra;
            let size = ra.oa.size,
              ka_4 = ra.Yc.ka;
            for (let index = 0; index < ka_4.length; index++)
              (fn_243(ra, ka_4[index], 0), (ra.Yc.Ta[index] = 1));
            size !== ra.oa.size && obj_19.Huc.play();
          }
        } else
          a: {
            (fn_182(this.settings, 9) ||
              fn_182(this.settings, 10) ||
              fn_182(this.settings, 19) ||
              this.settings.bN()) &&
              this.Ka();
            this.oa.update();
            this.gN.update();
            this.La.update();
            this.wb();
            if (fn_182(this.settings, 18)) {
              var oa_2 = this.oa;
              if (fn_182(oa_2.settings, 6)) for (let local_45 of oa_2.ka) fn_91(oa_2, local_45.Ce);
              else {
                for (let local_45 of oa_2.ka) {
                  let local_46;
                  if (fn_182(oa_2.settings, 7)) {
                    let local_48 = oa_2.Yc.ka[0],
                      local_49 = fn_226(oa_2.Yc, 0);
                    local_46 =
                      fn_125(oa_2.oa, local_45.pos, local_48) <=
                      fn_125(oa_2.oa, local_45.pos, local_49)
                        ? local_48.clone()
                        : local_49;
                  } else local_46 = oa_2.Yc.ka[0].clone();
                  if (fn_182(oa_2.settings, 4)) {
                    let num_31 = local_45.pos.x - local_46.x,
                      num_32 = local_45.pos.y - local_46.y;
                    Math.abs(num_31) >= oa_2.oa.oa.width / 2 &&
                      (local_46.x += oa_2.oa.oa.width * Math.sign(num_31));
                    Math.abs(num_32) >= oa_2.oa.oa.height / 2 &&
                      (local_46.y += oa_2.oa.oa.height * Math.sign(num_32));
                  }
                  local_45.pos.x === local_46.x
                    ? fn_42(local_45, !0, !1)
                    : (local_45.Ce.x = local_45.pos.x < local_46.x ? 0.5 : -0.5);
                  local_45.pos.y === local_46.y
                    ? fn_42(local_45, !1, !0)
                    : (local_45.Ce.y = local_45.pos.y < local_46.y ? 0.5 : -0.5);
                  let local_47 =
                    oa_2.settings.ka !== 0 &&
                    ((fn_182(oa_2.settings, 10) && local_45.Mea) ||
                      fn_182(oa_2.settings, 15) ||
                      fn_182(oa_2.settings, 2) ||
                      fn_182(oa_2.settings, 11) ||
                      fn_182(oa_2.settings, 5) ||
                      fn_54(oa_2.settings.ka, local_45.sequenceNumber, oa_2.wa));
                  local_45.qEc = fn_125(
                    oa_2.oa,
                    new namespace.de(
                      local_45.pos.x + local_45.Ce.x,
                      local_45.pos.y + local_45.Ce.y
                    ),
                    local_46
                  );
                  local_47 && local_45.qEc <= 4 && fn_42(local_45, !0, !0);
                  fn_182(oa_2.settings, 11) && !local_45.dh && fn_42(local_45, !0, !0);
                  local_45.uJa =
                    Math.atan2(local_45.pos.y - local_46.y, local_45.pos.x - local_46.x) +
                    Math.PI / 2;
                }
                if (fn_182(oa_2.settings, 2))
                  for (let num_31 = 0; num_31 < oa_2.ka.length; num_31 += 2) {
                    let local_45 =
                        (oa_2.ka[num_31].qEc ?? 0) < (oa_2.ka[num_31 + 1].qEc ?? 0)
                          ? num_31
                          : num_31 + 1,
                      local_46 = oa_2.ka[local_45],
                      local_47 = oa_2.ka[local_45 === num_31 ? num_31 + 1 : num_31];
                    (local_46.Ce.x === 0 && local_46.Ce.y === 0) ||
                    (local_47.Ce.x === 0 && local_47.Ce.y === 0)
                      ? (fn_42(local_46, !0, !0), fn_42(local_47, !0, !0))
                      : (local_46.Ce.x === 0
                          ? fn_42(local_47, !0, !1)
                          : (local_47.Ce.x = local_46.Ce.x),
                        local_46.Ce.y === 0
                          ? fn_42(local_47, !1, !0)
                          : (local_47.Ce.y = local_46.Ce.y));
                  }
              }
            }
            if (fn_182(this.settings, 17)) {
              var vw = this.Vw;
              let local_45 = fn_217(vw);
              for (let local_46 of local_45)
                (local_46.ix.p$ === 0 && fn_215(vw, local_46.pos), (local_46.ix.WR = !1));
            }
            if (fn_182(this.settings, 14)) {
              var oa_3 = this.oa;
              for (let local_45 of oa_3.ka) local_45.light = Math.max(0, local_45.light - 0.1);
              var yc_3 = this.Yc;
              yc_3.Aa.light = Math.max(2, yc_3.Aa.light - fn_233(yc_3.Aa.light));
              fn_182(yc_3.settings, 7) &&
                (yc_3.Ba.light = Math.max(2, yc_3.Ba.light - fn_233(yc_3.Ba.light)));
            }
            if (fn_231(this.Yc)) {
              var yc_4 = this.Yc;
              yc_4.Oa ? (yc_4.Oa = !1) : ((yc_4.direction = yc_4.Ia), (yc_4.Ia = "NONE"));
              if (fn_181(this.settings)) {
                var oa_4 = this.oa,
                  wa_2 = this.Vw.wa,
                  keys = this.gN.keys,
                  c_k = this.mA.cK;
                for (let local_45 of oa_4.ka) local_45.Qm || fn_77(oa_4, local_45, wa_2, keys, c_k);
              }
              if (fn_182(this.settings, 12)) {
                var ga_2 = this.Ga,
                  wj_3 = this.wj,
                  bind_2 = this.wb.bind(this),
                  bind_3 = this.Vb.bind(this);
                for (let local_45 of ga_2.oa) fn_208(ga_2, local_45, wj_3, bind_2, bind_3);
              }
            } else {
              {
                var yc_5 = this.Yc,
                  bind_4 = this.Hl.bind(this);
                let clone = yc_5.ka[0].clone(),
                  num_31 = !1;
                if (fn_182(yc_5.settings, 19)) {
                  let local_45 = fn_197(yc_5.Fd, clone, yc_5.direction);
                  if (
                    local_45 &&
                    ((clone.x = local_45.x),
                    (clone.y = local_45.y),
                    (num_31 = !0),
                    fn_182(yc_5.settings, 4))
                  ) {
                    var oa_5 = yc_5.oa;
                    oa_5.Ba = (oa_5.Ba + 1) % 2;
                  }
                }
                if (!num_31) {
                  let local_45 = fn_188(yc_5.settings);
                  switch (yc_5.direction) {
                    case "LEFT":
                      --clone.x;
                      local_45 && clone.x < 0 && (clone.x = yc_5.oa.oa.width - 1);
                      break;
                    case "RIGHT":
                      clone.x += 1;
                      local_45 && clone.x >= yc_5.oa.oa.width && (clone.x = 0);
                      break;
                    case "UP":
                      --clone.y;
                      local_45 && clone.y < 0 && (clone.y = yc_5.oa.oa.height - 1);
                      break;
                    case "DOWN":
                      ((clone.y += 1), local_45 && clone.y >= yc_5.oa.oa.height && (clone.y = 0));
                  }
                }
                let num_32 = !1;
                if (fn_182(yc_5.settings, 20)) {
                  let clone_2 = clone.clone();
                  fn_159(yc_5.Ed, clone, yc_5.direction);
                  clone_2.equals(clone) || (num_32 = !0);
                }
                if (!fn_182(yc_5.settings, 21) && bind_4(clone)) var num_30 = !0;
                else {
                  num_31 && obj_11.a_d.play();
                  num_32 && obj_11.JXd.play();
                  fn_187(yc_5.settings) &&
                    yc_5.Qa.unshift(num_31 || num_32 ? yc_5.direction : void 0);
                  yc_5.ka.unshift(clone);
                  fn_182(yc_5.settings, 11) && yc_5.wa.unshift(!0);
                  if (fn_182(yc_5.settings, 13)) {
                    yc_5.Ta.unshift(1);
                    for (let index = 0; index < yc_5.Ta.length; index++)
                      yc_5.Ta[index] < 0 && (yc_5.Ta[index] = 0);
                  }
                  num_30 = !1;
                }
              }
              if (!num_30) {
                var ka = this.ka;
                ka.Ba = (ka.Ba + 1) % 2;
                var yc_6 = this.Yc;
                yc_6.Ra === 0
                  ? ((yc_6.xc = yc_6.Ya),
                    (yc_6.Ya = yc_6.ka.pop()),
                    fn_182(yc_6.settings, 11) && yc_6.wa.pop(),
                    fn_182(yc_6.settings, 13) && yc_6.Ta.pop(),
                    (yc_6.Xc = yc_6.Mb),
                    fn_187(yc_6.settings) && (yc_6.Mb = yc_6.Qa.pop()))
                  : (yc_6.Ra = Math.max(0, yc_6.Ra - 1));
                this.Yc.direction !== this.Yc.Ka ? this.Nb++ : (this.Nb = 0);
                var ka_2 = this.Yc.Ka;
                this.Yc.Nb = !1;
                this.Yc.Ka = this.Yc.direction;
                var yc_7 = this.Yc;
                for (let index = 0; index < yc_7.La.length; index++)
                  ((yc_7.La[index].Qma += 2),
                    yc_7.La[index].Qma >= yc_7.La[index].Onb &&
                      (yc_7.La.splice(index, 1), index--));
                fn_182(this.settings, 8) && fn_203(this.gN);
                if (fn_182(this.settings, 9)) {
                  if (fn_182(this.settings, 16)) {
                    var m_a_2 = this.mA;
                    for (let local_45 of m_a_2.cK) {
                      if (local_45.prev !== null) continue;
                      let local_46 = fn_98(m_a_2.wa, local_45.pos);
                      local_46 !== "NONE" &&
                        local_45.dh === fn_97(m_a_2.wa, local_45.pos) &&
                        (fn_96(m_a_2.wa, local_45.pos, !0),
                        local_45.dh || m_a_2.ka.Ga(!1),
                        fn_142(m_a_2, local_45, local_46, void 0, !0),
                        local_45.dh || m_a_2.ka.Ga());
                    }
                  }
                  fn_143(this.mA, !1);
                  if (fn_182(this.settings, 7)) {
                    fn_143(this.mA, !0);
                    var yc_8 = this.Yc;
                    yc_8.Aa.rBa = yc_8.Aa.rBa || yc_8.Ba.rBa;
                    yc_8.Ba.rBa = yc_8.Aa.rBa;
                  }
                }
                fn_256(this);
                if (fn_182(this.settings, 12)) {
                  var ga_3 = this.Ga,
                    wj_4 = this.wj,
                    bind_5 = this.wb.bind(this),
                    bind_6 = this.Vb.bind(this);
                  for (let local_45 of ga_3.oa) fn_208(ga_3, local_45, wj_4, bind_5, bind_6);
                  if (this.wj) break a;
                }
                if (fn_182(this.settings, 16)) {
                  var yc_9 = this.Yc;
                  let local_45 = yc_9.ka[0];
                  if (!fn_182(yc_9.settings, 11) || fn_97(yc_9.Pb, local_45)) {
                    var local_44 = fn_98(yc_9.Pb, local_45);
                    local_44 !== "NONE" &&
                      (local_44 !== fn_45(yc_9.direction) && fn_237(yc_9, local_44),
                      fn_96(yc_9.Pb, local_45, !0));
                  }
                }
                if (fn_182(this.settings, 17)) {
                  let local_45 = fn_221(this.Vw);
                  this.Ka(local_45);
                  fn_223(this.Vw, ka_2);
                  local_45 || this.Ka();
                }
                var ra_2 = this.Ra;
                for (let local_45 of ra_2.oa.values()) local_45.lR.w0b += 1;
                var yc_10 = this.Yc;
                yc_10.Kb !== "NONE" &&
                  (fn_182(yc_10.settings, 16) && fn_99(yc_10.Pb, yc_10.Kb, yc_10.ka[0]),
                  fn_237(yc_10, yc_10.Kb),
                  fn_238(yc_10));
                b: {
                  var yc_11 = this.Yc;
                  if (yc_11.Ca > 0 && !yc_11.Nb) {
                    let set_value_2 = new Set(),
                      local_45 = yc_11.direction !== "NONE" ? yc_11.direction : yc_11.Ia;
                    if (local_45 === "LEFT" || local_45 === "RIGHT")
                      (set_value_2.add("UP"), set_value_2.add("DOWN"));
                    else if (local_45 === "UP" || local_45 === "DOWN")
                      (set_value_2.add("LEFT"), set_value_2.add("RIGHT"));
                    else break b;
                    if (!fn_182(yc_11.settings, 21))
                      if (fn_182(yc_11.settings, 4)) {
                        let de_6 = new namespace.de(yc_11.ka[0].x - 1, yc_11.ka[0].y),
                          de_7 = new namespace.de(yc_11.ka[0].x + 1, yc_11.ka[0].y),
                          de_8 = new namespace.de(yc_11.ka[0].x, yc_11.ka[0].y - 1),
                          de_9 = new namespace.de(yc_11.ka[0].x, yc_11.ka[0].y + 1);
                        fn_124(yc_11.oa, de_6);
                        fn_124(yc_11.oa, de_7);
                        fn_124(yc_11.oa, de_8);
                        fn_124(yc_11.oa, de_9);
                        fn_128(yc_11.oa, de_6) && set_value_2.delete("LEFT");
                        fn_128(yc_11.oa, de_7) && set_value_2.delete("RIGHT");
                        fn_128(yc_11.oa, de_8) && set_value_2.delete("UP");
                        fn_128(yc_11.oa, de_9) && set_value_2.delete("DOWN");
                      } else
                        ((yc_11.ka[0].x === 0 ||
                          fn_128(yc_11.oa, new namespace.de(yc_11.ka[0].x - 1, yc_11.ka[0].y))) &&
                          set_value_2.delete("LEFT"),
                          (yc_11.ka[0].x === yc_11.oa.oa.width - 1 ||
                            fn_128(yc_11.oa, new namespace.de(yc_11.ka[0].x + 1, yc_11.ka[0].y))) &&
                            set_value_2.delete("RIGHT"),
                          (yc_11.ka[0].y === 0 ||
                            fn_128(yc_11.oa, new namespace.de(yc_11.ka[0].x, yc_11.ka[0].y - 1))) &&
                            set_value_2.delete("UP"),
                          (yc_11.ka[0].y === yc_11.oa.oa.height - 1 ||
                            fn_128(yc_11.oa, new namespace.de(yc_11.ka[0].x, yc_11.ka[0].y + 1))) &&
                            set_value_2.delete("DOWN"));
                    let from = Array.from(set_value_2);
                    if (from.length > 0) {
                      let local_46 = from[Math.floor(Math.random() * from.length)];
                      fn_237(yc_11, local_46);
                      switch (yc_11.direction) {
                        case "DOWN":
                          obj_17.QYd.play();
                          break;
                        case "UP":
                          obj_17.RYd.play();
                          break;
                        case "LEFT":
                          obj_17.SYd.play();
                          break;
                        case "RIGHT":
                          obj_17.TYd.play();
                      }
                      fn_182(yc_11.settings, 16) && fn_99(yc_11.Pb, local_46, yc_11.ka[0]);
                    }
                  }
                }
                var la = this.La;
                for (let local_45 of la.ka) {
                  let num_31 = !1;
                  for (let v_oa = local_45.vOa; v_oa < la.Yc.ka.length; v_oa++) {
                    let equals = local_45.pos.equals(la.Yc.ka[v_oa]),
                      local_46 = fn_182(la.settings, 7) && local_45.pos.equals(fn_226(la.Yc, v_oa));
                    if (equals || local_46) {
                      num_31 = !0;
                      local_45.vOa = v_oa;
                      fn_182(la.settings, 10) &&
                        la.Aa > 0 &&
                        v_oa === la.Yc.ka.length - 1 &&
                        equals &&
                        (la.Aa--,
                        (la.Yc.xc = la.Yc.Ya),
                        (la.Yc.Ya = la.Yc.ka.pop()),
                        fn_182(la.settings, 11) && la.Yc.wa.pop(),
                        fn_187(la.settings) && (la.Yc.Mb = la.Yc.Qa.pop()),
                        fn_182(la.settings, 13) && la.Yc.Ta.pop(),
                        (num_31 = !1));
                      break;
                    }
                  }
                  num_31 || (local_45.JOa = !0);
                }
                if (fn_257(this) === 0) {
                  obj_13.WIN.play();
                  this.Ya = this.wj = !0;
                  fn_266(this.header);
                  fn_270(this.menu, 1400, this.Ai);
                  fn_258(this);
                  fn_182(this.settings, 5) && this.Yc.Oa && (this.Yc.Oa = !1);
                  fn_182(this.settings, 11) && (this.Yc.wa[0] || this.Qb(), (this.Qa = !1));
                  var header = this.header,
                    ticks = this.ticks,
                    hb = this.hb;
                  namespace.Wm(header.Ba, "ALL");
                  namespace.Wm(header.Ca, fn_43(ticks * hb));
                  let local_45 = this.settings.Ka
                    ? "\u2014"
                    : String(fn_254(this, fn_196(this.settings)));
                  fn_267(this.header, this.Ai, local_45);
                  this.yb = this.ticks;
                } else if (fn_181(this.settings)) {
                  var oa_6 = this.oa,
                    wa_3 = this.Vw.wa,
                    keys_2 = this.gN.keys,
                    c_k_2 = this.mA.cK;
                  for (let local_45 of oa_6.ka)
                    local_45.Qm || fn_77(oa_6, local_45, wa_3, keys_2, c_k_2);
                }
                var yc_12 = this.Yc,
                  ka_3 = this.oa.ka,
                  keys_3 = this.gN.keys,
                  wa_4 = this.oa.wa;
                fn_239(yc_12, yc_12.Aa, ka_3, keys_3, !1, wa_4);
                fn_182(yc_12.settings, 7) && fn_239(yc_12, yc_12.Ba, ka_3, keys_3, !0, wa_4);
                fn_182(this.settings, 4) &&
                  fn_241(this.Yc, this.oa.ka, this.gN.keys, this.mA.cK, this.oa.wa);
              }
            }
          }
      }
      wb() {
        this.oa.refresh();
        this.Vw.refresh();
        this.La.refresh();
        this.gN.refresh();
        this.mA.refresh();
        this.Ba.refresh();
        this.Ca.refresh();
        this.wa.refresh();
      }
      turn(first_arg) {
        var yc = this.Yc,
          local_44 = yc.Ia !== "NONE" ? yc.Ia : yc.direction,
          local_45 = local_44 === first_arg && yc.Ia === "NONE";
        yc.Ca > 0
          ? (yc.direction === "NONE" && yc.Ka !== "NONE" && (yc.direction = yc.Ka),
            yc.Ca !== 1 || local_45 || yc.Kb !== "NONE" || (yc.Kb = first_arg))
          : (first_arg === "NONE" ||
              local_45 ||
              (yc.Nb
                ? (yc.Kb = first_arg)
                : (local_44 !== "NONE" && (yc.rb.zTb = !0),
                  (yc.Ka = local_44 === "NONE" ? first_arg : local_44),
                  (yc.direction = first_arg),
                  (yc.Nb = !0),
                  fn_238(yc),
                  fn_182(yc.settings, 16) && fn_99(yc.Pb, first_arg, yc.ka[0])),
              (yc.Ia = "NONE")),
            yc.wb && (yc.hc = yc.direction),
            (yc.wb = !1));
      }
      Hl(first_arg) {
        fn_122(this.ka, first_arg) || this.Ia();
        for (var index = 1; index < this.Yc.ka.length - 1; index++) {
          var num_30 = (this.Yc.ka[index].x + this.Yc.ka[index].y) % 2;
          num_30 =
            (fn_182(this.settings, 3) && num_30 === 0) ||
            (fn_182(this.settings, 11) && !this.Yc.wa[index]);
          this.Yc.ka[index].equals(first_arg) && !num_30 && this.Ia();
        }
        if (fn_182(this.settings, 7))
          for (index = 0; index < this.Yc.ka.length - 1; index++)
            ((num_30 = (this.Yc.ka[index].x + this.Yc.ka[index].y) % 2),
              (num_30 =
                (fn_182(this.settings, 3) && num_30 === 0 && index !== 0) ||
                (fn_182(this.settings, 11) && !this.Yc.wa[index])),
              fn_226(this.Yc, index).equals(first_arg) && !num_30 && this.Ia());
        if (this.settings.ka === 6 && !this.wj && !fn_182(this.settings, 21)) {
          for (var local_44 of this.oa.ka)
            local_44.dh &&
              ((fn_181(this.settings)
                ? fn_133(this.ka, first_arg, local_44.pos) < 1
                : local_44.pos.equals(first_arg)) &&
                fn_54(this.settings.ka, local_44.sequenceNumber, this.oa.wa) &&
                this.Ia(),
              fn_182(this.settings, 7) &&
                !this.wj &&
                ((index = fn_121(this.ka, first_arg)),
                (fn_182(this.settings, 6)
                  ? fn_133(this.ka, index, local_44.pos) < 1
                  : local_44.pos.equals(index)) &&
                  fn_54(this.settings.ka, local_44.sequenceNumber, this.oa.wa) &&
                  this.Ia()));
          if (fn_182(this.settings, 8))
            for (var local_45 of this.gN.keys)
              local_45.dh &&
                (local_45.pos.equals(first_arg) &&
                  fn_54(this.settings.ka, local_45.sequenceNumber, this.oa.wa) &&
                  this.Ia(),
                fn_182(this.settings, 7) &&
                  !this.wj &&
                  local_45.pos.equals(fn_121(this.ka, first_arg)) &&
                  fn_54(this.settings.ka, local_45.sequenceNumber, this.oa.wa) &&
                  this.Ia());
        }
        fn_182(this.settings, 9) &&
          !this.wj &&
          (fn_147(this.mA, first_arg, !1, this.Ia.bind(this)),
          fn_182(this.settings, 7) &&
            !this.wj &&
            fn_147(this.mA, first_arg, !0, this.Ia.bind(this)));
        (fn_182(this.settings, 1) ||
          fn_182(this.settings, 7) ||
          fn_182(this.settings, 8) ||
          fn_182(this.settings, 13) ||
          fn_182(this.settings, 17)) &&
          !this.wj &&
          ((local_44 = this.Vw.RMa(first_arg)),
          fn_213(local_44) && this.Ia(),
          fn_182(this.settings, 7) &&
            ((local_44 = this.Vw.RMa(fn_121(this.ka, first_arg))), fn_213(local_44) && this.Ia()));
        if (fn_182(this.settings, 15)) {
          local_44 = fn_45(this.Yc.direction);
          for (var local_46 of this.oa.ka)
            local_46.dh &&
              ((fn_181(this.settings)
                ? fn_133(this.ka, first_arg, local_46.pos) < 1
                : local_46.pos.equals(first_arg)) &&
                local_46.m7?.has(local_44) &&
                this.Ia(),
              fn_182(this.settings, 7) &&
                ((local_45 = fn_121(this.ka, first_arg)),
                (fn_182(this.settings, 6)
                  ? fn_133(this.ka, local_45, local_46.pos) < 1
                  : local_46.pos.equals(local_45)) &&
                  local_46.m7?.has(this.Yc.direction) &&
                  this.Ia()));
        }
        fn_182(this.settings, 16) &&
          ((local_46 = fn_97(this.Ba, first_arg)),
          fn_98(this.Ba, first_arg) === fn_45(this.Yc.direction) && local_46 && this.Ia());
        return this.wj;
      }
      Ia() {
        if (!this.wj) {
          obj_13.Juc.play();
          var yc = this.Yc;
          yc.Ra = 0;
          fn_236(yc);
          yc.Vb = 0;
          yc.Ga = 3;
          yc.oc = 6;
          yc.kb = yc.ka[0].clone();
          yc.direction === "RIGHT"
            ? ((yc.kb.x += 0.5), (yc.Qb = 0))
            : yc.direction === "LEFT"
              ? ((yc.kb.x -= 0.5), (yc.Qb = Math.PI))
              : yc.direction === "UP"
                ? ((yc.kb.y -= 0.5), (yc.Qb = -Math.PI / 2))
                : yc.direction === "DOWN"
                  ? ((yc.kb.y += 0.5), (yc.Qb = Math.PI / 2))
                  : (yc.Qb = 0);
          yc = this.La;
          if (fn_182(yc.settings, 2) && yc.wa.length > 0)
            for (let local_44 of yc.wa)
              (yc.ka.push(local_44), (local_44.mM = 0), (local_44.vOa = 0), (local_44.JOa = !1));
          this.Vb();
        }
      }
      Vb() {
        this.wj = !0;
        fn_266(this.header);
        this.yb = this.ticks;
        fn_182(this.settings, 11) && (this.Qa = !1);
        fn_182(this.settings, 5) && fn_242(this.Yc);
        fn_270(this.menu, 1400, this.Ai);
        fn_258(this);
      }
      Gc(first_arg, second_arg, third_arg) {
        var local_44 = fn_191(this.settings),
          local_45 = fn_263(this);
        return (local_44 && local_45 <= 0) ||
          this.settings.ka === 4 ||
          this.settings.ka === 6 ||
          (this.settings.ka === 5 && !this.Pb)
          ? !1
          : fn_182(this.settings, 8)
            ? (fn_205(this.gN, first_arg, !0), !1)
            : fn_182(this.settings, 9)
              ? (fn_151(this.mA, this.gN.keys.length, !0), !1)
              : (third_arg = this.Kb(third_arg, 2))
                ? (fn_85(this.oa, first_arg, third_arg),
                  second_arg &&
                    this.oa.ka.sort(
                      (first_arg_2, second_arg_2) => first_arg_2.pos.y - second_arg_2.pos.y
                    ),
                  !0)
                : !1;
      }
      Ac(first_arg, second_arg) {
        var local_44 = this.settings.bN() || first_arg.ota === 1;
        var local_45 = fn_182(this.settings, 15)
          ? 1.2
          : fn_181(this.settings)
            ? 1.65
            : local_44
              ? 1.5
              : 1.2;
        local_45 = this.ka.ka * local_45 * (first_arg.Qm ? second_arg : 1);
        first_arg.Qm ||
          (this.Yc.direction === "NONE" && !fn_231(this.Yc)) ||
          fn_181(this.settings) ||
          fn_182(this.settings, 15) ||
          ((second_arg = (first_arg.mM + (this.wj ? 0 : second_arg)) / (local_44 ? 16 : 6)),
          this.settings.Qa === 2 || first_arg.ota === 2
            ? (first_arg = 1 + Math.sin(second_arg * Math.PI * 2 + Math.PI * 1.5) / 2)
            : ((first_arg = fn_47(second_arg)), second_arg === 0 && (first_arg = 0)),
          local_44 && (first_arg = first_arg >= 0.75 ? 0.6 : 0),
          (local_45 *= 1 + first_arg * 0.25),
          (local_45 = Math.round(local_45)));
        return local_45;
      }
      Mb(first_arg, second_arg) {
        var list_50 = [],
          yc = this.Yc;
        for (var index = 0; index < yc.ka.length; index++) {
          var local_44 = yc.ka[index];
          (fn_182(yc.settings, 3) && index > 0 && (local_44.x + local_44.y) % 2 === 0) ||
            (list_50.push(local_44),
            fn_182(yc.settings, 7) && list_50.push(fn_121(yc.oa, local_44)));
        }
        yc = this.oa;
        index = second_arg === 2;
        local_44 = yc.settings.ka === 4 || yc.settings.ka === 3 || yc.settings.ka === 5;
        index = fn_182(yc.settings, 11) && !fn_182(yc.settings, 2) && !local_44 && index;
        for (var local_45 of yc.ka)
          if (!index || local_45.dh)
            (list_50.push(local_45.pos),
              fn_184(yc.settings) && list_50.push(fn_121(yc.oa, local_45.pos)));
        local_45 = this.Vw;
        for (var local_46 of local_45.wa.values()) list_50.push(local_46.pos);
        local_46 = this.La;
        for (var local_47 of local_46.ka) list_50.push(local_47.pos);
        local_47 = this.gN;
        for (var local_48 of local_47.keys)
          (list_50.push(local_48.pos),
            fn_182(local_47.settings, 7) && list_50.push(fn_121(local_47.ka, local_48.pos)));
        local_48 = this.mA;
        for (var local_49 of local_48.cK)
          (list_50.push(local_49.pos),
            fn_182(local_48.settings, 7) && list_50.push(fn_121(local_48.ka, local_49.pos)));
        for (var local_50 of local_48.targets) list_50.push(local_50);
        local_49 = this.Ga;
        for (var local_51 of local_49.oa) list_50.push(local_51.pos);
        local_51 = this.wa;
        for (local_49 = 0; local_49 < local_51.ka.oa.height; local_49++)
          for (local_50 = 0; local_50 < local_51.ka.oa.width; local_50++)
            local_51.oa[local_49][local_50] && list_50.push(new namespace.de(local_50, local_49));
        if (second_arg === 10 && fn_182(this.settings, 19)) {
          local_51 = this.Ca;
          for (var local_52 of local_51.qga)
            (list_50.push(new namespace.de(local_52.Lqa.x, local_52.Lqa.y)),
              list_50.push(new namespace.de(local_52.Lqa.x + 1, local_52.Lqa.y)),
              list_50.push(new namespace.de(local_52.Lqa.x, local_52.Lqa.y + 1)),
              list_50.push(new namespace.de(local_52.Lqa.x + 1, local_52.Lqa.y + 1)));
        }
        if (
          second_arg === 5 &&
          fn_182(this.settings, 1) &&
          fn_182(this.settings, 15) &&
          !fn_181(this.settings)
        ) {
          local_52 = this.oa;
          for (var local_53 of local_52.ka)
            for (let [local_56, local_57] of map.entries()) {
              local_51 = local_56;
              local_49 = local_57;
              if (local_53.m7?.has(local_51)) continue;
              local_51 = new namespace.de(local_53.pos.x + local_49.x, local_53.pos.y + local_49.y);
              fn_182(local_52.settings, 4) && (local_51 = fn_124(local_52.oa, local_51));
              list_50.push(local_51);
            }
        }
        if (first_arg)
          if (first_arg instanceof namespace.de) list_50.push(first_arg);
          else for (let local_56 of first_arg) list_50.push(local_56);
        local_53 =
          (fn_184(this.settings) && second_arg === 2) ||
          (fn_182(this.settings, 7) && second_arg !== 2);
        first_arg = new Set();
        for (var local_54 of list_50)
          (first_arg.add(fn_44(local_54)),
            local_53 && first_arg.add(fn_44(fn_121(this.ka, local_54))));
        if (fn_182(this.settings, 13) && (second_arg === 2 || second_arg === 6 || second_arg === 7))
          for (var local_55 of this.Ra.Aa) first_arg.add(local_55);
        if (fn_182(this.settings, 3)) {
          second_arg = new Set();
          for (list_50 = 0; list_50 < this.ka.oa.width; list_50++)
            for (local_54 = 0; local_54 < this.ka.oa.height; local_54++)
              first_arg.has((list_50 << 16) | local_54) ||
                ((local_55 = 0),
                fn_188(this.settings)
                  ? (first_arg.has(
                      fn_44(fn_124(this.ka, new namespace.de(list_50 - 1, local_54)))
                    ) && local_55++,
                    first_arg.has(
                      fn_44(fn_124(this.ka, new namespace.de(list_50 + 1, local_54)))
                    ) && local_55++,
                    first_arg.has(
                      fn_44(fn_124(this.ka, new namespace.de(list_50, local_54 - 1)))
                    ) && local_55++,
                    first_arg.has(
                      fn_44(fn_124(this.ka, new namespace.de(list_50, local_54 + 1)))
                    ) && local_55++)
                  : ((list_50 === 0 || first_arg.has(((list_50 - 1) << 16) | local_54)) &&
                      local_55++,
                    (list_50 === this.ka.oa.width - 1 ||
                      first_arg.has(((list_50 + 1) << 16) | local_54)) &&
                      local_55++,
                    (local_54 === 0 || first_arg.has((list_50 << 16) | (local_54 - 1))) &&
                      local_55++,
                    (local_54 === this.ka.oa.height - 1 ||
                      first_arg.has((list_50 << 16) | (local_54 + 1))) &&
                      local_55++),
                local_55 > 2 && second_arg.add((list_50 << 16) | local_54));
          for (let local_56 of second_arg) first_arg.add(local_56);
        }
        return first_arg;
      }
      Kb(first_arg, list_50, fn_457) {
        first_arg = this.Mb(first_arg, list_50);
        var local_44 = fn_182(this.settings, 2) && list_50 === 2,
          local_45 = fn_182(this.settings, 15) && list_50 === 2,
          local_46 =
            this.settings.ka === 6 &&
            (list_50 === 2 || list_50 === 6 || list_50 === 7 || list_50 === 5);
        if (
          local_44 ||
          local_45 ||
          list_50 === 7 ||
          list_50 === 4 ||
          list_50 === 9 ||
          list_50 === 10 ||
          local_46
        )
          for (list_50 = 0; list_50 < this.ka.oa.width; list_50++)
            for (local_44 = 0; local_44 < this.ka.oa.height; local_44++)
              fn_125(this.ka, this.Yc.ka[0], new namespace.de(list_50, local_44)) <= 3 &&
                (first_arg.add((list_50 << 16) | local_44),
                fn_182(this.settings, 7) &&
                  first_arg.add(fn_44(fn_121(this.ka, new namespace.de(list_50, local_44)))));
        if (fn_457 === void 0) {
          fn_457 = Math.floor(
            Math.random() * (this.ka.oa.width * this.ka.oa.height - first_arg.size)
          );
          var index = 0;
          for (list_50 = 0; list_50 < this.ka.oa.width; list_50++)
            for (local_44 = 0; local_44 < this.ka.oa.height; local_44++)
              if (!first_arg.has((list_50 << 16) | local_44) && index++ === fn_457)
                return new namespace.de(list_50, local_44);
        } else {
          list_50 = [];
          for (local_44 = 0; local_44 < this.ka.oa.width; local_44++)
            for (local_45 = 0; local_45 < this.ka.oa.height; local_45++)
              ((local_46 = (local_44 << 16) | local_45),
                first_arg.has(local_46) || list_50.push(local_46));
          namespace.eba(list_50);
          first_arg = new namespace.de(0, 0);
          for (index of list_50)
            if (
              (first_arg && ((first_arg.x = index >> 16), (first_arg.y = index & 65535)),
              fn_457(first_arg))
            )
              return first_arg.clone();
        }
        return null;
      }
      Ka(first_arg = !0) {
        if (!fn_126(this.ka)) {
          var ka = this.ka;
          for (let index = 0; index < ka.oa.height; index++)
            for (let index_2 = 0; index_2 < ka.oa.width; index_2++) ka.wa[index][index_2] = 0;
          fn_229(this.Yc, first_arg);
          fn_94(this.oa, first_arg);
          fn_206(this.gN, first_arg);
          fn_152(this.mA, first_arg);
          fn_219(this.Vw, first_arg);
          fn_212(this.Ga, first_arg);
          fn_160(this.wa, first_arg);
        }
      }
      Qb() {
        var yc = this.Yc;
        for (let index = 0; index < yc.wa.length; index++) yc.wa[index] = !yc.wa[index];
        yc = this.oa;
        for (var local_44 of yc.ka) local_44.dh = !local_44.dh;
        if (fn_182(yc.settings, 14))
          for (let local_51 of yc.ka) local_51.dh && (local_51.light = 1.5);
        if (fn_182(yc.settings, 16))
          for (let local_51 of yc.ka)
            local_51.dh &&
              local_51.pos.x % 1 === 0 &&
              local_51.pos.y % 1 === 0 &&
              fn_96(yc.Aa, local_51.pos, !1);
        local_44 = this.Vw;
        for (var local_45 of local_44.wa.values()) local_45.r9 || (local_45.dh = !local_45.dh);
        local_45 = this.La;
        for (var local_46 of local_45.ka) local_46.dh = !local_46.dh;
        local_46 = this.gN;
        for (var local_47 of local_46.keys) local_47.dh = !local_47.dh;
        local_47 = this.mA;
        for (var local_48 of local_47.cK) local_48.dh = !local_48.dh;
        local_48 = this.Ga;
        for (var local_49 of local_48.oa) local_49.dh = !local_49.dh;
        local_49 = this.Ba;
        for (local_48 = 0; local_48 < local_49.oa.oa.height; local_48++)
          for (local_47 = 0; local_47 < local_49.oa.oa.width; local_47++)
            local_49.ka[local_48][local_47].dh = !local_49.ka[local_48][local_47].dh;
        local_49 = this.Ca;
        for (var local_50 of local_49.qga) local_50.dh = !local_50.dh;
        local_50 = this.wa;
        for (local_49 = 0; local_49 < local_50.ka.oa.height; local_49++)
          for (local_48 = 0; local_48 < local_50.ka.oa.width; local_48++)
            if ((local_47 = local_50.oa[local_49]?.[local_48])) local_47.dh = !local_47.dh;
        for (let local_51 of local_50.Aa.values()) local_51.dh = !local_51.dh;
        for (let local_51 of local_50.wa.values()) local_51.dh = !local_51.dh;
        this.Qa = !0;
      }
      Aa(first_arg, second_arg, third_arg, fourth_arg, fifth_arg = !0) {
        fifth_arg &&
          this.Yc.Oa &&
          this.settings.wa !== 10 &&
          (first_arg = first_arg * third_arg + (1 - first_arg) * (1 - third_arg));
        var num_30 = this.Yc.Ca > 0;
        if (this.settings.wa === 10) {
          var list_50 = fourth_arg ? list_16 : split_2;
          fourth_arg = namespace.GJ(list_50[Math.floor(second_arg) % list_50.length]);
          var gj = namespace.GJ(
            list_50[
              Math.floor(second_arg >= this.Yc.ka.length - 1 ? second_arg : second_arg + 1) %
                list_50.length
            ]
          );
          if (this.Yc.Oa && fifth_arg) {
            let num_31 = this.Yc.ka.length - 1 - second_arg;
            fifth_arg = namespace.GJ(list_50[Math.floor(num_31) % list_50.length]);
            list_50 = namespace.GJ(
              list_50[Math.floor(num_31 <= 0 ? num_31 : num_31 - 1) % list_50.length]
            );
            fourth_arg = namespace.IJ(fourth_arg, fifth_arg, third_arg);
            gj = namespace.IJ(gj, list_50, third_arg);
          }
          num_30 &&
            (this.Yc.Ca === 1
              ? ((fourth_arg = namespace.IJ(fourth_arg, list_6, third_arg)),
                (gj = namespace.IJ(gj, list_7, third_arg)))
              : this.Yc.hb
                ? ((fourth_arg = namespace.IJ(fourth_arg, list_6, 1 - third_arg)),
                  (gj = namespace.IJ(gj, list_7, 1 - third_arg)))
                : ((fourth_arg[0] = list_6[0]),
                  (fourth_arg[1] = list_6[1]),
                  (fourth_arg[2] = list_6[2]),
                  (gj[0] = list_7[0]),
                  (gj[1] = list_7[1]),
                  (gj[2] = list_7[2])));
          third_arg = this.settings.Vt() ? 0.075 : 0.15;
          return namespace.FJ(
            namespace.oHe(
              namespace.IJ(gj, fourth_arg, num_30 ? 0 : second_arg % 1),
              first_arg * third_arg
            )
          );
        }
        gj = list_8[list_9[this.settings.wa]];
        second_arg = namespace.GJ(fourth_arg ? gj[0] : this.Yc.Hl);
        fourth_arg = namespace.GJ(fourth_arg ? gj[1] : this.Yc.od);
        num_30 &&
          (this.Yc.Ca === 1
            ? ((second_arg = namespace.IJ(second_arg, list_6, third_arg)),
              (fourth_arg = namespace.IJ(fourth_arg, list_7, third_arg)))
            : this.Yc.hb
              ? ((second_arg = namespace.IJ(second_arg, list_6, 1 - third_arg)),
                (fourth_arg = namespace.IJ(fourth_arg, list_7, 1 - third_arg)))
              : ((second_arg[0] = list_6[0]),
                (second_arg[1] = list_6[1]),
                (second_arg[2] = list_6[2]),
                (fourth_arg[0] = list_7[0]),
                (fourth_arg[1] = list_7[1]),
                (fourth_arg[2] = list_7[2])));
        num_30 = this.settings.Vt() && this.settings.wa < 10 ? 0.5 : 1;
        return namespace.FJ(
          namespace.IJ(
            fourth_arg,
            second_arg,
            first_arg * Math.min(1, this.Yc.ka.length / 12) * num_30
          )
        );
      }
      Wc(first_arg, second_arg, third_arg, fourth_arg) {
        first_arg = namespace.HJ(this.Aa(first_arg, second_arg, third_arg, fourth_arg, !1));
        second_arg = namespace.HJ(fn_185(this.settings, this.settings.oa, 3));
        first_arg[2] = second_arg[2];
        first_arg[1] /= 2;
        return fn_38(first_arg);
      }
    };
  var fn_266 = function (first_arg) {
      namespace.Pd(first_arg.ka, "LaTyvd");
    },
    fn_267 = function (first_arg, second_arg, third_arg) {
      namespace.cn(first_arg.Ga, "visibility", first_arg.oa ? "visible" : "hidden");
      namespace.cn(first_arg.La, "visibility", first_arg.oa ? "visible" : "hidden");
      namespace.Wm(first_arg.Qa, second_arg);
      namespace.Wm(first_arg.La, third_arg);
    },
    fn_268 = function (first_arg, second_arg, third_arg, fourth_arg) {
      if (second_arg === 25 || second_arg === 50 || second_arg === 100)
        (namespace.Wm(first_arg.Ba, second_arg),
          namespace.Wm(first_arg.Ca, fn_43(third_arg * fourth_arg)));
    },
    fn_269 = function (first_arg) {
      namespace.Xd(first_arg.Aa, "LaTyvd");
      first_arg.wa = !namespace.Nd(first_arg.Aa, "LaTyvd");
      namespace.Tv([new namespace.bo(first_arg.Aa, first_arg.wa ? "show" : "hide")]);
    },
    cls_62 = class {
      constructor(
        first_arg,
        second_arg,
        third_arg,
        fourth_arg,
        fifth_arg,
        sixth_arg,
        seventh_arg,
        eighth_arg,
        arg,
        arg_2,
        arg_3,
        arg_4,
        arg_5,
        arg_6,
        arg_7
      ) {
        this.settings = first_arg;
        this.tC = second_arg;
        this.Qa = third_arg;
        this.La = fourth_arg;
        this.Oa = fifth_arg;
        this.Ga = sixth_arg;
        this.Ya = seventh_arg;
        this.Ta = eighth_arg;
        this.Ka = arg;
        this.Ia = arg_2;
        this.ka = arg_3;
        this.Aa = arg_4;
        this.Ra = arg_5;
        this.Ba = arg_6;
        this.Ca = arg_7;
        this.wa = this.oa = !1;
      }
      toggleFullscreen(first_arg) {
        this.Ka &&
          this.Ia &&
          ((first_arg ? namespace.Pd : namespace.Rd)(this.Ka, "LaTyvd"),
          (first_arg ? namespace.Rd : namespace.Pd)(this.Ia, "LaTyvd"));
      }
    };
  var fn_270 = function (first_arg, second_arg, third_arg) {
      fn_276(first_arg);
      fn_281(first_arg);
      first_arg.Ka.push(
        (0, namespace.ho)(() => {
          fn_282(first_arg, !0, third_arg);
        }, second_arg)
      );
    },
    fn_271 = function (first_arg, second_arg) {
      for (let local_44 of first_arg.ka.rows) namespace.Rd(local_44, "qfPtwe");
      first_arg.ka.Sea = second_arg;
      namespace.Pd(first_arg.ka.Sea, "qfPtwe");
    },
    fn_272 = function (first_arg, second_arg, third_arg) {
      second_arg &&
        (first_arg.settings.oc = `https://www.google.com/logos/fnbx/${fn_50(first_arg.settings.Mb, first_arg.settings.Ba, first_arg.settings.Vb)}`);
      third_arg &&
        ((second_arg = fn_52(first_arg.settings.yb)),
        (first_arg.settings.hc = `https://www.google.com/logos/fnbx/${first_arg.settings.Ba === 1 ? `snake_arcade/pixel/v22/px_trophy_${second_arg}.png` : `snake_arcade/v22/trophy_${second_arg}.png`}`));
    },
    fn_273 = function (first_arg) {
      var local_44 = first_arg.oa?.n6b;
      local_44 && namespace.Wm(local_44, "\u2014");
      (first_arg = first_arg.oa?.Cqc) && namespace.Pd(first_arg, "LaTyvd");
    },
    fn_274 = function (first_arg) {
      if (first_arg.settings.Xc && first_arg.FD && first_arg.oa && first_arg.oa.n6b) {
        var list_50 = [],
          list_51 = [];
        for (let index = 0; index < 6; index++) {
          let vf_f = namespace.vfF(index);
          if (index > 0 && first_arg.Ra.has(vf_f)) continue;
          list_51.push(vf_f);
          let { ELd: local_44, zHd: local_45 } = fn_67(vf_f, first_arg.settings.isMobile);
          list_50.push({ instanceId: "SNAKE_ARCADE", fieldName: local_44 });
          list_50.push({ instanceId: "SNAKE_ARCADE", fieldName: local_45 });
        }
        first_arg.FD.nfb(list_50)
          .then((first_arg_2) => {
            for (let index = 0; index < list_51.length; index++) {
              var local_44 = first_arg_2[index * 2],
                local_45 = first_arg_2[index * 2 + 1],
                local_46 = list_51[index];
              local_44 &&
                local_45 &&
                local_44.Nz === "SUCCESS" &&
                local_45.Nz === "SUCCESS" &&
                local_45.count &&
                local_45.count > 0 &&
                ((local_44 = Math.round((local_44.count ?? 0) / local_45.count)),
                first_arg.Ra.set(local_46, local_44),
                local_46 === namespace.vfF() &&
                  (namespace.Wm(first_arg.oa.n6b, String(local_44)),
                  (local_46 = first_arg.Ia(fn_196(first_arg.settings))),
                  (local_45 = first_arg.oa?.Cqc) &&
                    namespace.Td(
                      local_45,
                      "LaTyvd",
                      first_arg.settings.Ka || local_46 < local_44
                    )));
            }
            fn_293(first_arg);
          })
          .catch(() => {});
      }
    },
    fn_275 = function (first_arg) {
      return [first_arg.Aa, first_arg.La];
    },
    fn_276 = function (first_arg) {
      var num_30 = first_arg.settings.Ba === 1;
      first_arg.Ca.clearRect(0, 0, first_arg.Ga.width, first_arg.Ga.height);
      var num_31 = first_arg.Ga.width / first_arg.Aa.getWidth(),
        de_6 = new namespace.de(0, first_arg.Ga.height - first_arg.Aa.getHeight() * num_31),
        num_32 = num_31 * 0.75 * (num_30 ? 1.5 : 1);
      first_arg.settings.Ra === 1
        ? ((num_30 = num_30 ? de_5 : de_3),
          (num_30 = new namespace.de(
            first_arg.Ga.width - (first_arg.kb.getWidth(first_arg.settings.Ba) + num_30.x) * num_32,
            de_6.y - (first_arg.kb.getHeight(first_arg.settings.Ba) + num_30.y) * num_32
          )),
          first_arg.kb.render(0, num_30, new namespace.de(0, 0), 0, num_32, first_arg.settings.Ba))
        : first_arg.settings.Ra === 2 &&
          ((num_30 = num_30 ? de_4 : de_2),
          (num_30 = new namespace.de(
            first_arg.Ga.width - (first_arg.Mb.getWidth(first_arg.settings.Ba) + num_30.x) * num_32,
            de_6.y - (first_arg.Mb.getHeight(first_arg.settings.Ba) + num_30.y) * num_32
          )),
          first_arg.Mb.render(0, num_30, new namespace.de(0, 0), 0, num_32, first_arg.settings.Ba));
      if (first_arg.settings.Ta === 1)
        first_arg.Aa.render(0, de_6, new namespace.de(0, 0), 0, num_31 * 1.5);
      else if (first_arg.settings.Ta === 2) {
        num_32 = num_31 * 0.75;
        num_30 = 10 / 11.5;
        let num_33 = 2 / 3;
        first_arg.Aa.render(0, de_6, new namespace.de(0, 0), 0, num_32);
        first_arg.Aa.render(
          0,
          de_6,
          new namespace.de(first_arg.Aa.getWidth() * num_30, 0),
          0,
          num_32
        );
        first_arg.Aa.render(
          0,
          de_6,
          new namespace.de(0, first_arg.Aa.getHeight() * num_33),
          0,
          num_32
        );
        first_arg.Aa.render(
          0,
          de_6,
          new namespace.de(first_arg.Aa.getWidth() * num_30, first_arg.Aa.getHeight() * num_33),
          0,
          num_32
        );
      } else first_arg.Aa.render(0, de_6, new namespace.de(0, 0), 0, num_31);
      de_6 = new namespace.de(
        (first_arg.settings.Ra !== 0 ? -10 : 0) * num_31,
        de_6.y - first_arg.La.getHeight(first_arg.settings.Ba) * num_31
      );
      first_arg.settings.Ia === 10
        ? first_arg.Xc.render(0, de_6, new namespace.de(0, 0), 0, num_31, first_arg.settings.Ba)
        : first_arg.La.render(0, de_6, new namespace.de(0, 0), 0, num_31, first_arg.settings.Ba);
      first_arg.settings.Ia > 10 &&
        first_arg.Pb.render(0, de_6, new namespace.de(0, 0), 0, num_31, first_arg.settings.Ba);
    },
    fn_277 = function (first_arg) {
      var cs = namespace.Cs(first_arg.Ga);
      if (cs.width > 0 && cs.height > 0) {
        let yf_f = namespace.yfF();
        first_arg.Ca.canvas.width = cs.width * yf_f;
        first_arg.Ca.canvas.height = cs.height * yf_f;
      }
      fn_276(first_arg);
    },
    fn_278 = function (first_arg, second_arg = !1) {
      var cs = namespace.Cs(first_arg.Oa),
        local_44 = first_arg.ka.C9b >= 0 ? de : new namespace.de(0, 0);
      for (let local_46 of first_arg.ka.rows) {
        var local_45 = namespace.iLa(local_46).x,
          get_value = first_arg.ka.Brc.get(local_46.id);
        if (first_arg.ka.M6a.x >= local_44.x && get_value !== void 0) {
          if (second_arg) {
            namespace.hn(local_46, get_value, 0);
            continue;
          }
          local_45 = get_value * 0.25 + local_45 * 0.75;
          get_value = namespace.sn(local_46).width;
          let num_30 = cs.width / 2;
          namespace.hn(local_46, Math.max(num_30 - get_value, Math.min(num_30, local_45)), 0);
        }
      }
    },
    fn_279 = function (first_arg) {
      first_arg.settings.oc !== "" && fn_53(first_arg.Vb, first_arg.settings.oc);
      first_arg.settings.hc !== "" && fn_53(first_arg.oo, first_arg.settings.hc);
      namespace.Pd(first_arg.yb, "LaTyvd");
      namespace.Pd(first_arg.rb, "LaTyvd");
      namespace.Pd(first_arg.wb, "LaTyvd");
      var num_30 = first_arg.settings.Ca === 4,
        num_31 = first_arg.settings.Ca === 5,
        num_32 = first_arg.settings.Ca === 6,
        num_33 = first_arg.settings.Ba === 1;
      num_30
        ? (fn_53(
            first_arg.yb,
            num_33
              ? "https://www.google.com/logos/fnbx/snake_arcade/pixel/v19/px_count_04.png"
              : "https://www.google.com/logos/fnbx/snake_arcade/v19/count_04.png"
          ),
          namespace.Rd(first_arg.yb, "LaTyvd"))
        : num_31
          ? (fn_53(
              first_arg.rb,
              num_33
                ? "https://www.google.com/logos/fnbx/snake_arcade/pixel/v19/px_count_05.png"
                : "https://www.google.com/logos/fnbx/snake_arcade/v19/count_05.png"
            ),
            namespace.Rd(first_arg.rb, "LaTyvd"))
          : num_32 &&
            (fn_53(
              first_arg.wb,
              num_33
                ? "https://www.google.com/logos/fnbx/snake_arcade/pixel/v19/px_count_06.png"
                : "https://www.google.com/logos/fnbx/snake_arcade/v19/count_06.png"
            ),
            namespace.Rd(first_arg.wb, "LaTyvd"));
      if (first_arg.settings.Ca === 0 || num_30 || num_31)
        (namespace.Pd(first_arg.Ta, "LaTyvd"), namespace.cn(first_arg.oc, "transform", ""));
      else
        for (
          namespace.Rd(first_arg.Ta, "LaTyvd"),
            num_30 = first_arg.settings.Ca === 2 || first_arg.settings.Ca === 6,
            namespace.cn(
              first_arg.oc,
              "transform",
              first_arg.settings.Ca === 3
                ? "scale(0.7) translateY(15px)"
                : num_30
                  ? "scale(0.8)"
                  : first_arg.settings.Ca === 1
                    ? "scale(0.9)"
                    : ""
            ),
            num_30 =
              first_arg.settings.Ca === 3
                ? ["data-three", "data-five", "data-ten"]
                : num_30
                  ? ["data-three", "data-five"]
                  : first_arg.settings.Ca === 1
                    ? ["data-three"]
                    : [],
            num_31 = 0;
          num_31 < first_arg.Ta.children.length;
          num_31++
        ) {
          let local_44 = first_arg.Ta.children[num_31];
          local_44 instanceof HTMLImageElement && fn_53(local_44, first_arg.Vb.src);
          num_30.some((first_arg_2) => local_44.hasAttribute(first_arg_2))
            ? namespace.Rd(local_44, "LaTyvd")
            : namespace.Pd(local_44, "LaTyvd");
        }
      first_arg.settings.yb === 22
        ? namespace.Rd(first_arg.hb, "LaTyvd")
        : namespace.Pd(first_arg.hb, "LaTyvd");
      first_arg.settings.Ia === 0 || first_arg.settings.Ia === 10
        ? fn_68(first_arg.La)
        : fn_69(first_arg.La, "#5282F2", list_8[first_arg.settings.Ia][0]);
      if (first_arg.settings.Ia > 10) {
        num_30 = list_8[first_arg.settings.Ia][1];
        if (first_arg.settings.Ia === 16 || first_arg.settings.Ia === 17) num_30 = "#AFAFAF";
        fn_69(first_arg.Pb, "#5282F2", num_30);
      }
      fn_288(first_arg);
      fn_276(first_arg);
    },
    fn_280 = function (first_arg, second_arg = !1) {
      (first_arg.settings.kb !== namespace.vfF() || second_arg) && fn_291(first_arg);
      namespace.Wm(first_arg.oa.qRe, first_arg.oa.n6b ? namespace.zfF() : namespace.AfF());
      fn_53(
        first_arg.oa.z8d,
        `https://www.google.com/logos/fnbx/${fn_50(
          first_arg.settings.Mb,
          0,
          first_arg.settings.Vb
        )}`
      );
    },
    fn_281 = function (first_arg) {
      for (let local_44 of first_arg.Ka) (0, namespace.io)(local_44);
      first_arg.Ka = [];
    },
    fn_282 = function (first_arg, second_arg, third_arg) {
      fn_281(first_arg);
      if (second_arg && !first_arg.visible) {
        first_arg.settings.Ga ? fn_283(first_arg) : fn_284(first_arg);
        var local_44 = first_arg.settings.Ga
          ? fn_196(first_arg.settings)
          : fn_196(first_arg.settings, !0);
        local_44 = first_arg.settings.Ka ? "\u2014" : String(first_arg.Ia(local_44));
        fn_285(first_arg, third_arg, local_44);
        namespace.cn(first_arg.Ba, "visibility", "visible");
        namespace.cn(first_arg.Ba, "opacity", "1");
        namespace.Tv([new namespace.bo(first_arg.Ba, "show")], {
          data: { fun: `score=${third_arg}` }
        });
      } else
        namespace.dn(first_arg.Ba, "opacity") !== "0" &&
          first_arg.visible &&
          (namespace.cn(first_arg.Ba, "opacity", "0"),
          namespace.Tv([new namespace.bo(first_arg.Ba, "hide")]),
          first_arg.Ka.push(
            (0, namespace.ho)(() => {
              namespace.cn(first_arg.Ba, "visibility", "hidden");
            }, 300)
          ));
      first_arg.visible = second_arg;
    },
    fn_283 = function (first_arg) {
      first_arg.settings.Ga = !0;
      namespace.Pd(first_arg.Ba, "SU4xse");
      fn_280(first_arg, !0);
      first_arg.wa = "daily_challenge";
      fn_289(first_arg);
      namespace.Uv(first_arg.oa.EDa);
    },
    fn_284 = function (first_arg) {
      first_arg.settings.Ga = !1;
      namespace.Rd(first_arg.Ba, "SU4xse");
      first_arg.wa = "score";
      fn_289(first_arg);
      fn_277(first_arg);
    },
    fn_285 = function (first_arg, second_arg, third_arg) {
      namespace.Wm(first_arg.settings.Ga ? first_arg.oa.uCc : first_arg.Wc, second_arg);
      namespace.Wm(first_arg.settings.Ga ? first_arg.oa.Fza : first_arg.Hl, third_arg);
    },
    fn_286 = function (first_arg) {
      namespace.cn(first_arg.Ba, "display", "none");
      first_arg.Ka.push(
        (0, namespace.ho)(() => {
          namespace.cn(first_arg.Ba, "display", "");
        }, 0)
      );
    },
    fn_287 = function (first_arg) {
      return first_arg.visible && first_arg.wa === "settings";
    },
    fn_288 = function (first_arg) {
      first_arg.settings.Pb !== 0 || first_arg.settings.hb
        ? (fn_69(first_arg.Aa, list_17[0][0], fn_185(first_arg.settings, first_arg.settings.Pb, 0)),
          namespace.cn(
            first_arg.Kb,
            "background-color",
            fn_185(first_arg.settings, first_arg.settings.Pb, 6)
          ))
        : (fn_68(first_arg.Aa), namespace.cn(first_arg.Kb, "background-color", ""));
    },
    fn_289 = function (first_arg) {
      (first_arg.wa === "settings" ? namespace.Rd : namespace.Pd)(first_arg.Oa, "LaTyvd");
      (first_arg.wa === "score" ? namespace.Rd : namespace.Pd)(first_arg.Kb, "LaTyvd");
      (first_arg.wa === "combo" ? namespace.Rd : namespace.Pd)(first_arg.Bc, "LaTyvd");
      var local_44 =
          first_arg.wa === "daily_challenge" || first_arg.wa === "previous_daily_challenge",
        local_45 = first_arg.wa === "score" || local_44;
      (local_45 ? namespace.Rd : namespace.Pd)(first_arg.xc, "LaTyvd");
      (local_45 ? namespace.Pd : namespace.Rd)(first_arg.Ac, "LaTyvd");
      (local_45 ? namespace.Pd : namespace.Rd)(first_arg.hc, "LaTyvd");
      first_arg.Qa && (local_44 ? namespace.Rd : namespace.Pd)(first_arg.Qa, "LaTyvd");
      first_arg.oa &&
        ((first_arg.wa === "daily_challenge" ? namespace.Rd : namespace.Pd)(
          first_arg.oa.JS,
          "LaTyvd"
        ),
        (first_arg.wa === "previous_daily_challenge" ? namespace.Rd : namespace.Pd)(
          first_arg.oa.zPe,
          "LaTyvd"
        ),
        (first_arg.wa === "score" ? namespace.Rd : namespace.Pd)(first_arg.oa.EDa, "LaTyvd"));
      first_arg.update();
    },
    fn_290 = function (first_arg, element, third_arg, fourth_arg = -1) {
      fourth_arg = fourth_arg !== -1 ? fourth_arg : fn_295(first_arg, element);
      for (var index = 0; index < element.children.length; index++) {
        let local_44 = element.children[index];
        index === fourth_arg
          ? (namespace.Rd(local_44, "SsAred"), namespace.Pd(local_44, "tuJOWd"))
          : (namespace.Pd(local_44, "SsAred"), namespace.Rd(local_44, "tuJOWd"));
      }
      third_arg &&
        ((third_arg = namespace.Cs(first_arg.Oa)),
        (index = namespace.sn(element).width / element.children.length),
        first_arg.ka.Brc.set(element.id, third_arg.width / 2 - (fourth_arg + 0.5) * index));
      element = element.id;
      switch (element) {
        case "apple":
          first_arg.settings.Mb = fourth_arg;
          break;
        case "trophy":
          first_arg.settings.yb = fourth_arg;
          break;
        case "count":
          first_arg.settings.Ca = fourth_arg;
          break;
        case "speed":
          first_arg.settings.Ra = fourth_arg;
          break;
        case "size":
          first_arg.settings.Ta = fourth_arg;
          break;
        case "color":
          first_arg.settings.Nb = fourth_arg;
          first_arg.settings.Ia =
            first_arg.settings.Nb >= list_8.length
              ? Math.floor(Math.random() * list_8.length)
              : first_arg.settings.Nb;
          first_arg.settings.Bc = !1;
          break;
        case "theme":
          first_arg.settings.Qb = fourth_arg;
          first_arg.settings.Pb =
            first_arg.settings.Qb >= list_17.length
              ? Math.floor(Math.random() * list_17.length)
              : first_arg.settings.Qb;
          first_arg.settings.Gc = !1;
          break;
        case "graphics":
          first_arg.settings.Ba = fourth_arg;
      }
      fn_272(
        first_arg,
        element === "apple" || element === "graphics",
        element === "trophy" || element === "graphics"
      );
      fn_279(first_arg);
    },
    fn_291 = function (first_arg) {
      var local_44 = fn_194();
      first_arg.settings.kb !== local_44.vLa && fn_273(first_arg);
      namespace.Wm(first_arg.oa.Oee, local_44.vLa);
      first_arg.settings.kb = local_44.vLa;
      var ia_2 = first_arg.Ia(fn_196(first_arg.settings));
      namespace.Wm(first_arg.oa.Fza, first_arg.settings.Ka ? "\u2014" : ia_2);
      var element = first_arg.oa?.Cqc;
      if (element) {
        let get_value = first_arg.Ra.get(local_44.vLa);
        namespace.Td(
          element,
          "LaTyvd",
          first_arg.settings.Ka || get_value === void 0 || ia_2 < get_value
        );
      }
      fn_274(first_arg);
      for (element = first_arg.oa.iWe; element.firstChild;) element.firstChild.remove();
      fn_292(local_44, element);
      first_arg.Qa &&
        first_arg.Gc(namespace.E0g, first_arg.Qa, namespace.Lo).then((first_arg_2) => {
          var qd = first_arg_2.QD();
          var v_la = local_44.vLa;
          v_la = new namespace.rB(
            "{SCORE, plural, =0 {Play the {DATE} {HASHTAGGOOGLESNAKE} daily challenge!}=1 {I scored 1 point in the {DATE} {HASHTAGGOOGLESNAKE} daily challenge!}other {I scored {SCORE} points in the {DATE} {HASHTAGGOOGLESNAKE} daily challenge!}}"
          ).format({ SCORE: String(ia_2), DATE: v_la, HASHTAGGOOGLESNAKE: "#GoogleSnake" });
          qd.setTitle(v_la);
          first_arg_2.ka(qd);
        });
    },
    fn_292 = function (first_arg, element) {
      for (var local_44 of first_arg.XSa) {
        let element_2 = document.createElement("img");
        element.appendChild(element_2);
        fn_53(
          element_2,
          `https://www.google.com/logos/fnbx/${`snake_arcade/v22/trophy_${fn_52(local_44)}.png`}`
        );
        namespace.Pd(element_2, "fbftZe");
      }
      local_44 = document.createElement("img");
      element.appendChild(local_44);
      fn_53(
        local_44,
        `https://www.google.com/logos/fnbx/${`snake_arcade/v19/count_${fn_52(first_arg.Q5b)}.png`}`
      );
      namespace.Pd(local_44, "fbftZe");
      first_arg.I6b === 1 &&
        ((first_arg = document.createElement("img")),
        element.appendChild(first_arg),
        fn_53(first_arg, "https://www.google.com/logos/fnbx/snake_arcade/v4/size_01.png"),
        namespace.Pd(first_arg, "fbftZe"));
      if (element.children.length >= 5)
        for (let local_45 of element.children) namespace.Pd(local_45, "OZ9aHc");
    },
    fn_293 = function (first_arg) {
      if (first_arg.wa === "previous_daily_challenge" && first_arg.oa) {
        var zhd = first_arg.oa.ZHd;
        for (let element of zhd.children) {
          var attribute = element.getAttribute("data-date");
          if (!attribute) continue;
          zhd = attribute === namespace.vfF();
          if (!zhd && element.hasAttribute("data-star-processed")) continue;
          let get_value = first_arg.Ra.get(attribute);
          if (get_value === void 0) continue;
          var ia_2 = first_arg.Ia(attribute);
          attribute = element.querySelector(".yUIvmb");
          if (!attribute) continue;
          let element_2 = attribute.querySelector(".VsVLwf");
          ia_2 >= get_value
            ? !element_2 &&
              (ia_2 = first_arg.oa.Cqc) &&
              ((ia_2 = ia_2.cloneNode(!0)),
              ia_2.classList.remove("LaTyvd"),
              ia_2.removeAttribute("jsname"),
              ia_2.removeAttribute("id"),
              ia_2.classList.add("VsVLwf"),
              attribute.prepend(ia_2))
            : element_2 && element_2.remove();
          zhd || get_value === void 0 || element.setAttribute("data-star-processed", "true");
        }
      }
    },
    fn_294 = function (first_arg, second_arg) {
      var get_value = first_arg.settings.Hl.get(second_arg);
      if (get_value) {
        let nd = namespace.Nd(second_arg, "lH9Ipd");
        namespace.Xd(second_arg, "lH9Ipd");
        get_value !== 22
          ? namespace.Rd(first_arg.settings.Ya.get(22), "lH9Ipd")
          : get_value !== 22 ||
            nd ||
            first_arg.settings.Ya.forEach((first_arg_2, second_arg_2) => {
              second_arg_2 !== 22 && namespace.Rd(first_arg_2, "lH9Ipd");
            });
      }
    },
    fn_295 = function (first_arg, element) {
      first_arg = namespace.Cs(first_arg.Oa);
      var width = namespace.sn(element).width;
      return Math.min(
        element.children.length - 1,
        Math.max(
          0,
          Math.floor(
            ((first_arg.width / 2 - namespace.iLa(element).x) / width) * element.children.length
          )
        )
      );
    },
    fn_296 = function (first_arg, second_arg, third_arg) {
      if (fn_287(first_arg))
        if (third_arg !== 0) {
          second_arg = -1;
          for (let index = 0; index < first_arg.ka.rows.length; index++)
            if (first_arg.ka.Sea === first_arg.ka.rows[index]) {
              second_arg = index;
              break;
            }
          if (second_arg !== -1) {
            second_arg += third_arg;
            second_arg < 0
              ? (second_arg = first_arg.ka.rows.length - 1)
              : second_arg >= first_arg.ka.rows.length && (second_arg = 0);
            if (first_arg.settings.Ga)
              for (; second_arg >= 1 && second_arg <= 4;) second_arg += third_arg;
            fn_271(first_arg, first_arg.ka.rows[second_arg]);
          }
        } else
          second_arg !== 0 &&
            ((third_arg = fn_295(first_arg, first_arg.ka.Sea) + second_arg),
            third_arg < 0
              ? (third_arg = first_arg.ka.Sea.children.length - 1)
              : third_arg >= first_arg.ka.Sea.children.length && (third_arg = 0),
            fn_290(first_arg, first_arg.ka.Sea, !0, third_arg));
    },
    fn_297 = function (first_arg, second_arg, third_arg, fourth_arg, element) {
      if (fn_287(first_arg)) {
        first_arg.ka.C9b = Date.now();
        second_arg = new namespace.de(second_arg, third_arg);
        first_arg.ka.eub.x = second_arg.x;
        first_arg.ka.eub.y = second_arg.y;
        first_arg.ka.I2a.x = second_arg.x;
        first_arg.ka.I2a.y = second_arg.y;
        if (element.children.length > 0) {
          first_arg.ka.tZa = element;
          for (let local_44 of element.children)
            if (local_44.id !== "") {
              fn_271(first_arg, local_44);
              break;
            }
          element = namespace.sn(first_arg.ka.Sea).width;
          fourth_arg = (fourth_arg - namespace.iLa(first_arg.ka.Sea).x) / element;
          first_arg.ka.W9 =
            fourth_arg >= 0 && fourth_arg < 1
              ? Math.floor(fourth_arg * first_arg.ka.Sea.children.length)
              : -1;
        }
        first_arg.ka.Zk.x = namespace.iLa(first_arg.ka.Sea).x;
        first_arg.ka.Zk.y = namespace.iLa(first_arg.Ya).y;
        first_arg.ka.Brc.set(first_arg.ka.Sea.id, first_arg.ka.Zk.x);
        first_arg.ka.targetY = first_arg.ka.Zk.y;
        first_arg.ka.M6a.x = 0;
        first_arg.ka.M6a.y = 0;
        namespace.De(
          first_arg.settings.isMobile ? first_arg.ka.tZa : document,
          first_arg.settings.isMobile ? "touchmove" : "mousemove",
          first_arg.Qb,
          !1,
          first_arg
        );
        namespace.De(
          first_arg.settings.isMobile ? first_arg.ka.tZa : document,
          first_arg.settings.isMobile ? "touchend" : "mouseup",
          first_arg.Nb,
          !1,
          first_arg
        );
        first_arg.ka.tZa && namespace.Pd(first_arg.ka.tZa, "thso6e");
      }
    },
    fn_298 = function (first_arg) {
      if (first_arg.visible) {
        if (first_arg.wa === "settings") {
          var num_30 = Math.floor(Math.random() * 24);
          num_30 += num_30 >= first_arg.settings.Mb ? 1 : 0;
          var num_31 = Math.floor(Math.random() * 20);
          num_31 += num_31 >= first_arg.settings.yb ? 1 : 0;
          var num_32 = Math.floor(Math.random() * list_8.length);
          num_32 += num_32 >= first_arg.settings.Nb ? 1 : 0;
          let local_44 = Math.random() < 0.25 ? (Math.random() < 0.25 ? 2 : 1) : 0,
            local_45 = Math.random() < 0.25 ? (Math.random() < 0.25 ? 2 : 1) : 0,
            local_46;
          switch (Math.floor(Math.random() * 6)) {
            default:
            case 0:
              local_46 = 0;
              break;
            case 1:
              local_46 = 1;
              break;
            case 2:
              local_46 = 2;
              break;
            case 3:
              local_46 = 3;
              break;
            case 4:
              local_46 = 4;
              break;
            case 5:
              local_46 = 5;
          }
          var num_33 = Math.floor(Math.random() * list_17.length);
          num_33 += num_33 >= first_arg.settings.Qb ? 1 : 0;
          let num_34 = Math.floor(Math.random() * 4);
          fn_290(first_arg, first_arg.ka.tW.get("apple"), !0, num_30);
          fn_290(first_arg, first_arg.ka.tW.get("color"), !0, num_32);
          fn_290(first_arg, first_arg.ka.tW.get("theme"), !0, num_33);
          fn_290(first_arg, first_arg.ka.tW.get("graphics"), !0, num_34);
          first_arg.settings.Ga ||
            (fn_290(first_arg, first_arg.ka.tW.get("trophy"), !0, num_31),
            fn_290(first_arg, first_arg.ka.tW.get("count"), !0, local_46),
            fn_290(first_arg, first_arg.ka.tW.get("speed"), !0, local_44),
            fn_290(first_arg, first_arg.ka.tW.get("size"), !0, local_45));
        } else if (first_arg.wa === "combo") {
          let local_44 = fn_193(!1);
          first_arg.settings.Ya.forEach((first_arg_2, second_arg) => {
            local_44.has(second_arg)
              ? namespace.Pd(first_arg_2, "lH9Ipd")
              : namespace.Rd(first_arg_2, "lH9Ipd");
          });
        }
        namespace.Uv(first_arg.Ac);
      }
    },
    fn_299 = function (first_arg) {
      first_arg.visible &&
        (first_arg.wa === "settings"
          ? (fn_290(first_arg, first_arg.ka.tW.get("apple"), !0, 0),
            fn_290(first_arg, first_arg.ka.tW.get("color"), !0, 0),
            fn_290(first_arg, first_arg.ka.tW.get("theme"), !0, 0),
            fn_290(first_arg, first_arg.ka.tW.get("graphics"), !0, 0),
            first_arg.settings.Ga ||
              (fn_290(first_arg, first_arg.ka.tW.get("trophy"), !0, 0),
              fn_290(first_arg, first_arg.ka.tW.get("count"), !0, 0),
              fn_290(first_arg, first_arg.ka.tW.get("speed"), !0, 0),
              fn_290(first_arg, first_arg.ka.tW.get("size"), !0, 0)))
          : first_arg.wa === "combo" &&
            (first_arg.settings.Ya.forEach((first_arg_2) => {
              namespace.Rd(first_arg_2, "lH9Ipd");
            }),
            namespace.Pd(first_arg.settings.Ya.get(22), "lH9Ipd")),
        namespace.Uv(first_arg.hc));
    },
    cls_63 = class {
      constructor(
        list_50,
        second_arg,
        element,
        fourth_arg,
        fifth_arg,
        sixth_arg,
        seventh_arg,
        eighth_arg,
        arg,
        arg_2,
        arg_3,
        arg_4,
        arg_5,
        arg_6,
        arg_7,
        arg_8,
        arg_9,
        arg_10,
        arg_11,
        arg_12,
        arg_13,
        arg_14,
        arg_15,
        arg_16,
        arg_17
      ) {
        this.settings = list_50;
        this.Ba = second_arg;
        this.Kb = element;
        this.Ga = fourth_arg;
        this.Oa = fifth_arg;
        this.Ya = sixth_arg;
        this.xc = seventh_arg;
        this.Bc = eighth_arg;
        this.hb = arg;
        this.Ac = arg_2;
        this.hc = arg_3;
        this.oa = arg_4;
        this.Vb = arg_5;
        this.Ta = arg_6;
        this.yb = arg_7;
        this.rb = arg_8;
        this.wb = arg_9;
        this.oc = arg_10;
        this.oo = arg_11;
        this.Wc = arg_12;
        this.Hl = arg_13;
        this.Qa = arg_14;
        this.Gc = arg_15;
        this.Ia = arg_16;
        this.FD = arg_17;
        this.visible = !0;
        this.Ka = [];
        this.wa = "score";
        this.Ra = new Map();
        this.Ca = this.Ga.getContext("2d");
        this.Aa = new cls_21(this.settings, "snake_arcade/end_empty.png", 1, this.Ca);
        this.La = new cls_21(
          this.settings,
          "snake_arcade/v3/default_end.png",
          1,
          this.Ca,
          "snake_arcade/pixel/px_default_end.png"
        );
        this.Xc = new cls_21(
          this.settings,
          "snake_arcade/v3/rainbow_end.png",
          1,
          this.Ca,
          "snake_arcade/pixel/px_rainbow_end.png"
        );
        this.Pb = new cls_21(
          this.settings,
          "snake_arcade/v3/gradient_end.png",
          1,
          this.Ca,
          "snake_arcade/pixel/px_gradient_end.png"
        );
        this.kb = new cls_21(
          this.settings,
          "snake_arcade/v3/speed_01.png",
          1,
          this.Ca,
          "snake_arcade/pixel/px_speed_01.png"
        );
        this.Mb = new cls_21(
          this.settings,
          "snake_arcade/v3/speed_02.png",
          1,
          this.Ca,
          "snake_arcade/pixel/px_speed_02.png"
        );
        this.Oa = fifth_arg;
        this.Ya = sixth_arg;
        list_50 = [];
        for (second_arg = 0; second_arg < this.Ya.children.length; second_arg++)
          if (((element = this.Ya.children[second_arg]), element.children.length > 0))
            for (let element_2 of element.children)
              if (element_2.id !== "") {
                list_50.push(element_2);
                for (element = 1; element < element_2.children.length; element++)
                  namespace.Pd(element_2.children[element], "SsAred");
                this.settings.Vb &&
                  element_2.id === "apple" &&
                  element_2.children.length >= 4 &&
                  element_2.children[4] instanceof HTMLImageElement &&
                  fn_53(
                    element_2.children[4],
                    "https://www.google.com/logos/fnbx/snake_arcade/halloween/default_jackolantern.png"
                  );
                break;
              }
        this.ka = {
          C9b: -1,
          eub: new namespace.de(0, 0),
          I2a: new namespace.de(0, 0),
          tZa: null,
          Sea: list_50.length > 0 ? list_50[0] : document.createElement("div"),
          W9: -1,
          Zk: new namespace.de(0, 0),
          Brc: new Map(),
          targetY: 45,
          M6a: new namespace.de(0, 0),
          rows: list_50,
          tW: new Map()
        };
        for (let local_44 of this.ka.rows) this.ka.tW.set(local_44.id, local_44);
        fn_271(this, this.ka.Sea);
        fn_272(this, !0, !0);
        fn_273(this);
        fn_274(this, fn_194().vLa);
      }
      isVisible() {
        return this.visible;
      }
      update() {
        this.isVisible() &&
          (this.wa === "settings"
            ? fn_278(this)
            : this.wa === "score"
              ? fn_279(this)
              : this.wa === "daily_challenge" && fn_280(this));
      }
      Qb(event) {
        fn_287(this) &&
          ((event = new namespace.de(event.clientX, event.clientY)),
          (this.ka.I2a.x = event.x),
          (this.ka.I2a.y = event.y),
          (event = this.ka.I2a.y - this.ka.eub.y),
          this.ka.Brc.set(this.ka.Sea.id, this.ka.Zk.x + (this.ka.I2a.x - this.ka.eub.x)),
          (this.ka.targetY = this.ka.Zk.y + event),
          (this.ka.M6a.x = Math.max(this.ka.M6a.x, Math.abs(this.ka.I2a.x - this.ka.eub.x))),
          (this.ka.M6a.y = Math.max(this.ka.M6a.y, Math.abs(this.ka.I2a.y - this.ka.eub.y))),
          fn_290(this, this.ka.Sea, !1));
      }
      Nb() {
        if (fn_287(this)) {
          namespace.En(
            this.settings.isMobile ? this.ka.tZa : document,
            this.settings.isMobile ? "touchmove" : "mousemove",
            this.Qb,
            !1,
            this
          );
          namespace.En(
            this.settings.isMobile ? this.ka.tZa : document,
            this.settings.isMobile ? "touchend" : "mouseup",
            this.Nb,
            !1,
            this
          );
          var num_30 = Date.now() - this.ka.C9b,
            swg = namespace.SWg(this.ka.M6a);
          num_30 < 500 && swg < 10 && this.ka.W9 !== -1
            ? fn_290(this, this.ka.Sea, !0, this.ka.W9)
            : fn_290(this, this.ka.Sea, !0);
          this.ka.C9b = -1;
          this.ka.tZa && namespace.Rd(this.ka.tZa, "thso6e");
        }
      }
    };
  var fn_300, fn_301, fn_302, fn_303, fn_304;
  fn_300 = function (first_arg) {
    first_arg.Roa();
    first_arg.Iy(first_arg.ub.Oa);
    first_arg.hb();
  };
  fn_301 = function (first_arg, second_arg) {
    if (!first_arg.menu.isVisible() && !first_arg.ub.wj) return !1;
    first_arg.Aa.stop();
    first_arg.settings.autoplay = second_arg;
    first_arg.settings.Ka = second_arg;
    if (first_arg.settings.Ga) {
      var settings = first_arg.settings;
      settings.rb === null &&
        (settings.rb = { Q5b: settings.Ca, C8: settings.Ra, I6b: settings.Ta });
      var local_44 = fn_194();
      settings.kb = local_44.vLa;
      settings.Wc = local_44.XSa;
      settings.Ca = local_44.Q5b;
      settings.Ta = local_44.I6b;
      settings.Ra = 0;
      first_arg.settings.La = !0;
    } else first_arg.settings.La = !1;
    settings = first_arg.settings;
    settings.xc = settings.Nb;
    settings.Oa = settings.Mb;
    settings.wb = settings.yb;
    settings.ka = settings.Ca;
    settings.Kb = settings.Ra;
    settings.Aa = settings.Ta;
    settings.Ac = settings.Qb;
    settings.Qa = settings.Ba;
    fn_182(settings, 22) && fn_192(settings);
    settings.xc >= list_8.length
      ? settings.Bc
        ? (settings.wa = Math.floor(Math.random() * list_8.length))
        : ((settings.wa = settings.Ia), (settings.Bc = !0))
      : ((settings.wa = settings.xc), (settings.Bc = !1));
    settings.Ia = settings.wa;
    settings.Ac >= list_17.length
      ? settings.Gc
        ? (settings.oa = Math.floor(Math.random() * list_17.length))
        : ((settings.oa = settings.Pb), (settings.Gc = !0))
      : ((settings.oa = settings.Ac), (settings.Gc = !1));
    settings.Pb = settings.oa;
    settings = first_arg.header;
    fn_182(settings.settings, 21) || settings.settings.autoplay
      ? namespace.Rd(settings.ka, "LaTyvd")
      : namespace.Pd(settings.ka, "LaTyvd");
    settings.settings.oc !== "" && fn_53(settings.Oa, settings.settings.oc);
    settings.settings.La
      ? fn_53(
          settings.Ga,
          settings.settings.Ba === 1
            ? "https://www.google.com/logos/fnbx/snake_arcade/pixel/px_dc_trophy.png"
            : "https://www.google.com/logos/fnbx/snake_arcade/dc_trophy.png"
        )
      : settings.settings.hc !== "" && fn_53(settings.Ga, settings.settings.hc);
    settings = first_arg.ub.Yc;
    settings.settings.wa === 0 || settings.settings.wa === 10
      ? ((settings.Hl = list_8[0][0]), (settings.od = list_8[0][1]))
      : ((local_44 = list_8[settings.settings.wa]),
        (settings.Hl = local_44[0]),
        (settings.od = local_44[1]));
    fn_182(settings.settings, 7) && ((settings.Ca = 0), (settings.hb = !1));
    settings = first_arg.oa;
    if (settings.settings.wa === 0 || settings.settings.wa === 10)
      ((local_44 = settings.Ga),
        fn_68(local_44.oa),
        fn_68(local_44.Aa),
        fn_68(local_44.Ba),
        fn_68(local_44.wa));
    else {
      local_44 = settings.Ga;
      var hl = settings.ub.Yc.Hl;
      fn_69(local_44.oa, "#5282F2", hl);
      fn_69(local_44.Aa, "#5282F2", hl);
      fn_69(local_44.Ba, "#5282F2", hl);
      hl = namespace.HJ(hl);
      let hj = namespace.HJ("#C73104");
      hj[0] = (hl[0] + 180) % 360;
      fn_69(local_44.wa, "#C73104", fn_38(hj));
    }
    fn_182(settings.settings, 7) &&
      ((hl = settings.ub.Aa(0, 0, 0, !0)),
      (local_44 = settings.Ga),
      fn_69(
        local_44.Oa,
        "#C73104",
        settings.settings.wa === 10 ? split_2[0] : list_8[settings.settings.wa][0]
      ),
      fn_69(local_44.wa, "#C73104", hl),
      fn_69(local_44.Ga, "#5282F2", hl),
      fn_69(local_44.La, "#5282F2", hl),
      fn_69(local_44.Ka, "#5282F2", hl));
    local_44 = !settings.settings.bN();
    settings.ka.imageSmoothingEnabled = local_44;
    settings.oa.imageSmoothingEnabled = local_44;
    settings = first_arg.menu;
    settings.Ca.imageSmoothingEnabled = settings.settings.Ba !== 1;
    fn_302(first_arg);
    second_arg = first_arg.Ha(second_arg ? "TYXDAb" : "NSjDf");
    namespace.Uv(second_arg.el(), { data: { fun: first_arg.settings.toString() } });
    first_arg.reset();
    return !0;
  };
  fn_302 = function (first_arg) {
    if (first_arg.settings.oa !== 0 || first_arg.settings.hb) {
      namespace.cn(
        first_arg.header.tC,
        "background-color",
        fn_185(first_arg.settings, first_arg.settings.oa, 5)
      );
      var oa = first_arg.oa,
        local_44 = fn_185(first_arg.settings, first_arg.settings.oa, 0);
      fn_69(oa.Ka.wa, list_17[0][4], fn_185(first_arg.settings, first_arg.settings.oa, 4));
      fn_69(oa.Ba.oa, list_17[0][0], local_44, 5);
      namespace.cn(
        first_arg.oa.mJ(),
        "background-color",
        fn_185(first_arg.settings, first_arg.settings.oa, 3)
      );
      first_arg.wa &&
        namespace.cn(
          first_arg.wa,
          "background-color",
          fn_185(first_arg.settings, first_arg.settings.oa, 5)
        );
      first_arg.ka &&
        namespace.cn(
          first_arg.ka.container,
          "background-color",
          fn_185(first_arg.settings, first_arg.settings.oa, 3)
        );
    } else
      (namespace.cn(first_arg.header.tC, "background-color", ""),
        (oa = first_arg.oa),
        fn_68(oa.Ka.wa),
        fn_68(oa.Ba.oa),
        namespace.cn(first_arg.oa.mJ(), "background-color", ""),
        first_arg.wa && namespace.cn(first_arg.wa, "background-color", ""),
        first_arg.ka && namespace.cn(first_arg.ka.container, "background-color", ""));
  };
  fn_303 = function (first_arg) {
    var local_44 = first_arg.settings.Ka
      ? "\u2014"
      : String(fn_254(first_arg.ub, fn_196(first_arg.settings)));
    first_arg.ub.wj || fn_267(first_arg.header, first_arg.ub.Ai, local_44);
    if (first_arg.menu.isVisible()) {
      var local_45 = first_arg.settings.Ka
        ? "\u2014"
        : String(fn_254(first_arg.ub, fn_196(first_arg.settings, !0)));
      fn_285(first_arg.menu, first_arg.ub.Ai, first_arg.settings.Ga ? local_44 : local_45);
    }
  };
  fn_304 = function (first_arg, second_arg) {
    first_arg.settings.autoplay || first_arg.turn(second_arg);
  };
  namespace.R7 = class extends namespace.qs {
    static Sa() {
      return { service: { kE: namespace.FWg, Wf: namespace.Ru } };
    }
    constructor(list_50) {
      super(list_50.Ma);
      this.muted = this.Oa = this.wb = !1;
      this.closed = !0;
      this.Ia = new cls_35();
      this.Ya = new cls_39();
      this.rb = new cls_56();
      this.kb = new cls_52();
      this.yb = new cls_59();
      this.Ta = new cls_25();
      this.Wf = list_50.service.Wf;
      var el = this.getRoot().el();
      this.settings = new cls_49(
        el,
        this.getData("isMobile").Lb(),
        this.getData("useHalloweenAssets").Lb(),
        this.getData("showGlobalAverage").Lb()
      );
      namespace.iR.registerAnimation(this);
      this.Xc = new namespace.lJ(document);
      namespace.De(this.Xc, "key", (first_arg) => {
        this.Gda(first_arg);
      });
      var el_2 = this.Ha("UzWXSb").el();
      namespace.De(el_2, "touchstart", (event) => {
        event.target === this.oa.mJ() && event.preventDefault();
      });
      namespace.De(el_2, "touchmove", (event) => {
        a: {
          event.preventDefault();
          event = event.Fi.touches[0];
          if (this.ub.rb) {
            if (this.menu.isVisible() || this.ub.wj) break a;
            let num_30 = event.clientX - this.ub.rb.x,
              num_31 = event.clientY - this.ub.rb.y;
            if (
              Math.max(Math.abs(num_30), Math.abs(num_31)) <
              40 * (1 + 0.5 * Math.min(2, this.ub.Nb))
            )
              break a;
            let local_44 = fn_228(this.ub.Yc),
              local_45 = fn_230(this.ub.Yc),
              text_5 = "NONE";
            Math.abs(num_30) > Math.abs(num_31)
              ? (num_30 > 0 && (local_44 !== "LEFT" || local_45) && (text_5 = "RIGHT"),
                num_30 < 0 && (local_44 !== "RIGHT" || local_45) && (text_5 = "LEFT"))
              : (num_31 > 0 && (local_44 !== "UP" || local_45) && (text_5 = "DOWN"),
                num_31 < 0 && (local_44 !== "DOWN" || local_45) && (text_5 = "UP"));
            fn_304(this, text_5);
          }
          this.ub.rb = new namespace.de(event.clientX, event.clientY);
        }
      });
      namespace.De(el_2, "touchend", (event) => {
        event.target === this.oa.mJ() && event.preventDefault();
        this.ub.rb = null;
      });
      namespace.De(this.getRoot().el(), "touchmove", (event) => {
        event.preventDefault();
      });
      this.Wf.addListener(() => {
        if (this.settings.isMobile) {
          if (!this.settings.autoplay) {
            var yc = this.ub.Yc;
            yc.direction !== "NONE" && ((yc.Ka = yc.direction), (yc.direction = "NONE"));
          }
          this.Oa && !this.Co() && ((this.Oa = !1), this.Ba());
          fn_300(this);
        }
      });
      el_2 = {
        JS: this.Ha("JVpJxc").el(),
        EDa: this.Ha("Prvkrf").el(),
        Oee: this.Ha("s6Dabc").el(),
        qRe: this.Ha("Q1mR9e").el(),
        iWe: this.Ha("TWJkNd").el(),
        uCc: this.Ha("rAEDL").el(),
        Fza: this.Ha("KtGIjc").el(),
        Cqc: this.Ua("ndfqX").el(),
        n6b: this.Ua("wjVNJb").el(),
        z8d: this.Ha("Jesp7b").Jf(),
        zPe: this.Ha("db0Sb").el(),
        yPe: this.Ha("jDlGJf").el(),
        ZHd: this.Ha("vIGaV").el()
      };
      list_50 = list_50.service.kE.ka();
      this.menu = new cls_63(
        this.settings,
        this.Ha("XRjYde").el(),
        this.Ha("Rs1rF").el(),
        this.Ha("kAVrAc").Jf(),
        this.Ha("akczce").el(),
        this.Ha("wXSCdb").el(),
        this.Ha("iyH4Cb").el(),
        this.Ha("VODc4e").el(),
        this.Ha("oUUYK").el(),
        this.Ha("qycu7d").el(),
        this.Ha("PLtcve").el(),
        el_2,
        this.Ha("h6Ousc").Jf(),
        this.Ha("piGvM").el(),
        this.Ha("SkX2tc").Jf(),
        this.Ha("Ga638d").Jf(),
        this.Ha("h98v0c").Jf(),
        this.Ha("lFrxS").el(),
        this.Ha("LpoWPe").Jf(),
        this.Ha("LOtDEe").el(),
        this.Ha("Vp6PHf").el(),
        this.Ha("fbtBXc").el(),
        this.Id.bind(this),
        this.oc.bind(this),
        list_50
      );
      this.header = new cls_62(
        this.settings,
        this.Ha("P0FCKc").el(),
        this.Ha("A0kWCf").el(),
        this.Ha("E5ziSe").el(),
        this.Ha("lh7ff").Jf(),
        this.Ha("UEI8qf").Jf(),
        this.Ha("BDBvSc").el(),
        this.Ha("dPr9Td").el(),
        this.settings.isMobile ? void 0 : this.Ha("flg6ze").el(),
        this.settings.isMobile ? void 0 : this.Ha("tljw1d").el(),
        this.Ha("p57eQc").el(),
        this.Ha("Fh1nkd").el(),
        this.Ha("yddQF").el(),
        this.Ha("DIdRlc").el(),
        this.Ha("lulO0b").el()
      );
      this.ub = new cls_61(this.settings, this.menu, this.header, list_50);
      this.oa = new cls_48(this.ub, this.settings, this.Ha("UzWXSb").Jf());
      this.Aa = new cls_31(this.settings, this.ub, this.turn.bind(this), this.Ga.bind(this));
      if ((list_50 = this.Ua("ar2wLb").el())) this.wa = list_50;
      if ((list_50 = this.Ua("Ycs2rd").el()))
        ((this.ka = {
          container: list_50,
          width: 0,
          height: 0,
          radius: 0,
          up: this.Ua("MUDVS").el(),
          psa: this.Ua("rmiREc").el(),
          left: this.Ua("p4rndc").el(),
          right: this.Ua("dICtMc").el(),
          Gr: this.Ua("k8ZH5e").el(),
          jCd: !1
        }),
          fn_265(this.ub) && this.Pb());
      var list_51 = [];
      list_50 = el.getElementsByTagName("img");
      for (let local_44 of list_50)
        list_51.push(
          new Promise((fn_457) => {
            local_44.complete
              ? fn_457()
              : namespace.Dn(local_44, "load", () => {
                  fn_457();
                });
          })
        );
      list_50 = (first_arg) => {
        list_51.push(
          new Promise((fn_457) => {
            if (first_arg.ka > 0) first_arg.onLoad(fn_457);
            else fn_457();
          })
        );
      };
      fn_275(this.menu).forEach(list_50);
      fn_178(this.oa).forEach(list_50);
      list_50 = new Promise((fn_457) => {
        (0, namespace.ho)(() => {
          fn_457();
        }, 1e4);
      });
      Promise.race([Promise.all(list_51), list_50]).then(() => {
        namespace.cn(this.Ha("y7GBZ").el(), "visibility", "hidden");
        this.Iy(Date.now());
      });
      this.settings.isMobile ||
        namespace.DfF("snake.speedrun", () => {
          fn_269(this.header);
        });
      window.ResizeObserver &&
        ((this.od = new window.ResizeObserver(() => {
          if (!this.settings.isMobile) {
            var xa = this.Ha("cGQipc").Xa(),
              xa_2 = this.Ha("Fh1nkd").Xa();
            xa.style.transform = "";
            xa_2.style.transform = "";
            xa_2.style.display = "";
            var pi = namespace.pi();
            pi = Math.min(pi.width, pi.height) / 650;
            if (pi < 1) {
              let num_30 = Math.max(0.5, Math.pow(pi, 1.25));
              xa.style.transform = `translateY(-50%) scale(${num_30})`;
              xa_2.style.transform = `translateX(-50%) scale(${num_30})`;
              xa_2.style.display = pi < 0.85 ? "none" : "";
            }
          }
          fn_300(this);
        })),
        this.od.observe(el));
      namespace.DfF(
        "snake.setCustomTheme",
        (first_arg, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg, seventh_arg) => {
          fn_37(first_arg) &&
            fn_37(second_arg) &&
            fn_37(third_arg) &&
            fn_37(fourth_arg) &&
            fn_37(fifth_arg) &&
            fn_37(sixth_arg) &&
            fn_37(seventh_arg) &&
            ((this.settings.hb = [
              first_arg,
              second_arg,
              third_arg,
              fourth_arg,
              fifth_arg,
              sixth_arg,
              seventh_arg
            ]),
            fn_288(this.menu),
            fn_302(this),
            fn_120(this.oa.Ra));
        }
      );
      namespace.DfF("snake.clearCustomTheme", () => {
        this.settings.hb = void 0;
        fn_288(this.menu);
        fn_302(this);
        fn_120(this.oa.Ra);
      });
      this.getData("isStandalone").Lb() &&
        (this.Ka(), this.Ba(), namespace.nu().get("fbxdc") === "1" && this.Ca());
      list_50 = el.getElementsByClassName("l3ryBd");
      for (let element of list_50)
        ((list_50 = element.textContent) && list_50.length > 20 && namespace.Pd(el, "jKj29e"),
          list_50 && list_50.length > 25 && namespace.Pd(el, "KjMIn"));
    }
    Ed() {
      return this.settings;
    }
    Vb() {
      return this.ub;
    }
    Jd() {
      return this.menu;
    }
    Ae() {
      return this.menu.ka;
    }
    Qb() {
      return this.oa.mJ();
    }
    Fd() {
      return namespace.dn(this.Ha("P0FCKc").el(), "background-color");
    }
    qe() {
      return namespace.dn(this.Ha("Rs1rF").el(), "background-color");
    }
    Qa() {
      fn_301(this, !1);
    }
    Lf() {
      fn_301(this, !0) && this.Aa.start();
    }
    reset() {
      this.ub.ka.ka = 0;
      this.Roa();
      try {
        this.resetState();
      } catch (error) {}
    }
    resetState(first_arg = !0) {
      first_arg || (this.Aa.stop(), (this.settings.autoplay = !1), (this.settings.Ka = !1));
      this.ub.reset(first_arg);
      fn_182(this.settings, 4) && fn_182(this.settings, 3) && this.Roa();
      fn_182(this.settings, 10) && obj_17.Mad.ka.preload();
      fn_182(this.settings, 12) && obj_15.iHb.ka.preload();
      fn_182(this.settings, 13) && obj_19.Rad.ka.preload();
      fn_182(this.settings, 16) && obj_7.RIGHT.ka.preload();
      var local_44 =
        this.settings.wb !== 0 ||
        (fn_264(this.ub, fn_196(this.settings)) && !this.settings.Ga) ||
        this.settings.La ||
        this.settings.autoplay;
      this.header.oa = local_44;
      local_44 = this.header;
      namespace.Wm(local_44.Ba, "25");
      namespace.Wm(local_44.Ca, "--:--:---");
      this.ka && this.hb();
      first_arg && fn_282(this.menu, !1, this.ub.Ai);
      fn_303(this);
    }
    Nb() {
      fn_286(this.menu);
    }
    Co() {
      return this.settings.isMobile && this.wa !== void 0 && this.wa.checkVisibility();
    }
    Gda(event) {
      if (!this.closed) {
        var local_44 = event.Qna ? event.Fi : void 0;
        if (!local_44 || !local_44.repeat) {
          local_44 = fn_228(this.ub.Yc);
          var local_45 = fn_230(this.ub.Yc),
            local_46 = fn_287(this.menu);
          switch (event.keyCode) {
            case 70:
              this.Mb();
              break;
            case 77:
              this.Ra();
              break;
            case 32:
            case 82:
            case 13:
              (this.menu.isVisible() || this.ub.wj) && this.Qa();
              break;
            case 38:
            case 87:
              local_46
                ? fn_296(this.menu, 0, -1)
                : (local_44 !== "DOWN" || local_45) && fn_304(this, "UP");
              break;
            case 40:
            case 83:
              local_46
                ? fn_296(this.menu, 0, 1)
                : (local_44 !== "UP" || local_45) && fn_304(this, "DOWN");
              break;
            case 37:
            case 65:
              local_46
                ? fn_296(this.menu, -1, 0)
                : (local_44 !== "RIGHT" || local_45) && fn_304(this, "LEFT");
              break;
            case 39:
            case 68:
              local_46
                ? fn_296(this.menu, 1, 0)
                : (local_44 !== "LEFT" || local_45) && fn_304(this, "RIGHT");
              break;
            case 27:
              this.Ga(!0);
              break;
            case 84:
              this.settings.isMobile || fn_269(this.header);
              break;
            default:
              return;
          }
          event.preventDefault();
        }
      }
    }
    turn(first_arg) {
      this.menu.isVisible() ||
        this.ub.wj ||
        this.closed ||
        (this.ub.turn(first_arg), this.d5a(), obj_13.Juc.ka.preload());
    }
    d5a() {
      var el = this.Ha("IoE5Ec").el();
      namespace.wn(el, 0);
      (0, namespace.ho)(() => {
        namespace.cn(el, "visibility", "hidden");
      }, 200);
    }
    Iy(first_arg) {
      if (this.wb && !this.closed) {
        var hb = this.ub.hb;
        if (this.settings.autoplay && hb > 0) {
          var num_30 = first_arg - this.ub.Oa;
          num_30 >= hb * 2 && (this.ub.Oa += (Math.floor(num_30 / hb) - 1) * hb);
        }
        hb = this.ub.update(first_arg);
        this.Aa.update(hb);
        this.render((first_arg - this.ub.Oa) / this.ub.hb, hb);
        fn_303(this);
        this.menu.update();
        hb = this.header;
        num_30 = this.ub.Oa;
        var ticks = this.ub.ticks,
          hb_2 = this.ub.hb;
        hb.wa &&
          namespace.Wm(
            hb.Ra,
            fn_43(
              this.ub.wj && this.ub.yb > 0 ? this.ub.yb * hb_2 : ticks * hb_2 + (first_arg - num_30)
            )
          );
      }
    }
    Ka() {
      var el = this.getRoot().el();
      this.Ia.init(el);
      this.Ya.init(el);
      this.rb.init(el);
      this.kb.init(el);
      this.yb.init(el);
      this.Ta.init(el);
      obj_11.DOWN.ka.preload();
      el = this.ub;
      (el.localStorage?.has("mute_preference")
        ? el.localStorage.get("mute_preference")
        : "UNMUTED") !== "MUTED" ||
        this.muted ||
        this.Ra(!1);
    }
    Ba() {
      namespace.Pd(this.getRoot().el(), "Y6tjYe");
      this.settings.isMobile && window.scrollTo(0, 0);
      this.Co()
        ? (this.Oa = !0)
        : (fn_289(this.menu), this.Roa(), this.resetState(!1), (this.wb = !0), (this.closed = !1));
    }
    Roa() {
      var el = this.Ha("JI3Aqc").el();
      namespace.cn(el, "width", "");
      namespace.cn(el, "height", "");
      var cs = namespace.Cs(this.oa.mJ());
      if (cs.width !== 0) {
        namespace.cn(el, "width", `${cs.width}px`);
        namespace.cn(el, "height", `${cs.height}px`);
        el = this.settings.isMobile || this.getData("isSafari").Lb() ? 1 : namespace.yfF();
        cs = new namespace.ee(cs.width * el, cs.height * el);
        var width = cs.width,
          local_44 = this.settings.isMobile ? 20 * el : (20 * width) / 600;
        el = width - local_44 * 2;
        width = cs.height - local_44 * 2;
        a: switch (this.settings.Aa) {
          case 2:
            var num_30 = 512;
            break a;
          case 1:
            num_30 = 96;
            break a;
          default:
            num_30 = 256;
        }
        local_44 = this.ub.ka;
        num_30 = (el * width) / num_30;
        if (local_44.ka)
          local_44.ka = Math.min(
            Math.floor(el / local_44.oa.width),
            Math.floor(width / local_44.oa.height)
          );
        else {
          local_44.ka = Math.floor(Math.sqrt(num_30));
          if (local_44.settings.isMobile)
            local_44.oa = new namespace.ee(
              Math.floor(el / local_44.ka),
              Math.floor(width / local_44.ka)
            );
          else
            switch (local_44.settings.Aa) {
              default:
              case 0:
                local_44.oa = new namespace.ee(17, 15);
                break;
              case 1:
                local_44.oa = new namespace.ee(10, 9);
                break;
              case 2:
                local_44.oa = new namespace.ee(24, 21);
            }
          local_44.Aa = new namespace.de(0, 0);
        }
        el = this.oa;
        el.rb = cs;
        el.canvas.width = el.rb.width;
        el.canvas.height = el.rb.height;
        el.Oa.canvas.width = el.ub.ka.oa.width * el.ub.ka.ka;
        el.Oa.canvas.height = el.ub.ka.oa.height * el.ub.ka.ka;
        el.Ca.canvas.width = el.ub.ka.oa.width * el.ub.ka.ka;
        el.Ca.canvas.height = el.ub.ka.oa.height * el.ub.ka.ka;
        cs = fn_182(el.settings, 4) ? 4 : 0;
        width = el.ub.ka.oa.height - el.ub.ka.Aa.y + cs;
        el.ka.canvas.width = (el.ub.ka.oa.width - el.ub.ka.Aa.x + cs) * el.ub.ka.ka;
        el.ka.canvas.height = width * el.ub.ka.ka;
        el.oa.canvas.width = el.ka.canvas.width;
        el.oa.canvas.height = el.ka.canvas.height;
        el.Aa.canvas.width = el.ka.canvas.width;
        el.Aa.canvas.height = el.ka.canvas.height;
        el.wa.canvas.width = (el.ub.ka.oa.width + cs) * el.ub.ka.ka;
        el.wa.canvas.height = (el.ub.ka.oa.height + cs) * el.ub.ka.ka;
        fn_120(this.oa.Ra);
        fn_277(this.menu);
        fn_182(this.settings, 4) && fn_255(this.ub);
      }
    }
    render(first_arg, second_arg) {
      this.oa.render(first_arg, second_arg);
    }
    Ax() {
      namespace.Tv([new namespace.bo(this.getRoot().el(), "hide")]);
      this.trigger(namespace.cy.get("snake_closed"));
      this.getData("isGoogleArcadeStandalone").Lb() && namespace.BfF();
    }
    Kb() {
      this.closed = !0;
      fn_281(this.menu);
      this.Ga(!0);
      namespace.Rd(this.getRoot().el(), "Y6tjYe");
    }
    Ga(first_arg = !1) {
      !(fn_182(this.settings, 21) || this.settings.autoplay || first_arg) ||
        this.ub.wj ||
        this.menu.isVisible() ||
        (this.Aa.stop(),
        (this.ub.xc = !0),
        (this.ub.wj = !0),
        (this.ub.Ya = !0),
        fn_266(this.header),
        fn_270(this.menu, 0, this.ub.Ai),
        (first_arg = this.ub.Yc),
        first_arg.direction !== "NONE" && (first_arg.Ya = first_arg.ka[first_arg.ka.length - 1]),
        fn_182(this.settings, 5) && fn_242(this.ub.Yc),
        fn_182(this.settings, 11) && (this.ub.Qa = !1),
        this.ub.wb(),
        (first_arg =
          this.ub.ticks === 0 && this.ub.Yc.direction === "NONE"
            ? 0
            : (Date.now() - this.ub.Oa) / this.ub.hb),
        (this.ub.yb = this.ub.ticks + first_arg));
    }
    Ra(first_arg = !0) {
      this.muted = !this.muted;
      var header = this.header,
        muted = this.muted;
      (muted ? namespace.Pd : namespace.Rd)(header.Ya, "LaTyvd");
      (muted ? namespace.Rd : namespace.Pd)(header.Ta, "LaTyvd");
      this.muted
        ? (namespace.mfF(this.Ia),
          namespace.mfF(this.Ya),
          namespace.mfF(this.rb),
          namespace.mfF(this.kb),
          namespace.mfF(this.yb),
          namespace.mfF(this.Ta))
        : (namespace.nfF(this.Ia),
          namespace.nfF(this.Ya),
          namespace.nfF(this.rb),
          namespace.nfF(this.kb),
          namespace.nfF(this.yb),
          namespace.nfF(this.Ta));
      first_arg && this.ub.localStorage?.set("mute_preference", this.muted ? "MUTED" : "UNMUTED");
    }
    Mb() {
      if (!this.settings.isMobile) {
        var el = this.getRoot().el();
        namespace.Nd(el, "DgO4x")
          ? (namespace.Rd(el, "DgO4x"), this.header.toggleFullscreen(!1))
          : (namespace.Pd(el, "DgO4x"), this.header.toggleFullscreen(!0));
      }
    }
    Pb() {
      var el = this.getRoot().el();
      namespace.Xd(el, "b7c3Cc");
      this.ub.ka.ka = 0;
      this.Roa();
      this.resetState(!1);
      el = namespace.Nd(el, "b7c3Cc");
      this.ub.localStorage?.set("virtual_joystick_enabled", el);
      namespace.Uv(el ? this.Ha("fIqioc").el() : this.Ha("ZxgYgc").el());
    }
    Bc() {
      var menu = this.menu;
      menu.wa = "settings";
      fn_289(menu);
      fn_290(menu, menu.ka.tW.get("apple"), !0, menu.settings.Mb);
      fn_290(menu, menu.ka.tW.get("trophy"), !0, menu.settings.yb);
      fn_290(menu, menu.ka.tW.get("count"), !0, menu.settings.Ca);
      fn_290(menu, menu.ka.tW.get("speed"), !0, menu.settings.Ra);
      fn_290(menu, menu.ka.tW.get("size"), !0, menu.settings.Ta);
      fn_290(menu, menu.ka.tW.get("color"), !0, menu.settings.Nb);
      fn_290(menu, menu.ka.tW.get("theme"), !0, menu.settings.Qb);
      fn_290(menu, menu.ka.tW.get("graphics"), !0, menu.settings.Ba);
      fn_271(menu, menu.ka.rows[0]);
      fn_278(menu, !0);
      namespace.Uv(menu.xc);
    }
    Ca() {
      this.settings.Ga || ((this.ub.Ai = 0), (this.settings.Ka = !1));
      fn_283(this.menu);
      fn_303(this);
    }
    xc() {
      var menu = this.menu;
      menu.wa = "combo";
      fn_289(menu);
      namespace.Uv(menu.hb);
    }
    La() {
      if (this.settings.Ga) {
        this.ub.Ai = 0;
        this.settings.Ka = !1;
        var settings = this.settings;
        settings.rb !== null &&
          ((settings.Ca = settings.rb.Q5b),
          (settings.Ta = settings.rb.I6b),
          (settings.Ra = settings.rb.C8),
          (settings.rb = null));
      }
      fn_284(this.menu);
      fn_303(this);
    }
    Ac() {
      var menu = this.menu,
        zhd = menu.oa.ZHd,
        first_element_child = zhd.firstElementChild,
        vf_f = namespace.vfF();
      if (first_element_child && first_element_child.getAttribute("data-date") === vf_f)
        (zhd = first_element_child.querySelector(".yUIvmb")) && namespace.Wm(zhd, menu.Ia(vf_f));
      else {
        for (; zhd.firstChild;) zhd.firstChild.remove();
        for (vf_f = 0; vf_f < 6; vf_f++) {
          var element = document.createElement("div");
          zhd.appendChild(element);
          first_element_child = fn_194(vf_f);
          element.setAttribute("data-date", first_element_child.vLa);
          var element_2 = document.createElement("div");
          namespace.Wm(element_2, first_element_child.vLa);
          namespace.Pd(element_2, "Nfs8lc");
          element.appendChild(element_2);
          element_2 = document.createElement("div");
          element.appendChild(element_2);
          namespace.Pd(element_2, "Cg6pxb");
          fn_292(first_element_child, element_2);
          element = document.createElement("div");
          namespace.Wm(element, menu.Ia(first_element_child.vLa));
          element_2.appendChild(element);
          namespace.Pd(element, "yUIvmb");
        }
      }
      menu.wa = "previous_daily_challenge";
      fn_293(menu);
      fn_289(menu);
      namespace.Uv(menu.oa.yPe);
    }
    Ge() {
      this.settings.Ga ? this.Ca() : this.La();
    }
    hc(first_arg) {
      fn_294(this.menu, first_arg.targetElement.el());
    }
    Af(first_arg) {
      fn_287(this.menu) &&
        (this.settings.isMobile ||
          first_arg.event.button !== 0 ||
          fn_297(
            this.menu,
            first_arg.event.clientX,
            first_arg.event.clientY,
            first_arg.event.offsetX,
            first_arg.targetElement.el()
          ));
    }
    uf(element) {
      if (fn_287(this.menu)) {
        var event = element.event;
        if (
          this.settings.isMobile &&
          event.touches !== void 0 &&
          event.touches !== null &&
          event.touches.length !== 0
        ) {
          element = element.targetElement.el();
          event = event.touches[0];
          var bounding_client_rect = element.getBoundingClientRect();
          fn_297(
            this.menu,
            event.clientX,
            event.clientY,
            event.pageX - bounding_client_rect.left,
            element
          );
        }
      }
    }
    hb() {
      if (this.ka) {
        var bounding_client_rect = this.ka.container.getBoundingClientRect();
        this.ka.width = bounding_client_rect.width;
        this.ka.height = bounding_client_rect.height;
        this.ka.radius = bounding_client_rect.height / 2;
      }
    }
    Pe(first_arg) {
      if (this.ka !== void 0) {
        var list_50 = [this.ka.right, this.ka.psa, this.ka.left, this.ka.up];
        if (first_arg.type === "touchend" || this.ub.wj || this.settings.autoplay) {
          for (var event of list_50) namespace.Rd(event, "gkaUEd");
          namespace.cn(this.ka.Gr, "opacity", "");
        } else if (
          ((event = first_arg.event),
          this.settings.isMobile &&
            event.touches !== void 0 &&
            event.touches !== null &&
            event.touches.length !== 0)
        ) {
          first_arg = new namespace.de(0, window.innerHeight - this.ka.height);
          var de_6 = new namespace.de(
            first_arg.x + this.ka.width / 2,
            first_arg.y + this.ka.height / 2
          );
          event = event.touches[0];
          var de_7 = new namespace.de(event.clientX - de_6.x, event.clientY - de_6.y),
            zd = namespace.Zd(namespace.Tla(Math.atan2(de_7.y, de_7.x)), 360),
            text_5 = "NONE";
          de_6 = null;
          namespace.SWg(de_7) < this.ka.radius * 1.25 &&
            (zd < 45 || zd > 315
              ? ((text_5 = "RIGHT"), (de_6 = this.ka.right))
              : zd > 45 && zd < 135
                ? ((text_5 = "DOWN"), (de_6 = this.ka.psa))
                : zd > 135 && zd < 225
                  ? ((text_5 = "LEFT"), (de_6 = this.ka.left))
                  : zd > 225 && zd < 315 && ((text_5 = "UP"), (de_6 = this.ka.up)));
          de_7 = fn_228(this.ub.Yc);
          zd = fn_230(this.ub.Yc);
          text_5 === "NONE" || (text_5 === fn_45(de_7) && !zd) || fn_304(this, text_5);
          de_6 && namespace.Pd(de_6, "gkaUEd");
          for (let local_44 of list_50) local_44 !== de_6 && namespace.Rd(local_44, "gkaUEd");
          list_50 = new namespace.de(
            Math.round(event.clientX - first_arg.x),
            Math.round(event.clientY - first_arg.y)
          );
          namespace.cn(this.ka.Gr, "opacity", de_6 ? "1" : "");
          namespace.cn(this.ka.Gr, "transform", `translate(${list_50.x}px, ${list_50.y}px)`);
          !this.ka.jCd && de_6 && ((this.ka.jCd = !0), namespace.Uv(this.ka.container));
        }
      }
    }
    Wc() {
      fn_298(this.menu);
    }
    Gc() {
      fn_299(this.menu);
    }
    oc(first_arg) {
      return fn_254(this.ub, first_arg);
    }
    lg() {
      fn_279(this.menu);
    }
    og() {
      return this.ka;
    }
  };
  namespace.R7.prototype.$wa$WMgRu = function () {
    return this.og;
  };
  namespace.R7.prototype.$wa$aNnDbe = function () {
    return this.lg;
  };
  namespace.R7.prototype.$wa$b7QE4d = function () {
    return this.Gc;
  };
  namespace.R7.prototype.$wa$Km979c = function () {
    return this.Wc;
  };
  namespace.R7.prototype.$wa$G0IZGc = function () {
    return this.Pe;
  };
  namespace.R7.prototype.$wa$jkKeMc = function () {
    return this.hb;
  };
  namespace.R7.prototype.$wa$wGlzEb = function () {
    return this.uf;
  };
  namespace.R7.prototype.$wa$NB8Tmd = function () {
    return this.Af;
  };
  namespace.R7.prototype.$wa$oAxMnf = function () {
    return this.hc;
  };
  namespace.R7.prototype.$wa$D5KV7e = function () {
    return this.Ge;
  };
  namespace.R7.prototype.$wa$DNTNUc = function () {
    return this.Ac;
  };
  namespace.R7.prototype.$wa$AFvrle = function () {
    return this.La;
  };
  namespace.R7.prototype.$wa$siBdCd = function () {
    return this.xc;
  };
  namespace.R7.prototype.$wa$SGRdwb = function () {
    return this.Ca;
  };
  namespace.R7.prototype.$wa$rxqFXd = function () {
    return this.Bc;
  };
  namespace.R7.prototype.$wa$Uex1ad = function () {
    return this.Pb;
  };
  namespace.R7.prototype.$wa$zeJAAd = function () {
    return this.Mb;
  };
  namespace.R7.prototype.$wa$DGXxE = function () {
    return this.Ra;
  };
  namespace.R7.prototype.$wa$nPcntd = function () {
    return this.Ga;
  };
  namespace.R7.prototype.$wa$DtamMe = function () {
    return this.Kb;
  };
  namespace.R7.prototype.$wa$pRhyN = function () {
    return this.Ax;
  };
  namespace.R7.prototype.$wa$N9WUh = function () {
    return this.Roa;
  };
  namespace.R7.prototype.$wa$SQ1Mjf = function () {
    return this.Ba;
  };
  namespace.R7.prototype.$wa$qJhGM = function () {
    return this.Ka;
  };
  namespace.R7.prototype.$wa$vf5hS = function () {
    return this.Nb;
  };
  namespace.R7.prototype.$wa$UVcLVe = function () {
    return this.Lf;
  };
  namespace.R7.prototype.$wa$JrrOHc = function () {
    return this.Qa;
  };
  namespace.R7.prototype.$wa$FLGh5d = function () {
    return this.qe;
  };
  namespace.R7.prototype.$wa$CA8Mtd = function () {
    return this.Fd;
  };
  namespace.R7.prototype.$wa$TrTq0c = function () {
    return this.Qb;
  };
  namespace.R7.prototype.$wa$PJl2Ef = function () {
    return this.Ae;
  };
  namespace.R7.prototype.$wa$jzB25 = function () {
    return this.Jd;
  };
  namespace.R7.prototype.$wa$YDgswc = function () {
    return this.Vb;
  };
  namespace.R7.prototype.$wa$SDpWVc = function () {
    return this.Ed;
  };
  namespace.xs(namespace.UHs, namespace.R7);
  namespace.w();
  namespace.WDe = namespace.x("oQfbDd", []);
  var fn_305, local_12, fn_306, cls_64, fn_307, list_30, local_13;
  namespace.lie = function (list_50) {
    if (!list_50.length) return fn_307();
    var len = list_30.length;
    namespace.Ca(list_30, list_50);
    if (len) return local_13;
    list_50 = list_30;
    var fn_457 = function () {
      var shift = list_50.shift();
      shift = namespace.zI(shift);
      list_50.length && namespace.Vf(shift, fn_457, fn_457);
      return shift;
    };
    return (local_13 = fn_457());
  };
  namespace.zI = function (first_arg, second_arg) {
    var local_44 = second_arg || {};
    second_arg = local_44.document || document;
    var text_5 = namespace.lc(first_arg).toString(),
      element = new namespace.nKa(second_arg).createElement("SCRIPT"),
      obj_21 = { ILd: element, Xba: void 0 },
      wf = new namespace.wf(local_12, obj_21),
      local_45 = null,
      local_46 = local_44.timeout != null ? local_44.timeout : 5e3;
    local_46 > 0 &&
      ((local_45 = window.setTimeout(function () {
        fn_306(element, !0);
        wf.Fna(new cls_64(1, "Timeout reached for loading script " + text_5));
      }, local_46)),
      (obj_21.Xba = local_45));
    element.onload = element.onreadystatechange = function () {
      (element.readyState && element.readyState != "loaded" && element.readyState != "complete") ||
        (fn_306(element, local_44.sgd || !1, local_45), wf.callback(null));
    };
    element.onerror = function () {
      fn_306(element, !0, local_45);
      wf.Fna(new cls_64(0, "Error while loading script " + text_5));
    };
    obj_21 = local_44.attributes || {};
    namespace.Oja(obj_21, { type: "text/javascript", charset: "UTF-8" });
    namespace.Km(element, obj_21);
    namespace.Tc(element, first_arg);
    fn_305(second_arg).appendChild(element);
    return wf;
  };
  fn_305 = function (first_arg) {
    var fm = namespace.Fm("HEAD", first_arg);
    return fm && fm.length !== 0 ? fm[0] : first_arg.documentElement;
  };
  local_12 = function () {
    if (this && this.ILd) {
      let ild = this.ILd;
      ild && ild.tagName == "SCRIPT" && fn_306(ild, !0, this.Xba);
    }
  };
  fn_306 = function (first_arg, second_arg, third_arg) {
    third_arg != null && namespace.ea.clearTimeout(third_arg);
    first_arg.onload = () => {};
    first_arg.onerror = () => {};
    first_arg.onreadystatechange = () => {};
    second_arg &&
      window.setTimeout(function () {
        namespace.Um(first_arg);
      }, 0);
  };
  cls_64 = function (first_arg, second_arg) {
    var local_44 = "Jsloader error (code #" + first_arg + ")";
    second_arg && (local_44 += ": " + second_arg);
    namespace.ca.call(this, local_44);
    this.code = first_arg;
  };
  fn_307 = function () {
    var wf = new namespace.wf();
    wf.callback(null);
    return wf;
  };
  list_30 = [];
  namespace.Xi(cls_64, namespace.ca);
  var fn_308, fn_309, fn_310, fn_311, fn_312, fn_313, fn_314, fn_315, local_14;
  fn_308 = function (first_arg) {
    return local_14
      ? fn_309(first_arg)
      : fn_310(first_arg).then((first_arg_2) => first_arg_2.response);
  };
  fn_309 = function (first_arg) {
    first_arg.headers || (first_arg.headers = new Map());
    first_arg.headers.set("x-sg-e", "1");
    namespace.qnc(first_arg.headers);
    return fn_310(first_arg).then((first_arg_2) => {
      var m_ue = first_arg_2.mUe,
        num_30 = 3;
      m_ue === "s" ? (num_30 = 0) : m_ue === "a" ? (num_30 = 1) : m_ue === "h" && (num_30 = 2);
      return namespace.vnc(
        first_arg_2.response,
        num_30,
        first_arg,
        (first_arg_3) =>
          Promise.resolve(fn_310(first_arg_3).then((first_arg_4) => first_arg_4.response)),
        first_arg_2.eventId
      );
    });
  };
  fn_310 = function ({
    method: arg,
    url: arg_2,
    qYc: arg_3,
    nk: arg_4,
    oz: arg_5,
    headers: arg_6,
    gDa: element
  }) {
    var jf = namespace.Jf(),
      local_44 = fn_315 ? fn_315() : new namespace.Dr();
    local_44.listen("complete", (event) => {
      event = event.target;
      var num_30 = !1;
      event.getResponseHeader("X-Sorry-Redirect") && (num_30 = !0);
      if (event.isSuccess()) {
        namespace.So(arg_4, "st");
        let p_c = event.pC();
        arg_4.jy("bs", p_c.length);
        let local_46 = event.getResponseHeader("x-sg-cs") || "u";
        if (p_c || local_46 === "h" || local_46 === "s") {
          var local_45;
          (event = event.getResponseHeader("x-google-gfe-backend-request-info")) &&
            (event = /eid=([^,]+)/.exec(event)) &&
            (local_45 = event[1]);
          jf.resolve({ response: p_c, mUe: local_46, eventId: local_45 });
        } else
          jf.reject(
            new namespace.$gc("Async response error", arg_5, {
              s: event.getStatus(),
              r: p_c,
              isr: num_30,
              rurl: fn_314(event)
            })
          );
      } else
        (namespace.So(arg_4, "ft"),
          arg_4.log(),
          (local_45 = event.getStatus())
            ? ((local_45 = { s: local_45, isr: num_30, rurl: fn_314(event) }),
              event.M6 === 7 && (local_45.ab = 1),
              jf.reject(new namespace.$gc("Async request error", arg_5, local_45)))
            : jf.reject(new namespace.$gc("Async network error", arg_5)));
    });
    var oa = jf.promise.OA((first_arg) => {
      if (first_arg instanceof namespace.rf) local_44.abort();
      else throw first_arg;
    });
    namespace.So(arg_4, "fr");
    local_44.setWithCredentials(namespace.Mhc);
    arg_6 = arg_6 ? Object.fromEntries(arg_6) : void 0;
    if (element) {
      let fn_457 = () => void local_44.abort();
      if (element.aborted) return (local_44.abort(), jf.reject(fn_311(element)), oa);
      element.addEventListener("abort", fn_457, { once: !0 });
      namespace.Lg(oa, () => {
        element.removeEventListener("abort", fn_457);
      });
    }
    local_44.send(arg_2, arg, arg_3, arg_6);
    return oa;
  };
  fn_311 = function ({ reason: arg }) {
    return arg instanceof DOMException
      ? arg
      : new DOMException(
          arg instanceof Error ? arg.message : arg != null ? String(arg) : "Cancelled",
          "AbortError"
        );
  };
  namespace.Hrc = function (first_arg) {
    return !first_arg || first_arg instanceof Map
      ? new Map(first_arg || [])
      : new Map(Object.entries(first_arg));
  };
  namespace.EA = function (
    first_arg,
    second_arg,
    third_arg,
    fourth_arg,
    fifth_arg,
    sixth_arg,
    seventh_arg = {},
    eighth_arg,
    arg = "insert",
    arg_2 = !1,
    arg_3 = !1,
    arg_4
  ) {
    var irc = namespace.Irc(first_arg);
    irc.start();
    second_arg = namespace.Hrc(second_arg);
    seventh_arg = namespace.Hrc(seventh_arg);
    return namespace.Jrc(
      first_arg,
      second_arg,
      seventh_arg,
      irc,
      "",
      fifth_arg,
      third_arg,
      eighth_arg,
      fourth_arg,
      sixth_arg,
      arg,
      arg_2,
      arg_3,
      arg_4
    );
  };
  namespace.Jrc = function (
    first_arg,
    second_arg,
    third_arg,
    fourth_arg,
    fifth_arg,
    sixth_arg,
    seventh_arg,
    eighth_arg,
    arg,
    arg_2,
    arg_3,
    arg_4 = !1,
    arg_5 = !1,
    arg_6
  ) {
    second_arg.set("_fmt", arg_4 ? "json" : "jspb");
    sixth_arg != null && third_arg.set("q", sixth_arg);
    third_arg = namespace.Xhc(
      first_arg,
      second_arg,
      third_arg,
      "GET",
      fifth_arg,
      seventh_arg,
      eighth_arg,
      arg,
      arg_2,
      arg_3
    );
    fifth_arg = "";
    seventh_arg ? (fifth_arg = seventh_arg) : eighth_arg && (fifth_arg = eighth_arg);
    return namespace.Krc(
      {
        method: "GET",
        url: third_arg,
        nk: fourth_arg,
        oz: first_arg,
        headers: namespace.Uhc(),
        Uq: second_arg,
        gDa: arg_6
      },
      arg_5,
      fifth_arg
    );
  };
  namespace.Krc = function (first_arg, second_arg = !1, third_arg = "") {
    var local_44 = first_arg.Uq?.get("_fmt");
    if (local_44 !== "json" && local_44 !== "jspb") throw Error("Gh");
    first_arg.nk || (first_arg.nk = namespace.Irc(first_arg.oz));
    return fn_308(first_arg)
      .then((text_5) => {
        second_arg && first_arg.nk?.log();
        text_5.startsWith(")]}'\n") && (text_5 = text_5.substr(5));
        try {
          var parse = JSON.parse(text_5);
        } catch (error) {
          return namespace.Vh(error);
        }
        return namespace.Jg(parse) &&
          ((parse = namespace.Gja(parse)), (text_5 = parse.__err__), text_5 !== void 0)
          ? namespace.Vh(text_5)
          : local_44 !== "jspb" || parse instanceof Array
            ? namespace.Sg(parse)
            : namespace.Vh();
      })
      .catch((first_arg_2) =>
        first_arg_2 instanceof namespace.$gc && wnc
          ? fn_313(first_arg_2, second_arg, first_arg, third_arg)
          : namespace.Vh(first_arg_2)
      );
  };
  fn_312 = function (first_arg, second_arg) {
    var local_44 = second_arg.urlParams ? new Map(second_arg.urlParams) : new Map();
    try {
      let hf = new namespace.hf(second_arg.url);
      namespace.Un(hf, "google_abuse", first_arg);
      local_44.set("google_abuse", first_arg);
      second_arg.url = hf.toString();
      second_arg.urlParams = local_44;
    } catch (error) {}
    return second_arg;
  };
  fn_313 = function (first_arg, second_arg, third_arg, fourth_arg) {
    if (namespace.Bhc(first_arg))
      return (
        (first_arg = namespace.Chc(first_arg)),
        (third_arg = fn_312(first_arg, third_arg)),
        namespace.Krc(third_arg, second_arg, fourth_arg)
      );
    var dhc = namespace.Dhc(first_arg);
    if (dhc) {
      namespace.Fhc(dhc, fourth_arg);
      if (!namespace.yhc)
        return namespace.Lg(
          (0, namespace.Ihc)(dhc).then((first_arg_2) => {
            namespace.Ghc(dhc, fourth_arg);
            third_arg = fn_312(first_arg_2, third_arg);
            return namespace.Krc(third_arg, second_arg, fourth_arg);
          }),
          namespace.Ahc
        );
      if (namespace.Jhc)
        return namespace.yhc.promise.then(() => namespace.Krc(third_arg, second_arg, fourth_arg));
    }
    return namespace.Vh(first_arg);
  };
  namespace.Irc = function (first_arg) {
    var to = new namespace.To("async");
    to.Ec("astyp", first_arg);
    return to;
  };
  fn_314 = function (first_arg) {
    try {
      return first_arg.Uo ? first_arg.Uo.responseURL : "";
    } catch (error) {
      return "";
    }
  };
  fn_315 = null;
  local_14 = namespace.Xnc;
  var wnc = namespace.Wnc;
  namespace.v("oQfbDd");
  var fn_316 = function (first_arg) {
      google.log("srpbgd", String(first_arg));
    },
    fn_317 = function () {
      fn_316(11);
    },
    fn_318 = function () {
      fn_316(3);
    },
    fn_319 = function (list_50) {
      num_17 && (list_50 ? (list_50.length > 1875 ? fn_316(10) : fn_316(list_50)) : fn_316(9));
    },
    fn_320 = function (first_arg) {
      try {
        first_arg.invoke(fn_319);
      } catch (error) {
        fn_316(8);
      }
    },
    fn_321 = function (element, second_arg, list_50) {
      var attribute = element.getAttribute(second_arg);
      if (!attribute || !attribute.includes("aclk?")) return !1;
      list_50 = list_50.invoke();
      list_50 =
        typeof list_50 !== "string" || list_50.length > (num_19 ? 1500 : 500) ? void 0 : list_50;
      if (!list_50) return !0;
      attribute = namespace.rc(attribute + `&bg=${list_50}`);
      element.setAttribute(second_arg, namespace.nc(attribute));
      return !0;
    },
    fn_322 = function (first_arg, event) {
      if ((event = namespace.$m(event.target, "A"))) {
        var num_30 = !1;
        if (event.hasAttribute("data-al")) num_30 = !0;
        else {
          let local_44 = event;
          for (; local_44;) {
            if (local_44.id === "tads" || local_44.id === "tadsb") {
              num_30 = !0;
              break;
            }
            local_44 = namespace.Yg(local_44);
          }
        }
        num_30 && (fn_321(event, "href", first_arg) || fn_321(event, "data-rw", first_arg));
      }
    },
    fn_323 = function () {
      var local_44 = null;
      try {
        local_44 = new window.botguard.bg(text);
      } catch (error) {
        fn_316(6);
        return;
      }
      local_44.invoke
        ? num_14 &&
          (num_16 && namespace.De(window, "click", namespace.Wi(fn_322, local_44), !0),
          num_15 && namespace.De(window, "unload", () => fn_320(local_44)),
          num_16 || num_15 || fn_320(local_44))
        : fn_316(7);
    },
    fn_324 = function () {
      num_12 &&
        (window.botguard
          ? window.botguard.bg
            ? num_13
              ? (0, namespace.ho)(fn_323, num_13)
              : fn_323()
            : fn_316(5)
          : fn_316(4));
    },
    fn_325 = function () {
      namespace.Vf(namespace.zI(namespace.gva(text_2), { sgd: !0 }), fn_324, fn_318);
    },
    fn_326 = function () {
      num_11
        ? window.document.readyState === text_3
          ? fn_325()
          : num_18
            ? namespace.Dn(window, "load", fn_325)
            : namespace.Dn(window.document, text_4, fn_325)
        : num_10
          ? (0, namespace.ho)(fn_325, num_10)
          : fn_325();
    },
    fn_327 = function (first_arg) {
      var u_ee = new cls_65(first_arg);
      first_arg
        ? namespace.u(u_ee, 1)
          ? namespace.u(u_ee, 2)
            ? ((first_arg = namespace.u(u_ee, 1)),
              (u_ee = namespace.u(u_ee, 2)),
              (num_8 = !0),
              (text_2 = first_arg),
              (text = u_ee),
              num_9 && fn_326())
            : fn_316(14)
          : fn_316(13)
        : fn_316(12);
    },
    cls_65 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
    },
    num_8 = !1,
    text = "",
    text_2 = "",
    num_9 = !1,
    num_10 = 0,
    num_11 = !1,
    num_12 = !1,
    num_13 = 0,
    num_14 = !1,
    num_15 = !1,
    num_16 = !1,
    num_17 = !1,
    num_18 = !1,
    text_3 = "complete",
    text_4 = "load",
    num_19 = !1;
  namespace.xs(
    namespace.WDe,
    class extends namespace.qs {
      constructor(first_arg) {
        super(first_arg.Ma);
        var bgd = namespace.ea.google.pmc.bgd;
        bgd &&
          !num_8 &&
          (bgd
            ? ("et" in bgd && (num_13 = bgd.et),
              "ed" in bgd && (num_10 = bgd.ed),
              bgd.ea && (num_11 = !0),
              bgd.ei && (num_14 = !0),
              bgd.lr && (num_19 = !0),
              bgd.eu && (num_15 = !0),
              bgd.ac && (num_16 = !0),
              bgd.ep && (num_17 = !0),
              bgd.er && (num_12 = !0),
              bgd.el && (num_9 = !0),
              bgd.as
                ? namespace.EA("bgasy", {}).then(fn_327, fn_317)
                : bgd.i
                  ? bgd.p
                    ? (bgd.wl && (num_18 = !0),
                      bgd.li && ((text_3 = "interactive"), (text_4 = "DOMContentLoaded")),
                      (first_arg = String(bgd.i)),
                      (bgd = String(bgd.p)),
                      (num_8 = !0),
                      (text_2 = first_arg),
                      (text = bgd),
                      num_9 && fn_326())
                    : fn_316(2)
                  : fn_316(1))
            : fn_316(0));
      }
    }
  );
  namespace.w();
  namespace.v("abd");
  var fn_328 = function (list_50) {
    var text_5 = "",
      index = 21;
    for (let index_2 = 0; index_2 < list_50.length; index_2++)
      index_2 % 4 != 3 && ((text_5 += String.fromCharCode(list_50[index_2] ^ index)), index++);
    return text_5;
  };
  namespace.$ye = fn_328([97, 119, 115, 111, 107]);
  namespace.aze = fn_328([97, 119, 115, 111, 107, 123]);
  namespace.bze = fn_328([118, 115, 121, 107, 108, 124, 104, 119, 68, 127, 114, 105, 114]);
  namespace.cze = fn_328([101, 126, 118, 102, 118, 125, 118, 109, 126]);
  namespace.dze = fn_328([116, 116, 115, 108]);
  namespace.eze = fn_328([113, 115, 99, 107]);
  namespace.fze = fn_328([113, 115, 117, 107]);
  namespace.gze = fn_328([
    58, 127, 122, 103, 121, 126, 127, 98, 104, 51, 109, 124, 118, 123, 15, 76, 81, 90, 13, 95, 67,
    76, 64, 118
  ]);
  namespace.w();
  namespace.Yye = namespace.x("TDFkye", []);
  namespace.v("TDFkye");
  var fn_329 = function (element) {
      typeof element === "string" && (element = namespace.Dm(element));
      if (element)
        return (
          namespace.fn(element, "display") !== "none" &&
          namespace.fn(element, "visibility") !== "hidden" &&
          element.offsetHeight > 0
        );
    },
    fn_330 = function (first_arg) {
      var index = 0;
      for (let local_44 in first_arg)
        if (first_arg[local_44].e)
          if (first_arg[local_44].b) index++;
          else return !1;
      return index > 0;
    },
    fn_331 = function (first_arg = {}) {
      var obj_21 = {};
      obj_21[namespace.eze] = { e: !!first_arg[namespace.eze], b: !fn_329(namespace.$ye) };
      obj_21[namespace.fze] = { e: !!first_arg[namespace.fze], b: !fn_329(namespace.aze) };
      return obj_21;
    },
    fn_332 = function (first_arg) {
      var list_50 = [];
      for (let local_44 in first_arg)
        first_arg[local_44].e && list_50.push(`${local_44}:` + (first_arg[local_44].b ? "1" : "0"));
      return list_50.join(",");
    },
    fn_333 = function (first_arg, second_arg) {
      first_arg = String(first_arg);
      second_arg && (first_arg += `,${second_arg}`);
      google.log(namespace.cze, first_arg);
    },
    fn_334 = function (first_arg, second_arg, third_arg = 2) {
      if (third_arg < 1) fn_333(7, second_arg);
      else {
        var image = new Image();
        image.onerror = () => {
          fn_334(first_arg, second_arg, third_arg - 1);
        };
        image.src = first_arg;
      }
    },
    fn_335 = function (first_arg = {}) {
      if (first_arg[namespace.dze] && fn_329(namespace.bze)) {
        first_arg = fn_331(first_arg);
        var local_44 = fn_332(first_arg);
        fn_330(first_arg) ? fn_333(1, "0," + local_44) : fn_333(0, local_44);
        (0, namespace.Kf)(() => {
          fn_334(namespace.gze, "aa");
        });
      }
    };
  namespace.xs(
    namespace.Yye,
    class extends namespace.qs {
      constructor(first_arg) {
        super(first_arg.Ma);
        fn_335(google.pmc.abd);
      }
    }
  );
  namespace.w();
  namespace.dGe = namespace.x("IQw9J", []);
  namespace.cGe = function () {
    var match = namespace.zd().host.match("google(?:\\.[a-z]{2,3}){1,2}$");
    return match ? match[0] : null;
  };
  namespace.v("IQw9J");
  namespace.xs(
    namespace.dGe,
    class extends namespace.qs {
      constructor(first_arg) {
        super(first_arg.Ma);
        if ((first_arg = namespace.ea.google.pmc.foot)) {
          if (first_arg.dv !== void 0 && first_arg.dv !== "")
            try {
              namespace.Ff.set("DV", first_arg.dv, { maxAge: 600 });
            } catch (error) {
              namespace.qf(error, { Ne: { src: "foot" } });
            }
          if (first_arg.dvct !== void 0 && first_arg.dvct !== "")
            try {
              namespace.Ff.set("CONSISTENCY", first_arg.dvct, {
                maxAge: 600,
                domain: namespace.cGe()
              });
            } catch (error) {
              namespace.qf(error, { Ne: { src: "foot" } });
            }
        }
      }
    }
  );
  namespace.w();
  namespace.$Ce = namespace.x("ily0Be", []);
  namespace.mAe = function () {};
  namespace.mAe.prototype.reposition = function () {};
  namespace.Xx = function (
    first_arg,
    second_arg,
    third_arg,
    fourth_arg,
    fifth_arg,
    sixth_arg,
    seventh_arg,
    eighth_arg,
    arg
  ) {
    var yec = namespace.yec(third_arg),
      vn = namespace.vn(first_arg),
      m_la = namespace.mLa(first_arg);
    m_la && vn.intersection(namespace.XKa(m_la));
    m_la = namespace.Me(first_arg);
    var me = namespace.Me(third_arg);
    if (m_la.getDocument() != me.getDocument()) {
      m_la = m_la.getDocument().body;
      {
        var local_44 = m_la;
        me = me.getWindow();
        let de_6 = new namespace.de(0, 0),
          qi = namespace.qi(namespace.se(local_44));
        b: {
          try {
            namespace.cj(qi.parent);
            var num_30 = !0;
            break b;
          } catch (error) {}
          num_30 = !1;
        }
        if (num_30) {
          num_30 = local_44;
          do
            ((local_44 = qi == me ? namespace.jn(num_30) : namespace.sLa(num_30)),
              (de_6.x += local_44.x),
              (de_6.y += local_44.y));
          while (
            qi &&
            qi != me &&
            qi != qi.parent &&
            (num_30 = qi.frameElement) &&
            (qi = qi.parent)
          );
        }
        num_30 = de_6;
      }
      m_la = namespace.kKa(num_30, namespace.jn(m_la));
      vn.left += m_la.x;
      vn.top += m_la.y;
    }
    first_arg = namespace.zec(first_arg, second_arg);
    second_arg = vn.left;
    first_arg & 4 ? (second_arg += vn.width) : first_arg & 2 && (second_arg += vn.width / 2);
    vn = new namespace.de(second_arg, vn.top + (first_arg & 1 ? vn.height : 0));
    vn = namespace.kKa(vn, yec);
    fifth_arg &&
      ((vn.x += (first_arg & 4 ? -1 : 1) * fifth_arg.x),
      (vn.y += (first_arg & 1 ? -1 : 1) * fifth_arg.y));
    if (seventh_arg)
      if (arg) var local_45 = arg;
      else if ((local_45 = namespace.mLa(third_arg)))
        ((local_45.top -= yec.y),
          (local_45.right -= yec.x),
          (local_45.bottom -= yec.y),
          (local_45.left -= yec.x));
    return namespace.Aec(vn, third_arg, fourth_arg, sixth_arg, local_45, seventh_arg, eighth_arg);
  };
  namespace.yec = function (first_arg) {
    if ((first_arg = first_arg.offsetParent)) {
      let local_44 = first_arg.tagName == "HTML" || first_arg.tagName == "BODY";
      if (!local_44 || namespace.ima(first_arg) != "static") {
        var jn = namespace.jn(first_arg);
        local_44 ||
          (jn = namespace.kKa(jn, new namespace.de(namespace.ze(first_arg), first_arg.scrollTop)));
      }
    }
    return jn || new namespace.de();
  };
  namespace.Aec = function (
    first_arg,
    element,
    third_arg,
    fourth_arg,
    fifth_arg,
    sixth_arg,
    seventh_arg
  ) {
    first_arg = first_arg.clone();
    var zec = namespace.zec(element, third_arg);
    third_arg = namespace.sn(element);
    seventh_arg = seventh_arg ? seventh_arg.clone() : third_arg.clone();
    first_arg = namespace.Bec(first_arg, seventh_arg, zec, fourth_arg, fifth_arg, sixth_arg);
    if (first_arg.status & 496) return first_arg.status;
    namespace.hn(element, first_arg.rect.DF());
    seventh_arg = first_arg.rect.getSize();
    namespace.lKa(third_arg, seventh_arg) ||
      ((fourth_arg = seventh_arg),
      (element = element.style),
      namespace.ie
        ? (element.MozBoxSizing = "border-box")
        : namespace.fe
          ? (element.WebkitBoxSizing = "border-box")
          : (element.boxSizing = "border-box"),
      (element.width = Math.max(fourth_arg.width, 0) + "px"),
      (element.height = Math.max(fourth_arg.height, 0) + "px"));
    return first_arg.status;
  };
  namespace.Bec = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg) {
    first_arg = first_arg.clone();
    second_arg = second_arg.clone();
    var num_30 = 0;
    if (fourth_arg || third_arg != 0)
      (third_arg & 4
        ? (first_arg.x -= second_arg.width + (fourth_arg ? fourth_arg.right : 0))
        : third_arg & 2
          ? (first_arg.x -= second_arg.width / 2)
          : fourth_arg && (first_arg.x += fourth_arg.left),
        third_arg & 1
          ? (first_arg.y -= second_arg.height + (fourth_arg ? fourth_arg.bottom : 0))
          : fourth_arg && (first_arg.y += fourth_arg.top));
    if (sixth_arg) {
      if (fifth_arg) {
        num_30 = first_arg;
        third_arg = second_arg;
        fourth_arg = 0;
        (sixth_arg & 65) == 65 &&
          (num_30.x < fifth_arg.left || num_30.x >= fifth_arg.right) &&
          (sixth_arg &= -2);
        (sixth_arg & 132) == 132 &&
          (num_30.y < fifth_arg.top || num_30.y >= fifth_arg.bottom) &&
          (sixth_arg &= -5);
        num_30.x < fifth_arg.left &&
          sixth_arg & 1 &&
          ((num_30.x = fifth_arg.left), (fourth_arg |= 1));
        if (sixth_arg & 16) {
          var local_44 = num_30.x;
          num_30.x < fifth_arg.left && ((num_30.x = fifth_arg.left), (fourth_arg |= 4));
          num_30.x + third_arg.width > fifth_arg.right &&
            ((third_arg.width = Math.min(
              fifth_arg.right - num_30.x,
              local_44 + third_arg.width - fifth_arg.left
            )),
            (third_arg.width = Math.max(third_arg.width, 0)),
            (fourth_arg |= 4));
        }
        num_30.x + third_arg.width > fifth_arg.right &&
          sixth_arg & 1 &&
          ((num_30.x = Math.max(fifth_arg.right - third_arg.width, fifth_arg.left)),
          (fourth_arg |= 1));
        sixth_arg & 2 &&
          (fourth_arg |=
            (num_30.x < fifth_arg.left ? 16 : 0) |
            (num_30.x + third_arg.width > fifth_arg.right ? 32 : 0));
        num_30.y < fifth_arg.top &&
          sixth_arg & 4 &&
          ((num_30.y = fifth_arg.top), (fourth_arg |= 2));
        sixth_arg & 32 &&
          ((local_44 = num_30.y),
          num_30.y < fifth_arg.top && ((num_30.y = fifth_arg.top), (fourth_arg |= 8)),
          num_30.y + third_arg.height > fifth_arg.bottom &&
            ((third_arg.height = Math.min(
              fifth_arg.bottom - num_30.y,
              local_44 + third_arg.height - fifth_arg.top
            )),
            (third_arg.height = Math.max(third_arg.height, 0)),
            (fourth_arg |= 8)));
        num_30.y + third_arg.height > fifth_arg.bottom &&
          sixth_arg & 4 &&
          ((num_30.y = Math.max(fifth_arg.bottom - third_arg.height, fifth_arg.top)),
          (fourth_arg |= 2));
        sixth_arg & 8 &&
          (fourth_arg |=
            (num_30.y < fifth_arg.top ? 64 : 0) |
            (num_30.y + third_arg.height > fifth_arg.bottom ? 128 : 0));
        fifth_arg = fourth_arg;
      } else fifth_arg = 256;
      num_30 = fifth_arg;
    }
    fifth_arg = new namespace.me(0, 0, 0, 0);
    fifth_arg.left = first_arg.x;
    fifth_arg.top = first_arg.y;
    fifth_arg.width = second_arg.width;
    fifth_arg.height = second_arg.height;
    return { rect: fifth_arg, status: num_30 };
  };
  namespace.zec = function (first_arg, second_arg) {
    return (second_arg & 8 && namespace.ye(first_arg) ? second_arg ^ 4 : second_arg) & -9;
  };
  namespace.DBe = function (first_arg, second_arg, third_arg) {
    this.element = first_arg;
    this.kna = second_arg;
    this.Ca = third_arg;
  };
  namespace.Xi(namespace.DBe, namespace.mAe);
  namespace.DBe.prototype.reposition = function (first_arg, second_arg, third_arg) {
    namespace.Xx(this.element, this.kna, first_arg, second_arg, void 0, third_arg, this.Ca);
  };
  namespace.yAe = function (first_arg, second_arg) {
    namespace.xe.call(this);
    this.Aa = new namespace.we(this);
    this.Iqb(first_arg || null);
    second_arg && this.setType(second_arg);
  };
  namespace.zAe = function (first_arg, second_arg) {
    this.Pe = 8;
    this.Nb = second_arg || void 0;
    namespace.yAe.call(this, first_arg);
  };
  namespace.Xi(namespace.yAe, namespace.xe);
  namespace.ba = namespace.yAe.prototype;
  namespace.ba.Xd = null;
  namespace.ba.Ndd = !0;
  namespace.ba.Mdd = null;
  namespace.ba.Hqb = !1;
  namespace.ba.bSc = -1;
  namespace.ba.Gud = !1;
  namespace.ba.fE = "toggle_display";
  namespace.ba.getType = function () {
    return this.fE;
  };
  namespace.ba.setType = function (first_arg) {
    this.fE = first_arg;
  };
  namespace.ba.Ha = function () {
    return this.Xd;
  };
  namespace.ba.Iqb = function (first_arg) {
    namespace.AAe(this);
    this.Xd = first_arg;
  };
  namespace.ba.setAutoHide = function (first_arg) {
    namespace.AAe(this);
    this.Ndd = first_arg;
  };
  namespace.AAe = function (first_arg) {
    if (first_arg.Hqb) throw Error("xa");
  };
  namespace.yAe.prototype.isVisible = function () {
    return this.Hqb;
  };
  namespace.yAe.prototype.setVisible = function (first_arg) {
    this.Ya && this.Ya.stop();
    this.Ra && this.Ra.stop();
    if (first_arg) {
      if (!this.Hqb && this.oWc()) {
        if (!this.Xd) throw Error("ya");
        this.reposition();
        first_arg = namespace.se(this.Xd);
        this.Gud && this.Aa.listen(first_arg, "keydown", this.UKe, !0);
        this.Ndd &&
          (this.Aa.listen(first_arg, "mousedown", this.VKe, !0),
          this.Aa.listen(first_arg, "blur", this.TKe));
        this.fE == "toggle_display" ? this.s2c() : this.fE == "move_offscreen" && this.reposition();
        this.Hqb = !0;
        this.bSc = Date.now();
        if (this.Ya) (namespace.Dn(this.Ya, "end", this.onShow, !1, this), this.Ya.play());
        else this.onShow();
      }
    } else fn_336(this);
  };
  namespace.yAe.prototype.reposition = function () {};
  var fn_336 = function (first_arg, second_arg) {
    if (!first_arg.Hqb || !first_arg.dispatchEvent({ type: "beforehide", target: second_arg }))
      return !1;
    first_arg.Aa && first_arg.Aa.removeAll();
    first_arg.Hqb = !1;
    Date.now();
    first_arg.Ra
      ? (namespace.Dn(first_arg.Ra, "end", namespace.Wi(first_arg.Rhd, second_arg), !1, first_arg),
        first_arg.Ra.play())
      : first_arg.Rhd(second_arg);
    return !0;
  };
  namespace.ba = namespace.yAe.prototype;
  namespace.ba.Rhd = function (first_arg) {
    this.fE == "toggle_display"
      ? this.yNc()
      : this.fE == "move_offscreen" && (this.Xd.style.top = "-10000px");
    this.jN(first_arg);
  };
  namespace.ba.s2c = function () {
    this.Xd.style.visibility = "visible";
    namespace.xn(this.Xd, !0);
  };
  namespace.ba.yNc = function () {
    this.Xd.style.visibility = "hidden";
    namespace.xn(this.Xd, !1);
  };
  namespace.ba.oWc = function () {
    return this.dispatchEvent("beforeshow");
  };
  namespace.ba.onShow = function () {
    this.dispatchEvent("show");
  };
  namespace.ba.jN = function (first_arg) {
    this.dispatchEvent({ type: "hide", target: first_arg });
  };
  namespace.ba.VKe = function (event) {
    event = event.target;
    namespace.kh(this.Xd, event) ||
      fn_337(this, event) ||
      Date.now() - this.bSc < 150 ||
      fn_336(this, event);
  };
  namespace.ba.UKe = function (event) {
    event.keyCode == 27 &&
      fn_336(this, event.target) &&
      (event.preventDefault(), event.stopPropagation());
  };
  namespace.ba.TKe = function (event) {
    var se = namespace.se(this.Xd);
    if (typeof document.activeElement != "undefined") {
      if (
        ((event = se.activeElement),
        !event || namespace.kh(this.Xd, event) || event.tagName == "BODY" || fn_337(this, event))
      )
        return;
    } else if (event.target != se) return;
    Date.now() - this.bSc < 150 || fn_336(this);
  };
  var fn_337 = function (first_arg, second_arg) {
    return namespace.bj(first_arg.Mdd || [], function (first_arg_2) {
      return second_arg === first_arg_2 || namespace.kh(first_arg_2, second_arg);
    });
  };
  namespace.yAe.prototype.Jc = function () {
    namespace.yAe.Qf.Jc.call(this);
    this.Aa.dispose();
    namespace.Id(this.Ya);
    namespace.Id(this.Ra);
    delete this.Xd;
    delete this.Aa;
    delete this.Mdd;
  };
  namespace.Xi(namespace.zAe, namespace.yAe);
  namespace.zAe.prototype.getPosition = function () {
    return this.Nb || null;
  };
  namespace.zAe.prototype.setPosition = function (first_arg) {
    this.Nb = first_arg || void 0;
    this.isVisible() && this.reposition();
  };
  namespace.zAe.prototype.reposition = function () {
    if (this.Nb) {
      var local_44 = !this.isVisible() && this.getType() != "move_offscreen",
        ha = this.Ha();
      local_44 && ((ha.style.visibility = "hidden"), namespace.xn(ha, !0));
      this.Nb.reposition(ha, this.Pe, this.Kk);
      local_44 && namespace.xn(ha, !1);
    }
  };
  var local_15, local_16, local_17, fn_338;
  local_15 = function (first_arg, second_arg) {
    this.ZJb =
      first_arg instanceof namespace.de ? first_arg : new namespace.de(first_arg, second_arg);
  };
  local_16 = function (first_arg, second_arg, third_arg) {
    this.hb = third_arg || (first_arg ? namespace.Me(namespace.Dm(first_arg)) : namespace.Me());
    namespace.zAe.call(this, this.hb.yr("DIV", { style: "position:absolute;display:none;" }));
    this.Ba = new namespace.de(1, 1);
    this.wa = new Set();
    this.Ia = null;
    first_arg && this.attach(first_arg);
    second_arg != null && this.kc(second_arg);
  };
  local_17 = function (first_arg, second_arg, third_arg) {
    local_16.call(this, first_arg, second_arg, third_arg);
  };
  namespace.GCe = function (first_arg, second_arg, third_arg, fourth_arg) {
    local_16.call(this, null, null, third_arg);
    typeof first_arg === "function" ? (this.hc = first_arg) : (this.Fd = first_arg);
    this.uf = second_arg != 0;
    this.Gc = [];
    this.Xc = fourth_arg || (third_arg ? third_arg.getDocument() : document);
    namespace.De(this.Xc, "mouseover", this.qe, !1, this);
  };
  fn_338 = function (first_arg, second_arg) {
    var local_44 =
      second_arg.x < first_arg.left
        ? second_arg.x - first_arg.left
        : second_arg.x > first_arg.right
          ? second_arg.x - first_arg.right
          : 0;
    first_arg =
      second_arg.y < first_arg.top
        ? second_arg.y - first_arg.top
        : second_arg.y > first_arg.bottom
          ? second_arg.y - first_arg.bottom
          : 0;
    return Math.sqrt(local_44 * local_44 + first_arg * first_arg);
  };
  namespace.Xi(local_15, namespace.mAe);
  local_15.prototype.reposition = function (first_arg, second_arg, third_arg, fourth_arg) {
    namespace.Xx(
      namespace.jLa(first_arg),
      0,
      first_arg,
      second_arg,
      this.ZJb,
      third_arg,
      null,
      fourth_arg
    );
  };
  var fn_339;
  namespace.Xi(local_16, namespace.zAe);
  var list_31 = [];
  namespace.ba = local_16.prototype;
  namespace.ba.r5 = null;
  namespace.ba.className = "goog-tooltip";
  namespace.ba.Iab = 500;
  namespace.ba.Lk = function () {
    return this.hb;
  };
  namespace.ba.attach = function (first_arg) {
    first_arg = namespace.Dm(first_arg);
    this.wa.add(first_arg);
    namespace.De(first_arg, "mouseover", this.E4b, !1, this);
    namespace.De(first_arg, "mouseout", this.ixb, !1, this);
    namespace.De(first_arg, "mousemove", this.Ka, !1, this);
    namespace.De(first_arg, "focus", this.Wc, !1, this);
    namespace.De(first_arg, "blur", this.ixb, !1, this);
  };
  namespace.ba.detach = function (first_arg) {
    first_arg
      ? ((first_arg = namespace.Dm(first_arg)), fn_340(this, first_arg), this.wa.delete(first_arg))
      : (this.wa.forEach((first_arg_2) => {
          fn_340(this, first_arg_2);
        }),
        this.wa.clear());
  };
  var fn_340 = function (first_arg, second_arg) {
    namespace.En(second_arg, "mouseover", first_arg.E4b, !1, first_arg);
    namespace.En(second_arg, "mouseout", first_arg.ixb, !1, first_arg);
    namespace.En(second_arg, "mousemove", first_arg.Ka, !1, first_arg);
    namespace.En(second_arg, "focus", first_arg.Wc, !1, first_arg);
    namespace.En(second_arg, "blur", first_arg.ixb, !1, first_arg);
  };
  namespace.ba = local_16.prototype;
  namespace.ba.Ubc = function () {
    return 0;
  };
  namespace.ba.kc = function (first_arg) {
    namespace.Wm(this.Ha(), first_arg);
  };
  namespace.ba.Iqb = function (first_arg) {
    var ha = this.Ha();
    ha && namespace.Um(ha);
    local_16.Qf.Iqb.call(this, first_arg);
    first_arg
      ? ((ha = this.hb.getDocument().body),
        ha.insertBefore(first_arg, ha.lastChild),
        namespace.Id(this.Ia),
        (this.Ia = new namespace.rma(this.Ha())),
        this.we(this.Ia),
        namespace.De(this.Ia, "focusin", this.Ca, void 0, this),
        namespace.De(this.Ia, "focusout", this.wb, void 0, this))
      : (namespace.Id(this.Ia), (this.Ia = null));
  };
  namespace.ba.Rb = function () {
    return namespace.Zm(this.Ha());
  };
  namespace.ba.yQ = function () {
    return this.Ha().innerHTML;
  };
  namespace.ba.getState = function () {
    return this.Ta ? (this.isVisible() ? 4 : 1) : this.Qa ? 3 : this.isVisible() ? 2 : 0;
  };
  namespace.ba.Cgc = function (first_arg) {
    if (!this.isVisible()) return !1;
    var jn = namespace.jn(this.Ha()),
      sn = namespace.sn(this.Ha());
    return (
      jn.x <= first_arg.x &&
      first_arg.x <= jn.x + sn.width &&
      jn.y <= first_arg.y &&
      first_arg.y <= jn.y + sn.height
    );
  };
  namespace.ba.oWc = function () {
    if (!namespace.yAe.prototype.oWc.call(this)) return !1;
    if (this.anchor) {
      var local_44;
      for (let index = 0; (local_44 = list_31[index]); index++)
        namespace.kh(local_44.Ha(), this.anchor) || local_44.setVisible(!1);
    }
    namespace.Raa(list_31, this);
    local_44 = this.Ha();
    local_44.className = this.className;
    this.Ca();
    namespace.De(local_44, "mouseover", this.oc, !1, this);
    namespace.De(local_44, "mouseout", this.Jd, !1, this);
    namespace.KCe(this);
    return !0;
  };
  namespace.ba.jN = function () {
    namespace.xa(list_31, this);
    var ha = this.Ha(),
      local_44;
    for (let index = 0; (local_44 = list_31[index]); index++)
      local_44.anchor && namespace.kh(ha, local_44.anchor) && local_44.setVisible(!1);
    this.Ge && this.Ge.wb();
    namespace.En(ha, "mouseover", this.oc, !1, this);
    namespace.En(ha, "mouseout", this.Jd, !1, this);
    this.anchor = void 0;
    this.getState() == 0 && (this.Pb = !1);
    namespace.yAe.prototype.jN.call(this);
  };
  namespace.ba.eUc = function (first_arg, second_arg) {
    this.anchor == first_arg &&
      this.wa.has(this.anchor) &&
      (this.Pb || !this.Vl
        ? (this.setVisible(!1),
          this.isVisible() ||
            ((this.anchor = first_arg),
            this.setPosition(second_arg || fn_343(this, 0)),
            this.setVisible(!0)))
        : (this.anchor = void 0));
    this.Ta = void 0;
  };
  namespace.ba.Cb = function () {
    return this.wa;
  };
  namespace.ba.Q$c = function (first_arg) {
    this.Qa = void 0;
    if (first_arg == this.anchor) {
      let lk = this.Lk();
      first_arg =
        (first_arg = namespace.bn(lk.ka)) && this.Ha() && lk.contains(this.Ha(), first_arg);
      (this.r5 != null && (this.r5 == this.Ha() || this.wa.has(this.r5))) ||
        first_arg ||
        (this.Oa && this.Oa.r5) ||
        this.setVisible(!1);
    }
  };
  var fn_341 = function (first_arg, event) {
    var vka = namespace.VKa(first_arg.hb);
    first_arg.Ba.x = event.clientX + vka.x;
    first_arg.Ba.y = event.clientY + vka.y;
  };
  local_16.prototype.E4b = function (event) {
    var local_44 = fn_342(this, event.target);
    this.r5 = local_44;
    this.Ca();
    local_44 != this.anchor &&
      ((this.anchor = local_44), fn_339(this, local_44), fn_344(this), fn_341(this, event));
  };
  var fn_342 = function (first_arg, element) {
    try {
      for (; element && !first_arg.wa.has(element);) element = element.parentNode;
      return element;
    } catch (error) {
      return null;
    }
  };
  local_16.prototype.Ka = function (first_arg) {
    fn_341(this, first_arg);
    this.Pb = !0;
  };
  local_16.prototype.Wc = function (event) {
    this.r5 = event = fn_342(this, event.target);
    this.Pb = !0;
    if (this.anchor != event) {
      this.anchor = event;
      let local_44 = fn_343(this, 1);
      this.Ca();
      fn_339(this, event, local_44);
      fn_344(this);
    }
  };
  var fn_343 = function (first_arg, second_arg) {
      return second_arg == 0
        ? ((first_arg = first_arg.Ba.clone()), new fn_345(first_arg))
        : new fn_346(first_arg.r5);
    },
    fn_344 = function (first_arg) {
      if (first_arg.anchor) {
        let local_44;
        for (let index = 0; (local_44 = list_31[index]); index++)
          namespace.kh(local_44.Ha(), first_arg.anchor) &&
            ((local_44.Oa = first_arg), (first_arg.Ge = local_44));
      }
    };
  local_16.prototype.ixb = function (event) {
    var local_44 = fn_342(this, event.target),
      local_45 = fn_342(this, event.relatedTarget);
    local_44 != local_45 &&
      (local_44 == this.r5 && (this.r5 = null),
      namespace.KCe(this),
      (this.Pb = !1),
      !this.isVisible() || (event.relatedTarget && namespace.kh(this.Ha(), event.relatedTarget))
        ? (this.anchor = void 0)
        : this.wb());
  };
  local_16.prototype.oc = function () {
    var ha = this.Ha();
    this.r5 != ha && (this.Ca(), (this.r5 = ha));
  };
  local_16.prototype.Jd = function (first_arg) {
    var ha = this.Ha();
    this.r5 != ha ||
      (first_arg.relatedTarget && namespace.kh(ha, first_arg.relatedTarget)) ||
      ((this.r5 = null), this.wb());
  };
  fn_339 = function (first_arg, second_arg, third_arg) {
    first_arg.Ta ||
      (first_arg.Ta = namespace.Kn(
        first_arg.eUc.bind(first_arg, second_arg, third_arg),
        first_arg.Iab
      ));
  };
  namespace.KCe = function (first_arg) {
    first_arg.Ta && (namespace.Ln(first_arg.Ta), (first_arg.Ta = void 0));
  };
  local_16.prototype.wb = function () {
    this.getState() == 2 && (this.Qa = namespace.Kn(this.Q$c.bind(this, this.anchor), this.Ubc()));
  };
  local_16.prototype.Ca = function () {
    this.Qa && (namespace.Ln(this.Qa), (this.Qa = void 0));
  };
  local_16.prototype.Jc = function () {
    this.setVisible(!1);
    namespace.KCe(this);
    this.detach();
    this.Ha() && namespace.Um(this.Ha());
    this.r5 = null;
    delete this.hb;
    local_16.Qf.Jc.call(this);
  };
  var fn_345 = function (first_arg, second_arg) {
    local_15.call(this, first_arg, second_arg);
  };
  namespace.Xi(fn_345, local_15);
  fn_345.prototype.reposition = function (first_arg, second_arg, third_arg) {
    second_arg = namespace.mLa(namespace.jLa(first_arg));
    third_arg = third_arg
      ? new namespace.le(third_arg.top + 10, third_arg.right, third_arg.bottom, third_arg.left + 10)
      : new namespace.le(10, 0, 0, 10);
    namespace.Aec(this.ZJb, first_arg, 8, third_arg, second_arg, 9) & 496 &&
      namespace.Aec(this.ZJb, first_arg, 8, third_arg, second_arg, 5);
  };
  var fn_346 = function (first_arg) {
    namespace.DBe.call(this, first_arg, 5);
  };
  namespace.Xi(fn_346, namespace.DBe);
  fn_346.prototype.reposition = function (first_arg, second_arg, third_arg) {
    var de_6 = new namespace.de(10, 0);
    namespace.Xx(this.element, this.kna, first_arg, second_arg, de_6, third_arg, 9) & 496 &&
      namespace.Xx(this.element, 4, first_arg, 1, de_6, third_arg, 5);
  };
  namespace.Xi(local_17, local_16);
  namespace.ba = local_17.prototype;
  namespace.ba.ree = !1;
  namespace.ba.YGb = !1;
  namespace.ba.onShow = function () {
    local_17.Qf.onShow.call(this);
    this.Mb = namespace.WKa(namespace.vn(this.Ha()));
    this.anchor && (this.Vb = namespace.WKa(namespace.vn(this.anchor)));
    this.YGb = this.ree;
    namespace.De(this.Lk().getDocument(), "mousemove", this.Ka, !1, this);
  };
  namespace.ba.jN = function () {
    namespace.En(this.Lk().getDocument(), "mousemove", this.Ka, !1, this);
    this.Vb = this.Mb = null;
    this.YGb = !1;
    local_17.Qf.jN.call(this);
  };
  namespace.ba.Cgc = function (first_arg) {
    if (this.rb) {
      let jn = namespace.jn(this.Ha()),
        sn = namespace.sn(this.Ha());
      return (
        jn.x - this.rb.left <= first_arg.x &&
        first_arg.x <= jn.x + sn.width + this.rb.right &&
        jn.y - this.rb.top <= first_arg.y &&
        first_arg.y <= jn.y + sn.height + this.rb.bottom
      );
    }
    return local_17.Qf.Cgc.call(this, first_arg);
  };
  var fn_347 = function (first_arg, second_arg) {
    if ((first_arg.Vb && first_arg.Vb.contains(second_arg)) || first_arg.Cgc(second_arg)) return !0;
    first_arg = first_arg.Oa;
    return !!first_arg && first_arg.Cgc(second_arg);
  };
  local_17.prototype.Q$c = function (first_arg) {
    this.Qa = void 0;
    first_arg != this.anchor ||
      fn_347(this, this.Ba) ||
      this.r5 ||
      (this.Oa && this.Oa.r5) ||
      (namespace.ie && this.Ba.x == 0 && this.Ba.y == 0) ||
      this.setVisible(!1);
  };
  local_17.prototype.Ka = function (event) {
    var visible = this.isVisible();
    if (this.Mb) {
      var vka = namespace.VKa(this.Lk());
      vka = new namespace.de(event.clientX + vka.x, event.clientY + vka.y);
      fn_347(this, vka)
        ? (visible = !1)
        : this.YGb && (visible = fn_338(this.Mb, vka) >= fn_338(this.Mb, this.Ba));
    }
    if (visible) {
      if ((this.wb(), (this.r5 = null), (visible = this.Oa))) visible.r5 = null;
    } else this.getState() == 3 && this.Ca();
    local_17.Qf.Ka.call(this, event);
  };
  local_17.prototype.oc = function () {
    this.r5 != this.Ha() && ((this.YGb = !1), (this.r5 = this.Ha()));
  };
  local_17.prototype.Ubc = function () {
    return this.YGb ? 100 : local_17.Qf.Ubc.call(this);
  };
  var fn_348;
  namespace.Xi(namespace.GCe, local_17);
  namespace.GCe.prototype.Jc = function () {
    namespace.GCe.Qf.Jc.call(this);
    namespace.En(this.Xc, "mouseover", this.qe, !1, this);
  };
  namespace.GCe.prototype.hc = function (element) {
    return element.tagName in this.Fd && !!element.getAttribute(this.Fd[element.tagName]);
  };
  namespace.GCe.prototype.qe = function (event) {
    if ((event = event.target))
      this.hc(event)
        ? (this.setPosition(null), this.Qb(event))
        : this.uf &&
          (event = namespace.Zg(event, (first_arg) => this.hc(first_arg), !1, this.F$)) &&
          (this.setPosition(null), this.Qb(event));
  };
  namespace.GCe.prototype.Qb = function (first_arg) {
    if (first_arg == this.Ga) this.Ca();
    else if (first_arg != this.anchor) {
      if (this.getState() == 1 || this.getState() == 4) (namespace.KCe(this), namespace.TCe(this));
      var uce = new fn_349("trigger", this, first_arg, void 0);
      this.Cb().has(first_arg) || (this.attach(first_arg), this.Gc.push(first_arg));
      this.anchor = first_arg;
      this.dispatchEvent(uce)
        ? ((uce = this.getPosition()), fn_339(this, first_arg, uce))
        : namespace.TCe(this);
    }
  };
  fn_348 = function (first_arg, second_arg) {
    if (second_arg) {
      let pos = first_arg.Gc.indexOf(second_arg);
      pos != -1 && (first_arg.detach(second_arg), first_arg.Gc.splice(pos, 1));
    }
  };
  namespace.TCe = function (first_arg) {
    first_arg.dispatchEvent(new fn_349("canceltrigger", first_arg, first_arg.anchor || null));
    fn_348(first_arg, first_arg.anchor);
    delete first_arg.anchor;
  };
  namespace.ba = namespace.GCe.prototype;
  namespace.ba.kX = function () {
    return this.Ga || this.anchor;
  };
  namespace.ba.jN = function () {
    namespace.GCe.Qf.jN.call(this);
    null != this.Ga && fn_348(this, this.Ga);
    this.Ga = null;
  };
  namespace.ba.E4b = function (event) {
    var local_44 = fn_342(this, event.target);
    local_44 && local_44 != this.anchor
      ? this.Qb(local_44)
      : namespace.GCe.Qf.E4b.call(this, event);
  };
  namespace.ba.ixb = function (first_arg) {
    var anchor = this.anchor,
      state = this.getState();
    namespace.GCe.Qf.ixb.call(this, first_arg);
    state == this.getState() ||
      (state != 1 && state != 4) ||
      ((this.anchor = anchor), namespace.TCe(this));
  };
  namespace.ba.eUc = function (first_arg, second_arg) {
    namespace.GCe.Qf.eUc.call(this, first_arg, second_arg);
    this.isVisible()
      ? (first_arg != this.Ga && fn_348(this, this.Ga), (this.Ga = first_arg))
      : (namespace.KCe(this), namespace.TCe(this));
  };
  var fn_349 = function (first_arg, second_arg, third_arg, fourth_arg) {
    namespace.ue.call(this, first_arg, second_arg);
    this.anchor = third_arg;
    this.data = fourth_arg;
  };
  namespace.Xi(fn_349, namespace.ue);
  namespace.eJ = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
    getUrl() {
      return namespace.u(this, 1);
    }
    Pd() {
      return namespace.Ch(this, 1);
    }
    oa() {
      return namespace.Kj(this, 1);
    }
    getHeight() {
      return namespace.$e(this, 2);
    }
    setHeight(first_arg) {
      return namespace.tk(this, 2, first_arg);
    }
    zi() {
      return namespace.Ze(this, 2);
    }
    Aa() {
      return namespace.Ij(this, 2);
    }
    getWidth() {
      return namespace.$e(this, 3);
    }
    uj() {
      return namespace.Ze(this, 3);
    }
    wa() {
      return namespace.Ij(this, 3);
    }
  };
  namespace.eJ.prototype.Za = "zqxxm";
  namespace.Die = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
    Aa() {
      return namespace.u(this, 1);
    }
    Ia() {
      return namespace.u(this, 2);
    }
    Ca() {
      return namespace.u(this, 3);
    }
    Ba() {
      return namespace.u(this, 4);
    }
    oa() {
      return namespace.u(this, 5);
    }
    wa() {
      return namespace.u(this, 6);
    }
    Ka() {
      return namespace.u(this, 7);
    }
  };
  namespace.Die.prototype.Za = "I5TM3";
  var cls_66 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
    oa() {
      return namespace.A(this, 1);
    }
  };
  cls_66.prototype.Za = "pZHYVd";
  var cls_67 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
    wa() {
      return namespace.A(this, 1);
    }
    Aa() {
      return namespace.ni(this, 1);
    }
    oa() {
      return namespace.ni(this, 2);
    }
    Ba() {
      return namespace.ni(this, 3);
    }
  };
  cls_67.prototype.Za = "L63THe";
  namespace.fJ = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg, 37);
    }
    Ca() {
      return namespace.Qj(this, 1);
    }
    Ia(first_arg) {
      return namespace.li(this, 1, first_arg);
    }
    wa() {
      return namespace.oi(this, 1);
    }
    getUniqueId() {
      return namespace.u(this, 2);
    }
    wb() {
      return namespace.Ch(this, 2);
    }
    Aa() {
      return namespace.Kj(this, 2);
    }
    Qh() {
      return namespace.p(this, namespace.eJ, 3);
    }
    ZB() {
      return namespace.gj(this, 3);
    }
    LM() {
      return namespace.p(this, namespace.eJ, 4);
    }
    rb(first_arg) {
      namespace.rh(this, 5, first_arg);
    }
    Qa() {
      return namespace.Kj(this, 5);
    }
    uI() {
      return namespace.oi(this, 6);
    }
    Kj() {
      return namespace.u(this, 7);
    }
    sC() {
      return namespace.Ch(this, 7);
    }
    kb() {
      return namespace.ni(this, 9);
    }
    Ba() {
      return namespace.ni(this, 22);
    }
    Ka() {
      return namespace.ni(this, 36);
    }
    Kb() {
      return namespace.A(this, 25);
    }
    Ta() {
      return namespace.ni(this, 25);
    }
    yb() {
      return namespace.Ch(this, 29);
    }
    La() {
      return namespace.p(this, cls_67, 31);
    }
    hb() {
      return namespace.p(this, namespace.Die, 32);
    }
    Ya() {
      return namespace.p(this, cls_66, 34);
    }
    Ra() {
      return namespace.u(this, 35);
    }
  };
  namespace.uze = {};
  namespace.fJ.prototype.Za = "XZxcdf";
  namespace.pCe = function (first_arg, second_arg) {
    return namespace.rh(first_arg, 9, second_arg);
  };
  namespace.qCe = function (first_arg, second_arg) {
    return namespace.rh(first_arg, 12, second_arg);
  };
  namespace.rCe = function (first_arg, second_arg) {
    return namespace.tk(first_arg, 3, second_arg);
  };
  namespace.sCe = function (first_arg, second_arg) {
    return namespace.rh(first_arg, 2, second_arg);
  };
  namespace.tCe = function (first_arg, second_arg) {
    return namespace.Hb(first_arg, namespace.eJ, 3, second_arg);
  };
  namespace.uCe = function (first_arg, second_arg) {
    return namespace.Hb(first_arg, namespace.eJ, 4, second_arg);
  };
  var list_32 = [0, namespace.C, namespace.B];
  var cls_68 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
    Aa() {
      return namespace.Kj(this, 1);
    }
    wa() {
      return namespace.Wj(this, 2, void 0);
    }
    RNb() {
      return namespace.Xj(this, 2);
    }
    oa() {
      return namespace.Kj(this, 4);
    }
  };
  cls_68.prototype.Za = "FFahJe";
  var list_33 = [0, namespace.C, namespace.Nl, namespace.Cl, namespace.C];
  var cls_69 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
  };
  cls_69.prototype.Za = "IV0Wqf";
  var list_34 = [0, namespace.C, -1];
  namespace.ACe = function (first_arg, second_arg) {
    return namespace.rh(first_arg, 3, second_arg);
  };
  namespace.BCe = function (first_arg, second_arg) {
    return namespace.rh(first_arg, 4, second_arg);
  };
  namespace.CCe = function (first_arg, second_arg) {
    return namespace.rh(first_arg, 13, second_arg);
  };
  namespace.DCe = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg, 38);
    }
    Pbc() {
      return namespace.Kj(this, 1);
    }
    c4a() {
      return namespace.u(this, 2);
    }
    Qfb() {
      return namespace.Kj(this, 2);
    }
    rE() {
      return namespace.u(this, 3);
    }
    jka() {
      return namespace.Kj(this, 3);
    }
    pE() {
      return namespace.u(this, 4);
    }
    ioa() {
      return namespace.Kj(this, 4);
    }
    Aoe() {
      return namespace.Kj(this, 37);
    }
    Of() {
      return namespace.u(this, 5);
    }
    Bx() {
      return namespace.Ch(this, 5);
    }
    Ba() {
      return namespace.A(this, 6);
    }
    wa(first_arg) {
      namespace.mi(this, 6, first_arg);
    }
    oa() {
      return namespace.u(this, 8);
    }
    Ka() {
      return namespace.ni(this, 36);
    }
    Aa() {
      return namespace.A(this, 10);
    }
    qya() {
      return namespace.u(this, 11);
    }
    S3() {
      return namespace.u(this, 13);
    }
    Axb() {
      return namespace.Ch(this, 13);
    }
    qoa() {
      return namespace.Kj(this, 13);
    }
    Vbc() {
      return namespace.u(this, 18);
    }
    BJc() {
      return namespace.Kj(this, 18);
    }
    FJc() {
      return namespace.p(this, cls_68, 19);
    }
    wec() {
      return namespace.gj(this, 19);
    }
    Spe() {
      return namespace.ni(this, 28);
    }
    Ia() {
      return namespace.u(this, 29);
    }
    jn() {
      return namespace.u(this, 31);
    }
    Ca() {
      return namespace.Kj(this, 31);
    }
    ydc() {
      return namespace.p(this, cls_69, 32);
    }
    Apd() {
      return namespace.Kj(this, 34);
    }
  };
  namespace.DCe.prototype.Za = "onFC6b";
  namespace.tJ = namespace.Ib(2003, namespace.fJ, namespace.DCe);
  namespace.uze[2003] = [
    -38,
    {},
    namespace.C,
    -4,
    namespace.B,
    1,
    namespace.C,
    1,
    namespace.B,
    namespace.C,
    namespace.B,
    namespace.C,
    4,
    namespace.C,
    list_33,
    1,
    list_32,
    1,
    namespace.B,
    1,
    namespace.B,
    2,
    namespace.B,
    namespace.C,
    1,
    namespace.C,
    list_34,
    1,
    namespace.C,
    namespace.Io,
    namespace.B,
    namespace.C
  ];
  var fn_350;
  fn_350 = function (list_50, second_arg) {
    for (let index = 0; index < list_50.length; ++index) {
      var zg = namespace.zg(list_50[index], second_arg);
      if (zg) {
        zg = zg.match(/\S+/g) || [];
        for (let index_2 = 0; index_2 < zg.length; index_2++)
          zg[index_2] === "img.l" && namespace.ih(list_50[index], "BUYwVb");
      }
    }
  };
  namespace.fCe = function (first_arg) {
    first_arg = namespace.eCe(["xpdxpnd", "mod"], first_arg);
    fn_350(first_arg, "cact");
  };
  namespace.gCe = function (first_arg) {
    first_arg = namespace.eCe(["xpdxpnd", "mod"], first_arg);
    fn_350(first_arg, "eact");
  };
  namespace.hCe = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
    function fn_457(first_arg_2, second_arg_2) {
      for (let local_44 of first_arg_2)
        namespace.Bg(local_44, "nlvc") ||
          (namespace.af(local_44) && list_50.push(new namespace.bo(local_44, second_arg_2)));
    }
    if (!namespace.Bg(second_arg, "nlvc")) {
      var list_50 = [];
      third_arg === "expanding"
        ? (fn_457(fourth_arg, "show"), fn_457(fifth_arg, "hide"), (second_arg = 1))
        : (fn_457(fourth_arg, "hide"), fn_457(fifth_arg, "show"), (second_arg = 2));
      namespace.Tv(list_50, {
        triggerElement: first_arg || void 0,
        hj: second_arg,
        data: { ct: "knowledge_expander_toggle", cad: third_arg }
      });
    }
  };
  namespace.iCe = function (first_arg) {
    return namespace.Nd(first_arg, "xpdopen");
  };
  namespace.jCe = function (first_arg) {
    return namespace.an(first_arg, "xpdbox");
  };
  namespace.eCe = function (list_50, element) {
    var list_51 = [];
    list_50 = element.querySelectorAll("." + list_50.join(", ."));
    for (let index = 0; index < list_50.length; ++index)
      namespace.jCe(list_50[index]) === element && list_51.push(list_50[index]);
    return list_51;
  };
  namespace.kCe = function (list_50) {
    list_50 = namespace.eCe(["vk_arc"], list_50);
    return list_50.length > 0 ? list_50[0] : null;
  };
  namespace.lCe = function (first_arg, second_arg) {
    namespace.xn(first_arg, second_arg);
    (first_arg = namespace.jCe(first_arg)) &&
      (second_arg ? namespace.Cg(first_arg, "nlvc") : namespace.vg(first_arg, "nlvc", "1"));
  };
  namespace.mCe = function (element, second_arg) {
    var k_ce = namespace.kCe(element);
    if (k_ce !== null || element.querySelector("[data-inside-content-expander-position]"))
      (k_ce !== null &&
        (namespace.pe(k_ce, "expanded", second_arg ? "true" : "false"),
        k_ce.hasAttribute("aria-label") &&
          namespace.cma(k_ce, second_arg ? "Show less" : "Show more")),
        (k_ce = `.${second_arg ? "xpdclps" : "xpdxpnd"}`),
        namespace.Ha(
          element.querySelectorAll(`.${second_arg ? "xpdxpnd" : "xpdclps"}`),
          (first_arg) => {
            namespace.$Be(first_arg);
          }
        ),
        namespace.Ha(element.querySelectorAll(k_ce), (first_arg) => {
          namespace.XBe(first_arg);
        }));
  };
  namespace.nCe = function (first_arg, event) {
    event = event ? event.srcElement || event.target : null;
    return !(event && event !== first_arg && namespace.$m(event, "LI", "bili"));
  };
  namespace.oCe = function (first_arg) {
    var event = first_arg.event;
    first_arg = first_arg.nb.el();
    var ysa = namespace.ysa(event);
    ysa && (event = ysa);
    return namespace.nCe(first_arg, event);
  };
  namespace.KAe = function (text_5) {
    return text_5.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
  };
  namespace.mJ = function () {};
  namespace.MAe = function (first_arg, second_arg) {
    if (!first_arg) throw Error("hk`" + first_arg);
    if (typeof second_arg !== "function") throw Error("ik`" + second_arg);
    namespace.LAe[first_arg] = second_arg;
  };
  namespace.nJ = function (first_arg, second_arg, third_arg) {
    namespace.Ne.call(this, third_arg);
    if (!second_arg) {
      for (second_arg = this.constructor; second_arg;) {
        var xf_2 = namespace.xf(second_arg);
        if ((xf_2 = local_19[xf_2])) break;
        second_arg =
          (second_arg = Object.getPrototypeOf(second_arg.prototype)) && second_arg.constructor;
      }
      second_arg = xf_2
        ? typeof xf_2.getInstance === "function"
          ? xf_2.getInstance()
          : new xf_2()
        : null;
    }
    this.oa = second_arg;
    this.Dab = first_arg !== void 0 ? first_arg : null;
    this.rb = null;
  };
  namespace.OAe = function (first_arg, second_arg) {
    switch (first_arg) {
      case 1:
        return second_arg ? "disable" : "enable";
      case 2:
        return second_arg ? "highlight" : "unhighlight";
      case 4:
        return second_arg ? "activate" : "deactivate";
      case 8:
        return second_arg ? "select" : "unselect";
      case 16:
        return second_arg ? "check" : "uncheck";
      case 32:
        return second_arg ? "focus" : "blur";
      case 64:
        return second_arg ? "open" : "close";
    }
    throw Error("qa");
  };
  var local_18;
  namespace.Ui(namespace.mJ);
  var obj_20 = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
  };
  namespace.ba = namespace.mJ.prototype;
  namespace.ba.uV = function () {};
  namespace.ba.G7 = function (first_arg) {
    return first_arg
      .Lk()
      .yr("DIV", namespace.RAe(this, first_arg).join(" "), first_arg.getContent());
  };
  namespace.ba.Fma = function (first_arg) {
    return first_arg;
  };
  namespace.ba.I0a = function () {
    return !0;
  };
  namespace.ba.Pw = function (first_arg, second_arg) {
    second_arg.id && first_arg.Uc(second_arg.id);
    var fma = this.Fma(second_arg);
    fma && fma.firstChild
      ? fn_353(
          first_arg,
          fma.firstChild.nextSibling ? namespace.Aa(fma.childNodes) : fma.firstChild
        )
      : (first_arg.Dab = null);
    var num_30 = 0,
      j_c = this.jC(),
      j_c_2 = this.jC(),
      num_31 = !1,
      num_32 = !1,
      aa_2 = namespace.Aa(namespace.Rla(second_arg));
    aa_2.forEach(function (first_arg_2) {
      num_31 || first_arg_2 != j_c
        ? num_32 || first_arg_2 != j_c_2
          ? (num_30 |= this.Aa(first_arg_2))
          : (num_32 = !0)
        : ((num_31 = !0), j_c_2 == j_c && (num_32 = !0));
      this.Aa(first_arg_2) == 1 && namespace.PKa(fma) && namespace.Xm(fma, !1);
    }, this);
    first_arg.Bf = num_30;
    num_31 || (aa_2.push(j_c), j_c_2 == j_c && (num_32 = !0));
    num_32 || aa_2.push(j_c_2);
    (first_arg = first_arg.KGc) && aa_2.push.apply(aa_2, first_arg);
    (num_31 && num_32 && !first_arg) || namespace.Ld(second_arg, aa_2.join(" "));
    return second_arg;
  };
  namespace.ba.w4b = function (first_arg) {
    namespace.EAe(first_arg) && this.uvc(first_arg.Ha(), !0);
    first_arg.isEnabled() && this.ria(first_arg, first_arg.isVisible());
  };
  namespace.TAe = function (first_arg, second_arg, third_arg) {
    if ((first_arg = third_arg || first_arg.uV()))
      ((third_arg = namespace.Zla(second_arg)),
        first_arg != third_arg && namespace.oe(second_arg, first_arg));
  };
  namespace.UAe = function (first_arg, second_arg, third_arg) {
    var hf = second_arg.Hf();
    hf != null && first_arg.xn(third_arg, hf);
    second_arg.isVisible() || namespace.pe(third_arg, "hidden", !second_arg.isVisible());
    second_arg.isEnabled() || first_arg.OJa(third_arg, 1, !second_arg.isEnabled());
    namespace.oJ(second_arg, 8) && first_arg.OJa(third_arg, 8, second_arg.isSelected());
    namespace.oJ(second_arg, 16) && first_arg.OJa(third_arg, 16, second_arg.isChecked());
    namespace.oJ(second_arg, 64) && first_arg.OJa(third_arg, 64, second_arg.isOpen());
  };
  namespace.ba = namespace.mJ.prototype;
  namespace.ba.xn = function (first_arg, second_arg) {
    namespace.cma(first_arg, second_arg);
  };
  namespace.ba.x4b = function (first_arg, second_arg) {
    namespace.xLa(first_arg, !second_arg, !0);
  };
  namespace.ba.uvc = function (first_arg, second_arg) {
    var local_44 = this.jC() + "-rtl";
    (first_arg = first_arg.Ha ? first_arg.Ha() : first_arg) &&
      (second_arg ? namespace.Qd : namespace.Sd)(first_arg, [local_44]);
  };
  namespace.ba.tvc = function (first_arg) {
    var local_44;
    return namespace.oJ(first_arg, 32) && (local_44 = first_arg.Ha())
      ? namespace.PKa(local_44)
      : !1;
  };
  namespace.ba.ria = function (first_arg, second_arg) {
    var element;
    if (namespace.oJ(first_arg, 32) && (element = first_arg.Ha())) {
      if (!second_arg && first_arg.Sl()) {
        try {
          element.blur();
        } catch (error) {}
        first_arg.Sl() && first_arg.y4b(null);
      }
      namespace.PKa(element) != second_arg && namespace.Xm(element, second_arg);
    }
  };
  namespace.ba.setVisible = function (first_arg, second_arg) {
    namespace.xn(first_arg, second_arg);
    first_arg && namespace.pe(first_arg, "hidden", !second_arg);
  };
  namespace.ba.setState = function (first_arg, second_arg, third_arg) {
    var ha = first_arg.Ha();
    if (ha) {
      var ka = this.ka(second_arg);
      ka &&
        (first_arg = first_arg.Ha ? first_arg.Ha() : first_arg) &&
        (third_arg ? namespace.Qd : namespace.Sd)(first_arg, [ka]);
      this.OJa(ha, second_arg, third_arg);
    }
  };
  namespace.ba.OJa = function (first_arg, second_arg, third_arg) {
    local_18 ||= { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" };
    second_arg = local_18[second_arg];
    var zla = namespace.Zla(first_arg);
    zla &&
      ((zla = obj_20[zla] || second_arg),
      (second_arg = second_arg == "checked" || second_arg == "selected" ? zla : second_arg));
    second_arg && namespace.pe(first_arg, second_arg, third_arg);
  };
  namespace.ba.setContent = function (fn_457, list_50) {
    var fma = this.Fma(fn_457);
    fma &&
      (namespace.Qm(fma),
      list_50 &&
        (typeof list_50 === "string"
          ? namespace.Wm(fma, list_50)
          : ((fn_457 = function (first_arg) {
              if (first_arg) {
                let se = namespace.se(fma);
                fma.appendChild(
                  typeof first_arg === "string" ? se.createTextNode(first_arg) : first_arg
                );
              }
            }),
            Array.isArray(list_50)
              ? list_50.forEach(fn_457)
              : !namespace.Ba(list_50) || "nodeType" in list_50
                ? fn_457(list_50)
                : namespace.Aa(list_50).forEach(fn_457))));
  };
  namespace.ba.jC = function () {
    return "goog-control";
  };
  namespace.RAe = function (first_arg, second_arg) {
    var j_c = first_arg.jC(),
      list_50 = [j_c],
      j_c_2 = first_arg.jC();
    j_c_2 != j_c && list_50.push(j_c_2);
    j_c = second_arg.getState();
    for (j_c_2 = []; j_c;) {
      let num_30 = j_c & -j_c;
      j_c_2.push(first_arg.ka(num_30));
      j_c &= ~num_30;
    }
    list_50.push.apply(list_50, j_c_2);
    (first_arg = second_arg.KGc) && list_50.push.apply(list_50, first_arg);
    return list_50;
  };
  namespace.mJ.prototype.ka = function (first_arg) {
    this.oa || fn_351(this);
    return this.oa[first_arg];
  };
  namespace.mJ.prototype.Aa = function (first_arg) {
    this.Ra || (this.oa || fn_351(this), (this.Ra = namespace.Mja(this.oa)));
    first_arg = parseInt(this.Ra[first_arg], 10);
    return isNaN(first_arg) ? 0 : first_arg;
  };
  var fn_351 = function (first_arg) {
    var j_c = first_arg.jC();
    namespace.ka(j_c.replace(/\xa0|\s/g, " "), " ");
    first_arg.oa = {
      1: j_c + "-disabled",
      2: j_c + "-hover",
      4: j_c + "-active",
      8: j_c + "-selected",
      16: j_c + "-checked",
      32: j_c + "-focused",
      64: j_c + "-open"
    };
  };
  namespace.WAe = {
    gHb: "mousedown",
    hHb: "mouseup",
    fHb: "mousecancel",
    YLf: "mousemove",
    aMf: "mouseover",
    ZLf: "mouseout",
    WLf: "mouseenter",
    XLf: "mouseleave"
  };
  var local_19;
  local_19 = {};
  namespace.LAe = {};
  namespace.Xi(namespace.nJ, namespace.Ne);
  namespace.ba = namespace.nJ.prototype;
  namespace.ba.Dab = null;
  namespace.ba.Bf = 0;
  namespace.ba.k1b = 39;
  namespace.ba.ezc = 255;
  namespace.ba.eob = 0;
  namespace.ba.A4b = !0;
  namespace.ba.KGc = null;
  namespace.ba.NLc = !0;
  namespace.ba.M5b = !1;
  namespace.ba.vvc = null;
  namespace.YAe = function (first_arg, second_arg) {
    first_arg.vH() && second_arg != first_arg.NLc && fn_352(first_arg, second_arg);
    first_arg.NLc = second_arg;
  };
  namespace.ba = namespace.nJ.prototype;
  namespace.ba.dS = function () {
    return this.oa;
  };
  namespace.ba.t_b = function (first_arg) {
    if (this.vH()) throw Error("ta");
    this.Ha() && (this.Xd = null);
    this.oa = first_arg;
  };
  namespace.ba.cM = function () {
    var g7 = this.oa.G7(this);
    this.Xd = g7;
    namespace.TAe(this.oa, g7, this.VGb());
    this.M5b || this.oa.x4b(g7, !1);
    this.isVisible() || this.oa.setVisible(g7, !1);
  };
  namespace.ba.VGb = function () {
    return this.vvc;
  };
  namespace.ba.Hf = function () {
    return this.rb;
  };
  namespace.ba.xn = function (first_arg) {
    this.rb = first_arg;
    var ha = this.Ha();
    ha && this.oa.xn(ha, first_arg);
  };
  namespace.ba.LW = function () {
    return this.oa.Fma(this.Ha());
  };
  namespace.ba.QGb = function (first_arg) {
    return this.oa.I0a(first_arg);
  };
  namespace.ba.cX = function (element) {
    this.Xd = element = this.oa.Pw(this, element);
    namespace.TAe(this.oa, element, this.VGb());
    this.M5b || this.oa.x4b(element, !1);
    this.A4b = element.style.display != "none";
  };
  namespace.ba.qx = function () {
    namespace.nJ.Qf.qx.call(this);
    namespace.UAe(this.oa, this, this.Xd);
    this.oa.w4b(this);
    if (this.k1b & -2 && (this.NLc && fn_352(this, !0), namespace.oJ(this, 32))) {
      let ha = this.Ha();
      if (ha) {
        let local_44 = this.Ba || (this.Ba = new namespace.lJ());
        local_44.attach(ha);
        namespace
          .Mn(this)
          .listen(local_44, "key", this.EX)
          .listen(ha, "focus", this.c0d)
          .listen(ha, "blur", this.y4b);
      }
    }
  };
  var fn_352 = function (first_arg, second_arg) {
    var mn = namespace.Mn(first_arg),
      ha = first_arg.Ha();
    second_arg
      ? (mn
          .listen(ha, namespace.WAe.gHb, first_arg.YCa)
          .listen(ha, [namespace.WAe.hHb, namespace.WAe.fHb], first_arg.cra)
          .listen(ha, "mouseover", first_arg.WGb)
          .listen(ha, "mouseout", first_arg.Ya),
        first_arg.Ka != namespace.Jn && mn.listen(ha, "contextmenu", first_arg.Ka))
      : (mn
          .unlisten(ha, namespace.WAe.gHb, first_arg.YCa)
          .unlisten(ha, [namespace.WAe.hHb, namespace.WAe.fHb], first_arg.cra)
          .unlisten(ha, "mouseover", first_arg.WGb)
          .unlisten(ha, "mouseout", first_arg.Ya),
        first_arg.Ka != namespace.Jn && mn.unlisten(ha, "contextmenu", first_arg.Ka));
  };
  namespace.nJ.prototype.VR = function () {
    namespace.nJ.Qf.VR.call(this);
    this.Ba && this.Ba.detach();
    this.isVisible() && this.isEnabled() && this.oa.ria(this, !1);
  };
  namespace.nJ.prototype.Jc = function () {
    namespace.nJ.Qf.Jc.call(this);
    this.Ba && (this.Ba.dispose(), delete this.Ba);
    delete this.oa;
    this.KGc = this.Dab = null;
  };
  namespace.nJ.prototype.getContent = function () {
    return this.Dab;
  };
  namespace.nJ.prototype.setContent = function (first_arg) {
    this.oa.setContent(this.Ha(), first_arg);
    this.Dab = first_arg;
  };
  var fn_353 = function (first_arg, second_arg) {
    first_arg.Dab = second_arg;
  };
  namespace.ba = namespace.nJ.prototype;
  namespace.ba.RB = function () {
    var content = this.getContent();
    if (!content) return "";
    content =
      typeof content === "string"
        ? content
        : Array.isArray(content)
          ? content.map(namespace.RKa).join("")
          : namespace.Zm(content);
    return namespace.KAe(content);
  };
  namespace.ba.isVisible = function () {
    return this.A4b;
  };
  namespace.ba.setVisible = function (first_arg, second_arg) {
    return second_arg || (this.A4b != first_arg && this.dispatchEvent(first_arg ? "show" : "hide"))
      ? ((second_arg = this.Ha()) && this.oa.setVisible(second_arg, first_arg),
        this.isEnabled() && this.oa.ria(this, first_arg),
        (this.A4b = first_arg),
        !0)
      : !1;
  };
  namespace.ba.isEnabled = function () {
    return !(this.Bf & 1);
  };
  namespace.ba.setEnabled = function (first_arg) {
    var parent = this.getParent();
    (parent && typeof parent.isEnabled == "function" && !parent.isEnabled()) ||
      !fn_355(this, 1, !first_arg) ||
      (first_arg || (this.setActive(!1), this.ZCa(!1)),
      this.isVisible() && this.oa.ria(this, first_arg),
      this.setState(1, !first_arg, !0));
  };
  namespace.ba.isHighlighted = function () {
    return !!(this.Bf & 2);
  };
  namespace.ba.ZCa = function (first_arg) {
    fn_355(this, 2, first_arg) && this.setState(2, first_arg);
  };
  namespace.ba.isActive = function () {
    return !!(this.Bf & 4);
  };
  namespace.ba.setActive = function (first_arg) {
    fn_355(this, 4, first_arg) && this.setState(4, first_arg);
  };
  namespace.ba.isSelected = function () {
    return !!(this.Bf & 8);
  };
  namespace.ba.Fn = function (first_arg) {
    fn_355(this, 8, first_arg) && this.setState(8, first_arg);
  };
  namespace.ba.isChecked = function () {
    return !!(this.Bf & 16);
  };
  namespace.ba.setChecked = function (first_arg) {
    fn_355(this, 16, first_arg) && this.setState(16, first_arg);
  };
  namespace.ba.Sl = function () {
    return !!(this.Bf & 32);
  };
  namespace.ba.z4b = function (first_arg) {
    fn_355(this, 32, first_arg) && this.setState(32, first_arg);
  };
  namespace.ba.isOpen = function () {
    return !!(this.Bf & 64);
  };
  namespace.ba.JH = function (first_arg) {
    fn_355(this, 64, first_arg) && this.setState(64, first_arg);
  };
  namespace.ba.getState = function () {
    return this.Bf;
  };
  namespace.ba.setState = function (first_arg, second_arg, third_arg) {
    third_arg || first_arg != 1
      ? namespace.oJ(this, first_arg) &&
        second_arg != !!(this.Bf & first_arg) &&
        (this.oa.setState(this, first_arg, second_arg),
        (this.Bf = second_arg ? this.Bf | first_arg : this.Bf & ~first_arg))
      : this.setEnabled(!second_arg);
  };
  namespace.oJ = function (first_arg, second_arg) {
    return !!(first_arg.k1b & second_arg);
  };
  namespace.nJ.prototype.q2 = function (first_arg, second_arg) {
    if (this.vH() && this.Bf & first_arg && !second_arg) throw Error("ta");
    !second_arg && this.Bf & first_arg && this.setState(first_arg, !1);
    this.k1b = second_arg ? this.k1b | first_arg : this.k1b & ~first_arg;
  };
  var fn_354 = function (first_arg, second_arg) {
      return !!(first_arg.ezc & second_arg) && namespace.oJ(first_arg, second_arg);
    },
    fn_355 = function (first_arg, second_arg, third_arg) {
      return (
        namespace.oJ(first_arg, second_arg) &&
        !!(first_arg.Bf & second_arg) != third_arg &&
        (!(first_arg.eob & second_arg) ||
          first_arg.dispatchEvent(namespace.OAe(second_arg, third_arg))) &&
        !first_arg.isDisposed()
      );
    };
  namespace.nJ.prototype.WGb = function (first_arg) {
    !fn_356(first_arg, this.Ha()) &&
      this.dispatchEvent("enter") &&
      this.isEnabled() &&
      fn_354(this, 2) &&
      this.ZCa(!0);
  };
  namespace.nJ.prototype.Ya = function (first_arg) {
    !fn_356(first_arg, this.Ha()) &&
      this.dispatchEvent("leave") &&
      (fn_354(this, 4) && this.setActive(!1), fn_354(this, 2) && this.ZCa(!1));
  };
  namespace.nJ.prototype.Ka = namespace.Jn;
  var fn_356 = function (first_arg, second_arg) {
    return !!first_arg.relatedTarget && namespace.kh(second_arg, first_arg.relatedTarget);
  };
  namespace.ba = namespace.nJ.prototype;
  namespace.ba.YCa = function (event) {
    this.isEnabled() &&
      (fn_354(this, 2) && this.ZCa(!0),
      namespace.BLa(event) &&
        (fn_354(this, 4) && this.setActive(!0), this.oa && this.oa.tvc(this) && this.Ha().focus()));
    !this.M5b && namespace.BLa(event) && event.preventDefault();
  };
  namespace.ba.cra = function (first_arg) {
    this.isEnabled() &&
      (fn_354(this, 2) && this.ZCa(!0),
      this.isActive() && this.P7a(first_arg) && fn_354(this, 4) && this.setActive(!1));
  };
  namespace.ba.P7a = function (first_arg) {
    fn_354(this, 16) && this.setChecked(!this.isChecked());
    fn_354(this, 8) && this.Fn(!0);
    fn_354(this, 64) && this.JH(!this.isOpen());
    var ue = new namespace.ue("action", this);
    first_arg &&
      ((ue.altKey = first_arg.altKey),
      (ue.ctrlKey = first_arg.ctrlKey),
      (ue.metaKey = first_arg.metaKey),
      (ue.shiftKey = first_arg.shiftKey),
      (ue.ka = first_arg.ka),
      (ue.timeStamp = first_arg.timeStamp));
    return this.dispatchEvent(ue);
  };
  namespace.ba.c0d = function () {
    fn_354(this, 32) && this.z4b(!0);
  };
  namespace.ba.y4b = function () {
    fn_354(this, 4) && this.setActive(!1);
    fn_354(this, 32) && this.z4b(!1);
  };
  namespace.ba.EX = function (event) {
    return this.isVisible() && this.isEnabled() && this.Lqb(event)
      ? (event.preventDefault(), event.stopPropagation(), !0)
      : !1;
  };
  namespace.ba.Lqb = function (event) {
    return event.keyCode == 13 && this.P7a(event);
  };
  if (typeof namespace.nJ !== "function") throw Error("jk`" + namespace.nJ);
  if (typeof namespace.mJ !== "function") throw Error("kk`" + namespace.mJ);
  var xf = namespace.xf(namespace.nJ);
  local_19[xf] = namespace.mJ;
  namespace.MAe("goog-control", function () {
    return new namespace.nJ(null);
  });
  var local_20;
  namespace.cBe = function () {};
  local_20 = function () {};
  namespace.eBe = function (first_arg, second_arg, third_arg) {
    namespace.nJ.call(this, first_arg, second_arg || local_20.getInstance(), third_arg);
  };
  namespace.fBe = function (first_arg, second_arg) {
    return first_arg.Xd ? namespace.Im(second_arg, first_arg.Xd || first_arg.wa.ka) : null;
  };
  namespace.gBe = function (first_arg) {
    first_arg.ezc &= -256;
  };
  namespace.Xi(namespace.cBe, namespace.mJ);
  namespace.Ui(namespace.cBe);
  namespace.ba = namespace.cBe.prototype;
  namespace.ba.uV = function () {
    return "button";
  };
  namespace.ba.OJa = function (first_arg, second_arg, third_arg) {
    switch (second_arg) {
      case 8:
      case 16:
        namespace.pe(first_arg, "pressed", third_arg);
        break;
      default:
      case 64:
      case 1:
        namespace.cBe.Qf.OJa.call(this, first_arg, second_arg, third_arg);
    }
  };
  namespace.ba.G7 = function (first_arg) {
    var call = namespace.cBe.Qf.G7.call(this, first_arg);
    this.afa(call, first_arg.uoa() || "");
    var value = first_arg.getValue();
    value && this.setValue(call, value);
    namespace.oJ(first_arg, 16) && this.OJa(call, 16, first_arg.isChecked());
    return call;
  };
  namespace.ba.Pw = function (first_arg, second_arg) {
    second_arg = namespace.cBe.Qf.Pw.call(this, first_arg, second_arg);
    var value = this.getValue(second_arg);
    first_arg.Qa = value;
    first_arg.EDb(this.uoa(second_arg) || "");
    namespace.oJ(first_arg, 16) && this.OJa(second_arg, 16, first_arg.isChecked());
    return second_arg;
  };
  namespace.ba.getValue = function () {};
  namespace.ba.setValue = function () {};
  namespace.ba.uoa = function (first_arg) {
    return first_arg.title;
  };
  namespace.ba.afa = function (element, second_arg) {
    element && (second_arg ? (element.title = second_arg) : element.removeAttribute("title"));
  };
  namespace.ba.jC = function () {
    return "goog-button";
  };
  namespace.Xi(local_20, namespace.cBe);
  namespace.Ui(local_20);
  namespace.ba = local_20.prototype;
  namespace.ba.uV = function () {};
  namespace.ba.G7 = function (first_arg) {
    namespace.YAe(first_arg, !1);
    namespace.gBe(first_arg);
    first_arg.q2(32, !1);
    return first_arg
      .Lk()
      .yr(
        "BUTTON",
        {
          class: namespace.RAe(this, first_arg).join(" "),
          disabled: !first_arg.isEnabled(),
          title: first_arg.uoa() || "",
          value: first_arg.getValue() || ""
        },
        first_arg.RB() || ""
      );
  };
  namespace.ba.I0a = function (first_arg) {
    return (
      first_arg.tagName == "BUTTON" ||
      (first_arg.tagName == "INPUT" &&
        (first_arg.type == "button" || first_arg.type == "submit" || first_arg.type == "reset"))
    );
  };
  namespace.ba.Pw = function (first_arg, second_arg) {
    namespace.YAe(first_arg, !1);
    namespace.gBe(first_arg);
    first_arg.q2(32, !1);
    if (second_arg.disabled) {
      let ka = this.ka(1);
      namespace.Pd(second_arg, ka);
    }
    return local_20.Qf.Pw.call(this, first_arg, second_arg);
  };
  namespace.ba.w4b = function (first_arg) {
    namespace.Mn(first_arg).listen(first_arg.Ha(), "click", first_arg.P7a);
  };
  namespace.ba.x4b = function () {};
  namespace.ba.uvc = function () {};
  namespace.ba.tvc = function (first_arg) {
    return first_arg.isEnabled();
  };
  namespace.ba.ria = function () {};
  namespace.ba.setState = function (first_arg, second_arg, third_arg) {
    local_20.Qf.setState.call(this, first_arg, second_arg, third_arg);
    (first_arg = first_arg.Ha()) && second_arg == 1 && (first_arg.disabled = third_arg);
  };
  namespace.ba.getValue = function (first_arg) {
    return first_arg.value;
  };
  namespace.ba.setValue = function (first_arg, second_arg) {
    first_arg && (first_arg.value = second_arg);
  };
  namespace.ba.OJa = function () {};
  namespace.Xi(namespace.eBe, namespace.nJ);
  namespace.ba = namespace.eBe.prototype;
  namespace.ba.getValue = function () {
    return this.Qa;
  };
  namespace.ba.setValue = function (first_arg) {
    this.Qa = first_arg;
    this.dS().setValue(this.Ha(), first_arg);
  };
  namespace.ba.uoa = function () {
    return this.NH;
  };
  namespace.ba.afa = function (first_arg) {
    this.NH = first_arg;
    this.dS().afa(this.Ha(), first_arg);
  };
  namespace.ba.EDb = function (first_arg) {
    this.NH = first_arg;
  };
  namespace.ba.Jc = function () {
    namespace.eBe.Qf.Jc.call(this);
    delete this.Qa;
    delete this.NH;
  };
  namespace.ba.qx = function () {
    namespace.eBe.Qf.qx.call(this);
    if (namespace.oJ(this, 32)) {
      let ha = this.Ha();
      ha && namespace.Mn(this).listen(ha, "keyup", this.Lqb);
    }
  };
  namespace.ba.Lqb = function (event) {
    return (event.keyCode == 13 && event.type == "key") ||
      (event.keyCode == 32 && event.type == "keyup")
      ? this.P7a(event)
      : event.keyCode == 32;
  };
  namespace.MAe("goog-button", function () {
    return new namespace.eBe(null);
  });
  namespace.GBe = function () {};
  namespace.Xi(namespace.GBe, namespace.cBe);
  namespace.Ui(namespace.GBe);
  namespace.ba = namespace.GBe.prototype;
  namespace.ba.G7 = function (first_arg) {
    var rae = namespace.RAe(this, first_arg);
    rae = first_arg
      .Lk()
      .yr(
        "DIV",
        "goog-inline-block " + rae.join(" "),
        this.D4b(first_arg.getContent(), first_arg.Lk())
      );
    this.afa(rae, first_arg.uoa());
    return rae;
  };
  namespace.ba.uV = function () {
    return "button";
  };
  namespace.ba.Fma = function (element) {
    return element && element.firstChild && element.firstChild.firstChild;
  };
  namespace.ba.D4b = function (first_arg, second_arg) {
    return second_arg.yr(
      "DIV",
      "goog-inline-block " + (this.jC() + "-outer-box"),
      second_arg.yr("DIV", "goog-inline-block " + (this.jC() + "-inner-box"), first_arg)
    );
  };
  namespace.ba.I0a = function (first_arg) {
    return first_arg.tagName == "DIV";
  };
  namespace.ba.Pw = function (first_arg, element) {
    fn_357(element, !0);
    fn_357(element, !1);
    a: {
      var eqd = first_arg.Lk().eqd(element);
      var local_44 = this.jC() + "-outer-box";
      if (
        eqd &&
        namespace.Nd(eqd, local_44) &&
        ((eqd = first_arg.Lk().eqd(eqd)),
        (local_44 = this.jC() + "-inner-box"),
        eqd && namespace.Nd(eqd, local_44))
      ) {
        eqd = !0;
        break a;
      }
      eqd = !1;
    }
    eqd || element.appendChild(this.D4b(element.childNodes, first_arg.Lk()));
    namespace.Qd(element, ["goog-inline-block", this.jC()]);
    return namespace.GBe.Qf.Pw.call(this, first_arg, element);
  };
  namespace.ba.jC = function () {
    return "goog-custom-button";
  };
  var fn_357 = function (element, second_arg) {
    if (element) {
      let element_2 = second_arg ? element.firstChild : element.lastChild,
        local_44;
      for (; element_2 && element_2.parentNode == element;) {
        local_44 = second_arg ? element_2.nextSibling : element_2.previousSibling;
        if (element_2.nodeType == 3) {
          let node_value = element_2.nodeValue;
          if (namespace.la(node_value) == "") element.removeChild(element_2);
          else {
            element_2.nodeValue = second_arg
              ? node_value.replace(/^[\s\xa0]+/, "")
              : node_value.replace(/[\s\xa0]+$/, "");
            break;
          }
        } else break;
        element_2 = local_44;
      }
    }
  };
  namespace.EBe = function (first_arg, second_arg, third_arg, fourth_arg) {
    namespace.DBe.call(this, first_arg, second_arg);
    this.ka = third_arg ? 5 : 0;
    this.oa = fourth_arg || void 0;
  };
  namespace.Xi(namespace.EBe, namespace.DBe);
  namespace.EBe.prototype.Ga = function () {
    return this.ka;
  };
  namespace.EBe.prototype.reposition = function (first_arg, second_arg, third_arg, fourth_arg) {
    var xx = namespace.Xx(
      this.element,
      this.kna,
      first_arg,
      second_arg,
      null,
      third_arg,
      10,
      fourth_arg,
      this.oa
    );
    if (xx & 496) {
      let local_44 = fn_358(xx, this.kna);
      second_arg = fn_358(xx, second_arg);
      xx = namespace.Xx(
        this.element,
        local_44,
        first_arg,
        second_arg,
        null,
        third_arg,
        10,
        fourth_arg,
        this.oa
      );
      xx & 496 &&
        ((local_44 = fn_358(xx, local_44)),
        (second_arg = fn_358(xx, second_arg)),
        namespace.Xx(
          this.element,
          local_44,
          first_arg,
          second_arg,
          null,
          third_arg,
          this.ka,
          fourth_arg,
          this.oa
        ));
    }
  };
  var fn_358 = function (first_arg, second_arg) {
    first_arg & 48 && (second_arg ^= 4);
    first_arg & 192 && (second_arg ^= 1);
    return second_arg;
  };
  namespace.hBe = function (first_arg) {
    this.ka = first_arg;
  };
  namespace.pJ = function (first_arg, second_arg, third_arg) {
    namespace.Ne.call(this, third_arg);
    this.ORa = second_arg || namespace.hBe.getInstance();
    this.Hab = first_arg || "vertical";
  };
  namespace.iBe = function (first_arg, second_arg) {
    return first_arg.Ca && second_arg ? first_arg.Ca.indexOf(second_arg) : -1;
  };
  namespace.Ui(namespace.hBe);
  namespace.hBe.prototype.uV = function () {
    return this.ka;
  };
  var fn_359 = function (first_arg, second_arg) {
    first_arg && (first_arg.tabIndex = second_arg ? 0 : -1);
  };
  namespace.ba = namespace.hBe.prototype;
  namespace.ba.O$c = function (first_arg) {
    return first_arg.Lk().yr("DIV", this.wa(first_arg).join(" "));
  };
  namespace.ba.wvc = function (first_arg) {
    return first_arg;
  };
  namespace.ba.B4b = function (first_arg) {
    return first_arg.tagName == "DIV";
  };
  namespace.ba.Pw = function (first_arg, second_arg) {
    second_arg.id && first_arg.Uc(second_arg.id);
    var eab = this.Eab(),
      num_30 = !1,
      rla = namespace.Rla(second_arg);
    rla &&
      Array.prototype.forEach.call(
        rla,
        function (first_arg_2) {
          first_arg_2 == eab ? (num_30 = !0) : first_arg_2 && this.M1c(first_arg, first_arg_2, eab);
        },
        this
      );
    num_30 || namespace.Pd(second_arg, eab);
    namespace.kBe(this, first_arg, this.wvc(second_arg));
    return second_arg;
  };
  namespace.ba.M1c = function (first_arg, second_arg, third_arg) {
    second_arg == third_arg + "-disabled"
      ? first_arg.setEnabled(!1)
      : second_arg == third_arg + "-horizontal"
        ? first_arg.setOrientation("horizontal")
        : second_arg == third_arg + "-vertical" && first_arg.setOrientation("vertical");
  };
  namespace.kBe = function (first_arg, second_arg, element) {
    if (element) {
      let first_child = element.firstChild,
        local_44;
      for (; first_child && first_child.parentNode == element;) {
        local_44 = first_child.nextSibling;
        if (first_child.nodeType == 1) {
          let a_jc = first_arg.aJc(first_child);
          a_jc &&
            ((a_jc.Xd = first_child),
            second_arg.isEnabled() || a_jc.setEnabled(!1),
            second_arg.vKa(a_jc),
            a_jc.Pw(first_child));
        } else
          (first_child.nodeValue && namespace.la(first_child.nodeValue) != "") ||
            element.removeChild(first_child);
        first_child = local_44;
      }
    }
  };
  namespace.hBe.prototype.aJc = function (list_50) {
    a: {
      list_50 = namespace.Rla(list_50);
      let len = list_50.length;
      for (let index = 0; index < len; index++) {
        var local_44 = list_50[index];
        if ((local_44 = local_44 in namespace.LAe ? namespace.LAe[local_44]() : null)) {
          list_50 = local_44;
          break a;
        }
      }
      list_50 = null;
    }
    return list_50;
  };
  namespace.hBe.prototype.xvc = function (first_arg) {
    first_arg = first_arg.Ha();
    namespace.xLa(first_arg, !0, namespace.ie);
    var u_v = this.uV();
    u_v && namespace.oe(first_arg, u_v);
  };
  namespace.hBe.prototype.Eab = function () {
    return "goog-container";
  };
  namespace.hBe.prototype.wa = function (first_arg) {
    var eab = this.Eab(),
      num_30 = first_arg.sL() == "horizontal";
    num_30 = [eab, num_30 ? eab + "-horizontal" : eab + "-vertical"];
    first_arg.isEnabled() || num_30.push(eab + "-disabled");
    return num_30;
  };
  var fn_360, fn_361, fn_362, fn_363;
  namespace.Xi(namespace.pJ, namespace.Ne);
  namespace.ba = namespace.pJ.prototype;
  namespace.ba.ERc = null;
  namespace.ba.Gab = null;
  namespace.ba.ORa = null;
  namespace.ba.Hab = null;
  namespace.ba.PRa = !0;
  namespace.ba.Fab = !0;
  namespace.ba.bvb = !0;
  namespace.ba.f4 = -1;
  namespace.ba.V6 = null;
  namespace.ba.aYa = !1;
  namespace.ba.PSa = null;
  namespace.lBe = function (first_arg) {
    return first_arg.ERc || first_arg.Ha();
  };
  namespace.ba = namespace.pJ.prototype;
  namespace.ba.dS = function () {
    return this.ORa;
  };
  namespace.ba.t_b = function (first_arg) {
    if (this.Ha()) throw Error("ta");
    this.ORa = first_arg;
  };
  namespace.ba.cM = function () {
    this.Xd = this.ORa.O$c(this);
  };
  namespace.ba.LW = function () {
    return this.ORa.wvc(this.Ha());
  };
  namespace.ba.QGb = function (first_arg) {
    return this.ORa.B4b(first_arg);
  };
  namespace.ba.cX = function (element) {
    this.Xd = this.ORa.Pw(this, element);
    element.style.display == "none" && (this.PRa = !1);
  };
  namespace.ba.qx = function () {
    namespace.pJ.Qf.qx.call(this);
    namespace.NMa(
      this,
      function (first_arg) {
        first_arg.vH() && fn_365(this, first_arg);
      },
      this
    );
    var ha = this.Ha();
    this.ORa.xvc(this);
    this.setVisible(this.PRa, !0);
    namespace
      .Mn(this)
      .listen(this, "enter", this.ILc)
      .listen(this, "highlight", this.f0d)
      .listen(this, "unhighlight", this.h0d)
      .listen(this, "open", this.bte)
      .listen(this, "close", this.d0d)
      .listen(ha, namespace.WAe.gHb, this.g0d)
      .listen(namespace.se(ha), [namespace.WAe.hHb, namespace.WAe.fHb], this.e0d)
      .listen(
        ha,
        [
          namespace.WAe.gHb,
          namespace.WAe.hHb,
          namespace.WAe.fHb,
          "mouseover",
          "mouseout",
          "contextmenu"
        ],
        this.Qse
      );
    this.bvb && fn_364(this, !0);
  };
  var fn_364 = function (first_arg, second_arg) {
    var mn = namespace.Mn(first_arg),
      l_be = namespace.lBe(first_arg);
    second_arg
      ? mn
          .listen(l_be, "focus", first_arg.yvc)
          .listen(l_be, "blur", first_arg.P$c)
          .listen(
            first_arg.Gab || (first_arg.Gab = new namespace.lJ(namespace.lBe(first_arg))),
            "key",
            first_arg.EX
          )
      : mn
          .unlisten(l_be, "focus", first_arg.yvc)
          .unlisten(l_be, "blur", first_arg.P$c)
          .unlisten(
            first_arg.Gab || (first_arg.Gab = new namespace.lJ(namespace.lBe(first_arg))),
            "key",
            first_arg.EX
          );
  };
  namespace.ba = namespace.pJ.prototype;
  namespace.ba.VR = function () {
    this.Iwa(-1);
    this.V6 && this.V6.JH(!1);
    this.aYa = !1;
    namespace.pJ.Qf.VR.call(this);
  };
  namespace.ba.Jc = function () {
    namespace.pJ.Qf.Jc.call(this);
    this.Gab && (this.Gab.dispose(), (this.Gab = null));
    this.ORa = this.V6 = this.PSa = this.ERc = null;
  };
  namespace.ba.ILc = function () {
    return !0;
  };
  namespace.ba.f0d = function (event) {
    var i_be = namespace.iBe(this, event.target);
    if (i_be > -1 && i_be != this.f4) {
      let nt = this.NT();
      nt && nt.ZCa(!1);
      this.f4 = i_be;
      nt = this.NT();
      this.aYa && nt.setActive(!0);
      this.V6 && nt != this.V6 && (namespace.oJ(nt, 64) ? nt.JH(!0) : this.V6.JH(!1));
    }
    i_be = this.Ha();
    event.target.Ha() != null && namespace.pe(i_be, "activedescendant", event.target.Ha().id);
  };
  namespace.ba.h0d = function (event) {
    event.target == this.NT() && (this.f4 = -1);
    event = this.Ha();
    namespace.qe(event, "activedescendant");
  };
  namespace.ba.bte = function (event) {
    (event = event.target) &&
      event != this.V6 &&
      event.getParent() == this &&
      (this.V6 && this.V6.JH(!1), (this.V6 = event));
  };
  namespace.ba.d0d = function (event) {
    event.target == this.V6 && (this.V6 = null);
    var ha = this.Ha(),
      ha_2 = event.target.Ha();
    ha && event.target.isHighlighted() && ha_2 && namespace.bma(ha, ha_2);
  };
  namespace.ba.g0d = function (event) {
    this.Fab && (this.aYa = !0);
    var l_be = namespace.lBe(this);
    l_be && namespace.PKa(l_be) ? l_be.focus() : event.preventDefault();
  };
  namespace.ba.e0d = function () {
    this.aYa = !1;
  };
  namespace.ba.Qse = function (event) {
    a: {
      var target = event.target;
      if (this.PSa) {
        let ha = this.Ha();
        for (; target && target !== ha;) {
          let id = target.id;
          if (id in this.PSa) {
            target = this.PSa[id];
            break a;
          }
          target = target.parentNode;
        }
      }
      target = null;
    }
    if (target)
      switch (event.type) {
        case namespace.WAe.gHb:
          target.YCa(event);
          break;
        case namespace.WAe.hHb:
        case namespace.WAe.fHb:
          target.cra(event);
          break;
        case "mouseover":
          target.WGb(event);
          break;
        case "mouseout":
          target.Ya(event);
          break;
        case "contextmenu":
          target.Ka(event);
      }
  };
  namespace.ba.yvc = function () {};
  namespace.ba.P$c = function () {
    this.Iwa(-1);
    this.aYa = !1;
    this.V6 && this.V6.JH(!1);
  };
  namespace.ba.EX = function (event) {
    return this.isEnabled() &&
      this.isVisible() &&
      (namespace.OMa(this) != 0 || this.ERc) &&
      this.zvc(event)
      ? (event.preventDefault(), event.stopPropagation(), !0)
      : !1;
  };
  namespace.ba.zvc = function (event) {
    var nt = this.NT();
    if (
      (nt && typeof nt.EX == "function" && nt.EX(event)) ||
      (this.V6 && this.V6 != nt && typeof this.V6.EX == "function" && this.V6.EX(event))
    )
      return !0;
    if (event.shiftKey || event.ctrlKey || event.metaKey || event.altKey) return !1;
    switch (event.keyCode) {
      case 27:
        if (this.bvb) namespace.lBe(this).blur();
        else return !1;
        break;
      case 36:
        namespace.oBe(this);
        break;
      case 35:
        fn_360(this);
        break;
      case 38:
        if (this.Hab == "vertical") fn_362(this);
        else return !1;
        break;
      case 37:
        if (this.Hab == "horizontal") namespace.EAe(this) ? fn_361(this) : fn_362(this);
        else return !1;
        break;
      case 40:
        if (this.Hab == "vertical") fn_361(this);
        else return !1;
        break;
      case 39:
        if (this.Hab == "horizontal") namespace.EAe(this) ? fn_362(this) : fn_361(this);
        else return !1;
        break;
      default:
        return !1;
    }
    return !0;
  };
  var fn_365 = function (first_arg, second_arg) {
    var ha = second_arg.Ha();
    ha = ha.id || (ha.id = second_arg.getId());
    first_arg.PSa || (first_arg.PSa = {});
    first_arg.PSa[ha] = second_arg;
  };
  namespace.ba = namespace.pJ.prototype;
  namespace.ba.vKa = function (first_arg, second_arg) {
    namespace.pJ.Qf.vKa.call(this, first_arg, second_arg);
  };
  namespace.ba.MHb = function (first_arg, second_arg, third_arg) {
    first_arg.eob |= 2;
    first_arg.eob |= 64;
    first_arg.q2(32, !1);
    namespace.YAe(first_arg, !1);
    var local_44 = first_arg.getParent() == this ? namespace.iBe(this, first_arg) : -1;
    namespace.pJ.Qf.MHb.call(this, first_arg, second_arg, third_arg);
    first_arg.vH() && this.vH() && fn_365(this, first_arg);
    first_arg = local_44;
    first_arg == -1 && (first_arg = namespace.OMa(this));
    first_arg == this.f4
      ? (this.f4 = Math.min(namespace.OMa(this) - 1, second_arg))
      : first_arg > this.f4 && second_arg <= this.f4
        ? this.f4++
        : first_arg < this.f4 && second_arg > this.f4 && this.f4--;
  };
  namespace.ba.removeChild = function (first_arg, second_arg) {
    if ((first_arg = typeof first_arg === "string" ? this.HUa(first_arg) : first_arg)) {
      var i_be = namespace.iBe(this, first_arg);
      i_be != -1 &&
        (i_be == this.f4 ? (first_arg.ZCa(!1), (this.f4 = -1)) : i_be < this.f4 && this.f4--);
      (i_be = first_arg.Ha()) && i_be.id && this.PSa && namespace.Jja(this.PSa, i_be.id);
    }
    first_arg = namespace.pJ.Qf.removeChild.call(this, first_arg, second_arg);
    namespace.YAe(first_arg, !0);
    return first_arg;
  };
  namespace.ba.sL = function () {
    return this.Hab;
  };
  namespace.ba.setOrientation = function (first_arg) {
    if (this.Ha()) throw Error("ta");
    this.Hab = first_arg;
  };
  namespace.ba.isVisible = function () {
    return this.PRa;
  };
  namespace.ba.setVisible = function (first_arg, second_arg) {
    if (second_arg || (this.PRa != first_arg && this.dispatchEvent(first_arg ? "show" : "hide"))) {
      this.PRa = first_arg;
      let ha = this.Ha();
      ha &&
        (namespace.xn(ha, first_arg),
        this.bvb && fn_359(namespace.lBe(this), this.Fab && this.PRa),
        second_arg || this.dispatchEvent(this.PRa ? "aftershow" : "afterhide"));
      return !0;
    }
    return !1;
  };
  namespace.ba.isEnabled = function () {
    return this.Fab;
  };
  namespace.ba.setEnabled = function (first_arg) {
    this.Fab != first_arg &&
      this.dispatchEvent(first_arg ? "enable" : "disable") &&
      (first_arg
        ? ((this.Fab = !0),
          namespace.NMa(this, function (first_arg_2) {
            first_arg_2.VVd ? delete first_arg_2.VVd : first_arg_2.setEnabled(!0);
          }))
        : (namespace.NMa(this, function (first_arg_2) {
            first_arg_2.isEnabled() ? first_arg_2.setEnabled(!1) : (first_arg_2.VVd = !0);
          }),
          (this.aYa = this.Fab = !1)),
      this.bvb && fn_359(namespace.lBe(this), first_arg && this.PRa));
  };
  namespace.ba.ria = function (first_arg) {
    first_arg != this.bvb && this.vH() && fn_364(this, first_arg);
    this.bvb = first_arg;
    this.Fab && this.PRa && fn_359(namespace.lBe(this), first_arg);
  };
  namespace.ba.Iwa = function (first_arg) {
    (first_arg = namespace.PMa(this, first_arg))
      ? first_arg.ZCa(!0)
      : this.f4 > -1 && this.NT().ZCa(!1);
  };
  namespace.ba.NT = function () {
    return namespace.PMa(this, this.f4);
  };
  namespace.oBe = function (first_arg) {
    fn_363(
      first_arg,
      function (first_arg_2, second_arg) {
        return (first_arg_2 + 1) % second_arg;
      },
      namespace.OMa(first_arg) - 1
    );
  };
  fn_360 = function (first_arg) {
    fn_363(
      first_arg,
      function (first_arg_2, second_arg) {
        first_arg_2--;
        return first_arg_2 < 0 ? second_arg - 1 : first_arg_2;
      },
      0
    );
  };
  fn_361 = function (first_arg) {
    fn_363(
      first_arg,
      function (first_arg_2, second_arg) {
        return (first_arg_2 + 1) % second_arg;
      },
      first_arg.f4
    );
  };
  fn_362 = function (first_arg) {
    fn_363(
      first_arg,
      function (first_arg_2, second_arg) {
        first_arg_2--;
        return first_arg_2 < 0 ? second_arg - 1 : first_arg_2;
      },
      first_arg.f4
    );
  };
  fn_363 = function (first_arg, second_arg, third_arg) {
    third_arg = third_arg < 0 ? namespace.iBe(first_arg, first_arg.V6) : third_arg;
    var oma = namespace.OMa(first_arg);
    third_arg = second_arg.call(first_arg, third_arg, oma);
    for (var index = 0; index <= oma;) {
      let pma = namespace.PMa(first_arg, third_arg);
      if (pma && first_arg.ifd(pma)) {
        first_arg.D1c(third_arg);
        break;
      }
      index++;
      third_arg = second_arg.call(first_arg, third_arg, oma);
    }
  };
  namespace.pJ.prototype.ifd = function (first_arg) {
    return first_arg.isVisible() && first_arg.isEnabled() && namespace.oJ(first_arg, 2);
  };
  namespace.pJ.prototype.D1c = function (first_arg) {
    this.Iwa(first_arg);
  };
  var local_21, cls_70, local_22, cls_71;
  local_21 = function () {};
  cls_70 = function (first_arg, second_arg, third_arg) {
    namespace.nJ.call(this, first_arg, third_arg || local_21.getInstance(), second_arg);
    this.q2(1, !1);
    this.q2(2, !1);
    this.q2(4, !1);
    this.q2(32, !1);
    this.Bf = 1;
  };
  namespace.vBe = function () {
    this.wa = [];
  };
  namespace.qJ = function (first_arg, second_arg, third_arg, fourth_arg) {
    namespace.nJ.call(this, first_arg, fourth_arg || namespace.vBe.getInstance(), third_arg);
    this.setValue(second_arg);
  };
  local_22 = function () {};
  cls_71 = function (first_arg, second_arg) {
    namespace.nJ.call(this, null, first_arg || local_22.getInstance(), second_arg);
    this.q2(1, !1);
    this.q2(2, !1);
    this.q2(4, !1);
    this.q2(32, !1);
    this.Bf = 1;
  };
  namespace.yBe = function (first_arg) {
    this.ka = first_arg || "menu";
  };
  namespace.zBe = function (first_arg, second_arg) {
    namespace.pJ.call(this, "vertical", second_arg || namespace.yBe.getInstance(), first_arg);
    this.ria(!1);
  };
  namespace.Xi(local_21, namespace.mJ);
  namespace.Ui(local_21);
  local_21.prototype.jC = function () {
    return "goog-menuheader";
  };
  namespace.Xi(cls_70, namespace.nJ);
  namespace.MAe("goog-menuheader", function () {
    return new cls_70(null);
  });
  namespace.Xi(namespace.vBe, namespace.mJ);
  namespace.Ui(namespace.vBe);
  var fn_366 = function (first_arg, second_arg) {
    var local_44 = first_arg.wa[second_arg];
    if (!local_44) {
      switch (second_arg) {
        case 0:
          local_44 = first_arg.jC() + "-highlight";
          break;
        case 1:
          local_44 = first_arg.jC() + "-checkbox";
          break;
        case 2:
          local_44 = first_arg.jC() + "-content";
      }
      first_arg.wa[second_arg] = local_44;
    }
    return local_44;
  };
  namespace.ba = namespace.vBe.prototype;
  namespace.ba.uV = function () {
    return "menuitem";
  };
  namespace.ba.G7 = function (first_arg) {
    var yr = first_arg
      .Lk()
      .yr(
        "DIV",
        namespace.RAe(this, first_arg).join(" "),
        this.createContent(first_arg.getContent(), first_arg.Lk())
      );
    fn_368(this, first_arg, yr, namespace.oJ(first_arg, 8) || namespace.oJ(first_arg, 16));
    return yr;
  };
  namespace.ba.Fma = function (element) {
    return element && element.firstChild;
  };
  namespace.ba.Pw = function (first_arg, element) {
    var vm = namespace.Vm(element),
      local_44 = fn_366(this, 2);
    (vm && namespace.Nd(vm, local_44)) ||
      element.appendChild(this.createContent(element.childNodes, first_arg.Lk()));
    namespace.Nd(element, "goog-option") &&
      (first_arg.q2(16, !0), first_arg && element && fn_368(this, first_arg, element, !0));
    return namespace.vBe.Qf.Pw.call(this, first_arg, element);
  };
  namespace.ba.setContent = function (first_arg, second_arg) {
    var fma = this.Fma(first_arg),
      local_44 = fn_367(this, first_arg) ? fma.firstChild : null;
    namespace.vBe.Qf.setContent.call(this, first_arg, second_arg);
    local_44 && !fn_367(this, first_arg) && fma.insertBefore(local_44, fma.firstChild || null);
  };
  namespace.ba.createContent = function (first_arg, second_arg) {
    var local_44 = fn_366(this, 2);
    return second_arg.yr("DIV", local_44, first_arg);
  };
  var fn_367 = function (first_arg, element) {
      return (element = first_arg.Fma(element))
        ? ((element = element.firstChild),
          (first_arg = fn_366(first_arg, 1)),
          !!element && namespace.ah(element) && namespace.Nd(element, first_arg))
        : !1;
    },
    fn_368 = function (first_arg, second_arg, element, fourth_arg) {
      namespace.TAe(first_arg, element, second_arg.VGb());
      namespace.UAe(first_arg, second_arg, element);
      fourth_arg != fn_367(first_arg, element) &&
        (namespace.Td(element, "goog-option", fourth_arg),
        (element = first_arg.Fma(element)),
        fourth_arg
          ? ((first_arg = fn_366(first_arg, 1)),
            element.insertBefore(second_arg.Lk().yr("DIV", first_arg), element.firstChild || null))
          : element.removeChild(element.firstChild));
    };
  namespace.vBe.prototype.ka = function (first_arg) {
    switch (first_arg) {
      case 2:
        return fn_366(this, 0);
      case 16:
      case 8:
        return "goog-option-selected";
      default:
        return namespace.vBe.Qf.ka.call(this, first_arg);
    }
  };
  namespace.vBe.prototype.Aa = function (first_arg) {
    var local_44 = fn_366(this, 0);
    switch (first_arg) {
      case "goog-option-selected":
        return 16;
      case local_44:
        return 2;
      default:
        return namespace.vBe.Qf.Aa.call(this, first_arg);
    }
  };
  namespace.vBe.prototype.jC = function () {
    return "goog-menuitem";
  };
  namespace.Xi(namespace.qJ, namespace.nJ);
  namespace.ba = namespace.qJ.prototype;
  namespace.ba.getValue = function () {
    var model = this.getModel();
    return model != null ? model : this.RB();
  };
  namespace.ba.setValue = function (first_arg) {
    this.setModel(first_arg);
  };
  namespace.ba.q2 = function (first_arg, second_arg) {
    namespace.qJ.Qf.q2.call(this, first_arg, second_arg);
    switch (first_arg) {
      case 8:
        this.isChecked() && !second_arg && this.setChecked(!1);
        var ha = this.Ha();
        ha && ((first_arg = this.dS()), this && ha && fn_368(first_arg, this, ha, second_arg));
        break;
      case 16:
        if ((ha = this.Ha()))
          ((first_arg = this.dS()), this && ha && fn_368(first_arg, this, ha, second_arg));
    }
  };
  namespace.ba.RB = function () {
    var content = this.getContent();
    return Array.isArray(content)
      ? ((content = namespace
          .Zi(content, function (first_arg) {
            return namespace.ah(first_arg) &&
              (namespace.Nd(first_arg, "goog-menuitem-accel") ||
                namespace.Nd(first_arg, "goog-menuitem-mnemonic-separator"))
              ? ""
              : namespace.RKa(first_arg);
          })
          .join("")),
        namespace.KAe(content))
      : namespace.qJ.Qf.RB.call(this);
  };
  namespace.ba.cra = function (event) {
    var parent = this.getParent();
    if (parent) {
      let ka = parent.ka;
      parent.ka = null;
      if (
        ka &&
        event &&
        typeof event.clientX === "number" &&
        typeof event.clientY === "number" &&
        namespace.iKa(ka, new namespace.de(event.clientX, event.clientY))
      )
        return;
    }
    namespace.qJ.Qf.cra.call(this, event);
  };
  namespace.ba.Lqb = function (event) {
    return event.keyCode == this.IUc && this.P7a(event)
      ? !0
      : namespace.qJ.Qf.Lqb.call(this, event);
  };
  namespace.ba.aqe = function () {
    return this.IUc;
  };
  namespace.MAe("goog-menuitem", function () {
    return new namespace.qJ(null);
  });
  namespace.qJ.prototype.VGb = function () {
    return namespace.oJ(this, 16)
      ? "menuitemcheckbox"
      : namespace.oJ(this, 8)
        ? "menuitemradio"
        : namespace.qJ.Qf.VGb.call(this);
  };
  namespace.qJ.prototype.getParent = function () {
    return namespace.nJ.prototype.getParent.call(this);
  };
  namespace.qJ.prototype.Nfb = function () {
    return namespace.nJ.prototype.Nfb.call(this);
  };
  namespace.Xi(local_22, namespace.mJ);
  namespace.Ui(local_22);
  local_22.prototype.G7 = function (first_arg) {
    return first_arg.Lk().yr("DIV", this.jC());
  };
  local_22.prototype.Pw = function (first_arg, second_arg) {
    second_arg.id && first_arg.Uc(second_arg.id);
    if (second_arg.tagName == "HR") {
      let local_44 = second_arg;
      second_arg = this.G7(first_arg);
      namespace.Rm(second_arg, local_44);
      namespace.Um(local_44);
    } else namespace.Pd(second_arg, this.jC());
    return second_arg;
  };
  local_22.prototype.setContent = function () {};
  local_22.prototype.jC = function () {
    return "goog-menuseparator";
  };
  namespace.Xi(cls_71, namespace.nJ);
  cls_71.prototype.qx = function () {
    cls_71.Qf.qx.call(this);
    var ha = this.Ha();
    namespace.oe(ha, "separator");
  };
  namespace.MAe("goog-menuseparator", function () {
    return new cls_71();
  });
  namespace.Xi(namespace.yBe, namespace.hBe);
  namespace.Ui(namespace.yBe);
  namespace.ba = namespace.yBe.prototype;
  namespace.ba.B4b = function (first_arg) {
    return first_arg.tagName == "UL" || namespace.yBe.Qf.B4b.call(this, first_arg);
  };
  namespace.ba.aJc = function (first_arg) {
    return first_arg.tagName == "HR" ? new cls_71() : namespace.yBe.Qf.aJc.call(this, first_arg);
  };
  namespace.ba.gTa = function (first_arg, second_arg) {
    return namespace.kh(first_arg.Ha(), second_arg);
  };
  namespace.ba.Eab = function () {
    return "goog-menu";
  };
  namespace.ba.xvc = function (first_arg) {
    namespace.yBe.Qf.xvc.call(this, first_arg);
    first_arg = first_arg.Ha();
    namespace.pe(first_arg, "haspopup", "true");
  };
  namespace.MAe("goog-menuseparator", function () {
    return new cls_71();
  });
  namespace.Xi(namespace.zBe, namespace.pJ);
  namespace.ba = namespace.zBe.prototype;
  namespace.ba.C4b = !0;
  namespace.ba.gTa = function (first_arg) {
    if (this.dS().gTa(this, first_arg)) return !0;
    var oma = namespace.OMa(this);
    for (let index = 0; index < oma; index++) {
      let pma = namespace.PMa(this, index);
      if (typeof pma.gTa == "function" && pma.gTa(first_arg)) return !0;
    }
    return !1;
  };
  namespace.ba.removeItem = function (first_arg) {
    (first_arg = this.removeChild(first_arg, !0)) && first_arg.dispose();
  };
  namespace.ba.Rk = function () {
    var list_50 = [];
    namespace.NMa(this, function (first_arg) {
      list_50.push(first_arg);
    });
    return list_50;
  };
  namespace.ba.setPosition = function (first_arg, second_arg) {
    var visible = this.isVisible();
    visible || namespace.xn(this.Ha(), !0);
    var ha = this.Ha(),
      jn = namespace.jn(ha);
    first_arg instanceof namespace.de && ((second_arg = first_arg.y), (first_arg = first_arg.x));
    namespace.hn(
      ha,
      ha.offsetLeft + (first_arg - jn.x),
      ha.offsetTop + (Number(second_arg) - jn.y)
    );
    visible || namespace.xn(this.Ha(), !1);
  };
  namespace.ba.getPosition = function () {
    return this.isVisible() ? namespace.jn(this.Ha()) : null;
  };
  namespace.ba.setVisible = function (first_arg, second_arg, event) {
    (second_arg = namespace.zBe.Qf.setVisible.call(this, first_arg, second_arg)) &&
      first_arg &&
      this.vH() &&
      this.C4b &&
      namespace.lBe(this).focus();
    first_arg && event && typeof event.clientX === "number"
      ? (this.ka = new namespace.de(event.clientX, event.clientY))
      : (this.ka = null);
    return second_arg;
  };
  namespace.ba.ILc = function (first_arg) {
    this.C4b && namespace.lBe(this).focus();
    return namespace.zBe.Qf.ILc.call(this, first_arg);
  };
  namespace.ba.ifd = function (first_arg) {
    return first_arg.isEnabled() && first_arg.isVisible() && namespace.oJ(first_arg, 2);
  };
  namespace.ba.cX = function (first_arg) {
    var d_s = this.dS();
    var lk = this.Lk();
    lk = namespace.qKa(lk.ka, "DIV", d_s.Eab() + "-content", first_arg);
    var len = lk.length;
    for (let index = 0; index < len; index++) namespace.kBe(d_s, this, lk[index]);
    namespace.zBe.Qf.cX.call(this, first_arg);
  };
  namespace.ba.zvc = function (event) {
    var call = namespace.zBe.Qf.zvc.call(this, event);
    call ||
      namespace.NMa(
        this,
        function (first_arg) {
          !call &&
            first_arg.aqe &&
            first_arg.IUc == event.keyCode &&
            (this.isEnabled() && this.Iwa(namespace.iBe(this, first_arg)),
            (call = first_arg.EX(event)));
        },
        this
      );
    return call;
  };
  namespace.ba.Iwa = function (first_arg) {
    namespace.zBe.Qf.Iwa.call(this, first_arg);
    (first_arg = namespace.PMa(this, first_arg)) && namespace.qLa(first_arg.Ha(), this.Ha());
  };
  var local_23, local_24, cls_72;
  namespace.IBe = function (first_arg, second_arg, third_arg, fourth_arg) {
    namespace.EBe.call(this, first_arg, second_arg, third_arg || fourth_arg);
    if (third_arg || fourth_arg) this.ka = 65 | (fourth_arg ? 32 : 132);
  };
  local_23 = function () {};
  local_24 = function () {
    this.wa = [];
  };
  cls_72 = function (first_arg, second_arg, third_arg, fourth_arg) {
    namespace.qJ.call(this, first_arg, second_arg, third_arg, fourth_arg || local_24.getInstance());
  };
  namespace.sJ = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
    namespace.eBe.call(this, first_arg, third_arg || local_23.getInstance(), fourth_arg);
    this.q2(64, !0);
    this.Aa = new namespace.IBe(null, 9);
    second_arg && this.o2(second_arg);
    this.Yt = new namespace.Le(500);
    this.oc = fifth_arg || namespace.yBe.getInstance();
  };
  namespace.Xi(namespace.IBe, namespace.EBe);
  namespace.Xi(local_23, namespace.GBe);
  namespace.Ui(local_23);
  local_23.prototype.Fma = function (element) {
    return local_23.Qf.Fma.call(this, element && element.firstChild);
  };
  local_23.prototype.Pw = function (first_arg, second_arg) {
    var local_44 = namespace.Gm("*", "goog-menu", second_arg)[0];
    if (local_44) {
      namespace.xn(local_44, !1);
      namespace.se(local_44).body.appendChild(local_44);
      let z_be = new namespace.zBe();
      z_be.Pw(local_44);
      first_arg.o2(z_be);
    }
    return local_23.Qf.Pw.call(this, first_arg, second_arg);
  };
  local_23.prototype.D4b = function (first_arg, second_arg) {
    return local_23.Qf.D4b.call(
      this,
      [
        second_arg.yr("DIV", "goog-inline-block " + (this.jC() + "-caption"), first_arg),
        second_arg.yr("DIV", "goog-inline-block " + (this.jC() + "-dropdown"), "\u00a0")
      ],
      second_arg
    );
  };
  local_23.prototype.jC = function () {
    return "goog-menu-button";
  };
  namespace.Xi(local_24, namespace.vBe);
  namespace.Ui(local_24);
  local_24.prototype.G7 = function (first_arg) {
    var call = local_24.Qf.G7.call(this, first_arg);
    namespace.Pd(call, "GCqEwd");
    fn_369(this, first_arg, call);
    return call;
  };
  local_24.prototype.Pw = function (first_arg, second_arg) {
    second_arg = local_24.Qf.Pw.call(this, first_arg, second_arg);
    namespace.Pd(second_arg, "GCqEwd");
    fn_369(this, first_arg, second_arg);
    var gm = namespace.Gm("DIV", "goog-menu", second_arg);
    if (gm.length) {
      let z_be = new namespace.zBe(first_arg.Lk());
      gm = gm[0];
      namespace.xn(gm, !1);
      first_arg.Lk().getDocument().body.appendChild(gm);
      z_be.Pw(gm);
      first_arg.o2(z_be, !0);
    }
    return second_arg;
  };
  local_24.prototype.setContent = function (first_arg, second_arg) {
    var fma = this.Fma(first_arg),
      local_44 = fma && fma.lastChild;
    local_24.Qf.setContent.call(this, first_arg, second_arg);
    local_44 &&
      fma.lastChild != local_44 &&
      namespace.Nd(local_44, "em4cde") &&
      fma.appendChild(local_44);
  };
  local_24.prototype.w4b = function (first_arg) {
    local_24.Qf.w4b.call(this, first_arg);
    var lw = first_arg.LW(),
      lk = first_arg.Lk();
    lk = namespace.qKa(lk.ka, "SPAN", "em4cde", lw)[0];
    fn_370(first_arg, lk);
    lk != lw.lastChild && lw.appendChild(lk);
    first_arg = first_arg.Ha();
    namespace.pe(first_arg, "haspopup", "true");
  };
  var fn_369 = function (first_arg, second_arg, third_arg) {
      var yr = second_arg.Lk().yr("SPAN");
      yr.className = "em4cde";
      fn_370(second_arg, yr);
      first_arg.Fma(third_arg).appendChild(yr);
    },
    fn_370 = function (first_arg, second_arg) {
      namespace.EAe(first_arg)
        ? (namespace.Pd(second_arg, "goog-submenu-arrow-rtl"), namespace.Wm(second_arg, "\u25c4"))
        : (namespace.Rd(second_arg, "goog-submenu-arrow-rtl"), namespace.Wm(second_arg, "\u25ba"));
    };
  namespace.Xi(cls_72, namespace.qJ);
  namespace.ba = cls_72.prototype;
  namespace.ba.XGb = null;
  namespace.ba.Avc = null;
  namespace.ba.oUc = !1;
  namespace.ba.k$ = null;
  namespace.ba.N$b = !1;
  namespace.ba.qx = function () {
    cls_72.Qf.qx.call(this);
    namespace.Mn(this).listen(this.getParent(), "hide", this.PFd);
    this.k$ && fn_373(this, this.k$, !0);
  };
  namespace.ba.VR = function () {
    namespace.Mn(this).unlisten(this.getParent(), "hide", this.PFd);
    this.k$ && (fn_373(this, this.k$, !1), this.N$b || (this.k$.VR(), namespace.Um(this.k$.Ha())));
    cls_72.Qf.VR.call(this);
  };
  namespace.ba.Jc = function () {
    this.k$ && !this.N$b && this.k$.dispose();
    this.k$ = null;
    cls_72.Qf.Jc.call(this);
  };
  namespace.ba.ZCa = function (first_arg) {
    cls_72.Qf.ZCa.call(this, first_arg);
    first_arg ||
      (this.XGb && namespace.Ln(this.XGb), (this.XGb = namespace.Kn(this.zTa, 218, this)));
  };
  namespace.ba.w2c = function () {
    var parent = this.getParent();
    parent && parent.NT() == this && (fn_372(this, !0), fn_371(this));
  };
  namespace.ba.zTa = function () {
    if (!this.isDisposed()) {
      var local_44 = this.k$;
      local_44 &&
        local_44.getParent() == this &&
        (fn_372(this, !1),
        namespace.NMa(local_44, function (first_arg) {
          typeof first_arg.zTa == "function" && first_arg.zTa();
        }));
    }
  };
  namespace.ba.fLa = function () {
    this.XGb && namespace.Ln(this.XGb);
    this.Avc && namespace.Ln(this.Avc);
  };
  namespace.ba.setVisible = function (first_arg, second_arg) {
    (first_arg = cls_72.Qf.setVisible.call(this, first_arg, second_arg)) &&
      !this.isVisible() &&
      this.zTa();
    return first_arg;
  };
  var fn_371 = function (first_arg) {
    namespace.NMa(
      first_arg.getParent(),
      function (first_arg_2) {
        first_arg_2 != this &&
          typeof first_arg_2.zTa == "function" &&
          (first_arg_2.zTa(), first_arg_2.fLa());
      },
      first_arg
    );
  };
  namespace.ba = cls_72.prototype;
  namespace.ba.EX = function (event) {
    var key_code = event.keyCode,
      local_44 = namespace.EAe(this) ? 37 : 39,
      local_45 = namespace.EAe(this) ? 39 : 37;
    if (!this.oUc) {
      if (!this.isEnabled() || (key_code != local_44 && key_code != 13 && key_code != this.IUc))
        return !1;
      this.w2c();
      namespace.oBe(fn_374(this));
      this.fLa();
    } else if (!fn_374(this).EX(event))
      if (key_code == local_45) this.zTa();
      else return !1;
    event.preventDefault();
    return !0;
  };
  namespace.ba.LKe = function () {
    if (this.k$.getParent() == this) {
      this.fLa();
      var nfb = this.Nfb();
      nfb.Iwa(namespace.iBe(nfb, this));
      fn_371(this);
    }
  };
  namespace.ba.PFd = function (event) {
    event.target == this.Nfb() && (this.zTa(), this.fLa());
  };
  namespace.ba.WGb = function (first_arg) {
    this.isEnabled() && (this.fLa(), (this.Avc = namespace.Kn(this.w2c, 218, this)));
    cls_72.Qf.WGb.call(this, first_arg);
  };
  namespace.ba.P7a = function (first_arg) {
    this.fLa();
    if (namespace.oJ(this, 8) || namespace.oJ(this, 16)) return cls_72.Qf.P7a.call(this, first_arg);
    this.w2c();
    return !0;
  };
  var fn_372 = function (first_arg, second_arg) {
      !second_arg && fn_374(first_arg) && fn_374(first_arg).Iwa(-1);
      first_arg.dispatchEvent(namespace.OAe(64, second_arg));
      var local_44 = fn_374(first_arg);
      second_arg != first_arg.oUc && namespace.Td(first_arg.Ha(), "goog-submenu-open", second_arg);
      if (
        second_arg != local_44.isVisible() &&
        (second_arg && (local_44.vH() || local_44.render(), local_44.Iwa(-1)),
        local_44.setVisible(second_arg),
        second_arg)
      ) {
        local_44 = new namespace.EBe(first_arg.Ha(), 12, !1);
        let local_45 = fn_374(first_arg),
          ha = local_45.Ha();
        local_45.isVisible() || ((ha.style.visibility = "hidden"), namespace.xn(ha, !0));
        local_44.reposition(ha, 8);
        local_45.isVisible() || (namespace.xn(ha, !1), (ha.style.visibility = "visible"));
      }
      first_arg.oUc = second_arg;
    },
    fn_373 = function (first_arg, second_arg, third_arg) {
      var mn = namespace.Mn(first_arg);
      (third_arg ? mn.listen : mn.unlisten).call(mn, second_arg, "enter", first_arg.LKe);
    };
  cls_72.prototype.removeItem = function (first_arg) {
    (first_arg = fn_374(this).removeChild(first_arg, !0)) && first_arg.dispose();
  };
  cls_72.prototype.Rk = function () {
    return fn_374(this).Rk();
  };
  var fn_374 = function (first_arg) {
    first_arg.k$
      ? first_arg.N$b && first_arg.k$.getParent() != first_arg && first_arg.k$.setParent(first_arg)
      : first_arg.o2(new namespace.zBe(first_arg.Lk()), !0);
    first_arg.k$.Ha() || first_arg.k$.cM();
    return first_arg.k$;
  };
  cls_72.prototype.o2 = function (first_arg, second_arg) {
    var local_44 = this.k$;
    first_arg != local_44 &&
      (local_44 && (this.zTa(), this.vH() && fn_373(this, local_44, !1)),
      (this.k$ = first_arg),
      (this.N$b = !second_arg),
      first_arg &&
        (first_arg.setParent(this),
        first_arg.setVisible(!1, !0),
        (first_arg.C4b = !1),
        first_arg.ria(!1),
        this.vH() && fn_373(this, first_arg, !0)));
  };
  cls_72.prototype.gTa = function (first_arg) {
    return fn_374(this).gTa(first_arg);
  };
  namespace.MAe("GCqEwd", function () {
    return new cls_72(null);
  });
  namespace.Xi(namespace.sJ, namespace.eBe);
  namespace.ba = namespace.sJ.prototype;
  namespace.ba.qx = function () {
    namespace.sJ.Qf.qx.call(this);
    fn_376(this, !0);
    this.ka && fn_375(this, this.ka, !0);
    namespace.pe(this.Xd, "haspopup", !!this.ka);
  };
  namespace.ba.VR = function () {
    namespace.sJ.Qf.VR.call(this);
    fn_376(this, !1);
    if (this.ka) {
      this.JH(!1);
      this.ka.VR();
      fn_375(this, this.ka, !1);
      let ha = this.ka.Ha();
      ha && namespace.Um(ha);
    }
  };
  namespace.ba.Jc = function () {
    namespace.sJ.Qf.Jc.call(this);
    this.ka && (this.ka.dispose(), delete this.ka);
    delete this.hc;
    this.Yt.dispose();
  };
  namespace.ba.YCa = function (first_arg) {
    namespace.sJ.Qf.YCa.call(this, first_arg);
    if (this.isActive() && (this.JH(!this.isOpen(), first_arg), this.ka)) {
      first_arg = this.ka;
      var open = this.isOpen();
      first_arg.aYa = open;
    }
  };
  namespace.ba.cra = function (first_arg) {
    namespace.sJ.Qf.cra.call(this, first_arg);
    this.ka && !this.isActive() && (this.ka.aYa = !1);
  };
  namespace.ba.P7a = function () {
    this.setActive(!1);
    return !0;
  };
  namespace.ba.Use = function (event) {
    this.ka && this.ka.isVisible() && !this.gTa(event.target) && this.JH(!1);
  };
  namespace.ba.gTa = function (first_arg) {
    return (
      (first_arg && namespace.kh(this.Ha(), first_arg)) || (this.ka && this.ka.gTa(first_arg)) || !1
    );
  };
  namespace.ba.Lqb = function (event) {
    if (event.keyCode == 32) {
      if ((event.preventDefault(), event.type != "keyup")) return !0;
    } else if (event.type != "key") return !1;
    if (this.ka && this.ka.isVisible()) {
      let local_44 = event.keyCode == 13 || event.keyCode == 32,
        ex = this.ka.EX(event);
      return (ex && this.ka && this.ka.V6 instanceof cls_72) || (event.keyCode != 27 && !local_44)
        ? ex
        : (this.JH(!1), !0);
    }
    return event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 32 || event.keyCode == 13
      ? (this.JH(!0, event), !0)
      : !1;
  };
  namespace.ba.Bvc = function () {
    this.JH(!1);
  };
  namespace.ba.y4b = function (first_arg) {
    this.JH(!1);
    namespace.sJ.Qf.y4b.call(this, first_arg);
  };
  namespace.TBe = function (first_arg) {
    first_arg.ka || first_arg.o2(new namespace.zBe(first_arg.Lk(), first_arg.oc));
    return first_arg.ka || null;
  };
  namespace.sJ.prototype.o2 = function (first_arg) {
    var ka = this.ka;
    first_arg != ka &&
      (ka && (this.JH(!1), this.vH() && fn_375(this, ka, !1), delete this.ka),
      this.vH() && namespace.pe(this.Xd, "haspopup", !!first_arg),
      first_arg &&
        ((this.ka = first_arg),
        first_arg.setParent(this),
        first_arg.setVisible(!1),
        (first_arg.C4b = !1),
        this.vH() && fn_375(this, first_arg, !0)));
    return ka;
  };
  namespace.sJ.prototype.removeItem = function (first_arg) {
    (first_arg = namespace.TBe(this).removeChild(first_arg, !0)) && first_arg.dispose();
  };
  namespace.sJ.prototype.setVisible = function (first_arg, second_arg) {
    (first_arg = namespace.sJ.Qf.setVisible.call(this, first_arg, second_arg)) &&
      !this.isVisible() &&
      this.JH(!1);
    return first_arg;
  };
  namespace.sJ.prototype.setEnabled = function (first_arg) {
    namespace.sJ.Qf.setEnabled.call(this, first_arg);
    this.isEnabled() || this.JH(!1);
  };
  namespace.UBe = function (first_arg) {
    first_arg = first_arg.Aa;
    return !!(first_arg && first_arg.Ga && first_arg.ka & 32);
  };
  namespace.sJ.prototype.JH = function (first_arg, event) {
    namespace.sJ.Qf.JH.call(this, first_arg);
    if (this.ka && !!(this.Bf & 64) == first_arg) {
      if (first_arg)
        (this.ka.vH() || this.ka.render(),
          (this.La = namespace.mLa(this.Ha())),
          (this.yb = namespace.vn(this.Ha())),
          this.kb(),
          !event || (event.keyCode != 40 && event.keyCode != 38)
            ? this.ka.Iwa(-1)
            : namespace.oBe(this.ka));
      else {
        this.setActive(!1);
        this.ka.aYa = !1;
        var ha = this.Ha();
        ha && (namespace.pe(ha, "activedescendant", ""), namespace.pe(ha, "owns", ""));
        this.Ga != null && ((this.Ga = void 0), (ha = this.ka.Ha()) && namespace.rn(ha, "", ""));
      }
      this.ka.setVisible(first_arg, !1, event);
      this.isDisposed() ||
        ((event = namespace.Mn(this)),
        (ha = first_arg ? event.listen : event.unlisten),
        ha.call(event, this.Lk().getDocument(), "mousedown", this.Use, !0),
        ha.call(event, this.Yt, "tick", this.Nb),
        first_arg ? this.Yt.start() : this.Yt.stop());
    }
    this.ka && this.ka.Ha() && namespace.qe(this.ka.Xd, "hidden");
  };
  namespace.sJ.prototype.kb = function () {
    if (this.ka.vH()) {
      var element = this.hc || this.Ha(),
        aa_2 = this.Aa;
      this.Aa.element = element;
      element = this.ka.Ha();
      this.ka.isVisible() || ((element.style.visibility = "hidden"), namespace.xn(element, !0));
      !this.Ga && namespace.UBe(this) && (this.Ga = namespace.sn(element));
      aa_2.reposition(element, aa_2.kna ^ 1, null, this.Ga);
      this.ka.isVisible() || (namespace.xn(element, !1), (element.style.visibility = "visible"));
    }
  };
  namespace.sJ.prototype.Nb = function () {
    var vn = namespace.vn(this.Ha()),
      m_la = namespace.mLa(this.Ha()),
      element;
    (element = !namespace.YKa(this.yb, vn)) ||
      ((element = this.La),
      (element = !(
        element == m_la ||
        (element &&
          m_la &&
          element.top == m_la.top &&
          element.right == m_la.right &&
          element.bottom == m_la.bottom &&
          element.left == m_la.left)
      )));
    element &&
      (this.ka.vH() &&
        m_la &&
        this.La &&
        m_la.getWidth() < this.La.getWidth() &&
        ((element = this.ka.Ha()),
        this.ka.isVisible() || ((element.style.visibility = "hidden"), namespace.xn(element, !0)),
        namespace.hn(element, new namespace.de(0, 0))),
      (this.yb = vn),
      (this.La = m_la),
      this.kb());
  };
  var fn_375 = function (first_arg, second_arg, third_arg) {
      var mn = namespace.Mn(first_arg);
      third_arg = third_arg ? mn.listen : mn.unlisten;
      third_arg.call(mn, second_arg, "action", first_arg.Bvc);
      third_arg.call(mn, second_arg, "close", first_arg.wb);
      third_arg.call(mn, second_arg, "highlight", first_arg.Kb);
      third_arg.call(mn, second_arg, "unhighlight", first_arg.Mb);
    },
    fn_376 = function (first_arg, second_arg) {
      var mn = namespace.Mn(first_arg);
      (second_arg ? mn.listen : mn.unlisten).call(mn, first_arg.Ha(), "keydown", first_arg.Vb);
    };
  namespace.sJ.prototype.Kb = function (event) {
    (event = event.target.Ha()) && fn_377(this, event);
  };
  namespace.sJ.prototype.Vb = function (event) {
    namespace.oJ(this, 32) &&
      this.Ha() &&
      this.ka &&
      this.ka.isVisible() &&
      event.stopPropagation();
  };
  namespace.sJ.prototype.Mb = function () {
    if (!this.ka.NT()) {
      let ha = this.Ha();
      namespace.pe(ha, "activedescendant", "");
      namespace.pe(ha, "owns", "");
    }
  };
  namespace.sJ.prototype.wb = function (event) {
    if (this.isOpen() && event.target instanceof namespace.qJ) {
      event = event.target;
      let ha = event.Ha();
      event.isVisible() && event.isHighlighted() && ha != null && fn_377(this, ha);
    }
  };
  var fn_377 = function (first_arg, second_arg) {
    first_arg = first_arg.Ha();
    second_arg = namespace.ama(second_arg) || second_arg;
    if (!second_arg.id) {
      let instance = namespace.yma.getInstance();
      second_arg.id = namespace.LMa(instance);
    }
    namespace.bma(first_arg, second_arg);
    namespace.pe(first_arg, "owns", second_arg.id);
  };
  namespace.MAe("goog-menu-button", function () {
    return new namespace.sJ(null);
  });
  namespace.vAe = function (first_arg, second_arg, third_arg) {
    w_ae.listen(second_arg, third_arg, void 0, first_arg.Ka || first_arg, first_arg);
  };
  var fn_378 = function () {},
    w_ae = new fn_378(),
    list_35 = ["click", "keydown", "keyup"];
  fn_378.prototype.listen = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
    var fn_457 = function (event) {
      var lla = namespace.LLa(second_arg),
        local_44 = namespace.ah(event.target) ? namespace.Zla(event.target) : null;
      event.type == "click" && namespace.BLa(event)
        ? lla.call(fourth_arg, event)
        : (event.keyCode != 13 && event.keyCode != 3) || event.type == "keyup"
          ? event.keyCode != 32 ||
            (local_44 != "button" && local_44 != "tab" && local_44 != "radio") ||
            (event.type == "keyup" && lla.call(fourth_arg, event), event.preventDefault())
          : ((event.type = "keypress"), lla.call(fourth_arg, event));
    };
    fn_457.TX = second_arg;
    fn_457.PTe = fourth_arg;
    fifth_arg
      ? fifth_arg.listen(first_arg, list_35, fn_457, third_arg)
      : namespace.De(first_arg, list_35, fn_457, third_arg);
  };
  fn_378.prototype.unlisten = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
    var local_44;
    for (let index = 0; (local_44 = list_35[index]); index++) {
      let sla = namespace.SLa(first_arg, local_44, !!third_arg),
        local_45;
      for (let index_2 = 0; (local_45 = sla[index_2]); index_2++) {
        let listener = local_45.listener;
        if (listener.TX == second_arg && listener.PTe == fourth_arg) {
          fifth_arg
            ? fifth_arg.unlisten(first_arg, local_44, local_45.listener, third_arg, fourth_arg)
            : namespace.En(first_arg, local_44, local_45.listener, third_arg, fourth_arg);
          break;
        }
      }
    }
  };
  var fn_379, fn_380, fn_381, fn_382, fn_383, fn_384;
  fn_379 = function (first_arg) {
    return first_arg == 0 || first_arg == 3;
  };
  fn_380 = function (first_arg, second_arg) {
    switch (first_arg) {
      case 2:
        return second_arg == 0 ? 1 : 5;
      case 1:
        return second_arg == 0 ? 0 : 4;
      case 0:
        return second_arg == 0 ? 12 : 13;
      default:
        return second_arg == 0 ? 8 : 9;
    }
  };
  fn_381 = function (first_arg, second_arg) {
    var num_30 = 0,
      num_31 = 0;
    first_arg = namespace.sn(first_arg);
    switch (second_arg) {
      case 2:
        num_30 = first_arg.width / 2;
        break;
      case 1:
        num_30 = first_arg.width / 2;
        num_31 = first_arg.height;
        break;
      case 0:
        num_31 = first_arg.height / 2;
        break;
      case 3:
        ((num_30 = first_arg.width), (num_31 = first_arg.height / 2));
    }
    return new namespace.de(num_30, num_31);
  };
  fn_382 = function (first_arg, second_arg) {
    return 15 > second_arg ? 15 : namespace.Yd(first_arg, 15, second_arg);
  };
  fn_383 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg) {
    if (first_arg.oa) {
      var local_44 = fn_380(second_arg, third_arg);
      var oa = first_arg.oa;
      var local_45 = local_44,
        sn = namespace.sn(oa);
      sn = (fn_379(second_arg) ? sn.height / 2 : sn.width / 2) - fourth_arg;
      local_45 = namespace.zec(oa, local_45);
      var local_46;
      if ((local_46 = namespace.mLa(oa)))
        ((oa = namespace.WKa(namespace.vn(oa))),
          fn_379(second_arg)
            ? oa.top < local_46.top && !(local_45 & 1)
              ? (sn -= local_46.top - oa.top)
              : oa.bottom > local_46.bottom && local_45 & 1 && (sn -= oa.bottom - local_46.bottom)
            : oa.left < local_46.left && !(local_45 & 4)
              ? (sn -= local_46.left - oa.left)
              : oa.right > local_46.right && local_45 & 4 && (sn -= oa.right - local_46.right));
      oa = sn;
      oa = fn_379(second_arg)
        ? new namespace.de(first_arg.jWc, oa)
        : new namespace.de(oa, first_arg.jWc);
      sn = fn_379(second_arg) ? 6 : 9;
      first_arg.I5b && fifth_arg == 2 && (sn = fn_379(second_arg) ? 4 : 1);
      local_45 = second_arg ^ 3;
      local_46 = first_arg.oa;
      fn_379(second_arg) && local_46 && local_46.dir == "rtl" && (local_45 = second_arg);
      local_44 = namespace.Xx(
        first_arg.oa,
        fn_380(local_45, third_arg),
        first_arg.ka,
        local_44,
        oa,
        sixth_arg,
        first_arg.lPc ? sn : 0,
        void 0,
        null
      );
      if (fifth_arg != 2 && local_44 & 496) {
        fn_383(
          first_arg,
          second_arg ^ 3,
          third_arg,
          fourth_arg,
          first_arg.I5b && fifth_arg == 0 ? 1 : 2,
          sixth_arg
        );
        return;
      }
      local_44 & 496 ||
        ((fifth_arg = parseFloat(first_arg.ka.style.left)),
        (sixth_arg = parseFloat(first_arg.ka.style.top)),
        (isFinite(fifth_arg) && fifth_arg % 1 == 0 && isFinite(sixth_arg) && sixth_arg % 1 == 0) ||
          namespace.hn(first_arg.ka, Math.round(fifth_arg), Math.round(sixth_arg)));
    }
    fn_384(first_arg, second_arg, third_arg, fourth_arg);
  };
  fn_384 = function (element, second_arg, third_arg, fourth_arg) {
    var ba = element.Ba;
    namespace.Bc(
      element.Aa,
      function (first_arg) {
        namespace.Td(ba, first_arg, !1);
      },
      element
    );
    namespace.Pd(ba, element.Aa[second_arg]);
    ba.style.top = ba.style.left = ba.style.right = ba.style.bottom = "";
    element.oa
      ? ((third_arg = namespace.on(element.oa, element.ka)),
        (fourth_arg = fn_381(element.oa, second_arg)),
        (element = element.ka),
        fn_379(second_arg)
          ? (ba.style.top = fn_382(third_arg.y + fourth_arg.y, element.offsetHeight - 15) + "px")
          : (ba.style.left = fn_382(third_arg.x + fourth_arg.x, element.offsetWidth - 15) + "px"))
      : (ba.style[
          third_arg == 0
            ? fn_379(second_arg)
              ? "top"
              : "left"
            : fn_379(second_arg)
              ? "bottom"
              : "right"
        ] = fourth_arg + "px");
  };
  namespace.tAe = class extends namespace.mAe {
    constructor(first_arg) {
      super();
      this.wa = first_arg;
      this.Aa = {
        0: this.wa + "-arrowright",
        1: this.wa + "-arrowup",
        2: this.wa + "-arrowdown",
        3: this.wa + "-arrowleft"
      };
    }
    Vea(first_arg) {
      this.oa = first_arg;
    }
    setPosition(first_arg, second_arg, third_arg, fourth_arg) {
      first_arg != null && (this.Nzc = first_arg);
      second_arg != null && (this.Hyc = second_arg);
      typeof third_arg === "number" && (this.ndd = Math.max(third_arg, 15));
      typeof fourth_arg === "number" && (this.jWc = fourth_arg);
    }
    reposition(first_arg, element, third_arg) {
      first_arg = this.Hyc;
      first_arg == 2 && (first_arg = 0);
      this.Hyc == 2
        ? ((element = this.ka),
          (element = fn_379(this.Nzc) ? element.offsetHeight / 2 : element.offsetWidth / 2))
        : (element = this.ndd);
      fn_383(this, this.Nzc, first_arg, element, 0, third_arg);
    }
  };
  namespace.ba = namespace.tAe.prototype;
  namespace.ba.lPc = !1;
  namespace.ba.Hyc = 2;
  namespace.ba.ndd = 20;
  namespace.ba.Nzc = 3;
  namespace.ba.jWc = -5;
  namespace.ba.I5b = !1;
  namespace.jAe = function () {
    namespace.xe.call(this);
    this.Bf = 0;
    this.endTime = this.startTime = null;
  };
  namespace.Xi(namespace.jAe, namespace.xe);
  namespace.jAe.prototype.isPlaying = function () {
    return this.Bf == 1;
  };
  namespace.jAe.prototype.isPaused = function () {
    return this.Bf == -1;
  };
  namespace.jAe.prototype.RAa = function () {
    this.ALa("begin");
  };
  namespace.jAe.prototype.onEnd = function () {
    this.ALa("end");
  };
  namespace.kAe = function (first_arg) {
    first_arg.ALa("finish");
  };
  namespace.ba = namespace.jAe.prototype;
  namespace.ba.onPause = function () {
    this.ALa("pause");
  };
  namespace.ba.onPlay = function () {
    this.ALa("play");
  };
  namespace.ba.onResume = function () {
    this.ALa("resume");
  };
  namespace.ba.onStop = function () {
    this.ALa("stop");
  };
  namespace.ba.ALa = function (first_arg) {
    this.dispatchEvent(first_arg);
  };
  namespace.UG = function (first_arg, list_50) {
    Array.isArray(list_50) || (list_50 = [list_50]);
    list_50 = list_50.map(function (first_arg_2) {
      return typeof first_arg_2 === "string"
        ? first_arg_2
        : first_arg_2.property +
            " " +
            first_arg_2.duration +
            "s " +
            first_arg_2.timing +
            " " +
            first_arg_2.delay +
            "s";
    });
    namespace.TNd(first_arg, list_50.join(","));
  };
  namespace.TNd = function (first_arg, second_arg) {
    namespace.cn(first_arg, "transition", second_arg);
  };
  namespace.UNd = namespace.Ge(function () {
    var fg = namespace.Fg("DIV"),
      xla = namespace.Xla(),
      text_5 = "transition:opacity 1s linear;";
    xla && (text_5 += xla + "-transition:opacity 1s linear;");
    namespace.Uc(fg, namespace.dja("div", { style: text_5 }));
    return namespace.dn(fg.firstChild, "transition") != "";
  });
  namespace.lAe = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
    namespace.jAe.call(this);
    this.Xd = first_arg;
    this.wa = second_arg;
    this.Ba = third_arg;
    this.ka = fourth_arg;
    this.Aa = Array.isArray(fifth_arg) ? fifth_arg : [fifth_arg];
  };
  namespace.Xi(namespace.lAe, namespace.jAe);
  namespace.ba = namespace.lAe.prototype;
  namespace.ba.play = function () {
    if (this.isPlaying()) return !1;
    this.RAa();
    this.onPlay();
    this.startTime = namespace.gd();
    this.Bf = 1;
    if (namespace.UNd())
      return (namespace.cn(this.Xd, this.Ba), (this.oa = namespace.Kn(this.b0d, void 0, this)), !0);
    this.rvc(!1);
    return !1;
  };
  namespace.ba.b0d = function () {
    namespace.sn(this.Xd);
    namespace.UG(this.Xd, this.Aa);
    namespace.cn(this.Xd, this.ka);
    this.oa = namespace.Kn(this.rvc.bind(this, !1), this.wa * 1e3);
  };
  namespace.ba.stop = function () {
    this.isPlaying() && this.rvc(!0);
  };
  namespace.ba.rvc = function (first_arg) {
    namespace.TNd(this.Xd, "");
    namespace.Ln(this.oa);
    namespace.cn(this.Xd, this.ka);
    this.endTime = namespace.gd();
    this.Bf = 0;
    if (first_arg) this.onStop();
    else namespace.kAe(this);
    this.onEnd();
  };
  namespace.ba.Jc = function () {
    this.stop();
    namespace.lAe.Qf.Jc.call(this);
  };
  namespace.ba.pause = function () {};
  var list_36 = [0, namespace.C, namespace.Cl, -1, namespace.C];
  namespace.xze = [
    -37,
    namespace.uze,
    namespace.E,
    namespace.C,
    list_36,
    -1,
    namespace.C,
    namespace.E,
    namespace.C,
    1,
    namespace.B,
    1,
    list_36,
    1,
    namespace.B,
    -1,
    1,
    namespace.B,
    1,
    namespace.C,
    2,
    list_36,
    namespace.B,
    1,
    [0, namespace.Cl, -3],
    namespace.B,
    namespace.pl,
    namespace.Cl,
    namespace.C,
    -1,
    namespace.B,
    [0, namespace.B, -2],
    [
      0,
      namespace.Ol,
      -6,
      namespace.BGa,
      namespace.Nl,
      namespace.Fl,
      namespace.Cl,
      -2,
      namespace.Ol,
      namespace.ll,
      -1,
      namespace.BGa,
      namespace.gl,
      -1
    ],
    1,
    [0, namespace.B, namespace.Nl],
    namespace.C,
    namespace.B
  ];
  namespace.iJ = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg, 2);
    }
    HD() {
      return namespace.Ah(this, namespace.fJ, 1);
    }
  };
  namespace.iJ.prototype.Za = "U9CFPc";
  namespace.Bze = [-2, {}, namespace.D, namespace.xze];
  namespace.vze = {};
  namespace.yze = [4, 30];
  namespace.zze = [0, 1, [0, namespace.D, [0, namespace.Hl, -1, 1, namespace.il]]];
  namespace.Aze = [
    -56,
    namespace.vze,
    namespace.E,
    namespace.xze,
    1,
    [
      0,
      namespace.Cl,
      -9,
      2,
      namespace.B,
      -1,
      namespace.Cl,
      namespace.B,
      namespace.Dl,
      namespace.$l,
      namespace.Cl,
      -1
    ],
    namespace.Cl,
    1,
    [
      0,
      1,
      namespace.C,
      -4,
      namespace.Nl,
      namespace.D,
      [
        0,
        namespace.C,
        namespace.Cl,
        1,
        namespace.C,
        1,
        namespace.D,
        [
          0,
          namespace.C,
          namespace.B,
          namespace.Cl,
          namespace.il,
          -1,
          namespace.C,
          namespace.Cl,
          namespace.il,
          namespace.Cl,
          namespace.Hl,
          1,
          namespace.Go
        ]
      ],
      1,
      namespace.il,
      -2,
      namespace.Hl,
      -1,
      namespace.Kl,
      namespace.Nl,
      namespace.B,
      -1,
      1,
      namespace.D,
      [0, namespace.C, namespace.il],
      namespace.Nl,
      -1,
      namespace.B,
      -2,
      namespace.D,
      [0, namespace.C, namespace.il, namespace.Cl, namespace.Go, namespace.C],
      [0, namespace.Go, namespace.C, -5, 1, namespace.C],
      namespace.Go
    ],
    namespace.C,
    namespace.Cl,
    3,
    [
      0,
      namespace.yze,
      [8, 9, 22],
      namespace.C,
      2,
      namespace.Ql,
      namespace.C,
      -1,
      namespace.E,
      namespace.Sl,
      [
        0,
        [1, 8],
        namespace.bm,
        namespace.B,
        namespace.$l,
        1,
        namespace.$l,
        namespace.B,
        namespace.Cl,
        namespace.bm,
        namespace.E,
        namespace.Cl
      ],
      namespace.Sl,
      [0, namespace.E, namespace.B, namespace.Cl, 1, namespace.Cl, -2],
      2,
      [
        0,
        namespace.$l,
        -2,
        namespace.E,
        namespace.$l,
        namespace.D,
        [0, namespace.C, namespace.$l, -1, namespace.wl],
        namespace.am,
        -1,
        namespace.B,
        namespace.Cl,
        namespace.B,
        namespace.$l,
        -1,
        1,
        namespace.Cl,
        [0, namespace.Cl, -1],
        namespace.B
      ],
      1,
      namespace.Cl,
      namespace.E,
      namespace.C,
      [0, namespace.B, 1, namespace.Cl, namespace.C, -1],
      namespace.C,
      namespace.Cl,
      2,
      namespace.Sl,
      [0, 4, namespace.B, 2, namespace.B],
      4,
      namespace.Cl,
      2,
      namespace.Sl,
      [0, namespace.D, [0, namespace.C, namespace.E]],
      2,
      namespace.B,
      namespace.dm
    ],
    namespace.xp,
    [0, namespace.E, -3, namespace.B, 1, namespace.E, -1, namespace.B, -6],
    1,
    namespace.zze,
    3,
    namespace.Cl,
    [0, 1, namespace.B, 1, namespace.B, -1, namespace.E],
    2,
    [0, 4, namespace.B],
    12,
    namespace.C,
    5,
    namespace.C,
    1,
    [
      0,
      namespace.C,
      [0, namespace.C, 2, namespace.B, namespace.YPb, namespace.B, -1],
      namespace.C,
      1,
      namespace.E,
      [0, namespace.C, -2, namespace.Cl, namespace.C, namespace.E],
      namespace.Cl
    ],
    1,
    namespace.B,
    6,
    namespace.C
  ];
  namespace.gJ = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg, 1);
    }
  };
  namespace.hJ = {};
  namespace.gJ.prototype.Za = "pITJh";
  var local_25;
  namespace.Cze = function (first_arg, second_arg) {
    return namespace.rh(first_arg, 1, second_arg);
  };
  local_25 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
    Rn() {
      return namespace.$e(this, 1);
    }
    Wk() {
      return namespace.$e(this, 2);
    }
    Ds() {
      return namespace.$e(this, 7);
    }
    TFa() {
      return namespace.Ze(this, 7);
    }
  };
  local_25.prototype.Za = "o53Afe";
  var cls_73 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
      getUrl() {
        return namespace.u(this, 1);
      }
      Pd() {
        return namespace.Ch(this, 1);
      }
      Gb() {
        return namespace.A(this, 6);
      }
      hasHidden() {
        return namespace.Nk(this, 7);
      }
      JQ() {
        return namespace.p(this, namespace.Uu, 5);
      }
      d1() {
        return namespace.gj(this, 5);
      }
    },
    cls_74 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
      getLabel() {
        return namespace.u(this, 1);
      }
      setLabel(first_arg) {
        return namespace.rh(this, 1, first_arg);
      }
      Xk() {
        return namespace.Ch(this, 1);
      }
      Qh() {
        return namespace.p(this, cls_73, 2);
      }
      ZB() {
        return namespace.gj(this, 2);
      }
      cU() {
        return namespace.u(this, 3);
      }
      sza() {
        return namespace.Ch(this, 3);
      }
      getType() {
        return namespace.Qj(this, 5, 2);
      }
      setType(first_arg) {
        return namespace.li(this, 5, first_arg);
      }
      If() {
        return namespace.Xk(this, 5);
      }
      Ff() {
        return namespace.oi(this, 5);
      }
    },
    cls_75 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
      getId() {
        return namespace.u(this, 1);
      }
      Uc(first_arg) {
        return namespace.rh(this, 1, first_arg);
      }
      Yg() {
        return namespace.Ch(this, 1);
      }
      getTitle() {
        return namespace.ek(this, 4, namespace.yze);
      }
      setTitle(first_arg) {
        return namespace.Bk(this, 4, namespace.yze, first_arg);
      }
      Kd() {
        return namespace.Vk(this, 4, namespace.yze);
      }
      Hm() {
        return namespace.u(this, 18);
      }
      dA() {
        return namespace.Ch(this, 18);
      }
      getUrl() {
        return namespace.u(this, 5);
      }
      Pd() {
        return namespace.Ch(this, 5);
      }
      getContentType() {
        return namespace.Qj(this, 7);
      }
      Opd() {
        return namespace.$e(this, 19, -1);
      }
    };
  cls_75.prototype.Za = "IRVcEb";
  namespace.Hze = function (first_arg) {
    return namespace.bf(first_arg, namespace.fJ, 2);
  };
  namespace.Ize = function (first_arg, second_arg) {
    return namespace.Hb(first_arg, namespace.fJ, 2, second_arg);
  };
  namespace.Jze = function (first_arg) {
    return namespace.p(first_arg, cls_75, 13);
  };
  namespace.jJ = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg, 56);
    }
    getId() {
      return namespace.u(this, 8);
    }
    Uc(first_arg) {
      return namespace.rh(this, 8, first_arg);
    }
    Yg() {
      return namespace.Ch(this, 8);
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
    Ld() {
      return namespace.p(this, namespace.fJ, 2);
    }
    Nk() {
      return namespace.gj(this, 2);
    }
    Aa() {
      return namespace.zj(this, namespace.fJ, 2);
    }
    xga() {
      return namespace.p(this, cls_74, 46);
    }
    mza() {
      return namespace.gj(this, 46);
    }
    getLayout() {
      return namespace.p(this, local_25, 4);
    }
    wa() {
      return namespace.gj(this, 13);
    }
    Lj() {
      return namespace.p(this, namespace.vp, 14);
    }
  };
  namespace.jJ.prototype.Za = "j0Opre";
  namespace.Kze = namespace.Pb(namespace.fJ);
  namespace.Lze = namespace.Pb(namespace.jJ);
  namespace.kJ = namespace.Ib(444383007, namespace.gJ, namespace.jJ);
  namespace.hJ[444383007] = namespace.Aze;
  new namespace.Ei(namespace.fJ);
  namespace.pp.XZxcdf = function (first_arg) {
    return namespace.qp(namespace.rp(first_arg.Aa()));
  };
  new namespace.Ei(namespace.iJ);
  namespace.pp.U9CFPc = namespace.op;
  namespace.Yq(namespace.iJ, namespace.fJ, function (first_arg) {
    return first_arg.HD();
  });
  var ei = new namespace.Ei(namespace.jJ);
  ei.Ta = new namespace.Ei(cls_75);
  ei.yb = namespace.kJ;
  namespace.pp.j0Opre = function (first_arg) {
    return namespace.qp(namespace.rp(namespace.Kj(first_arg, 8)));
  };
  namespace.Yq(namespace.jJ, namespace.fJ, function (first_arg) {
    first_arg = first_arg.Ld();
    return first_arg != null ? [first_arg] : [];
  });
  namespace.Yq(namespace.jJ, cls_75, function (first_arg) {
    first_arg = namespace.Jze(first_arg);
    return first_arg != null ? [first_arg] : [];
  });
  namespace.pp.IRVcEb = function (first_arg) {
    return namespace.qp(namespace.rp(namespace.Kj(first_arg, 1)));
  };
  var cls_76 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
    },
    cls_77 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
      nya() {
        return namespace.p(this, namespace.wh, 2);
      }
      aha() {
        return namespace.gj(this, 2);
      }
      getIndex() {
        return namespace.$e(this, 4);
      }
      setIndex(first_arg) {
        return namespace.tk(this, 4, first_arg);
      }
    };
  cls_77.prototype.Za = "LlFDyd";
  var list_37 = [0, namespace.C, namespace.Io, namespace.Cl, -1];
  new namespace.Ei(cls_77);
  namespace.pp.LlFDyd = function (first_arg) {
    return (
      namespace.qp(namespace.rp(namespace.Ij(first_arg, 3))) +
      "," +
      namespace.qp(namespace.rp(namespace.Ij(first_arg, 4)))
    );
  };
  var list_38 = [0, namespace.B, -1];
  var list_39 = [
    0,
    [0, namespace.C, namespace.E],
    [0, namespace.E, namespace.C],
    [0, namespace.E, namespace.B],
    [0, namespace.E]
  ];
  var list_40 = [0, namespace.Cl, -1, namespace.B, namespace.Cl, namespace.B, namespace.Cl, -2];
  var cls_78 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
    kda() {
      return namespace.Qj(this, 1);
    }
  };
  cls_78.prototype.Za = "Bql3Nb";
  namespace.Uze = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
    getMetadata() {
      return namespace.p(this, cls_76, 1);
    }
    Jj() {
      return namespace.bf(this, cls_76, 1);
    }
    Dj() {
      return namespace.u(this, 3);
    }
    Hu() {
      return namespace.Ch(this, 3);
    }
    oa() {
      return namespace.Kj(this, 3);
    }
    Hr() {
      return namespace.Nj(this, 12);
    }
    pD() {
      return namespace.Uk(this, 12);
    }
    Aa() {
      return namespace.Ij(this, 6);
    }
    wa() {
      return namespace.Ij(this, 7);
    }
  };
  namespace.Uze.prototype.Za = "i1SxDd";
  var cls_79 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
    fD() {
      return namespace.Mj(this, 1);
    }
    PV() {
      return namespace.Tk(this, 1);
    }
    wga() {
      return namespace.Hj(this, 1);
    }
    Cn() {
      return namespace.Mj(this, 2);
    }
    Eca() {
      return namespace.gf(this, 10);
    }
  };
  cls_79.prototype.Za = "GMoBff";
  var cls_80 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg, 500);
    }
    getTitle() {
      return namespace.u(this, 1);
    }
    setTitle(first_arg) {
      return namespace.rh(this, 1, first_arg);
    }
    Kd() {
      return namespace.Ch(this, 1);
    }
    Yf() {
      return namespace.u(this, 3);
    }
    Zn() {
      return namespace.Ch(this, 3);
    }
    zk() {
      return namespace.u(this, 4);
    }
    getIndex() {
      return namespace.$e(this, 5);
    }
    setIndex(first_arg) {
      return namespace.tk(this, 5, first_arg);
    }
    QVa() {
      return namespace.Kj(this, 6);
    }
    ah() {
      return namespace.u(this, 7);
    }
    kda() {
      return namespace.p(this, cls_78, 13);
    }
  };
  cls_80.prototype.Za = "OYBihd";
  var cls_81 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
    naa() {
      return namespace.Ah(this, cls_80, 1);
    }
  };
  cls_81.prototype.Za = "FHgGif";
  var cls_82 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
    getId() {
      return namespace.$e(this, 3);
    }
    Uc(first_arg) {
      return namespace.tk(this, 3, first_arg);
    }
    Yg() {
      return namespace.Ze(this, 3);
    }
  };
  cls_82.prototype.Za = "yhmqZ";
  var cls_83 = class extends namespace.m {
      constructor(first_arg) {
        super(first_arg);
      }
      L8() {
        return namespace.Qj(this, 4);
      }
      wa() {
        return namespace.di(this, cls_80, 1, list_41);
      }
      oa() {
        return namespace.di(this, cls_81, 8, list_41);
      }
    },
    list_41 = [1, 8];
  cls_83.prototype.Za = "o7lzic";
  var list_42 = [0, namespace.E];
  var list_43 = [0, namespace.E, namespace.C, namespace.pl];
  var list_44 = [
    0,
    namespace.hUb,
    namespace.B,
    namespace.C,
    namespace.Cl,
    -3,
    namespace.B,
    -3,
    namespace.gl,
    namespace.B
  ];
  var list_45 = [0, namespace.Cl, -3];
  var list_46 = [0, namespace.C, -3, namespace.Nl, namespace.cm];
  namespace.fAe = [
    -500,
    namespace.C,
    -3,
    namespace.Cl,
    namespace.C,
    -1,
    namespace.E,
    namespace.Cl,
    -1,
    [
      0,
      namespace.vl,
      -1,
      namespace.C,
      -1,
      namespace.vl,
      namespace.C,
      namespace.vl,
      namespace.nl,
      -1,
      namespace.vl,
      -1
    ],
    namespace.C,
    list_42,
    namespace.C,
    -1,
    list_45,
    namespace.B,
    namespace.Cl,
    namespace.B,
    namespace.Cl,
    list_45,
    1,
    list_46,
    namespace.Cl,
    namespace.C,
    namespace.B,
    -1,
    namespace.Cl,
    list_39,
    namespace.B,
    list_37,
    namespace.Cl,
    -2,
    namespace.Dl,
    namespace.D,
    [
      0,
      namespace.C,
      namespace.pl,
      -1,
      namespace.Cl,
      -1,
      namespace.B,
      namespace.C,
      namespace.Il,
      namespace.C,
      namespace.El,
      namespace.C
    ],
    namespace.Nl,
    namespace.C,
    977,
    [
      0,
      namespace.E,
      [0, namespace.C, -1, namespace.E, namespace.pl, namespace.B],
      [0, namespace.C, -1, namespace.pl, -2, namespace.C]
    ],
    8984,
    list_44,
    [
      0,
      namespace.E,
      namespace.C,
      1,
      namespace.C,
      namespace.B,
      [0, namespace.B, -1, namespace.E, namespace.B],
      namespace.B,
      -1,
      1,
      namespace.B
    ],
    1,
    [0, namespace.C, namespace.B],
    [0, namespace.C, -1, list_43],
    [0, namespace.il, namespace.Cl, namespace.C, -1],
    [0, namespace.Cl, namespace.C, namespace.B, -1, namespace.E],
    [0, namespace.B, namespace.Cl],
    [0, namespace.C],
    list_42,
    namespace.D,
    list_44,
    [0, namespace.E],
    1,
    [0, namespace.C],
    [0, namespace.C, namespace.B],
    1,
    [0, namespace.C, -1, list_43, namespace.Cl],
    [0, namespace.B],
    list_44,
    [0, namespace.C, namespace.B],
    [0, list_43, namespace.E],
    list_38,
    list_40,
    list_44,
    [0, namespace.Cl, namespace.B, -2],
    1,
    [0, namespace.D, [0, namespace.C, -2], namespace.Cl, namespace.B],
    [0, namespace.ql, namespace.E, namespace.pl],
    [0, namespace.C],
    [0, namespace.pl],
    [0, namespace.C],
    [0, namespace.C, -2],
    [
      0,
      namespace.C,
      namespace.B,
      namespace.C,
      -1,
      namespace.il,
      namespace.C,
      namespace.il,
      -2,
      namespace.E
    ],
    [0, namespace.C],
    [0, namespace.C, namespace.D, [0, namespace.Gs, namespace.gl, namespace.C], namespace.Gs],
    [0, namespace.pl, namespace.C, namespace.Io, -1, namespace.C],
    [0, namespace.C]
  ];
  var list_47 = [
    0,
    list_41,
    namespace.Sl,
    namespace.fAe,
    namespace.Cl,
    [0, namespace.D, list_46, namespace.pl, namespace.Cl, namespace.B],
    namespace.E,
    [
      0,
      namespace.Cl,
      namespace.C,
      namespace.Cl,
      -1,
      namespace.C,
      namespace.Cl,
      -1,
      namespace.C,
      namespace.Cl,
      namespace.B,
      namespace.Cl,
      namespace.C,
      namespace.Cl,
      namespace.B,
      namespace.C,
      -1,
      [0, namespace.B, 1, namespace.E, [0, namespace.B, -2], namespace.B, -5],
      namespace.C,
      [0, namespace.B, namespace.E],
      namespace.B,
      namespace.Cl,
      namespace.C,
      namespace.E,
      namespace.B,
      [0, namespace.B, -1, namespace.Cl],
      namespace.B,
      namespace.Cl
    ],
    namespace.Cl,
    1,
    namespace.Sl,
    [0, namespace.D, namespace.fAe, namespace.B],
    1,
    namespace.B,
    1,
    [0, namespace.Cl, namespace.E],
    namespace.B,
    list_37,
    namespace.B
  ];
  var cls_84 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
  };
  cls_84.prototype.Za = "stX3zb";
  namespace.iAe = namespace.Ib(12, namespace.jJ, cls_83);
  namespace.vze[12] = list_47;
  new namespace.Ei(cls_79);
  namespace.pp.GMoBff = function (first_arg) {
    return (
      namespace.qp(namespace.rp(first_arg.wga())) +
      "," +
      namespace.qp(namespace.rp(namespace.Hj(first_arg, 2))) +
      "," +
      namespace.qp(namespace.rp(namespace.Kj(first_arg, 3))) +
      "," +
      namespace.qp(namespace.rp(namespace.Kj(first_arg, 4))) +
      "," +
      namespace.qp(namespace.rp(namespace.Hj(first_arg, 5))) +
      "," +
      namespace.qp(namespace.rp(namespace.Kj(first_arg, 6))) +
      "," +
      namespace.qp(namespace.rp(namespace.Hj(first_arg, 7))) +
      "," +
      namespace.qp(namespace.rp(namespace.aGa(first_arg, 8))) +
      "," +
      namespace.qp(namespace.rp(namespace.aGa(first_arg, 9))) +
      "," +
      namespace.qp(namespace.rp(namespace.Hj(first_arg, 10))) +
      "," +
      namespace.qp(namespace.rp(namespace.Hj(first_arg, 11)))
    );
  };
  new namespace.Ei(cls_80);
  namespace.pp.OYBihd = function (first_arg) {
    return namespace.qp(namespace.rp(namespace.p(first_arg, cls_79, 11)));
  };
  namespace.Yq(cls_80, cls_79, function (first_arg) {
    first_arg = namespace.p(first_arg, cls_79, 11);
    return first_arg != null ? [first_arg] : [];
  });
  namespace.Yq(cls_80, cls_77, function (first_arg) {
    first_arg = namespace.p(first_arg, cls_77, 31);
    return first_arg != null ? [first_arg] : [];
  });
  new namespace.Ei(cls_82);
  namespace.pp.yhmqZ = function (first_arg) {
    return namespace.qp(namespace.rp(namespace.Ij(first_arg, 3)));
  };
  new namespace.Ei(cls_84).Oa = new namespace.Ei(cls_83);
  namespace.pp.o7lzic = function (first_arg) {
    return namespace.qp(namespace.rp(namespace.Ij(first_arg, 2)));
  };
  namespace.Yq(namespace.jJ, cls_83, function (first_arg) {
    first_arg = first_arg.getExtension(namespace.iAe);
    return first_arg != null ? [first_arg] : [];
  });
  namespace.Yq(cls_83, cls_82, function (first_arg) {
    first_arg = namespace.p(first_arg, cls_82, 3);
    return first_arg != null ? [first_arg] : [];
  });
  namespace.Yq(cls_83, cls_80, function (first_arg) {
    first_arg = first_arg.wa();
    return first_arg != null ? [first_arg] : [];
  });
  namespace.Yq(cls_83, cls_81, function (first_arg) {
    first_arg = first_arg.oa();
    return first_arg != null ? [first_arg] : [];
  });
  namespace.Yq(cls_83, cls_77, function (first_arg) {
    first_arg = namespace.p(first_arg, cls_77, 14);
    return first_arg != null ? [first_arg] : [];
  });
  new namespace.Ei(cls_81);
  namespace.pp.FHgGif = namespace.op;
  namespace.Yq(cls_81, cls_80, function (first_arg) {
    return first_arg.naa();
  });
  namespace.TPd = function (first_arg, second_arg) {
    namespace.xe.call(this);
    this.Xd = first_arg;
    first_arg = namespace.ah(this.Xd) ? this.Xd : this.Xd ? this.Xd.body : null;
    this.Aa = !!first_arg && namespace.ye(first_arg);
    this.ka = namespace.De(
      this.Xd,
      namespace.ie ? "DOMMouseScroll" : "mousewheel",
      this,
      second_arg
    );
  };
  namespace.Xi(namespace.TPd, namespace.xe);
  namespace.TPd.prototype.handleEvent = function (first_arg) {
    var num_30 = 0,
      num_31 = 0,
      fi = first_arg.Fi;
    fi.type == "mousewheel"
      ? ((first_arg = fn_385(-fi.wheelDelta)),
        fi.wheelDeltaX !== void 0
          ? ((num_30 = fn_385(-fi.wheelDeltaX)), (num_31 = fn_385(-fi.wheelDeltaY)))
          : (num_31 = first_arg))
      : ((first_arg = fi.detail),
        first_arg > 100 ? (first_arg = 3) : first_arg < -100 && (first_arg = -3),
        fi.axis !== void 0 && fi.axis === fi.HORIZONTAL_AXIS
          ? (num_30 = first_arg)
          : (num_31 = first_arg));
    typeof this.oa === "number" && (num_30 = namespace.Yd(num_30, -this.oa, this.oa));
    typeof this.wa === "number" && (num_31 = namespace.Yd(num_31, -this.wa, this.wa));
    this.Aa && (num_30 = -num_30);
    num_30 = new fn_386(first_arg, fi, num_30, num_31);
    this.dispatchEvent(num_30);
  };
  var fn_385 = function (first_arg) {
    return namespace.fe && (namespace.fEa || namespace.hEa) && first_arg % 40 != 0
      ? first_arg
      : first_arg / 40;
  };
  namespace.TPd.prototype.Jc = function () {
    namespace.TPd.Qf.Jc.call(this);
    namespace.Fn(this.ka);
    this.ka = null;
  };
  var fn_386 = function (first_arg, second_arg, third_arg, fourth_arg) {
    namespace.ve.call(this, second_arg);
    this.type = "mousewheel";
    this.detail = first_arg;
    this.deltaX = third_arg;
    this.deltaY = fourth_arg;
  };
  namespace.Xi(fn_386, namespace.ve);
  var local_26;
  namespace.N7b = namespace.dj
    ? "-ms-"
    : namespace.ie
      ? "-moz-"
      : namespace.ODa
        ? namespace.laa(namespace.oEa, "15.0") < 0
          ? "-o-"
          : "-webkit-"
        : "-webkit-";
  local_26 = namespace.dj
    ? "ms"
    : namespace.ie
      ? "Moz"
      : namespace.ODa
        ? namespace.laa(namespace.oEa, "15.0") < 0
          ? "O"
          : "webkit"
        : "webkit";
  namespace.P7b = namespace.N7b + "transform";
  namespace.Q7b = local_26 + "Transform";
  namespace.R7b = local_26 + "Transition";
  var local_27;
  namespace.S7b = function (first_arg) {
    first_arg = document.defaultView.getComputedStyle(first_arg, null)[namespace.Q7b];
    return typeof WebKitCSSMatrix != "undefined"
      ? new WebKitCSSMatrix(first_arg)
      : typeof MSCSSMatrix != "undefined"
        ? new MSCSSMatrix(first_arg)
        : typeof CSSMatrix != "undefined"
          ? new CSSMatrix(first_arg)
          : {};
  };
  local_27 = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix("");
  namespace.U7b = namespace.fe ? "webkitTransitionEnd" : "transitionend";
  namespace.V7b = function (element, second_arg, third_arg, fourth_arg) {
    element.style[namespace.R7b] =
      (third_arg || namespace.P7b) + " " + second_arg + "ms " + (fourth_arg || "ease-in-out");
  };
  namespace.W7b = function (element, second_arg, third_arg) {
    second_arg = typeof second_arg === "number" ? second_arg + "px" : second_arg || "0";
    third_arg = typeof third_arg === "number" ? third_arg + "px" : third_arg || "0";
    element.style[namespace.Q7b] = local_27
      ? "translate3d(" + second_arg + "," + third_arg + ",0)"
      : "translate(" + second_arg + "," + third_arg + ")";
  };
  var local_28, local_29, local_30, fn_387;
  local_28 = function (first_arg, second_arg, third_arg) {
    fn_388.call(this, second_arg, third_arg, 1);
    this.Ra = first_arg;
    this.Ya = new namespace.q7b();
  };
  local_29 = function (first_arg, second_arg, third_arg) {
    fn_388.call(this, second_arg, third_arg, 2);
    this.Ra = first_arg;
  };
  namespace.A7b = function (first_arg) {
    this.Aa = first_arg;
    this.Xd = this.Aa.Ha();
    this.oa = {};
    this.wa = {};
    this.ka = [];
  };
  local_30 = 0;
  namespace.C7b = function (first_arg) {
    return first_arg + "_" + local_30++;
  };
  namespace.D7b = function (first_arg, second_arg, third_arg, fourth_arg) {
    var event = document.createEvent("HTMLEvents");
    event.initEvent(second_arg, !0, !0);
    event.sender = third_arg;
    event.extraArg = fourth_arg;
    first_arg.dispatchEvent(event);
  };
  fn_387 = function (first_arg) {
    return namespace.P6b ? first_arg.pointerId : first_arg.identifier;
  };
  var fn_388 = function (first_arg, second_arg, third_arg) {
      this.Oa = first_arg;
      this.Qa = second_arg;
      this.wa = third_arg;
      this.oa = [];
      this.Ba = [];
      this.Ka = [];
      this.La = [];
      this.Ca = [];
      this.Ga = [];
    },
    fn_389;
  fn_388.prototype.ka = 0;
  var fn_390 = function (first_arg, list_50) {
    list_50 = namespace.h7b(list_50);
    var len = list_50.length;
    for (let index = 0; index < first_arg.ka; index++) {
      first_arg.Ba[index] = void 0;
      for (let index_2 = 0; index_2 < len; index_2++)
        if (first_arg.oa[index] == fn_387(list_50[index_2])) {
          first_arg.Ba[index] = list_50[index_2];
          var num_30 = !0;
          break;
        }
    }
    return num_30;
  };
  fn_388.prototype.onTouchStart = function (first_arg) {
    if (!this.Ia && this.ka != this.wa) {
      var h7b = namespace.h7b(first_arg),
        num_30 = Math.min(h7b.length, this.wa - this.ka);
      for (let index = 0; index < num_30; index++) {
        let event = h7b[index];
        this.oa[this.ka] = fn_387(event);
        this.Ca[this.ka] = event.clientX;
        this.Ga[this.ka] = event.clientY;
        this.ka++;
      }
      fn_390(this, first_arg);
      if (this.ka == this.wa) for (h7b = 0; h7b < this.wa; h7b++) this.Ka[h7b] = this.La[h7b] = 0;
      this.wb(first_arg);
    }
  };
  fn_388.prototype.onTouchMove = function (first_arg) {
    if (!this.Ia && this.ka == this.wa && fn_390(this, first_arg))
      if (this.Aa) this.hb(first_arg);
      else {
        for (let index = 0; index < this.wa; index++) {
          let event = this.Ba[index];
          if (!event) continue;
          let local_45 = this.oa[index],
            num_30 = this.Qa[local_45] - event.clientY;
          this.Ka[index] += Math.abs(this.Oa[local_45] - event.clientX);
          this.La[index] += Math.abs(num_30);
          var local_44 = local_44 || this.Ka[index] > 2 || this.La[index] > 2;
        }
        if (local_44) {
          for (local_44 = 0; local_44 < this.wa; local_44++)
            ((this.Ca[local_44] = fn_389(this, local_44)),
              (this.Ga[local_44] = namespace.H7b(this, local_44)));
          (this.Aa = this.yb(first_arg)) ? this.hb(first_arg) : this.reset();
        }
      }
  };
  fn_388.prototype.onTouchEnd = function (first_arg) {
    if (!this.Ia && this.ka > 0 && fn_390(this, first_arg)) {
      this.Aa && this.SAa(first_arg);
      first_arg = this.ka;
      var index = 0;
      for (let index_2 = 0; index_2 < first_arg; index_2++)
        this.Ba[index_2] &&
          (this.oa.splice(index_2 - index, 1), this.ka--, (this.Aa = !1), index++);
    }
  };
  fn_388.prototype.reset = function () {
    this.ka = 0;
    this.Ia = this.Aa = !1;
  };
  fn_389 = function (first_arg, second_arg) {
    second_arg = second_arg || 0;
    var event = first_arg.Ba[second_arg];
    return event ? event.clientX : first_arg.Oa[first_arg.oa[second_arg || 0]];
  };
  namespace.H7b = function (first_arg, second_arg) {
    second_arg = second_arg || 0;
    var event = first_arg.Ba[second_arg];
    return event ? event.clientY : first_arg.Qa[first_arg.oa[second_arg || 0]];
  };
  namespace.Xi(local_28, fn_388);
  local_28.prototype.wb = function (first_arg) {
    namespace.r7b(this.Ya, this.Ca[0], this.Ga[0], first_arg.timeStamp);
    this.kb = this.Ca[0];
    this.Ta = this.Ga[0];
  };
  local_28.prototype.yb = function (first_arg) {
    return this.Ra.onDragStart(first_arg);
  };
  local_28.prototype.hb = function (event) {
    this.kb = this.Ca[0];
    this.Ta = this.Ga[0];
    namespace.u7b(this.Ya, fn_389(this), namespace.H7b(this), event.timeStamp);
    this.Ra.Kb();
    event.preventDefault();
  };
  local_28.prototype.SAa = function (event) {
    event &&
      ((this.rb =
        namespace.v7b(this.Ya, this.Oa[this.oa[0]], this.Qa[this.oa[0]], event.timeStamp) ||
        void 0),
      event.preventDefault());
    this.Ra.onDragEnd(event);
    var local_44 = this.Ca[0],
      local_45 = this.Ga[0];
    event && namespace.o7b() ? event.preventDefault() : namespace.p7b(local_44, local_45);
  };
  namespace.I7b = function (first_arg) {
    return fn_389(first_arg) - first_arg.kb;
  };
  namespace.J7b = function (first_arg) {
    return Math.abs(namespace.H7b(first_arg) - first_arg.Ta) > Math.abs(namespace.I7b(first_arg));
  };
  namespace.Xi(local_29, fn_388);
  local_29.prototype.wb = () => {};
  local_29.prototype.yb = function (first_arg) {
    return this.Ra.wa(first_arg);
  };
  local_29.prototype.hb = function (event) {
    this.Ra.oa(event);
    event.preventDefault();
  };
  local_29.prototype.SAa = function (event) {
    this.Ra.ka(event);
    event && event.preventDefault();
  };
  var local_31;
  local_31 = [local_28, local_29];
  namespace.L7b = function (first_arg, second_arg) {
    var local_44 = first_arg.ka[0];
    if (local_44) return local_44;
    local_44 = new local_31[0](second_arg, first_arg.oa, first_arg.wa);
    return (first_arg.ka[0] = local_44);
  };
  namespace.A7b.prototype.Ga = function (first_arg) {
    var u6b = namespace.U6b(first_arg),
      len = u6b.length;
    for (var local_44 in this.oa) {
      var num_30 = void 0;
      for (var index = 0; index < len; index++)
        if (local_44 == fn_387(u6b[index])) {
          num_30 = !0;
          break;
        }
      num_30 || fn_391(this, +local_44);
    }
    u6b = namespace.h7b(first_arg);
    len = u6b.length;
    for (local_44 = 0; local_44 < len; local_44++)
      ((num_30 = fn_387(u6b[local_44])), this.oa[num_30] !== void 0 && fn_391(this, +num_30));
    len = !0;
    u6b = this.ka.length;
    for (local_44 = 0; local_44 < u6b; local_44++)
      if ((num_30 = this.ka[local_44]) && num_30.ka != num_30.wa) {
        len = !1;
        break;
      }
    if (!len && this.Aa.onTouchStart(first_arg)) {
      len = namespace.h7b(first_arg);
      local_44 = len.length;
      for (num_30 = 0; num_30 < local_44; num_30++) {
        index = len[num_30];
        let local_45 = fn_387(index);
        this.oa[local_45] = index.clientX;
        this.wa[local_45] = index.clientY;
      }
      for (len = 0; len < u6b; len++)
        if ((local_44 = this.ka[len])) local_44.onTouchStart(first_arg);
    }
  };
  namespace.A7b.prototype.Ca = function (list_50) {
    var num_30 = !0,
      len = this.ka.length;
    for (var index = 0; index < len; index++) {
      var local_44 = this.ka[index];
      if (local_44 && local_44.ka > 0) {
        num_30 = !1;
        break;
      }
    }
    if (!num_30) {
      for (num_30 = 0; num_30 < len; num_30++)
        if ((index = this.ka[num_30])) index.onTouchMove(list_50);
      list_50 = namespace.h7b(list_50);
      len = list_50.length;
      for (num_30 = 0; num_30 < len; num_30++)
        ((index = list_50[num_30]),
          (local_44 = fn_387(index)),
          this.oa[local_44] !== void 0 &&
            ((this.oa[local_44] = index.clientX), (this.wa[local_44] = index.clientY)));
    }
  };
  namespace.A7b.prototype.Ba = function (first_arg) {
    var h7b = namespace.h7b(first_arg),
      len = h7b.length;
    for (var index = 0; index < len; index++)
      if (this.oa[fn_387(h7b[index])] !== void 0) {
        this.Aa.onTouchEnd(first_arg);
        var num_30 = !0;
      }
    if (num_30) {
      num_30 = this.ka.length;
      for (index = 0; index < num_30; index++) {
        let local_44 = this.ka[index];
        if (local_44) local_44.onTouchEnd(first_arg);
      }
      for (first_arg = 0; first_arg < len; first_arg++)
        ((num_30 = fn_387(h7b[first_arg])),
          this.oa[num_30] !== void 0 && (delete this.oa[num_30], delete this.wa[num_30]));
    }
  };
  var fn_391 = function (first_arg, second_arg) {
    first_arg.Aa.onTouchEnd(null);
    var len = first_arg.ka.length;
    for (let index = 0; index < len; index++) {
      let local_44 = first_arg.ka[index];
      if (local_44) {
        var num_30 = void 0;
        if (!local_44.Ia && local_44.ka > 0) {
          for (let index_2 = 0; index_2 < local_44.ka; index_2++)
            if (local_44.oa[index_2] == second_arg) {
              num_30 = index_2;
              break;
            }
          num_30 !== void 0 &&
            (local_44.Aa && local_44.SAa(null),
            local_44.oa.splice(num_30, 1),
            local_44.ka--,
            (local_44.Aa = !1));
        }
      }
    }
    delete first_arg.oa[second_arg];
    delete first_arg.wa[second_arg];
  };
  namespace.A7b.prototype.enable = function (first_arg, second_arg) {
    var local_44 = (0, namespace.Vi)(this.Ba, this),
      xd_2 = this.Xd,
      local_45 = (0, namespace.Vi)(this.Ga, this),
      local_46 = (0, namespace.Vi)(this.Ca, this),
      local_47 = local_44;
    namespace.Zw ||
      namespace.P6b ||
      ((local_45 = namespace.f7b(local_45)),
      (local_46 = namespace.f7b(local_46)),
      (local_47 = namespace.f7b(local_47)));
    first_arg = !!first_arg;
    namespace.$w(xd_2, namespace.Q6b, local_45, first_arg, second_arg);
    namespace.$w(xd_2, namespace.R6b, local_46, first_arg, second_arg);
    namespace.$w(xd_2, namespace.S6b, local_47, first_arg, second_arg);
    namespace.$w(xd_2, namespace.T6b, local_44, first_arg, second_arg);
  };
  namespace.A7b.prototype.reset = function () {
    for (var local_44 in this.oa)
      (delete this.oa[Number(local_44)], delete this.wa[Number(local_44)]);
    for (local_44 = 0; local_44 < this.ka.length; local_44++) {
      let local_45 = this.ka[local_44];
      local_45 && local_45.reset();
    }
  };
  var fn_392, cls_85, local_32, local_33, fn_393;
  fn_392 = function (first_arg, second_arg, third_arg, fourth_arg) {
    if (namespace.be(second_arg, 0)) return list_48;
    namespace.be(first_arg, second_arg)
      ? (first_arg = [0, 0])
      : ((second_arg = (fourth_arg - third_arg * second_arg) / (first_arg - second_arg)),
        (first_arg = [second_arg, second_arg * first_arg]));
    first_arg = [first_arg[0] / third_arg, first_arg[1] / fourth_arg];
    third_arg = first_arg[0] * num_26;
    fourth_arg = first_arg[1] * num_26;
    return [third_arg, fourth_arg, third_arg + num_25, fourth_arg + num_25];
  };
  cls_85 = function () {};
  local_32 = {};
  namespace.c8b = function (first_arg) {
    return namespace.Wna(local_32, first_arg, function () {
      return namespace.laa(namespace.oEa, first_arg) >= 0;
    });
  };
  local_33 = function (
    element,
    second_arg,
    third_arg,
    fourth_arg,
    fifth_arg,
    sixth_arg,
    seventh_arg,
    eighth_arg
  ) {
    second_arg =
      "translate3d(" + second_arg + "px," + third_arg + "px," + (fourth_arg || 0) + "px)";
    fifth_arg && (second_arg += " rotate(" + fifth_arg + "deg)");
    sixth_arg !== void 0 && (second_arg += " scale3d(" + sixth_arg + "," + sixth_arg + ",1)");
    element.style[namespace.Q7b] = second_arg;
    seventh_arg && (element.style[namespace.Q7b + "OriginX"] = seventh_arg + "px");
    eighth_arg && (element.style[namespace.Q7b + "OriginY"] = eighth_arg + "px");
  };
  fn_393 = function (element, second_arg, third_arg) {
    element.style.left = second_arg + "px";
    element.style.top = third_arg + "px";
  };
  var fn_394 = function () {
      this.Ra = (0, namespace.Vi)(this.J2, this);
      this.Ba = this.Ca = 0;
    },
    num_20 = 7 / 60,
    num_21 = 7 / 60,
    num_22 = 1e3 / 60,
    num_23 = 0.25 * num_22,
    num_24 = 0.01 * num_22;
  namespace.ba = fn_394.prototype;
  namespace.ba.start = function (list_50, second_arg, third_arg, fourth_arg) {
    this.Ia = second_arg;
    this.Ga = third_arg;
    this.ka = fourth_arg.clone();
    this.Aa = fourth_arg.clone();
    second_arg = fn_395(list_50.x, this.ka.x, this.Ia.x, this.Ga.x);
    if (second_arg * list_50.x < 0 || (!list_50.x && second_arg)) this.Ba = 2;
    third_arg = fn_395(list_50.y, this.ka.y, this.Ia.y, this.Ga.y);
    if (third_arg * list_50.y < 0 || (!list_50.y && third_arg)) this.Ca = 2;
    this.oa = new namespace.de(second_arg, third_arg);
    if (Math.abs(this.oa.y) >= num_23 || Math.abs(this.oa.x) >= num_23 || this.Ba || this.Ca) {
      list_50 = [];
      for (second_arg = Date.now(); ;) {
        do
          ((this.ka.y += this.oa.y),
            (this.ka.x += this.oa.x),
            (this.La = Math.round(this.ka.y)),
            (this.Ka = Math.round(this.ka.x)),
            fn_396(this, this.ka.x, this.Ia.x, this.Ga.x, this.oa.x, this.Ba, !1),
            fn_396(this, this.ka.y, this.Ia.y, this.Ga.y, this.oa.y, this.Ca, !0),
            (second_arg += num_22));
        while (
          this.La == this.Aa.y &&
          this.Ka == this.Aa.x &&
          (Math.abs(this.oa.y) >= num_24 || Math.abs(this.oa.x) >= num_24)
        );
        if (this.Ba == 0 && this.Ca == 0 && this.La == this.Aa.y && this.Ka == this.Aa.x) break;
        list_50.push(second_arg, this.Ka, this.La);
        this.Aa.y = this.La;
        this.Aa.x = this.Ka;
      }
      this.wa = list_50;
      if (this.wa.length)
        return ((this.Ta = window.setTimeout(this.Ra, this.wa[0] - Date.now())), (this.Oa = !0));
    }
  };
  namespace.ba.onTransitionEnd = () => {};
  namespace.ba.stop = function () {
    this.Oa = !1;
    this.wa = [];
    window.clearTimeout(this.Ta);
    fn_404(this.Qa);
  };
  namespace.ba.mvc = function () {
    return this.Oa;
  };
  namespace.ba.cNd = function (first_arg) {
    this.Qa = first_arg;
  };
  var fn_395 = function (first_arg, second_arg, third_arg, fourth_arg) {
      first_arg = first_arg * num_22 * 1.25;
      Math.abs(first_arg) < num_23 &&
        (second_arg < third_arg
          ? ((first_arg = (third_arg - second_arg) * num_21),
            (first_arg = Math.max(first_arg, num_24)))
          : second_arg > fourth_arg &&
            ((first_arg = (second_arg - fourth_arg) * num_21),
            (first_arg = -Math.max(first_arg, num_24))));
      return first_arg;
    },
    fn_396 = function (
      first_arg,
      second_arg,
      third_arg,
      fourth_arg,
      fifth_arg,
      sixth_arg,
      seventh_arg
    ) {
      if (fifth_arg) {
        fifth_arg *= 0.97;
        var local_44;
        second_arg < third_arg
          ? (local_44 = third_arg - second_arg)
          : second_arg > fourth_arg && (local_44 = fourth_arg - second_arg);
        local_44
          ? local_44 * fifth_arg < 0
            ? ((sixth_arg = sixth_arg == 2 ? 0 : 1), (fifth_arg += local_44 * num_20))
            : ((sixth_arg = 2),
              (fifth_arg =
                local_44 > 0
                  ? Math.max(local_44 * num_21, num_24)
                  : Math.min(local_44 * num_21, -num_24)))
          : (sixth_arg = 0);
        seventh_arg
          ? ((first_arg.oa.y = fifth_arg), (first_arg.Ca = sixth_arg))
          : ((first_arg.oa.x = fifth_arg), (first_arg.Ba = sixth_arg));
      }
    };
  fn_394.prototype.J2 = function () {
    if (this.wa.length) {
      var splice = this.wa.splice(0, 3);
      this.Qa.wb(splice[1], splice[2]);
      this.wa.length
        ? ((splice = this.wa[0] - Date.now()), (this.Ta = window.setTimeout(this.Ra, splice)))
        : this.stop();
    }
  };
  var num_25 = 1 / 3,
    num_26 = 2 / 3,
    list_48 = [num_25, num_26, num_26, 1];
  var fn_397 = function () {
    this.ka = [];
  };
  fn_397.prototype.Aa = -5e-4;
  fn_397.prototype.start = function (first_arg, second_arg, third_arg, fourth_arg) {
    var num_30 = Math.abs(first_arg.y) >= Math.abs(first_arg.x),
      local_44 = num_30 ? first_arg.y : first_arg.x;
    first_arg = num_30 ? second_arg.y : second_arg.x;
    var local_45 = num_30 ? third_arg.y : third_arg.x,
      local_46 = num_30 ? fourth_arg.y : fourth_arg.x;
    second_arg = namespace.Yd(
      num_30 ? fourth_arg.x : fourth_arg.y,
      num_30 ? second_arg.x : second_arg.y,
      num_30 ? third_arg.x : third_arg.y
    );
    if (local_46 < first_arg || local_46 > local_45)
      ((first_arg = local_46 < first_arg ? first_arg : local_45),
        this.ka.push(
          num_30 ? second_arg : first_arg,
          num_30 ? first_arg : second_arg,
          500,
          "ease-out"
        ));
    else if (Math.abs(local_44) >= 0.25) {
      fourth_arg = (third_arg = local_44 < 0) ? -this.Aa : this.Aa;
      var local_47 = third_arg ? first_arg - local_46 : local_45 - local_46,
        local_48 = local_44;
      if (local_47) {
        local_48 = local_44 * local_44;
        let num_31 = 2 * fourth_arg,
          num_32 = -local_48 / num_31;
        Math.abs(num_32) < Math.abs(local_47)
          ? ((local_47 = num_32), (local_48 = 0))
          : ((local_48 = Math.sqrt(local_48 + num_31 * local_47)),
            (local_48 *= local_44 < 0 ? -1 : 1));
        fourth_arg = (local_48 - local_44) / fourth_arg;
        this.Ga = local_48;
        this.oa = fourth_arg;
        this.Ca = local_47;
        local_44 = "cubic-bezier(" + fn_392(local_44, this.Ga, this.oa, this.Ca).join(",") + ")";
        local_46 += this.Ca;
        this.ka.push(
          num_30 ? second_arg : local_46,
          num_30 ? local_46 : second_arg,
          this.oa,
          local_44
        );
        local_48 = this.Ga;
      }
      local_48 != 0 &&
        ((first_arg = third_arg ? first_arg : local_45),
        (local_46 = local_48 * 50),
        (local_45 = first_arg + local_46),
        (this.oa = (local_46 * 2) / local_48),
        (local_44 = "cubic-bezier(" + fn_392(local_48, 0, this.oa, local_46).join(",") + ")"),
        this.ka.push(
          num_30 ? second_arg : local_45,
          num_30 ? local_45 : second_arg,
          this.oa,
          local_44
        ),
        this.ka.push(
          num_30 ? second_arg : first_arg,
          num_30 ? first_arg : second_arg,
          500,
          "ease-out"
        ));
    }
    if (this.ka.length) return ((this.wa = !0), fn_398(this), !0);
  };
  var fn_398 = function (first_arg) {
    var ka = first_arg.ka,
      shift = ka.shift(),
      shift_2 = ka.shift(),
      shift_3 = ka.shift();
    ka = ka.shift();
    first_arg.Ba.wb(shift, shift_2, shift_3, ka);
  };
  fn_397.prototype.onTransitionEnd = function () {
    this.wa && (this.ka.length ? fn_398(this) : ((this.wa = !1), fn_404(this.Ba)));
  };
  fn_397.prototype.stop = function () {
    this.wa = !1;
    this.ka = [];
    fn_404(this.Ba);
  };
  fn_397.prototype.mvc = function () {
    return this.wa;
  };
  fn_397.prototype.cNd = function (first_arg) {
    this.Ba = first_arg;
  };
  namespace.q8b = new cls_85();
  cls_85.prototype.ka = 1;
  var local_34, local_35, fn_399;
  namespace.ax = function (
    element,
    second_arg,
    third_arg,
    fourth_arg,
    fifth_arg,
    sixth_arg,
    seventh_arg
  ) {
    this.Xd = element;
    this.Ra = element.parentNode;
    this.Xd.addEventListener(namespace.U7b, (0, namespace.Vi)(this.onTransitionEnd, this), !1);
    this.rb = new namespace.A7b(this);
    this.rb.enable(fifth_arg);
    this.Ba = namespace.L7b(this.rb, this);
    switch (namespace.q8b.ka) {
      case 0:
        var f8b_2 = new fn_394();
        break;
      case 1:
        f8b_2 = new fn_397();
    }
    f8b_2.cNd(this);
    this.Aa = f8b_2;
    this.kb = !!second_arg;
    this.Nb = !!third_arg;
    this.Ia = fourth_arg || 1;
    this.oa = local_35.clone();
    this.Ka = local_35.clone();
    this.Ya = local_35.clone();
    this.ka = local_35.clone();
    this.hb = this.Ia == 1 ? local_33 : fn_393;
    element = seventh_arg !== void 0 ? seventh_arg : this.oa.y;
    this.ka.x = sixth_arg !== void 0 ? sixth_arg : this.oa.x;
    this.ka.y = element;
    this.Ia = sixth_arg = this.Ia;
    this.hb = sixth_arg == 1 ? local_33 : fn_393;
    sixth_arg != 1 && ((this.Xd.style[namespace.R7b] = ""), (this.Xd.style[namespace.Q7b] = ""));
    sixth_arg != 2 && fn_393(this.Xd, 0, 0);
    this.hb(this.Xd, this.ka.x, this.ka.y);
    this.yb = [];
  };
  namespace.s8b = namespace.C7b("scroller:scroll_start");
  namespace.t8b = namespace.C7b("scroller:scroll_end");
  namespace.u8b = namespace.C7b("scroller:drag_end");
  namespace.v8b = namespace.C7b("scroller:content_moved");
  local_34 = namespace.C7b("scroller:decel_start");
  local_35 = new namespace.de(0, 0);
  namespace.ax.prototype.eo = null;
  namespace.ax.prototype.reset = function () {
    this.stop();
    this.Ba.reset();
    fn_403(this, this.Xd, 0);
    namespace.y8b(this);
    namespace.z8b(this, namespace.ye(document.body) ? this.wa.x : this.oa.x, this.oa.y);
  };
  namespace.y8b = function (first_arg) {
    first_arg.Ga = new namespace.ee(first_arg.Ra.offsetWidth, first_arg.Ra.offsetHeight);
    first_arg.Qa = new namespace.ee(
      first_arg.Vb || first_arg.Xd.scrollWidth,
      first_arg.Qb || first_arg.Xd.scrollHeight
    );
    var ee = new namespace.ee(
        Math.max(first_arg.Ga.width, first_arg.Qa.width),
        Math.max(first_arg.Ga.height, first_arg.Qa.height)
      ),
      ye = namespace.ye(document.body);
    if (ye) {
      var num_30 = ee.width - first_arg.Ga.width;
      num_30 = first_arg.Ka.x ? Math.min(num_30, first_arg.Ka.x) : num_30;
    } else num_30 = local_35.x - first_arg.Ka.x;
    first_arg.oa = new namespace.de(num_30, local_35.y - first_arg.Ka.y);
    first_arg.wa = new namespace.de(
      ye
        ? first_arg.Ya.x
        : Math.min(first_arg.Ga.width - ee.width + first_arg.Ya.x, first_arg.oa.x),
      Math.min(first_arg.Ga.height - ee.height + first_arg.Ya.y, first_arg.oa.y)
    );
    fn_399(first_arg);
  };
  fn_399 = function (first_arg) {
    var yd_2 = namespace.Yd(first_arg.ka.x, first_arg.wa.x, first_arg.oa.x),
      yd_3 = namespace.Yd(first_arg.ka.y, first_arg.wa.y, first_arg.oa.y);
    (first_arg.ka.x == yd_2 && first_arg.ka.y == yd_3) || namespace.z8b(first_arg, yd_2, yd_3);
  };
  namespace.ax.prototype.rC = function () {
    return this.ka.y;
  };
  namespace.ax.prototype.Sy = function () {
    return this.ka.x;
  };
  namespace.z8b = function (first_arg, second_arg, third_arg) {
    first_arg.ka.x = second_arg;
    first_arg.ka.y = third_arg;
    first_arg.hb(first_arg.Xd, second_arg, third_arg);
    namespace.D7b(first_arg.Xd, namespace.v8b, first_arg);
  };
  namespace.ax.prototype.Ca = function (first_arg, second_arg, third_arg, fourth_arg) {
    third_arg !== void 0 &&
      this.Ia == 1 &&
      fn_403(this, this.Xd, third_arg, namespace.P7b, fourth_arg);
    namespace.z8b(this, first_arg, second_arg);
  };
  namespace.ax.prototype.onTransitionEnd = function (event) {
    event.target == this.Xd && ((this.Oa = !1), this.Aa.onTransitionEnd());
  };
  namespace.ax.prototype.stop = function () {
    if (this.Aa.mvc())
      if (this.Ia == 2) this.Aa.stop();
      else {
        var s7b = namespace.S7b(this.Xd);
        if (this.Oa) {
          this.ka.x = s7b.m41;
          this.ka.y = s7b.m42;
          this.Ta = !0;
          var that = this;
          window.setTimeout(function () {
            var s7b_2 = namespace.S7b(that.Xd);
            fn_403(that, that.Xd, 0);
            window.setTimeout(function () {
              that.Ta = !1;
            }, 0);
            var local_44 = s7b_2.m41 + 2 * (s7b_2.m41 - s7b.m41);
            s7b_2 = s7b_2.m42 + 2 * (s7b_2.m42 - s7b.m42);
            local_44 = namespace.Yd(local_44, that.wa.x, that.oa.x);
            s7b_2 = namespace.Yd(s7b_2, that.wa.y, that.oa.y);
            fn_400(that, local_44, s7b_2);
          }, 0);
        } else fn_400(this, s7b.m41, s7b.m42);
      }
  };
  var fn_400 = function (first_arg, second_arg, third_arg) {
    first_arg.Aa.stop();
    namespace.z8b(first_arg, second_arg, third_arg);
  };
  namespace.ax.prototype.onTouchStart = function (event) {
    if (this.Ba.Aa) return !0;
    namespace.y8b(this);
    this.Aa.mvc()
      ? (event.preventDefault(), this.Pb || event.stopPropagation(), this.stop())
      : fn_403(this, this.Xd, 0);
    this.Mb = this.ka.clone();
    fn_399(this);
    return !0;
  };
  namespace.ax.prototype.onTouchEnd = function () {};
  namespace.ax.prototype.onDragStart = function (first_arg) {
    var j7b = namespace.J7b(this.Ba);
    if ((this.oc && !j7b) || (!this.kb && (!fn_401(this) || j7b))) return !1;
    for (var index = 0; (j7b = this.yb[index]); ++index) if (!j7b.oa(this, first_arg)) return !1;
    for (index = 0; (j7b = this.yb[index]); ++index) j7b.ka(this, first_arg);
    return !0;
  };
  namespace.ax.prototype.Kb = function () {
    var ba = this.Ba;
    var num_30 = namespace.H7b(ba) - ba.Ta;
    if (!this.Ta) {
      var mb = this.Mb;
      ba = mb.x + namespace.I7b(this.Ba);
      ba = fn_401(this) ? fn_402(ba, this.wa.x, this.oa.x) : 0;
      num_30 = mb.y + num_30;
      num_30 = this.kb ? fn_402(num_30, this.wa.y, this.oa.y) : 0;
      this.La || ((this.La = !0), namespace.D7b(this.Xd, namespace.s8b, this));
      namespace.z8b(this, ba, num_30);
    }
  };
  var fn_401 = function (first_arg) {
      return first_arg.Nb && first_arg.Ga.width < first_arg.Qa.width;
    },
    fn_402 = function (first_arg, second_arg, third_arg) {
      first_arg < second_arg
        ? (first_arg -= (first_arg - second_arg) / 2)
        : first_arg > third_arg && (first_arg -= (first_arg - third_arg) / 2);
      return first_arg;
    };
  namespace.ax.prototype.onDragEnd = function () {
    var rb = this.Ba.rb;
    namespace.D7b(this.Xd, namespace.u8b, this);
    if (rb && !this.Oa) {
      fn_401(this) || (rb.x = 0);
      this.kb || (rb.y = 0);
      var start = this.Aa.start(rb, this.wa, this.oa, this.ka);
    }
    start
      ? namespace.D7b(this.Xd, local_34, this)
      : (fn_399(this), namespace.D7b(this.Xd, namespace.t8b, this), (this.La = !1));
  };
  var fn_403 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
    first_arg.Oa = third_arg > 0;
    namespace.V7b(second_arg, third_arg, fourth_arg, fifth_arg);
  };
  namespace.ax.prototype.Ha = function () {
    return this.Xd;
  };
  namespace.ax.prototype.getFrame = function () {
    return this.Ra;
  };
  namespace.ax.prototype.wb = namespace.ax.prototype.Ca;
  var fn_404 = function (first_arg) {
    fn_403(first_arg, first_arg.Xd, 0);
    namespace.D7b(first_arg.Xd, namespace.t8b, first_arg);
    first_arg.La = !1;
  };
  var local_36;
  namespace.WCe = function (first_arg) {
    first_arg != null &&
      Array.from(namespace.Fm("IMG", first_arg)).forEach((first_arg_2) => {
        if (namespace.Bg(first_arg_2, "src")) {
          var zg = namespace.zg(first_arg_2, "src");
          zg !== null &&
            zg.trim() !== "" &&
            (namespace.Km(first_arg_2, { src: zg }), namespace.Cg(first_arg_2, "src"));
        }
      });
  };
  local_36 = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
    hv() {
      return namespace.u(this, 3);
    }
  };
  local_36.prototype.Za = "KwCX8b";
  new namespace.Ei(namespace.Uze);
  new namespace.Ei(local_36);
  namespace.YCe = !!(namespace.Ti[48] & 1);
  namespace.vze[36] = namespace.fAe;
  namespace.ZCe = new namespace.we();
  namespace.v("ily0Be");
  var fn_405 = function () {
      var im = namespace.Im("shopping-carousel-container");
      if (namespace.Dm("cu_mask") && !namespace.Dm("cu_card")) {
        let dm = namespace.Dm("main");
        var im_2 = namespace.Im("mnr-c", dm);
        namespace.Km(im_2, { id: "cu_card" });
        let dm_2 = namespace.Dm("cu_mask");
        im_2 = namespace.sn(im_2).width;
        namespace.pn(dm_2, im_2);
        (dm_2 = namespace.Um(dm_2)) && namespace.Tm(dm, dm_2, 0);
        (0, namespace.Kf)(() => {
          namespace.Pd(dm, "cu-xpnd");
          namespace.Rd(im, "carousel-xpls");
          namespace.Pd(im, "carousel-xpnd");
        });
        (0, namespace.ho)(() => {
          namespace.Rd(dm, "cu-xpnd");
        }, 500);
      }
    },
    fn_406 = function () {
      var im = namespace.Im("shopping-carousel-container");
      fn_405();
      var from = Array.from(namespace.Hm("pla-unit"));
      from.forEach((element, second_arg) => {
        var bounding_client_rect = element.getBoundingClientRect();
        second_arg > num_27 &&
          bounding_client_rect.right < im.getBoundingClientRect().right &&
          ((element = element.getAttribute("data-viewurl")),
          num_28 || (namespace.Uv(im, { data: { ct: "shoppingcarousel" } }), (num_28 = !0)),
          element && (namespace.mf("", `&${element}`, "", null, "adview"), (num_27 = second_arg)));
      });
      num_27 >= from.length - 1 &&
        (namespace.En(im, namespace.u8b, fn_406, !1), namespace.En(im, "scroll", fn_406, !1));
    },
    fn_407 = function () {
      var hm = namespace.Hm("shopping-carousel");
      if (hm.length > 0) {
        let num_30 = 1;
        namespace.fe || (num_30 = 2);
        for (let index = 0; index < hm.length; index++)
          (new namespace.ax(hm[index], !1, !0, num_30, !1),
            namespace.De(hm[index], namespace.u8b, fn_406, !1));
      } else
        (hm = namespace.Im("shopping-carousel-container")) &&
          namespace.De(hm, "scroll", fn_406, !1);
    },
    fn_408 = function (first_arg, second_arg, third_arg, fourth_arg) {
      return new namespace.lAe(
        first_arg,
        0.218,
        { opacity: third_arg },
        { opacity: fourth_arg },
        { property: "opacity", duration: 0.218, timing: second_arg, delay: 0 }
      );
    },
    fn_409 = function (first_arg) {
      namespace.Ne.call(this, first_arg);
      this.oa = new namespace.tAe("jfk-bubble");
      this.ka = new namespace.zAe();
      this.we(this.ka);
      this.Aa = [];
    },
    fn_410 = function (first_arg) {
      var local_44 = local_41;
      Array.from(namespace.Hm("plantl", first_arg)).forEach((first_arg_2) => {
        namespace.De(first_arg_2, "click", local_44, !1, null);
      });
    },
    fn_411 = function (first_arg) {
      var local_44 = local_41;
      Array.from(namespace.Hm("plantl", first_arg)).forEach((first_arg_2) => {
        namespace.En(first_arg_2, "click", local_44, !1, null);
      });
    },
    fn_412 = function (list_50, second_arg, third_arg) {
      list_50 = namespace.Hm(list_50);
      var list_51 = [];
      typeof third_arg === "string" && (list_51 = namespace.Hm(third_arg));
      for (third_arg = 0; third_arg < list_50.length; ++third_arg) {
        var k_de = new cls_87();
        k_de.Aa.kna = second_arg ? 9 : 13;
        k_de.Pw(list_50[third_arg]);
        namespace.pa() && list_49.push(k_de);
        if (list_51.length > third_arg) {
          k_de = namespace.sn(list_50[third_arg]).width - 2;
          let local_44 = list_51[third_arg];
          local_44 && k_de > namespace.sn(local_44).width && namespace.pn(local_44, k_de);
        }
      }
    },
    fn_413 = function () {
      var im = namespace.Im("commercial-unit-desktop-rhs"),
        hm = namespace.Hm("jackpot-tab");
      if (im != null && hm.length > 0) {
        let num_30 = 0;
        for (var index = 0; index < hm.length; index++) num_30 += namespace.sn(hm[index]).width;
        im = namespace.sn(im).width;
        hm = namespace.sn(namespace.Im("jackpot-tabs-previous-arrow")).width;
        index = namespace.Im("jackpot-tab-current");
        index = namespace.iLa(index).x + namespace.sn(index).width;
        let im_2 = namespace.Im("jackpot-tabs-slider");
        index > im && im_2 != null
          ? ((num_29 = num_30 - im + hm),
            namespace.W7b(im_2, -num_29, 0),
            (namespace.Im("jackpot-tabs-previous-arrow").style.display = "inline"),
            (namespace.Im("jackpot-tabs-next-arrow").style.display = "none"))
          : num_30 > im &&
            ((num_29 = num_30 - im + hm),
            (namespace.Im("jackpot-tabs-previous-arrow").style.display = "none"),
            (namespace.Im("jackpot-tabs-next-arrow").style.display = "inline"));
      }
    },
    fn_414 = function (list_50, second_arg) {
      if (list_50)
        for (let index = 0; index < list_50.length; ++index) {
          let attribute = list_50[index].getAttribute("href"),
            local_44 = "jxpd:" + second_arg.toString();
          attribute &&
            namespace.sd(attribute, "prds") !== local_44 &&
            ((attribute = namespace.y_b("prds", attribute, local_44)),
            list_50[index].setAttribute("href", attribute));
        }
    },
    fn_415 = function (first_arg, list_50, element) {
      var im = namespace.Im("jackpot-main-image-large"),
        im_2 = namespace.Im("jackpot-main-image-small");
      first_arg.largeImage &&
        first_arg.smallImage &&
        im &&
        im_2 &&
        (namespace.cn(im, "background", "url(" + first_arg.largeImage + ") no-repeat center"),
        namespace.cn(im_2, "background", "url(" + first_arg.smallImage + ") no-repeat center"),
        namespace.cn(im, "background-size", "contain"),
        namespace.cn(im_2, "background-size", "contain"));
      first_arg.label && element && (element.textContent = first_arg.label);
      if (list_50 && first_arg.availableVariants) {
        let split_4 = first_arg.availableVariants.split(",");
        list_50.forEach((first_arg_2) => {
          var zg = namespace.zg(first_arg_2, "pickerId");
          zg && split_4.indexOf(zg) !== -1
            ? namespace.Td(first_arg_2, "picker-available", !0)
            : namespace.Td(first_arg_2, "picker-available", !1);
        });
      }
    },
    fn_416 = function (first_arg) {
      namespace.ZCe != null && (namespace.ZCe.dispose(), (namespace.ZCe = null));
      local_39 != null
        ? (local_39.stop(), (local_39 = null))
        : first_arg && namespace.Tv([new namespace.bo(first_arg, "hide")]);
    },
    fn_417 = function (first_arg) {
      local_39 = new namespace.Le();
      namespace.ZCe = new namespace.we();
      namespace.ZCe.listenOnce(local_39, "tick", () => {
        first_arg &&
          namespace.Tv([new namespace.bo(first_arg, "show")], { triggerElement: first_arg });
        fn_416(first_arg);
      });
      local_39.setInterval(300);
      local_39.start();
    },
    fn_418 = function (
      first_arg,
      second_arg,
      third_arg,
      fourth_arg,
      fifth_arg,
      sixth_arg,
      seventh_arg,
      eighth_arg,
      arg,
      arg_2,
      arg_3,
      arg_4,
      arg_5,
      arg_6,
      arg_7
    ) {
      if (!local_37) {
        let dm = namespace.Dm("plahover");
        dm &&
          (local_37 = namespace.YCe
            ? new cls_90(
                dm,
                first_arg,
                second_arg,
                third_arg,
                fourth_arg,
                fifth_arg,
                sixth_arg,
                seventh_arg,
                eighth_arg,
                arg,
                arg_2,
                arg_3,
                arg_4,
                arg_5,
                arg_6,
                arg_7
              )
            : new cls_89(
                dm,
                first_arg,
                second_arg,
                third_arg,
                fourth_arg,
                fifth_arg,
                sixth_arg,
                seventh_arg,
                eighth_arg,
                arg,
                arg_2,
                arg_3,
                arg_4,
                arg_5,
                arg_6,
                arg_7
              ));
      }
      namespace.Ptb("pla", {
        nav: (first_arg_2, second_arg_2, third_arg_2) => {
          namespace.Eta(second_arg_2);
          namespace.ALa(third_arg_2);
          namespace.ks(third_arg_2);
        }
      });
    },
    fn_419 = function () {
      namespace.Ptb("pla", {
        snti: (element, second_arg) => {
          element = namespace.Dm(second_arg.ntIconId);
          element != null && (element.style.display = "inline");
          return !0;
        },
        hnti: (element, second_arg) => {
          element = namespace.Dm(second_arg.ntIconId);
          element != null && (element.style.display = "none");
          return !0;
        }
      });
    },
    fn_420 = function () {
      namespace.fh(document.body, "F40YQc", (first_arg) => {
        var dm = namespace.Dm(first_arg.targetElement.getData("ntIconId").string());
        dm != null && (dm.style.display = "inline");
        dm = namespace.Dm(first_arg.targetElement.getData("titleId").string());
        dm != null && namespace.cn(dm, "text-decoration", "underline");
        namespace.ih(first_arg.targetElement.el(), "WFUxQ");
      });
      namespace.fh(document.body, "xh0QK", (first_arg) => {
        var dm = namespace.Dm(first_arg.targetElement.getData("ntIconId").string());
        dm != null && (dm.style.display = "none");
        dm = namespace.Dm(first_arg.targetElement.getData("titleId").string());
        dm != null && namespace.cn(dm, "text-decoration", "none");
        namespace.ih(first_arg.targetElement.el(), "KNdvjf");
        return !0;
      });
    },
    fn_421 = function () {
      namespace.mf("wfob", "");
      local_40 &&
        (0, namespace.ho)(() => {
          local_40.tab && !local_40.tab.closed && namespace.mf("tp", local_40.lkg);
          local_40 = null;
        }, 100);
      namespace.En(namespace.qi(), "focus", fn_421, !1, null);
    },
    fn_422 = function (first_arg) {
      fn_412("jackpot-reviews-summary-anchor", !1);
      fn_412("jackpot-dropdown-anchor", !0, "jackpot-dropdown-container");
      fn_413();
      namespace.Ptb("pla", {
        ke: (first_arg_2) => {
          var hm = namespace.Hm("jackpot-variant-selector-link");
          fn_414(hm, !0);
          if (namespace.pa())
            for (hm = 0; hm < list_49.length; hm++) {
              let open = list_49[hm].isOpen();
              list_49[hm].JH(!1);
              list_49[hm].Ha() === first_arg_2 && list_49[hm].JH(!open);
            }
        },
        je: (first_arg_2, second_arg, third_arg, fourth_arg) => {
          third_arg = namespace.Hm("jackpot-thumbnail");
          fn_414(third_arg, !0);
          third_arg = namespace.Hm("jackpot-size");
          fn_414(third_arg, !0);
          third_arg = namespace.Hm("jackpot-variant-selector-link");
          fn_414(third_arg, !0);
          fourth_arg = fourth_arg.node();
          first_arg
            ? ((first_arg_2 = namespace.cy.get("kx_e")), namespace.gh(fourth_arg, first_arg_2))
            : namespace.gh(first_arg_2, "eooxlc", second_arg);
        },
        jc: (first_arg_2, second_arg, third_arg, fourth_arg) => {
          third_arg = namespace.Hm("jackpot-thumbnail");
          fn_414(third_arg, !1);
          third_arg = namespace.Hm("jackpot-size");
          fn_414(third_arg, !1);
          third_arg = namespace.Hm("jackpot-variant-selector-link");
          fn_414(third_arg, !1);
          fourth_arg = fourth_arg.node();
          first_arg
            ? ((first_arg_2 = namespace.cy.get("kx_c")), namespace.gh(fourth_arg, first_arg_2))
            : namespace.gh(first_arg_2, "sOxGkf", second_arg);
        },
        as: (first_arg_2, second_arg) => {
          var from = Array.from(namespace.Hm("jackpot-size")),
            im = namespace.Im("color-label");
          fn_415(second_arg, from, im);
          fn_417(first_arg_2.nextElementSibling);
        },
        ac: (first_arg_2, second_arg) => {
          var from = Array.from(namespace.Hm("jackpot-thumbnail")),
            im = namespace.Im("size-label");
          fn_415(second_arg, from, im);
          fn_417(first_arg_2.nextElementSibling);
        },
        cs: (first_arg_2) => {
          var from = Array.from(namespace.Hm("jackpot-size")),
            im = namespace.Im("thumbnail-current"),
            im_2 = namespace.Im("color-label");
          im && fn_415(namespace.Dg(im), from, im_2);
          fn_416(first_arg_2.nextElementSibling);
        },
        cc: (first_arg_2) => {
          var from = Array.from(namespace.Hm("jackpot-thumbnail")),
            im = namespace.Im("size-current"),
            im_2 = namespace.Im("size-label");
          im && fn_415(namespace.Dg(im), from, im_2);
          fn_416(first_arg_2.nextElementSibling);
        },
        ts: (element) => {
          var im = namespace.Im("jackpot-tabs-slider");
          im != null &&
            (namespace.Nd(element, "jackpot-tabs-next-arrow")
              ? namespace.W7b(im, -num_29, 0)
              : namespace.W7b(im, 0, 0));
          element.style.display = "none";
          (namespace.Nd(element, "jackpot-tabs-previous-arrow")
            ? namespace.Im("jackpot-tabs-next-arrow")
            : namespace.Im("jackpot-tabs-previous-arrow")
          ).style.display = "inline";
        }
      });
    },
    fn_423 = function () {
      var hm = namespace.Hm("placc-anchor");
      if (hm.length > 0) {
        for (let index = 0; index < hm.length; ++index)
          namespace.De(new fn_433(hm[index]), "action", () => {
            var local_44 = hm[index];
            namespace.Id(local_38);
            local_38 = new fn_409();
            local_38.Aa.push("coupon-bubble");
            local_38.oa.lPc = !1;
            local_38.setAutoHide(!0);
            local_38.Vea(local_44);
            local_38.setPosition(1, 2);
            local_38.d5(!0);
            var an = namespace.an(local_44, "pla-unit");
            an = namespace.Im("placc", an);
            local_38.setContent(namespace.Hh(an.innerHTML));
            local_38.render();
            local_38.setVisible(!0);
            var hm_2 = namespace.Hm("jfk-bubble");
            hm_2.length > 0 && (hm_2[0].id = "pla-bubble");
            namespace.Tv([new namespace.bo(an, "show")], { triggerElement: local_44 });
          });
        Array.from(namespace.Hm("pla-unit-img-container-link")).forEach((first_arg) => {
          namespace.De(first_arg, "mouseover", () => {
            var dm = namespace.Dm("pla-bubble");
            dm != null && (dm.style.display = "none");
          });
        });
      }
    },
    fn_424 = function () {
      fn_423();
      namespace.Ptb("pla", {
        ccos: (first_arg, second_arg) => {
          second_arg.isCouponRequired === "true" && first_arg.select();
        }
      });
    },
    fn_425 = function (first_arg) {
      var lf = new namespace.lf();
      lf.add("client", "throttler")
        .add("ptid", "19003601")
        .add("ptt", first_arg)
        .add("ei", google.kEI)
        .add("authuser", namespace.Hd("QrtxK").zc(0));
      namespace.mf("", "&" + lf.toString(), "", null, "fp_204");
    },
    fn_426 = function () {
      var im = namespace.Im("sh-tut__tu-tooltip");
      im !== null &&
        (fn_425("1"),
        namespace.Ptb("pla", {
          cttt: (first_arg) => {
            namespace.xn(im, !1);
            namespace.Uv(first_arg);
            fn_425("2");
          }
        }));
    },
    fn_427 = function (first_arg) {
      var num_30 = !!first_arg.wfobnt;
      fn_418(
        first_arg.hl,
        !!first_arg.nh,
        num_30,
        !!first_arg.enhdat,
        Number(first_arg.nhdm),
        !!first_arg.ctos,
        !!first_arg.wcc,
        !!first_arg.fwrp,
        !!first_arg.emoi,
        !!first_arg.echw,
        !!first_arg.etdchw,
        !!first_arg.edt,
        Number(first_arg.hwo),
        Number(first_arg.tdchwo),
        !!first_arg.uhhpw
      );
      first_arg.nt && (fn_419(), first_arg.dwcc && fn_420());
      num_30 &&
        ((local_41 = (first_arg_2) => {
          first_arg_2 = new namespace.ve(first_arg_2);
          !namespace.BLa(first_arg_2) ||
            first_arg_2.ka ||
            first_arg_2.shiftKey ||
            namespace.De(namespace.qi(), "focus", fn_421, !1, null);
        }),
        fn_410());
      fn_407();
      fn_422(!!first_arg.q);
      fn_424();
      fn_426();
    },
    fn_428 = function (first_arg) {
      first_arg = first_arg.Aa.kna;
      return first_arg == 9 || first_arg == 8;
    },
    num_27 = -1,
    num_28 = !1,
    fn_429 = function (first_arg) {
      var o_xe = first_arg.oXe;
      first_arg = first_arg.uid;
      first_arg =
        '<div class="' +
        namespace.H("jfk-bubble") +
        '" role="alertdialog"' +
        (namespace.pq(first_arg) ? ' aria-describedby="' + namespace.H(first_arg) + '"' : "") +
        '><div class="' +
        namespace.H("jfk-bubble-content-id") +
        '"' +
        (namespace.pq(first_arg) ? ' id="' + namespace.H(first_arg) + '"' : "") +
        "></div>";
      namespace.pq(o_xe) &&
        ((first_arg +=
          '<div class="' +
          namespace.H("jfk-bubble-closebtn-id") +
          " " +
          namespace.H("wbbYnc") +
          '" aria-label="'),
        (first_arg += namespace.xq("Close")),
        (first_arg += '" role="button" tabindex=0></div>'));
      first_arg +=
        '<div class="' +
        namespace.H("jfk-bubble-arrow-id") +
        " " +
        namespace.H("daDRF") +
        '"><div class="' +
        namespace.H("WIO4gf") +
        '"></div><div class="' +
        namespace.H("r0QOhd") +
        '"></div></div></div>';
      return (0, namespace.cq)(first_arg);
    };
  namespace.Xi(fn_409, namespace.Ne);
  namespace.ba = fn_409.prototype;
  namespace.ba.l2c = !0;
  namespace.ba.Vea = function (first_arg) {
    this.oa.Vea(first_arg);
    this.reposition();
  };
  namespace.ba.setPosition = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
    this.oa.I5b = !!fifth_arg;
    this.oa.setPosition(first_arg, second_arg, third_arg, fourth_arg);
  };
  namespace.ba.d5 = function (first_arg) {
    this.l2c = first_arg;
  };
  namespace.ba.setContent = function (first_arg) {
    this.Ba = first_arg;
    fn_430(this, first_arg);
  };
  var fn_430 = function (element, second_arg) {
    element = element.LW();
    second_arg &&
      element &&
      (typeof second_arg === "string"
        ? namespace.Wm(element, second_arg)
        : second_arg instanceof namespace.xXa
          ? namespace.Uc(element, second_arg.M2())
          : second_arg instanceof namespace.ac
            ? namespace.Uc(element, second_arg)
            : ((element.textContent = ""), element.appendChild(second_arg)));
  };
  namespace.ba = fn_409.prototype;
  namespace.ba.setAutoHide = function (first_arg) {
    this.ka.setAutoHide(first_arg);
  };
  namespace.ba.LW = function () {
    return namespace.fBe(this, "jfk-bubble-content-id");
  };
  namespace.ba.cM = function () {
    this.Xd = namespace.$ya(
      fn_429,
      { oXe: this.l2c, uid: "bubble-" + namespace.xf(this) },
      void 0,
      this.Lk()
    );
    fn_430(this, this.Ba);
    namespace.xn(this.Ha(), !1);
    this.ka.Iqb(this.Ha());
    if (!namespace.ej) {
      var ka = this.ka;
      var ha = this.Ha();
      ha = fn_408(ha, "ease-out", 0, 1);
      var ha_2 = this.Ha();
      ha_2 = fn_408(ha_2, "ease-in", 1, 0);
      ka.Ya = ha;
      ka.Ra = ha_2;
    }
    namespace.Qd(this.Ha(), this.Aa);
  };
  namespace.ba.qx = function () {
    fn_409.Qf.qx.call(this);
    namespace.Mn(this).listen(this.ka, ["beforeshow", "show", "beforehide", "hide"], this.cte);
    this.l2c &&
      namespace.vAe(
        namespace.Mn(this),
        namespace.fBe(this, "jfk-bubble-closebtn-id"),
        namespace.Wi(this.setVisible, !1)
      );
    var ha = this.Ha(),
      f_be = namespace.fBe(this, "jfk-bubble-arrow-id"),
      oa = this.oa;
    oa.ka = ha;
    oa.Ba = f_be;
    this.ka.setPosition(this.oa);
  };
  namespace.ba.setVisible = function (first_arg) {
    this.ka.setVisible(first_arg);
  };
  namespace.ba.isVisible = function () {
    return this.ka.isVisible();
  };
  namespace.ba.reposition = function () {
    this.isVisible() && this.ka.reposition();
  };
  namespace.ba.R$c = function () {
    namespace.ln(this.Ha());
    return !1;
  };
  namespace.ba.cte = function (first_arg) {
    if (first_arg.type == "show" || first_arg.type == "hide") {
      var mn = namespace.Mn(this),
        lk = this.Lk();
      lk = namespace.dj ? lk.getWindow() : lk.getDocument();
      first_arg.type == "show"
        ? mn.listen(lk, "scroll", this.R$c)
        : mn.unlisten(lk, "scroll", this.R$c);
    }
    return this.dispatchEvent(first_arg.type);
  };
  var cls_86 = class extends namespace.cBe {
      Pw(first_arg, second_arg) {
        var local_44 = namespace.Gm("*", "goog-menu", second_arg)[0];
        if (local_44) {
          namespace.xn(local_44, !1);
          first_arg.Lk().getDocument().body.appendChild(local_44);
          let z_be = new namespace.zBe();
          z_be.Pw(local_44);
          first_arg.o2(z_be);
        }
        return super.Pw(first_arg, second_arg);
      }
      jC() {
        return "ViWhS";
      }
      static getInstance() {
        return namespace.$h(cls_86);
      }
    },
    cls_87 = class extends namespace.sJ {
      constructor() {
        super(null, void 0, cls_86.getInstance(), void 0);
      }
      kb() {
        if (namespace.TBe(this).vH()) {
          var ha = this.Ha();
          ha = new namespace.IBe(
            ha,
            fn_428(this) ? 9 : 13,
            !namespace.UBe(this),
            namespace.UBe(this)
          );
          var ha_2 = namespace.TBe(this).Ha();
          namespace.TBe(this).isVisible() ||
            ((ha_2.style.visibility = "hidden"), namespace.xn(ha_2, !0));
          var local_44 = namespace.UBe(this) ? namespace.sn(ha_2) : null;
          ha.reposition(ha_2, fn_428(this) ? 8 : 12, new namespace.le(-1, 0, 0, 0), local_44);
          namespace.TBe(this).isVisible() ||
            (namespace.xn(ha_2, !1), (ha_2.style.visibility = "visible"));
        }
      }
    },
    fn_431 = function (first_arg) {
      namespace.ve.call(this, first_arg.Fi);
      this.type = "beforeaction";
    };
  namespace.Xi(fn_431, namespace.ve);
  var fn_432 = function (first_arg) {
    namespace.ve.call(this, first_arg.Fi);
    this.type = "action";
  };
  namespace.Xi(fn_432, namespace.ve);
  var fn_433 = function (first_arg) {
    namespace.xe.call(this);
    this.Xd = first_arg;
    namespace.De(first_arg, "keydown", this.vgb, !1, this);
    namespace.De(first_arg, "click", this.ka, !1, this);
  };
  namespace.Xi(fn_433, namespace.xe);
  fn_433.prototype.vgb = function (event) {
    (event.keyCode == 13 || (namespace.fe && event.keyCode == 3)) && fn_434(this, event);
  };
  fn_433.prototype.ka = function (first_arg) {
    fn_434(this, first_arg);
  };
  var fn_434 = function (first_arg, event) {
    var ode = new fn_431(event);
    if (first_arg.dispatchEvent(ode)) {
      ode = new fn_432(event);
      try {
        first_arg.dispatchEvent(ode);
      } finally {
        event.stopPropagation();
      }
    }
  };
  fn_433.prototype.Jc = function () {
    fn_433.Qf.Jc.call(this);
    namespace.En(this.Xd, "keydown", this.vgb, !1, this);
    namespace.En(this.Xd, "click", this.ka, !1, this);
    delete this.Xd;
  };
  var local_37 = null,
    local_38 = null,
    local_39 = null,
    num_29 = 0,
    list_49 = [],
    local_40 = null,
    local_41 = null,
    cls_88 = class extends namespace.EBe {
      constructor(first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
        second_arg = namespace.mLa(namespace.jLa(second_arg));
        second_arg.bottom += 1e3;
        super(first_arg, third_arg ? 8 : 9, !0, second_arg);
        this.Aa = third_arg;
        this.wa = fourth_arg;
        this.Ba = fifth_arg;
        this.anchorEl = first_arg;
      }
      reposition(first_arg, second_arg, third_arg, fourth_arg) {
        var num_30 = Math.round(namespace.sn(this.element).width / 2),
          num_31 = Math.round(namespace.sn(first_arg).width / 2),
          num_32 = namespace.sn(this.element).width - namespace.sn(first_arg).width;
        third_arg = this.Aa ? (this.wa || this.Ba ? num_32 : -32) : 6;
        num_31 = num_30 - num_31;
        if (this.Aa) {
          var hm = namespace.Hm("cu-container");
          if (hm.length > 0) {
            var local_44 = hm[0],
              vn = namespace.vn(local_44);
            hm = vn.left;
            vn = vn.left + vn.width;
            var vn_2 = namespace.vn(this.anchorEl);
            let left = vn_2.left;
            vn_2 = vn_2.left + vn_2.width;
            num_32 =
              namespace.an(this.element, "commercial-unit-desktop-rhs") || this.wa || this.Ba
                ? num_32
                : -32;
            local_44 = namespace.ye(local_44);
            left >= hm - 10 && left <= hm + 10
              ? (num_31 = local_44 ? num_32 : -1)
              : vn_2 >= vn - 10 && vn_2 <= vn + 10 && (num_31 = local_44 ? -1 : num_32);
          }
        }
        third_arg = new namespace.le(third_arg, num_31, third_arg, num_31);
        super.reposition(first_arg, second_arg, third_arg, fourth_arg);
        if ((second_arg = namespace.Im("plaha", first_arg)))
          ((fourth_arg = namespace.ln(this.element).x),
            (third_arg = namespace.ln(first_arg).x),
            (num_30 = new namespace.de(fourth_arg - third_arg + num_30 - 8, 1)),
            (num_30.x = namespace.Yd(num_30.x, 0, namespace.sn(first_arg).width - 16)),
            namespace.Xx(first_arg, 8, second_arg, 9, num_30));
      }
    },
    fn_435 = function (element) {
      element = element.getAttribute("data-hvrwidth");
      return element == null ? 0 : Number(element);
    },
    fn_436 = function (first_arg, element) {
      element = namespace.an(element.anchor, "pla-unit");
      if (!element) return !1;
      element = namespace.Im("pla-hovercard-content", element);
      if (!element) return !1;
      first_arg.Ae && fn_411(first_arg.ka);
      element = new namespace.xo([element]);
      var xo = new namespace.xo([first_arg.ka]);
      first_arg.Ac.append(xo.children());
      xo.children().remove();
      xo.append(element.children());
      first_arg.Ac = element;
      return !0;
    },
    cls_89 = class extends namespace.GCe {
      constructor(
        first_arg,
        second_arg,
        third_arg,
        fourth_arg,
        fifth_arg,
        sixth_arg,
        seventh_arg,
        eighth_arg,
        arg,
        arg_2,
        arg_3,
        arg_4,
        arg_5,
        arg_6,
        arg_7,
        arg_8
      ) {
        super(
          (first_arg_2) =>
            namespace.ah(first_arg_2) &&
            (namespace.Nd(first_arg_2, "pla-unit-title") ||
              namespace.Nd(first_arg_2, "pla-unit-img-container-link") ||
              namespace.Nd(first_arg_2, "pla-extensions-container") ||
              namespace.Nd(first_arg_2, "pla-unit-single-clickable-target"))
        );
        this.oa = first_arg;
        this.NW = second_arg;
        this.La = third_arg;
        this.Ae = fourth_arg;
        this.Sh = fifth_arg;
        this.Di = sixth_arg;
        this.yb = seventh_arg;
        this.Kb = eighth_arg;
        this.og = arg;
        this.Gh = arg_2;
        this.Lf = arg_3;
        this.rT = arg_4;
        this.lg = arg_5;
        this.Qi = arg_6;
        this.Yi = arg_7;
        this.oj = arg_8;
        this.od = this.kb = null;
        this.ka = namespace.Im("pla-hovercard-container", this.oa);
        this.Ac = new namespace.xo([]);
        this.Iqb(this.oa);
        this.La || (this.rb = new namespace.le(6, 0, 6, 0));
        this.Iab = 400;
        this.Ed = new Set();
        this.Jm = new Set();
        this.Jm.add(namespace.De(this, "trigger", this.Af, !1, this));
        this.Jm.add(
          namespace.De(this, "beforeshow", () => {
            this.kb != null && namespace.Pd(this.kb, "pla-carousel-hvrd");
            this.Sh && (this.Iab = this.Di);
          })
        );
        this.Jm.add(
          namespace.De(this, "hide", () => {
            this.kb != null && namespace.Rd(this.kb, "pla-carousel-hvrd");
          })
        );
        namespace.Im("commercial-unit-desktop-rhs") ||
          ((this.od = new namespace.TPd(this.oa)),
          namespace.De(
            this.od,
            "mousewheel",
            (event) => {
              Math.abs(event.deltaY) > 3 ||
                (event.preventDefault(), namespace.xn(this.oa, !1), (this.Iab = 400));
            },
            !1,
            null
          ));
      }
      Af(first_arg) {
        this.isVisible() && namespace.xn(this.oa, !1);
        if (!fn_436(this, first_arg)) return !1;
        this.Ae && fn_410(this.ka);
        var anchor = first_arg.anchor,
          an = namespace.an(anchor, "pla-unit"),
          im = namespace.Im("pla-unit-img-container", an);
        this.kb = namespace.an(an, "pla-carousel");
        var an_2 = namespace.an(anchor, "TQc1id");
        this.og &&
          an_2 &&
          (an_2.classList.contains("N4Xssf")
            ? this.ka.classList.add("MKuO4")
            : this.ka.classList.remove("MKuO4"),
          an_2.classList.contains("k5T88b")
            ? this.ka.classList.add("Lk75xb")
            : this.ka.classList.remove("Lk75xb"));
        first_arg = this.La
          ? new cls_88(an, this.oa, this.La, this.yb, this.Kb)
          : im
            ? new cls_88(im, this.oa, this.La, this.yb, this.Kb)
            : new cls_88(first_arg.anchor, this.oa, this.La, this.yb, this.Kb);
        this.setPosition(first_arg);
        if (this.La) {
          first_arg = namespace.Im("pla-unit-hovercard-img-container", this.oa);
          let fm = namespace.Fm("IMG", first_arg);
          namespace.zg(fm[1], "src") != null &&
            namespace.zg(fm[1], "src") !== "" &&
            ((im = Array.from(im.getElementsByTagName("img")).filter(
              (first_arg_2) =>
                !namespace.Nd(first_arg_2, "sh-ta__tu-express-icon") &&
                (!this.Gh || !namespace.Nd(first_arg_2, "hjnKX"))
            )),
            (fm[0].src = im[0].src),
            (fm[1].onload = () => {
              fm[0].src = fm[1].src;
            }),
            (fm[1].src = namespace.zg(fm[1], "src")),
            namespace.Cg(fm[1], "src"));
        }
        im = namespace.Im("pla-hovercard-content-ellip", this.ka);
        this.NW &&
          ((anchor = namespace.Dm(anchor.id.substring(1))),
          anchor != null &&
            namespace.Bg(anchor, "ved") &&
            !this.Ed.has(namespace.zg(anchor, "ved")) &&
            (namespace.Tv([new namespace.bo(im, "show")], {
              triggerElement: anchor,
              userAction: 27
            }),
            this.Ed.add(namespace.zg(anchor, "ved"))));
        anchor = fn_435(this.ka);
        this.Lf && !an_2
          ? namespace.pn(this.ka, namespace.sn(an).width + this.Qi)
          : this.lg && !an_2
            ? ((anchor =
                anchor > 0
                  ? anchor
                  : this.rT
                    ? namespace.sn(an).width + this.Yi
                    : namespace.sn(an).width + 28),
              namespace.pn(this.ka, Math.max(anchor, 152)))
            : namespace.pn(this.ka, namespace.sn(an).width + 28);
        this.oj &&
          !an_2 &&
          namespace.sn(this.oa).height < namespace.sn(an).height + 41 &&
          (an_2 = namespace.Hm("pla-unit-hovercard-extension", this.ka)) &&
          an_2.length <= 1 &&
          (an_2 = namespace.Im("rhrP2c", this.ka)) &&
          (an_2.style.setProperty("display", "block"),
          an_2.style.setProperty(
            "height",
            namespace.sn(an).height + 41 - namespace.sn(this.oa).height + "px"
          ));
        return !0;
      }
      dispose() {
        this.Ac = new namespace.xo([]);
        for (let local_44 of this.Jm) namespace.Fn(local_44);
      }
    },
    fn_437 = function (first_arg) {
      namespace.fh(document.body, "SOQ3Ve", (first_arg_2) => {
        if (first_arg.Bc) {
          first_arg.xc = !0;
          local_37?.Qb(first_arg_2.targetElement.el());
          first_arg_2 = first_arg.ka.querySelectorAll('a, [tabindex="0"]');
          var list_50 = Array.from(first_arg_2).filter(
            (first_arg_3) => window.getComputedStyle(first_arg_3).display !== "none"
          );
          list_50.forEach((element) => {
            element.setAttribute("tabindex", "0");
          });
          (0, namespace.ho)(() => {
            var element = list_50[0];
            element && element.focus();
          }, first_arg.Iab);
        }
      });
      namespace.fh(document.body, "DSBwxe", () => {
        first_arg.isVisible() || (first_arg.Bc = !0);
      });
    },
    cls_90 = class extends cls_89 {
      constructor(
        first_arg,
        second_arg,
        third_arg,
        fourth_arg,
        fifth_arg,
        sixth_arg,
        seventh_arg,
        eighth_arg,
        arg,
        arg_2,
        arg_3,
        arg_4,
        arg_5,
        arg_6,
        arg_7,
        arg_8
      ) {
        super(
          first_arg,
          second_arg,
          third_arg,
          fourth_arg,
          fifth_arg,
          sixth_arg,
          seventh_arg,
          eighth_arg,
          arg,
          arg_2,
          arg_3,
          arg_4,
          arg_5,
          arg_6,
          arg_7,
          arg_8
        );
        this.Bc = !0;
        this.xc = !1;
        this.Jm.add(
          namespace.De(this, "hide", () => {
            this.xc && this.jN();
          })
        );
        namespace.AAe(this);
        this.Gud = !0;
        fn_437(this);
      }
      jN() {
        var k_x = this.kX();
        this.xc = this.Bc = !1;
        k_x &&
          (0, namespace.ho)(() => {
            k_x.setAttribute("tabindex", "0");
            k_x.focus();
          }, this.Ubc());
        super.jN();
      }
    };
  namespace.xs(
    namespace.$Ce,
    class extends namespace.qs {
      constructor(first_arg) {
        super(first_arg.Ma);
        (first_arg = namespace.ea.google.pmc.pla) && fn_427(first_arg);
      }
    }
  );
  namespace.w();
  namespace.cYe = namespace.x("Zihehd", []);
  var fn_438, fn_439, fn_440, local_42;
  fn_438 = function () {
    namespace.Fn(namespace.m9b);
    fn_440("kne", "enabled");
    namespace.m9b = namespace.De(namespace.o9b, "keydown", (event) => {
      (event.keyCode !== 13 && event.keyCode !== 32) || fn_440("kne", "selected");
    });
  };
  fn_439 = function () {
    namespace.Fn(local_42);
    local_42 = namespace.Dn(
      namespace.o9b,
      "mousedown",
      () => {
        namespace.Rd(namespace.o9b, namespace.r9b);
        namespace.s9b && namespace.Fn(namespace.m9b);
        namespace.t9b();
      },
      { capture: !0 }
    );
  };
  namespace.t9b = function () {
    namespace.Fn(local_42);
    local_42 = namespace.De(namespace.o9b, "keydown", (event) => {
      namespace.v9b.indexOf(event.keyCode) !== -1 && namespace.w9b();
    });
  };
  namespace.w9b = function () {
    namespace.Pd(namespace.o9b, namespace.r9b);
    namespace.s9b && fn_438();
    fn_439();
  };
  namespace.x9b = function (first_arg) {
    namespace.r9b = "zAoYTe";
    fn_440 = first_arg;
    namespace.t9b();
  };
  namespace.s9b = !1;
  namespace.v9b = [9];
  namespace.o9b = document.documentElement;
  namespace.v("Zihehd");
  namespace.xs(
    namespace.cYe,
    class extends namespace.qs {
      constructor(first_arg) {
        super(first_arg.Ma);
        namespace.x9b(this.ka);
      }
      ka(first_arg, second_arg) {
        namespace.ph().Ec(first_arg, second_arg).log();
      }
    }
  );
  namespace.w();
  namespace.bYe = namespace.x("mf2ifc", []);
  namespace.M0b = !!((namespace.Ti[125] >> 15) & 1);
  var fn_441, cls_91;
  namespace.O0b = function () {
    cls_91.instance || (cls_91.instance = new cls_91());
    return cls_91.instance;
  };
  fn_441 = function (first_arg) {
    if (first_arg.ka.length) {
      var num_30 = 4 - first_arg.oa;
      if (!(num_30 <= 0)) {
        num_30 = Math.min(first_arg.ka.length, num_30);
        for (let index = 0; index < num_30; index++) {
          let shift = first_arg.ka.shift();
          if (shift) {
            let k_oc = shift.kOc,
              fn_457 = () => {
                k_oc.removeEventListener("load", fn_457);
                k_oc.removeEventListener("error", fn_457);
                first_arg.oa--;
                fn_441(first_arg);
              };
            k_oc.addEventListener("load", fn_457);
            k_oc.addEventListener("error", fn_457);
            first_arg.oa++;
            k_oc.setAttribute("data-thd", String(Date.now()));
            shift.qqa(k_oc, shift.src);
          }
        }
      }
    }
  };
  namespace.Q0b = function (first_arg, element, third_arg, fn_457) {
    namespace.M0b
      ? (element.setAttribute("data-thq", String(Date.now())),
        first_arg.ka.push({ kOc: element, src: third_arg, qqa: fn_457 }),
        fn_441(first_arg))
      : fn_457(element, third_arg);
  };
  cls_91 = class {
    constructor() {
      this.ka = [];
      this.oa = 0;
    }
  };
  var fn_442, fn_443, local_43;
  fn_442 = function (element) {
    var local_44;
    (local_44 = !element.parentElement) ||
      (element.ownerDocument && element.ownerDocument.defaultView
        ? (local_44 = element.ownerDocument.defaultView.getComputedStyle(element)) &&
          local_44.visibility === "hidden"
          ? (local_44 = !1)
          : ((local_44 = element.getBoundingClientRect()),
            (local_44 = local_44.width > 0 && local_44.height > 0))
        : (local_44 = !0));
    return local_44 ? element : fn_442(element.parentElement);
  };
  fn_443 = function (first_arg) {
    if (first_arg) {
      var dne_2 = new cls_94();
      for (let local_47 of Object.keys(first_arg)) {
        var local_44 =
          document.getElementById(local_47) ||
          document.documentElement.querySelector(`img[data-iid="${local_47}"]`);
        if (local_44) {
          var local_45 = dne_2,
            local_46 = first_arg[local_47];
          local_45.ka.ka(local_44, local_46) || local_45.oa.ka(local_44, local_46);
        }
      }
    }
  };
  namespace.fne = function () {
    fn_443(google.ldi);
    fn_443(google.pim);
    google.lfj
      ? google.sx(null, () => {
          fn_443(google.ldilf);
        })
      : google.dclc(() => {
          fn_443(google.ldilf);
        });
  };
  local_43 = class {
    constructor(first_arg) {
      this.rootMargin = first_arg;
      this.Eh = null;
    }
    QNa() {
      if (this.Eh) return !0;
      try {
        return (
          (this.Eh = new IntersectionObserver(
            (list_50, second_arg) => {
              list_50 = list_50.filter((first_arg) => first_arg.isIntersecting);
              for (let event of list_50)
                ((list_50 = event.target), this.Aa(list_50), second_arg.unobserve(list_50));
            },
            { rootMargin: this.rootMargin, threshold: [0] }
          )),
          !0
        );
      } catch (error) {
        return !1;
      }
    }
  };
  var cls_92 = class extends local_43 {
    constructor() {
      super("0px");
      this.oa = new Map();
      this.wa = new Map();
    }
    ka(first_arg, second_arg) {
      if (first_arg.hasAttribute("data-atf")) return !1;
      if (this.QNa()) {
        this.wa.set(first_arg, second_arg);
        second_arg = fn_442(first_arg);
        if (second_arg === first_arg) {
          var element;
          a: {
            for (element = first_arg; element; element = element.parentElement)
              if (
                element.tagName === "G-SCROLLING-CAROUSEL" ||
                element.classList.contains("XNfAUb")
              )
                break a;
            element = null;
          }
          element && (second_arg = element);
        }
        (element = this.oa.get(second_arg))
          ? element.push(first_arg)
          : this.oa.set(second_arg, [first_arg]);
        this.Eh.observe(second_arg);
        return !0;
      }
      return !1;
    }
    Aa(first_arg) {
      if ((first_arg = this.oa.get(first_arg)))
        for (let local_44 of first_arg)
          ((first_arg = this.wa.get(local_44)),
            namespace.Q0b(namespace.O0b(), local_44, first_arg, namespace.ejc));
    }
  };
  var cls_93 = class extends local_43 {
    constructor() {
      super("400px");
      this.oa = new Map();
    }
    ka(element, second_arg) {
      (google.c.timl || Number(element.getAttribute("data-atf")) & 1 ? 0 : this.QNa())
        ? (this.oa.set(element, second_arg), this.Eh.observe(element))
        : namespace.Q0b(namespace.O0b(), element, second_arg, namespace.ejc);
      return !0;
    }
    Aa(first_arg) {
      var get_value = this.oa.get(first_arg);
      namespace.Q0b(namespace.O0b(), first_arg, get_value, namespace.ejc);
    }
  };
  var cls_94 = class {
    constructor() {
      this.ka = new cls_92();
      this.oa = new cls_93();
    }
  };
  namespace.v("mf2ifc");
  namespace.xs(
    namespace.bYe,
    class extends namespace.qs {
      constructor(first_arg) {
        super(first_arg.Ma);
        namespace.fne();
      }
    }
  );
  namespace.w();
  namespace.Gee = namespace.x("n7qy6d", []);
  namespace.Aee = !!((namespace.Ti[110] >> 20) & 1);
  namespace.Bee = !!((namespace.Ti[110] >> 21) & 1);
  namespace.Cee = !!((namespace.Ti[110] >> 22) & 1);
  namespace.Dee = !!((namespace.Ti[110] >> 23) & 1);
  namespace.Eee = !!((namespace.Ti[110] >> 24) & 1);
  namespace.Fee = !!((namespace.Ti[110] >> 25) & 1);
  namespace.v("n7qy6d");
  var fn_444 = function () {
      var local_44 =
        "getSelection" in window &&
        "queryCommandSupported" in document &&
        "execCommand" in document &&
        document.queryCommandSupported("copy");
      if (local_44)
        try {
          local_44 = document.execCommand("copy", !0);
        } catch (error) {
          local_44 = !1;
        }
      return local_44;
    },
    fn_445 = function (first_arg) {
      if (first_arg.ka && first_arg.url) {
        fn_446(first_arg);
        var url = first_arg.url,
          el = first_arg.Ha("tQ9n1c").el();
        namespace.Wm(el, url);
        url = document.createRange();
        url.selectNodeContents(el);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(url);
        document.execCommand("copy", !0) && (first_arg.oa.hide(), first_arg.wa.show());
      }
    },
    fn_446 = function (first_arg) {
      var el = first_arg.getRoot().el();
      namespace.gh(el, "nVW9lb");
      first_arg.getRoot().getData("ved").Lb() && namespace.Uv(first_arg.getRoot().el());
    },
    cls_95 = class extends namespace.qs {
      constructor(first_arg) {
        super(first_arg.Ma);
        this.ka = this.url = null;
        this.oa = this.Ha("uu7Hed");
        this.Aa = this.Ha("axr9cd");
        this.wa = this.Ha("pAZ6Ed");
      }
      updateUrl(first_arg) {
        if ((this.url = first_arg)) {
          first_arg = this.url;
          if (dee) {
            var cb_2 = this.Cb("zgnjS");
            cb_2.size() && (cb_2.el().textContent = first_arg);
          } else
            ((cb_2 = this.Cb("RYUcpc")),
              cb_2.size()
                ? (namespace.Lc(cb_2.el(), first_arg), namespace.Wm(cb_2.el(), first_arg || ""))
                : ((cb_2 = this.Cb("zgnjS")),
                  cb_2.size() && (cb_2.Zd("input").el().value = first_arg)));
          namespace.cn(this.getRoot().el(), "visibility", first_arg ? "" : "hidden");
          this.wa.hide();
          this.oa.toggle(!!this.ka);
          this.Aa.toggle(!this.ka);
        }
      }
      setup() {
        if (this.ka === null) {
          this.ka = fn_444();
          if (dee)
            this.getRoot()
              .el()
              .addEventListener("copy", (event) => {
                event.clipboardData &&
                  this.url &&
                  (event.clipboardData.setData("text/plain", this.url), event.preventDefault());
              });
          else {
            let cb_2 = this.Cb("zgnjS");
            !this.ka && cb_2.size() && (cb_2.Zd("input").el().style.cursor = "text");
          }
          this.oa.toggle(this.ka);
          this.Aa.toggle(!this.ka);
        }
      }
      Ba() {
        fn_445(this);
      }
      Ca() {
        if (dee) fn_446(this);
        else {
          fn_445(this);
          var cb_2 = this.Cb("zgnjS");
          cb_2.size() && ((cb_2 = cb_2.Zd("input").el()), cb_2.select(), cb_2.focus());
        }
      }
      Ga() {
        fn_445(this);
      }
    };
  cls_95.prototype.$wa$RNDhHe = function () {
    return this.Ga;
  };
  cls_95.prototype.$wa$aiBUrb = function () {
    return this.Ca;
  };
  cls_95.prototype.$wa$ScPJh = function () {
    return this.Ba;
  };
  cls_95.prototype.$wa$S4w6dd = function () {
    return this.setup;
  };
  var dee = namespace.Dee;
  namespace.xs(namespace.Gee, cls_95);
  namespace.w();
  namespace.cfe = namespace.x("HPGtmd", [namespace.jr]);
  namespace.Mee = !!((namespace.Ti[96] >> 26) & 1);
  namespace.Nee = !!((namespace.Ti[96] >> 27) & 1);
  namespace.Oee = !!((namespace.Ti[96] >> 28) & 1);
  namespace.Pee = !!((namespace.Ti[96] >> 29) & 1);
  namespace.Qee = !!(namespace.Ti[97] & 1);
  namespace.Ree = !!(namespace.Ti[97] & 2);
  namespace.See = !!(namespace.Ti[97] & 4);
  namespace.Tee = !!(namespace.Ti[97] & 8);
  namespace.Uee = !!(namespace.Ti[97] & 16);
  namespace.Vee = !!(namespace.Ti[97] & 32);
  namespace.Wee = !!(namespace.Ti[97] & 64);
  namespace.Xee = !!(namespace.Ti[97] & 128);
  namespace.Yee = !!(namespace.Ti[97] & 256);
  namespace.Zee = !!(namespace.Ti[97] & 512);
  namespace.$ee = !!(namespace.Ti[97] & 1024);
  namespace.afe = !!(namespace.Ti[97] & 2048);
  namespace.tI = !!(namespace.Ti[97] & 4096);
  namespace.bfe = !!(namespace.Ti[97] & 8192);
  namespace.v("HPGtmd");
  var fn_447, fn_448;
  fn_447 = function (first_arg, second_arg) {
    return namespace.gna(new namespace.hf(first_arg), namespace.VNa(second_arg)).toString();
  };
  fn_448 = function (first_arg, second_arg, third_arg, fourth_arg, fifth_arg) {
    var local_44 = first_arg.jn() ?? "",
      local_45 = first_arg.Jv() ?? "",
      b3 = first_arg.B3();
    local_44 = first_arg.Ys(local_45, local_44, first_arg.oa?.oa() ? "\n\n" : "\n");
    first_arg.Km?.Ya() && (local_44 += "\n\n" + first_arg.Km?.Ta());
    fourth_arg = { ...fourth_arg, body: local_44 };
    b3 && (fourth_arg[fifth_arg] = b3);
    second_arg = fn_447(second_arg, fourth_arg);
    first_arg.sia(third_arg, second_arg, !first_arg.getData("mobile").Ub(!1));
  };
  namespace.ffe = class extends namespace.qs {
    static Sa() {
      return { service: { navigation: namespace.gy } };
    }
    constructor(first_arg) {
      super(first_arg.Ma);
      this.ka = this.wa = this.oa = this.Km = null;
      this.navigation = first_arg.service.navigation;
      if ((this.wa = this.Ua("GIN7Bd").first()))
        this.ka = this.Mc(this.wa.el(), namespace.Lo).then((first_arg_2) => first_arg_2);
    }
    async setup() {
      var fn_457 = (0, namespace.eg)(),
        fn_458 = fn_457();
      fn_457 = fn_457(1);
      try {
        this.ka && fn_457(await fn_458(this.ka)).setup();
      } finally {
        fn_458();
      }
    }
    Aa() {
      return namespace.Nee;
    }
    Ga(first_arg) {
      var local_44 = fn_447("https://www.reddit.com/submit", { url: this.jn() });
      this.sia(first_arg, local_44, !0);
    }
    Qa(first_arg) {
      var obj_21 = { url: this.jn() },
        jv = this.Jv();
      jv.length && (obj_21.text = jv);
      obj_21 = fn_447("https://www.threads.net/intent/post", obj_21);
      this.sia(first_arg, obj_21, !0);
    }
    Ia(first_arg) {
      var obj_21 = { url: this.jn() },
        jv = this.Jv();
      jv.length && (obj_21.text = jv);
      obj_21 = fn_447("https://www.twitter.com/share", obj_21);
      this.sia(first_arg, obj_21, !0);
    }
    Ka(first_arg) {
      var jv = this.Jv();
      jv = fn_447("https://api.whatsapp.com/send", {
        text: this.Ys(jv, this.jn(), this.oa?.oa() ? "\n\n" : " ")
      });
      this.sia(first_arg, jv, !0);
    }
    Ca(first_arg) {
      var local_44 = fn_447("https://www.facebook.com/sharer/sharer.php", { u: this.jn() });
      this.sia(first_arg, local_44, !0);
    }
    Ba(first_arg) {
      fn_448(this, "mailto:", first_arg, {}, "subject");
    }
    Oa(first_arg) {
      fn_448(
        this,
        "https://mail.google.com/mail",
        first_arg,
        { view: "cm", fs: "1", tf: "1" },
        "su"
      );
    }
    La() {
      return this.Ha("RgELLe").el();
    }
    sia(first_arg, second_arg, third_arg) {
      third_arg ? namespace.Gg(second_arg, { target: "_blank" }) : this.navigation.ka(second_arg);
      second_arg = this.getRoot().el();
      namespace.gh(second_arg, "nVW9lb");
      second_arg = this.getRoot().el();
      namespace.gh(second_arg, "dBhwS");
      first_arg = first_arg.targetElement;
      first_arg.getData("ved").Lb() && namespace.Uv(first_arg.el());
    }
    B3() {
      return this.Km ? this.Km.B3() || this.Km.getTitle() || null : null;
    }
    jn() {
      if (this.Km) {
        let local_44 = this.Km.Ba() || this.Km.Aa();
        if (local_44) return local_44;
      }
      throw Error("nj");
    }
    Jv() {
      return this.Km ? this.Km.Jv() || (this.oa?.wa() ? "" : this.Km.getTitle()) || "" : "";
    }
    Ys(first_arg, second_arg, third_arg = " ") {
      return this.Km
        ? first_arg === ""
          ? second_arg
          : second_arg === ""
            ? first_arg
            : this.oa?.oa()
              ? second_arg + third_arg + first_arg
              : first_arg + third_arg + second_arg
        : "";
    }
  };
  namespace.ffe.prototype.$wa$nR7Ch = function () {
    return this.La;
  };
  namespace.ffe.prototype.$wa$eOZhO = function () {
    return this.Oa;
  };
  namespace.ffe.prototype.$wa$NmUBTc = function () {
    return this.Ba;
  };
  namespace.ffe.prototype.$wa$rT2OA = function () {
    return this.Ca;
  };
  namespace.ffe.prototype.$wa$cmaSVb = function () {
    return this.Ka;
  };
  namespace.ffe.prototype.$wa$re2RZb = function () {
    return this.Ia;
  };
  namespace.ffe.prototype.$wa$ln21dc = function () {
    return this.Qa;
  };
  namespace.ffe.prototype.$wa$ED9Thd = function () {
    return this.Ga;
  };
  namespace.ffe.prototype.$wa$tOm77e = function () {
    return this.Aa;
  };
  namespace.ffe.prototype.$wa$S4w6dd = function () {
    return this.setup;
  };
  namespace.xs(namespace.cfe, namespace.ffe);
  namespace.w();
  namespace.uI = function (first_arg, second_arg) {
    return namespace.li(first_arg, 6, second_arg);
  };
  namespace.vI = function (first_arg, second_arg) {
    return namespace.li(first_arg, 8, second_arg);
  };
  namespace.wI = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
    nD(first_arg) {
      return namespace.ak(this, 2, first_arg);
    }
    Lv() {
      return namespace.Wj(this, 5, void 0);
    }
    Lm() {
      return namespace.Qj(this, 6);
    }
    uJ() {
      return namespace.$e(this, 7);
    }
    Mv() {
      return namespace.Qj(this, 8);
    }
  };
  namespace.wI.prototype.Za = "c5air";
  namespace.hfe = [
    0,
    namespace.Cl,
    namespace.dm,
    namespace.C,
    namespace.E,
    namespace.Nl,
    namespace.E,
    namespace.Cl,
    namespace.E,
    namespace.Cl
  ];
  namespace.ife = function (first_arg) {
    return namespace.A(first_arg, 7);
  };
  namespace.jfe = function (first_arg) {
    return namespace.A(first_arg, 8);
  };
  namespace.xI = class extends namespace.m {
    constructor(first_arg) {
      super(first_arg);
    }
    e9() {
      return namespace.p(this, namespace.wI, 13);
    }
    oa() {
      return namespace.A(this, 14);
    }
    wa() {
      return namespace.A(this, 16);
    }
  };
  namespace.gfe = namespace.x("uLYJpc", [namespace.cfe, namespace.fr]);
  namespace.v("uLYJpc");
  var fn_449 = async function (first_arg, second_arg) {
      var fn_457 = (0, namespace.eg)(),
        fn_458 = fn_457();
      fn_457 = fn_457(1);
      try {
        first_arg.wa?.removeAttr("data-ved");
        first_arg.Ua("bVp1N").first()?.removeAttr("data-ved");
        first_arg.Ha("RgELLe").removeAttr("data-ved");
        first_arg.Ha("P8lkFb").removeAttr("data-ved");
        first_arg.Cb("EcD0F").removeAttr("data-ved");
        first_arg.Km = second_arg;
        let first = first_arg.Ua("pudyke").first();
        if (first) {
          let local_45 = first_arg.Km.In() && first_arg.Aa(),
            local_46 = first_arg.Km.getTitle() || "";
          second_arg = "";
          try {
            var local_44 = first_arg.Km.Ba() || first_arg.Km.Aa() || "";
            local_44 && (second_arg = new URL(local_44).hostname);
          } catch (error) {}
          local_44 = local_45 && !!local_46;
          let local_47 = local_45 && !!second_arg;
          first.toggle(local_45);
          if (local_45) {
            let first_2 = first_arg.Ua("G04Yw").first();
            if (first_2) {
              let text_5 = first_arg.Km.getImageUrl().replace(/'/g, "\\'");
              first_2.el().style.backgroundImage = `url('${text_5}')`;
            }
            let first_3 = first_arg.Ua("isIWse").first();
            first_3 && first_3.toggle(local_44 || local_47);
            let first_4 = first_arg.Ua("jIA8B").first();
            first_4 && ((first_4.el().textContent = local_46), first_4.toggle(local_44));
            let first_5 = first_arg.Ua("Gwzeic").first();
            first_5 && ((first_5.el().textContent = second_arg), first_5.toggle(local_47));
          }
        }
        if (first_arg.ka) fn_457(await fn_458(first_arg.ka)).updateUrl(first_arg.jn());
        else return Promise.resolve();
      } finally {
        fn_458();
      }
    },
    fn_450 = async function (first_arg, second_arg) {
      var fn_457 = (0, namespace.eg)(),
        fn_458 = fn_457();
      fn_457 = fn_457(1);
      try {
        second_arg.XBa &&
          (first_arg.Km.Ia(second_arg.XBa),
          first_arg.ka && fn_457(await fn_458(first_arg.ka)).updateUrl(first_arg.jn()));
      } finally {
        fn_458();
      }
    },
    fn_451 = async function (first_arg, second_arg) {
      var fn_457 = (0, namespace.eg)(),
        fn_458 = fn_457();
      fn_457 = fn_457(1);
      try {
        try {
          let local_44 = fn_457(await fn_458(second_arg));
          fn_457(await fn_458(fn_450(first_arg, local_44)));
        } catch (error) {
          if ((fn_457(), !("function" == typeof cls_96 && error instanceof cls_96))) throw error;
        }
      } finally {
        fn_458();
      }
    },
    cls_96 = class extends Error {};
  var fn_452 = async function (first_arg, second_arg, third_arg) {
      var fn_457 = (0, namespace.eg)(),
        fn_458 = fn_457();
      fn_457 = fn_457(1);
      try {
        if (
          ((first_arg.Km = second_arg),
          fn_457(await fn_458(fn_449(first_arg.xYa, second_arg))),
          third_arg)
        ) {
          var x_ya = first_arg.xYa;
          third_arg.Uhd && x_ya.wa?.setData("ved", third_arg.Uhd);
          third_arg.wNd && x_ya.Ua("bVp1N").first()?.setData("ved", third_arg.wNd);
          third_arg.xNd && x_ya.Ha("RgELLe").setData("ved", third_arg.xNd);
          third_arg.zNd && x_ya.Ha("P8lkFb").setData("ved", third_arg.zNd);
          third_arg.ANd && x_ya.Cb("EcD0F").setData("ved", third_arg.ANd);
        }
      } finally {
        fn_458();
      }
    },
    fn_453 = async function (first_arg) {
      var fn_457 = (0, namespace.eg)(),
        fn_458 = fn_457();
      fn_457 = fn_457(1);
      try {
        if (!first_arg.Ia) {
          dee_2
            ? first_arg.config && namespace.Ch(first_arg.config, 1)
              ? first_arg.Jca.kc(namespace.u(first_arg.config, 1) || "").show()
              : first_arg.Jca.hide()
            : namespace.Ch(first_arg.config, 1)
              ? (first_arg.Jca.kc(namespace.u(first_arg.config, 1) || "").show(),
                first_arg.Ga.addClass("UrmYj"))
              : (first_arg.Jca.hide(), first_arg.Ga.removeClass("UrmYj"));
          var num_30 = !!namespace.ife(first_arg.config);
          first_arg.xYa.Ha("RgELLe").toggle(!num_30);
          var num_31 = !!namespace.jfe(first_arg.config);
          first_arg.xYa.Ha("P8lkFb").toggle(!num_31);
          fn_457(await fn_458(first_arg.xYa.setup()));
          first_arg.Ia = !0;
        }
      } finally {
        fn_458();
      }
    },
    fn_454 = function (first_arg, second_arg) {
      second_arg.eJ.then(() => {
        fn_456(first_arg, second_arg.event);
      });
      return !0;
    },
    fn_455 = function (first_arg, second_arg) {
      var bounding_client_rect = first_arg.ka.getBoundingClientRect(),
        height = bounding_client_rect.height;
      if (second_arg.width > 0 && second_arg.height > 0) {
        if (window.innerHeight - second_arg.bottom - 15 > height) height = second_arg.bottom + 15;
        else {
          var num_30 = second_arg.top - 15 - height;
          height = num_30 > 0 ? num_30 : (window.innerHeight - height) / 2;
        }
        second_arg = second_arg.left;
        num_30 = window.innerWidth - 40;
        second_arg + bounding_client_rect.width > num_30 &&
          (second_arg = num_30 - bounding_client_rect.width);
      } else
        ((height = (window.innerHeight - height) / 2),
          (second_arg = (window.innerWidth - bounding_client_rect.width) / 2));
      first_arg.ka.style.top = `${height}px`;
      first_arg.ka.style.left = `${second_arg}px`;
    },
    fn_456 = function (first_arg, second_arg) {
      first_arg.oa &&
        first_arg.Aa &&
        (first_arg.oa.classList.remove(first_arg.Aa), (first_arg.Aa = ""));
      var list_50 = [dee_2 ? first_arg.ka : first_arg.Ba];
      first_arg.wa && (list_50.push(first_arg.wa), (first_arg.wa = null));
      namespace.Tv(
        list_50
          .filter((first_arg_2) => namespace.af(first_arg_2))
          .map((first_arg_2) => new namespace.bo(first_arg_2, "hide"))
      );
      first_arg.oa && (namespace.gh(first_arg.oa, "tfcxtb", second_arg), (first_arg.oa = null));
      dee_2 && window.removeEventListener("resize", first_arg.Ca);
    },
    cls_97 = class extends namespace.qs {
      static Sa() {
        return {
          controller: { xYa: { jsname: "b0t70b", ctor: namespace.ffe } },
          vd: { Bg: { jsname: "Sx9Kwc", ctor: namespace.Ph } },
          service: { overlay: namespace.nw }
        };
      }
      constructor(first_arg) {
        super(first_arg.Ma);
        this.Ka = this.Ga = this.ka = this.Bg = this.Ba = null;
        this.Ia = !1;
        this.oa = this.Km = this.wa = null;
        this.Aa = "";
        this.Ca = () => {
          this.close();
        };
        this.Xe = first_arg.service.overlay;
        this.xYa = first_arg.controller.xYa;
        this.Jca = this.Ha("Sy6N1c");
        dee_2
          ? ((this.ka = this.Ha("EvA93").el()),
            this.addOnDisposeCallback(() => {
              window.removeEventListener("resize", this.Ca);
            }))
          : ((this.Ka = this.Ha("tqp7ud").el()),
            (this.Ba = this.Ha("Sx9Kwc").el()),
            (this.Ga = this.Ha("OGvssd")),
            (this.Bg = first_arg.vd.Bg));
        this.config = new namespace.xI();
      }
      async show(first_arg, second_arg, third_arg, element, fifth_arg, sixth_arg) {
        var fn_457 = (0, namespace.eg)(),
          fn_458 = fn_457();
        fn_457 = fn_457(1);
        try {
          let local_44;
          element &&
            ((local_44 = sixth_arg || element.getBoundingClientRect()),
            fifth_arg &&
              ((this.oa = element), (this.Aa = fifth_arg), this.oa.classList.add(fifth_arg)));
          fn_457(await fn_458(fn_452(this, first_arg, second_arg)));
          this.setConfig(third_arg || new namespace.xI());
          fn_457(await fn_458(fn_453(this)));
          if (dee_2) {
            first_arg = local_44 != null;
            let tw = namespace.tw(
              namespace.ww(namespace.yw(new namespace.zw(), first_arg ? 0 : 1), first_arg),
              (first_arg_2) => fn_454(this, first_arg_2)
            );
            this.Io(this.ka);
            fn_457(await fn_458(this.Xe.open(this.ka, tw)));
            first_arg
              ? fn_455(this, local_44)
              : ((this.ka.style.top = ""), (this.ka.style.left = ""));
            window.addEventListener("resize", this.Ca);
          } else this.Bg?.ka(this.Ka);
          second_arg &&
            ((this.wa = second_arg.kgb),
            fn_457(
              await fn_458(
                namespace.Tv(
                  [dee_2 ? this.ka : this.Ba, second_arg.kgb]
                    .filter((first_arg_2) => namespace.af(first_arg_2))
                    .map((first_arg_2) => new namespace.bo(first_arg_2, "show"))
                )
              )
            ));
        } finally {
          fn_458();
        }
      }
      async Oa(first_arg, second_arg, promise, fourth_arg, fifth_arg, sixth_arg, seventh_arg) {
        var fn_457 = (0, namespace.eg)(),
          fn_458 = fn_457();
        fn_457 = fn_457(1);
        try {
          let then = promise.then((first_arg_2) => {
            if (first_arg.Ka() !== this.Km?.Ka()) throw new cls_96();
            return first_arg_2;
          });
          fn_457(
            await fn_458(
              this.show(first_arg, second_arg, fourth_arg, fifth_arg, sixth_arg, seventh_arg)
            )
          );
          fn_457(await fn_458(fn_451(this.xYa, then)));
        } finally {
          fn_458();
        }
      }
      La(first_arg) {
        fn_456(this, first_arg.event);
      }
      close() {
        dee_2 ? this.Xe.close(this.ka) : this.Bg?.close();
      }
      stopPropagation() {}
      setConfig(first_arg) {
        this.config = first_arg;
        this.Ia = !1;
        this.xYa.oa = first_arg;
      }
    };
  cls_97.prototype.$wa$mLt3mc = function () {
    return this.stopPropagation;
  };
  cls_97.prototype.$wa$TvD9Pc = function () {
    return this.close;
  };
  cls_97.prototype.$wa$SlAvWb = function () {
    return this.La;
  };
  var dee_2 = namespace.Dee;
  namespace.xs(namespace.gfe, cls_97);
  namespace.w();
});
// Google Inc.

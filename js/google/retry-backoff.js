loaded_h_0(function (namespace) {
  var window = this;
  namespace.v("lOO0Vd");
  namespace.Uqb = new namespace.oo(namespace.WUa);
  namespace.w();
  var fn;
  fn = function (first_arg) {
    if (first_arg.bed) {
      let num = Date.now() - first_arg.t_e;
      return first_arg.bed(first_arg.pZb + 1, num);
    }
    return (
      Math.random() *
      Math.min(first_arg.iye * Math.pow(first_arg.rzc, first_arg.pZb), first_arg.MGe)
    );
  };
  namespace.Xqb = function (first_arg) {
    if (!first_arg.jib()) throw Error("pf`" + first_arg.qAb);
    ++first_arg.pZb;
    first_arg.qzc = fn(first_arg);
  };
  namespace.Yqb = class {
    constructor(first_arg, second_arg, third_arg, fourth_arg, fifth_arg, sixth_arg) {
      this.qAb = first_arg;
      this.iye = second_arg;
      this.rzc = third_arg;
      this.MGe = fourth_arg;
      this.xSe = fifth_arg;
      this.bed = sixth_arg || null;
      this.t_e = Date.now();
      this.pZb = 0;
      this.qzc = fn(this);
    }
    zKc() {
      return this.pZb;
    }
    jib(first_arg) {
      return this.pZb >= this.qAb ? !1 : first_arg != null ? !!this.xSe[first_arg] : !0;
    }
  };
  namespace.v("P6sQOc");
  var fn_2 = function (first_arg) {
      var obj = {};
      namespace.Ha(first_arg.Aa(), (first_arg_2) => {
        obj[first_arg_2] = !0;
      });
      var ba = first_arg.Ba(),
        ca = first_arg.Ca();
      return new namespace.Yqb(
        first_arg.wa(),
        namespace.Se(ba.getSeconds()) * 1e3,
        first_arg.oa(),
        namespace.Se(ca.getSeconds()) * 1e3,
        obj
      );
    },
    pq = new namespace.Pq("retryConfigOverrides"),
    fn_3 = function (first_arg, second_arg, promise, fourth_arg) {
      return promise.then(
        (first_arg_2) => first_arg_2,
        (first_arg_2) => {
          if (first_arg_2 instanceof namespace.yza) {
            if (!first_arg_2.status || !fourth_arg.jib(namespace.$e(first_arg_2.status, 1)))
              throw first_arg_2;
          } else if ("function" == typeof namespace.hnb && first_arg_2 instanceof namespace.hnb)
            switch (first_arg_2.ka) {
              case 103:
              case 7:
              case 10:
              case 101:
              case 105:
              case 408:
              case 425:
              case 429:
              case 502:
              case 503:
              case 504:
                break;
              default:
                throw first_arg_2;
            }
          if (fourth_arg && !fourth_arg.jib()) return namespace.Vh(first_arg_2);
          var qzc = fourth_arg.qzc;
          return new namespace.bh((first_arg_3) => {
            setTimeout(first_arg_3, qzc);
          }).then(() => {
            namespace.Xqb(fourth_arg);
            var z_kc = fourth_arg.zKc();
            second_arg = namespace.Rq(second_arg, namespace.kZa, z_kc);
            return fn_3(first_arg, second_arg, first_arg.fetch(second_arg), fourth_arg);
          });
        }
      );
    };
  namespace.sg(
    class {
      constructor() {
        this.ka = namespace.$f(namespace.Tqb);
        this.oa = namespace.$f(namespace.Uqb);
        this.logger = null;
        var local = namespace.$f(namespace.Llb);
        this.fetch = local.fetch.bind(local);
      }
      Nhb(first_arg, second_arg) {
        if (this.oa.getType(first_arg.kv()) !== 1) return new namespace.Plb(first_arg, null, 0);
        var policy = this.ka.policy,
          tq = namespace.Tq(first_arg, pq),
          local = null;
        if (tq) {
          local = {};
          if (tq.WCb) for (var local_2 of tq.WCb) local[local_2] = !0;
          else if (policy) for (var local_3 of policy.Aa()) local[local_3] = !0;
          local_2 = 1;
          local_3 = 0;
          let local_4 = Infinity,
            num = 2;
          if (policy) {
            local_2 = policy.wa() || local_2;
            let local_5 = policy.Ia()?.getSeconds();
            local_3 = namespace.Se(policy.Ka().getSeconds()) * 1e3;
            local_4 = local_5 != null ? namespace.Se(local_5) * 1e3 : local_4;
            num = policy.oa() || num;
          }
          local = new namespace.Yqb(
            tq.maxAttempts ?? local_2,
            tq.DOc ?? local_3,
            tq.dsb ?? num,
            tq.VTc ?? local_4,
            local,
            tq.J9d
          );
        } else policy && (local = fn_2(policy));
        if (!local || !local.jib()) return new namespace.Plb(first_arg, null, 0);
        second_arg = fn_3(this, first_arg, second_arg, local);
        return new namespace.Plb(first_arg, second_arg, 2);
      }
    },
    namespace.Vqb
  );
  namespace.w();
});
// Google Inc.

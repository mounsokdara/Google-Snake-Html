loaded_h_0(function (namespace) {
  var window = this;
  namespace.kpa(namespace.kr, namespace.y1a);
  namespace.opf = function (first_arg) {
    first_arg.isAvailable() &&
      ((namespace.ea.silk = namespace.ea.silk || {}),
      (namespace.ea.silk.s = namespace.ea.silk.s || {}),
      (namespace.ea.silk.s.sis = {}),
      (namespace.ea.silk.s.sis.ca = first_arg.Ow.bind(first_arg)));
  };
  namespace.FH = function () {
    if (window.google && window.google.kHL) return google.kHL;
    var hd = namespace.Hd("GWsdKe");
    return hd.Lb() ? hd.Eb("") : "";
  };
  namespace.GH = function () {
    var hd = namespace.Hd("GWsdKe");
    return hd.Lb() ? hd.Eb("").split("-", 2)[1] || "" : "";
  };
  namespace.v("dt4g2b");
  namespace.sg(
    class {
      isAvailable() {
        return !0;
      }
      Ow({ OR: arg, Gla: arg_2, Nna: arg_3, kMb: arg_4 } = {}) {
        arg !== void 0
          ? namespace.Ki({ serviceName: "sis", Yd: "ca", Ts: 1 })
          : namespace.Ki({ serviceName: "sis", Yd: "caar", Ts: 1 });
        a: switch (arg_3) {
          case 0:
            arg_3 = "https://accounts.google.com/ServiceLogin";
            break a;
          default:
            arg_3 = "https://accounts.google.com/AccountChooser";
        }
        arg = { hl: namespace.FH(), continue: arg || namespace.nu().toString() };
        arg_4 && (arg.ec = arg_4);
        arg_4 = namespace.gla(arg_3, arg);
        namespace.Af(arg_4, arg_2);
      }
    },
    namespace.Ibb
  );
  namespace.w();
});
// Google Inc.

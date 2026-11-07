loaded_h_0(function (namespace) {
  var window = this;
  namespace.Ein = namespace.x("U6rsxb", []);
  var fn = function () {
      var obj = { tr: fn_3 },
        fn_9 =
          fn_8() ||
          ((first_arg) => {
            namespace.qf(first_arg);
          }),
        obj_2 = {};
      for (let local in obj) {
        let fn_10 = obj[local];
        obj_2[local] = (...arg) => {
          try {
            return fn_10(...arg);
          } catch (error) {
            fn_9(error);
          }
        };
      }
      namespace.Ptb("tl", obj_2);
    },
    fn_2 = function () {
      var fn_9 = fn_6,
        fn_10 = fn_8();
      return (...arg) => {
        try {
          fn_9(...arg);
        } catch (error) {
          fn_10(error);
        }
      };
    },
    fn_3 = function (first_arg, second_arg) {
      if (namespace.Bg(first_arg, "preTranslated")) fn_4(second_arg, "-origindiv");
      else if (namespace.Bg(first_arg, "translated")) fn_4(second_arg, "-transdiv");
      else return fn_5(first_arg, second_arg);
    },
    fn_4 = function (first_arg, second_arg) {
      var full = first_arg.full,
        em = namespace.Em(full),
        local = first_arg.title !== "" ? first_arg.title : null;
      first_arg = namespace.Dm(first_arg.snippet);
      var em_2 = namespace.Em(full + second_arg),
        em_3 = namespace.Em(full + "-origLink");
      full = namespace.Em(full + "-transLink");
      namespace.xn(full, !namespace.yn(full));
      namespace.xn(em_3, !namespace.yn(em_3));
      namespace.xn(em_2, !namespace.yn(em_2));
      full = namespace.yn(em_2);
      local &&
        ((em_2 = namespace.Em(local)),
        (second_arg = namespace.Em(local + second_arg)),
        namespace.xn(second_arg, full),
        namespace.xn(em_2, !full));
      first_arg ? (namespace.xn(em, !1), namespace.xn(first_arg, !full)) : namespace.xn(em, !full);
    },
    fn_5 = function (first_arg, event) {
      if (!num) {
        num = !0;
        namespace.ph().Ec("ved", event.ved).log();
        var text = event.source.substring(0, 2),
          text_2 = event.target.substring(0, 2),
          full = event.full,
          local = event.title !== "" ? event.title : null,
          local_2 = event.apiKey || "",
          em = namespace.Em(full),
          keep_snippet = event.keepSnippet,
          clone_node = em.cloneNode(!0);
        clone_node.id = full + "-transdiv";
        namespace.xn(clone_node, !1);
        namespace.Yg(em).appendChild(clone_node);
        var find = new namespace.zo(clone_node).find("[data-less-button]");
        namespace.Um(find.el());
        find = new cls();
        var list = [clone_node];
        if (local) {
          let em_2 = namespace.Em(local),
            clone_node_2 = em_2.cloneNode(!0);
          clone_node_2.id = local + "-transdiv";
          namespace.xn(clone_node_2, !1);
          namespace.Rm(clone_node_2, em_2);
          list.push(clone_node_2);
        }
        return find
          .send(local_2, text, text_2, list)
          .then((first_arg_2) => {
            var dm = namespace.Dm(event.snippet);
            dm && (keep_snippet ? namespace.xn(dm, !1) : namespace.Um(dm));
            namespace.xn(em, !1);
            namespace.xn(clone_node, !0);
            namespace.Wm(clone_node, first_arg_2[0]);
            if (local) {
              dm = namespace.Em(local);
              let em_2 = namespace.Em(local + "-transdiv");
              namespace.xn(dm, !1);
              namespace.xn(em_2, !0);
              namespace.Wm(em_2, first_arg_2[1]);
            }
            keep_snippet ||
              ((first_arg_2 = new namespace.zo(em).find("[data-less-button]")),
              namespace.Um(first_arg_2.el()));
            first_arg_2 = namespace.Em(full + "-transLink");
            namespace.xn(first_arg_2, !1);
            first_arg_2 = namespace.Em(full + "-origLink");
            namespace.xn(first_arg_2, !0);
            namespace.vg(first_arg, "translated", "true");
          })
          .finally(() => {
            num = !1;
          });
      }
    },
    fn_6 = function () {
      fn();
    },
    yn = new namespace.Yn();
  var fn_7 = function (first_arg, second_arg, third_arg, fourth_arg) {
      return new Promise((fn_9, fn_10) => {
        var ela = namespace.ela({
          key: first_arg,
          source: second_arg,
          target: third_arg,
          format: "text",
          q: fourth_arg
        });
        namespace.Er(
          "https://www.googleapis.com/language/translate/v2",
          (event) => {
            event = event.target;
            if (event.isSuccess()) {
              event = JSON.parse(event.getResponse()).data.translations;
              let list = [];
              for (var local of event) list.push(local.translatedText);
              fn_9(list);
            } else ((local = event.pC()), fn_10(`Translate API failure: ${local}`));
          },
          "POST",
          ela,
          { "X-HTTP-Method-Override": "GET" },
          5e3,
          !0
        );
      });
    },
    cls = class {
      constructor() {
        this.ka = namespace.pf(yn);
      }
      send(first_arg, second_arg, third_arg, list) {
        if (this.ka.length > 0) return namespace.yOa(this.ka, (first_arg_2) => first_arg_2.send());
        var len = list.length,
          list_2 = [];
        for (let num_2 = 0, num_3 = 0; num_2 < len; num_2 = num_3) {
          var local = num_2;
          num_3 = num_2 + 50 < len ? num_2 + 50 : len;
          let list_3 = [];
          for (; local < num_3; local++) list_3.push(list[local].textContent || "");
          list_2.push(fn_7(first_arg, second_arg, third_arg, list_3));
        }
        return Promise.all(list_2).then((first_arg_2) => {
          var list_3 = [];
          for (let local_2 of first_arg_2) for (let local_3 of local_2) list_3.push(local_3);
          return list_3;
        });
      }
    };
  var fn_8 = () => {
    var obj = { mod: "tl", prop: "shop" };
    return (first_arg) => {
      google.ml && google.ml(first_arg, !1, obj);
    };
  };
  var num = !1;
  namespace.vm || namespace.Dh("tl", { init: fn_2() });
  var cls_2 = class extends namespace.qs {
    constructor(first_arg) {
      super(first_arg.Ma);
    }
    ka(first_arg) {
      first_arg = first_arg.nb ? first_arg.nb.el() : first_arg.targetElement.el();
      var dg = namespace.Dg(first_arg);
      return fn_3(first_arg, dg);
    }
  };
  cls_2.prototype.$wa$y2YwKb = function () {
    return this.ka;
  };
  namespace.xs(namespace.Ein, cls_2);
  namespace.v("tl");

  namespace.w();
});
// Google Inc.

(function () {
  // Every resource is a real file (assets/, js/, css/).
  // The manifest maps the original Google URLs to those files.
  var manifest_entries = window.__SNAKE_FILES || [];
  var entry_by_key = Object.create(null);

  for (var entry_index = 0; entry_index < manifest_entries.length; entry_index++) {
    entry_by_key[manifest_entries[entry_index][0]] = manifest_entries[entry_index];
  }

  // Turn any URL into the key used by the manifest (path + query)
  function url_to_key(url) {
    if (!url || typeof url !== "string") return "";
    if (url.indexOf("blob:") === 0 || url.indexOf("data:") === 0) return "";
    if (url.indexOf("//") === 0) url = "https:" + url;

    try {
      var parsed_url = new URL(url, "https://www.google.com");
      return parsed_url.pathname + parsed_url.search;
    } catch (error) {
      return "";
    }
  }

  function file_path_for(entry) {
    return entry[2];
  }

  function find_entry(url) {
    var key = url_to_key(url);
    return (key && entry_by_key[key]) || null;
  }

  // Tracking / logging requests that are answered with an empty response
  function is_tracking_url(url) {
    return /gen_204|client_204|csp\.withgoogle|httpservice\/retry|\/async\/bgasy|play\.google\.com\/log|adservice|\/js\/bg\//.test(
      String(url)
    );
  }

  // ---- fetch ----
  var original_fetch = window.fetch;

  window.fetch = function (input, init) {
    var url = typeof input === "string" ? input : (input && input.url) || "";
    var entry = find_entry(url);

    if (entry) return original_fetch.call(window, file_path_for(entry), init);

    if (is_tracking_url(url)) {
      return Promise.resolve(
        new Response("", {
          status: 200,
          headers: { "Content-Type": "text/plain" }
        })
      );
    }

    if (original_fetch) return original_fetch.call(window, input, init);
    return Promise.reject(new Error("offline " + url));
  };

  // ---- XMLHttpRequest ----
  var original_xhr_open = XMLHttpRequest.prototype.open;

  XMLHttpRequest.prototype.open = function () {
    var open_args = [].slice.call(arguments);
    var url = String(open_args[1] || "");
    var entry = find_entry(url);

    if (entry) open_args[1] = file_path_for(entry);
    else if (is_tracking_url(url)) open_args[1] = "data:text/plain,";

    return original_xhr_open.apply(this, open_args);
  };

  // ---- src / href / setAttribute hooks ----
  function map_url(value) {
    var entry = find_entry(String(value || ""));
    return entry ? file_path_for(entry) : value;
  }

  function hook_src_property(prototype) {
    if (!prototype) return;

    var descriptor = Object.getOwnPropertyDescriptor(prototype, "src");
    if (!descriptor || !descriptor.set || !descriptor.get) return;

    Object.defineProperty(prototype, "src", {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: function () {
        return descriptor.get.call(this);
      },
      set: function (value) {
        descriptor.set.call(this, map_url(value));
      }
    });
  }

  hook_src_property(HTMLImageElement.prototype);
  hook_src_property(HTMLScriptElement.prototype);
  if (window.HTMLAudioElement) hook_src_property(HTMLAudioElement.prototype);
  if (window.HTMLSourceElement) hook_src_property(HTMLSourceElement.prototype);

  var href_descriptor = Object.getOwnPropertyDescriptor(HTMLLinkElement.prototype, "href");

  if (href_descriptor && href_descriptor.set && href_descriptor.get) {
    Object.defineProperty(HTMLLinkElement.prototype, "href", {
      configurable: true,
      get: function () {
        return href_descriptor.get.call(this);
      },
      set: function (value) {
        var entry = find_entry(String(value || ""));
        href_descriptor.set.call(this, entry ? file_path_for(entry) : value);
      }
    });
  }

  var original_set_attribute = Element.prototype.setAttribute;

  Element.prototype.setAttribute = function (name, value) {
    if ((name === "src" || name === "href") && typeof value === "string") {
      var entry = find_entry(value);
      if (entry) value = file_path_for(entry);
    }
    return original_set_attribute.call(this, name, value);
  };

  // ---- game stylesheet ----
  var stylesheet_entry =
    entry_by_key[
      "/xjs/_/ss/k=xjs.s.LzmIVjdeLEE.L.W.O/am=CAAQAAAAAAAAAAgAAAAAAAAAAAAABAggAgAAAAAAAAAAAAAAAAAAAEIAIAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAACAAEAAAAAAAAAAAAgAAAEAAAAAAAQRAAAAAAAAAAAIACAAAAAIAQAgAAAACAAAAAAAAAAAAAACj0AAAAQAEAAAAAAIAHMABwEQgAAAAAAAAAAAABAAAAAABAAAAgAQAAAAAAAAAAAAAEEAAAAAAAAAAABAAAAAAAABAAgAChAAAAAAAACgAAgAAAAAAAAQAAAAAAAAAAAQYAESAAAAAAAAAAIAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAACAAAAAAAAAAAEAAAAAAAIIDAAAAAAAEAwAAAAAABgAAAAgEAAACAAAAAAAAAAAAAAAAkQARAAAQAAAAAACAAAAAAAAAAAAAAACBAMAQCgEAAoACAAFXhAIAAAAADgAAIAAAAAAEAACKCAAABAAAAAAAIAAAAAAAAAAgBCAEEAAAABAAAAAAAAAAAAAAgCAAAAAAAAAAAAigAAQgAMAIJABAUshUCBABACAAAAACAAAIICgAAAAAAAAEBAAAAAAAACAAAAAAEQAAAAAAAAAAAAAAAAAAAAAAAAAAFiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAIACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ/d=1/ed=1/cb=loaded_h_0/rs=ACT90oGu7qA7ENexsdv3aOh6e3ZcgIzO6Q/m=X3N0Bf,attn,cdos,cr,gwc,hsm,jsa,mb4ZUb,cEt90b,SNUn3,qddgKe,sTsDMc,dtl0hd,eHDfl,YV5bee,d,csi?cb=121509378"
    ];

  if (stylesheet_entry) {
    var stylesheet_link = document.createElement("link");
    stylesheet_link.rel = "stylesheet";
    stylesheet_link.href = file_path_for(stylesheet_entry);
    document.head.appendChild(stylesheet_link);
  }

  // ---- game script (started from js/start.js) ----
  window.__snakeStart = function () {
    var game_entry =
      entry_by_key[
        "/xjs/_/js/k=xjs.s.en.8aXlnig_7XI.2023.O/am=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIAAEAAASACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIBAAAAgAQAAAAAAAAAAAAAEEIAAAAAEAAAAAAAAAAwAABAAgACgBAAAAAAKAgAAAAAAAAAAAAAAAAAAAAAAASAAAQAAIAICAAAAIAAAwD8EAAAAAA0AAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIQAAAAAAAAAAgAUAAAAAQAABAAAEgAACIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAIACAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAABAAAACAAgAAAAAAACAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAgAADAAAAAAAAAAAAAACAwA8AAEAAAAAAAAAAAQAAAAAAAAAAAAAAAEAAAAAAAAAAEAAAgAIAAABwAB4PMERQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAUwB5KCABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEVP2RoAEA/d=1/ed=1/dg=4/ichc=1/rs=ACT90oGUtf3KrEt7hyr85UkHDSbiWnJFnQ/ee=ALeJib:B8gLwd;AfeaP:TkrAjf;BMxAGc:E5bFse;BgS6mb:fidj5d;BjwMce:cXX2Wb;BuJtU:v6yjN;CIZTGb:Kqhykb;CxXAWb:YyRLvc;D0uLQb:UrRsXe;DM55c:imLrKe;DQEued:Fevhcf;DULqB:RKfG5c;Dkk6ge:JZmW9e;DpcR3d:zL72xf;EABSZ:MXZt9d;ESrPQc:mNTJvc;EVNhjf:pw70Gc;EjXHpb:pSHqh;EmZ2Bf:zr1jrb;EnlcNd:WeHg4;F54IAe:ZgsFh;F9mqte:UoRcbe;FSxmUe:fiZR8b;Fkukfc:i8H2c;Fmv9Nc:O1Tzwc;FqHJkd:yQamIb;G0KhTb:LIaoZ;GleZL:J1A7Od;HMDDWe:G8QUdb;HtPxrd:Gx8jAb;IBADCc:RYquRb;ImvEf:IBTA4e;IsdWVc:qzxzOb;JXJSm:ii1RGf;JXS8fb:Qj0suc;JqSq7d:y9ePhe;JsbNhc:Xd8iUd;K08hxe:zmbGlf;K5nYTd:ZDZcre;KA3P2:C3JnCe;KDb6nb:fE9n2;KOxcK:OZqGte;KQzWid:ZMKkN;KdIHef:BWtNj;KpRAue:Tia57b;LBgRLc:SdcwHb,XVMNvd;LBn8Cf:bJ9L0c;LEikZe:byfTOb,lsjVmc;LXA8b:q7OdKd;LsNahb:ucGLNb;MNkAde:KMCd1d;NJ1rfe:qTnoBf;NPKaK:SdcwHb;NSEoX:lazG7b;NjIwef:YVgi7d;Np8Qkd:Dpx6qc;Nyt6ic:jn2sGd;OIfWUb:qfOYcd;OiqE2c:TFpEK;OoK5v:Sp69O;OohIYe:mpEAQb;Pjplud:PoEs9b;PpTLXd:pJYjx;Q1Ow7b:x5CSu;Q7iJ9c:bVLZ3d;QE20Be:yxCHBd;QFOGlf:PQ2Aoe;QGR0gd:Mlhmy;QYLF2b:pAQYUd;Qk7yid:BbYS0d;Qw8Feb:jpavUe;R4IIIb:QWfeKf;R9Ulx:CR7Ufe;RCF5Sd:X1kBmd;RZKicf:PQXVv;RZtOEd:DvKcFe;Raf5me:mgvFMc;SFghJd:YRZpK;SLtqO:Kh1xYe;SNUn3:ZwDk9d,xD8Kp;SNk4Je:wWMhg;ScI3Yc:e7Hzgb,e7Hzgb;ShpF6e:N0pvGc;Snahre:mGCtob;SzQQ3e:dNhofb;TIUVQd:lWTJwd;TroZ1d:vVVzjb;U96pRd:FsR04;UBKJZ:LGDJGb;UDrY1c:N0F29d,W50NVd,eps46d,wciyUe;UVmjEd:EesRsb;UVzb9c:IvPZ6d;UYRIEb:HzTAQc;UyG7Kb:wQd0G;V2HTTe:RolTY;VGRfx:VFqbr;VMuEm:pL7sBc;VN6jIc:ddQyuf;VOcgDe:YquhTb;VhA7bd:vAmQFf;VsAqSb:PGf2Re;W9QSQe:ynCWwc;WDGyFe:jcVOxd;WXtNeb:QU9BMd;Wfmdue:g3MJlb;Wl55ib:NcYlP;Y3c5sd:FGbfLe;YIZmRd:A1yn5d;YV5bee:IvPZ6d;YnHUBf:sNsSob;ZMvdv:PHFPjb;ZSH6tc:QAvyLe;Zen4yb:jMF88c;ZlFEdf:fQTtic;ZlOOMb:P0I0Ec;ZnPvub:Acmyhd;a56pNe:JEfCwb;aAJE9c:WHW6Ef;aCJ9tf:qKftvc;aVZq3e:EMeVIb;aZ61od:arTwJ;aci7y:Z5Tr6c;bUIkwb:WMwEHe;bcPXSc:gSZLJb;cEt90b:ws9Tlc;cFTWae:gT8qnd;coJ8e:KvoW8;dIoSBb:ZgGg9b;dLlj2:Qqt3Gf;dXdZV:a7QTqd;dowIGb:ebZ3mb,ebZ3mb;dtl0hd:lLQWFe;eBAeSb:Ck63tb;eBZ5Nd:audvde;eHDfl:HQyHcc,ofjVkb;eJKchc:ATg1be;eO3lse:UefOmb;euOXY:OZjbQ;g8nkx:U4MzKc;gTtPhb:RvPnwb;gaub4:TN6bMe;gbfHR:qZtzib;gtVSi:ekUOYd;h3MYod:ws9Tlc;hK67qb:QWEO5b;hVic1b:Kqhykb;heHB1:sFczq;hjRo6e:F62sG;hlqGX:FWz1ic;hsLsYc:Vl118;hwoVHd:zw4U8c;iFQyKf:QIhFr;jJj2G:kF2o2b;k1O0rf:pnOULd;k2Qxcb:XY51pe;kbAm9d:MkHyGd;lOO0Vd:OTA3Ae;lbfkyf:MqGdUd;liAz7d:kF2o2b;lkq0A:JyBE3e;mMVOGb:qDM7K;mWzs9c:fz5ukf;mtKMCc:ZG5Tfe;nBZnZe:CvErjb;nE6OJf:Fi4rsc;nEBWNb:MxKX9d;nJw4Gd:dPFZH;nrDcw:SuEoDe;oGtAuc:sOXFj;oUlnpc:RagDlc;oiBhre:OuMkRd;okUaUd:wItadb;osNlFe:eRJvTc;pKJiXd:VCenhc;pNsl2d:j9Yuyc;pXdRYb:JKoKVe;pj82le:ww04Df;qGV2uc:HHi04c;qQEoOc:KUM7Z,d7YSfd;qZx2Fc:j0xrE;qaS3gd:yiLg6e;qafBPd:sgY6Zb;qavrXe:I0C9u;qddgKe:d7YSfd,x4FYXe;rdexKf:FEkKD;rmWaj:PMS6Sd;ropkZ:hjoqoe;sTsDMc:JksfDf;sZmdvc:rdGEfc;tH4IIe:Ymry6;teSRSb:BMLai;tosKvd:ZCqP3;trZL0b:qY8PFe;twgzJd:Ix7YEd;uJfyCe:WJ5gBc;uknmt:GkPrzb;uuQkY:u2V3ud;vEYCNb:FaqsVd;vRlMvf:Iw9Xo;vfVwPd:lcrkwe;w3bZCb:ZPGaIb;w9w86d:XwhUEb,dt4g2b,gKD90c,lWVZVe;wFpbG:JbGbBc;wQlYve:aLUfP;wR5FRb:O1Gjze,TtcOte;wV5Pjc:L8KGxe;wxAT5b:tHKmqf;x9N9ie:KH4Qof;xBbsrc:NEW1Qc;xpaRob:AVqZ9b;yiL5Ab:MT0ZBd;ysNiMc:CpIBjd;yxTchf:KUM7Z;z97YGf:oug9te;zaIgPb:Sl0pxd/cb=loaded_h_0/m=X3N0Bf,attn,cdos,cr,gwc,hsm,jsa,mb4ZUb,cEt90b,SNUn3,qddgKe,sTsDMc,dtl0hd,eHDfl,YV5bee,d,csi?cb=121509378"
      ];

    if (!game_entry) {
      console.error("missing snake entry");
      return;
    }

    var game_script = document.createElement("script");
    game_script.async = false;
    game_script.src = file_path_for(game_entry);
    document.body.appendChild(game_script);
  };

  // ---- fix images / sources / backgrounds that Google's code already set ----
  function fix_existing() {
    function fix_element(element, attribute) {
      var current_value = element.getAttribute(attribute);
      if (!current_value) return;

      var entry = find_entry(current_value);
      if (!entry) return;

      try {
        element[attribute] = file_path_for(entry);
      } catch (error) {}
      try {
        element.setAttribute(attribute, file_path_for(entry));
      } catch (error) {}
    }

    document.querySelectorAll("img[src], source[src], audio[src]").forEach(function (element) {
      fix_element(element, "src");
    });

    document.querySelectorAll("link[href], a[href]").forEach(function (element) {
      var href = element.getAttribute("href");
      if (href && find_entry(href)) {
        try {
          element.href = file_path_for(find_entry(href));
        } catch (error) {}
      }
    });

    // Inline styles with url()
    document.querySelectorAll("[style*='url(']").forEach(function (element) {
      var style_text = element.getAttribute("style") || "";
      var changed = false;

      var new_style_text = style_text.replace(
        /url\((['"]?)([^)'"]+)\1\)/gi,
        function (match, quote, url) {
          var entry = find_entry(url);
          if (entry) {
            changed = true;
            return "url(" + quote + file_path_for(entry) + quote + ")";
          }
          return match;
        }
      );

      if (changed) element.setAttribute("style", new_style_text);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fix_existing);
  } else {
    fix_existing();
  }

  setTimeout(fix_existing, 300);
  setTimeout(fix_existing, 1000);
  setTimeout(fix_existing, 2500);

  // Watch for late-added elements
  if (window.MutationObserver) {
    var mutation_observer = new MutationObserver(function () {
      fix_existing();
    });

    mutation_observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "src", "href"]
    });
  }
})();

(function () {
  var W = window;
  var H = document.documentElement;

  function query(key) {
    try {
      return new URLSearchParams(location.search).get(key);
    } catch (e) {
      return null;
    }
  }

  function media(q) {
    try {
      return W.matchMedia(q).matches;
    } catch (e) {
      return false;
    }
  }

  // Override: ?mode=mobile | ?mode=desktop | ?mode=auto (remembered in localStorage)
  function override() {
    var m = query("mode");

    if (m === "mobile" || m === "desktop") {
      try { localStorage.setItem("snake_mode", m); } catch (e) {}
      return m;
    }

    if (m === "auto") {
      try { localStorage.removeItem("snake_mode"); } catch (e) {}
      return null;
    }

    try {
      var saved = localStorage.getItem("snake_mode");
      if (saved === "mobile" || saved === "desktop") return saved;
    } catch (e) {}

    return null;
  }

  function detect() {
    var forced = override();
    if (forced) return forced;

    var n = navigator;
    var ua = n.userAgent || "";

    if (n.userAgentData && n.userAgentData.mobile === true) return "mobile";
    if (/Android|iPhone|iPad|iPod|Mobile|Silk|Opera Mini|IEMobile/i.test(ua)) return "mobile";

    // iPadOS reports a Mac UA; real Macs have no touch points
    if (/Macintosh/.test(ua) && (n.maxTouchPoints || 0) > 1 && media("(pointer:coarse)")) return "mobile";

    // Everything else (desktop PCs, touch laptops, "Desktop site" mode) = desktop: small UI, no joystick
    return "desktop";
  }

  var mode = detect();
  W.__snakeMode = mode;
  W.__snakeDetect = detect;
  H.classList.add(mode === "mobile" ? "snake-mobile" : "snake-desktop");
})();

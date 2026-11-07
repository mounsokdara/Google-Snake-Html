(function () {
  var mode = window.__snakeMode;
  var root = document.querySelector(".EjCLSb");
  var pad = document.getElementById("snake-mobile-pad");
  var toggle = document.getElementById("snake-mobile-toggle");

  if (mode === "mobile") {
    if (root) root.setAttribute("data-is-mobile", "true");
    // Joystick is OFF by default: the game's own saved setting
    // ("virtual_joystick_enabled") is only written when the player taps the toggle.
  } else {
    if (root) root.removeAttribute("data-is-mobile");
    // Game then skips its joystick code
    if (pad) pad.remove();
    if (toggle) toggle.remove();
  }

  // Auto switch: re-evaluate on resize / rotation / pointer change,
  // reload once so the game re-initialises.
  var timer = null;

  function check() {
    clearTimeout(timer);
    timer = setTimeout(function () {
      var now = window.__snakeDetect && window.__snakeDetect();
      if (!now || now === window.__snakeMode) return;

      try {
        var count = +(sessionStorage.getItem("snake_sw") || 0);
        var last = +(sessionStorage.getItem("snake_sw_t") || 0);
        var recent = Date.now() - last < 5000;

        // Loop guard
        if (recent && count >= 2) return;

        sessionStorage.setItem("snake_sw", recent ? count + 1 : 1);
        sessionStorage.setItem("snake_sw_t", Date.now());
      } catch (e) {}

      location.reload();
    }, 400);
  }

  window.addEventListener("resize", check);
  window.addEventListener("orientationchange", check);

  try {
    ["(pointer:coarse)", "(hover:none)"].forEach(function (q) {
      var mql = matchMedia(q);
      if (mql.addEventListener) mql.addEventListener("change", check);
      else if (mql.addListener) mql.addListener(check);
    });
  } catch (e) {}
})();

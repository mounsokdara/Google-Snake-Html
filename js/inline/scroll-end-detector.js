(function () {
  window.google = window.google || {};
  window.google.ishk = [];
  function fn() {
    return (
      window.scrollY + window.document.documentElement.clientHeight >=
      Math.max(document.body.scrollHeight, document.body.offsetHeight)
    );
  }
  function fn_2() {
    fn() &&
      window.google.ishk.length === 0 &&
      ((window.google.bs = !0), window.removeEventListener("scroll", fn_2));
  }
  fn()
    ? (window.google.bs = !0)
    : ((window.google.bs = !1), window.addEventListener("scroll", fn_2));
}).call(this);

(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var global_scope = this || self;
  navigator || (global_scope.navigator = {});
  typeof navigator.sendBeacon !== "function" &&
    (navigator.sendBeacon = function (first_arg, second_arg) {
      var xmlhttp_request = new XMLHttpRequest();
      xmlhttp_request.open("POST", first_arg, !0);
      xmlhttp_request.send(second_arg);
      return !0;
    });
}).call(this);

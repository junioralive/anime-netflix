// ==UserScript==
// @name         Homepage Redirect
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://anitaku.to/
// @icon         https://www.google.com/s2/favicons?domain=anitaku.to
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  "use strict";
  location.href = "https://anitaku.to/popular.html";
})();
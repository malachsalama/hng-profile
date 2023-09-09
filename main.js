"use strict";

document.getElementById("dayOfWeek").textContent =
  new Date().toLocaleDateString("en-US", { weekday: "long" });

setInterval(function () {
  document.getElementById("currUTCTime").textContent = new Date().getTime();
}, 1000);

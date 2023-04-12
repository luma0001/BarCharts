"use strict";

window.addEventListener("load", start);

function start() {
  const bars = document.querySelectorAll(".bar");

  const firstBar = bars[0];

  const h = 2;

  firstBar.style.height = `${h}px`;
}

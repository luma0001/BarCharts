"use strict";

window.addEventListener("load", start);

const data = [
  23, 18, 3, 5, 12, 23, 18, 3, 5, 12, 23, 18, 3, 5, 12, 23, 18, 3, 5, 12, 23,
  18, 3, 5, 12, 23, 18, 3, 5, 12, 23, 18, 3, 5, 12, 23, 18, 3, 5, 12, 23, 18, 3,
  5, 12, 23, 18, 3, 5, 12, 23, 18, 3, 5, 12, 23, 18, 3, 5, 12,
];

function start() {
  const bars = document.querySelectorAll(".bar");

  const firstBar = bars[0];

  const h = (data[0] / 32) * 100;

  firstBar.style.height = `${h}px`;
}

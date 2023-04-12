"use strict";

window.addEventListener("load", start);

const data = [
  13, 18, 3, 15, 12, 3, 18, 3, 5, 12, 23, 8, 3, 15, 12, 23, 18, 3, 5, 12, 23,
  18, 30, 5, 12, 23, 8, 13, 5, 12, 23, 18, 3, 5, 4, 23, 18, 3, 5, 12, 23, 28, 3,
  25, 12, 23, 18, 3, 5, 17, 13, 18, 30, 5, 12, 23, 18, 10, 19, 12,
];

function start() {
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < 40; i++) {
    const currentBar = bars[i];

    const h = (data[i] / 32) * 100;

    currentBar.style.height = `${h}px`;
  }
}

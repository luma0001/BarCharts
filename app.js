"use strict";

window.addEventListener("load", start);

const data = [
  23, 18, 3, 5, 12, 23, 18, 3, 5, 12, 23, 18, 3, 5, 12, 23, 18, 3, 5, 12, 23,
  18, 3, 5, 12, 23, 18, 3, 5, 12, 23, 18, 3, 5, 12, 23, 18, 3, 5, 12,
];

function start() {
  //   console.log(data.length());
  const bars = document.querySelectorAll(".bar");

  const firstBar = bars[0];

  const h = (data[0] / 23) * 100;

  firstBar.style.height = `${h}px`;
}

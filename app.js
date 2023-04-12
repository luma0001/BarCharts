"use strict";

window.addEventListener("load", start);

const data = [
  13, 18, 3, 15, 12, 3, 18, 3, 5, 12, 23, 8, 3, 15, 12, 23, 18, 3, 5, 12, 23,
  18, 30, 5, 12, 23, 8, 13, 5, 12, 23, 18, 3, 5, 4, 23, 18, 3, 5, 12, 23, 28, 3,
  25, 12, 23, 18, 3, 5, 17, 13, 18, 30, 5, 12, 23, 18, 10, 19, 12,
];

function start() {
  //Genere en ny vædi hvert sekund
  setInterval(updateQue, 1000);

  //Kører setQueLength med de originale værdier i data
  setQueLenght(document.querySelectorAll(".bar"));
}

//Går i gennem data-arrayet og sætter længden af barene påbaggrund deraf.
function setQueLenght(bars) {
  for (let i = 0; i < 40; i++) {
    const currentBar = bars[i];

    const h = (data[i] / 32) * 100;
    currentBar.style.height = `${h}px`;
  }
}

function updateQue() {
  //Genere et tilfældigt nummer
  const newNumber = Math.floor(Math.random() * 34);
  sortArray(newNumber);

  const bars = document.querySelectorAll(".bar");
  setQueLenght(bars);
}

//Funktion som tager et nyt nummer, sætter det ind på index 40(?) og fjerner vædien index 0
//"pusher" det nye tal og shifter det første i rækken.
function sortArray(newNumber) {
  data.push(newNumber);
  data.shift();
}

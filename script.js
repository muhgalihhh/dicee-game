const player1 = document.querySelector(".img1");
const player2 = document.querySelector(".img2");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// ketika di refresh akan menghasilkan angka random

player1.setAttribute("src", `images/dice${randomNumber1}.png`);
player2.setAttribute("src", `images/dice${randomNumber2}.png`);

// menentukan pemenang
const title = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  title.innerHTML = "Player 1 Wins! 🎉";
} else if (randomNumber1 < randomNumber2) {
  title.innerHTML = "Player 2 Wins! 🎉";
} else {
  title.innerHTML = "Draw!";
}

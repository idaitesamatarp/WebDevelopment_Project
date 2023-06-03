let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log('randomNumber', randomNumber1);

const img1 = document.querySelectorAll("img")[0];
const img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", `./images/dice${randomNumber1}.png`);
img2.setAttribute("src", `./images/dice${randomNumber2}.png`);

let h1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "Player 1 Win";
} else if (randomNumber2 > randomNumber1) {
    h1.innerHTML = "Player 2 Win";
} else {
    h1.innerHTML = "Draw";
}
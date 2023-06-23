// Directing button click

let btn = document.querySelectorAll(".drum");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    let btnInner = btn[i].innerHTML;
    keyboardPress(btnInner);
    buttonAnimation(btnInner);
  });
}

// Direction keyboard press
document.addEventListener("keypress", function (event) {
  keyboardPress(event.key);
  buttonAnimation(event.key);
});

function keyboardPress(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log("first", btnInner);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}

//* CATATAN
/* function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
} */

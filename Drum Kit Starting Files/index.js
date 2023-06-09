let btn = document.querySelectorAll(".drum");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    btn[i].style.color = "white";

    let btnInner = btn[i].innerHTML;

    switch (btnInner) {
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
  });

  btn[i].addEventListener("mouseleave", () => {
    // let audio = new Audio('./sounds/crash.mp3');
    // audio.play();
    btn[i].style.color = "#da0463";
  });
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

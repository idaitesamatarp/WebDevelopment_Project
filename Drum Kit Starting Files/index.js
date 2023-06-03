let btn = document.querySelectorAll(".drum");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        // let audio = new Audio('./sounds/crash.mp3');
        // audio.play();
        btn[i].style.color = "white"
    })
    btn[i].addEventListener("mouseleave", () => {
        // let audio = new Audio('./sounds/crash.mp3');
        // audio.play();
        btn[i].style.color = "#da0463";
    })
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
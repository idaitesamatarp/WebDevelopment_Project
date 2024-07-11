alert("Hello");
typeof 123;

function test() {
  var a = "3";
  var b = "8";

  /***********Do not change the code above 👆*******/
  //Write your code on lines 7 - 9:
  var c = a;
  a = b;
  b = c;
  //   [a, b] = [b, a];

  /***********Do not change the code below 👇*******/

  console.log("a is " + a);
  console.log("b is " + b);
}

function changingStrings() {
  //* 1 Create a var that stores the name that user enters via prompt.
  var name = prompt("What is your name ?");

  //* 2 Capitalize the first letter of their name.
  //* a) isolate the first char.
  var firstChar = name.slice(0, 1);

  //* b) turn the first char to upper case.
  var upperFirstChar = firstChar.toUpperCase();

  //* c) isolate the rest of the name.
  var restOfName = name.slice(1, name.length);

  //* d) change the rest of the name to lower case.
  restOfName = restOfName.toLowerCase();

  //* e) concatenate the first char with the rest of the char.
  var capitalizedName = upperFirstChar + restOfName;

  //* 3 We use the capitalized version of their name to greet them using an alert.
  alert("Hello " + capitalizedName);
}

function numberQuiz() {
  var num = 12;
  num /= 3;
  // 4

  var a = 16 % 4;
  // 0

  var x = 3;
  var y = x++;
  y += 1;
  // 4
}

//* https://stanford.edu/~cpiech/karel/ide.html

function lifeInWeeks(age) {
  /************Don't change the code above************/

  //Write your code here.
  let days90 = 365 * 90;
  let weeks90 = 52 * 90;
  let months90 = 12 * 90;
  let x = days90 - 365 * age;
  let y = weeks90 - 52 * age;
  let z = months90 - 12 * age;

  let result = `You have ${x} days, ${y} weeks, and ${z} months left.`;

  console.log(result);

  /*************Don't change the code below**********/
}

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8); 
bmi should equal 20 when it's rounded to the nearest whole number.
*/

function bmiCalculator(weight, height) {
    var bmi = weight / ( height * height ); 
    return parseInt(bmi);
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi)
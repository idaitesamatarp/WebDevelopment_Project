var n = Math.random();
n = n + 6;
n = Math.floor(n) + 1;
console.log('n', n);

function loveCalculator() {
    prompt("What is your name ?");
    prompt("What is their name ?");

    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;

    if (loveScore > 80) {
        alert("Your love is " + loveScore + "%. Both of you have absolute love.");
    } else {
        alert("Your love is " + loveScore + "%");
    }
}

function bmiCalculator (weight, height) {
    let bmi = weight / (height * height);
    let interpretation = "";
    
    if(bmi < 18.5) {
        interpretation = `Your BMI is ${bmi}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = `Your BMI is ${bmi}, so you have a normal weight.`;
    } else {
        interpretation = `Your BMI is ${bmi}, so you are overweight.`;
    }
    
    return interpretation;
    
}

function isLeapYear(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.  
        let isLeap = 0;

        // if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) { 
        //     isLeap = 1
        // } else {
        //     isLeap = 0
        // }

        if (year % 4 === 0) {
            if (year % 100 === 0) {
                if (year % 400 == 0) {
                    isLeap = 1;
                } else {
                    isLeap = 0;
                }
            } else {
                isLeap = 1;
            }
        } else {
            isLeap = 0;
        }
    
        return isLeap ? "Leap Year" : "Not Leap Year";
    
    /**************Don't change the code below****************/    
    
}

function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        
        let output = "";
        let numberOfPeople = names.length;
        let randomIndex = Math.floor(Math.random() * numberOfPeople);
        let randomPerson = names[randomIndex];
        output = `${randomPerson} is going to buy lunch today`;
        return output;

    /******Don't change the code below*******/    
}

function bottleChallenge () { 
    var numberOfBottles = 99;
    while (numberOfBottles >= 0) {
        var bottleWord = "bottles";
        if (numberOfBottles === 1) {
            bottleWord = "bottle";
        } 
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
        console.log(numberOfBottles + " " + bottleWord + " of beer,");
        console.log("Take one down, pass it around,");
        numberOfBottles--;
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    }
}

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        let numbers = [];
        if (n === 1) {
            numbers = [0]
        } else if (n === 2) {
            numbers = [0,1]
        } else {
            numbers = [0,1]
            
            for (let i = 2; i < n; i++) {
                numbers.push(numbers[numbers.length - 2] + numbers[numbers.length - 1])
            }
        }
        return numbers;
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
}
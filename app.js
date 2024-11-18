console.log("hello")

// let num1 = 20;
// let num2 = 4;
// let operator = addFunction(num1, num2);

function firstNumResult() {
     firstNum = result;
     secondNum = "";
     operator = "";
}

function addFunction(num1, num2) {
    result = parseInt(num1) + parseInt(num2);
    console.log(result)
    displayResult()
    firstNumResult()
}

function multiplyFunction(num1, num2) {
    result = parseInt(num1) * parseInt(num2);
    console.log(result)
    displayResult()
    firstNumResult()
}

function subtractFunction(num1, num2) {
    result = parseInt(num1) - parseInt(num2);
    console.log(result)
    displayResult()
    firstNumResult()
}

function divideFunction(num1, num2) {
    result = parseInt(num1) / parseInt(num2);
    console.log(result)
    displayResult()
    firstNumResult()
}

let displayScreen = document.getElementById("display-screen");
let numPadButtons = document.querySelectorAll(".nm-btn");
let equalButton = document.querySelectorAll(".eq-btn");

function displayResult() {
    if (Number.isInteger(result)) {
        displayScreen.querySelector("div").innerText = result;
    } else
    displayScreen.querySelector("div").innerText = result.toFixed(3);
}

function clearCalc() {
    firstNum = "";
    secondNum = "";
    operator = "";
    result = "";
    displayScreen.querySelector("div").innerText = 0;
}

let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";

for(i of numPadButtons) {
    i.addEventListener('click', function(digit) {
    digit.stopPropagation() 
    if(result !== "" && operator === "") {
        firstNum = "";
        firstNum = firstNum + digit.target.innerText
        console.log(digit.target.innerText)
        displayScreen.querySelector("div").innerText = firstNum; 
        result = "";
    } else if(operator === "" && secondNum === "" && result === "") { 
    firstNum = firstNum + digit.target.innerText
    console.log(digit.target.innerText)
    displayScreen.querySelector("div").innerText = firstNum; 
    } else {
            secondNum = secondNum + digit.target.innerText
            result = "";
            console.log(digit.target.innerText)
            displayScreen.querySelector("div").innerText = firstNum + " " + operator + " " + secondNum; 
        }
    }
)};

let operatorSelect = document.querySelectorAll(".op-btn");

for(o of operatorSelect) {
    o.addEventListener('click', function(opt) {
        opt.stopPropagation()  
        if(operator === "" && firstNum !== "") {
        operator = opt.target.innerText
        console.log(operator)
        displayScreen.querySelector("div").innerText = firstNum + " " + operator;
    } else if (secondNum !== "") {
        caculation();
        operator = opt.target.innerText
        displayScreen.querySelector("div").innerText = firstNum + " " + operator;
    }
})
};

let equalSelect = document.querySelector(".eq-btn")
equalSelect.addEventListener('click', function(e) {
    e.stopPropagation()
    if(secondNum !== "") {
    console.log("Equals is pressed & it did a calculation")
    caculation();
    } else
    console.log("Equals is pressed & it did nothing")
})

function caculation() {
    switch (secondNum !== "") {
        case operator === "+":
            addFunction(firstNum, secondNum)
            break;
        case operator === "*":
            multiplyFunction(firstNum, secondNum)
            break;
        case operator === "-":
            subtractFunction(firstNum, secondNum)
            break;
        case operator === "/":
            divideFunction(firstNum, secondNum)   
            break;
        default:
            clearCalc()
    }
}


let clearCalculator = document.querySelector("#clear")
clearCalculator.addEventListener('click', function(e) {
    e.stopPropagation()
    clearCalc()
})

let deleteDigit = document.querySelector("#delete")
deleteDigit.addEventListener('click', function(e) {
    console.log("delete is pressed")
    e.stopPropagation()
    if(operator === "" && secondNum === "" && result === "") { 
    firstNum = firstNum.slice(0, -1)
        if(firstNum === "") {
            displayScreen.querySelector("div").innerText = 0; 
        } else
        displayScreen.querySelector("div").innerText = firstNum; 
    } else {
            secondNum = secondNum.slice(0, -1)
            displayScreen.querySelector("div").innerText = firstNum + " " + operator + " " + secondNum; 
        }
})
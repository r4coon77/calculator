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
    displayScreen.querySelector("div").innerText = result;
    firstNumResult()
}

function multiplyFunction(num1, num2) {
    result = parseInt(num1) * parseInt(num2);
    console.log(result)
    displayScreen.querySelector("div").innerText = result;
    firstNumResult()
}

function subtractFunction(num1, num2) {
    result = parseInt(num1) - parseInt(num2);
    console.log(result)
    displayScreen.querySelector("div").innerText = result;
    firstNumResult()
}

function divideFunction(num1, num2) {
    result = parseInt(num1) / parseInt(num2);
    console.log(result)
    displayScreen.querySelector("div").innerText = result;
    firstNumResult()
}



let displayScreen = document.getElementById("display-screen");
let numPadButtons = document.querySelectorAll(".nm-btn");
let equalButton = document.querySelectorAll(".eq-btn");

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
    if(operator === "" && secondNum === "") { 
    firstNum = "";
    result = "";
    firstNum = firstNum + digit.target.innerText
    console.log(digit.target.innerText)
    displayScreen.querySelector("div").innerText = firstNum; 
    result = ""; 
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
    }
})
};

let equalSelect = document.querySelector(".eq-btn")
equalSelect.addEventListener('click', function(e) {
    e.stopPropagation()
    console.log("Equals is pressed")
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
})


let clearCalculator = document.querySelector("#clear")
clearCalculator.addEventListener('click', function(e) {
    e.stopPropagation()
    clearCalc()
})

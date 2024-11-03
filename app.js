console.log("hello")

// let num1 = 20;
// let num2 = 4;
// let operator = addFunction(num1, num2);

function operateFunction(num1, num2) {
     let operator = addFunction(num1, num2);
}

function addFunction(num1, num2) {
    result = parseInt(num1) + parseInt(num2);
    console.log(result)
    displayScreen.querySelector("div").innerText = result;
    return result
}

function multiplyFunction(num1, num2) {
    result = parseInt(num1) * parseInt(num2);
    console.log(result)
    displayScreen.querySelector("div").innerText = result;
}

function subtractFunction(num1, num2) {
    result = parseInt(num1) - parseInt(num2);
    console.log(result)
    displayScreen.querySelector("div").innerText = result;
}

function divideFunction(num1, num2) {
    result = parseInt(num1) / parseInt(num2);
    console.log(result)
    displayScreen.querySelector("div").innerText = result;
}



let displayScreen = document.getElementById("display-screen");

let numPadButtons = document.querySelectorAll(".nm-btn");
let equalButton = document.querySelectorAll(".eq-btn");

function clearCalc() {
    firstNum = "";
    secondNum = "";
    operator = "";
    displayScreen.querySelector("div").innerText = 0;
}

let firstNum = "";
let secondNum = "";
let operator = "";

for(i of numPadButtons) {
    i.addEventListener('click', function(digit) {
    digit.stopPropagation() 
    if(operator === "" && secondNum === "") { 
    firstNum = firstNum + digit.target.innerText
    console.log(digit.target.innerText)
    displayScreen.querySelector("div").innerText = firstNum;  
    } else {
            secondNum = secondNum + digit.target.innerText
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
    if(secondNum !== "") {
        if(operator === "+") {
            addFunction(firstNum, secondNum)
        } 
    } 
})

let clearCalculator = document.querySelector("#clear")
clearCalculator.addEventListener('click', function(e) {
    e.stopPropagation()
    clearCalc()
})

// question is to start = operation is called when = is pressed after selecting 2nd number in the above loop



// function secondNumber (){
//     if(operator = + || - || * || /) 
// };

// function operate(firstNum, operator, secondNum) {

// }

// let numberArr = [];
// for(i of numPadButtons) {
//     i.addEventListener('click', function(digit) {
//     digit.stopPropagation()   
//     numberArr.push(parseInt(digit.target.innerText)) 
//     console.log(digit.target.innerText)
//     displayNumInput = digit.target.innerText;
//     displayScreen.querySelector("div").innerText = numberArr;
//     console.log(numberArr)
// });
// }

// let operatorSelect = document.querySelectorAll(".op-btn");
// for(o of operatorSelect) {
//     o.addEventListener('click', function(operator) {
//         operator.stopPropagation()  
//         numberArr.push(operator.target.innerText) 
//     })
// }






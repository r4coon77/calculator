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
}

function multiplyFunction(num1, num2) {
    result = parseInt(num1) * parseInt(num2);
    console.log(result)
}

function subtractFunction(num1, num2) {
    result = parseInt(num1) - parseInt(num2);
    console.log(result)
}

function divideFunction(num1, num2) {
    result = parseInt(num1) / parseInt(num2);
    console.log(result)
}



let displayScreen = document.getElementById("display-screen");

let numPadButtons = document.querySelectorAll(".nm-btn");
let equalButton = document.querySelectorAll(".eq-btn");

// for(i of numPadButtons) {
//     i.addEventListener('click', function(e) {
//     e.stopPropagation()    
//     console.log(e.target.innerText)
//     displayNumInput = e.target.innerText;
//     displayScreen.querySelector("div").innerText = displayNumInput;
// });
// }


let firstNum = "";
let secondNum = "";
let operator = "";


for(i of numPadButtons) {
    i.addEventListener('click', function(digit) {
    digit.stopPropagation()   
    firstNum = firstNum + digit.target.innerText
    console.log(digit.target.innerText)
    displayScreen.querySelector("div").innerText = firstNum;  
});
}

let operatorSelect = document.querySelectorAll(".op-btn");

for(o of operatorSelect) {
    o.addEventListener('click', function(opt) {
        opt.stopPropagation()  
        operator = opt.target.innerText
        displayScreen.querySelector("div").innerText = firstNum + " " + operator;
        if(firstNum !== "") {
            for(i of numPadButtons) {
                i.addEventListener('click', function(digit) {
                digit.stopPropagation()   
                secondNum = secondNum + digit.target.innerText
                console.log(digit.target.innerText)
                displayScreen.querySelector("div").innerText = firstNum + " " + operator + " " + secondNum; 
            });
            }
        }
    })
};

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






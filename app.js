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

let displayNumInput = 777;

let displayScreen = document.getElementById("display-screen");
displayScreen.querySelector("div").innerHTML = displayNumInput;







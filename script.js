//functions to do math operations
function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

function mult(a,b) {
    return a * b;
}

function div(a,b) {
    return a / b;
}

//takes operator and first and second number
function operate(operator, first, second) {
    //convert the string to numbers
    const firstNum = Number(first)
    const secondNum = Number(second)
    switch (operator) {
        case "+":
            return add(firstNum, secondNum)
        case "-":
            return sub(firstNum, secondNum)
        case "*":
            return mult(firstNum, secondNum)
        case "/":
            return div(firstNum, secondNum)
    }
}
//create the first input variable
let firstInput = "";
let secondInput = "";
let operator = "";

function write(input) {
    //takes an input and displays it
    //keeps display until an operator, clear, or equal is selected
    firstInput += input;
    changeDisplay(firstInput);
}

//clear first and second input
function clear() {
    firstInput = "";
    secondInput = "";
    operator = "";
    changeDisplay(firstInput)
}

function changeDisplay(num) {
    let display = document.querySelector('#display')
    display.textContent = num;
}



//adding event listeners to numbers
document.querySelector('#num0').addEventListener('click', function() {
    write("0");
});
document.querySelector('#num1').addEventListener('click', function() {
    write("1");
});
document.querySelector('#num2').addEventListener('click', function() {
    write("2");
});
document.querySelector('#num3').addEventListener('click', function() {
    write("3");
});
document.querySelector('#num4').addEventListener('click', function() {
    write("4");
});
document.querySelector('#num5').addEventListener('click', function() {
    write("5");
});
document.querySelector('#num6').addEventListener('click', function() {
    write("6");
});
document.querySelector('#num7').addEventListener('click', function() {
    write("7");
});
document.querySelector('#num8').addEventListener('click', function() {
    write("8");
});
document.querySelector('#num9').addEventListener('click', function() {
    write("9");
});

//clear button
document.querySelector('#clear').addEventListener('click', clear);

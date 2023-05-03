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

function operate(operator, first, second) {
    switch (operator) {
        case "+":
            return add(first, second)
        case "-":
            return sub(first, second)
        case "*":
            return mult(first, second)
        case "/":
            return div(first, second)
    }
}
//create the complete input variable
let completeInput = "";
function write(input) {
    //takes an input and displays it
    //keeps display until an operator, clear, or equal is selected
    completeInput += input;
    changeDisplay(completeInput);
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


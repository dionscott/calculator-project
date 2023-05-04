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
            let sum = add(firstNum, secondNum)
            return Math.round((sum + Number.EPSILON) * 100) / 100;
        case "-":
            let subtract = sub(firstNum, secondNum)
            return Math.round((subtract + Number.EPSILON) * 100) / 100;
        case "*":
            let multiply = mult(firstNum, secondNum)
            return Math.round((multiply + Number.EPSILON) * 100) / 100;
        case "/":
            let divide = div(firstNum, secondNum)
            return Math.round((divide + Number.EPSILON) * 100) / 100;
    }
}
//create the first input variable
let firstInput = "";
let secondInput = "";
let operator = "";

function write(input) {
    //takes an input and displays it
    //keeps display until an operator, clear, or equal is selected
    if (operator == "") {
        firstInput += input;
        changeDisplay(firstInput);
    } else {
        secondInput += input;
        changeDisplay(secondInput)
    }
}

function answer() {
    let input = ""
    input = operate(operator, firstInput, secondInput)
    changeDisplay(input);
    //change firstInput var to answer
    firstInput = input;
    //clear the second input
    secondInput = ""

    // clearAll()
}

//clears the operator before and change the operator
function changeOperator(input) {
    if (firstInput && secondInput) {
        //change the operator
        answer()
        clearOperator();
        operator += input;
    } else {
        clearOperator();
        operator += input;
    }   
}

//clears only the operator 
function clearOperator() {
    operator = "";
}

//clear first and second input
function clearAll() {
    firstInput = "";
    secondInput = "";
    operator = "";
    // changeDisplay(firstInput)
}

//checks if there is an input for both the first and second
function check() {
    if (firstInput && secondInput) {
        return true
    } 
    return false
}

function clear() {
    clearAll();
    changeDisplay(firstInput);
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

//change the operator
document.querySelector('#plus').addEventListener('click', function() {
    changeOperator("+");
});
document.querySelector('#minus').addEventListener('click', function() {
    changeOperator("-");
});
document.querySelector('#mult').addEventListener('click', function() {
    changeOperator("*");
});
document.querySelector('#divide').addEventListener('click', function() {
    changeOperator("/");
});

document.querySelector('#equal').addEventListener('click', answer);
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

function changeDisplay(num) {
    let display = document.querySelector('.display')
    display = num;
}
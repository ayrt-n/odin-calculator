// Basic Mathematical Operators:
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Operator function, takes in two operands and operator
function operate(a, b, operatorFunction) {
    return operatorFunction(a, b);
}

let operand1 = '';


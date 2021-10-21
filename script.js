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



// Initialize operand, operator, and result variables to be used later
let operand1 = '';
let operand2 = '';
let operator;
let result;

let isFirst = true; // Boolean variable to determine whether we are recording op1 or op2

const operandButtons = document.querySelectorAll('button.operand');
const display = document.querySelector('.display');

operandButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (isFirst === true) {
            if (operand1 === '0') { // Prevent user from inputting '000000002'
                operand1 = '' + button.textContent
            } else if (operand1.length < 8) { // Limit user to 8 digit number
                operand1 += button.textContent;
            }
            display.textContent = operand1;
        } else {
            if (operand2 === '0') { // Prevent user from inputting '000000002'
                operand2 = '' + button.textContent
            } else if (operand2.length < 8) { // Limit user to 8 digit number
                operand2 += button.textContent;
            }
            display.textContent = operand2;
        }
    });
});

const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
    operator.addEventListener('click', function(e) {
        operator = e.target.value
        if (operand1 === '') { // If operand1 is empty, assume equal to 0
            operand1 = '0';
        }
        isFirst = false;
    });
})







// Basic Mathematical Operators: Storing functions inside of an object to enable us
// to call the function with a string i.e., operatorFunction['add'](1,1) for user later on
operate = {
    'add' : (a, b) => {return a + b;},
    'subtract' : (a, b) => {return a - b;},
    'multiply' : (a, b) => {return a * b;},
    'divide' : (a, b) => {return a / b;}
}



// Initialize operand, operator, and result variables to be used later
let operand1 = '';
let operand2 = '';
let operator = '';
let result = 0;

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

const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', function(e) {
        operator = e.target.value
        if (operand1 === '') { // If operand1 is empty, assume equal to 0
            operand1 = '0';
        }
        isFirst = false;
    });
});

const equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', () => {
    if (operand2 === '') {
        return;
    } else if (operator === '') {
        return;
    } else { 
        operand1 = parseInt(operand1);
        operand2 = parseInt(operand2);
        result = operate[operator](operand1, operand2);
        display.textContent = result;
    }
    // Reset operand variables, if user wants to enter in new operation
    operand1 = '';
    operand2 = '';
    operator = '';
    isFirst = true;
});

const clearButton = document.querySelector('.clear');

function clear() { // Reset all variables
    operand1 = '';
    operand2 = '';
    isFirst = true;
    operator = '';
    result = '';
    display.textContent = 0;
}

clearButton.addEventListener('click', clear);







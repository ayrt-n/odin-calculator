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
        if (display.textContent === 'X_X') {
            clear() // If calculator broken, fix before moving on
        }

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



const decimalButton = document.querySelector('.decimal');

decimalButton.addEventListener('click', () => {
    if (display.textContent === 'X_X') {
        clear() // If calculator broken, fix before moving on
    }

    if (isFirst === true) {
        if (operand1.includes('.')) {
            return;
        } else {
            operand1 += '.';
        }
    } else {
        if (operand2.includes('.')) {
            return;
        } else {
            operand2 += '.';
        }
    }
});


const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', function(e) {
        if (display.textContent === 'X_X') {
            clear() // If calculator broken, fix before moving on
        }

    // First case to deal with user stringing together several operations
    // I.e., 12 + 7 - 5 * 3 =    
        if (isFirst === false && operand2 !== '') {
            // Divide by zero case
            if (operator === 'divide' && operand2 === '0') {
                explode()
            } else {             
            operand1 = parseFloat(operand1);
            operand2 = parseFloat(operand2);
            result = Math.round(operate[operator](operand1, operand2) * 100) / 100;
            display.textContent = result;

            operand1 = result;
            operand2 = '';
            operator = e.target.value
            }
            
        } else {      
            operator = e.target.value
        // If operand1 is empty set equal to display, this does two things;
        // 1. If from blank calculator, user hits operator it will set to zero
        // 2. If user wants to use results of a calc in new calc, will grab result on screen
            if (operand1 === '') {
                operand1 = display.textContent;
            }
            isFirst = false;
        }
    });
});



const equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', () => {
    if (display.textContent === 'X_X') {
        clear() // If calculator broken, fix before moving on
    }

    if (operator === '') {
        return; // If no operator provided, do nothing
    } else if (operand2 === '') {
        operator = ''; // If no second operand provided but operator was, reset operator
        return;
    } else if (operator === 'divide' && operand2 === '0') {
        explode();
    } else { 
        operand1 = parseFloat(operand1);
        operand2 = parseFloat(operand2);
        result = Math.round(operate[operator](operand1, operand2) * 100) / 100;
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



let explosion = document.createElement('img');
explosion.setAttribute('src', 'explosion.gif');
explosion.setAttribute('width', '330px');
explosion.setAttribute('height', '80px');

function explode() {
    display.textContent = ''; 
    display.appendChild(explosion);
    setTimeout(fixCalculator, 1260);
}

function fixCalculator() {
    display.textContent = '';
    clear();
    display.textContent = 'X_X';
}

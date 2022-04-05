const DEFAULT_VALUE = '0';

let firstOperand = '';
let secondOperand = '';
let firstOperator = '';
let secondOperator = '';
let displayValue = '';
let result = '';

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

function updateDisplay(displayValue){
  display.innerText = displayValue;
}

function buttonClick() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      
      if (buttons[i].classList.contains('operand')) {
        getOperand(buttons[i].value);
      }
      else if (buttons[i].classList.contains('reset')) {
        resetCalc();
      }
      else if (buttons[i].classList.contains('operator')) {
        getOperator(buttons[i].value);
      }
        
      else if (buttons[i].classList.contains('sign')) {
        console.log(buttons[i].value);
      }
      else if (buttons[i].classList.contains('percent')) {
        console.log(buttons[i].value);
      }
      else if (buttons[i].classList.contains('equals')) {
        console.log(buttons[i].value);
      }
    })
  }
}

function getOperand(operandValue) {
  if (firstOperator === '') {
    if (firstOperand === '') {
      firstOperand = operandValue;
    }
    else if (firstOperand !== '') {
      firstOperand += operandValue;
    }
    updateDisplay(firstOperand);
  }
    
  else if (firstOperator !== '') {
    if (secondOperand === '') {
      secondOperand = operandValue;
    }
    else if (secondOperand !== '') {
      secondOperand += operandValue;
    }
    updateDisplay(secondOperand);
  }
}

function getOperator(operatorValue) {
  if (firstOperand === '') {
    return;
  }
    // check another if condition to account for second number?
  else if (firstOperand !== '' && secondOperand === '') {
    firstOperator = operatorValue;
  }
  console.log(firstOperator);
  operate(firstOperand, secondOperand, firstOperator);
}

function resetCalc() {
  updateDisplay(DEFAULT_VALUE);
  firstOperand = '';
  secondOperand = '';
  firstOperator = '';
  secondOperator = '';
}

function operate(a, b, operator) {
  
  a = Number(a);
  b = Number(b);
  
  if (operator === '+') {
    result = a + b;
  }
  else if (operator === '-') {
    result = a - b;
  }
  else if (operator === '*') {
    result = a * b;
  }
  else if (operator === '/') {
    if (a === 0 && b === 0) {
      result = "0 / 0 = 0";
    }
    else result = a / b;
  }
  updateDisplay(result);
}

window.onload = () => {
  updateDisplay(DEFAULT_VALUE);
  buttonClick();
}
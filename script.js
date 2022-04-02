const DEFAULT_VALUE = '0';

let firstOperand = '';
let secondOperand = '';
let firstOperator = '';
let secondOperator = '';
let displayValue = '';

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

function updateDisplay(displayValue){
  display.innerText = displayValue;
}

function buttonClick() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      
      if (buttons[i].classList.contains('operand')) {
        getOperand(buttons[i].value);}
      
      else if (buttons[i].classList.contains('clear')) {
        clearDisplay();
      }
      
      else if (buttons[i].classList.contains('operator')) {
       // getOperator(buttons[i].value);
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
  if (firstOperand === '') {
    firstOperand += operandValue;
  }
  else if (firstOperand !== '') {
    firstOperand += operandValue;
  }
  updateDisplay(firstOperand);
}

/*
function getOperand(operandValue) {
    firstOperand += operandValue;
    updateDisplay(firstOperand);
}
*/

function clearDisplay() {
  updateDisplay(DEFAULT_VALUE);
  firstOperand = '';
  secondOperand = '';
}

function operate(a, b, operator) {
  
  a = Number(a);
  b = Number(b);
  
  if (operator === '+') {
      return a + b;
  }
  else if (operator === '-') {
    return a - b;
  }
  else if (operator === '*') {
    return a * b;
  }
  else if (operator === '/') {
    if (a === 0 && b === 0) {
      return "0 / 0 = 0";
    }
    else return a / b;
  }
}

window.onload = () => {
  updateDisplay(DEFAULT_VALUE);
  buttonClick();
}
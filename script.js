const DEFAULT_VALUE = '0';

let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let displayValue = '';
// const buttons = document.querySelector('button');
const buttons = document.querySelectorAll('.operand');
const display = document.querySelector('.display');

function updateDisplay(displayValue){
  display.innerText = displayValue;
}

function buttonClick() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => { if (buttons[i].classList.contains('operand')) {
      getOperand(buttons[i].value);}
  })
  }
}

function getOperand(operandValue) {
  displayValue += operandValue;
  updateDisplay(displayValue);
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
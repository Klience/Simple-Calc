/*
Operations:
  add
  subtract
  multiply
  divide

Functions:
  operate() -> perform 1 of 4 operations on numbers
  display() -> display the result of a calculation
*/

// initial operator has to be null before choice is made
// same for initial operand(s) that have to be zero

let initOperator = null;
let initOperand = null;
let displayValue = '0';
// const buttons = document.querySelector('button');
const buttons = document.querySelectorAll('.operand');
const display = document.querySelector('.display');

function updateDisplay(){
  display.innerText = displayValue;
}

updateDisplay();



function buttonClick() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => { if (buttons[i].classList.contains('operand')) {
      getOperand(buttons[i].value);
      updateDisplay();}
  })
  }
}

buttonClick();

function getOperand(operand) {
  if (initOperand !== null) {
    return 'init operand is not null';
  }
  else if (initOperand === null && operand !== null) {
    displayValue += operand;
  }
}


function operate(a, b, operator) {
  
  a = Number(a);
  b = Number(b);
  
  console.log(typeof(a));
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

console.log(operate(10, 2, '/'));

/* 
window.onload = () => {
  code to load clear calc on window load
}
*/
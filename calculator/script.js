const display = document.getElementById('display');
const keys = document.querySelectorAll('.key');

let currentInput = '';
let operator = null;
let firstOperand = null;
let resetScreen = false;

function calculate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch(op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b === 0 ? 'Error' : a / b;
    default: return b;
  }
}

function updateDisplay() {
  display.value = currentInput || '0';
}

keys.forEach(key => {
  key.addEventListener('click', () => {
    const action = key.dataset.action;
    const keyContent = key.textContent;

    if (!action) {
      // Number or decimal
      if (resetScreen) {
        currentInput = '';
        resetScreen = false;
      }
      if (keyContent === '.' && currentInput.includes('.')) return;
      currentInput += keyContent;
      updateDisplay();
    } else if (action === 'clear') {
      currentInput = '';
      firstOperand = null;
      operator = null;
      updateDisplay();
    } else if (action === 'delete') {
      currentInput = currentInput.slice(0, -1);
      updateDisplay();
    } else if (action === 'operator') {
      if (operator !== null) {
        currentInput = calculate(firstOperand, currentInput, operator).toString();
        updateDisplay();
      }
      firstOperand = currentInput;
      operator = keyContent;
      resetScreen = true;
    } else if (action === 'equals') {
      if (operator === null || resetScreen) return;
      currentInput = calculate(firstOperand, currentInput, operator).toString();
      updateDisplay();
      operator = null;
      firstOperand = null;
      resetScreen = true;
    }
  });
});
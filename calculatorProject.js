const calculatorContainer = document.getElementById('calculator');
const displayArea = document.getElementById('display')
let currentText = '';

calculatorContainer.addEventListener('click', (e) => {
   const clickedButton = e.target 
   // Run display function and store number, operators in a, b, operator
   const buttonText = clickedButton.textContent;
   if (clickedButton.classList.contains('num')) {
        currentText += buttonText;
        displayArea.textContent = currentText;
   }
});

function display(input) {
    
}

let result = 0, a = 0, b = 0;
let operator = '';

function add(firstNum, b) {
    return result = a + b;
}

function subtract(a, b) {
    return result = a - b;
}

function multiply(a, b) {
    return result = a * b;
}

function divide(a, b) {
    return result = a / b;
}

function operatorChooser(operator, a, b) {
    // Assign result to a again
    switch (operator) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
            break;
        default:
            result = null;
    }
    return result;
}

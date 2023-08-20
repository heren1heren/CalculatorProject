const calculatorContainer = document.getElementById('calculator');
const displayArea = document.getElementById('display')
let currentText = '';

calculatorContainer.addEventListener('click', (e) => {
    const clickedButton = e.target; 
    const buttonText = clickedButton.textContent;
    const currentText ='';
    if (clickA || a.length < 9) {
     a = clickA;
     display(currentText);

     if (clickedOperator || a.length == 9) { 
        operator = currentText;
        return a;
    };

   };
    operator = clickOperator;
     while(operator) {
      b = clickB;
      

      if(clickOperator|| b.length<9) {
        calculation();
        operator = '';
        b = 0;
        a = result;
        return display(result); 
      }
     
    }

});
   




  function displayOperator(e) {


  }

  function displayNum(e) {
         
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

function displayValue(operator, a, b) {
    
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

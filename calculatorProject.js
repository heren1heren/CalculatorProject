
let currentText = '';
let result = 0, a = 0, b = 0;
let operator = '';
const calculatorContainer = document.getElementById('calculator');
const displayArea = document.getElementById('display');
const delBtn = document.querySelector('.del');


  calculatorContainer.addEventListener('click', (e) => {
   
   console.log(a,b,operator);
      const clickedButton = e.target; 
      const buttonText = clickedButton.textContent;
    const clickDel = () => clickedButton.classList.contains('del') ? true : false;
    const clickEqualSign = () => clickedButton.classList.contains('equalSign') ? true : false;
    const clickNum = () =>  clickedButton.classList.contains('num') && currentText.length < 9 ? true : false;
    const clickOperator = () => clickedButton.classList.contains('operator') ? true : false;
    const clickDot = () => clickedButton.classList.contains('dot') ? true :false; 
          
    if (clickDel()) {
          delBtn.classList.add('num'); // it is undefined
        a = 0; b = 0; operator = '';
        currentText = '';
        return   displayArea.textContent = 0;

    }

     if (clickEqualSign() && b != 0 || clickOperator() && b != 0) {
        console.log(calculation(operator,a,b));
       displayArea.textContent = calculation(operator,a,b);
       a = calculation(operator,a,b);
       currentText = '';
       return b = 0;

     } else if (operator != '') {
        
        
       if (clickOperator()) { 
           operator = buttonText;
           console.log(operator);
           displayArea.textContent = buttonText;
       }

       if (clickNum()) {
        
        if (clickDot()) {
         
         currentText += buttonText;
         displayArea.textContent = currentText;
         clickedButton.classList.remove('num');

        } else {
             currentText += buttonText;
            displayArea.textContent = currentText;
            b = parseFloat(currentText);
            console.log(b)
            
        }

       }
     } else if (clickNum()) {
         
        if(clickDot()) {
           currentText += buttonText;
           displayArea.textContent = currentText;
            clickedButton.classList.remove('num');
            console.log(a);

        } else { 
        
        currentText += buttonText;
        displayArea.textContent = currentText;
        a = parseFloat(currentText);
        console.log(a);
        return a;
        
    }


     
          
    } else if  (clickOperator()) { 
        operator = buttonText;
        displayArea.textContent = buttonText;
        currentText = '';
        console.log(operator);
        return operator;
  }; 
    
    
    
   
});
    


 















function add(a, b) {
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

function calculation(operator, a, b) {
    
    switch (operator) {
        case '+':
           result = add(a, b);
            break;
        case '-':
          result =  subtract(a, b);
            break;
        case '*':
           result =  multiply(a, b);
            break;
        case '/':
           result =  divide(a, b);
            break;
        default:
            result = null;
    }
    
     return result;
   
}

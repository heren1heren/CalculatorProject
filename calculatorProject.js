let result = 0;
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
/* i will implement the logic to trigger operatorChooser later
 what happen when :
  press 2 numbs without operator =>
  press 2 operators continuously =>
  press alternatively 1 numb and 1 operator =>
  press ....
  press  'clear' button? => ???
  press  'backspace' button? => ???
*/
 
function operatorChooser(operator, a, b) // execute  when press '=' key on the calculator;
// or when press another operator , 

{   a = result; // assign result to a again  
     
    switch(operator) {
        case '+'  :   
            add(a,b);
        break;
        
        case '-' :   
            subtract(a, b);
        break;

        case '*' :   
            multiply(a,b);
        break;

        case '/' :   
            divide(a,b);
        break;
        default: return  result = null;
        
    }
     
    
} 

operator = '+';
a = 3;
b = 33;

operatorChooser(operator,a ,b);
console('result');



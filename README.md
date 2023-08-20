# CalculatorProject
*Step 1:  Create variables for Numbers after calculate.
 Add a pretty  webpage
1.1:
 let operator, addednum, substractedNum, multipliedNum, dividedNum
 /*done*/
1.2:
 Create 4 functions for calculate and 1 function to decide how to perform these functions based on the 'operator' variable and reset the 'result' variable as the next 'a'.
/*done*/

1.3: Creating a website
 *18 buttons
 * 1 main flexbox > *4 flexbox
/*somehow done*/



Step 2:
Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.




logical steps: 


calculatorContainer.addEventListener('click', (e) => {
    const clickedButton = e.target;
    const buttonText = clickedButton.textContent;
    while ( currentText.length < 9) {


     if (clickedButton.classList.contains('num')) {
      while (!a) { 
    if ( clickedButton.classList.contains('.')) {
         currentText += buttonText;   
         clickedButton.classList.remove('num')
         
         }
          currentText += buttonText;
          displayArea.textContent = currentText;
          a = displayArea.textContent;
      }


    } else if (clickedButton.classList.contains('operator')) {
        displayArea.textContent =currentText;
        operator = currentText;
        
    }
     
        
    }

})




clickA = if( clickedButton.classList.contains('num') && currentText.length < 9)





 step 2.2: allow user to click operator buttons.
 ** display the current operator( user can click multiple operator but only  apply the last operator)
 ** store the last operator as a operator to work with numbers
 
 step 2.3: allow user to click num and '.' buttons again
 ** Display num and '.' within 9 digits
 ** '.' appear only once time.
 ** Store currentText as 'b' variable ( if string)
 




Step 3: Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.

    You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
    This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.

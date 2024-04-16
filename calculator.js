function add(num1, num2){
    return num1 + num2;
 }
 
 function substract(num1, num2){
     return num1 - num2;
 }
 
 function multiply(num1, num2){
     return num1 * num2;
 }
 
 function divide(num1, num2){
     if(num2 === 0){
         return "Error: Division by zero,"
     } else {
     return num1 / num2;
     }
 }
 
 let firstNumber = "";
 let operator = "";
 let secondNumber = "";
 let displayValue = "";
 
 function operate(firstNumber, operator, secondNumber){
     switch(operator){
         case "+":
             return add(firstNumber, secondNumber);
         case "-":
             return substract(firstNumber, secondNumber);
         case "*":
             return multiply(firstNumber, secondNumber);
         case "/":
             return divide(firstNumber, secondNumber);
         default:
             return "Invalid operator";
     }
 
 }
 
 function updateDisplay(newValue) {    // Function to update display value
     display.textContent += newValue;
     displayValue += newValue;
 }
 
 function clearDisplay(){
     display.textContent = "";
     displayValue = "";
 }
 
 const display = document.querySelector(".displayText");
 
 const div = document.querySelector("#buttonDivide");
 div.addEventListener("click", ()=>{
     display.textContent = "/";
     displayValue = display.textContent;
 });
 
 const seven = document.querySelector("#button7");
 seven.addEventListener("click", ()=>{
     display.textContent = "7";
     displayValue = display.textContent;
 });
 
 const eight = document.querySelector("#button8");
 eight.addEventListener("click", ()=>{
     updateDisplay("8");
 });
 
 const nine = document.querySelector("#button9");
 nine.addEventListener("click", ()=>{
     display.textContent = "9";
     displayValue = display.textContent;
 });
 
 const mul = document.querySelector("#buttonMultiply");
 mul.addEventListener("click", ()=>{
     display.textContent = "*";
     displayValue = display.textContent;
 });
 
 const four = document.querySelector("#button4");
 four.addEventListener("click", ()=>{
     display.textContent = "4";
     displayValue = display.textContent;
 });
 
 const five = document.querySelector("#button5");
 five.addEventListener("click", ()=>{
     display.textContent = "5";
     displayValue = display.textContent;
 });
 
 const six = document.querySelector("#button6");
 six.addEventListener("click", ()=>{
     display.textContent = "6";
     displayValue = display.textContent;
 });
 
 const subs = document.querySelector("#buttonSubstract");
 subs.addEventListener("click", ()=>{
     display.textContent = "-";
     displayValue = display.textContent;
 });
 
 const one = document.querySelector("#button1");
 one.addEventListener("click", ()=>{
     display.textContent = "1";
     displayValue = display.textContent;
 });
 
 const two = document.querySelector("#button2");
 two.addEventListener("click", ()=>{
     display.textContent = "2";
     displayValue = display.textContent;
 });
 
 const three = document.querySelector("#button3");
 three.addEventListener("click", ()=>{
     display.textContent = "3";
     displayValue = display.textContent;
 });
 
 const plus = document.querySelector("#buttonAdd");
 plus.addEventListener("click", ()=>{
     display.textContent = "+";
     displayValue = display.textContent;
 });
 
 const zero = document.querySelector("#button0");
 zero.addEventListener("click", ()=>{
     display.textContent = "0";
     displayValue = display.textContent;
 });
 
 const dot = document.querySelector("#buttonDot");
 dot.addEventListener("click", ()=>{
     display.textContent = ".";
     displayValue = display.textContent;
 });
 
 // Event listener for the equals button
 const equalsBtn = document.querySelector("#buttonEquals");
 equalsBtn.addEventListener("click", calculate);
 
 // Event listener for the clear button (AC)
 const clearBtn = document.querySelector("#buttonAC");
 clearBtn.addEventListener("click", clearDisplay);
 
 
 
 
 
 
 
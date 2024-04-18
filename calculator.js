//  Basic Arithmetic functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "lmao";
    } else {
        return num1 / num2;
    }
}

// Global variables
let num1 = "";
let op = "";
let num2 = "";
let displayValue = "";

// Function to perform arithmetic operations
function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
}

// Function to update display value and display on the calculator
function updateDisplay(newValue) {
    if (newValue === "+" || newValue === "-" || newValue === "*" || newValue === "/") {
        display.textContent += " " + newValue + " ";
    } else {
        display.textContent += newValue;
    }
    displayValue += " " + newValue + " ";
}

// Function to clear display
function clearDisplay() {
    display.textContent = "";
    displayValue = "";
}

// Function to delete numbers
function deleteDisplay(){
    let currentDisplay = display.textContent.trim();  //removes the whitespace cause we have a space between the operator i.e 77 / 77.
    currentDisplay = currentDisplay.slice(0, -1);  // extract number starting from 0 and ending with last number which is exclusive. for eg - if we have 789 then we start from 0 position up until -1(last number) but is not inclusive. So we basically sliced 78 and stored this into the variable which we need later to display 
    display.textContent = currentDisplay;
    displayValue = currentDisplay;
}

// Function to perform calculation
function calculate() {
    const displayText = display.textContent.trim();

    // Extract numbers and operator using regular expression
    const matches = displayText.match(/(-?\d+(\.\d+)?)|(\+|\-|\*|\/)/g);

    if (matches.length === 3) { 
        const num1 = parseFloat(matches[0]);
        const op = matches[1];
        const num2 = parseFloat(matches[2]);

        if (!isNaN(num1) && !isNaN(num2) && (op === '+' || op === '-' || op === '*' || op === '/')) {
            // Perform calculation
            const result = operate(num1, op, num2);
            
            // Display the result
            display.textContent = result;
            displayValue = result.toString();
        } else {
            console.error("Invalid input");
        }
    } else {
        console.error("Invalid input");
    }
}

// DOM elements
const display = document.querySelector(".displayText");
const equalsBtn = document.querySelector("#Equals");
const clearBtn = document.querySelector("#AC");
const deleteBtn = document.querySelector("#Delete");
const numberButtons = document.querySelectorAll(".buttons button[id^='button']");

// Event listener for the equals button
equalsBtn.addEventListener("click", calculate);

// Event listener for the clear button (AC)
clearBtn.addEventListener("click", clearDisplay);

// Event listeners for delete button (Delete)
deleteBtn.addEventListener("click", deleteDisplay);

// Event listeners for number buttons
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        updateDisplay(button.textContent);
    });
});

// Get references to HTML elements using their IDs
const btnEl = document.getElementById("btn");       // Calculate button
const btn2El = document.getElementById("btn2");      // Reset button
const resultEl = document.getElementById("result");    // BMI result display
const commentInputEl = document.getElementById("comment"); // BMI comment display
const nameinput = document.getElementById("input");    // Name input field
const heightValue = document.getElementById("height");   // Height input field
const weightValue = document.getElementById("weight");   // Weight input field

// Define the calculate function (BMI calculation and comment display)
function calculate() {
    // Get the height and weight values from the input fields
    const height = parseFloat(heightValue.value);  // Get height value and convert to a floating-point number
    const weight = parseFloat(weightValue.value);  // Get weight value and convert to a floating-point number

    // Validate height and weight input
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        commentInputEl.innerText = "Please enter valid height and weight values.";
        resultEl.value = ""; //Clear previous result if input is invalid.
        return; // Exit the function if input is invalid
    }

    // BMI Calculation (using imperial units and constant 703)
    const bmivalue = 703 * (weight / (height * height)); // Calculate BMI.  Corrects potentiation
    // Round the BMI value to 2 decimal places for better presentation.
    const roundedBmi = bmivalue.toFixed(2);

    // Display the calculated BMI in the result field
    resultEl.value = roundedBmi;  // Set the value of the result element to the calculated BMI

    // Display appropriate comment based on BMI value and name.
    const name = nameinput.value; // Get the name from the input field.

    if (bmivalue >= 1 && bmivalue <= 18.4) {
        commentInputEl.innerText = `${name} you're underweight`;
    } else if (bmivalue >= 18.5 && bmivalue <= 24.9) {
        commentInputEl.innerText = `${name} you have a normal weight`;
    } else if (bmivalue >= 25 && bmivalue <= 29.9) {
        commentInputEl.innerText = `${name} you're overweight`;
    } else if (bmivalue >= 30) {
        commentInputEl.innerText = `${name} you're obese`;
    } else if (bmivalue <= 0.999) {
        commentInputEl.innerText = `${name} your input is wrong`;
    }
}


// Add an event listener to the Calculate button
btnEl.addEventListener("click", calculate);  // Attach the calculate function to the click event of the button.

// Add an event listener to the Reset button
btn2El.addEventListener('click', () => {
    heightValue.value = '';          // Clear height input field
    weightValue.value = '';          // Clear weight input field
    nameinput.value = '';            // Clear name input field
    resultEl.value = '';           // Clear BMI result display
    commentInputEl.innerText = '';   // Clear BMI comment display
});

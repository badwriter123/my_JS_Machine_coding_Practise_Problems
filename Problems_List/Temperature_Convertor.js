// A simple program that calculates the temperature from Celsius to fahrenheit to Kelvin
// Import the built-in "readline" module to read input from the terminal.
const { stdout } = require('process');
const readline = require('readline');

// Create an interface to take input from the keyboard and output to the terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Print a welcome message to the user.
console.log("Welcome to Temperature convertor...");

// Ask the user for the Celsius Temperature
// The entered value is received as a string in 'celsiusScale'
rl.question("Enter Desired Temperature in Celsius scale : ", (celsiusScale) => {

    // Convert the celsius temperature from string to number
    celsiusScale = Number(celsiusScale);

    // Calculate Fahrenheit Temp
    const fahrenheitScale = (celsiusScale * (9/5)) + 32;

    // Calculate Kelvin Temp
    const kelvinScale = (celsiusScale + 273.15);

    // Display the results to the user.
    console.log(`Celsius : ${celsiusScale}`);
    console.log(`Fahrenheit : ${fahrenheitScale}`);
    console.log(`Kelvin : ${kelvinScale}`);

    // Close the readline interface to end the program
    rl.close();
});
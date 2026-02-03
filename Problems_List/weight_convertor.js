// A simple program that converts weight from Pound scale to KG Scale.

// Import the builtin "Readline" module to read input from the user terminal.
const readline = require('readline');

// Create an interface to take input from the keyboard and output to the terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Print a welcome message to the user.
console.log("Welcome to Weight calculator...");

// Ask the user for the weight in Pounds.
// The entered value is received as a string in 'pound_weight'.
rl.question("Enter your weight in pounds...", (pound_weight) => {

    // convert pound_weight from string to Number.
    pound_weight = Number(pound_weight);

    // Calculate The KG Value.
    let kg_weight = pound_weight * 0.45359237;

    // Round off the KG Value for better readability, eliminating large decimals/
    kg_weight = Math.round(kg_weight);

    // Output the value to the user in KG.
    console.log("Your weight in KG is :", kg_weight);

    // Close the readline interface to end the program
    rl.close();
})
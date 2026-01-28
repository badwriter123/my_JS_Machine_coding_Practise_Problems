// A simple program that calculates the tip and total bill amount based on user input.

// Import the built-in "readline" module to read input from the terminal.
const readline = require("readline");

// Create an interface to take input from the keyboard and output to the terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Print a welcome message to the user.
console.log("Welcome to Tip Calculator...");

// Ask the user for the bill amount
// The entered value is received as a string in 'bill_amount'
rl.question("Enter your Bill amount...", (bill_amount) => {

    // Ask the user for the tip percentage
    // The entered value is received as a string in 'tip_percentage'
    rl.question("Enter Tip Percentage...", (tip_percentage) => {

        // Convert the bill amount from string to number
        bill_amount = Number(bill_amount);
        // Convert the tip percentage from string to number
        tip_percentage = Number(tip_percentage);

        // Calculate the tip amount
        const tip = (bill_amount * tip_percentage) / 100;

        // Calculate the total bill amount including tip
        const total = bill_amount + tip;

        // Display the calculated tip
        console.log(`Tip: ₹${tip}`);
        // Display the total amount to be paid
        console.log(`Total Amount: ₹${total}`);
    
        // Close the readline interface to end the program
        rl.close();


    });
});
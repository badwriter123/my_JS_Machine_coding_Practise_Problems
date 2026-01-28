// A simple program that calculates the tip and total bill amount based on user input.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to Tip Calculator...");

rl.question("Enter your Bill amount...", (bill_amount) => {
    rl.question("Enter Tip Percentage...", (tip_percentage) => {

        bill_amount = Number(bill_amount);
        tip_percentage = Number(tip_percentage);

        const tip = (bill_amount * tip_percentage) / 100;

        const total = bill_amount + tip;

        console.log(`Tip: ₹${tip}`);
        console.log(`Total Amount: ₹${total}`);
    
        rl.close();


    });
});
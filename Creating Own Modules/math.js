// Create your own module and export it.
// Using it in app.js
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const div = (a,b) => {
    if(b === 0){
        throw new Error("Cannot divide by zero !!! ");
    }
    return a / b;
};

module.exports = {
    add,
    subtract,
    multiply,
    div
};

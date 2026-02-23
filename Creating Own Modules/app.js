const math = require('./math');

console.log("10 + 5", math.add(10 , 5));
console.log("10 - 5", math.subtract(10 , 5));
console.log("10 * 5", math.multiply(10 , 5));
console.log("10 / 5", math.div(10 , 5));
console.log("10 / 0", math.div(10, 0));
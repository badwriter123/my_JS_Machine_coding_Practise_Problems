// Info related to your machine / server
// Useful for system / server monitoring during production...
const os = require('os');

console.log("Current OS Info");
console.log("------------------");
console.log("Platform: " ,os.platform());
console.log("Architecture: ", os.arch());
console.log("CPU Cores: ", os.cpus().length);
console.log("Total Memory: ", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB");
console.log("free Memory: ", (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB");
console.log("Home Directory: ", os.homedir());
console.log("Host Name: ", os.hostname());
console.log("Uptime: ", (os.uptime() / 3600).toFixed(2) + " Hours.");

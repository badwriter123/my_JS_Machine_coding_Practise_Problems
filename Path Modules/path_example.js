const path = require('path');

// Current file path
console.log('Current File: ', __filename);
console.log('Current Directory: ', __dirname);

// Join Paths (Works across OS)
const filePath = path.join(__dirname, 'data', 'users', 'profile.json');
console.log('Joined Path: ', filePath);

// Get file Extension
console.log('Extension name: ', path.extname('profile.json'));

// Get Filename
console.log("File name: ", path.basename('profile.json'));

// Get Directory name
console.log("Directory name: ", path.dirname('profile.json'));

// Parse Path into Object
console.log("Parsed Path: ", path.parse(filePath));
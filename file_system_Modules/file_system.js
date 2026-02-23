// Built in modules file systems -> Creation, Read, Write , Append and Delete file Functionalities.

const fs = require('fs');

fs.writeFileSync('notes.txt', 'Hello world, Im notes.txt. This is my first file created');
console.log("File created...");

const data1 = fs.readFileSync('notes.txt', 'utf-8');

console.log("File contents before append: ", data1);

fs.appendFileSync('notes.txt', '\n This is the new Line');
console.log("File appended...");

const data2 = fs.readFileSync('notes.txt', 'utf-8');
console.log("File content after appended: ", data2);

if(fs.existsSync('notes.txt')){
    console.log("File exixts...");
}

fs.unlinkSync('notes.txt');
console.log('file deleted...');
console.log("Program ended...");
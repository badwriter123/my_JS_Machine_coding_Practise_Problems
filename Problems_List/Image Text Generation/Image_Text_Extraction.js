const Tesseract = require('tesseract.js');

Tesseract.recognize(
    './image.png',
    'eng'
)
.then(({ data : {text}})=> {
    console.log("Extracted text : ", text);
})
.catch(err => {
    console.log("Error extracting text...");
})
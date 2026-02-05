// Import the Tesseract module. Used mainly for OCR (Optical Character Recognition)
const Tesseract = require('tesseract.js');

// Call the .recognize method to extract image content pixel by pixel
Tesseract.recognize(
    './image.png',
    'eng'
)

// After extraction print the extracted text.
.then(({ data : {text}})=> {
    console.log("Extracted text : ", text);
})

// If no text, print the error message.
.catch(err => {
    console.log("Error extracting text...");
})
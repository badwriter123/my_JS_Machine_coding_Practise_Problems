// Import the Express library (a Node.js web framework)
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port number where the server will run
const port = 3000;

// Define a GET route for the root URL "/"
app.get('/', (req, res) => {
    // Send a response back to the client (browser)
    res.send("Hello JJ");
});

// Start the server and make it listen on the given port
app.listen(port, () => {
    // Log a message once the server starts successfully
    console.log("Example app listening on port 3000.");
});
const express = require('express');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

let users = []; // Temporary Inmemory storage
let currentId = 1;

app.post('/api/users', (req, res) => {
    const { name, email } = req.body;

    if(!name || !email){
        return res.status(400).json({
            error: "Name and Email are required"
        });
    }

    const newUser = {
        id: currentId++,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
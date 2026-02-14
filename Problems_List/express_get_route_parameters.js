const express = require('express');
const app = express();
const port = 3000;

const users = [
    { id: 1, name:"Alice", email:"alice@123.com"},
    { id: 2, name:"Rohan", email:"rohanam2000@gmail.com"},
    { id: 3, name:"KSI", email:"sdmn@gmail.com"}
];

app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);

    if(!user){
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
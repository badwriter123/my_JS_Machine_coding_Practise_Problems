const express = require("express");
const app = express();
const port = 3000;

app.get("/api/users", (req, res) => {
    const users = [{
        id: 1,
        name: "John Doe",
        email: "example@johndoe.com"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "example@janesmith.com"
    }];
    res.status(200).json(users);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if(url == "/" || url === "/home"){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end('<h1>Welcome to homepage</h1><p>Namaste</p>');
    } else if (url === '/about'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end('<h1>About us : </h1><p>We are learning Node.js</p>');
    } else if (url === '/api/users'){
        res.writeHead(200, {'Content-type' : 'application.json'});
        const users = [
            { id: 1, name: "Amith", email: "amith@rediff.com"},
            { id: 2, name: "Arjay", email: "arjay@hotmail.com"},
            { id: 3, name: "Rohan", email: "rohan@gmail.com"}
        ];
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(404, {'Content-type': 'text/html'});
        res.end('<h1>404-Error page not found </h1>');
    }
})

server.listen(3000, () => {
    console.log('Server running @ port 3000 on http://localhost:3000')
})
const http = require('http');

const app = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome, this is the homepage!');
    }
    console.log(req.method,"bjdbjababdjdajbajd");


    if (req.method === "POST" && req.url === '/login') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('user login successfully..');
    }

});
const port = 3000;


app.listen(port, () => {
    console.log(`server run on http://locahost:${port}`);
})

 
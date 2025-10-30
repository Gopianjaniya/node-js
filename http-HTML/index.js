const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})  //content type HTML 
    res.write(`
        <html>
        <head><tiltle>My Server</tiltle></head>
        <body>
           <h1>Hello from Node.js Server</h1>
        <p>This is HTML response.</p>
        </body>
        </html>`);
res.end();
    })

const port =3000
    server.listen(port, () =>
      console.log(`Server running at http://localhost:${port}`)
    );
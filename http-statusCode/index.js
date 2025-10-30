const http =require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})  //Header
    res.write("Welcome to Node.js HTTP module!");
    res.end();
})

const port =3000
server.listen(port, () => console.log(`Server running on port ${port}`));
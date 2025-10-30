const http=require('http');

const server = http.createServer((req,res)=>{ 
    res.write("Hello from Node.js Server!");
    res.end();
})

// Start server on port 3000
const port = 3000;
server.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})
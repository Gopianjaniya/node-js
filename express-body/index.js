import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).json({message:"success full run express" ,success:true})
})

app.post("/login",(req,res)=>{
    const {email , password} = req.body;
    res.status(200).json({message:"user login", success:true})
})
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
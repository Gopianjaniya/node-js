import express from "express";
const app = express();
const port = 3000;

app.use(express())

app.get("/", (req, res) => {
  res.status(200).json({ message: "success fill", success: true });
});


app.post("/search" ,(req,res)=>{
    const{name} = req.query;
    res.status(200).json({message :"Query data"})

})


app.listen(port,()=>{
    console.log(`http://localhost:${port}`); 
})
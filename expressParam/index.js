import express from "express"

const app = express()
const port =3000;


app.use(express.json()) //middleware

app.get("/",(req,res)=>{
    res.status(200).json({message:"Success full",success:true})
})

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: "param data", success: true });
});

app.listen(port,()=>{
      console.log(`Server running at http://localhost:${port}`);
})
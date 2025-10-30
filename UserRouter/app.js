const express = require("express")
const dotenv = require('dotenv')
const cors = require('cors')
const  cookieParser = require('cookie-parser');
const { userRoute } = require("./Routers/user.router");

dotenv.config();

const app = express()

//middleweres
app.use(express.json({extended : true})) 
app.use(cors())
app.use(cookieParser())

app.use("/", userRoute)

const port = process.env.PORT;

app.listen(port,()=>{
     console.log(`[Server] Server running on ${8000} port...`);
    
})
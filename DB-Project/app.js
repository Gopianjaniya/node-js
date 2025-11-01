import  express  from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import connectDB from "./src/Config/db.config.js";
 

dotenv.config();

const app = express();
app.use(express.json({extended:true}))
app.use(cors())
app.use(cookieParser())
const port = process.env.PORT;
app.use('/',(err,req,res,next)=>{
res.send("Welcome")
})

const startServer = ()=>{
    connectDB();
    app.listen(port,()=>{
        console.log("Server running.....", port);
        
    })
}
startServer();
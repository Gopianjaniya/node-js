const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');

const { bookRouter } = require('./routers/books.route');

dotenv.config();
const app = express();

app.use(cors())
app.use(cookieParser())  
app.use(express.json({extended:true}))

app.use('/v1/api/books',bookRouter)

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${8000}`);
})
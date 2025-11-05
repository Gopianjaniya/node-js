const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const { connectDB } = require("./src/config/db.connect");
const { userRoute } = require("./src/route/router");

dotenv.config();
const port = process.env.PORT || 7000;

const app = express();

// = =================== Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json({ extended: true }));

// = =================== routing..
app.use("/", userRoute);

// = =================== start server
const startServer = async () => {
   try {
     await connectDB();
     app.listen(port, () => {
       console.log(`[SERVER] started on port ${port}.....`);
     });
   } catch (err) {
     console.log("Server start failed:", err.message);
   }
};

startServer(); // start server

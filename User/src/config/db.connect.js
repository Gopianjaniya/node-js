const mongoose = require("mongoose");

const url = process.env.URL;
const name = process.env.NAME;

const connectDB = async () => {
 try {
    
     console.log("[SERVER] is connecting.........");
     console.log("URL from env:", process.env.URL);
     console.log("DB Name from env:", process.env.NAME);

     const con = await mongoose.connect(`mongodb://localhost:27017/User`);
     console.log("[SERVER] name and host : ",con.connection.name ," And" ,con.connection.host);  
     console.log("[SERVER] is connected.........");
 } catch (error) {
    console.log("[DATABASE] is failed to connect........",error.mes);
    
 }
};
module.exports = {connectDB} // export for run 
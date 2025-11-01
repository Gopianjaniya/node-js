import mongoose from 'mongoose'


const connectDB = async()=>{
    try {
        const con = await mongoose.connect("mongodb://localhost:27017/DB-project")
        console.log("[HOSTNAME]", con.connection.host);
        console.log("[NAME]", con.connection.name);
        console.log("[DATABASE] Mongodb connected....");
        
    } catch (error) {
        console.log("[DATABASE] MongoDB connectes failed..");
        
    }
}
export default connectDB;
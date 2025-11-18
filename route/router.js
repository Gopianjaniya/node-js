const express = require("express");
const { register, login, deleteUser, updateUser, verifyOtp, resentOtp } = require("../controller/controller");
const { verifyToken } = require("../middlewares/token");
 

const userRoute = express.Router();

userRoute.post("/register", register);
userRoute.get("/login", login);
userRoute.delete("/delete",deleteUser)
userRoute.put("/update",verifyToken,updateUser)
userRoute.post("/verify-otp", verifyOtp);
userRoute.post("/resent-otp/email", resentOtp);
 
module.exports = { userRoute };

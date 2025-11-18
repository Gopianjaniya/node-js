const { default: mongoose } = require("mongoose")

const otpSchema = new mongoose.Schema({
  otp:"String",
  userId:{
    type:mongoose.Schema.Types.ObjectId,  //as use forein key
    ref:"user",
    require:true
  },
  createAt:{
    type:Date,
    default:Date.now(),
    expires:"59s"
  }
},{timestamps:true})

const otpModel = mongoose.model("otp",otpSchema)

module.exports = otpModel
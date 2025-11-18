const mongoose = require("mongoose");

const coupen = new mongoose.Schema({
  code:{
    type: Number,
    require: true,
    unique: true,
  },
  allPurchase: {
    type: Number,
    default: 0,
  },
  maxDiscount: {
    type: Number,
    default: null,
  } ,
  discountValue: {
    type: Number,
    require:true,
  },
  startDate: {
    type: Date,
    require: true,
  },
  expireDate: {
    type: Date,
    require: true,
  },
  isActice: {
    type:Boolean,
    require: true,
  },useLimit:{
    type:Number,
    default:1
  }
},{timestamps:true});

const coupenModel = mongoose.model("coupen",coupen)
module.exports = {
    coupenModel
}
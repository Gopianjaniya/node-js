const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    cartId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cart",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    total:{
        type:Number,
        require:true
    }
  },
  { timestamps: true }
);

exports.orderModel = mongoose.model("order",orderSchema)
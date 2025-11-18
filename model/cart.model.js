const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"userSchema"
    },
    item: [
      {
        bookId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "book1",
        },
        qty: {
          type: Number,
          min: 1,
          default: 1,
        },
        total: Number,
      },
    ],
    total: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

exports.cartModel = mongoose.model("cart", cartSchema);

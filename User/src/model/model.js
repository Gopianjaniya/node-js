const mongoose = require("mongoose");

const schema = new mongoose.Schema(  //used new keyword
  {
    username: String,
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("userSchema", schema); //craete schema name(user's)
module.exports = model ;

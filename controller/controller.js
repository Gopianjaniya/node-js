const {
  bcryptPassword,
  comparePassword,
  generatOtp,
} = require("../util/helper");
const model = require("../model/model");
const { generateToken } = require("../middlewares/token");
const { wellcomeMessage } = require("../util/nodemailer");
const otpModel = require("../model/otp.model");
// ================== Register
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        errorMsg: "Bad request",
        message: "All fields are required",
      });
    }

    // for existing user exist or not
    const isExistUser = await model.findOne({ email: email });

    if (isExistUser) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        errorMsg: "Config..",
        message: "Email all-ready Exist....",
      });
    }

    //for create new user
    const newUser = {
      username,
      email,
      password: bcryptPassword(password),
      status: true,
    };
    const user = await model.create(newUser);

    const userWithOutPassword = user.toObject();
    delete userWithOutPassword.password; // password delete

    const otp = generatOtp();
    await wellcomeMessage(email, username, otp);

    // const newOtp = {otp:otp.toString(),userId:user.id}
    const isOtp = await otpModel.create({
      //create otp model(ODM) on otpModel
      otp: otp.toString(),
      userId: user.id,
    });
    if (isOtp) {
      return res.status(201).json({
        success: true,
        statusCode: 201,
        message: `User successfully registered & OTP sent to your email: ${email}!`,
        data: userWithOutPassword,
      });
    }
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: `User registration successful but OTP save failed.`,
    });
  } catch (error) {
    console.error("register error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// ================== Login ================================

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    if (!email || !password) {
      return res.status(400).json({
        success: true,
        statusCode: 400,
        errorMsg: "not found",
        message: "Email and Password required..",
      });
    }

    const user = await model.findOne({ email: email });
    console.log(user);

    if (user) {
      const userWithOutPassword = user.toObject();
      delete userWithOutPassword.password;
      const token = generateToken(email);
      const isPasswordTrue = comparePassword(password, user.password);

      user.isVerify = true;
      if (user.isVerify) {
        if (isPasswordTrue) {
          return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "successfully login......",
            data: userWithOutPassword,
            access: token,
          });
        } else {
          return res.status(400).json({
            success: false,
            statusCode: 400,
            message: "Invalid password......",
          });
        }
      }
    } else {
      res.status(409).json({
        success: false,
        statusCode: 409,
        message: "Please verify your email..",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// ================== Delete ========================================
const deleteUser = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ success: false, statusCode: 400, errorMsg: "require email.." });
    }
    await model.deleteOne({ email });
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Delete successfully...",
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, statusCode: 400, errorMsg: "Bad Request.." });
  }
};

// ==================== Update
const updateUser = async (req, res) => {
  try {
    const { email, username } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ success: false, statusCode: 400, errorMsg: "require email.." });
    }
    await model.findOneAndUpdate({ email }, { $set: { username: username } });
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Updated successfully....",
    });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, statusCode: 400, errorMsg: "Bad request" });
  }
};
// ======================================== verifyOtp ==================
const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        errorMsg: "Bad Request",
        message: "Please provide email and otp",
      });
    }

    if (otp.toString().length !== 4) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        errorMsg: "Bad Request",
        message: "otp must be 4 digit",
      });
    }

    const user = await model.findOne({ email: email });
    const dbOtp = await otpModel.findOne({ userId: user._id });

    if (otp.toString() === dbOtp.otp) {
      const check = await model.findOneAndUpdate(
        { email: user.email },
        { $set: { isVerify: true } },
        { new: true }
      );
      console.log("check", check);
      return res.status(201).json({
        success: true,
        statusCode: 201,
        message: "OTP verify successfully.",
      });
    }

    return res
      .status(400)
      .json({ success: false, statusCode: 400, message: "Invalid OTP." });
  } catch (error) {
    console.error("[ERROR]", error);
  }
};
// ======================================== resentOtp  =====================

const resentOtp = async (req, res) => {
  try {
    /* 
        1. first get the email get user via email .
        2. generate otp save into db with user id into otp model.
        3. sent the otp to email         
        */
    const { email } = req.body;
    console.log("email ...", email);
    const user = await model.findOne({ email });
    console.log("user.....................", user);

    if (!user) {
      return res
        .status(400)
        .json({ success: false, statusCode: 400, message: "not found......" });
    }
//  generate new otp ========
    const otpResent = generatOtp();
    console.log("new otp........", otpResent.toString());

    wellcomeMessage(user.email, user.username, otpResent.toString());

// resend otp ke liye new model
    const otpData = new otpModel({
      otp: otpResent.toString(),
      userId: user._id,
    });
    await otpData.save();

    console.log("save otp ========", otpData);
     

    return res.status(200).json({ message: "New OTP.." });
  } catch (error) {
    res.status(500).json({ message: "Server Error...." });
  }
};

module.exports = {
  register,
  login,
  deleteUser,
  updateUser,
  resentOtp,
  verifyOtp,
};

const { bcryptPassword, comparePassword } = require("../util/helper");
const model = require("../model/model");
const { generateToken } = require("../middlewares/token");
const { wellcomeMessage } = require("../util/nodemailer");
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

    await wellcomeMessage(email, username);

    const token = generateToken(email);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Successfully Create New-user....",
      data: userWithOutPassword,
      access: token,
    });
  } catch (error) {
    console.error("register error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// ================== Login

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: true,
        statusCode: 400,
        errorMsg: "not found",
        message: "Email and Password required..",
      });
    }

    const user = await model.findOne({ email: email });

    if (user) {
      const userWithOutPassword = user.toObject();
      delete userWithOutPassword.password;
      const token = generateToken(email);
      const isPasswordTrue = comparePassword(password, user.password);

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
          message: "failed login......",
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: "not exist email and password......",
      });
    }
  } catch (error) {}
};

// ================== Delete
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

module.exports = { register, login, deleteUser, updateUser };

const { sign, verify } = require("jsonwebtoken");

// ================================= for generated token
const generateToken = (payload) => {
  try {
    console.log("token Generating...");
    console.log("payload", payload);
    const token = sign({ data: payload }, "kdsyfikerjbgwkjedfg", {
      expiresIn: "1m",
    }); //for create token
    console.log("Generated token..", token);
    return token;
  } catch (error) {
    console.log("Failed to generate token ....", error.message);
  }
};

// ================================= for verify token

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];

    if (token === undefined) {
      return res
        .status(400)
        .json({ errorMsg: "Bad Request token must be send..." });
    }
   
    verify(token, "kdsyfikerjbgwkjedfg");
    next();
  } catch (error) {
    return res.status(403).json({ errMessage: "Unauthorized" });
  }
};
module.exports = { generateToken, verifyToken };

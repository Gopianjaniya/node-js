const register = (req, res) => {
  try {
    return res.status(200).json({success:true,message:"succes register",statusCode:200})
  } catch (error) {
    return res.status(500).json({ errorMessage: "Internal Server Error" });
  }
};

const getUser = (req, res) => {
  try {
    return res
      .status(200)
      .json({ success: true, message: "success full user", statusCode: 200 });
  } catch (error) {
    return res.status(500).json({ errorMessage: "Internal Server Error" });
  }
};

module.exports = { register, getUser };

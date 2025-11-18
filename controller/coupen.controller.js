const { coupenModel } = require("../model/coupen.model");
const { generateCoupenCode } = require("../util/generateCoupenCode");

const insertCoupen = async (req, res) => {
  const { allPurchase, startDate, expireDate } = req.body;
  if ((!allPurchase ||!startDate ||!expireDate)) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: "please require valiues.....",
    });
  }
  const code = generateCoupenCode();
  console.log(code);

  const coupen = await coupenModel.create({
    allPurchase,
    startDate,
    expireDate,
    code,  
  });
console.log(coupen);
  if (coupen) {
    return res.status(200)
    .json({
      success: true,
      statusCode: true,
      message: "insert coupen successfully.......",
      });
  }
  
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: "please require valiues.....",
    });
};

module.exports = { insertCoupen };

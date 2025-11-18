const bookValidations = (req, res, next) => {
  const { title, publisher, publishingDate, author, description, price  } =    req.body;
 
 try {
  
   if (
     !title ||
     !publisher ||
     !publishingDate ||
     !author ||
     !description ||
     !price 
   )
     return res.status(400).json({
       success: false,
       statusCode: 400,
       message: "Bad Request",
       errMessage: "Invalid input",
     });

   return next();
 } catch (error) {
  console.log(error);
  return res.status(400).json({success:false,statusCode:400,message:"not found...."})
 }
};

module.exports = { bookValidations };

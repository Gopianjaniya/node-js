const bcrypt = require("bcrypt");
const saltRound = 10;

// password bcrypt
const bcryptPassword = (password) => {
  
  const hashpassword = bcrypt.hashSync(password, saltRound);
  return hashpassword;
};

// password and bcryptpass compare
const comparePassword = (password,hashpassword) => {
  return bcrypt.compare(password, hashpassword);
};
module.exports = { bcryptPassword, comparePassword };

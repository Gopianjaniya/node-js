const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "../uploads")),

  filename: (req, file, cb) => {
    // ===== for unique url
    const uniqueUrl = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueUrl + path.extname(file.originalname)
    );
    // console.log("file.fieldname", file.fieldname);
    // console.log("uniqueUrl", uniqueUrl);
    // console.log("file.originalname", file.originalname);
    // console.log("path.......", path.extname(file.originalname));
  },
});

const upload = multer({ storage });
module.exports = {
  upload,
};

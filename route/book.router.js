const express = require("express");
const {
  insertBook,
  getBookById,
  getBooks,
  deleteBookById,
  updateBookById,
} = require("../controller/book.controller");
const { bookValidations } = require("../util/validation");
 
const { upload } = require("../util/multer");

const bookRoutes = express.Router(); // ====================create router

bookRoutes.post("/insert-book",upload.single("bookImage"),bookValidations,insertBook);
bookRoutes.get("/:id", getBookById);
bookRoutes.get("/", getBooks);
bookRoutes.delete("/id",deleteBookById)
bookRoutes.put("/update/:id", upload.single("bookImage"), updateBookById);


module.exports = { bookRoutes };

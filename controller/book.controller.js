const { BookModel } = require("../model/book.model");

// =============================== insert book
const insertBook = async (req, res) => {
  try {
    const {
      title,
      publisher,
      publishingDate,
      author,
      description,
      price,
      stock,
    } = req.body;

    const imageUrl = "http://localhost:8000/uploads/" + req?.file?.filename;
    console.log(imageUrl);

    const book = await BookModel.create({
      title,
      publisher,
      publishingDate,
      author,
      description,
      price,
      stock,
      imageUrl,
    });

    if (book)
      return res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Book Inserted Successfully",
        data: book,
      });

    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Failed to insert book",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

// =============================== Update book

const updateBookById = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Book Id is missing in params!",
      });
    }
    const imageUrl = "http://localhost:7000/uploads/" + req?.file?.filename;

    const objectData = { ...data, imageUrl };
    const updateBook = await BookModel.findByIdAndUpdate(
      id,
      { $set: objectData },
      { new: true }
    );

    if (updateBook) {
      return res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Updated successfully.......",
        data: updateBook,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// =============================== get all book

const getBooks = async (req, res) => {
  try {
    const books = await BookModel.find({});
    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Books fetched successfully.",
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

// =============================== getById book

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: "Bad Request",
        errMessage: "Invalid input",
      });
    }
    console.log("book id....", id);
    const book = await BookModel.findOne({ _id: id });
    console.log("book id....", book.id);

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Book fetched successfully.",
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Internal Server Error",
    });
  }
};

// =============================== deleteById book

const deleteBookById = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      res
        .status(400)
        .json({ success: false, statusCode: 400, message: "invalid id..." });
    }
    
    const book = await BookModel.findByIdAndDelete({ _id: id }, { new: true });
    console.log("book....", book);

    if (book == null) {
      res
        .status(400)
        .json({
          success: false,
          statusCode: 400,
          message: "not found book...",
        });
    }

    if (book) {
      return res.status(200).json({
        success: true,
        status: 200,
        message: "Delete Successfully............",
      });
    }
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Id......" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  insertBook,
  deleteBookById,
  getBookById,
  getBooks,
  updateBookById,
};

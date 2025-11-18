const { BookModel } = require("../model/book.model");
const { cartModel } = require("../model/cart.model");
//              addTo Cart ===================
exports.addToCart = async (req, res) => {
  try {
    const { bookId, qty, userId } = req.body;
    const book = await BookModel.findById(bookId);

    if (!book) {
      return res
        .status(400)
        .json({ message: "Book not found please send valid book id." });
    }

    // ============== Book total
    const bookTotal = qty * book.price;

    // ==============
    const cart = await cartModel.findOne({ userId });

    if (!cart) {
      const newCart = await cartModel.create({
        userId,
        item: [
          {
            bookId,
            qty,
            total: bookTotal, // this only books total
          },
        ],
        total: bookTotal, // all material total
      });
      return res.status(201).json({ message: "cart created.", cart: newCart });
    } else {
      const existingItemIndex = cart.item.findIndex(
        (i) => i.bookId.toString() === bookId
      );

      if (existingItemIndex > -1) {
        cart.item[existingItemIndex].qty += qty;
        cart.item[existingItemIndex].total += bookTotal;
        res.json({ message: "add" });
        console.log("...............1");
      } else {
        console.log("...............2");
        cart.item.push({ bookId, qty, total: bookTotal });
        cart.total = cart.item.reduce((sum, i) => sum + i.total, 0);
        await cart.save();

        return res.status(201).json({
          status: true,
          statusCode: 201,
          message: "Product added into the cart.",
          cart: cart,
        });
      }
    }
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Internal server error", errMsg: error.message });
  }
};

//  =================== deleteItemFromCart ===================

exports.deleteItemFromCart = async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    const cart = await cartModel.findOne({ userId });

    // ==================
    if (!cart) {
      return res.status(400).json({ message: "book not found......" });
    }

    // ================== find index
    const itemIndex = cart.item.findIndex(
      (i) => i.bookId.toString() === bookId
    );

    // ==================
    if (itemIndex === -1) {
      return res.status(404).json({
        status: false,
        message: "This book is not in the cart.",
      });
    }

    // ==================
    cart.item.splice(itemIndex, 1);

    // ==================
    if (cart.item.length == 0) {
      await cartModel.deleteOne({ _id: cart._id });

      return res.status(200).json({
        status: true,
        message: "Book removed. Cart is empty so deleted.",
      });
    }

    // ==================
    cart.total = cart.item.reduce((sum, item) => sum + item.total, 0);

    // ==================
    await cart.save();

    return res
      .status(201)
      .json({ message: "Product delete successfull from cart." });
  } catch (error) {
    console.error("deleteProductFromCart", error.message);
    return res
      .status(500)
      .json({ message: "Internal server error", errMsg: error.message });
  }
};

exports.increaseQYT = async (req, res) => {
  try {
    const { userId, qty, bookId } = req.body;
    const book = await BookModel.findById( bookId );

    const cart = await cartModel.findOne({ userId });
    console.log("cart..........", cart);

    const index = cart.item.findIndex((i) => i.bookId.toString() === bookId);
    console.log("index..........", index);

    if (index === -1) {
      return res.status(400).json({ message: "not found...." });
    }
    cart.item[index].qty += qty;

    cart.item[index].total = cart.item[index].qty * book.price;

    
    cart.total = cart.item.reduce((sum, i) => sum + i.total, 0);

    await cart.save();
    console.log("cart.total..........", cart.total);

    return res.status(201).json({ message: "increaseQYT." });
  } catch (error) {
    console.error("increaseQYT", error.message);
    return res
      .status(500)
      .json({ message: "Internal server error", errMsg: error.message });
  }
};
exports.decreaseQYT = async (req, res) => {
  try {
    return res.status(201).json({ message: "decreaseQYT." });
  } catch (error) {
    console.error("decreaseQYT", error.message);
    return res
      .status(500)
      .json({ message: "Internal server error", errMsg: error.message });
  }
};

exports.getCart = async (req, res) => {
  try {
    return res.status(201).json({ message: "getCart." });
  } catch (error) {
    console.error("getCart", error.message);
    return res
      .status(500)
      .json({ message: "Internal server error", errMsg: error.message });
  }
};

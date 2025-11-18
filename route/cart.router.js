const express = require("express");
const { verifyToken } = require("../middlewares/token");
const controller = require("../controller/cart.controller");

const cartRoute = express.Router();

cartRoute.post("/addCart", controller.addToCart);
cartRoute.delete("/delete", controller.deleteItemFromCart);
cartRoute.post("/increase-qty", controller.increaseQYT);
cartRoute.post("/decrease-qty", controller.decreaseQYT);
cartRoute.get("/", controller.getCart);

module.exports = { cartRoute };

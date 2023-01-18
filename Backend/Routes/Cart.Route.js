const express = require("express");
const { UserAuth } = require("../Middlewares/UserAuth.Middleware");
const { CartModel } = require("../Models/Cart.Model");

const cartRouter = express.Router();

/**
 * ? `/carts`
 * This Endpoint Is Use For Getting All The Data Of Cart Of User Who Logged In */

cartRouter.get("/", UserAuth, async (req, res) => {
  const userID = req.userID;
  try {
    const cart = await CartModel.find({ userID }).populate(["productID"]);
    if (cart.length > 0) {
      res.send(cart);
    } else {
      res.send({ message: "No item added to the cart" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something went wrong in cart Get", error });
  }
});

/** If User Want To Increase The Count Of Item In The Cart Then Use This Endpoint
 * ? `/carts/post/${productID}`
 * And If The Product Count Is Zero Then Item Will Added To The Cart
 */

cartRouter.post("/post/:productID", UserAuth, async (req, res) => {
  const userID = req.userID;
  const productID = req.params.productID;
  try {
    let isProduct = await CartModel.findOne({ productID, userID });
    if (isProduct) {
      await CartModel.findByIdAndUpdate(
        { _id: isProduct._id },
        { productCOUNT: isProduct.productCOUNT + 1 }
      );
      res.send({ message: "Item Count Updated! +1" });
    } else {
      await CartModel.create({ productID, userID });
      res.send({ message: "Item Added To The Cart Successfully" });
    }
    res.send({ message: "Item Updated In Cart Successfully" });
  } catch (error) {
    res
      .status(401)
      .send({ message: "Something Went Wrong In The Cart Update", error });
  }
});

/** If User Want To Decrease The Count Of The Item In The Cart Then Use This Endpoint
 * ? `/carts/remove/${id}`
 * And If The Count Is One Then Item Was Removed From Cart
 */

cartRouter.patch("/remove/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let isProduct = await CartModel.findOne({ _id: id });
    if (isProduct.productCOUNT > 1) {
      await CartModel.findByIdAndUpdate(
        { _id: isProduct._id },
        { productCOUNT: isProduct.productCOUNT - 1 }
      );
      res.send({ message: "Item Count Updated! -1" });
    } else {
      await CartModel.findByIdAndDelete({ _id: id });
      res.send({ message: "Item Deleted From The Cart Successfully" });
    }
    res.send({ message: "Item Decreased From The Cart Successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something Went Wrong In The Cart Delete", error });
  }
});

/** If User Want To Delete Item From Cart Then Use This Endpoint
 * ? `/carts/delete/${id}`
 */

cartRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await CartModel.findByIdAndDelete({ _id: id });
    res.send({ message: "Item Deleted From The Cart Successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Something Went Wrong In The Cart Delete", error });
  }
});

module.exports = {
  cartRouter,
};

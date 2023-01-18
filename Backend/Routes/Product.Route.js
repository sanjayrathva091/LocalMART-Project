const express = require("express");
const { body, validationResult } = require("express-validator");
const { UserAuth } = require("../Middlewares/UserAuth.Middleware");
const { ProductModel } = require("../Models/Product.Model");
require("dotenv").config();

const productRouter = express.Router();
productRouter.use(express.json());

/* For Getting All The Products */

productRouter.get("/", async (req, res) => {
  try {
    const product = await ProductModel.find();
    res.send(product);
  } catch (error) {
    console.log(error);
  }
});

/** For Post A Product */

productRouter.post("/post", UserAuth, async (req, res) => {
  const data = req.body;
  data.userID = req.userID;
  try {
    const book = await ProductModel(data);
    await book.save();
    res.send(book);
  } catch (error) {
    console.log(error);
  }
});

/** For Update A Product Using ID*/

productRouter.patch("/update/:id", UserAuth, async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await ProductModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send(`Update The Book Data Whose ID Is ${ID}`);
  } catch (error) {
    console.log(error);
  }
});

/** For Delete A Product Using ID*/

productRouter.delete("/delete/:id", UserAuth, async (req, res) => {
  const ID = req.params.id;
  try {
    await ProductModel.findByIdAndDelete({ _id: ID });
    res.send(`Delete The Book Data Whose ID Is ${ID}`);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  productRouter,
};

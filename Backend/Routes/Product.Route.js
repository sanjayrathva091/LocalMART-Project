const express = require("express");
const { body, validationResult } = require("express-validator");
const { UserAuth } = require("../Middlewares/UserAuth.Middleware");
const { ProductModel } = require("../Models/Product.Model");
require("dotenv").config();

const productRouter = express.Router();
productRouter.use(express.json());

/* For Getting All The Products */

productRouter.get("/", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { category, name } = req.query;
  const count = await ProductModel.count();
  let product;
  try {
    product = await ProductModel.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    if (category) {
      product = await ProductModel.find({
        category: { $regex: "^" + category, $options: "i" },
      })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
    }
    if (name) {
      product = await ProductModel.find({
        name: { $regex: "^" + name, $options: "i" },
      })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
    }

    res.send({
      totalPages: Math.ceil(count / limit),
      count,
      currentPage: page,
      product,
    });
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

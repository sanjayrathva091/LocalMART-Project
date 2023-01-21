const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    category: { type: String, required: true },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    condition: { type: String, required: true },
    color: { type: String, required: true },
    rating: { type: String, required: true },
    price: { type: String, required: true },
    discount_price: { type: String, required: true },
    image: { type: String, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ProductModel = mongoose.model("product", productSchema);

module.exports = {
  ProductModel,
};

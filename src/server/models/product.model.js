const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: { type: String, required: false },
    brand: { type: String, required: false },
    price: { type: String, required: false },
    gender: { type: String, required: false },
    size: { type: String, required: false },
    color: { type: String, required: false },
    description: { type: String, required: false },
    filename: { type: String, required: false },
    quantity: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

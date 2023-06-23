const mongoose = require('mongoose');
const {categoryType} = require("../config/constant")

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 200,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      enum: Object.values(categoryType),
      required: true,
    },
  },
  {
    timestamps: true,
    id: true,
  }
);

module.exports = mongoose.model("Product", productSchema);



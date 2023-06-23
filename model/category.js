const mongoose = require('mongoose');
const {categoryType} = require("../config/constant")

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: Object.values(categoryType),
      required: true,
      unique: true,
    }
  },
  {
    timestamps: true,
    id: true,
  }
);

module.exports = mongoose.model("Category", categorySchema);
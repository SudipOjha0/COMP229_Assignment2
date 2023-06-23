const express = require("express");

const {
  createProduct,
  updateProduct,
  deleteAllProducts,
  deleteProduct,
  getAllProducts,
  getProductById,
} = require("../controller/productController");

const router = express.Router();

router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/", deleteAllProducts);
router.delete("/:id", deleteProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);

module.exports = router;

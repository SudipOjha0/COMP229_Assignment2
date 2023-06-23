const Product = require("../model/product");

// Create and Save a new Product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, published, category } = req.body;
    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      return res.status(400).json({ message: "Product already exists" });
    }
    const product = new Product({
      name,
      description,
      price,
      published,
      category,
    });
    const newProduct = await product.save();
    res.status(201).json({
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
// update product by id
exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, description, price, published, category } = req.body;
    const updateProduct = await Product.findById(productId);
    if (!updateProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    updateProduct.name = name;
    updateProduct.description = description;
    updateProduct.price = price;
    updateProduct.published = published;
    updateProduct.category = category;
    const updatedProduct = await updateProduct.save();
    res.status(200).json({
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
// delete product by id
exports.deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deleteProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// delete all products
exports.deleteAllProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.status(200).json({ message: "All products deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// get all products
exports.getAllProducts = async (req, res) => {
  try {
    const { name } = req.query;
    const products = await Product.find({});
    const filteredProducts = products.filter((product) => {
      return product.name.includes(name);
    });

    res.status(200).json({
      message: "All products",
      data: name ? filteredProducts : products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// get product by id
exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ data: product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

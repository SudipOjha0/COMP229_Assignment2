const routes = require("express").Router();

const productRoutes = require("./routes/productRoute");

routes.use("/products", productRoutes);

module.exports = routes;

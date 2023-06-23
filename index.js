const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();
require("./config/dbconfig");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors("*"));

// Routes
const routers = require("./main.route");
app.use("/assignment2/api", routers);

const port = process.env.Port || 8080;
if (process.env.NODE_ENV !== "test")
  app.listen(port, () => console.log(`Node server started at port ${port}`));

module.exports = { app };

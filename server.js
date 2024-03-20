require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");

const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

app.use("/api", categoriesRoutes);
app.use("/api", productsRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

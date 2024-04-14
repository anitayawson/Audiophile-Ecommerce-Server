require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const boxContentRoutes = require("./routes/box_content");
const galleryRoutes = require("./routes/gallery");
const cartRoutes = require("./routes/cart");

const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

app.use("/api", categoriesRoutes);
app.use("/api", productsRoutes);
app.use("/api", boxContentRoutes);
app.use("/api", galleryRoutes);
app.use("/api", cartRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

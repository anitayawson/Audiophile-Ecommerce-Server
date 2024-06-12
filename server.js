require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const boxContentRoutes = require("./routes/box_content");
const galleryRoutes = require("./routes/gallery");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/orders");

const PORT = process.env.PORT || process.env.production.PORT;

const allowedOrigins = [
  "http://localhost:3000",
  "https://audiophile-ecommerce-client.vercel.app",
];

const corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(cors(corsOptions));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Origin",
    "Origin",
    "X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", categoriesRoutes);
app.use("/api", productsRoutes);
app.use("/api", boxContentRoutes);
app.use("/api", galleryRoutes);
app.use("/api", cartRoutes);
app.use("/api", orderRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

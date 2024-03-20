const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile.js"));

// Get ALL products
router.get("/products", (req, res) => {
  knex
    .select("*")
    .from("products")
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Products not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error retrieving products" });
    });
});

// Get products by category
router.get("/products/category/:category_id", (req, res) => {
  const { category_id } = req.params;
  const { isNew } = req.query;

  let query = knex.select("*").from("products").where({ category_id });

  if (isNew) {
    query = query.andWhere({ isNew });
  }

  query
    .then((data) => {
      if (data.length > 0) {
        res.status(200).json(data);
      } else {
        res
          .status(404)
          .json({ message: "No products found for this category" });
      }
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ message: "Error retrieving products for this category" });
    });
});

// Get product by ID
router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  knex
    .select("*")
    .from("products")
    .where({ id })
    .first()
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error retrieving product" });
    });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const knexConfig = require("./knexfile");
const environment = process.env.NODE_ENV || "development";
const knex = require("knex")(knexConfig[environment]);
// const knex = require("knex")(require("../knexfile"));
//
// Get box content for specific product
router.get("/box_content/product/:product_id", (req, res) => {
  const { product_id } = req.params;
  knex
    .select("*")
    .from("boxContent")
    .where({ product_id })
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res
          .status(404)
          .json({ message: "No box content found for this product" });
      }
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ message: "Error retrieving box content for this product" });
    });
});

module.exports = router;

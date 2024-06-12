const express = require("express");
const router = express.Router();
const knexConfig = require("./knexfile");
const environment = process.env.NODE_ENV || "development";
const knex = require("knex")(knexConfig[environment]);
// const knex = require("knex")(require("../knexfile"));

// Get ALL categories
router.get("/categories", (req, res) => {
  knex
    .select("*")
    .from("categories")
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Categories not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error retrieving categories" });
    });
});

// Get category by ID
router.get("/categories/:id", (req, res) => {
  const { id } = req.params;
  knex
    .select("*")
    .from("categories")
    .where({ id })
    .first()
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error retrieving category" });
    });
});

module.exports = router;

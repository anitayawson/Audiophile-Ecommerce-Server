const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile.js"));

// GET All Cart Items
router.get("/cart", (req, res) => {
  knex
    .select("*")
    .from("cart")
    .then((data) => {
      if (data.length > 0) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Cart is empty" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Error retrieving cart items" });
    });
});

// POST New Cart Item
router.post("/cart", async (req, res) => {
  const { product_id, item_quantity } = req.body;

  try {
    const product = await knex("products").where("id", product_id).first();

    if (!product) {
      return res
        .status(404)
        .json({ message: "Item not found in product list" });
    }

    const {
      name: item_name,
      price: item_price,
      images: { mobile: item_image },
    } = product;

    await knex("cart").insert({
      product_id,
      item_name,
      item_quantity,
      item_price,
      item_image,
    });

    res.status(201).json({ message: "Cart item added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding cart item" });
  }
});

// PUT Route to Update Quantity of an Item in Cart
router.put("/cart/:id", async (req, res) => {
  const { id } = req.params;
  const { newQuantity } = req.body;

  try {
    const cartItem = await knex("cart").where("id", id).first();
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    await knex("cart").where("id", id).update({ item_quantity: newQuantity });

    res.status(200).json({ message: "Item quantity updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating item quantity" });
  }
});

// DELETE an Item from the Cart
router.delete("/cart/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const cartItem = await knex("cart").where("id", id).first();
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    await knex("cart").where("id", id).del();

    res.status(200).json({ message: "Item successfully deleted from cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting item from cart" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile.js"));
const { body, validationResult } = require("express-validator");

// POST Route to create a new order
router.post(
  "/orders",
  [
    // Form Validation
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Email is required").notEmpty(),
    body("phone").notEmpty().withMessage("Phone number is required"),
    body("address").notEmpty().withMessage("Address is required"),
    body("zip_code").notEmpty().withMessage("Zip code is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("payment_method").notEmpty().withMessage("Payment method is required"),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {
        name,
        email,
        phone,
        address,
        zip_code,
        city,
        country,
        payment_method,
        emoney_number,
        emoney_pin,
        sub_total,
        shipping_cost,
        vat,
        grand_total,
        items,
      } = req.body;

      const orderId = await knex("orders").insert({
        name,
        email,
        phone,
        address,
        zip_code,
        city,
        country,
        payment_method,
        emoney_number,
        emoney_pin,
        sub_total,
        shipping_cost,
        vat,
        grand_total,
        items: JSON.stringify(items),
      });

      res
        .status(201)
        .json({ message: "Order submitted successfully", orderId });
    } catch (error) {
      console.error("Error submitting order:", error);
      res.status(500).json({ message: "Error submitting order" });
    }
  }
);

// GET All Orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await knex("orders").select("*");
    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error retrieving orders:", error);
    res.status(500).json({ message: "Error retrieving orders" });
  }
});

// GET Order by ID
router.get("/orders/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const order = await knex("orders").where("id", id).first();
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error("Error retrieving order:", error);
    res.status(500).json({ message: "Error retrieving order" });
  }
});

// DELETE an Order
router.delete("/orders/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedOrder = await knex("orders").where("id", id).del();
    if (deletedOrder === 0) {
      return res.status(404).json({ message: "Order not found" });
    }
    res
      .status(200)
      .json({ message: "Order successfully deleted", deletedOrder });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ message: "Error deleting order" });
  }
});

module.exports = router;

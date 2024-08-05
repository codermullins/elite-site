const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const { ObjectId } = require("mongoose");

//Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// add a product
router.post("/addProduct", async (req, res) => {
  const product = new Product({
    productName: req.body.productName,
    description: req.body.description,
    category: req.body.category,
    quantity: req.body.quantity,
    size: req.body.size,
    price: req.body.price,
  });
  await product.save();
  res.status(201).json(product);
});

// Get a product
router.get("/getProduct/:id", async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  res.send(product);
});

// Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

// Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  await Product.deleteOne({ _id: req.params.id });
  res.status(201).json("Item Deleted");
});

module.exports = router;

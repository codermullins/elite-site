const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const shopCon = require("../controllers/shopController");
const adminCont = require("../controllers/adminController");

//Get all products
router.get("/", shopCon.getProducts);

// add a product
router.post("/addProduct", adminCont.postAddProduct);

// Get a product
router.get("/getProduct/:id", shopCon.getProduct);

// Update by ID Method
router.put("/update/:id", adminCont.postUpdateProduct);

// Delete by ID Method
router.delete("/delete/:id", adminCont.deleteProduct);

// add a product to cart
router.post("/addtocart", shopCon.addCart);

//get all items in cart
router.get("/getCart", shopCon.getCart);

//delete an item in the cart
router.post("/removeFromCart", shopCon.postItemDelete);

//add cart to orders
router.post("/addToOrder", shopCon.postOrder);

//get the orders
router.get("/getOrder", shopCon.getOrder);

module.exports = router;

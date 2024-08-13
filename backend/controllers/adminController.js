const Product = require("../models/product");

/**Section for Product admin control */

//add product
exports.postAddProduct = (req, res, next) => {
  const product = new Product({
    productName: req.body.productName,
    description: req.body.description,
    category: req.body.category,
    quantity: req.body.quantity,
    size: req.body.size,
    price: req.body.price,
    userId: req.user._id,
  });
  product
    .save()
    .then((result) => {
      res.status(201).json(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Updating a product
exports.postUpdateProduct = (req, res, next) => {
  const productId = req.body._id;
  const updatedProductName = req.body.productName;
  const updatedDescription = req.body.description;
  const updatedCategory = req.body.category;
  const updatedQuantity = req.body.quantity;
  const updatedSize = req.body.size;
  const updatedPrice = req.body.price;

  Product.findById(productId)
    .then((product) => {
      product.productName = updatedProductName;
      product.description = updatedDescription;
      product.category = updatedCategory;
      product.quantity = updatedQuantity;
      product.size = updatedSize;
      product.price = updatedPrice;
      return product.save();
    })
    .then((result) => {
      console.log("Updated Item");
      res.status(201).send("Product was updated");
    })
    .catch((err) => console.log(err));
};

//delete a product
exports.deleteProduct = (req, res, next) => {
  const prodId = req.params.id;
  Product.findByIdAndDelete(prodId)
    .then((result) => {
      console.log("Product Deleted");
      res.status(201).json("Item has been deleted");
    })
    .catch((err) => console.log(err));
};

/**Admin event controller */

//events control
exports.postAddEvent = (req, res, next) => {};

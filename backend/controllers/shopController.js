const Product = require("../models/product");
const Order = require("../models/order");
/** User Product Controllers */

//get all products
exports.getProducts = (req, res, next) => {
  try {
    Product.find().then((products) => {
      console.log(products);
      res.json(products);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get product detail
exports.getProduct = (req, res, next) => {
  const prodId = req.params.id;
  Product.findById(prodId)
    .then((product) => {
      res.send(product);
    })
    .catch((err) => console.log(err));
};

/** User Cart Controller */

//add items to users cart
exports.addCart = (req, res, next) => {
  const prodId = req.body._id;
  console.log(prodId);
  Product.findById(prodId)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .then((result) => {
      console.log(result);
    });
};

//get items in cart
exports.getCart = (req, res, next) => {
  req.user
    .populate("cart.items.productId")
    .then((user) => {
      const products = user.cart.items;
      res.send(products);
    })
    .catch((err) => console.log(err));
};

exports.postItemDelete = (req, res, next) => {
  const prodId = req.body._id;
  console.log(prodId);
  req.user
    .removeFromCart(prodId)
    .then((result) => {
      console.log("Item Deleted");
    })
    .catch((err) => console.log(err));
};

/**get order for review */
exports.postOrder = (req, res, next) => {
  req.user
    .populate("cart.items.productId")
    .then((user) => {
      const products = user.cart.items.map((i) => {
        return { quantity: i.quantity, productData: { ...i.productId._doc } };
      });
      const order = new Order({
        user: {
          name: req.user.name,
          userId: req.user,
        },
        products: products,
      });
      console.log(order);
      return order.save();
    })
    .then((result) => {
      return req.user.clearCart();
    })
    .catch((err) => console.log(err));
};

exports.getOrder = (req, res, next) => {
  Order.find({ "user.userId": req.user._id })
    .then((orders) => {
      res.send(orders);
    })
    .catch((err) => console.log(err));
};

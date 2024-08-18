const Product = require("../models/product");
const Event = require("../models/events");

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
    imageUrl: req.body.imageUrl,
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
  const updatedUrl = req.body.imageUrl;

  Product.findById(productId)
    .then((product) => {
      product.productName = updatedProductName;
      product.description = updatedDescription;
      product.category = updatedCategory;
      product.quantity = updatedQuantity;
      product.size = updatedSize;
      product.price = updatedPrice;
      product.imageUrl = updatedUrl;
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
//get all Events
exports.getEvents = (req, res, next) => {
  try {
    Event.find().then((events) => {
      console.log(events);
      res.json(events);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//events control
exports.postAddEvent = (req, res, next) => {
  const event = new Event({
    title: req.body.title,
    location: req.body.location,
    date: req.body.date,
    site: req.body.site,
  });
  event
    .save()
    .then((result) => {
      res.status(201).json(event);
    })
    .catch((err) => {
      console.log(err);
    });
};

//delete an event
exports.deleteEvent = (req, res, next) => {
  const eventId = req.params.id;
  Event.findByIdAndDelete(eventId)
    .then((result) => {
      console.log("Event Deleted");
      res.status(201).json("Event has been deleted");
    })
    .catch((err) => console.log(err));
};

//Updating a event
exports.postUpdateEvent = (req, res, next) => {
  const eventId = req.body._id;
  const updatedTitle = req.body.title;
  const updatedLocation = req.body.location;
  const updatedDate = req.body.date;
  const updatedSite = req.body.site;
  1;

  Event.findById(eventId)
    .then((event) => {
      event.title = updatedTitle;
      event.location = updatedLocation;
      event.date = updatedDate;
      event.site = updatedSite;
      return event.save();
    })
    .then((result) => {
      console.log("Updated Event");
      res.send(result);
    })
    .catch((err) => console.log(err));
};

exports.getEvent = (req, res, next) => {
  const eventId = req.params.id;
  Event.findById(eventId)
    .then((event) => {
      res.send(event);
    })
    .catch((err) => console.log(err));
};

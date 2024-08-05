const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  custName: String,
  custAddress: String,
  custPhone: String,
  custEmail: String,
  productList: Array,
  quantity: Number,
  size: String,
});
module.exports = mongoose.model("Cart", cartSchema);

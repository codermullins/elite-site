const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  productName: String,
  description: String,
  category: String,
  quantity: Number,
  size: Array,
})
module.exports = mongoose.model('Product', productSchema)

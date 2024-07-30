const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  email: String,
})
module.exports = mongoose.model('User', userSchema)

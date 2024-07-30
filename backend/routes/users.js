const express = require('express')
const router = express.Router()
const Product = require('../models/user')

router.get('/', async (req, res) => {
  try {
    const users = await Product.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    email: req.body.email,
  })
  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})
// Implement other CRUD operations (GET by ID, PUT, DELETE)
module.exports = router

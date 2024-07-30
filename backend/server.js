const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const productRoutes = require('./routes/products')
const userRoutes = require('./routes/users')
const app = express()
const port = 3000

mongoose
  .connect('mongodb://localhost:27017/productDB', {})
  .then(() => {
    console.log('Connected to Mongo')
  })
  .catch((error) => {
    console.error('Mongo connections error:', error)
  })
app.use(cors())
app.use(express.json())
app.use('/getProducts', productRoutes)
app.use('/users', userRoutes)

app.listen(port, () => {
  console.log(`Server running on port:${port}`)
})

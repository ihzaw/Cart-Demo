const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const Controller = require('./controller')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// -----------ROUTES-----------
app.get('/products', Controller.fetchProducts)
app.post('/carts/:userId', Controller.addItemToCart)
app.delete('/carts/:userId', Controller.deleteItemFromCart)
app.delete('/carts/:userId/checkout', Controller.emptyUserCart)
app.get('/carts/:userId', Controller.getUserCart)
// ----------------------------

app.use(errorHandler)

module.exports = app
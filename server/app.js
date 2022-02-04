const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`running on http://localhost:${port}`)
})

/** 
 * get items untuk display homepage
 * add to cart
 * remove from cart
 * decrease item amount from cart
*/

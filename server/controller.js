const { User, Cart, Product, CartProduct } = require('./models')

class Controller {
    static async fetchProducts(req, res, next) {
        try {
            const response = await Product.findAll()
            if (!response) throw {name: 'PRODUCT_NOT_FOUND'}
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }

    static async addItemToCart(req, res, next) {
        try {
            const { userId } = req.params
            const { productId } = req.body

            const userCart = await Cart.findOne({ where: { userId } })
            const cartId = userCart.id

            const response = await CartProduct.create({ cartId, productId: +productId })
            console.log(response)
            
            res.status(201).json({
                message: 'Added to Cart',
                response
            })
        } catch (err) {
            next(err)   
        }
    }
}

module.exports = Controller
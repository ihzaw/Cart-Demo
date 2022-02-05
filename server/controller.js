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
}

module.exports = Controller
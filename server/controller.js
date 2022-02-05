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
            
            res.status(201).json({
                message: 'Added to Cart',
                response
            })
        } catch (err) {
            next(err)   
        }
    }

    static async deleteItemFromCart(req, res, next) {
        try {
            const { userId } = req.params
            const { productId } = req.body

            const userCart = await Cart.findOne({ where: { userId } })
            const cartId = userCart.id

            const selectedProduct = await CartProduct.findOne({ where: { cartId, productId } })

            const response = await CartProduct.destroy({where: { id: selectedProduct.id }})
            res.status(200).json({message: 'Item removed from cart'})
        } catch (err) {
            next(err)
        }
    }

    static async getUserCart(req, res, next) {
        try {
            const { userId } = req.params

            const userCart = await Cart.findOne({ where: { userId } })
            const cartId = userCart.id

            const cartProducts = await CartProduct.findAll({
                where: { cartId },
                include: Product
            })
            const productsInCart = cartProducts.map(cartProduct => {
                return cartProduct.Product
            })

            res.status(200).json(productsInCart)
        } catch (err) {
            next(err)
        }
    }

    static async emptyUserCart(req, res, next) {
        try {
            const { userId } = req.params

            const userCart = await Cart.findOne({ where: { userId } })
            const cartId = userCart.id
            console.log(cartId, "<<<<<<<<<<<<<")
            const response = await CartProduct.destroy({
                where: { cartId },
            })

            res.status(200).json({ message: 'Checkout complete' })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller
const { Cart, Product, CartProduct } = require('./models')

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
            if(!userId || !productId ) throw {name: 'BAD_REQUEST'}

            const userCart = await Cart.findOne({ where: { userId } })
            if(!userCart) throw {name: 'CART_NOT_FOUND'}
            const cartId = userCart.id

            const response = await CartProduct.create({ cartId, productId: +productId })
            if(!response) throw err
            
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
            if(!userId || !productId ) throw {name: 'BAD_REQUEST'}

            const userCart = await Cart.findOne({ where: { userId } })
            if(!userCart) throw {name: 'CART_NOT_FOUND'}
            const cartId = userCart.id

            const selectedProduct = await CartProduct.findOne({ where: { cartId, productId } })
            if(!selectedProduct) throw {name: 'SELECTED_PRODUCT_NOT_FOUND'}

            const response = await CartProduct.destroy({where: { id: selectedProduct.id }})
            if(!response) throw err

            res.status(200).json({message: 'Item removed from cart'})
        } catch (err) {
            next(err)
        }
    }

    static async getUserCart(req, res, next) {
        try {
            const { userId } = req.params
            if(!userId) throw {name: 'BAD_REQUEST'}

            const userCart = await Cart.findOne({ where: { userId } })
            if(!userCart) throw {name: 'CART_NOT_FOUND'}
            const cartId = userCart.id

            const cartProducts = await CartProduct.findAll({
                where: { cartId },
                include: Product
            })
            if(!cartProducts) throw {name: 'CART_PRODUCTS_NOT_FOUND'}
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
            if(!userId) throw {name: 'BAD_REQUEST'}

            const userCart = await Cart.findOne({ where: { userId } })
            if(!userCart) throw {name: 'CART_NOT_FOUND'}
            const cartId = userCart.id

            const response = await CartProduct.destroy({
                where: { cartId },
            })
            if(!response) throw err

            res.status(200).json({ message: 'Checkout complete' })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller
module.exports = function errorHandler (err, req, res, next) {
    switch (err.name) {
        case 'BAD_REQUEST': 
            res.status(400).json({message: 'Bad Request'})
        case 'CART_NOT_FOUND': 
            res.status(500).json({message: 'Internal Server Error: Failed to get cart'})
        case 'PRODUCT_NOT_FOUND': 
            res.status(500).json({message: 'Internal Server Error: Failed to get products'})
        case 'CART_PRODUCTS_NOT_FOUND': 
            res.status(500).json({message: 'Internal Server Error: Failed to get products inside user cart'})
        case 'SELECTED_PRODUCT_NOT_FOUND': 
            res.status(500).json({message: 'Internal Server Error: Failed to get selected product inside user cart'})
        default: 
            res.status(500).json({message: 'Internal Server Error'})
    }
}
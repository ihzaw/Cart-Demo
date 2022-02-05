const errorHandler = (err, req, res, next) => {
    console.log(err)
    switch (err.name) {
        case 'BAD_REQUEST': 
            res.status(400).json({message: 'Bad Request'})
            break;
        case 'CART_NOT_FOUND': 
            res.status(500).json({message: 'Internal Server Error: Failed to get cart'})
            break;
        case 'PRODUCT_NOT_FOUND': 
            res.status(500).json({message: 'Internal Server Error: Failed to get products'})
            break;
        case 'CART_PRODUCTS_NOT_FOUND': 
            res.status(500).json({message: 'Internal Server Error: Failed to get products inside user cart'})
            break;
        case 'SELECTED_PRODUCT_NOT_FOUND': 
            res.status(500).json({message: 'Internal Server Error: Failed to get selected product inside user cart'})
            break;
        default: 
            res.status(500).json({message: 'Internal Server Error'})
            break;
    }
}

module.exports = errorHandler
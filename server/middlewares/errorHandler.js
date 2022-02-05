module.exports = function errorHandler (err, req, res, next) {
    switch (err.name) {
        case 'PRODUCT_NOT_FOUND': {
            res.status(500).json({message: 'Internal Server Error: Failed to get products'})
        }
        default: {
            res.status(500).json({message: 'Internal Server Error'})
        }
    }
}
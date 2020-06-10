const data = require('../data/product.json')
module.exports.getProducts = (req, res) => {
    res.render('product', {
        products: data.body
    })
}
const Product = require('../../models/product.model');

module.exports.getProducts = (req, res) => {
    Product.find().then(data => {
        res.json(data);
    });
}
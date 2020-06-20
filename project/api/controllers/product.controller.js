const Product = require('../../models/product.model');

module.exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}
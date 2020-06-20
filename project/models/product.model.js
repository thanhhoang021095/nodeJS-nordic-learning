const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: String,
    image: String,
    thumbnail: String,
    shortDescription: String,
    categoryId: String,
    salePrice: Number,
    originalPrice: Number,
    images: Array,
    thumbnail: Array,
})

const Product = mongoose.model('Product', productSchema, 'products')

module.exports = Product;
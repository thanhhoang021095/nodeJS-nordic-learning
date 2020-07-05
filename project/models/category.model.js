const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    description: String
});

const Categories = mongoose.model('Categories', categorySchema, 'categories');

module.exports = Categories;
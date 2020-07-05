const Category = require('../../models/category.model');

module.exports.getCategories = (req, res) => {
    Category.find().then(data => {
        res.json(data);
    });
}
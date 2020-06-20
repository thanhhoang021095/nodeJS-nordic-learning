const express = require('express');
const router = express.Router();
const users = require('../data/user.json');
const products = require('../data/product.json');
const categories = require('../data/categories.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    users: users.body,
    products: products.body,
    categories: categories.body
  });
});

module.exports = router;

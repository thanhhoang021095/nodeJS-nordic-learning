const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/', productController.getProducts);
router.get('/search', productController.searchProduct);
router.get('/:id', productController.viewDetail);
// router.post('/create', productController.createProduct);

module.exports = router;
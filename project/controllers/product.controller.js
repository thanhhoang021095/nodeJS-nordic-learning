const data = require('../data/product.json')
module.exports.getProducts = (req, res) => {
    res.render('product/index', {
        products: data.body
    })
}

module.exports.searchProduct = (req, res) => {
    const searchText = req.query.name;
    const products = data.body;
    const matchProduct = products.filter(prod => {
        return prod.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    })
    res.render('product/search-product', {
        products: matchProduct
    })
}

module.exports.viewDetail = (req, res) => {
    const id = req.params.id;
    const products = data.body;
    const product = products.filter(item => {
        return item._id === id;
    })
    res.render("product/view-product", {
        products: product,
    });
}

// module.exports.createProduct = (req, res) => {

// }
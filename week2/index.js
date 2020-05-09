const fs = require('fs');

const products = fs.readFile('./product.json', (err) => {
    console.log(err)
});
console.log(products);
const express = require('express');
const { readProducts } = require('./data/products');  
const router = express.Router();

router.get('/products', (req, res) => {
    try {
        const products = readProducts();
        res.json(products);
    } catch (error) {
        res.status(500).send('Error reading products data');
    }
});

module.exports = router;

const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./products-router');

const app = express();
app.use(bodyParser.json());

app.use('/api', productsRouter);

app.listen(3006, () => {
    console.log('Products Listing Service running on port 3006');
    console.log('http://localhost:3006/api/products/');
});
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, 'products.json');

const readProducts = () => {
    const data = fs.readFileSync(productsFilePath);
    return JSON.parse(data);
};

module.exports = {
    readProducts,
    
};

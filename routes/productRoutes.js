const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();



// Path to JSON file

const dataFilePath = path.join(__dirname, '../data/products.json')


// Utility for reading JSON data

const readProducts = () => {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
};


// Utility func to write data to JSON

const writeProducts = (products) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(products, null, 2), 'utf-8' );
}






// Get all products

router.get('/', (req, res) => {
    const products = readProducts();
    res.json(products);
});


// Get single product by ID

router.get('/:id', (req, res) => {
    const products = readProducts();
    const product = products.find(p => p.id === parseInt(req.params.id));
    if(!product) {
        return res.status(404).json({ message: 'Products not found' });
    }
    res.json(product);
})


// Add new product

router.post('/', (req, res) => {
    const products = readProducts();
    const { name, price } = req.body;
    const newProduct = {
        id: products.length + 1,
        name,
        price,
    };
    products.push(newProduct);
    writeProducts(products);
    res.status(201).json(newProduct);
})


// Update product

router.put('/:id', (req, res) => {
    const products = readProducts();
    const { name, price } = req.body;
    const product = products.find(p => p.id === parseInt(req.params.id));
    if(!product) {
        return res.status(404).json({ message: 'Product not found'});
    }
    product.name = name || product.name;
    product.price = price || product.price;

    writeProducts(products);
    res.json(product);
});


// Delete product

router.delete('/id', (req, res) => {
    const products = readProducts();
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));

    if(!productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }


    products.splice(productIndex, 1);
    writeProducts(products);
    res.json({ message: 'Product is deleted'});
});


module.exports = router;
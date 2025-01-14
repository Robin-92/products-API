const express = require('express');
const productRoutes = require('./routes/productRoutes');


const app = express();
const PORT = 5000;


app.use(express.json());



// Product route
app.use('/api/products', productRoutes);



// Home route
app.get('/', (req, res) => {
    res.send('Welcome to my API for managing products.');
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
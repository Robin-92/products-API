# Products API

A simple RESTful API built with Node.js and Express.js that manages a collection of products using a JSON file as the data source. This project is ideal for learning purposes or showcasing in your portfolio.

## Features

- Fetch all products
- Fetch a single product by ID
- Add a new product
- Update an existing product
- Delete a product
- Persistent data stored in a JSON file

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd products-API

2. Install dependencies


## Run the API

Start the server: "node server.js"


API runs at: http://localhost:5000



## Endpoints

1. Fetch All Products
GET /api/products
Returns a list of all products.

Example response:

json

[
  { "id": 1, "name": "Laptop", "price": 999 },
  { "id": 2, "name": "Smartphone", "price": 699 }
]
2. Fetch a Single Product
GET /api/products/:id
Returns a single product by ID.

Example response:

json

{ "id": 1, "name": "Laptop", "price": 999 }
3. Add a New Product
POST /api/products
Adds a new product.

Request Body:

json

{
  "name": "Tablet",
  "price": 299
}
Response:

json

{
  "id": 4,
  "name": "Tablet",
  "price": 299
}
4. Update a Product
PUT /api/products/:id
Updates an existing product by ID.

Request Body:

json

{
  "name": "Updated Laptop",
  "price": 1099
}
Response:

json

{
  "id": 1,
  "name": "Updated Laptop",
  "price": 1099
}
5. Delete a Product
DELETE /api/products/:id
Deletes a product by ID.

Response:

json

{
  "message": "Product deleted"
}


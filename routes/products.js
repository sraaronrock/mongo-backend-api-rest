'use strict'

var express = require('express');
var ProductController = require('../controllers/products');

var api = express.Router();

api.get('/pruebas', ProductController.pruebas);
api.post('/product', ProductController.saveProducts);
api.get('/products', ProductController.getProducts);
api.get('/product/:id', ProductController.getProduct);
api.put('/product/:id', ProductController.updateProduct);
api.delete('/product/:id', ProductController.deleteProduct);

module.exports = api;
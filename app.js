'use strict'

var express = require('express');
var bodyParser = require('body-parser');

//LOAD EXPRESS HTTP
var app = express();

//LOAD ROUTES
var product_routes = require('./routes/products');

//BODY PARSER
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//BASE ROUTE
app.use('/api', product_routes);

module.exports = app;
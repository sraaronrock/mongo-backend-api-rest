'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = Schema({
    nombre: String,
    precio: String,
    stock: Boolean
});

module.exports = mongoose.model('Product', ProductSchema);
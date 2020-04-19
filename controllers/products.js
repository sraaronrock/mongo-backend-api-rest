'use strict'

var Product = require('../models/products');

function pruebas(req, res){
    res.status(200).send({
        menssage: 'Ruta de prueba'
    });
};

function saveProducts(req, res){
    var product = new Product();

    var params = req.body;

    if(params.nombre){
        product.nombre = params.nombre;
        product.precio = params.precio;
        product.stock = params.stock;

        product.save((err, productStored) => {
            if(err){
                res.status(500).send({
                    menssage: 'Error en el servidor intentelo de nuevo'
                });
            }else{
                if(productStored){
                    res.status(200).send({
                        product: productStored
                    });
                }else{
                    res.status(200).send({
                        menssage: 'ERROR - No se ha guardado el producto'
                    });                    
                }
            }
        });
    }else{
        res.status(200).send({
            menssage: 'ERROR - El nombre del producto es obligatorio'
        });
    }   
};

function getProducts(req, res){
    Product.find({}).exec((err, products) => {
        if(err){
            res.status(500).send({
                menssage: 'Error en el servidor intentelo de nuevo'
            });
        }else{
            if(products){
                res.status(200).send({
                    products
                });               
            }else{
                res.status(404).send({
                    menssage: 'No hay productos'
                });                
            }
        }   
    });
}

function getProduct(req, res){
    var productId = req.params.id;
    Product.findById(productId).exec((err, products) => {
        if(err){
            res.status(500).send({
                menssage: 'Error en el servidor intentelo de nuevo'
            });
        }else{
            if(products){
                res.status(200).send({
                    products
                });               
            }else{
                res.status(404).send({
                    menssage: 'No existen productos'
                });                
            }
        }        
    });
}

function updateProduct(req, res){
    var productId = req.params.id;
    var update = req.body;

    Product.findByIdAndUpdate(productId, update, {new: true}, (err, productUpdated) => {
        if(err){
            res.status(500).send({
                menssage: 'Error en el servidor intentelo de nuevo'
            });
        }else{
            if(productUpdated){
                res.status(200).send({
                    product: productUpdated
                });               
            }else{
                res.status(404).send({
                    menssage: 'No existen productos'
                });                
            }
        }        
    });
}

function deleteProduct(req, res){
    var productId = req.params.id;

    Product.findByIdAndRemove(productId, (err, productRemoved) => {
        if(err){
            res.status(500).send({
                menssage: 'Error en el servidor intentelo de nuevo'
            });
        }else{
            if(productRemoved){
                res.status(200).send({
                    product: productRemoved
                });               
            }else{
                res.status(404).send({
                    menssage: 'No existen productos'
                });                
            }
        }  
    });
}

module.exports = {
    pruebas,
    saveProducts,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
};
'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.connect('mongodb://localhost:27017/backend_mongo', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()  => {
            console.log('Conexion correcta con la base de datos de MongoDB');

            app.listen(port, () =>{
                console.log('El servidor esta funcionando correctamente en localhost:3800')
            });
        })
        .catch(err => console.log(err))
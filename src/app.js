const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//conectando la base de datos
mongoose.connect('mongodb://localhost/crud-mongo')
.then(db => console.log('Db conectada'))
.catch(err => console.log(err));

//importando rutas
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000); 
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//rutas
app.use('/',indexRoutes);


//iniciando servidor

app.listen(app.get('port'),() =>{
    console.log(`Servidor en puerto ${app.get('port')}`);
});
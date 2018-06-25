'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongosse = require('mongoose');

const app = express();
const router = express.Router();

// conectar ao banco
mongosse.connect('mongodb://cleber:cleber123@ds018168.mlab.com:18168/produto-str');
//carregar models
const Product = require('./models/product');
//carregar as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/produtos', productRoute);

module.exports = app;
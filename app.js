const express = require('express');
const app =  express();

const produsctsRoute = require('./api/route/products');
const ordersRoute = require('./api/route/orders');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/products', produsctsRoute);
app.use('/orders', ordersRoute);

module.exports = app;
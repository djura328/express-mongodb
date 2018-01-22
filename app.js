const express = require('express');
const app =  express();

const produsctsRoute = require('./api/route/products');
const ordersRoute = require('./api/route/orders');

app.use('/products', produsctsRoute);
app.use('/orders', ordersRoute);

module.exports = app;
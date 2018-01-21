const express = require('express');
const app =  express();

const produsctsRoute = require('./api/route/products');

app.use('/products', produsctsRoute);

module.exports = app;
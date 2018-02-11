const express = require('express');
const app =  express();

const produsctsRoute = require('./api/route/products');
const ordersRoute = require('./api/route/orders');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//mongoose.connect("mongodb+srv://djura:zxr328@cluster0-skfcg.mongodb.net/test");
mongoose.connect("mongodb://djura:zxr328@cluster0-shard-00-00-skfcg.mongodb.net:27017,cluster0-shard-00-01-skfcg.mongodb.net:27017,cluster0-shard-00-02-skfcg.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/products', produsctsRoute);
app.use('/orders', ordersRoute);

module.exports = app;
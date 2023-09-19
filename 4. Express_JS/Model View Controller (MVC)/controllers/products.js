const express = require('express');
const path = require('path');
// const router = express.Router();
const rootDir = require('../util/path');
// const product = [];

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}

exports.getProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
}

exports.getHelp = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'help.html'));
}

exports.postHelp = (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
}


const express = require('express');
const productController = require('../controllers/products')

const router = express.Router();


router.get('/help', productController.getHelp);
router.post('/help', productController.postHelp);

module.exports = router;

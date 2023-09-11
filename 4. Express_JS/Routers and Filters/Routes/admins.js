const express = require('express');
const router = express.Router();

// Import the 'shop.js' router
const shopRoutes = require('./shop.js');

//   /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    // res.send('<h1> This "Add Product" <h1>');
    res.send(
    '<form action="/admins/add-product" method="POST"><input type="text" name="product" placeholder="product" ><input type="text" name="size" placeholder="size"><button type="submit">Add Product</button></form>')
});


//   /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
})

// Use the 'shop.js' router
router.use(shopRoutes);

module.exports = router;

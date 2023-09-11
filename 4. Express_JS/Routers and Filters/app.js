
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const adminRoutes = require('./Routes/admins.js');
const shopRoutes = require('./Routes/shop.js')

app.use(bodyParser.urlencoded({extended : false}));

// Redirect the root URL to '/shop'
app.get('/', (req, res, next) => {
    res.redirect('/shop');
});

// Filtering Paths --> ('/admin')
app.use('/admins', adminRoutes);
app.use(shopRoutes);

// Adding a 404 Error page 
app.use((req, res, next) => {
    res.status(404).send('<h1>Page Note Found </h1>');
})

app.listen(3000);

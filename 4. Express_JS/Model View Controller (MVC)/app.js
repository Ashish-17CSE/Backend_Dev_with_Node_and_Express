const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const adminRoutes = require('./Routes/admins.js');
const shopRoutes = require('./Routes/shop.js')
const helpRoutes = require('./Routes/help.js')


app.use(bodyParser.urlencoded({extended : false}));

app.use(express.static(path.join(__dirname, 'style')))

app.use('/admins', adminRoutes);
app.use(shopRoutes);
app.use('/contactust', helpRoutes);

const errorController = require('./controllers/error')
app.use(errorController.get404)

app.listen(3000);

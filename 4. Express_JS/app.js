// const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended : false}));

/*app.use('/', (req, res, next) => {
    // console.log("In the Middleware!");
    console.log('This always runs !');
    next(); // Allows the request to continue to the next middleware in line.
}); */

app.use( '/add-product', (req, res, next) => {
    // res.send('<h1> This "Add Product" <h1>');
    res.send('<form action="/product" method="POST"><input type="text" name="product" placeholder="product" ><input type="text" name="size" placeholder="size"><button type="submit">Add Product</button></form>')
});

app.use('/product', (req, res, next)=> {
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req, res, next) => {
    // console.log("In another Middleware!");
    res.send('<h1> Hello from Express ! <h1>');
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);

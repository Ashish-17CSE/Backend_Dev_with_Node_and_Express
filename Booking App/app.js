const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');
const userRoutes = require('./routes/users')

const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoutes)


sequelize
  .sync()
  .then(result => {
    console.log('Database connected successfully.');
    app.listen(4000);
  })
  .catch(err => console.error('Database connection error:', err));

// Catch-all route handler for undefined routes
app.use((req, res) => {
  res.status(404).send('<h1 style="text-align: center; color: red; margin-top: 20%;">Page not found!</h1>');
});
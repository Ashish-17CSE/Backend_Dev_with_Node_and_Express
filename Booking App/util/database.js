const  Sequelize = require('sequelize');

// Create a new Sequelize instance with your database configuration
const sequelize = new Sequelize({
  dialect: 'mysql', 
  host: 'localhost',
  username: 'root',
  password: 'Ashish',
  database: 'booking_app',
});

module.exports = sequelize;

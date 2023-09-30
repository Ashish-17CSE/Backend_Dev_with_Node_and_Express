const DataTypes  = require('sequelize');

const sequelize = require('../util/database');

const user_db = sequelize.define('user_db', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    UserName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PhoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = user_db;

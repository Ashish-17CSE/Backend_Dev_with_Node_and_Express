const DataTypes  = require('sequelize');

const sequelize = require('../util/database');

const meeting = sequelize.define('meeting', {
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
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    MeetLink: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = meeting;

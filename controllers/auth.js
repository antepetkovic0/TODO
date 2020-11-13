const { DataTypes } = require("sequelize/types");
const { sequelize } = require("../models");

module.exports = (sequelize, DataTypes) => {
    const Auth = sequelize.define('Auth', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            
        }
    })
}
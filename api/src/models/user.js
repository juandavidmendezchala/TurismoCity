const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthdate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING, //cliente / proveedor
            allowNull: false      
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        votes: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        state: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        picture:{
            type: DataTypes.STRING,
            allowNull: true
        },       
    })
}
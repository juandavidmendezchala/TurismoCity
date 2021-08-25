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
        country: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
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
        rating: {
            type: DataTypes.DECIMAL,
            allowNull: true
        }
    })
}
const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('emailsends', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allownull: false
        },
        time: {
            type: DataTypes.STRING,
            allownull: false
        },
        emailsend: {
            type: DataTypes.STRING,
            allownull: true
        }
    })
}
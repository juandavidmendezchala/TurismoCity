const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('airports', {
        id: {
            type: DataTypes.STRING(3),
            primaryKey: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
        {
            timestamps: false,
        })
}
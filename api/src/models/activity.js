const {DataTypes, Sequelize} = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('activity', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.ARRAY(DataTypes.DATEONLY),
            allowNull: true
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        places: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        initialTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        comments: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: true
        },
        passengers: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: true
        },
        images: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    })
}
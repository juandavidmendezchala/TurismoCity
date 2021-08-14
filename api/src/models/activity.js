const {DataTypes,  Sequelize} = require('sequelize')

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
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
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
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        images: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        timestamps: false
    })
}
const {DataTypes, Sequelize} = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('activitie', {
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
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        images: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    })
}
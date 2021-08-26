const { DataTypes, Sequelize} = require('sequelize')

module.exports = function (sequelize) {
    return sequelize.define(
        "promo",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING
            }
        }, 
        {
            timestamps: false
        }
    )
}
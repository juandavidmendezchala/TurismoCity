const {DataTypes, Sequelize} = require('sequelize')

module.exports = function(sequelize) {
    return sequelize.define('type', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    })
}
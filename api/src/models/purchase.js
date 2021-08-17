const {DataTypes,  Sequelize} = require('sequelize')

module.exports = function(sequelize) {
    return sequelize.define('purchase', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        
        fecha: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }

    })
}
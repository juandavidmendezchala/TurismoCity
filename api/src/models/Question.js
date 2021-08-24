const {DataTypes,  Sequelize} = require('sequelize')

module.exports = function(sequelize) {
    return sequelize.define('question', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        
        query: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }

    })
}
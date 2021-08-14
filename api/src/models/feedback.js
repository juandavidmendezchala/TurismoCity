const {DataTypes,  Sequelize} = require('sequelize')

module.exports = function(sequelize) {
    return sequelize.define('feedback', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        
        commentary: {
            type: DataTypes.STRING,
            allowNull: false
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    })
}
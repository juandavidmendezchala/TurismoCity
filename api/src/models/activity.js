const {DataTypes,  Sequelize} = require('sequelize')

module.exports = function(sequelize) {
    return sequelize.define('activity', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        activity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        initialTime: {
            type: DataTypes.TIME,
            allowNull: false
        }
    })
}
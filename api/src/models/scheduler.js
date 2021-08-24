const {DataTypes, Sequelize} = require('sequelize')

// Defino modelo de agenda
module.exports = function(sequelize) {
    return sequelize.define('scheduler', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fechaini: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        fecharec: {
            type: DataTypes.DATEONLY,
            allowNull: false    
        },
        tiempo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        notas: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}
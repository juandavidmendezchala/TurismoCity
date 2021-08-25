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
        horario: {
            type: DataTypes.STRING,
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
        enviado: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}
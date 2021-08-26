const {DataTypes, Sequelize} = require('sequelize')


// Defino modelo de agenda
module.exports = function(sequelize) {
    return sequelize.define('whishes', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fechaini: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        fechafin: {
            type: DataTypes.DATEONLY,
            allowNull: false          
        },
        destino: {
            type: DataTypes.STRING,
            allowNull: false
        },
        presupuesto: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        notas: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cupos: {
            type: DataTypes.INTEGER,
            allowNull: true           
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}
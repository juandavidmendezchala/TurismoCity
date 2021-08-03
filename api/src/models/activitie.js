const {DataTypes} = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('activitie', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        agency_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}
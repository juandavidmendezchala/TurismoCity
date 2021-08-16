const {Sequelize, DataTypes } = require('sequelize');
//var {Sequelize, DataTypes} = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    //console.log('sequelize',sequelize);
   sequelize.define('photo', {
    idPhoto: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
   }, 
   url: {
       type: DataTypes.STRING,
       allowNull: false
   }

  });
};
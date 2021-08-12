const {Sequelize, DataTypes } = require('sequelize');
//var {Sequelize, DataTypes} = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    //console.log('sequelize',sequelize);
    return sequelize.define('package', {
    idPackete: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
   }, 
   provincia: {
       type: DataTypes.STRING,
       allowNull: false
   },
   precio: {  //resumen del plato
       type: DataTypes.REAL,
       allowNull: false 
   }, 
   cupo: { //puntuacion
      type: DataTypes.INTEGER,
      allowNull: true
   },
   idPrestador: { //nivel de comida saludable
       type: DataTypes.INTEGER,
       allowNull: true
   },
   fechaInicio: { //paso a paso
       type: DataTypes.DATE,
       allowNull: true
   }
  });
};

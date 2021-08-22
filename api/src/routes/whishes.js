const { Router } = require('express');
const { Whishes, Activity } = require('../models/index');
const { Op } = require("sequelize");
const router = Router();

//obtener la agenda del usurio logueado
router.get('/whishes/:userid', async (req,res) => {
    try {
        const { userid } = req.params 
        const getAllWhishes = await Whishes.findAll({ where: 
          {userId: userid}
        });
        return res.send(getAllWhishes);
      } catch (err) {
        return res.send({
          message:
            "No se pudo obtener la agenda"+err,
        });
      }
})

//ingresar los datos a la agenda
router.post('/whishes', async (req,res) => {
  try {
      const { fechaini, fechafin, destino, presupuesto, notas, userid} = req.body
      const objSave = {
        fechafin: fechafin,
        fechaini: fechaini,
        destino: destino,
        presupuesto: presupuesto,
        notas: notas,
        userId: userid
      }
      const saveWhishes = await Whishes.create(objSave);
      return res.send(saveWhishes);
    } catch (err) {
      return res.send({
        message:
          "No se pudo guardar la agenda"+err,
      });
    }
})

//ver si puedo traer actividades coincidentes con la agenda 
router.get('/whishes/:destino/:fechini/:fechfin/:presup', async (req,res) => {
  try {
      const { destino, fechini, fechfin, presup } = req.params 
      const getAllActivity = await Activity.findAll({
        where: {
          city: destino,
          date: { 
            [Op.between]: [fechini, fechfin]
           },
          price: {
            [Op.between]: [0,presup]
          }
        }
      });
      return res.send(getAllActivity);
    } catch (err) {
      return res.send({
        message:
          "No se pudo obtener la agenda"+err,
      });
    }
})



module.exports = router;
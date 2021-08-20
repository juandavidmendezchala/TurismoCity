const { Router } = require("express");
const { Scheduler } = require("../models/index");
const { Op } = require("sequelize");

const router = Router();

router.get("/scheduler/:iduser", async (req, res) => {
  try {
    let getAllSchedulers = await Scheduler.findAll({
      where: { userId: req.params.iduser },
    });
    return res.send(getAllSchedulers);
  } catch (err) {
    return res.send({
      message: "No se pudo obtener la agenda" + err,
    });
  }
});

router.post("/scheduler", async (req, res) => {
  try {
    let { fechaini, fecharec, tiempo, notas, userid } = req.body;
    let objGuardar = {
      fechaini,
      fecharec,
      tiempo,
      notas,
      userId: userid,
    };
    let Guardado = await Scheduler.create(objGuardar);
    return res.send(Guardado);
  } catch (err) {
    return res.send({
      message: "No se pudo guardar la agenda" + err,
    });
  }
});

router.put("/scheduler", async (req, res) => {
    try {
      let { idSched, fechaini, fecharec, tiempo, notas } = req.body;
      let objGuardar = {
        fechaini,
        fecharec,
        tiempo,
        notas,
      };
      let modificado = await Scheduler.update(objGuardar, { where: { id: idSched }});
      return res.send(modificado);
    } catch (err) {
      return res.send({
        message: "No se pudo guardar la agenda" + err,
      });
    }
  });

router.delete("/scheduler/:idSched", async (req,res) => {
    try {
        let { idSched } = req.params
        const eliminado = Scheduler.destroy({
            where: {
                id: idSched
            }
        })
        return res.send(eliminado)
    } catch (err) {
        return res.send({
          message: "No se pudo guardar la agenda" + err,
        });
      }
})

module.exports = router;

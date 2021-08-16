const { Router } = require('express');
const { Activity } = require('../models');
const router = Router();

// Esta ruta sirve para tener los datos de los aeropuertos para poder renderizarlos en el front y poder ofrecer sugerencias de aeropuerto, codigo o ciudad.
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const userActivities = await Activity.findAll({
        where: {
            userId: id
        }
    })
    res.send(userActivities)
})
router.put("/:idUser/:idPost/:status", async (req, res) => {
    const { idUser, idPost } = req.params
    const status = req.params.status
    console.log(idUser, idPost, status)
    await Activity.update({
        active: status
    }, {
        where: {
            userId: idUser,
            id: idPost
        }
    })

    res.send(console.log("Estado de la publicacions cambiado con exito"))
})
router.delete("/:idUser/:idPost", async (req, res) => {
    const { idUser, idPost } = req.params
    await Activity.destroy({
        where: {
            userId: idUser,
            id: idPost
        }
    })
})

module.exports = router;


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
router.put("/:idUser/:idPost", async (req, res) => {
    const [idUser, idPost] = req.params
    console.log(idUser, idPost)

    res.send()
})

module.exports = router;


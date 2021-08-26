const { Router } = require('express');
const { Activity, Purchase, User } = require('../models');
const { Op } = require("sequelize")
const router = Router();


router.get('/:id', async (req, res) => {
    const id = req.params.id
    const userActivities = await Activity.findAll({
        where: {
            userId: id
        }
    })
    res.send(userActivities)
})

router.get('/sales/:id', async (req, res) => {
    const id = req.params.id

    const result = await Activity.findAll({
        where: {
            userId: id
        },
        include: [{
            model: Purchase,
            include: [{
                model: User
            }]
        }],

    })
    res.send(result)
})
router.get('/salesInfo/:id', async (req, res) => {
    const id = req.params.id

    const result = await User.findAll({
        where: {
            id: id
        },
        include: [{
            model: Purchase,
        }]
    })


    res.send(result)
})
router.get('/specific/:id/:idPost', async (req, res) => {
    const id = req.params.id
    const idPost = req.params.idPost
    const specificPost = await Activity.findAll({
        where: {
            userId: id,
            id: idPost
        }
    })
    res.send(specificPost)
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


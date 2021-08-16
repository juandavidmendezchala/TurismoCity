

const {Router} = require('express');
const {FeedBack, Activity, User, Package} = require('../models/index')
const { Op } = require("sequelize");

const router = Router();

router.post('/', async(req, res) => {
     
    const {commentary, score, idUser, idAct} = req.body;

    const createFeed = await FeedBack.create({
        commentary,
        score
    })
    const findActivity = await Activity.findByPk(idAct)
    console.log('trae esto', findActivity)
    //const findUser = await User.findByPk(idUser)
    //console.log('trae otro', findUser)
    //await findActivity.addFeedBack(createFeed)
    //await findUser.addFeedBack(createFeed)

    return res.send(createFeed)
})

// [idusuario, idactividad, comentario, puntuacion]

// una actividad muchos comentarios
module.exports = router;
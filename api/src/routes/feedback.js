

const {Router} = require('express');
const {FeedBack, Activity, User, Package} = require('../models/index')
const { Op, where } = require("sequelize");

const router = Router();

router.post('/', async(req, res) => {
     
    const {commentary, score, idUser, idAct} = req.body;

    const createFeed = await FeedBack.create({
        commentary,
        score
    })
    const findActivity = await Activity.findOne(
        {where: {id: idAct}
    })
    console.log('trae esto', findActivity)
    //const findUser = await User.findByPk(idUser)
    const findUser = await User.findOne(
        {where: {id: idUser}
    })
    //console.log('trae otro', findUser)
    //await findActivity.setFeedBack(createFeed)
    await createFeed.setActivity(findActivity)
    await createFeed.setUser(findUser)
    //console.log('trae',findUser)

    return res.send(createFeed)
})

// [idusuario, idactividad, comentario, puntuacion]

// una actividad muchos comentarios
module.exports = router;

const {Router} = require('express');
const {FeedBack, Activity, User} = require('../models/index')
const { Op } = require("sequelize");

const router = Router();

router.post('/', async(req, res) => {
     
    const {userId, activityId} = req.body;

    const findActivity = await Activity.findByPk(activityId)
    const findUser = await User.findByPk(userId)
    console.log('trae esto', findActivity,'Y ESTO:',findUser)

    
    //const findUser = await User.findByPk(idUser)
    //console.log('trae otro', findUser)
    //await findActivity.addFeedBack(createFeed)
    //await findUser.addFeedBack(createFeed)
    
    await findActivity.addUser(findUser)
    return res.send(createFav)
})

// [idusuario, idactividad, comentario, puntuacion]

// una actividad muchos comentarios
module.exports = router;
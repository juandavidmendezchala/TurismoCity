const {Router} = require('express');
const {Activity, User, Question, Answer} = require('../models/index')
const { Op, where } = require("sequelize");
const user = require('../models/user');

const router = Router();

router.post('/', async(req, res) => {
     
    const {query, date, activityId, userId} = req.body;

    const createQuestion = await Question.create({
        query,
        date
    })

    const findActivity = await Activity.findOne(
        {where: {id: activityId}
    })

    //console.log('trae esto', findActivity)
    //const findUser = await User.findByPk(idUser)
    const findUser = await User.findOne(
        {where: {id: userId}
    })
    //console.log('trae otro', findUser)
    //await findActivity.setFeedBack(createFeed)
    await createQuestion.setActivity(findActivity)
    await createQuestion.setUser(findUser)
    //console.log('trae',findUser)

    return res.send(createQuestion)
})

router.get('/:idAct', async(req, res) => {
    let {
        idAct
    } = req.params;

    Question.findAll({
        where: {
          activityId: idAct
        },
        include: [{
          model: Answer,
          include: [{model:User}]
        }]
      })
    .then((resut) => 
    res.send(resut));
    
    
})



// [idusuario, idactividad, comentario, puntuacion]

// una actividad muchos comentarios
module.exports = router;
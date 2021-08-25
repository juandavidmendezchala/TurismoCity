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

router.delete('/delete/:idQuestion',async(req,res)=>{

    const {idQuestion} = req.params
    console.log('HOAAAAAA')
    
    /*const findActivity = await Activity.findByPk(activityId)
    const findUser = await User.findByPk(userId)
    console.log('trae esto', findActivity,'Y ESTO:',findUser)

    const removeFav = await findActivity.removeUser(findUser)
    const favoriteGet = await User.findByPk(userId,{include:Activity})
    return res.send(favoriteGet) */
    console.log('idque toma', idQuestion)

      const answer = await Answer.destroy({
        where: {
          questionId: idQuestion
        }
      });

      const question = await Question.destroy({
        where: {
          id: idQuestion
        }
      });
    
    //const removeFav = await findActivity.removeUser(findUser)
    //const favoriteGet = await User.findByPk(userId,{include:Activity})
    return res.send('se elimino')
    
    
})



// [idusuario, idactividad, comentario, puntuacion]

// una actividad muchos comentarios
module.exports = router;
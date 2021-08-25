const {Router} = require('express');
const {User, Question, Answer} = require('../models/index')
const { Op, where } = require("sequelize");
const user = require('../models/user');

const router = Router();

router.post('/', async(req, res) => {
     
    const {query, date, questionId, userId} = req.body;

    const createAnswer = await Answer.create({
        query,
        date
    })

    const findQuestion = await Question.findOne(
        {where: {id: questionId}
    })

    //console.log('trae esto', findActivity)
    //const findUser = await User.findByPk(idUser)
    const findUser = await User.findOne(
        {where: {id: userId}
    })
    //console.log('trae otro', findUser)
    //await findActivity.setFeedBack(createFeed)
    await createAnswer.setQuestion(findQuestion)
    await createAnswer.setUser(findUser)
    //console.log('trae',findUser)

    return res.send(createAnswer)
})



// [idusuario, idactividad, comentario, puntuacion]

// una actividad muchos comentarios
module.exports = router;
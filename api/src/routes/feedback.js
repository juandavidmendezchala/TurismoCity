

const {Router} = require('express');
const {FeedBack, Activity, User, Package} = require('../models/index')
const { Op, where } = require("sequelize");
const user = require('../models/user');

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
    console.log('trae otro', findUser)
    //await findActivity.setFeedBack(createFeed)
    await createFeed.setActivity(findActivity)
    await createFeed.setUser(findUser)
    //console.log('trae',findUser)

    return res.send(createFeed)
})

router.delete('/remove/:idComment',async(req,res)=>{
    let {idComment} = req.params

    await FeedBack.destroy({
        where: {id: idComment}
    })
    return res.send(FeedBack.findAll())

})

router.get('/user/:idUser', async(req,res) =>{
    let {idUser} = req.params
    const allComments = await FeedBack.findAll({
        where: {userId: idUser}
    })
    res.send(allComments)
})

router.get('/scoreUser/:idUser', async(req, res) => {
    let {
        idUser
    } = req.params;

    const scoreUser = await Activity.findAll({
        
        where: {
            userId: idUser
        },
        include: [{model: FeedBack}]
    })
    
    //console.log("ESTO ES scoreUser:",scoreUser)
    // if (scores.length===0) return res.send('Sin puntaje')
    // const prom = scores.reduce((accumulator, currentValue) => accumulator + currentValue) / scores.length
    var scores=[];
    scoreUser.forEach(act =>{
        if(act.feedbacks.length>0){
            act.feedbacks.forEach(feed => scores.push(feed.score) )
        }
    })
    console.log('ESTA ES LA LONGITUD DE SCORES',scores.length)
    if (scores.length>0) return res.json((scores.reduce((accumulator, currentValue) => accumulator + currentValue)/scores.length).toFixed(2))
    return res.send('No tiene puntaje')
})

router.get('/:id', async(req, res) => {
    let {
        id
    } = req.params;

    const findActivity = await FeedBack.findAll({
        include: [User],
        where: {
            activityId: id
        }
    })
    
    return res.send(findActivity)
})

// [idusuario, idactividad, comentario, puntuacion]

// una actividad muchos comentarios
module.exports = router;
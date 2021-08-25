

const {Router} = require('express');
const {Activity, User, Purchase} = require('../models/index')
const { Op, where } = require("sequelize");

const router = Router();

router.post('/', async(req, res) => {
     
    const {fecha, idUser, idAct} = req.body;

    const createPur = await Purchase.create({
        fecha
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
    await createPur.setActivity(findActivity)
    await createPur.setUser(findUser)
    //console.log('trae',findUser)

    return res.send(createPur)
})

router.get('/', async(req, res) => {
    const {idUser} = req.body
    /*Purchase.findAll(
        {where: 
            {userId: 2}
        ,
        include: {[Activity]}})*/
    Purchase.findAll({
            where: {
              userId: idUser
            },
            include: [{
              model: Activity,
            }]
          })
        .then((resut) => 
        res.send(resut));
    
})

router.get('/next/:idUser', async(req, res) => {
    const {idUser} = req.params
const fecha = Date.now();
const fechaActual = new Date(fecha);
console.log(fechaActual.toISOString().slice(0,10))
    Purchase.findAll({
            where: {
              userId: idUser
            },
            include: [{
              model: Activity,    
              where: {
                date: {
                    [Op.gte]: fechaActual.toISOString().slice(0,10)
                    //mayor a la fecha
                }
              }
            }]
          })
        .then((resut) => 
        res.send(resut));
    
})

router.get('/previous/:idUser', async(req, res) => {
  const {idUser} = req.params
console.log("ESTO ENTRA A /PREVIUS EN BACK",idUser)
const fecha = Date.now();
const fechaActual = new Date(fecha);
    Purchase.findAll({
            where: {
              userId: idUser
            },
            include: [{
              model: Activity,    
              where: {
                date: {
                    [Op.lte]: fechaActual.toISOString().slice(0,10)
                    //menor a la fecha
                }
              }
            }]
          })
        .then((resut) => 
        res.send(resut));
    
})


// [idusuario, idactividad, comentario, puntuacion]

// una actividad muchos comentarios
module.exports = router;
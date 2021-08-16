const {Router} = require('express');
const {Activity, User} = require('../models/index')
const { Op } = require("sequelize");

const router = Router();

router.post('/', async(req, res) => {
     
    const {userId, activityId} = req.body;

    const findActivity = await Activity.findByPk(activityId)
    const findUser = await User.findByPk(userId)
    console.log('trae esto', findActivity,'Y ESTO:',findUser)
    
    const createFav = await findActivity.addUser(findUser)
    return res.send(createFav)
})
router.get('/fav/:userId',async(req,res)=>{
    const {userId} = req.params;

    const favoriteGet = await User.findByPk(userId,{include:Activity})
    return res.send(favoriteGet)
})

router.delete('/delete/:userId/:activityId',async(req,res)=>{

    const {userId, activityId} = req.params
    
    const findActivity = await Activity.findByPk(activityId)
    const findUser = await User.findByPk(userId)
    console.log('trae esto', findActivity,'Y ESTO:',findUser)

    const removeFav = await findActivity.removeUser(findUser)
    const favoriteGet = await User.findByPk(userId,{include:Activity})
    return res.send(favoriteGet)
    
    
})

module.exports = router;
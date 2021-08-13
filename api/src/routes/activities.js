const {Router} = require('express');
const {Package, Activity, User} = require('../models/index')
const { Op } = require("sequelize");

const router = Router();

router.get('/', async(req, res) => {
    let {
        country,
        city,
        date,
        price,
        places,
        duration,
        initialTime
    } = req.body;
    const getActivities = await Activity.findAll({})
    res.send(getActivities)
})


router.get('/:id', async(req, res) => {
    let {id} = req.params;
    const activityDetail = await Activity.findOne({
        where: {
            id
        }
    })
    res.send(activityDetail)
})

router.post('/', async(req, res) => {
    let {
        email,
        name,
        date,
        description,
        price,
        places,
        duration,
        initialTime,
        images,
        country,
        city
    } = req.body;
    const createPack = await Activity.create({
        name,
        date,
        description,
        price,
        places,
        duration,
        initialTime,
        images,
        country,
        city,
        active: true 
    })
    const findUser = await User.findOne({
        where: {
            email
        }
    })
    await findUser.addActivity(createPack)
    return res.send(createPack)
})

module.exports = router;
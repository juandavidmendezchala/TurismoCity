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
    const getPackages = await Package.findAll({
        include: [Activity]
    })
    res.send(getPackages)
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
        description,
        date,
        price,
        places,
        duration,
        initialTime,
        images,
        country,
        city
    } = req.body;
    const createPack = await Package.create({
        name,
        description,
        date,
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
    await findUser.addPackage(createPack)
    return res.send(createPack)
})

router.post('/activity', async(req, res) => {
    let{
        id,
        activity,
        description, //image
        initialTime
    } = req.body
    const createActivity = await Activity.create({
        activity,
        description,
        initialTime
    })
    const findPackage = await Package.findOne({
        where: {
            id
        }
    })
    await findPackage.addActivity(createActivity)
    return res.send(createActivity)
})

module.exports = router;
const {Router} = require('express');
const {Package, Activity, User} = require('../models/index')
const { Op } = require("sequelize");

const router = Router();


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

module.exports = router;
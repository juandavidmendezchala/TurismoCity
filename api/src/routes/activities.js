const {Router} = require('express');
const {Activity, User} = require('../models/index')

const router = Router();

router.get('/', async(req, res) => {
    let {
        filter,
        order
    } = req.body;
    if(order) {
        const getActivities = await Activity.findAll({
            order: [
                [filter, order]
            ]            
        
        })
        return res.send(getActivities)
    }
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
        comments,
        passengers,
        images,
        country,
        city
    } = req.body;
    const createPack = await Activity.create({
        name,
        description,
        date,
        price,
        places,
        duration,
        initialTime,
        comments,
        passengers,
        images,
        country,
        city 
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
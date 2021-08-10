const {Router} = require('express');
const {Activity, User} = require('../models/index')

const router = Router();

router.get('/', async(req, res) => {
    let {
        filter,
        orderPrice
    } = req.body;

    if(orderPrice.length > 1) {
        const getActivities = await Activity.findAll({
            
        
        })
        return res.send(getActivities)
    }

    

    const getActivities = await Activitie.findAll({})
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
/*     await findUser.addActivity(createPack) */
    return res.send(createPack)
})

module.exports = router;
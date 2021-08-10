const {Router} = require('express');
const {Activity, User} = require('../models/index')

const router = Router();

router.get('/', async(req, res) => {
    let {
        filter,
        order,
        country,
        city
    } = req.body;
    if(order) {
        const findBy = city? {
            where: {
                city
            },
            order: [
                [filter, order]
            ]            
        
        } :  
        {
            where: {
                country
            },
            order: [
                [filter, order]
            ]            
        
        }
        const findByOrder = {order: [[filter, order]]}
        const getActivities = await Activity.findAll(findBy || findByOrder)
        return res.send(getActivities)
    }
    const findBy = city? {
        where: {
            city
        }      
    } :  
    {
        where: {
            country
        }    
    }
    const getActivities = await Activity.findAll(findBy || {})
    return res.send(getActivities)
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
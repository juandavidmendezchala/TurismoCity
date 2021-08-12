const {Router} = require('express');
const {Activity, User} = require('../models/index')
const { Op } = require("sequelize");

const router = Router();

router.get('/', async(req, res) => {
    let {
        filter,
        order,
        country,
        city,
        startDate,
        endDate
    } = req.body;
    if(order) {
        const findBy = city? {
            where: {
                city, 
                date: {
                    [Op.between]: [startDate || "1999-01-01", endDate || "2025-01-01"],
                 }
            },
            order: [
                [filter, order]
            ]            
        
        } :  
        {
            where: {
                country,
                date: {
                    [Op.between]: [startDate || "1999-01-01", endDate || "2025-01-01"],
                 }
            },
            order: [
                [filter, order]
            ]            
        
        }
        const findByOrder = {order: [[filter, order]]}
        const getActivities = await Activity.findAll(findBy || findByOrder)
        return res.send(getActivities)
    }
    if(city || country) {
        const findBy = city? {
            where: {
                city,
                date: {
                    [Op.between]: [startDate || "1999-01-01", endDate || "2025-01-01"],
                 }
            }      
        } :  
        {
            where: {
                country,
                date: {
                    [Op.between]: [startDate || "1999-01-01", endDate || "2025-01-01"],
                 }
            }    
        }
        const getActivities = await Activity.findAll(findBy)
        return res.send(getActivities)
    }    
    const getActivities = await Activity.findAll({})
    return res.send(getActivities)
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
        price,
        places,
        duration,
        initialTime,
        
        country,
        city
    } = req.body;
    const createPack = await Activity.create({
        name,
        
        date,
        price,
        places,
        duration,
        initialTime,
        
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
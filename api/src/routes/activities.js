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
        date
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
    /*const Op = Sequelize.Op;{
    where: {
        createdAt: {
          [Op.between]: ["2018-07-08T14:06:48.000Z", "2019-10-08T22:33:54.000Z"]
        }
      }}*/
     /* if (date.desde != '') {
      const findByDate = date? {
        query.push({

            procesador_fecha: { 
              [Op.between]: [date.desde + ' 00:00', date.hasta + ' 23:59'],
            },

        })
    }:*/
    const dbresp = await Table.findAll({
        attributes: [date],
        where: {
          createdAt: {
             [Op.between]: [startDate, endDate],
          },
        },
        logging: console.log,
        raw: true,
        order: [['createdAt', 'ASC']],
        // limit: count,
      });
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
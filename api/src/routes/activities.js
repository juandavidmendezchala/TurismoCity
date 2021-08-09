const {Router} = require('express');
const {Activitie, User, useractivities} = require('../models/index')

const router = Router();


router.post('/post', async(req, res) => {
    let {
        email,
        name,
        description,
        price,
        images,
        country
    } = req.body;
    const createPack = await Activitie.create({
        name,
        description,
        price,
        images,
        country
    })
    const findUser = await User.findOne({
        where: {
            email
        }
    })
    findUser.addActivitie(createPack)
    return res.send(createPack)
})

module.exports = router;
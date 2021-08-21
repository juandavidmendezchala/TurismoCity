const {Router} = require('express');
const {Promo} = require('../models/index')

const router = Router();

router.post('/', async(req, res) => {
    let {
        title,
        description
    } = req.body;

    const createPromo = await Promo.create({
        title,
        description
    })
    return res.send(createPromo)
})

router.get('/', async(req, res) => {
    const getPromos = await Promo.findAll({limit: 6})
    return res.send(getPromos)
})

module.exports = router;
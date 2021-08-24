const {Router} = require('express')
const {Type} = require('../models/index')
const data = require('./typeData')

const router = Router();

router.get('/', async(req, res) => {
    const createTypes = await Type.create(data.types)
    return res.send(createTypes)
})

module.exports = router;
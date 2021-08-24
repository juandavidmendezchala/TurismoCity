const {Router} = require('express')
const {Type} = require('../models/index')
const data = require('./typeData')

const router = Router();

router.get('/', async(req, res) => {
    const types = await Type.findAll({})
    if(types[0]) {
        return res.send(types)
    } else {
        await data.types.forEach(type => {
            Type.create(type)        
        });
    }
    return res.send("Created")
})

module.exports = router;
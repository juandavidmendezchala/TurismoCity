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
    const getPromos = await Promo.findAll({})
    return res.send(getPromos)
})

router.put('/put/:id', async (req, res) => {
    let {
         id
     } = req.params
     let {
        title,
        description
     } = req.body
    await Promo.update({
        title,
        description
    }, {
        where: {
            id
        }
    })
    return res.send("Estado de la publicación cambiado con exito")
})

router.delete('/delete/:id', async (req, res) => {
    let { id } = req.params;
    await Promo.destroy({
        where: {
            id
        }
    })
    return res.send("Se ha eliminado con éxito")
})

module.exports = router;
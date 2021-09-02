const { Router } = require('express');
const axios = require('axios')
const {APIKEYNEWS} = require('../utils/config')

const router = Router();

router.get('/', async(req, res) => {
    const url = `http://api.mediastack.com/v1/news?access_key=${APIKEYNEWS}&languages=es&keywords=coronavirus turismo vacuna  -muertes&limit=15&sort=published_asc`
    const {data} = await axios.get(url)
    return res.send(data)
})

module.exports = router;
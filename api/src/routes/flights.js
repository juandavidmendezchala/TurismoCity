const {Router} = require('express');
const axios = require('axios');
const {APIKEY} = require('../utils/config/index')

const router = Router();


router.get('/', async(req, res, next) => {
    let {
        way,
        fromcountry,
        tocountry,
        fromdate,
        todate,
        classflight,
        currency
    } = req.body
    const {data} = await axios.get(`https://api.flightapi.io/onewaytrip/${APIKEY}/${fromcountry}/${tocountry}/${fromdate}/2/0/1/${classflight}/${currency}`)
    res.send(data)

})

module.exports = router;
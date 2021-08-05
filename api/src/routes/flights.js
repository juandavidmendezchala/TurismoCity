const {Router} = require('express');
const axios = require('axios');
const {APIKEY} = require('../utils/config/index')

const router = Router();


router.get('/', async(req, res, next) => {
    let {
        roundTrip,
        fromCountry,
        toCountry,
        fromDate,
        toDate,
        classFlight,
        currency
    } = req.body
    const request = roundTrip ? 
    `https://api.flightapi.io/roundtrip/${APIKEY}/${fromCountry}/${toCountry}/${fromDate}/${toDate}/2/0/1/${classFlight}/${currency}`:
    `https://api.flightapi.io/onewaytrip/${APIKEY}/${fromCountry}/${toCountry}/${fromDate}/2/0/1/${classFlight}/${currency}`
    const {data} = await axios.get(request)
    res.send(data)
})

module.exports = router;
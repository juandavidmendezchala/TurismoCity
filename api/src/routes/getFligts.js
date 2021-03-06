const axios = require('axios');
const {Router} = require('express');
const apiKey2 = "612716d4747a9a05325621c9"
const apiKey3 = "61270317747a9a05325621c6"
const {APIKEYFLIGHT} = require('../utils/config')

const router = Router();

router.get('/:fromPlace/:toPlace/:fromDate/:adults/:kids/:babies/:classFlight/:currency', async(req, res) => {
    const {
        fromPlace,
        toPlace,
        fromDate,
        adults,
        kids,
        babies,
        classFlight,
        currency
    } = req.params
    const url = `https://api.flightapi.io/onewaytrip/${APIKEYFLIGHT}/${fromPlace}/${toPlace}/${fromDate}/${adults}/${kids}/${babies}/${classFlight}/${currency}`
    const {data} = await axios.get(url)
    return res.send(data)
})

router.get('/roundtrip/:fromPlace/:toPlace/:fromDate/:toDate/:adults/:kids/:babies/:classFlight/:currency', async(req, res) => {
    const {
        fromPlace,
        toPlace,
        fromDate,
        toDate,
        adults,
        kids,
        babies,
        classFlight,
        currency
    } = req.params
    const url = `https://api.flightapi.io/roundtrip/${APIKEYFLIGHT}/${fromPlace}/${toPlace}/${fromDate}/${toDate}/${adults}/${kids}/${babies}/${classFlight}/${currency}`
    const {data} = await axios.get(url)
    return res.send(data)
})



module.exports = router;

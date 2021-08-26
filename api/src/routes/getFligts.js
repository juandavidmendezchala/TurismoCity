const { axios } = require('axios');
const {Router} = require('express');
const apiKey2 = "612716d4747a9a05325621c9"

const router = Router();

router.use('/:fromPlace/:toPlace/:fromDate/:adults/:kids/:babies/:classFlight/:currency', async(req, res) => {
    let {
        fromPlace,
        toPlace,
        fromDate,
        adults,
        kids,
        babies,
        classFlight
    } = req.params
    const {data} = await axios.get(`https://api.flightapi.io/onewaytrip/${apiKey2}/${fromPlace}/${toPlace}/${fromDate}/${adults}/${kids}/${babies}/${classFlight}/${currency}`)
    return res.send(data)
})



module.exports = router;

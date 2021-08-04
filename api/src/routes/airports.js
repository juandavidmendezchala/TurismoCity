const { Router } = require('express');
const airports = require('../../../airports.json')
const router = Router();


router.get('/', (req, res) => {
    const allAirports = airports
    res.send(allAirports)
})

module.exports = router;
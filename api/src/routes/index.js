const { Router } = require('express');

const flightsRoutes = require('./flights.js');
const airportsRoutes = require('./airports')

const router = Router();

router.use('/flights', flightsRoutes)
router.use('/allAirports', airportsRoutes)

module.exports = router;
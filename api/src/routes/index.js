const { Router } = require('express');

const flightsRoutes = require('./flights.js');
const airportsRoutes = require('./airports')
const usersRoutes = require('./users')

const router = Router();

router.use('/flights', flightsRoutes)
router.use('/allAirports', airportsRoutes)
router.use(usersRoutes)

module.exports = router;
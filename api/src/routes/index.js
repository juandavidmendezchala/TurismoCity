const { Router } = require('express');

const flightsRoutes = require('./flights.js');
const airportsRoutes = require('./airports')
const usersRoutes = require('./user')

const router = Router();

router.use('/flights', flightsRoutes)
router.use('/allAirports', airportsRoutes)
router.use('/user', usersRoutes)

module.exports = router;
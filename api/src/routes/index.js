const {Router} = require('express');

const flightsRoutes = require('./flights.js');
const usersRoutes = require('./users')

const router = Router();

router.use('/flights', flightsRoutes)
router.use(usersRoutes)

module.exports = router;
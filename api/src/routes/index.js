const { Router } = require('express');

const flightsRoutes = require('./flights.js');
const airportsRoutes = require('./airports')
const usersRoutes = require('./user')
const activityRoutes = require('./activities')
const feedbackRouter = require('./feedback')
const router = Router();
//const {FeedBack} = require('../models/index')


// router.use('/flights', flightsRoutes.getAll)
//const apiRecipe = axios.get(`https://api.flightapi.io/roundtrip/${KEY_API}/${salida}/${llegada}/${fechaSalida}/${fechaRegreso}/${numAdultos}/${numNinios}/${numBebes}/${claseCabina}/${moneda}`)


// router.use('/flights', flightsRoutes)

router.use(usersRoutes)

router.use('/allAirports', airportsRoutes)
router.use('/user', usersRoutes)
router.use('/activity', activityRoutes)
router.use('/feedBack', feedbackRouter)

module.exports = router;
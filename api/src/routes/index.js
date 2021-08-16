const { Router } = require('express');

const flightsRoutes = require('./flights.js');
const airportsRoutes = require('./airports')
const usersRoutes = require('./user')
const activyRoutes = require('./activities')
const suppliersRoutes = require('./suppliers')
const checkout = require("./checkout")

const router = Router();

// router.use('/flights', flightsRoutes.getAll)
//const apiRecipe = axios.get(`https://api.flightapi.io/roundtrip/${KEY_API}/${salida}/${llegada}/${fechaSalida}/${fechaRegreso}/${numAdultos}/${numNinios}/${numBebes}/${claseCabina}/${moneda}`)

// router.use('/flights', flightsRoutes)

// router.use(usersRoutes)

router.use('/allAirports', airportsRoutes)
router.use('/user', usersRoutes)
router.use('/activity', activyRoutes)
router.use('/suppliers', suppliersRoutes)
router.use("/checkout", checkout)


module.exports = router;

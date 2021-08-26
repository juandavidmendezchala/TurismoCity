const { Router } = require('express');
const flightsRoutes = require('./flights.js');
const airportsRoutes = require('./airports')
const usersRoutes = require('./user')
const favoriteRouter = require('./favorites')
const feedbackRouter = require('./feedback')
const activyRoutes = require('./activities')
const suppliersRoutes = require('./suppliers')
const checkout = require("./checkout")
const purchaseRoutes = require('./purchase')
//Agrego de constante para Agenda
const schedulerRoutes = require('./scheduler')
//Agrego lista de deseos
const whishesRoutes = require('./whishes')
const questionRoutes = require('./question')
const answerRoutes = require('./answer')

//Agrego rutas de emailes
const emailSendRoutes = require('./sendemails')
const promoRoutes = require('./promo')
const typesRoutes = require('./type')


const router = Router();
//const {FeedBack} = require('../models/index')

// router.use('/flights', flightsRoutes.getAll)
//const apiRecipe = axios.get(`https://api.flightapi.io/roundtrip/${KEY_API}/${salida}/${llegada}/${fechaSalida}/${fechaRegreso}/${numAdultos}/${numNinios}/${numBebes}/${claseCabina}/${moneda}`)

// router.use('/flights', flightsRoutes)

// router.use(usersRoutes)

router.use('/allAirports', airportsRoutes)
router.use('/user', usersRoutes)
router.use('/favorites', favoriteRouter)
router.use('/feedBack', feedbackRouter)
router.use('/activity', activyRoutes)
router.use('/suppliers', suppliersRoutes)
router.use("/checkout", checkout)
router.use('/promo', promoRoutes)
router.use('/types', typesRoutes)

router.use('/purchase', purchaseRoutes)
router.use('/purchase', purchaseRoutes)
router.use('/question', questionRoutes)
router.use('/answer', answerRoutes)
// Rutas de scheduler
router.use(schedulerRoutes)
// Rutas de deseos
router.use(whishesRoutes)
// Rutas de emails
router.use(emailSendRoutes)

module.exports = router;

const {Router} = require('express');

const flightsRoutes = require('./flights.js');
const usersRoutes = require('./users')

const router = Router();

<<<<<<< HEAD
router.use('/flights', flightsRoutes.getAll)
//const apiRecipe = axios.get(`https://api.flightapi.io/roundtrip/${KEY_API}/${salida}/${llegada}/${fechaSalida}/${fechaRegreso}/${numAdultos}/${numNinios}/${numBebes}/${claseCabina}/${moneda}`)

=======
router.use('/flights', flightsRoutes)
router.use(usersRoutes)
>>>>>>> 61c5a534f95264f3a0517c8b501c7bcdde9d4438

module.exports = router;
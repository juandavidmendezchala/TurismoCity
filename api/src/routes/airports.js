const { Router } = require('express');
const airports = require('../../../airports.json')
const router = Router();

// Esta ruta sirve para tener los datos de los aeropuertos para poder renderizarlos en el front y poder ofrecer sugerencias de aeropuerto, codigo o ciudad.
router.get('/', (req, res) => {
    const allAirports = airports.filter(e => e.type === "Airports")
    console.log(allAirports.length)
    console.log(airports.length)
    res.send(allAirports)
})

module.exports = router;
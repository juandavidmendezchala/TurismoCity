const { Router } = require('express');
const axios = require('axios')
const fetch = require('node-fetch');

const { APIKEY } = require('../utils/config/index');
const { REACT_APP_FLIGHT_API } = require('../../../client/src/store/Consts/Consts');

const router = Router();
const KEY_API = '612930ec747a9a05325624f3'

function getAll(req, res, next) {

    //legs
    //departureDateTime -> fecha de salida
    //arrivalDateTime -> fecha de llegada
    //departureTime -> hora de salida
    //arrivalTime -> hora de llegada
    //duration -> duracion
    //departureAirportCode -> codigo aeropuesto de salida
    //arrivalAirportCode -> codigo aeropuesto de llegada

    //stopoverAirportCodes -> codigo de aeropuesto de llegada
    //stopoversCount -> escala (cantidad de escala ej 1)
    //departureTimeMinutes -> hora de salida en minitos 
    //overnight -> (true/false) -> durante la noche

    // fares
    //price.totalAmount
    const salida = req.params.salida;
    const llegada = req.params.llegada;
    const fechaSalida = req.params.fechaSalida;
    const fechaRegreso = req.params.fechaRegreso;
    const numAdultos = req.params.numAdultos;
    const numNinios = req.params.numNinios;
    const numBebes = req.params.numBebes;
    const claseCabina = req.params.claseCabina;
    const moneda = req.params.moneda;

    //solo ida
    if (!fechaRegreso) {
        //https://api.flightapi.io/onewaytrip/YOURAPIKEY/LHR/LAX/2019-10-11/2/0/1/Economy/USD
        axios.get(`${REACT_APP_FLIGHT_API}/roundtrip/${KEY_API}/${salida}/${llegada}/${fechaSalida}/${numAdultos}/${numNinios}/${numBebes}/${claseCabina}/${moneda}`)
            .then(response => {

                res.send(response.data)
            });

    }

    axios.get(`${REACT_APP_FLIGHT_API}/roundtrip/${KEY_API}/${salida}/${llegada}/${fechaSalida}/${fechaRegreso}/${numAdultos}/${numNinios}/${numBebes}/${claseCabina}/${moneda}`)
        .then(response => {

            res.send(response.data)
        });
}
router.get('/', async (req, res, next) => {
    let {
        roundTrip,
        fromCountry,
        toCountry,
        fromDate,
        toDate,
        classFlight,
        currency
    } = req.body
    const request = roundTrip ?
        `${REACT_APP_FLIGHT_API}/roundtrip/${APIKEY}/${fromCountry}/${toCountry}/${fromDate}/${toDate}/2/0/1/${classFlight}/${currency}` :
        `${REACT_APP_FLIGHT_API}/onewaytrip/${APIKEY}/${fromCountry}/${toCountry}/${fromDate}/2/0/1/${classFlight}/${currency}`
    const { data } = await axios.get(request)
    res.send(data)
})

//module.exports = router;
module.exports = {
    getAll
};

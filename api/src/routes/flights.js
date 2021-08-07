const {Router} = require('express');
const axios = require('axios')
const fetch = require('node-fetch');


const router = Router();
const KEY_API = '6100341367b32f6d377e967d'

function getAll (req,res, next) {
  
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
        axios.get(`https://api.flightapi.io/roundtrip/${KEY_API}/${salida}/${llegada}/${fechaSalida}/${numAdultos}/${numNinios}/${numBebes}/${claseCabina}/${moneda}`)
        .then(response => {
  
            res.send(response.data)
        }); 

    }
    
    axios.get(`https://api.flightapi.io/roundtrip/${KEY_API}/${salida}/${llegada}/${fechaSalida}/${fechaRegreso}/${numAdultos}/${numNinios}/${numBebes}/${claseCabina}/${moneda}`)
      .then(response => {

          res.send(response.data)
      }); 
}

//module.exports = router;
module.exports = {
    getAll
 };
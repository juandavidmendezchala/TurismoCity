import axios from 'axios';
import airlinesLogo from '../../airlines.json';
import { REACT_APP_API } from '../Consts/Consts';
export const GET_FLIGHTS = "GET_FLIGHTS";
const apiKey = "610ed01e747a9a053255e81f"//USADA
const apiKey2 = "610ecfda747a9a053255e81e"//USADA
const apiKey3 = "610ed044747a9a053255e820"//USADA
const apiKey4 = "61106959747a9a053255eb0a"//USADA
const apiKey5 = "61106983747a9a053255eb0b"//USADA
const apiKey6 = "61200571747a9a0532560f12"//USADA
const apiKey7 = "61198e61747a9a053255ffdf"
const apiKey8 = "612702f5747a9a05325621c5" 
const apiKey9 = "61270317747a9a05325621c6" 
const apiKey10 = "61270265747a9a05325621c3"
const apiKey11 = "61270220747a9a05325621c2"
const apiKey12 = "6126c2aa747a9a0532561ea2"

export function getFlights(p, index = 1) {

  console.log('ESTO LLEGA A GETFLIGHTS: ' + p)
  index = index + 1;
  if (p.way === 'roundtrip') {
    console.log('ENTRO CON: ', p.way)
    return function (dispatch) {
      return axios.get(`https://api.flightapi.io/roundtrip/${apiKey7}/${p.fromPlace}/${p.toPlace}/${p.fromDate}/${p.toDate}/${p.adults}/${p.kids}/${p.babies}/${p.classFlight}/${p.currency}`)
        .then(response => response.data)
        .then(json => {
          if (json.message) {
            var arregloFlights = [json];
          } else {
            var airlinesLogosIda = '';
            var airlinesLogosVuelta = '';
            var arregloFlights = json.trips?.map(combinacion => {
              var vueloIda = json.legs?.find(vuelo => combinacion.legIds[0] == vuelo.id)
              var vueloVuelta = json.legs?.find(vuelo => combinacion.legIds[1] == vuelo.id)
              var linkRedireccion = json.fares?.find(fare => combinacion.id === fare.tripId)
              var airlineIda = airlinesLogo?.find(air => air.id === vueloIda.airlineCodes[0])
              var airlineVuelta = airlinesLogo?.find(air => air.id === vueloVuelta.airlineCodes[0])
              var airport1 = json.airports?.find(airport => airport.code === vueloIda.departureAirportCode)
              var airport2 = json.airports?.find(airport => airport.code === vueloIda.arrivalAirportCode)
              var city1 = json.cities?.find(city => city.code === airport1.cityCode)
              var city2 = json.cities?.find(city => city.code === airport2.cityCode)
              vueloIda.stopoverCode !== 'DIRECT' ? (airlinesLogosIda = vueloIda.segments.map(segmento => airlinesLogo?.find(air => air.id === segmento.airlineCode))) : (airlinesLogosIda = null)
              vueloVuelta.stopoverCode !== 'DIRECT' ? (airlinesLogosVuelta = vueloVuelta.segments.map(segmento => airlinesLogo?.find(air => air.id === segmento.airlineCode))) : (airlinesLogosVuelta = null)


              return ({ "moneda": json.search.currencyCode, city1, city2, airlineIda, airlineVuelta, linkRedireccion, vueloIda, vueloVuelta, "cities": json.cities, "airports": json.airports, airlinesLogosIda, airlinesLogosVuelta })
            }
            )
          }

          console.log(arregloFlights)
          dispatch({ type: GET_FLIGHTS, payload: arregloFlights });
        })
        .catch(error => dispatch({ type: GET_FLIGHTS, payload: [{ message: 'Campos invalidos' }] }));
    };
  }
  else{
    console.log('ENTRO CON: ', p.way)
    return function (dispatch) {
      return axios.get(`${REACT_APP_API}/getflights/${p.fromPlace}/${p.toPlace}/${p.fromDate}/${p.adults}/${p.kids}/${p.babies}/${p.classFlight}/${p.currency}`)
        .then(response => response.data)
        .then(json => {
          if (json.message) {
            var arregloFlights = [json];
          } else {
            var airlinesLogosIda = '';
            var arregloFlights = json.trips?.map(flight => {
              var vueloIda = json.legs?.find(vuelo => flight.legIds[0] == vuelo.id)
              var linkRedireccion = json.fares?.find(fare => flight.id === fare.tripId)
              var airlineIda = airlinesLogo?.find(air => air.id === vueloIda.airlineCodes[0])
              var airport1 = json.airports?.find(airport => airport.code === vueloIda.departureAirportCode)
              var airport2 = json.airports?.find(airport => airport.code === vueloIda.arrivalAirportCode)
              var city1 = json.cities?.find(city => city.code === airport1.cityCode)
              var city2 = json.cities?.find(city => city.code === airport2.cityCode)
              vueloIda.stopoverCode !== 'DIRECT' ? (airlinesLogosIda = vueloIda.segments.map(segmento => airlinesLogo?.find(air => air.id === segmento.airlineCode))) : (airlinesLogosIda = null)

              return ({ "moneda": json.search.currencyCode, city1, city2, airlineIda, linkRedireccion, vueloIda, "cities": json.cities, "airports": json.airports, airlinesLogosIda })
            }
            )
          }
          console.log(arregloFlights)
          dispatch({ type: GET_FLIGHTS, payload: arregloFlights });

        })
        .catch(error => dispatch({ type: GET_FLIGHTS, payload: [{ message: 'Campos invalidos' }] }));

    };

  }

};

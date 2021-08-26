import airlinesLogo from '../../airlines.json';
import { REACT_APP_API, REACT_APP_FLIGHT_API } from '../Consts/Consts';
export const GET_FLIGHTS_ONEWAY = "GET_FLIGHTS_ONEWAY";
const apiKey = "610ed01e747a9a053255e81f"
const apiKey2 = "610ecfda747a9a053255e81e"
const apikey3= "610ed044747a9a053255e820"

// export function getFlights(way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency) {
  export function getFlightsOneway(p) {
  // console.log('ESTO LLEGA A GETFLIGHTS:'+way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency)
  // return function (dispatch) {
  //   return fetch(`https://api.flightapi.io/roundtrip/${apiKey}/${fromPlace}/${toPlace}/${fromDate}/${toDate}/${adults}/${kids}/${babies}/${classFlight}/${currency}`)
  console.log('ESTO LLEGA A GETFLIGHTS:'+p.fromPlace + p.toPlace)
  
    console.log('ENTRO CON: ',p.way)
    return function (dispatch) {
    return fetch(`${REACT_APP_API}/getflights/${p.fromPlace}/${p.toPlace}/${p.fromDate}/${p.adults}/${p.kids}/${p.babies}/${p.classFlight}/${p.currency}`)
    //return fetch(`${REACT_APP_FLIGHT_API}/onewaytrip/${apiKey2}/${p.fromPlace}/${p.toPlace}/${p.fromDate}/${p.adults}/${p.kids}/${p.babies}/${p.classFlight}/${p.currency}`)   
      .then(response => response.json())
      .then(json => {
        if (json.message) console.log(json.message);
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
          
          return ({ "moneda":json.search.currencyCode,city1, city2, airlineIda, linkRedireccion, vueloIda, "cities": json.cities, "airports": json.airports, airlinesLogosIda})
        }
        )
        console.log(arregloFlights)
        dispatch({ type: GET_FLIGHTS_ONEWAY, payload: arregloFlights});
      });
  };
};
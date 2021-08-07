import airlinesLogo from '../../airlines.json';
export const GET_FLIGHTS = "GET_FLIGHTS";
const apiKey = "610ed01e747a9a053255e81f"
const apiKey2 = "610ecfda747a9a053255e81e"
const apikey3= "610ed044747a9a053255e820"

// export function getFlights(way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency) {
  export function getFlights(p) {
  // console.log('ESTO LLEGA A GETFLIGHTS:'+way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency)
  // return function (dispatch) {
  //   return fetch(`https://api.flightapi.io/roundtrip/${apiKey}/${fromPlace}/${toPlace}/${fromDate}/${toDate}/${adults}/${kids}/${babies}/${classFlight}/${currency}`)
  console.log('ESTO LLEGA A GETFLIGHTS:'+p.fromPlace + p.toPlace)
  return function (dispatch) {
    return fetch(`https://api.flightapi.io/roundtrip/${apiKey}/${p.fromPlace}/${p.toPlace}/${p.fromDate}/${p.toDate}/${p.adults}/${p.kids}/${p.babies}/${p.classFlight}/${p.currency}`)   
      .then(response => response.json())
      .then(json => {
        if (json.message) console.log(json.message);
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
          

          return ({ "moneda":json.search.currencyCode,city1, city2, airlineIda, airlineVuelta, linkRedireccion, vueloIda, vueloVuelta, "cities": json.cities, "airports": json.airports, airlinesLogosIda, airlinesLogosVuelta})
        }
        )
        console.log(arregloFlights)
        dispatch({ type: GET_FLIGHTS, payload: arregloFlights});
      });
  };
}

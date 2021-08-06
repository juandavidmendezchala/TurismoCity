export const GET_FLIGHTS = "GET_FLIGHTS";
const apiKey = "6100341367b32f6d377e967d"
export function getFlights(way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency) {

  return function (dispatch) {
    //Modificar parametros al link
    // Tener condiciones para los casos de oneway o roud trip
    return fetch(`https://api.flightapi.io/roundtrip/${apiKey}/${fromPlace}/${toPlace}/${fromDate}/${toDate}/${adults}/${kids}/${babies}/${classFlight}/${currency}`)
      .then(response => response.json())
      .then(json => {
        var arregloFlights = json.trips?.map(combinacion => {
          var vueloIda = json.legs?.find(vuelo => combinacion.legIds[0] == vuelo.id)
          var vueloVuelta = json.legs?.find(vuelo => combinacion.legIds[1] == vuelo.id)
          var linkRedireccion = json.fares?.find(fare => combinacion.id === fare.tripId)

          return ({ "idCombinacion": combinacion.id, linkRedireccion, vueloIda, vueloVuelta })
        }
        )
        console.log(arregloFlights)

        dispatch({ type: GET_FLIGHTS, payload: arregloFlights });
      });
  };
}
import airlinesLogo from '../../airlines.json';
export const GET_FLIGHTS = "GET_FLIGHTS";
const apiKey = "6100341367b32f6d377e967d"

export function getFlights(way, fromPlace, toPlace, fromDate, toDate, classFlight, adults, kids, babies, currency) {
  return function (dispatch) {
    return fetch(`https://api.flightapi.io/roundtrip/${apiKey}/${fromPlace}/${toPlace}/${fromDate}/${toDate}/${adults}/${kids}/${babies}/${classFlight}/${currency}`)

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


          return ({ city1, city2, airlineIda, airlineVuelta, linkRedireccion, vueloIda, vueloVuelta, "cities": json.cities, "airports": json.airports, airlinesLogosIda, airlinesLogosVuelta })
        }
        )

        dispatch({ type: GET_FLIGHTS, payload: arregloFlights });
      });
  };
}

<<<<<<< HEAD
/*     return function(dispatch) {
       return fetch('https://api.flightapi.io/roundtrip/610c9bfb1c7bef42b2e7608a/LHR/LAX/2021-10-11/2021-10-15/2/0/1/Economy/ARS')

        .then(response => response.json())
        .then(json => {
                if(json.message) console.log(json.message);
                var airlinesLogosIda='';
                var airlinesLogosVuelta='';
                var arregloFlights=json.trips?.map(combinacion =>{
                    var vueloIda=json.legs?.find(vuelo=> combinacion.legIds[0]==vuelo.id)
                    var vueloVuelta=json.legs?.find(vuelo=> combinacion.legIds[1]==vuelo.id)
                    var linkRedireccion= json.fares?.find(fare => combinacion.id === fare.tripId)
                    var airlineIda = airlinesLogo?.find(air => air.id === vueloIda.airlineCodes[0])
                    var airlineVuelta = airlinesLogo?.find(air => air.id === vueloVuelta.airlineCodes[0])
                    var airport1 = json.airports?.find(airport => airport.code === vueloIda.departureAirportCode)
                    var airport2 = json.airports?.find(airport => airport.code === vueloIda.arrivalAirportCode)
                    var city1 = json.cities?.find(city => city.code === airport1.cityCode)
                    var city2 = json.cities?.find(city => city.code === airport2.cityCode)
                    vueloIda.stopoverCode!=='DIRECT'?(airlinesLogosIda = vueloIda.segments.map(segmento => airlinesLogo?.find(air => air.id === segmento.airlineCode))):(airlinesLogosIda=null)
                    vueloVuelta.stopoverCode!=='DIRECT'?(airlinesLogosVuelta = vueloVuelta.segments.map(segmento => airlinesLogo?.find(air => air.id === segmento.airlineCode))):(airlinesLogosVuelta=null)


                return ({city1, city2, airlineIda,airlineVuelta,linkRedireccion,vueloIda,vueloVuelta, "cities":json.cities,"airports":json.airports,airlinesLogosIda,airlinesLogosVuelta })
            }
            )
            
          dispatch({ type: GET_FLIGHTS, payload: [arregloFlights[0],arregloFlights[1]]});
        });
    }; */
  /* } */

=======
>>>>>>> b1faec0012bd164b595edfabc41e4582e14b1f05

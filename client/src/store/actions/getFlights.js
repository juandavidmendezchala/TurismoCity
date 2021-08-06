import airlinesLogo from '../../airlines.json';
export const GET_FLIGHTS = "GET_FLIGHTS";

export function getFlights() {
    return function(dispatch) {
       return fetch('https://api.flightapi.io/roundtrip/610c00021c7bef42b2e75db5/LHR/LAX/2021-10-11/2021-10-15/2/0/1/Economy/ARS')
       return fetch('https://api.flightapi.io/roundtrip/610bfea21c7bef42b2e75db4/LHR/LAX/2021-10-11/2021-10-15/2/0/1/Economy/ARS')
        .then(response => response.json())
        .then(json => {
                if(json.message) console.log(json.message);
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
                
                return ({city1, city2, airlineIda,airlineVuelta,linkRedireccion,vueloIda,vueloVuelta, "cities":json.cities,"airports":json.airports })
            }
            )
            
          dispatch({ type: GET_FLIGHTS, payload: [arregloFlights[0],arregloFlights[1]]});
        });
    };
  }


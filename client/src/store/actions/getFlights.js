export const GET_FLIGHTS = "GET_FLIGHTS";

export function getFlights() {
    return function(dispatch) {
       return fetch('https://api.flightapi.io/roundtrip/610ad2731c7bef42b2e75ae0/LHR/LAX/2021-10-11/2021-10-15/2/0/1/Economy/ARS')
        .then(response => response.json())
        .then(json => {
            var arregloFlights=json.trips?.map(combinacion =>{
                var vueloIda=json.legs?.find(vuelo=> combinacion.legIds[0]==vuelo.id)
                var vueloVuelta=json.legs?.find(vuelo=> combinacion.legIds[1]==vuelo.id)
                var linkRedireccion= json.fares?.find(fare => combinacion.id === fare.tripId)

                return ({"idCombinacion": combinacion.id,linkRedireccion,vueloIda,vueloVuelta})
            }
            )
            console.log(arregloFlights)

          dispatch({ type: GET_FLIGHTS, payload: arregloFlights});
        });
    };
  }
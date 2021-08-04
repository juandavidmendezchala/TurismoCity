export const GET_FLIGHTS = "GET_FLIGHTS";

export function getFlights() {
    return function(dispatch) {
      return fetch('http://localhost:3001/LA RUTA PARA TRAER LOS VUELOS')
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_FLIGHTS, payload: json });
        });
    };
  }
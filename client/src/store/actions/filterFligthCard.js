export const FILTER_CARD_AERO = "FILTER_CARD_AERO";

export function filterCardAero(flight, aero){
    return function (dispatch){
       // console.log('esta en el action')
       var muestraAero = flight.filter( e => 
           ((e.airlineIda.name === aero) || (e.airlineVuelta.name === aero))
       )
       dispatch({
         type: FILTER_CARD_AERO,
         payload: muestraAero
       })
    }
 }
export const FILTER_CARD_AERO = "FILTER_CARD_AERO";

export function filterCardAero(flight, aero){
    return function (dispatch){
      const fligthArr = flight.slice()
       console.log('entro a la busqueda')
       var muestraAero = fligthArr.filter( e => 
           ((e.airlineIda.name === aero || e.airlineVuelta.name === aero))
       )
      console.log('esto es el resultado',muestraAero)
       
       dispatch({
         type: FILTER_CARD_AERO,
         payload: muestraAero
       })
    }
 }
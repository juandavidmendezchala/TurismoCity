export const SORT_FLIGHT = "SORT_FLIGHT";


export function sortFlight(busqueda, flight){
    return function (dispatch){
       const fligthArr = flight.slice()
       //console.log('ordenar', fligthArr)
       //console.log('price', fligthArr[0].linkRedireccion.price.totalAmount)
       if(busqueda === 'menMayor') fligthArr.sort((a, b) => (a.linkRedireccion.price.totalAmount > b.linkRedireccion.price.totalAmount) ? 1 : -1)
       if(busqueda === 'mayMenor') fligthArr.sort((a, b) => (a.linkRedireccion.price.totalAmount > b.linkRedireccion.price.totalAmount) ? -1 : 1)
       
       console.log('arreglo ordenado', fligthArr)
       dispatch({
         type: SORT_FLIGHT,
         payload:fligthArr
     })
    }
 }
export const FILTER_PRICE = "FILTER_PRICE";


export function filterPrice(flight, desde, hasta){
    return function (dispatch){
       // console.log('esta en el action')
       
       var fPrice = flight.filter( e => 
           ((e.linkRedireccion.price.totalAmount >= desde) && (e.linkRedireccion.price.totalAmount < hasta))
       )
       console.log('price',fPrice)
       dispatch({
         type: FILTER_PRICE,
         payload: fPrice
       })
    }
 }
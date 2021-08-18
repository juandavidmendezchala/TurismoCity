export const DETAIL_FLIGHTS = "DETAIL_FLIGHTS"

export const detailFlight = (way, fromPlace, toPlace, dateFrom, dateTo, category, adults, kids, babies, currency) => {
    
    var nuevo = {way, fromPlace, toPlace, dateFrom, dateTo, category, adults, kids, babies, currency}
    localStorage.setItem('flightInfo', JSON.stringify(nuevo))
    console.log('localStorage',localStorage)
    return function (dispatch) {
        
        dispatch({ type: DETAIL_FLIGHTS, payload: { way, fromPlace, toPlace, dateFrom, dateTo, category, adults, kids, babies, currency } })
        
    }
}

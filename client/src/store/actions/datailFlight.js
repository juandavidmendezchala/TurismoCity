export const DETAIL_FLIGHTS = "DETAIL_FLIGHTS"

export const detailFlight = (way, fromPlace, toPlace, dateFrom, dateTo, category, adults, kids, babies, currency) => {
    return function (dispatch) {
        dispatch({ type: DETAIL_FLIGHTS, payload: { way, fromPlace, toPlace, dateFrom, dateTo, category, adults, kids, babies, currency } })
    }
}

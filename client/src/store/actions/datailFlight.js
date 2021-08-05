export const DETAIL_FLIGHTS = "DETAIL_FLIGHTS"

export const detailFlight = (way, dateFrom, dateTo, category, adults, kids, babies, currency) => {
    return function (dispatch) {
        dispatch({ type: DETAIL_FLIGHTS, payload: { way, dateFrom, dateTo, category, adults, kids, babies, currency } })
    }
}

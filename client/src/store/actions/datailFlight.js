export const DETAIL_FLIGHTS = "DETAIL_FLIGHTS"

export const detailFlight = (dateFrom, dateTo, category) => {
    return function (dispatch) {
        dispatch({ type: DETAIL_FLIGHTS, payload: { dateFrom, dateTo, category } })
    }
}

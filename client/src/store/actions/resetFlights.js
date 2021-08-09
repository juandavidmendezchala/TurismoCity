export const RESET_FLIGHTS = "RESET_FLIGHTS"

export const resetFlights = () => {
    return function (dispatch) {
        dispatch({ type: RESET_FLIGHTS, payload: [] })
    }
}
export const BACKUP_FLIGHT = "BACKUP_FLIGHT"

export const backupFlight = (flights) => {
    return function (dispatch) {
        dispatch({ type: BACKUP_FLIGHT, payload: flights })
    }
}

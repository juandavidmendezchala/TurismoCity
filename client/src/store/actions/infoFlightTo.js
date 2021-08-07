export const LOAD_INFO_TO = "LOAD_INFO_TO"

export const infoFligthTo = (to) => {
    return function (dispatch) {
        dispatch({ type: LOAD_INFO_TO, payload: to })
    }
}

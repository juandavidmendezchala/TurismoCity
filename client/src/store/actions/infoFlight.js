export const LOAD_INFO = "LOAD_INFO"

export const infoFligth = (from) => {
    return function (dispatch) {
        dispatch({ type: LOAD_INFO, payload: from })
    }
}

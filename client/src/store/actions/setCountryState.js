
export const SET_COUNTRY_STATE = "SET_COUNTRY_STATE";

export const setCountryState = (set) => {
    return function (dispatch) {
        dispatch({ type: SET_COUNTRY_STATE, payload: set })
    }
}
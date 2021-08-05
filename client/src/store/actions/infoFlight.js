import { LOAD_INFO } from "../Consts/Consts"

export const infoFligth = (from) => {
    return function (dispatch) {
        dispatch({ type: LOAD_INFO, payload: from })
    }
}

import { GET_MOST_SALED } from "../../Consts/Consts"

export const mostSaled = (mostSaled) => {
    return function (dispatch) {
        dispatch({ type: GET_MOST_SALED, payload: mostSaled })
    }
}

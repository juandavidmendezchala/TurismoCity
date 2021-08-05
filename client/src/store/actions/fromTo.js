import { FROM, TO } from "../Consts/Consts"

export const placeFrom = (placeFrom) => {
    return function (dispatch) {
        dispatch({ type: FROM, payload: placeFrom })
    }
}

export const placeTo = (placeTo) => {
    return function (dispatch) {
        dispatch({ type: TO, payload: placeTo })
    }
}
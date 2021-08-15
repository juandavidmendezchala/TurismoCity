import { NEW_ACTIVITY } from "../Consts/Consts"

export function newActivity(email, name, description, date, price, places, duration, initialTime, comments, passengers, images, country, city) {
    return function (dispatch) {
        dispatch({
            type: NEW_ACTIVITY,
            payload: { email, name, description, date, price, places, duration, initialTime, comments, passengers, images, country, city }
        })
    }
}
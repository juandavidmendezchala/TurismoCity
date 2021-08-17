import axios from "axios"
import { REACT_APP_API } from "../Consts/Consts"
export const GET_USER_ACTIVITIES = "GET_USER_ACTIVITIES"

export const getUserActivities = () => {
    return async function (dispatch) {
        const actividades = await axios.get(`${REACT_APP_API}/suppliers`)
        dispatch({ type: GET_USER_ACTIVITIES, payload: actividades.data })
    }
}
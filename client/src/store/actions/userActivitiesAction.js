import axios from "axios"
export const GET_USER_ACTIVITIES = "GET_USER_ACTIVITIES"

export const getUserActivities = () => {
    return async function (dispatch) {
        const actividades = await axios.get("http://localhost:3001/suppliers")
        dispatch({ type: GET_USER_ACTIVITIES, payload: actividades.data })
    }
}
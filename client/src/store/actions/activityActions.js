import { GET_ACTIVITY_FAIL,
     GET_ACTIVITY_REQUEST, 
     GET_ACTIVITY_SUCCESS } from "../Consts/Consts"

export const getActivities = () => async(dispatch) => {
    dispatch({type: GET_ACTIVITY_REQUEST})
    try{
        const {data} = axios.get(`http://localhost:3001/activity`)
        dispatch({type: GET_ACTIVITY_SUCCESS, payload: data})
    } catch(err) {
        dispatch({
            type: GET_ACTIVITY_FAIL,
            payload: 
            err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        })
    }
}
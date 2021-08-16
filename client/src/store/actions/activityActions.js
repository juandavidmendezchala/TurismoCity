import axios from 'axios';
import { DELETE_FAVORITE_FAIL,
     DELETE_FAVORITE_REQUEST, 
     DELETE_FAVORITE_SUCCESS,
     GET_ACTIVITYDETAIL_FAIL, 
     GET_ACTIVITYDETAIL_REQUEST, 
     GET_ACTIVITYDETAIL_SUCCESS, 
     GET_ACTIVITY_FAIL,
     GET_ACTIVITY_REQUEST, 
     GET_ACTIVITY_SUCCESS, 
     GET_FAVORITE_FAIL, 
     GET_FAVORITE_REQUEST,
     GET_FAVORITE_SUCCESS} from "../Consts/Consts"

export const getActivities = () => async(dispatch) => {
    dispatch({type: GET_ACTIVITY_REQUEST})
    try{
        const {data} = await axios.get(`http://localhost:3001/activity`)
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

export const getActivity = (id) => async(dispatch) => {
    dispatch({type: GET_ACTIVITYDETAIL_REQUEST})
    try{
        const {data} = await axios.get(`http://localhost:3001/activity/${id}`)
        dispatch({type: GET_ACTIVITYDETAIL_SUCCESS, payload: data})
    } catch(err) {
        dispatch({
            type: GET_ACTIVITYDETAIL_FAIL,
            payload:
            err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        })
    }
}

export const getFilterActivities = ( 
    country,
    city,
    startDate,
    endDate,
    price,
    places,
    duration,
    initialTime
    ) => async(dispatch) => {
    dispatch({type: GET_ACTIVITY_REQUEST})
    try{
        const {data} = await axios.post(`http://localhost:3001/activity/filter`, {
        country,
        city,
        startDate,
        endDate,
        price,
        places,
        duration,
        initialTime
        })
        dispatch({type: GET_ACTIVITY_SUCCESS, payload: data})
    }catch(err) {
        dispatch({
            type: GET_ACTIVITY_FAIL,
            payload: 
            err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        })
    }
}


export const addFavorite = (activityId, userId) => async(dispatch) => {
    dispatch({type: GET_FAVORITE_REQUEST})
    try{
        const {data} = await axios.post(`http://localhost:3001/favorites/`, {activityId, userId})
        dispatch({type: GET_FAVORITE_SUCCESS, payload: data})
    } catch(err) {
        dispatch({
            type: GET_FAVORITE_FAIL,
            payload:
            err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        })
    }
}

export const deleteFavorite = (id) => async(dispatch) => {
    dispatch({type: DELETE_FAVORITE_REQUEST})
    try{
        const {data} = await axios.get(`http://localhost:3001/activity/${id}`)
        dispatch({type: DELETE_FAVORITE_SUCCESS, payload: data})
    } catch(err) {
        dispatch({
            type: DELETE_FAVORITE_FAIL,
            payload:
            err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        })
    }
}
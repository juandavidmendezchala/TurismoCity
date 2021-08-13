import axios from 'axios';
import { GET_ACTIVITYDETAIL_FAIL, GET_ACTIVITYDETAIL_REQUEST, GET_ACTIVITYDETAIL_SUCCESS, GET_ACTIVITY_FAIL,
     GET_ACTIVITY_REQUEST, 
     GET_ACTIVITY_SUCCESS } from "../Consts/Consts"

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

export const getFilterActivities = (filter) =>  async(dispatch) => {
    dispatch({type: GET_ACTIVITY_REQUEST})
    try{
        const {data} = await axios.get(`http://localhost:3001/activity`, {filter})
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
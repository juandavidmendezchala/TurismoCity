import axios from 'axios';
import { async } from 'q';
import { GET_PROMO_FAIL,
     GET_PROMO_REQUEST, 
     GET_PROMO_SUCCESS, 
     REACT_APP_API } from '../Consts/Consts';


export const getPromo = () => async(dispatch) => {
    dispatch({type: GET_PROMO_REQUEST})
    try{
        const {data} = await axios.get(`${REACT_APP_API}/promo`)
        dispatch({type: GET_PROMO_SUCCESS, payload: data})

    } catch(err) {
        dispatch({
            type: GET_PROMO_FAIL,
            payload: 
            err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        })
    }
}

export const postPromo = (title, description) => async(dispatch) => {
    dispatch({type: GET_PROMO_REQUEST})
    try{
        await axios.post(`${REACT_APP_API}/promo`, {title, description})
        const {data} = await axios.get(`${REACT_APP_API}/promo`)
        dispatch({type: GET_PROMO_SUCCESS, payload: data})

    } catch(err) {
        dispatch({
            type: GET_PROMO_FAIL,
            payload: 
            err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        })
    }
}

export const editPromo = (title, description, id) => async(dispatch) => {
    dispatch({type: GET_PROMO_REQUEST})
    try{
        await axios.put(`${REACT_APP_API}/promo/put/${id}`, {title, description})
        const {data} = await axios.get(`${REACT_APP_API}/promo`)
        dispatch({type: GET_PROMO_SUCCESS, payload: data})

    } catch(err) {
        dispatch({
            type: GET_PROMO_FAIL,
            payload: 
            err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        })
    }
}

export const deletePromo = (id) => async(dispatch) => {
    dispatch({type: GET_PROMO_REQUEST})
    try{
        await axios.delete(`${REACT_APP_API}/promo/delete/${id}`)
        const {data} = await axios.get(`${REACT_APP_API}/promo`)
        dispatch({type: GET_PROMO_SUCCESS, payload: data})

    } catch(err) {
        dispatch({
            type: GET_PROMO_FAIL,
            payload: 
            err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        })
    }
}


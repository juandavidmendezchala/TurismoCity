import axios from 'axios'
import { GET_NEWS_FAIL, GET_NEWS_REQUEST } from "../Consts/Consts"

export const getNews = (startdate) => async(dispatch) => {
    dispatch({type: GET_NEWS_REQUEST})
    try{
        const {data} = axios.get()
    } catch(err) {
        dispatch({
            type: GET_NEWS_FAIL,
            payload:
            err.response && err.response.data.message
            ? err.response.data.message 
            : err.message
        })
    }
}
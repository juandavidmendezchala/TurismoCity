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
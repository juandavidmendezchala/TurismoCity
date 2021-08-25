import { GET_COUNTRIES_FAIL, GET_COUNTRIES_REQUEST, GET_COUNTRIES_SUCCESS, SET_COUNTRY_FAIL, SET_COUNTRY_REQUEST, SET_COUNTRY_SUCCESS } from "../Consts/Consts"
import allcountries from './countries+states.json'

export const getCountries = () => async(dispatch) => {
    dispatch({type: GET_COUNTRIES_REQUEST})
    try{
        const countries = allcountries;
        dispatch({type: GET_COUNTRIES_SUCCESS, payload: countries})
    } catch(err) {
        dispatch({
            type: GET_COUNTRIES_FAIL,
            payload:
            err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        })
    }
}

export const setUserCountry = (country) => async(dispatch) => {
    dispatch({type: SET_COUNTRY_REQUEST})
    try{
        dispatch({type: SET_COUNTRY_SUCCESS, payload: country})
        localStorage.setItem('userCountry', JSON.stringify(country))
    } catch(err){
        dispatch({
            type: SET_COUNTRY_FAIL,
            payload:
            err.response && err.response.data.message
            ? err.response.data.message
            : err.message
        })
    }
}
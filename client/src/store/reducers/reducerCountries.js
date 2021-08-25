import { GET_COUNTRIES_FAIL, GET_COUNTRIES_REQUEST, GET_COUNTRIES_SUCCESS, SET_COUNTRY_FAIL, SET_COUNTRY_REQUEST, SET_COUNTRY_SUCCESS } from "../Consts/Consts";

export const countriesReducer = ( state = {}, action) => {
    switch(action.type){
        case GET_COUNTRIES_REQUEST:
            return {loading: true}
        case GET_COUNTRIES_SUCCESS:
            return {loading: false, countries: action.payload}
        case GET_COUNTRIES_FAIL:
            return {loading: false, error: action.payload}
        default:
             return state;
    }
}

export const userCountryReducer = (state = {}, action) => {
    switch(action.type){
        case SET_COUNTRY_REQUEST:
            return {loading: true}
        case SET_COUNTRY_SUCCESS:
            return {loading: false, userCountry: action.payload}
        case SET_COUNTRY_FAIL:
            return {loading: false, error: action.payload}
        default: return state;
    }
}
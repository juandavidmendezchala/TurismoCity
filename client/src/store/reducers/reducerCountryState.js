import { SET_COUNTRY_STATE } from "../actions/setCountryState";

const initialState = {
    countryState: false
}

export const reducerCountryState= (state = initialState, action) => {
    switch(action.type) {
        case SET_COUNTRY_STATE:
            //console.log('reducer actividad comprada', action.payload)
            return {
                ...state,
                countryState: action.payload
            }
        default:
            return state;
    }
}
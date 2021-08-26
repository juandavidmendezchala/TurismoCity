import {SEARCH_USER_SELLER} from "../actions/searchUserSeller"
import {SEARCH_USER_EMAIL} from '../actions/searchUserEmail'
const initialState = {
    userSeller: [],
    userUpdate: {}
}

export const reducerUserSeller = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_USER_SELLER:
            //console.log('reducer actividad comprada', action.payload)
            return {
                ...state,
                userSeller: action.payload
                
            }
        case SEARCH_USER_EMAIL:
         //console.log('reducer actividad comprada', action.payload)
         return {
                ...state,
                userUpdate: action.payload
                
            }
        default:
            return state;
    }
}
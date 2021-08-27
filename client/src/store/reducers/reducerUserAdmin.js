import {SEARCH_USER_SELLER} from "../actions/searchUserSeller"
import {SEARCH_USER_EMAIL} from '../actions/searchUserEmail'
import { GET_ACTIVITY_ADMIN } from "../actions/getActivityAdmin"
const initialState = {
    userSeller: [],
    userUpdate: {},
    userActivity: []
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
        case GET_ACTIVITY_ADMIN:
        return {
            ...state,
            userActivity: action.payload
        }
        default:
            return state;
    }
}
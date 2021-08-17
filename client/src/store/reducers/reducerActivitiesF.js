import { CHANGE_STATE } from "../actions/stateComponents"
import {GET_FAVORITES} from "../actions/getFavorites"
import { REMOVE_MY_FAVORITE } from "../actions/removeMyFavorite"

const initialState = {
    stateComponent: true,
    favorites:{}
}

export const reducerActivitiesF = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_STATE:
            return {
                ...state,
                stateComponent: action.payload
            }
            case GET_FAVORITES:
                return {
                    ...state,
                favorites: action.payload
                }
            case REMOVE_MY_FAVORITE:
                return {
                    ...state,
                favorites: action.payload
                }    
        default:
            return state;
    }
}
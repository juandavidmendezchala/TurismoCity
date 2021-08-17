import {SEARCH_ACTIVITIE_PREV} from "../actions/searchActivitiePrev"

const initialState = {
    activityPurchasePrev: [],
}

export const reducerActivitiesPrev = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_ACTIVITIE_PREV:
            //console.log('reducer actividad comprada', action.payload)
            return {
                ...state,
                activityPurchasePrev: action.payload
                
            }
        default:
            return state;
    }
}
import {SEARCH_USER_ACTIVITIES} from "../actions/searchUserActivities"

const initialState = {
    activityPurchase: [],
}

export const reducerMyActivities = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_USER_ACTIVITIES:
            console.log('reducer actividad comprada', action.payload)
            return {
                ...state,
                activityPurchase: action.payload
                
            }
        default:
            return state;
    }
}
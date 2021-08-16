import {ADD_FEEDBACK} from "../actions/feedBack"

const initialState = {
    FeedBackLoad: [],
}

export const reducerFeedBack = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FEEDBACK:
            //console.log('reducer actividad comprada', action.payload)
            return {
                ...state,
                FeedBackLoad: action.payload
                
            }
        default:
            return state;
    }
}
import { CHANGE_STATE } from "../actions/stateComponents"

const initialState = {
    stateComponent: true,
}

export const reducerActivities = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_STATE:
            return {
                ...state,
                stateComponent: action.payload
            }
        default:
            return state;
    }
}
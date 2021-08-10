import {
    GET_ACTIVITY_FAIL,
    GET_ACTIVITY_REQUEST,
    GET_ACTIVITY_SUCCESS
} from "../Consts/Consts";

export const activityReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ACTIVITY_REQUEST:
            return { loading: true }
        case GET_ACTIVITY_SUCCESS:
            return { loading: false, activities: action.payload }
        case GET_ACTIVITY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
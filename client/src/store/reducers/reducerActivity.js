import { GET_ACTIVITYDETAIL_FAIL, 
    GET_ACTIVITYDETAIL_REQUEST,
     GET_ACTIVITYDETAIL_SUCCESS, 
     GET_ACTIVITY_FAIL, 
    GET_ACTIVITY_REQUEST, 
    GET_ACTIVITY_SUCCESS } from "../Consts/Consts";

export const activityReducer = (state = {}, action) => {
    switch(action.type){
        case GET_ACTIVITY_REQUEST:
            return {loading: true}
        case GET_ACTIVITY_SUCCESS:
            return {loading: false, activities: action.payload}
        case GET_ACTIVITY_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

export const activityDetailReducer = (state = {}, action) => {
    switch(action.type){
        case GET_ACTIVITYDETAIL_REQUEST:
            return {loading: true}
        case GET_ACTIVITYDETAIL_SUCCESS:
            return {loading: false, activity: action.payload}
        case GET_ACTIVITYDETAIL_FAIL:
            return  {loading: false, error: action.payload}
        default:
            return state;
    }
}
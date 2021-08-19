import { GET_ACTIVITY_FAIL, 
    GET_NEWS_REQUEST, 
    GET_NEWS_SUCCESS } from "../Consts/Consts";

export const newsReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_NEWS_REQUEST:
            return { loading: true }
        case GET_NEWS_SUCCESS:
            return { loading: false, news: action.payload}
        case GET_ACTIVITY_FAIL:
            return { loading: false, error: action.payload}
        default: return state;
    }    
}
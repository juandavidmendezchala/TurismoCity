import {
    DELETE_FAVORITE_REQUEST,
    DELETE_FAVORITE_SUCCESS,
    GET_ACTIVITYDETAIL_FAIL,
    GET_ACTIVITYDETAIL_REQUEST,
    GET_ACTIVITYDETAIL_SUCCESS,
    GET_ACTIVITY_FAIL,
    GET_ACTIVITY_REQUEST,
    GET_ACTIVITY_SUCCESS,
    GET_COMMENTS_FAIL,
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    GET_FAVORITE_FAIL,
    GET_FAVORITE_REQUEST,
    GET_FAVORITE_SUCCESS
} from "../Consts/Consts";

const initialState = {
    loading: false,
    favorites: []
}

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

export const activityDetailReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ACTIVITYDETAIL_REQUEST:
            return { loading: true }
        case GET_ACTIVITYDETAIL_SUCCESS:
            return { loading: false, activity: action.payload }
        case GET_ACTIVITYDETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const activityFavoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAVORITE_REQUEST:
            return { ...state, loading: true }
        case GET_FAVORITE_SUCCESS:
            return { 
                ...state// favorites: favorites.concat(action.payload) 
            }
        case GET_FAVORITE_FAIL:
            return { ...state, loading: false, error: action.payload }
        case DELETE_FAVORITE_REQUEST:
            return { ...state, loading: true}
        case DELETE_FAVORITE_SUCCESS:
            return {
                ...state//, favorites: favorites.filter(activitie => activitie.id !== id) 
            }
        default:
            return state;
    }
}

export const feedBackReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_COMMENTS_REQUEST:
            return { loadingC: true }
        case GET_COMMENTS_SUCCESS:
            return { loadingC: false, comments: action.payload}
        case GET_COMMENTS_FAIL:
            return { loadingC: false, errorC: action.payload}
        default: 
            return state;
    }
}



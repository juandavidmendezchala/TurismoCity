import { GET_TYPES_FAIL, GET_TYPES_REQUEST, GET_TYPES_SUCCESS } from "../Consts/Consts";

export const typeReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TYPES_REQUEST:
            return { loading: true }
        case GET_TYPES_SUCCESS:
            return { loading: false, alltypes: action.payload }
        case GET_TYPES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
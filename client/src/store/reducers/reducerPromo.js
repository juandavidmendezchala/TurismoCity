import { GET_PROMO_FAIL, GET_PROMO_REQUEST, GET_PROMO_SUCCESS } from "../Consts/Consts";

export const promoReducer = (state = {}, action) => {
    switch(action.type){
        case GET_PROMO_REQUEST:
            return {loading: true}
        case GET_PROMO_SUCCESS:
            return {loading: false, promotions: action.payload}
        case GET_PROMO_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
import { PENDING_PURCHASE } from "../actions/pendingPurchase";
import { PURCHASE } from "../actions/purchase"

const initialState = {
    purchase: [],
    pendingPurchase: null,
}

export const reducerPurchase = (state = initialState, action) => {
    switch (action.type) {
        case PURCHASE:
            //console.log('reducer actividad comprada', action.payload)
            return {
                ...state,
                purchase: action.payload

            }
        case PENDING_PURCHASE:
            return {
                ...state,
                pendingPurchase: action.payload
            }

        default:
            return state;
    }
}
import { PURCHASE } from "../actions/purchase"

const initialState = {
    purchase: [],
}

export const reducerPurchase = (state = initialState, action) => {
    switch (action.type) {
        case PURCHASE:
            //console.log('reducer actividad comprada', action.payload)
            return {
                ...state,
                purchase: action.payload

            }
        default:
            return state;
    }
}
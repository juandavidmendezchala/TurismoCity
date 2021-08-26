import { GET_MOST_SALED, GET_SALES_SUPPLIER } from "../Consts/Consts"

const initialState = {
    salesUser: [],
    mostSaled: []
}
export const reducerSuppliers = (state = initialState, action) => {
    switch (action.type) {
        case GET_SALES_SUPPLIER:
            return {
                ...state,
                salesUser: action.payload
            }
        case GET_MOST_SALED:
            return {
                ...state,
                mostSaled: action.payload
            }
        default:
            return state
    }
}
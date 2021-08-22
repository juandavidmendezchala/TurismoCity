import { GET_SALES_SUPPLIER } from "../Consts/Consts"

const initialState = {
    salesUser: []
}
export const reducerSuppliers = (state = initialState, action) => {
    switch (action.type) {
        case GET_SALES_SUPPLIER:
            return {
                ...state,
                salesUser: action.payload
            }
        default:
            return state
    }
}
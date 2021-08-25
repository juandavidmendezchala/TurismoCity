import { GET_SALES_SUPPLIER } from "../../Consts/Consts"

export const getSalesSup = (sales) => {
    return function (dispatch) {
        dispatch({ type: GET_SALES_SUPPLIER, payload: sales })
    }
}

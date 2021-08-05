import {DETAIL_FLIGHTS} from '../Consts/Consts'


export const detailFlight = (dateFrom, dateTo, category) => {
    return function (dispatch) {
        dispatch({ type: DETAIL_FLIGHTS, payload: { dateFrom, dateTo, category } })
    }
}

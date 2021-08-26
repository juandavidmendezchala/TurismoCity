import axios from "axios"
import { REACT_APP_FLIGHT_API } from "../Consts/Consts"
export const GET_FROM = "GET_FROM"


export const getFrom = (from) => {
    return function (dispatch) {
        if (from) {
            axios.get(`${REACT_APP_FLIGHT_API}/iata/6100341367b32f6d377e967d/${from}/airport`)
                .then(response => {
                    dispatch({ type: GET_FROM, payload: response.data })
                })
        }
    }
}

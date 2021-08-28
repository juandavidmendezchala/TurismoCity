import axios from "axios"
import { NEWSLETTER, REACT_APP_API } from "../Consts/Consts"

export function newsletter(nombre, apellido, email) {
    return function (dispatch) {
        console.log({ nombre, apellido, email })
        axios.post(`${REACT_APP_API}/newsletter`, { nombre, apellido, email })
        dispatch({ type: NEWSLETTER, payload: { nombre, apellido, email } })
    }
}
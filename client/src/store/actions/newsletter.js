import axios from "axios"
import { NEWSLETTER } from "../Consts/Consts"

export function newsletter(nombre, apellido, email) {
    return function (dispatch) {
        console.log({ nombre, apellido, email })
        axios.post("http://localhost:3001/newsletter", { nombre, apellido, email })
        dispatch({ type: NEWSLETTER, payload: { nombre, apellido, email } })
    }
}
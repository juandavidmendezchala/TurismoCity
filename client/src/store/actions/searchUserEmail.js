import { REACT_APP_API } from "../Consts/Consts";

export const SEARCH_USER_EMAIL = "SEARCH_USER_EMAIL";

export const searchUserEmail= (idAct) => {
    console.log('el idee', idAct)
    return function (dispatch) {
        return fetch(`${REACT_APP_API}/user/email/${idAct}`)   
          .then(response => response.json())
          .then(json => {
            console.log('lo que trae', json)
            dispatch({ type: SEARCH_USER_EMAIL, payload: json })
          })
    }
}
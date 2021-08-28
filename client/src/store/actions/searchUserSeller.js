import { REACT_APP_API } from "../Consts/Consts";

export const SEARCH_USER_SELLER = "SEARCH_USER_SELLER";

export const searchUserSeller = () => {
    return function (dispatch) {
        return fetch(`${REACT_APP_API}/user/seller`)   
          .then(response => response.json())
          .then(json => {
            dispatch({ type: SEARCH_USER_SELLER, payload: json })
          })
    }
}
import { REACT_APP_API } from "../Consts/Consts";

export const GET_FAVORITES = "GET_FAVORITES";

export const getFavorites = (userId) => {
    return function (dispatch) {
        return fetch(`${REACT_APP_API}/favorites/fav/${userId}`)   
          .then(response => response.json())
          .then(json => {
            dispatch({ type: GET_FAVORITES, payload: json })
          })
    }
}
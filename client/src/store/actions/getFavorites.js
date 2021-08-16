export const GET_FAVORITES = "GET_FAVORITES";

export const getFavorites = (userId) => {
    return function (dispatch) {
        return fetch(`http://localhost:3001/favorites/fav/${userId}`)   
          .then(response => response.json())
          .then(json => {
            dispatch({ type: GET_FAVORITES, payload: json })
          })
    }
}
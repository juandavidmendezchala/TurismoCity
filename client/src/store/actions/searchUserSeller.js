export const SEARCH_USER_SELLER = "SEARCH_USER_SELLER";

export const searchUserSeller = () => {
    return function (dispatch) {
        return fetch(`http://localhost:3001/user/seller`)   
          .then(response => response.json())
          .then(json => {
            dispatch({ type: SEARCH_USER_SELLER, payload: json })
          })
    }
}
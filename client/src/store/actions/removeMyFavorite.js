import { REACT_APP_API } from "../Consts/Consts";

export const REMOVE_MY_FAVORITE = "REMOVE_MY_FAVORITE";

export const removeMyFavorite = (userId,activityId) => {
    return function (dispatch) {
        return fetch(`${REACT_APP_API}/favorites/delete/${userId}/${activityId}/`,{
            method: 'DELETE'})   
          .then(response => response.json())
          .then(json => {
            return fetch(`${REACT_APP_API}/favorites/fav/${userId}`)   
            .then(response => response.json())
            .then(json => {  
            dispatch({ type: REMOVE_MY_FAVORITE, payload: json })
          })
                      })
        }    
    }


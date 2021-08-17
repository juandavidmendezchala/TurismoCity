export const REMOVE_MY_FAVORITE = "REMOVE_MY_FAVORITE";

export const removeMyFavorite = (userId,activityId) => {
    return function (dispatch) {
        return fetch(`http://localhost:3001/favorites/delete/${userId}/${activityId}/`,{
            method: 'DELETE'})   
          .then(response => response.json())
          .then(json => {
            return fetch(`http://localhost:3001/favorites/fav/${userId}`)   
            .then(response => response.json())
            .then(json => {  
            dispatch({ type: REMOVE_MY_FAVORITE, payload: json })
          })
                      })
        }    
    }


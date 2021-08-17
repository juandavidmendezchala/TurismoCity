import { REACT_APP_API } from "../Consts/Consts";

export const SEARCH_USER_ACTIVITIES = "SEARCH_USER_ACTIVITIES";


export function searchUserActivities(idUser){
    return function (dispatch){
       // console.log('esta en el action')
       
       return fetch(`${REACT_APP_API}/purchase/previous`)
       .then(response => response.json())
       .then(obj => {
           console.log('actividades compradas',obj)
           dispatch({ type: SEARCH_USER_ACTIVITIES, payload: obj });
       });

    }
 }
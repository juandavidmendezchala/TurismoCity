export const SEARCH_ACTIVITIE_PREV = "SEARCH_ACTIVITIE_PREV";


export function searchUserActivitiePrev(idUser){
    return function (dispatch){
       // console.log('esta en el action')
       
       return fetch(`http://localhost:3001/purchase/next`)
       .then(response => response.json())
       .then(obj => {
           
           dispatch({ type: SEARCH_ACTIVITIE_PREV, payload: obj });
       });

    }
 }
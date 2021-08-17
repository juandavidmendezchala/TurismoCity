export const CHANGE_STATE = "CHANGE_STATE";


export function changeState(estado){
    return function (dispatch){
       dispatch({
         type: CHANGE_STATE,
         payload:estado
     })
    }
 }
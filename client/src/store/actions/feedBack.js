import { REACT_APP_API } from "../Consts/Consts";

export const ADD_FEEDBACK = "ADD_FEEDBACK";


export function addFeedback(idUser, idAct, commentary, score){
    return function (dispatch){
        console.log("este es ID actividad",idAct)
        const requestOptions = { //
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({idUser, idAct, commentary, score})
            //commentary, score, idUser, idAct
        };
        return fetch(`${REACT_APP_API}/feedBack`, requestOptions)
          .then(response => response.json())
          .then(obj => {
           // console.log('devuelve',obj)
            dispatch({ type: ADD_FEEDBACK, payload: {
                id: obj.id,
                commentary: obj.commentary,
                score: obj.score,
                idUser: obj.idUser,
                idAct: obj.idAct
                
            } });
        });
    }
   
 }
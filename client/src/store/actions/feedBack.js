import { REACT_APP_API } from "../Consts/Consts";

export const ADD_FEEDBACK = "ADD_FEEDBACK";
export const GET_ALLCOMMENTS_OF_USER = "GET_ALLCOMMENTS_OF_USER";
export const REMOVE_FEEDBACK = "REMOVE_FEEDBACK";


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
};
export function getAllCommentsOfUser(idUser){
        return function(dispatch){
            console.log("ESTE ES EL USUARIO QUE SOLICITA SUS COMENTARIOS",idUser)
            return fetch(`http://localhost:3001/feedBack/user/${idUser}`)
            .then(response => response.json())
            .then(json =>{
                dispatch({type: GET_ALLCOMMENTS_OF_USER, payload: json})
            })
        }
};

export function verifyComment(id){
    return function(dispatch){
        return fetch(`http://localhost:3001/feedBack/${id}`)
        .then(response => response.json())
        .then(json =>{

            dispatch({type: GET_ALLCOMMENTS_OF_USER, payload: json})
        })
    }
}

export function removeFeedback(idComment){
    return function(dispatch){
        return fetch(`http://localhost:3001/feedBack/remove/${idComment}`,{
            method: 'DELETE'})
        .then(response => response.json())
        .then(json =>{

            dispatch({type: REMOVE_FEEDBACK, payload: json})
        })
    }
}
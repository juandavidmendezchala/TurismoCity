import { REACT_APP_API } from "../Consts/Consts";

export const GET_QUESTION = "GET_QUESTION";
export const POST_QUESTION = "POST_QUESTION";

export const getQuestion = (idAct) => {
    return function (dispatch) {
        return fetch(`${REACT_APP_API}/question/${idAct}`)   
          .then(response => response.json())
          .then(json => {
            dispatch({ type: GET_QUESTION, payload: json })
          })
    }
}

export const postQuestion = (query,activityId, userId, date) => {
  return function (dispatch){
    const requestOptions = { //
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query,activityId, userId, date})
        //query, date, activityId, userId
    };
    return fetch(`${REACT_APP_API}/question`, requestOptions)
      .then(response => response.json())
      .then(obj => {
        //console.log('devuelve',obj)
        dispatch({ type: POST_QUESTION, payload: {
            id: obj.id,
            query: obj.query,
            date: obj.date,
            activityId: obj.activityId,
            userId: obj.userId,
            answers: []
        } });
    });
    
}
}
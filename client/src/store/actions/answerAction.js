import { REACT_APP_API } from "../Consts/Consts";
export const POST_ANSWER = "POST_ANSWER";

export const postAnswer = (query, date, questionId, userId) => {
    //query, date, questionId, userId
    return function (dispatch){
      const requestOptions = { //
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({query, date, questionId, userId})
          //query, date, activityId, userId
      };
      return fetch(`${REACT_APP_API}/answer`, requestOptions)
        .then(response => response.json())
        .then(obj => {
          //console.log('devuelve',obj)
          dispatch({ type: POST_ANSWER, payload: {
              id: obj.id,
              query: obj.query,
              date: obj.date,
              questionId: obj.questionId,
              userId: obj.userId
          } });
      });
      
  }
  }

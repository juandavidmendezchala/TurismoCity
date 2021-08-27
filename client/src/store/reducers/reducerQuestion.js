import {GET_QUESTION} from "../actions/questionAction"
import {POST_QUESTION} from "../actions/questionAction"
import {DELETE_QUESTION} from "../actions/questionAction"
import{POST_ANSWER} from "../actions/answerAction"

const initialState = {
    question: [],
}

export const reducerQuestion = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUESTION:
            //console.log('reducer actividad comprada', action.payload)
            return {
                ...state,
                question: action.payload

            }
        case POST_QUESTION:
                //console.log('reducer actividad comprada', action.payload)
            return {
                 ...state,
                 question: [...state.question, {...action.payload}]
    
            }
        case DELETE_QUESTION:
            console.log('pasa este payload DELETE', action.payload)
            return {
                ...state.filter(cat => cat.id !== action.payload),
            }
        default:
            return state;
    }
}
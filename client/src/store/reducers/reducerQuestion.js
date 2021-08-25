import {GET_QUESTION} from "../actions/questionAction"
import {POST_QUESTION} from "../actions/questionAction"

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
        default:
            return state;
    }
}
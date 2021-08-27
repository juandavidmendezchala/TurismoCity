
import{POST_ANSWER} from "../actions/answerAction"

const initialState = {
    answer: [],
}

export const reducerAnswer = (state = initialState, action) => {
    switch (action.type) {
        
        case POST_ANSWER:
                //console.log('reducer actividad comprada', action.payload)
            return {
                 ...state,
                 answer: [...state.answer, {...action.payload}]
    
            }
     
        default:
            return state;
    }
}

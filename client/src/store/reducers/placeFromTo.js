import { FROM, TO } from "../Consts/Consts";

const initialState = {
    placeFrom: "",
    placeTo: ""
}


const fromToReducer = (state = initialState, action) => {
    switch(action.type){
        case FROM:
            return{
                ...state,
                placeFrom: action.payload
            }
        case TO:
            return {
                ...state,
                placeTo: action.payload
            }
        default: return state
    }
}

export default fromToReducer;
import { URL_INFO } from '../actions/urlPost'

const initialState = {
    urlPhoto: [],

}

const reducerPhoto = (state = initialState, action) => {
    switch (action.type) {
       
        case URL_INFO:
            return {
                ...state,
                urlPhoto: action.payload
            }
        
        default:
            return state;
    }
}

export default reducerPhoto

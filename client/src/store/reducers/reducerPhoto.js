import { URL_INFO } from '../actions/urlPost'

const initialState = {
    url: [],

}

const reducerPhoto = (state = initialState, action) => {
    switch (action.type) {
       
        case URL_INFO:
            return {
                ...state,
                url: action.payload
            }
        
        default:
            return state;
    }
}

export default reducerPhoto

import { GET_FROM } from "../actions/searchFlights"

const initialState = {
    from: [],
}

const reducer = (state = initialState, action) => {
    if (action.type === GET_FROM) {
        return {
            ...state,
            from: action.payload
        }
    }
    return state
}

export default reducer;

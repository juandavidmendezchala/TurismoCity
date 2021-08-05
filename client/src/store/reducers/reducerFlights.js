import { GET_FROM } from "../actions/searchFlights"
import {GET_FLIGHTS} from "../actions/getFlights"

const initialState = {
    from: [],
    flights: [],
}

const reducer = (state = initialState, action) => {
    if (action.type === GET_FROM) {
        return {
            ...state,
            from: action.payload
        }
    }
    if (action.type === GET_FLIGHTS) {
        return {
            ...state,
            flights: action.payload
        };
    }
    

    return state;
}

export default reducer;

import { GET_FROM } from "../actions/searchFlights"
import {GET_FLIGHTS} from "../actions/getFlights"
import {SORT_FLIGHT} from "../actions/sortFlight"

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

    if (action.type === SORT_FLIGHT) {
        return {
            ...state,
            flights: action.payload
        };
    }
    

    return state;
}

export default reducer;

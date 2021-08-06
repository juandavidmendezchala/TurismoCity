import { GET_FROM } from "../actions/searchFlights"
import { LOAD_INFO } from "../actions/infoFlight"
import { DETAIL_FLIGHTS } from "../actions/datailFlight"
import {GET_FLIGHTS} from "../actions/getFlights"
import {SORT_FLIGHT} from "../actions/sortFlight"

const initialState = {
    from: [],
    detailFlights: {
        way: "",
        dateFrom: "",
        dateTo: "",
        category: "",
        adults: "",
        kids: "",
        babies: "",
        currency: "",
    },
    flights: [],
}

const reducer = (state = initialState, action) => {
    if (action.type === DETAIL_FLIGHTS) {
        return {
            ...state,
            detailFlights: {
                way: action.payload.way,
                dateFrom: action.payload.dateFrom,
                dateTo: action.payload.dateTo,
                category: action.payload.category,
                adults: action.payload.adults,
                kids: action.payload.kids,
                babies: action.payload.babies,
                currency: action.payload.currency
            }
        }
    }
    if (action.type === LOAD_INFO) {
        return {
            ...state,
            from: state.from.concat(action.payload)
        }
    }
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

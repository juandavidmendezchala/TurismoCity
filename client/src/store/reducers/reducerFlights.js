import { GET_FROM } from "../actions/searchFlights"
import { GET_FLIGHTS } from "../actions/getFlights"
import { LOAD_INFO } from "../actions/infoFlight"
import { LOAD_INFO_TO } from "../actions/infoFlightTo"
import { DETAIL_FLIGHTS } from "../actions/datailFlight"

const initialState = {
    from: [],
    to: [],
    detailFlights: {
        way: "",
        fromPlace: "",
        toPlace: "",
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
                fromPlace: action.payload.fromPlace,
                toPlace: action.payload.toPlace,
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
    // almacena la info del aeropuerto en el estado from
    if (action.type === LOAD_INFO) {
        return {
            ...state,
            from: action.payload
        }
    }
    if (action.type === LOAD_INFO_TO) {
        return {
            ...state,
            to: action.payload
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


    return state;
}

export default reducer;

import { GET_FROM } from "../actions/searchFlights"
import {GET_FLIGHTS} from "../actions/getFlights"
import {SORT_FLIGHT} from "../actions/sortFlight"
import {FILTER_AERO} from "../actions/filterAeroFligths"
import {FILTER_CARD_AERO} from "../actions/filterFligthCard"
import { LOAD_INFO } from "../actions/infoFlight"
import { LOAD_INFO_TO } from "../actions/infoFlightTo"
import { DETAIL_FLIGHTS } from "../actions/datailFlight"
import {FILTER_AERO_N} from '../actions/filterAeroFligths'
import {ESCALA} from '../actions/Escala'
import {FILTER_SCALA} from '../actions/filterScale'
import {FILTER_PRICE} from '../actions/searchPrice'
import {FILTER_TIME} from '../actions/filterTime'
import {BACKUP_FLIGHT} from '../actions/backupFlight'
import { GET_FLIGHTS_ONEWAY } from "../actions/getFlightsOneway"
import { RESET_FLIGHTS } from "../actions/resetFlights"

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
    aeroFiltro: [],
    escala: [],
    backFlights: [],
    flightsOneway:[],
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
    if (action.type === RESET_FLIGHTS) {
        return {
            ...state,
            flights: action.payload
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
    if (action.type === FILTER_AERO_N) {
       
            console.log('reducer filter', action.payload)
            return {
                ...state,
                aeroFiltro: action.payload
            };
        
    }

    if (action.type === GET_FLIGHTS_ONEWAY) {
        return {
            ...state,
            flightsOneway: action.payload
        };
    }

    if (action.type === SORT_FLIGHT) {
        return {
            ...state,
            flights: action.payload
        };
    }
    
    if (action.type === ESCALA) {
        return {
            ...state,
            escala: action.payload
        };
    }

    if (action.type === FILTER_SCALA) {
        return {
            ...state,
            flights: action.payload
        };
    }

    if (action.type === FILTER_PRICE) {
        return {
            ...state,
            flights: action.payload
        };
    }

    if (action.type === FILTER_TIME) {
        return {
            ...state,
            flights: action.payload
        };
    }
    if (action.type === BACKUP_FLIGHT) {
        return {
            ...state,
            backFlights: action.payload
        };
    }

    return state;
}

export default reducer;

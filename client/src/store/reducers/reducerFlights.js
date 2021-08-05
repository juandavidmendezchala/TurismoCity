import {GET_FROM, GET_FLIGHTS, LOAD_INFO, DETAIL_FLIGHTS, FROM, TO} from "../Consts/Consts.js"

const initialState = {
    from: [],
    detailFlights: {
        dateFrom: "",
        dateTo: "",
        category: "",
        adults: "",
        kids: "",
        babies: "",
        currency: "USD"
    },
    flights: [],
    // tipo de viaje ida o ida y vuelta
    // aeropuertos
    //fecha o fechas
    // pasajeros objeto que tenga adultos menore y ninios 
    //categoria 
}

const flightReducer = (state = initialState, action) => {
    if (action.type === DETAIL_FLIGHTS) {
        return {
            ...state,
            detailFlights: {
                dateFrom: action.payload.dateFrom,
                dateTo: action.payload.dateTo,
                category: action.payload.category,
                // adults: action.payload.adults,
                // kids: action.payload.kids,
                // babies: action.payload.babies,
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


    return state;
}

export default flightReducer;

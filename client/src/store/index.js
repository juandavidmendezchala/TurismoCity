import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import flightReducer from './reducers/reducerFlights.js'
import fromToReducer from './reducers/placeFromTo'
// comentar esta linea y la 9 si no tienen el redux dev tools instalado
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const reducer = combineReducers({ //agregar aquí los reducers 
    flightsList: flightReducer,
    fligtFromTo: fromToReducer
})


const store = createStore(
  reducer, composeEnhancers(applyMiddleware(thunk))
);

export default store;

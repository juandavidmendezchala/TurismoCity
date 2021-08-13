import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducerActivities } from "./reducers/reducerActivities";
import reducerFlights from "./reducers/reducerFlights";
import { userRegisterReducer, userSigninReducer } from "./reducers/reducerUser";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    flightInfo: localStorage.getItem('flightInfo') ? JSON.parse(localStorage.getItem('flightInfo')) : null
  }
}

const reducer = combineReducers({
  listFlights: reducerFlights,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  reducersActivities: reducerActivities,
})

const store = createStore(
  reducer, initialState, composeEnhancers(applyMiddleware(thunk))
);

export default store;

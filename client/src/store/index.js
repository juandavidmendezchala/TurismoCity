import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducerFlights from "./reducers/reducerFlights";
import reducerActivities from "./reducers/reducerActivities";
import { userRegisterReducer, userSigninReducer } from "./reducers/reducerUser";
import { activityDetailReducer, activityReducer } from './reducers/reducerActivity'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const initialState = {
  activity: {},
  userSignin: {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    flightInfo: localStorage.getItem('flightInfo') ? JSON.parse(localStorage.getItem('flightInfo')) : null
  }
}

const reducer = combineReducers({
  listFlights: reducerFlights,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userActivities: reducerActivities,
  activities: activityReducer,
  activity: activityDetailReducer
})

const store = createStore(
  reducer, initialState, composeEnhancers(applyMiddleware(thunk))
);

export default store;

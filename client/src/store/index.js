import { createStore, applyMiddleware, combineReducers } from "redux";
<<<<<<< HEAD
import reducers from "./reducers/reducers";

=======
>>>>>>> b1faec0012bd164b595edfabc41e4582e14b1f05
import thunk from "redux-thunk";
import reducerFlights from "./reducers/reducerFlights";
import { userRegisterReducer, userSigninReducer } from "./reducers/reducerUser";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  }
}

const reducer = combineReducers({
  listFlights: reducerFlights,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer
})

const store = createStore(
  reducer, initialState, composeEnhancers(applyMiddleware(thunk))
);

export default store;

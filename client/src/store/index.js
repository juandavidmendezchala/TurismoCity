import { createStore, applyMiddleware, combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/reducerFlights";
import reducers from "./reducers/reducers";
import reducer from "./reducers/reducerFlights";
import thunk from "redux-thunk";
import reducerFligts from "./reducers/reducerFlights";
import { userRegisterReducer, userSigninReducer } from "./reducers/reducerUser";
// comentar esta linea y la 9 si no tienen el redux dev tools instalado
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const initialState = {
    userSignin: {
      userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
}

const reducer = combineReducers({
  listFlights: reducerFligts,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer
})

const store = createStore(
  reducer, initialState, composeEnhancers(applyMiddleware(thunk))
);

export default store;

import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/reducers";
import thunk from "redux-thunk";
// comentar esta linea y la 9 si no tienen el redux dev tools instalado
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
  reducers, composeEnhancers(applyMiddleware(thunk))
);

export default store;

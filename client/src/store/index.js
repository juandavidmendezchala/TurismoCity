import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { REACT_APP_DEV_TOOLS } from "./Consts/Consts"
// import { reducerActivities } from "./reducers/reducerActivities";
import reducerFlights from "./reducers/reducerFlights";
import reducerPhoto from "./reducers/reducerPhoto";
import reducerActivities from "./reducers/reducerActivities";
import { userRegisterReducer, userSigninReducer } from "./reducers/reducerUser";
import { activityDetailReducer, activityReducer, activityFavoriteReducer,feedBackReducer } from './reducers/reducerActivity'
import { reducerActivitiesF } from "./reducers/reducerActivitiesF";
import { reducerMyActivities } from "./reducers/reducerMyActivities";
import { reducerFeedBack } from "./reducers/reducerFeedBack";
import { reducerActivitiesPrev } from "./reducers/reducerActivitiesPrev";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = REACT_APP_DEV_TOOLS === 'on' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (null || compose);

const initialState = {
  url: localStorage.getItem("urlImage")
    ? JSON.parse(localStorage.getItem("urlImage"))
    : null,
  activity: {},
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    flightInfo: localStorage.getItem("flightInfo")
      ? JSON.parse(localStorage.getItem("flightInfo"))
      : null,
  },
};

const reducer = combineReducers({
  listFlights: reducerFlights,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  reducersActivities: reducerActivitiesF,
  userActivities: reducerActivities,
  activities: activityReducer,
  activity: activityDetailReducer,
  url: reducerPhoto,
  addfavorites: activityFavoriteReducer,
  reducerMyActivities: reducerMyActivities,
  reducerFeedBack: reducerFeedBack,
  reducerActivitiesPrev: reducerActivitiesPrev,
  comments: feedBackReducer
})

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

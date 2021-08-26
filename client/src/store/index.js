import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
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
import { reducerScheduler } from "./reducers/reducersScheduler"
import { newsReducer } from "./reducers/reduceNews";
import { promoReducer } from './reducers/reducerPromo'
import { countriesReducer, userCountryReducer } from "./reducers/reducerCountries";
import {typeReducer} from "./reducers/reducerTypes"
// const composeEnhancers = process.env.DEV_TOOLS === 'on' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (null || compose);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const initialState = {
  userCountry: localStorage.getItem("userCountry") 
  ? JSON.parse(localStorage.getItem("userCountry")) 
  : "",
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
  comments: feedBackReducer,
  scheduled: reducerScheduler,
  news: newsReducer,
  promotions: promoReducer,
  countries: countriesReducer,
  userCountry: userCountryReducer,
  types: typeReducer
})

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

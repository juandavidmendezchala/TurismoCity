import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { REACT_APP_DEV_TOOLS } from "./Consts/Consts"
// import { reducerActivities } from "./reducers/reducerActivities";
import reducerFlights from "./reducers/reducerFlights";
import reducerPhoto from "./reducers/reducerPhoto";
import reducerActivities from "./reducers/reducerActivities";
import { userRegisterReducer, userSigninReducer } from "./reducers/reducerUser";
import { activityDetailReducer, activityReducer, activityFavoriteReducer, feedBackReducer, landingActivityReducer } from './reducers/reducerActivity'
import { reducerActivitiesF } from "./reducers/reducerActivitiesF";
import { reducerMyActivities } from "./reducers/reducerMyActivities";
import { reducerFeedBack } from "./reducers/reducerFeedBack";
import { reducerActivitiesPrev } from "./reducers/reducerActivitiesPrev";
import { reducerPurchase } from "./reducers/reducerPurchase";
import {reducerUserSeller} from './reducers/reducerUserAdmin'
import {reducerQuestion} from './reducers/reducerQuestion'
import { reducerScheduler } from "./reducers/reducersScheduler"
import { reducerWhishes } from "./reducers/reducerWhishes";
import { reducerSuppliers } from "./reducers/reducerSupplier";
import { newsReducer } from "./reducers/reduceNews";
import { promoReducer } from './reducers/reducerPromo'
import { countriesReducer, userCountryReducer } from "./reducers/reducerCountries";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = REACT_APP_DEV_TOOLS === 'on' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (null || compose);

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
  reducerPurchase,
  reducerUserSeller: reducerUserSeller,
  reducerQuestion: reducerQuestion,
  scheduled: reducerScheduler,
  whishes: reducerWhishes,
  infoSales: reducerSuppliers,
  news: newsReducer,
  promotions: promoReducer,
  countries: countriesReducer,
  userCountry: userCountryReducer,
  landingActivities: landingActivityReducer
})

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

import {
  WHISH_ADD,
  WHISH_GET,
  WHISH_GET_ALL,
  WHISH_REMOVE,
  WHISH_ACTIV_ALL,
  WHISH_REMOV_ACTIV,
  WHISH_FAIL,
} from "../Consts/Consts";

const initialState = {
  whishes: [],
  activities: [],
};

export const reducerWhishes = (state = initialState, action) => {
  switch (action.type) {
    case WHISH_GET:
      return { ...state, whishes: action.payload };
    case WHISH_ADD:
      return { ...state, whishes: state.whishes.concat(action.payload) };
    case WHISH_REMOVE:
      return {
        whishes: state.whishes.filter((whish) => whish.id !== action.payload),
      };
    case WHISH_GET_ALL:
      return { ...state, whishes: action.payload };
    case WHISH_ACTIV_ALL:
      return { ...state, activities: action.payload };
    case WHISH_REMOV_ACTIV:
      return {
        activities: state.activities.filter(
          (activ) => activ.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

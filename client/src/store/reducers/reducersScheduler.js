import {
  SCHED_ADD,
  SCHED_GET,
  SCHED_GET_ALL,
  SCHED_REMOVE,
  SCHED_FAIL,
} from "../Consts/Consts";

const initialState = {
  sched_activities: [],
};

export const reducerScheduler = (state = initialState, action) => {
  switch (action.type) {
    case SCHED_GET:
      return { ...state, sched_activities: action.payload };
    case SCHED_ADD:
      return { sched_activities: state.sched_activities.concat(action.payload) };
    case SCHED_REMOVE:
      return {
        sched_activities: state.sched_activities.filter(
          (sched) => sched.id !== action.payload
        ),
      };
    case SCHED_GET_ALL:
      return { ...state, sched_activities: action.payload };
    default:
      return state;
  }
};

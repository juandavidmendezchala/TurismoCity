import {
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  SIGN_IN_AUTH0,
  USER_LOGOUT_LOC
} from "../Consts/Consts";



export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true, userInfo: action.payload };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { ...state, loading: true }
    case USER_SIGNIN_SUCCESS:
      return { ...state,loading: false, userInfo: action.payload }
    case USER_SIGNIN_FAIL:
      return {...state, loading: false, error: action.payload }
    // case USER_LOGOUT:
    //     return {}
    case USER_LOGOUT_LOC:
      return { userInfo: {} }
    case SIGN_IN_AUTH0:
      return { userInfo: action.payload }
    default:
      return state;
  }
}

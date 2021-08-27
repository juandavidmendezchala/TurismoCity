import { REACT_APP_API } from "../Consts/Consts";

export const GET_ACTIVITY_ADMIN = "GET_ACTIVITY_ADMIN";

export const getActivityAdmin = () => {
    return function (dispatch) {
        return fetch(`${REACT_APP_API}/activity/adminTodas`)   
          .then(response => response.json())
          .then(json => {
            dispatch({ type: GET_ACTIVITY_ADMIN, payload: json })
          })
    }
}